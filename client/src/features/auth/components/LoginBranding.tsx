
import {
  ArrowUpRight,
  Activity,
  Laptop,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: Laptop,
    title: 'Asset Tracking',
    description:
      'Track, organize, and manage your IT equipment in one workspace.',
    color: 'text-sky-300',
    background: 'bg-sky-400/10',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Management',
    description:
      'Keep asset records organized with controlled user access.',
    color: 'text-emerald-300',
    background: 'bg-emerald-400/10',
  },
]

export default function LoginBranding() {
  return (
    <aside className="relative isolate hidden min-h-screen flex-col justify-between gap-12 overflow-hidden bg-[#081225] px-10 py-10 text-white lg:flex xl:px-16 xl:py-12">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0b1c38] via-[#081225] to-[#050b18]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Animated glows */}
        <div className="brand-glow absolute -top-48 -right-40 h-125 w-125 rounded-full bg-blue-600/25 blur-[110px]" />

        <div className="brand-glow absolute -bottom-52 -left-44 h-125 w-125 rounded-full bg-indigo-600/20 blur-[110px] [animation-delay:2s]" />

        {/* Decorative floating rings */}
        <div className="brand-float absolute top-[18%] right-[-100px] h-72 w-72 rounded-full border border-blue-400/10" />

        <div className="brand-float absolute top-[22%] right-[-65px] h-54 w-54 rounded-full border border-blue-400/10 [animation-delay:1s]" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-blue-950/30 to-transparent" />
      </div>

      {/* LOGO AND BRAND */}
      <div className="brand-enter relative z-10 flex items-center gap-3.5">

        <div className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white p-2.5 shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:shadow-blue-500/20">
          <img
            src="/logo.png" 
            alt="MI Asset logo"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            MI Asset<span className="text-blue-400">.</span>
          </h1>

          <p className="mt-0.5 text-xs font-medium tracking-wide text-slate-400">
            IT ASSET MANAGEMENT
          </p>
        </div>
      </div>

      {/* MAIN BRANDING CONTENT */}
      <div className="relative z-10 max-w-xl">

        {/* Small label */}
        <div className="brand-enter brand-delay-1 mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200 backdrop-blur-sm">
          <Sparkles size={15} className="text-blue-400" />
          <span>Smarter IT Asset Management</span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        </div>

        {/* Hero heading */}
        <div className="brand-enter brand-delay-2">
          <h2 className="text-4xl leading-[1.15] font-bold tracking-tight xl:text-5xl 2xl:text-[3.5rem]">
            Every asset.
            <br />
            Every detail.
            <br />
            <span className="bg-linear-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              One platform.
            </span>
          </h2>

          <p className="mt-7 max-w-md text-[15px] leading-7 text-slate-400">
            Take control of your IT infrastructure with a
            centralized workspace to track equipment,
            manage assignments, and streamline asset
            operations.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="brand-enter brand-delay-3 mt-10 grid grid-cols-2 gap-4">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-950/30"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-500/15" />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 ${feature.background} ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={22} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                  />
                </div>

                <div className="relative mt-5">
                  <h3 className="text-sm font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* FEATURE HIGHLIGHT */}
        <div className="brand-enter brand-delay-4 mt-8 flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3.5 backdrop-blur-sm">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
            <CheckCircle2 size={18} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-medium text-slate-200">
              One centralized workspace
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Asset visibility, organization, and control
            </p>
          </div>

          <Activity size={18} className="text-slate-600" />
        </div>
      </div>

      {/* FOOTER */}
      <div className="brand-enter brand-delay-4 relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} MI Asset
        </p>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          IT Management Platform
        </div>
      </div>
    </aside>
  )
}
