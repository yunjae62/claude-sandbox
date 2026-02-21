import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CT</span>
          </div>
          <span className="font-bold text-xl text-gray-900">클로톡</span>
        </a>

        {/* 데스크탑 네비게이션 */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">기능</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">사용법</a>
          <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">요금제</a>
        </div>

        {/* 데스크탑 CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">로그인</a>
          <a
            href="#pricing"
            className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
          >
            무료로 시작하기
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>기능</a>
          <a href="#how-it-works" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>사용법</a>
          <a href="#pricing" className="text-gray-700 font-medium" onClick={() => setIsOpen(false)}>요금제</a>
          <hr className="border-gray-100" />
          <a href="#" className="text-gray-600 font-medium">로그인</a>
          <a
            href="#pricing"
            className="bg-primary text-white font-semibold text-center py-2.5 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            무료로 시작하기
          </a>
        </div>
      )}
    </nav>
  );
}
