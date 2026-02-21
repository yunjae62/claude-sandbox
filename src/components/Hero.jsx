export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-secondary/10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* 텍스트 영역 */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            네이버 스마트스토어 전용 솔루션
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            적시에, 올바른 메시지를<br />
            <span className="text-primary">— 자동으로.</span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
            자동화된 고객 케어로 네이버 스마트스토어의 리뷰와 재구매율을 높이세요. 설정은 한 번, 효과는 매일.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
            >
              무료 체험 시작하기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold px-7 py-3.5 rounded-xl transition-colors text-base"
            >
              작동 방식 보기
            </a>
          </div>

          <p className="text-sm text-gray-400">신용카드 불필요 · 무료 플랜 영구 제공</p>
        </div>

        {/* 대시보드 목업 */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* 대시보드 헤더 */}
            <div className="bg-primary px-5 py-4 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
              <span className="text-white/80 text-xs font-medium">클로톡 대시보드</span>
            </div>

            {/* 대시보드 바디 */}
            <div className="p-5 bg-gray-50">
              {/* 지표 카드 */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "오늘 발송", value: "1,284", color: "text-primary" },
                  { label: "리뷰 수집", value: "48", color: "text-green-600" },
                  { label: "전환율", value: "32%", color: "text-secondary-dark" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-3 text-center shadow-sm border border-gray-100">
                    <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* 메시지 목록 */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-700">최근 발송 내역</span>
                  <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block animate-pulse" />
                    실시간
                  </span>
                </div>
                {[
                  { order: "#928471", event: "배송 완료", time: "방금 전", status: "발송됨" },
                  { order: "#928470", event: "구매 확정 요청", time: "2분 전", status: "발송됨" },
                  { order: "#928469", event: "리뷰 요청", time: "5분 전", status: "발송됨" },
                ].map((item) => (
                  <div key={item.order} className="px-4 py-3 flex items-center justify-between border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{item.order}</p>
                      <p className="text-xs text-gray-400">{item.event} · {item.time}</p>
                    </div>
                    <span className="text-xs bg-green-50 text-green-700 font-medium px-2 py-0.5 rounded-full">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
