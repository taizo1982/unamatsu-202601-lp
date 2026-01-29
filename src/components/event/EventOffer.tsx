import { Button } from "../ui/button";
import { Calendar, MapPin, Users, Coins, Clock, Gift, Train } from "lucide-react";
import { PARTY_DETAIL_URL } from "../../constants";
import trainImageAvif from "../../../design/feature-hitsumabushi.avif";
import trainImageWebp from "../../../design/feature-hitsumabushi.webp";
import trainImageJpg from "../../../design/feature-hitsumabushi.jpg";

export function EventOffer() {
  const schedule = [
    { time: "13:00", activity: "彦根駅集合（受付・説明）" },
    { time: "13:30", activity: "出発！1対1の「トレイントーク」" },
    { time: "14:40", activity: "多賀大社前駅着 → 食べ歩きツアー＆チームアクティビティ" },
    { time: "15:00", activity: "縁結びスタンプラリー（ゲーム要素あり）" },
    { time: "15:30", activity: "レンタルカフェ「もりのみ」でプレゼント交換" },
    { time: "15:55", activity: "椅子取りゲーム式フリートーク" },
    { time: "16:30", activity: "解散・結果発表（LINE通知）" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
              🎄 2025年冬限定イベント
            </div>
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold">
              恋するクリスマストレイン<br />
              〜縁結びの旅へ〜
            </h2>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">開催日</p>
                  <p className="text-xl">2025年12月21日（日）</p>
                  <p className="text-sm text-foreground/80 mt-1">
                    13:00集合／13:30出発〜16:30
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">出発駅</p>
                  <p className="text-xl">近江鉄道 彦根駅</p>
                  <p className="text-sm text-foreground/80 mt-1">
                    → 米原駅 → 多賀大社前駅
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">参加費</p>
                  <p className="text-xl">男性6,000円／女性3,000円</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">対象</p>
                  <p className="text-xl">30〜40代 独身男女</p>
                  <p className="text-sm text-foreground/80 mt-1">各12名</p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl sm:text-3xl mb-8 text-center flex items-center justify-center gap-2 font-bold">
              <Clock className="w-8 h-8 text-primary" />
              旅のスケジュール
            </h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-xl text-primary flex-shrink-0 w-16">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground/90">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Train Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 bg-white">
            <picture>
              <source srcSet={trainImageAvif} type="image/avif" />
              <source srcSet={trainImageWebp} type="image/webp" />
              <img
                src={trainImageJpg}
                alt="近江鉄道 恋するクリスマストレイン"
                className="w-full h-auto object-contain"
              />
            </picture>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl p-8 shadow-2xl text-white text-center mb-12">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl mb-4">
              🎁 期間限定特典
            </h3>
            <p className="text-xl">
              11月中の登録で<span className="text-3xl mx-2">500円</span>引き！
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-8 rounded-full shadow-2xl text-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={PARTY_DETAIL_URL}>
                パーティーに参加する
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
