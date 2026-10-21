
import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Boxes,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  UserRound,
  CheckCircle2,
  Laptop,
  Activity,
} from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Connect your Django authentication API here later.
    // Do not log or store passwords in browser storage.
  }

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">

      {/* LEFT SIDE — BRANDING */}
      <div className="relative hidden min-h-screen overflow-hidden bg-slate-950 p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-125 w-125 rounded-full bg-indigo-600/20 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">
            <Boxes size={25} strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              MI Asset
            </h1>
            <p className="text-xs text-slate-400">
              IT Asset Management
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-lg">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300">
            <Activity size={14} />
            Smart IT Asset Management
          </div>

          <h2 className="text-4xl leading-tight font-bold tracking-tight xl:text-5xl">
            Every asset.
            <br />
            Every detail.
            <br />
            <span className="text-blue-400">
              One platform.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
            Simplify your IT operations with a centralized
            platform for tracking equipment, managing
            assignments, and monitoring asset lifecycles.
          </p>

          {/* Feature cards */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <Laptop className="mb-4 text-blue-400" size={25} />
              <h3 className="text-sm font-semibold">
                Asset Tracking
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Monitor your IT equipment in one place.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <ShieldCheck className="mb-4 text-emerald-400" size={25} />
              <h3 className="text-sm font-semibold">
                Secure Management
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-400">
                Manage assets with controlled user access.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} MI Asset</span>
          <span>IT Management Platform</span>
        </div>
      </div>

      {/* RIGHT SIDE — LOGIN FORM */}
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

            {/* Welcome */}
            <div className="mb-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                <LockKeyhole size={25} />
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your credentials to access your
                asset management workspace.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Username
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="username"
                    type="text"
                    required
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pr-4 pl-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={19}
                    className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 pr-12 pl-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                <p className="text-xs text-slate-500">
                  Authorized personnel only. Your activity may be logged.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-blue-600/30 active:scale-[0.99]"
              >
                Sign In
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Footer */}
            <div className="mt-10 border-t border-slate-100 pt-6 text-center">
              <p className="text-xs text-slate-400">
                Protected access · MI Asset Management System
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
