import { useState } from 'react'
import { Menu, X, Mail, BookOpen, User, Users, FlaskConical, FileText } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Team', href: '#team', icon: Users },
    { label: 'Projects', href: '#projects', icon: FlaskConical },
    { label: 'Publications', href: '#publications', icon: FileText },
    { label: 'Teaching', href: '#teaching', icon: BookOpen },
    { label: 'Contact', href: '#contact', icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold">L</div>
            <span className="font-semibold text-gray-900">Dr. Alex Lecturer</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors">
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
              Get in touch
            </a>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-blue-600 text-white text-center">
                Get in touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
