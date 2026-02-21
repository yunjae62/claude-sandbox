const steps = [
  {
    number: "01",
    title: "스토어 연결",
    description: "클릭 한 번으로 네이버 스마트스토어를 안전하게 연결하세요. 코딩이 필요 없습니다.",
    badge: "API 연결 성공 ✓",
    badgeColor: "bg-green-50 text-green-700",
    visual: (
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-2">
        <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-800">네이버 스마트스토어</p>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
              연결됨
            </p>
          </div>
        </div>
        <p className="text-xs text-center text-green-600 font-medium">✓ API 연결 성공</p>
      </div>
    ),
  },
  {
    number: "02",
    title: "트리거 설정",
    description: "'배송 완료' 또는 '구매 확정'과 같은 특정 이벤트를 선택하여 메시지를 트리거하세요.",
    badge: "이벤트 선택",
    badgeColor: "bg-secondary/20 text-secondary-dark",
    visual: (
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-2">
        {["배송 완료", "구매 확정", "리뷰 요청", "환불 요청"].map((trigger, i) => (
          <div
            key={trigger}
            className={`flex items-center gap-3 p-2.5 rounded-lg text-xs font-medium border ${
              i < 2
                ? "bg-primary/10 border-primary/20 text-primary"
                : "bg-gray-50 border-gray-100 text-gray-400"
            }`}
          >
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${i < 2 ? "border-primary bg-primary" : "border-gray-300"}`}>
              {i < 2 && <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>}
            </div>
            {trigger}
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "03",
    title: "자동 발송",
    description: "카카오톡 또는 SMS를 통해 손가락 하나 까딱하지 않아도 메시지가 자동으로 발송됩니다.",
    badge: "발송 중",
    badgeColor: "bg-primary/10 text-primary",
    visual: (
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-semibold text-gray-700">자동 발송</span>
          <span className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block animate-pulse" />
            발송 중
          </span>
        </div>
        {[
          { channel: "카카오톡", count: "284건" },
          { channel: "SMS", count: "47건" },
        ].map((item) => (
          <div key={item.channel} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
            <span className="text-xs text-gray-600 font-medium">{item.channel}</span>
            <span className="text-xs font-bold text-gray-800">{item.count}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">작동 방식</h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            한 번 설정하면, 매일 몇 시간씩 절약됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* 연결선 (데스크탑) */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-gray-200 z-0" />

          {steps.map((step, idx) => (
            <div key={step.number} className="flex flex-col gap-5 relative z-10">
              {/* 번호 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </div>
                <div className={`text-xs font-semibold px-3 py-1 rounded-full ${step.badgeColor}`}>
                  {step.badge}
                </div>
              </div>

              {/* 비주얼 */}
              {step.visual}

              {/* 텍스트 */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
