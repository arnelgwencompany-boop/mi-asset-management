
import { Boxes } from 'lucide-react'

import LoginBranding from '../components/LoginBranding'
import LoginForm from '../components/LoginForm'
import LoginFooter from '../components/LoginFooter'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">

      {/* Left panel */}
      <LoginBranding />

      {/* Right panel */}
      <div className="flex min-h-screen flex-col bg-white">

        {/* Mobile brand */}
        <div className="flex items-center gap-3 p-6 lg:hidden">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <Boxes size={22} />
          </div>
          <span className="text-lg font-bold text-slate-900">
            MI Asset
          </span>
        </div>

        <main className="flex flex-1 items-center justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-105">
            <LoginForm />
            <LoginFooter />
          </div>
        </main>

      </div>
    </div>
  )
}
