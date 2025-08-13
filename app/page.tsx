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
              <Link key={s.name} className='border rounded-lg hover:bg-teal-100 hover:text-slate-600 hover:border-slate-400 p-1' href={s.link} target="_blank">
                {s.icon}
              </Link>
            ))
          }
        </div>
        <div className="mt-3">
          <code>The website is still under construction</code>
        </div>
      </section>
    </>
  );
}
