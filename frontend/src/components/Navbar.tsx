import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="flex items-center gap-5 px-6 py-3.5">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-1.5 text-primary-foreground hover:bg-white/10"
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <NavLink to="/" className="font-semibold text-xl tracking-wide text-primary-foreground no-underline">
          Feilao
        </NavLink>

        <nav className="flex flex-grow items-center gap-6 ml-2 max-sm:hidden">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'font-medium no-underline ' +
              (isActive ? 'text-[#ffb37a] opacity-100' : 'text-[#e6d5c7] opacity-80 hover:opacity-100')
            }
          >
            Menu
          </NavLink>
        </nav>

        <button
          type="button"
          className="relative ml-auto inline-flex items-center justify-center rounded-md p-1.5 text-primary-foreground hover:bg-white/10"
          aria-label="Open cart"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ffb37a] px-[3px] text-[11px] font-bold leading-none text-primary">
            0
          </span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
