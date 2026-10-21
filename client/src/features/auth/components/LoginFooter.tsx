import { ShieldCheck } from 'lucide-react'

export default function LoginFooter() {
  return (
    <div className="mt-10 text-center">
      <style>{`
        @keyframes lf-footer-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lf-footer-in {
          opacity: 0;
          animation: lf-footer-in .6s cubic-bezier(.22,1,.36,1) .6s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .lf-footer-in { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Gradient divider */}
      <div
        aria-hidden="true"
        className="lf-footer-in mx-auto h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <div className="lf-footer-in group mx-auto mt-6 inline-flex cursor-default items-center gap-2.5 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/60 hover:shadow-md">
        {/* Live status dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        <ShieldCheck
          size={14}
          className="text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600"
        />

        <p className="text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-600">
          Protected access · MI Asset Management System
        </p>
      </div>
    </div>
  )
}