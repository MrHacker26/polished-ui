import { Bell, Calendar, Files, FolderClosed, Home, PieChart, Search, Users } from 'lucide-react'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="container pt-1">
      <div className="mb-11 text-3xl font-extrabold">Sidebar Layouts</div>
      <div className="mb-4 font-medium">
        Brand sidebar with header
        <span className="ml-4 rounded-lg bg-slate-100 p-1.5 text-xs font-semibold text-slate-600">Preview</span>
      </div>
      <div className="grid h-[700px] grid-cols-5">
        <div className="rounded-s-lg bg-[#4F46E5] p-4 pt-4 text-white">
          <Image src="/tailwind.png" width={35} height={20} alt="s" />
          <div className="space-y-2">
            <div className="flex content-center items-center justify-items-center space-x-2 pt-8 font-semibold">
              <div className="flex w-full items-center space-x-2 rounded-lg bg-[#4239CA] p-2">
                <Home className="text-white/80" />
                <div>Dashboard</div>
              </div>
            </div>
            <div className="flex content-center items-center justify-items-center space-x-2 font-semibold">
              <div className="group flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-[#4239CA]">
                <Users className="text-white/60 group-hover:text-white" />
                <div className="text-sm text-gray-300 group-hover:text-white">Team</div>
              </div>
            </div>
            <div className="flex content-center items-center justify-items-center space-x-2 font-semibold">
              <div className="group flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-[#4239CA]">
                <FolderClosed className="text-white/60 group-hover:text-white" />
                <div className="text-sm text-gray-300 group-hover:text-white">Projects</div>
              </div>
            </div>
            <div className="flex content-center items-center justify-items-center space-x-2 font-semibold">
              <div className="group flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-[#4239CA]">
                <Calendar className="text-white/60 group-hover:text-white" />
                <div className="text-sm text-gray-300 group-hover:text-white">Calender</div>
              </div>
            </div>
            <div className="flex content-center items-center justify-items-center space-x-2 font-semibold">
              <div className="group flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-[#4239CA]">
                <Files className="text-white/60 group-hover:text-white" />
                <div className="text-sm text-gray-300 group-hover:text-white">Documents</div>
              </div>
            </div>
            <div className="flex content-center items-center justify-items-center space-x-2 font-semibold">
              <div className="group flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-[#4239CA]">
                <PieChart className="text-white/60 group-hover:text-white" />
                <div className="text-sm text-gray-300 group-hover:text-white">Reports</div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-xs font-medium text-gray-300">Your teams</div>
          <div className=" pt-6">
            <div className="group flex w-full items-center space-x-2 rounded-lg p-2 hover:bg-[#4239CA]">
              <div className="w-6 rounded-lg bg-gray-400/30 p-2 text-xs">H</div>
              <div>Heroicons</div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="justify-between border p-4">
            <div className="flex space-x-2 ">
              <Search color="gray" size={20} className="opacity-70" />{' '}
              <div className="text-sm text-gray-400">Search...</div>
              <Bell color="gray" size={20} className="opacity-70" /> Bell
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
