const stats = [
  { value: "3,000+", label: "활성 스토어" },
  { value: "32%", label: "평균 매출 증가" },
  { value: "1M+", label: "발송된 메시지" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <p className="text-4xl md:text-5xl font-extrabold text-white">{stat.value}</p>
              <p className="text-sm font-semibold text-white/70 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
