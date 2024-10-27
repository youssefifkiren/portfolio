import { metainfo } from "@/lib/const";

export default function Home() {
  return (
    <main>
      <section className="pt-24">
        <div className="group inline-block overflow-hidden relative transition-element text-teal-100 font-semibold select-none">
          <h1 className="text-4xl inline-block transition-all duration-200 ease-in-out group-hover:-translate-y-full">{metainfo.name}</h1>
          <p aria-hidden="true" className="text-4xl inline-block transition-all duration-200 ease-in-out group-hover:translate-y-0 absolute left-0 top-0 translate-y-full">{metainfo.pseudo}</p>
        </div>
      </section>
      <section className="space-y-5">
        <span>
          <code>Yet another developer</code>
        </span>
        <p className="text-lg">
          {metainfo.description}
        </p>
        <span>
          <code>The website is still under construction</code>
        </span>
      </section>
    </main>
  );
}
