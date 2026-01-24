import { Card } from '@/components/ui/Card'
import { Icon } from '@/components/ui/Icon'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card variant="elevated" padding="lg" className="group">
      <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon name={icon} size="xl" className="font-bold" />
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </Card>
  )
}

export { FeatureCard }