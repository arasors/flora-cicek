import { stats } from "./data";

export function StatsSection() {
  return (
    <section aria-label="Flora Çiçek toptan satış özellikleri">
      <dl className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="text-4xl font-extrabold leading-10 text-[#a8782a]">
              {stat.value}
            </dt>
            <dd className="mt-1 text-base leading-6 text-[#6e665a]">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
