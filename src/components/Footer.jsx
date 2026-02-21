export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* 브랜드 */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">CT</span>
              </div>
              <span className="font-bold text-white text-lg">클로톡</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              네이버 스마트스토어 판매자를 위한 고객 메시지 자동화 솔루션
            </p>
          </div>

          {/* 링크 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold text-sm">서비스</h4>
              <a href="#features" className="hover:text-white transition-colors">기능</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">사용법</a>
              <a href="#pricing" className="hover:text-white transition-colors">요금제</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold text-sm">고객지원</h4>
              <a href="#" className="hover:text-white transition-colors">문의하기</a>
              <a href="#" className="hover:text-white transition-colors">도움말</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold text-sm">법적 고지</h4>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">서비스 이용약관</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center text-gray-600">
          © 2024 클로톡(ClauTalk). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
