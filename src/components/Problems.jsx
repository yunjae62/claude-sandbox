const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "타이밍 놓침",
    description: "너무 늦게 보내는 메시지는 고객의 관심을 영원히 잃는 것을 의미합니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "낮은 리뷰율",
    description: "수동 요청은 자동화된 메시지에 비해 훨씬 적은 리뷰로 이어집니다.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "낭비되는 관리 시간",
    description: "운송장 번호를 수동으로 복사하고 붙여넣으면 소중한 시간이 몇 시간씩 낭비됩니다.",
  },
];

export default function Problems() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            수동으로 하지 마세요.
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            스마트스토어 운영만으로도 충분히 힘듭니다. 수동 메시지 발송이 발목을 잡지 않도록 하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                {problem.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{problem.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
