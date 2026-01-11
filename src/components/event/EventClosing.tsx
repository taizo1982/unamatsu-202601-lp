import { Button } from "../ui/button";
import { Heart, MessageCircle } from "lucide-react";
import { CONTACT_URL, PARTY_DETAIL_URL } from "../../constants";

export function EventClosing() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/50 to-pink-50/50 relative overflow-hidden">
      {/* Decorative hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-10 left-10 w-12 h-12 text-accent/10 animate-pulse" />
        <Heart className="absolute top-32 right-20 w-8 h-8 text-primary/10 animate-pulse" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-20 left-1/4 w-10 h-10 text-accent/10 animate-pulse" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-32 right-1/3 w-6 h-6 text-primary/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-8 leading-tight font-bold">
            結婚したいと思った"今"が、<br />
            一番のチャンスです。
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              出会いを待つだけでなく、<br className="sm:hidden" />動き出す勇気があなたを変えます。
            </p>
            <p className="text-xl sm:text-2xl text-primary leading-relaxed">
              この冬、あなたの未来が動き出す<br />
              <span className="text-accent">"恋する列車"</span>に、乗りませんか？
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#ff84b2] hover:bg-[#ff6ba3] text-white px-12 py-8 rounded-full shadow-2xl text-xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={PARTY_DETAIL_URL}>
                今すぐ応募する
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-8 rounded-full shadow-lg text-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={CONTACT_URL} className="flex items-center justify-center gap-2">
                <MessageCircle className="w-6 h-6" />
                お問い合わせはこちら
              </a>
            </Button>
          </div>


        </div>
      </div>
    </section>
  );
}
