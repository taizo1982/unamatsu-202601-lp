import { UserPlus, Search, MessageCircle, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "無料登録・カウンセリング",
    description: "まずはお気軽にご登録ください。専任のカウンセラーがあなたの希望を丁寧にヒアリングします。",
  },
  {
    icon: Search,
    number: "02",
    title: "理想の相手をマッチング",
    description: "12,000件以上の実績をもとに、AIと専門カウンセラーがあなたにぴったりの相手を紹介します。",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "プロのサポート",
    description: "初デートの調整からプロポーズまで、専任カウンセラーが全力でサポートいたします。",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "成婚へ",
    description: "お二人の幸せな未来を、最後まで責任を持ってサポートします。",
  },
];

export function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground">
            安心できるサポート体制
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            登録から成婚まで、私たちが責任を持ってサポートします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-primary/20 z-0" />
                )}
                
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-border">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto relative">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-center mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
