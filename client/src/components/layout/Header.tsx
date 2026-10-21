import { Bell, CircleUserRound } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <h1 className="font-semibold text-slate-800">
        IT Asset Management
      </h1>

      <div className="flex items-center gap-4">
        <Bell size={20} />
        <CircleUserRound size={28} />
      </div>
    </header>
  )
}