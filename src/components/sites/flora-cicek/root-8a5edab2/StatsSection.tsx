import { stats } from "./data";

export function StatsSection() {
  return (
    <section
      aria-label="Flora Çiçek toptan satış özellikleri"
      className="px-5 py-20 sm:px-8"
    >
      <dl className="mx-auto grid max-w-[1180px] grid-cols-1 border-y border-[#a8782a]/20 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-5 py-9 text-center sm:py-12 ${index > 0 ? "border-t border-[#a8782a]/20 sm:border-t-0 sm:border-l" : ""}`}
          >
            <dt className="text-4xl font-medium leading-none tracking-[-0.055em] text-[#a8782a] sm:text-5xl">
              {stat.value}
            </dt>
            <dd className="mt-3 text-xs font-semibold tracking-[0.08em] text-[#6e665a] uppercase sm:text-sm">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
