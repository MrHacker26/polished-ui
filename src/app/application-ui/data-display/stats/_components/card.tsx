import { cn } from '@/lib/utils'

export type CardProps = {
  title: string
  value: string
  percentage: string
  percentageColor?: 'green' | 'red'
  customStyles?: string
}

export default function Card({ title, value, percentage, customStyles, percentageColor }: CardProps) {
  const percentageColorToApply = percentageColor === 'red' ? 'text-red-500' : 'text-green-500'
  return (
    <div className={cn('flex w-full flex-col border px-8 py-10', customStyles)}>
      <div className="flex justify-between">
        <div className="pb-3 text-sm text-gray-500">{title}</div>
        <div className={cn('text-sm font-semibold text-gray-500', percentageColorToApply)}>{percentage}</div>
      </div>
      <div className="text-3xl font-medium">{value}</div>
    </div>
  )
}
