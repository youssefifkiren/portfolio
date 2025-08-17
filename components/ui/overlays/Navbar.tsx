"use client"
import { metainfo } from "@/lib/const"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navElemets = [
    {
      slug: "Home",
      link: "/"
    },
    {
      slug: "Projects",
      link: "#projects"
    },
    {
      slug: "Blog",
      link: "/blog"
    },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-stone-800/50 border-b border-stone-700">
      <nav className="flex items-center justify-between px-4 py-4 sm:px-6">
        <div className="hidden md:flex space-x-6">
          {navElemets.map((n, i) => (
            <Link key={i} href={n.link} className="text-teal-100 hover:text-teal-300 transition-colors">
              {n.slug}
            </Link>
          ))}
          
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-teal-100 hover:text-teal-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <a
          href={`mailto:${metainfo.email}`}
          className="inline-block text-sm  text-teal-100 hover:text-teal-300 transition-colors px-6 py-1 border border-teal-100/20 rounded-lg hover:border-teal-300/50"
        >
          {metainfo.email}
        </a>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-stone-800/95 backdrop-blur-sm border-b border-stone-700">
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navElemets.map((n, i) => (
                <Link key={i} href={n.link} className="text-teal-100 hover:text-teal-300 transition-colors" onClick={() => setIsOpen(false)}>
                  {n.slug}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar