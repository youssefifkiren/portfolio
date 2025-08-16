import { metainfo } from "@/lib/const"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-stone-800/50 border-b border-stone-700">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex space-x-6">
          <Link href="/" className="text-teal-100 hover:text-teal-300 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-teal-100 hover:text-teal-300 transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-teal-100 hover:text-teal-300 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-teal-100 hover:text-teal-300 transition-colors">
            Contact
          </Link>
        </div>
        <a
          href={`mailto:${metainfo.email}`}
          className="text-teal-100 hover:text-teal-300 transition-colors px-3 py-1 border border-teal-100/20 rounded-lg hover:border-teal-300/50"
        >
          {metainfo.email}
        </a>
      </nav>
    </header>
  )
}

export default Navbar