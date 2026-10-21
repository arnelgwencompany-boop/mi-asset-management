
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Laptop,
  Users,
  ArrowLeftRight,
  Wrench,
  BarChart3,
  Settings,
  Package,
} from 'lucide-react'

const navigation = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Assets', path: '/assets', icon: Laptop },
  { label: 'Employees', path: '/employees', icon: Users },
  { label: 'Assignments', path: '/assignments', icon: ArrowLeftRight },
  { label: 'Maintenance', path: '/maintenance', icon: Wrench },
  { label: 'Reports', path: '/reports', icon: BarChart3 },
  { label: 'Settings', path: '/settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 bg-slate-950 px-4 py-6 text-white lg:block">
      <div className="mb-10 flex items-center gap-3 px-3">
        <div className="rounded-xl bg-blue-600 p-2.5">
          <Package size={22} />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight">MI Asset</h1>
          <p className="text-xs text-slate-400">Management System</p>
        </div>
      </div>

      <p className="mb-3 px-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
        Workspace
      </p>

      <nav className="space-y-1">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-950/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <Icon size={19} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
