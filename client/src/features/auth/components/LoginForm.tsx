import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  LockKeyhole,
  UserRound,
  CheckCircle2,
} from 'lucide-react'

import LoginInput from './LoginInput'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Django authentication API integration goes here.
    // Do not log or store user passwords.
  }

  return (
    <>
      {/* Animations (scoped to this component) */}
      <style>{`
        @keyframes lf-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lf-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes lf-glow {
          0%, 100% { opacity: .35; transform: scale(1); }
          50%      { opacity: .7;  transform: scale(1.25); }
        }
        .lf-in {
          opacity: 0;
          animation: lf-fade-up .6s cubic-bezier(.22,1,.36,1) forwards;
        }
        .lf-float { animation: lf-float 4s ease-in-out infinite; }
        .lf-glow  { animation: lf-glow 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .lf-in, .lf-float, .lf-glow { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Welcome */}
      <div className="mb-10">
        <div className="lf-in group relative mb-7 inline-flex" style={{ animationDelay: '0ms' }}>
          {/* Pulsing glow behind the icon */}
          <div
            aria-hidden="true"
            className="lf-glow absolute inset-0 rounded-2xl bg-blue-500/40 blur-xl"
          />
          <div className="lf-float">
            <div className="relative flex h-14 w-14 cursor-default items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-blue-600/50">
              <LockKeyhole
                size={24}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:-rotate-6"
              />
            </div>
          </div>
        </div>

        <h2
          className="lf-in bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent"
          style={{ animationDelay: '100ms' }}
        >
          Welcome back
        </h2>

        <p
          className="lf-in mt-3 max-w-sm text-[15px] leading-7 text-slate-500"
          style={{ animationDelay: '180ms' }}
        >
          Enter your credentials to access your
          asset management workspace.
        </p>
      </div>

      {/* Login form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          className="lf-in transition-transform duration-300 focus-within:-translate-y-0.5"
          style={{ animationDelay: '260ms' }}
        >
          <LoginInput
            id="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            autoComplete="username"
            icon={UserRound}
            value={username}
            onChange={setUsername}
          />
        </div>

        <div
          className="lf-in transition-transform duration-300 focus-within:-translate-y-0.5"
          style={{ animationDelay: '340ms' }}
        >
          <LoginInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            icon={LockKeyhole}
            value={password}
            onChange={setPassword}
          />
        </div>

        <div
          className="lf-in group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-sm"
          style={{ animationDelay: '420ms' }}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
            <CheckCircle2 size={15} />
          </span>
          <p className="text-xs leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
            Authorized personnel only. Your activity may be logged.
          </p>
        </div>

        <div className="lf-in" style={{ animationDelay: '500ms' }}>
          <button
            type="submit"
            className="group relative flex h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-[length:200%_100%] bg-left text-sm font-semibold text-white shadow-lg shadow-blue-600/25 ring-1 ring-inset ring-white/10 transition-all duration-500 hover:-translate-y-0.5 hover:bg-right hover:shadow-xl hover:shadow-blue-600/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 active:translate-y-0 active:scale-[0.98]"
          >
            {/* Shine sweep on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/25 transition-all duration-700 group-hover:left-[150%]"
            />
            <span className="relative">Sign In</span>
            <ArrowRight
              size={18}
              className="relative transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </button>
        </div>
      </form>
    </>
  )
}