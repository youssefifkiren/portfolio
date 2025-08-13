import { metainfo } from "@/lib/const"

const Navbar = () => {
  return (
    <header>
        <nav>
            <span className="pt-2 mr-10 ml-auto text-teal-100 block w-fit text-2xl"><a href={`mailto:${metainfo.email}`}>{metainfo.email}</a></span>
        </nav>
    </header>
  )
}

export default Navbar