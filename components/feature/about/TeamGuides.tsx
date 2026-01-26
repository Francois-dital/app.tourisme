'use client'

import { Badge } from '@/components/ui/Badge'
import ScrollAnimation from '@/components/ui/ScrollAnimation'
import { useTranslation } from 'react-i18next'

interface Guide {
  name: string
  role: string
  image: string
  languages: Array<{ name: string; color: 'primary' | 'secondary' }>
}

export default function TeamGuides() {
  const { t } = useTranslation()

  const guides: Guide[] = [
    {
      name: 'Andry Rakoto',
      role: t('about.teamGuides.roles.senior'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtIVBraKfOJEd-BzGS0wGJ3OjYTU7Tqs-qoYKpQbWFN01g2YlOn_mBxtSSHfjjThiVcrgcjLl8ipHhOc7W4y7lGCjW52HFO4dwjtWfPrhvadfJOzJ1yi7b-wE_ukk0i-fKd2VWoVqXCeGtTYch7NhGN5X9Nr0GolYR-67FL8sPRQ7bKDqizj8F_xE5ewCOPHWOEs7oaHiHK9jIDshsLuDIht-gEgk-QVW1o-50h4445a34uxnZANnjnqQesxCU5tl2t31xdo4WL8xO',
      languages: [
        { name: 'English', color: 'primary' },
        { name: 'French', color: 'secondary' }
      ]
    },
    {
      name: 'Mialy Sahondra',
      role: t('about.teamGuides.roles.wildlife'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhUqWmPLQS7TyBeZtmCJAsNgVxtyTvDApeOjw-CFmsnsXrB_UoAj7VC61ScuBn41d54wlIf_TII1aRNRLCNEaEDa9LZicPuizG9rOZMmJdcCOa5C5SnSWVeJQa81PAj0H4wFJPKd9IEholPai1BkRLbb1XHb38798Sn-3ZVKV4vxcuF2xUKRluCTZ0il2Md4f1Jp5V1igc8ECT-1eJiGMRZqpsCke7FnrJLAtFUih2--0TnNspwKjl8BgQMtwyv4v_HIyTMFZYDvig',
      languages: [
        { name: 'English', color: 'primary' },
        { name: 'French', color: 'secondary' }
      ]
    },
    {
      name: 'Lova Tiana',
      role: t('about.teamGuides.roles.driving'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOXpFqnQ5_38TW9O4NhoYp_C1S3cBvqQMF4rwTYbH14-2fJGLLQJmvqKM7TWoX7yA1QKzDDlGx9jMuHo4sfSce9aeQv0CbUV1Iv15QUfc_vv255fLm2adYtKFl230KYq0TdyDdsdki5cYGq_nTNskOq3mrgZZjX2PcaqJb3ivJBAZpSIZhByxuJ2Tqc9AcBTdt6EPsEiTwkJiDZfQ-Dm-tiSNaKvpey3xdgQptJFFotMzDjq7RM8zEl2dFjOgl8-uNl-WVTDdPTlgj',
      languages: [
        { name: 'English', color: 'primary' }
      ]
    },
    {
      name: 'Heritiana Solo',
      role: t('about.teamGuides.roles.cultural'),
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtFJV47vZRDXo7szu_0jhbTthK3Y0ZJILCm1z2jq6mTXxv5n0u8zU3h2ySd3ruh8Zs50LVMzbOQvXvo57cU3Vo8xCMzhKhSVnjdw1nWHbsOOfGJ3Sjwq6eB6275M5SRkEZjGfEoF1_h2Cstzh5SB0K-OT_ryzl60cEHhO9MUwbc8E9uPbOhDT07T9krd0CiI1cFgx22uMGfFn0N7XprskMBpCmCeIPC0xOczjERvizPuyL_mFyTzAWPW0oYC-QSP8ZB4wv2uGo5igK',
      languages: [
        { name: 'French', color: 'secondary' },
        { name: 'Italian', color: 'primary' }
      ]
    }
  ]

  return (
    <section className="py-24 px-6 md:px-20 lg:px-24 xl:px-32">
      <ScrollAnimation animation="fade" delay={100}>
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-[#111811] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            {t('about.teamGuides.title')}
          </h2>
          <span className="hidden md:block text-primary font-medium">
            {t('about.teamGuides.subtitle')}
          </span>
        </div>
      </ScrollAnimation>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {guides.map((guide, index) => (
          <ScrollAnimation 
            key={index}
            animation="card" 
            delay={200 + (index * 100)}
          >
            <div className="flex flex-col gap-3 group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gray-200 shadow-sm relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={guide.image}
                  alt={`Portrait of ${guide.name}`}
                />
                <div className="absolute top-3 left-3 flex gap-1">
                  {guide.languages.map((lang, langIndex) => (
                    <Badge
                      key={langIndex}
                      variant={lang.color}
                      size="sm"
                      className="text-[10px] px-2 py-0.5"
                    >
                      {lang.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold">{guide.name}</h4>
                <p className="text-sm text-[#618961] dark:text-white/60">{guide.role}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}