import logoAvif from "../assets/b29d72b932bc03012c283d26e62b9d662d1c5861.avif";
import logoWebp from "../assets/b29d72b932bc03012c283d26e62b9d662d1c5861.webp";
import logoPng from "../assets/b29d72b932bc03012c283d26e62b9d662d1c5861.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3><picture>
                <source srcSet={logoAvif} type="image/avif" />
                <source srcSet={logoWebp} type="image/webp" />
                <img
                  src={logoPng}
                  alt="I be connect"
                  className="h-8 w-auto brightness-0 invert"
                />
              </picture></h3>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="https://ibeconnect.net/about/" className="hover:text-accent transition-colors">初めての方へ</a></li>
              <li><a href="https://ibeconnect.net/qa/" className="hover:text-accent transition-colors">よくある質問</a></li>
              <li><a href="https://ibeconnect.net/party/" className="hover:text-accent transition-colors">パーティー一覧</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>電話：090-6231-1582</li>
              <li>受付時間：10:00〜20:00（年中無休）</li>
              <li><a href="https://ibeconnect.net/contact/" className="hover:text-accent transition-colors">お問い合わせフォーム</a></li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <span className="text-xs">#信頼</span>
                  <span className="text-xs">#真剣</span>
                  <span className="text-xs">#安心</span>
                  <span className="text-xs">#地域密着</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm text-white/80">
            <a href="https://ibeconnect.net/policy/" className="hover:text-accent transition-colors">プライバシーポリシー</a>
            <a href="https://ibeconnect.net/terms/" className="hover:text-accent transition-colors">利用規約</a>
            <a href="https://ibeconnect.net/tokusyo/" className="hover:text-accent transition-colors">特定商取引法に基づく表記</a>
            <a href="https://ibeconnect.net/outline/" className="hover:text-accent transition-colors">会社概要</a>
          </div>
          <p className="text-sm text-white/60">
            © 2025 真剣婚活サポート. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
