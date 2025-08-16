import { metainfo, socials } from "@/lib/const";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="pt-24">
        <div className="group inline-block overflow-hidden relative transition-element text-teal-100 font-semibold select-none">
          <h1 className="text-4xl inline-block transition-all duration-200 ease-in-out group-hover:-translate-y-full">{metainfo.name}</h1>
          <p aria-hidden="true" className="text-4xl inline-block transition-all duration-200 ease-in-out group-hover:translate-y-0 absolute left-0 top-0 translate-y-full">{metainfo.pseudo}</p>
        </div>
      </section>
      <section className="space-y-5">
        <span>
          <code>{metainfo.slug}</code>
        </span>
        <p className="md:text-lg">
          {metainfo.description}
        </p>
        <div className="flex space-x-4 mb-5">
          {
            socials.map((s) => (
              <Link
                key={s.name}
                className='border rounded-lg p-1 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/20 hover:bg-teal-100 hover:text-slate-600 hover:border-slate-400'
                href={s.link}
                target="_blank"
              >
                {s.icon}
              </Link>
            ))
          }
        </div>
        <div className="mt-6 p-3 border border-teal-400/30 rounded-lg bg-teal-900/10 backdrop-blur-sm">
          <div className="flex items-center space-x-2 text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span className="font-mono text-sm">The website is still under construction</span>
          </div>
        </div>
      </section>
    </>
  );
}
