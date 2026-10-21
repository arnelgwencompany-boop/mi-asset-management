import { useState } from 'react'
import {
  Eye,
  EyeOff,
  type LucideIcon,
} from 'lucide-react'

interface LoginInputProps {
  id: string
  label: string
  type: 'text' | 'password'
  placeholder: string
  value: string
  onChange: (value: string) => void
  icon: LucideIcon
  autoComplete?: string
}

export default function LoginInput({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  autoComplete,
}: LoginInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  const inputType =
    isPassword && showPassword ? 'text' : type

  return (
    <div className="group/field">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700 transition-colors duration-200 group-focus-within/field:text-blue-600"
      >
        {label}
      </label>

      <div className="group/input relative">
        {/* Animated gradient glow behind the field on focus */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-0.5 rounded-[14px] bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-blue-500/0 opacity-0 blur-md transition-all duration-500 group-focus-within/input:from-blue-500/30 group-focus-within/input:via-indigo-500/30 group-focus-within/input:to-blue-500/30 group-focus-within/input:opacity-100"
        />

        <Icon
          size={19}
          className="pointer-events-none absolute top-1/2 left-4 z-10 -translate-y-1/2 text-slate-400 transition-all duration-300 group-hover/input:text-slate-500 group-focus-within/input:scale-110 group-focus-within/input:text-blue-600"
        />

        <input
          id={id}
          type={inputType}
          required
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="relative h-13 w-full rounded-xl border border-slate-200 bg-slate-50/80 pr-12 pl-12 text-sm text-slate-900 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 placeholder:transition-all placeholder:duration-300 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:shadow-md focus:ring-4 focus:ring-blue-500/10 focus:placeholder:translate-x-1 focus:placeholder:opacity-60"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={
              showPassword ? 'Hide password' : 'Show password'
            }
            className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 active:scale-90"
          >
            {/* Both icons stacked; they cross-fade and rotate on toggle */}
            <span className="relative block h-[19px] w-[19px]">
              <Eye
                size={19}
                className={`absolute inset-0 transition-all duration-300 ${
                  showPassword
                    ? 'scale-50 rotate-90 opacity-0'
                    : 'scale-100 rotate-0 opacity-100'
                }`}
              />
              <EyeOff
                size={19}
                className={`absolute inset-0 transition-all duration-300 ${
                  showPassword
                    ? 'scale-100 rotate-0 opacity-100'
                    : 'scale-50 -rotate-90 opacity-0'
                }`}
              />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}