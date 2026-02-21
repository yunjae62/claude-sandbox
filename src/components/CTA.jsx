export default function CTA() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          스토어를 성장시킬 준비가 되셨나요?
        </h2>
        <p className="text-lg text-gray-500 max-w-xl">
          지금 수천 명의 스마트 판매자와 함께 고객 소통을 자동화하세요.
        </p>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-lg shadow-primary/30"
        >
          지금 자동화 시작하기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <p className="text-sm text-gray-400">신용카드 불필요 · 언제든지 취소 가능</p>
      </div>
    </section>
  );
}
