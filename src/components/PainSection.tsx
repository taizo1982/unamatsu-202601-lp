import { AlertCircle, Clock, Users, Heart } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    text: "アプリでは真剣な出会いが少ない",
  },
  {
    icon: Clock,
    text: "忙しくて出会いの時間がない",
  },
  {
    icon: Users,
    text: "どうやって相手を探せばいいか分からない",
  },
  {
    icon: Heart,
    text: "結婚に向けて真剣に考えているが一人では不安",
  },
];

export function PainSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground">
            こんなお悩みありませんか？
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground pt-2">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-primary">
            そんなあなたを、私たちがサポートします
          </p>
        </div>
      </div>
    </section>
  );
}
