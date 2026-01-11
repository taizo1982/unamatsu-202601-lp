export function IntroSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Partnership */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="px-6 py-3 bg-white rounded-full text-sm shadow-md border border-gray-100">
              近江鉄道 × アイビーコネクト
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground font-bold">
            〜縁結びの旅へ〜
          </p>

          {/* Catchcopy */}
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground">
            🎄今年中に"本気の出会い"を<br className="sm:hidden" />叶えるあなたへ
          </p>

          {/* Subcopy */}
          <p className="text-lg sm:text-xl text-foreground/80">
            💍県内企業で創る地域の縁
          </p>
        </div>
      </div>
    </section>
  );
}
