'use client'

import { Mail, MousePointerClick, Users } from 'lucide-react'
import Card, { CardProps } from './_components/card'

const cardData: CardProps[] = [
  { title: 'Revenue', value: '$405,091.00', percentage: '+4.75%', customStyles: 'rounded-tl-lg' },
  {
    title: 'Overdue invoices',
    value: '$12,787.00',
    percentage: '+54.02%',
    customStyles: 'border-l-0 ',
    percentageColor: 'red',
  },
  { title: 'Outstanding invoices', value: '$245,988.00', percentage: '-1.39%', customStyles: 'border-l-0' },
  {
    title: 'Expenses',
    value: '$ 1,250',
    percentage: '+10.18%',
    percentageColor: 'red',
    customStyles: 'rounded-tr-lg border-l-0',
  },
]

const StatsPage = () => {
  return (
    <div className="container space-y-10">
      <div className="text-3xl font-bold">Stats</div>
      <div>
        <div className="mb-4 font-medium">
          With trending
          <span className="ml-4 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
        </div>

        <div className="flex">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 font-medium">
          <div className="mb-4">
            Simple in cards
            <span className="ml-4 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-12">
            <div className="mb-1 font-medium">Last 30 days</div>
            <div className="mb-4 grid grid-cols-3 justify-between gap-x-4">
              <div className="space-y-1 rounded-lg border bg-white p-6">
                <div className="text-sm text-gray-500">Total Subscribers</div>
                <div className="text-3xl font-semibold">71,897</div>
              </div>
              <div className="space-y-1 rounded-lg border bg-white p-6">
                <div className="text-sm text-gray-500">Avg. Open Rate</div>
                <div className="text-3xl font-semibold">58.16%</div>
              </div>
              <div className="space-y-1 rounded-lg border bg-white p-6">
                <div className="text-sm text-gray-500">Avg. Click Rate</div>
                <div className="text-3xl font-semibold">24.57%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 font-medium">
          <div className="mb-4">
            With brand icon
            <span className="ml-4 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-12">
            <div className="mb-1 font-medium">Last 30 days</div>
            <div className="mb-4 grid grid-cols-3 justify-between gap-x-4">
              <div className="flex flex-col rounded-lg border bg-white ">
                <div className="flex space-x-4 space-y-1 p-6">
                  <Users className=" rounded-md bg-[#6367F0] p-2 text-white" size={46} />
                  <div>
                    <div className="text-sm text-gray-500">Total Subscribers</div>
                    <div className="text-2xl font-bold">
                      71,897
                      <span className="ml-2 text-sm text-green-500"> &uarr;122</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <button className="text-sm text-blue-500">View all</button>
                </div>
              </div>

              <div className="flex flex-col rounded-lg border bg-white ">
                <div className="flex space-x-4 space-y-1 p-6">
                  <Mail className="rounded-md bg-[#6367F0] p-2 text-white" size={46} />
                  <div>
                    <div className="text-sm text-gray-500">Avg. Open Rate</div>
                    <div className="text-2xl font-bold">
                      58.16%
                      <span className="ml-2 text-sm text-green-500"> &uarr;5.4%</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <button className="text-sm text-blue-500">View all</button>
                </div>
              </div>

              <div className="flex flex-col rounded-lg border bg-white">
                <div className="flex space-x-4 space-y-1 p-6">
                  <MousePointerClick className="rounded-md bg-[#6367F0] p-2 text-white" size={46} />
                  <div>
                    <div className="text-sm text-gray-500">Avg. Click Rate</div>
                    <div className="text-2xl font-bold">
                      24.57%
                      <span className="ml-2 text-sm text-red-500"> &darr;3.2%</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <button className="text-sm text-blue-500">View all</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-4 font-medium">
          <div className="mb-4">
            With shared borders
            <span className="ml-4 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
          </div>
          <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-12">
            <div className="mb-1 font-medium">Last 30 days</div>
            <div className="mb-4 grid grid-cols-3 justify-between">
              <div className="space-y-1 rounded-lg border bg-white p-6">
                <div className="text-base text-gray-600">Total Subscribers</div>
                <div className="flex justify-between">
                  <div className="text-2xl font-semibold text-blue-600">
                    71,897
                    <span className="ml-2 text-sm text-gray-500">from 70,946</span>
                  </div>
                  <div className="flex h-6 items-center justify-items-center rounded-xl bg-green-100 px-2 text-sm text-green-500">
                    <div>
                      &uarr; <span className="text-gray-600">12%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 rounded-lg border bg-white p-6">
                <div className="text-base text-gray-600">Avg. Open Rate</div>
                <div className="flex justify-between">
                  <div className="text-2xl font-semibold text-blue-600">
                    58.16%
                    <span className="ml-2 text-sm text-gray-500">from 56.14%</span>
                  </div>
                  <div className="flex h-6 items-center justify-items-center rounded-xl bg-green-100 px-2 text-sm text-green-500">
                    <div>
                      &uarr; <span className="text-gray-600">2.02%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1 rounded-lg border bg-white p-6">
                <div className="text-base text-gray-600">Avg. Click Rate</div>
                <div className="flex justify-between">
                  <div className="text-2xl font-semibold text-blue-600">
                    24.57%
                    <span className="ml-2 text-sm text-gray-500">from 28.62%</span>
                  </div>
                  <div className="flex h-6 items-center justify-items-center rounded-xl bg-red-100 px-2 text-sm text-green-500">
                    <div>
                      &darr; <span className="text-gray-600">4.05%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPage
