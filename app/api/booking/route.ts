import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { toursData } from '@/data/tours'
import { destinationsData } from '@/data/destinations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      email,
      phone,
      nationality,
      selectionType,
      selectedCircuit,
      selectedDestination,
      travelDates,
      numberOfTravelers,
      message,
      tourPrice,
      tourDuration,
      type
    } = body

    // Récupérer les détails complets du tour ou de la destination
    let selectedItem = null
    let itemDetails = ''
    
    if (selectionType === 'tours' && selectedCircuit) {
      selectedItem = toursData.find(tour => tour.title === selectedCircuit)
      if (selectedItem) {
        itemDetails = `
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #4CAF50;">
            <h3 style="color: #2d5a2d; margin: 0 0 15px 0; font-size: 18px;">🎯 Détails du Circuit</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333; width: 30%;">Titre:</td><td style="padding: 5px 0; color: #666;">${selectedItem.title}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Sous-titre:</td><td style="padding: 5px 0; color: #666;">${selectedItem.subtitle}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Durée:</td><td style="padding: 5px 0; color: #666;">${selectedItem.duration}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Région:</td><td style="padding: 5px 0; color: #666;">${selectedItem.region}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Catégorie:</td><td style="padding: 5px 0; color: #666;">${selectedItem.category}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Prix Solo:</td><td style="padding: 5px 0; color: #666;">${selectedItem.price.solo}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Prix Groupe:</td><td style="padding: 5px 0; color: #666;">${selectedItem.price.group}</td></tr>
            </table>
            <div style="margin-top: 15px;">
              <h4 style="color: #2d5a2d; margin: 0 0 10px 0;">Description:</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">${selectedItem.description}</p>
            </div>
            <div style="margin-top: 15px;">
              <h4 style="color: #2d5a2d; margin: 0 0 10px 0;">Inclus:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                ${selectedItem.included.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}
              </ul>
            </div>
            <div style="margin-top: 15px;">
              <h4 style="color: #2d5a2d; margin: 0 0 10px 0;">Non inclus:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                ${selectedItem.excluded.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        `
      }
    } else if (selectionType === 'destinations' && selectedDestination) {
      selectedItem = destinationsData.find(dest => dest.name === selectedDestination)
      if (selectedItem) {
        itemDetails = `
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #FF9800;">
            <h3 style="color: #e65100; margin: 0 0 15px 0; font-size: 18px;">🏝️ Détails de la Destination</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333; width: 30%;">Nom:</td><td style="padding: 5px 0; color: #666;">${selectedItem.name}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Sous-titre:</td><td style="padding: 5px 0; color: #666;">${selectedItem.subtitle}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Région:</td><td style="padding: 5px 0; color: #666;">${selectedItem.region}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Catégorie:</td><td style="padding: 5px 0; color: #666;">${selectedItem.category}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Durée recommandée:</td><td style="padding: 5px 0; color: #666;">${selectedItem.duration}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Difficulté:</td><td style="padding: 5px 0; color: #666;">${selectedItem.difficulty}</td></tr>
              <tr><td style="padding: 5px 0; font-weight: bold; color: #333;">Meilleure période:</td><td style="padding: 5px 0; color: #666;">${selectedItem.bestTime}</td></tr>
            </table>
            <div style="margin-top: 15px;">
              <h4 style="color: #e65100; margin: 0 0 10px 0;">Description:</h4>
              <p style="margin: 0; color: #666; line-height: 1.6;">${selectedItem.description}</p>
            </div>
            <div style="margin-top: 15px;">
              <h4 style="color: #e65100; margin: 0 0 10px 0;">Points forts:</h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                ${selectedItem.highlights.map(highlight => `<li style="margin-bottom: 5px;">${highlight}</li>`).join('')}
              </ul>
            </div>
          </div>
        `
      }
    }

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Contenu de l'email
    const isBooking = type === 'booking'
    const subject = isBooking 
      ? `🎯 NOUVELLE RÉSERVATION - ${selectedCircuit || 'Circuit personnalisé'}`
      : `📧 NOUVELLE DEMANDE - ${selectedCircuit || 'Demande générale'}`

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2d5a2d; margin: 0; font-size: 24px;">
              ${isBooking ? '🎯 NOUVELLE RÉSERVATION' : '📧 NOUVELLE DEMANDE'}
            </h1>
            <p style="color: #666; margin: 10px 0 0 0;">ELMADAGASCAR Tours</p>
          </div>

          <div style="background-color: #f0f8f0; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="color: #2d5a2d; margin: 0 0 15px 0; font-size: 18px;">
              ${isBooking ? 'Détails de la Réservation' : 'Informations du Contact'}
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 40%;">Nom complet:</td>
                <td style="padding: 8px 0; color: #666;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Téléphone:</td>
                <td style="padding: 8px 0; color: #666;">${phone}</td>
              </tr>
              ` : ''}
              ${nationality ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Nationalité:</td>
                <td style="padding: 8px 0; color: #666;">${nationality}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${itemDetails}

          ${travelDates || numberOfTravelers ? `
          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #e65100; margin: 0 0 15px 0; font-size: 16px;">📅 Détails du Voyage</h3>
            ${travelDates ? `<p style="margin: 0 0 10px 0; color: #333;"><strong>Dates:</strong> ${travelDates}</p>` : ''}
            ${numberOfTravelers ? `<p style="margin: 0; color: #333;"><strong>Nombre de voyageurs:</strong> ${numberOfTravelers}</p>` : ''}
          </div>
          ` : ''}

          ${message ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px;">💬 Message</h3>
            <p style="margin: 0; color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #999; font-size: 14px;">
              Email envoyé automatiquement depuis le site ELMADAGASCAR Tours
            </p>
            <p style="margin: 5px 0 0 0; color: #999; font-size: 12px;">
              ${new Date().toLocaleString('fr-FR', { timeZone: 'Indian/Antananarivo' })} (Heure de Madagascar)
            </p>
          </div>
        </div>
      </div>
    `

    // Envoi de l'email à ELMADAGASCAR
    await transporter.sendMail({
      from: `"ELMADAGASCAR Tours" <${process.env.SMTP_USER}>`,
      to: 'elmadagascar1@gmail.com',
      subject: subject,
      html: htmlContent,
      replyTo: email
    })

    // Email de confirmation pour le client
    const clientSubject = isBooking 
      ? `✅ Confirmation de réservation - ELMADAGASCAR Tours`
      : `✅ Confirmation de votre demande - ELMADAGASCAR Tours`

    const clientHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2d5a2d; margin: 0; font-size: 24px;">
              ✅ ${isBooking ? 'Réservation Confirmée' : 'Demande Reçue'}
            </h1>
            <p style="color: #666; margin: 10px 0 0 0;">ELMADAGASCAR Tours</p>
          </div>

          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #4CAF50;">
            <h2 style="color: #2d5a2d; margin: 0 0 15px 0; font-size: 18px;">
              Bonjour ${fullName},
            </h2>
            <p style="margin: 0; color: #666; line-height: 1.6;">
              ${isBooking 
                ? `Nous avons bien reçu votre demande de réservation pour "${selectedCircuit || selectedDestination}". Notre équipe va examiner votre demande et vous contacter dans les plus brefs délais.`
                : `Nous avons bien reçu votre demande. Notre équipe va examiner votre message et vous contacter dans les plus brefs délais.`
              }
            </p>
          </div>

          ${itemDetails}

          <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #e65100; margin: 0 0 15px 0; font-size: 16px;">📞 Nos Coordonnées</h3>
            <p style="margin: 0 0 10px 0; color: #333;"><strong>Téléphone:</strong> +261 34 31 416 49</p>
            <p style="margin: 0 0 10px 0; color: #333;"><strong>Email:</strong> elmadagascar1@gmail.com</p>
            <p style="margin: 0; color: #333;"><strong>WhatsApp:</strong> +261 34 31 416 49</p>
          </div>

          <div style="background-color: #f0f8f0; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #2d5a2d; margin: 0 0 15px 0; font-size: 16px;">🕒 Prochaines Étapes</h3>
            <ul style="margin: 0; padding-left: 20px; color: #666;">
              <li style="margin-bottom: 8px;">Notre équipe va examiner votre demande</li>
              <li style="margin-bottom: 8px;">Nous vous contacterons dans les 24 heures</li>
              <li style="margin-bottom: 8px;">Nous finaliserons ensemble les détails de votre voyage</li>
              <li>Vous recevrez un itinéraire détaillé et personnalisé</li>
            </ul>
          </div>

          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
            <p style="margin: 0 0 10px 0; color: #2d5a2d; font-size: 16px; font-weight: bold;">
              Merci de nous faire confiance pour votre aventure à Madagascar !
            </p>
            <p style="margin: 0; color: #999; font-size: 12px;">
              ${new Date().toLocaleString('fr-FR', { timeZone: 'Indian/Antananarivo' })} (Heure de Madagascar)
            </p>
          </div>
        </div>
      </div>
    `

    // Envoi de l'email de confirmation au client
    await transporter.sendMail({
      from: `"ELMADAGASCAR Tours" <${process.env.SMTP_USER}>`,
      to: email,
      subject: clientSubject,
      html: clientHtmlContent
    })

    return NextResponse.json({ 
      success: true, 
      message: isBooking ? 'Réservation envoyée avec succès' : 'Message envoyé avec succès' 
    })

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi' },
      { status: 500 }
    )
  }
}