import { UserPlus, Users, Calendar, Heart, Sparkles } from "lucide-react";

export function SolutionZone() {
  const steps = [
    {
      icon: UserPlus,
      title: "登録",
      description: "下記フォームから応募"
    },
    {
      icon: Users,
      title: "マッチング",
      description: "トレイントーク＆チームアクティビティで自然な出会い"
    },
    {
      icon: Calendar,
      title: "お見合い調整",
      description: "公式LINEで日時と場所を調整"
    },
    {
      icon: Heart,
      title: "交際サポート",
      description: "専任カウンセラーがフォロー"
    },
    {
      icon: Sparkles,
      title: "成婚",
      description: "アイビーコネクトの支援で幸せなゴールへ"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4 text-center font-bold">
            あなたの婚活を全力サポートします
          </h2>
          <p className="text-center text-lg text-foreground/70 mb-16">
            🎯 婚活サポートの流れ
          </p>

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-yellow-500 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}>
                      <div className={`inline-block bg-gradient-to-br ${
                        index === 0 ? "from-primary to-blue-400" :
                        index === 1 ? "from-accent to-pink-400" :
                        index === 2 ? "from-purple-400 to-purple-600" :
                        index === 3 ? "from-red-400 to-red-600" :
                        "from-yellow-400 to-yellow-600"
                      } text-white rounded-2xl px-6 py-4 shadow-lg`}>
                        <h3 className="text-2xl mb-2">{step.title}</h3>
                        <p className="text-sm opacity-90">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl border-4 border-primary">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
