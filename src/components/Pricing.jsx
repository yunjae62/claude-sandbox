const plans = [
  {
    name: "스타터",
    price: "₩0",
    period: "/월",
    description: "막 시작하는 신규 판매자를 위한 플랜",
    features: ["월 500건 메시지", "기본 트리거", "이메일 지원", "기본 분석"],
    cta: "무료로 시작",
    highlighted: false,
  },
  {
    name: "프로",
    price: "₩29,000",
    period: "/월",
    description: "빠른 성장에 필요한 모든 것",
    features: ["무제한 메시지", "고급 분석", "우선 지원", "맞춤 템플릿", "ROI 추적"],
    cta: "무료 체험 시작",
    highlighted: true,
    badge: "가장 인기",
  },
  {
    name: "엔터프라이즈",
    price: "맞춤 요금",
    period: "",
    description: "대용량 파워 셀러를 위한 플랜",
    features: ["프로의 모든 기능", "전담 매니저", "API 접근", "맞춤형 SLA"],
    cta: "영업팀 문의",
    highlighted: false,
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            간단하고 투명한 요금제
          </h2>
          <p className="mt-3 text-lg text-gray-500 max-w-xl mx-auto">
            스토어 성장 단계에 맞는 플랜을 선택하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-2xl md:scale-105 z-10"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {/* 인기 배지 */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-gray-900 font-bold text-xs px-4 py-1.5 rounded-full shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* 플랜 이름 & 설명 */}
              <div>
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-white/70" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* 가격 */}
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm mb-1 ${plan.highlighted ? "text-white/60" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* CTA 버튼 */}
              <a
                href="#"
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? "bg-secondary hover:bg-secondary-light text-gray-900"
                    : "bg-primary/10 hover:bg-primary/20 text-primary"
                }`}
              >
                {plan.cta}
              </a>

              {/* 기능 목록 */}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={plan.highlighted ? "text-secondary" : "text-primary"}>
                      <CheckIcon />
                    </span>
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
