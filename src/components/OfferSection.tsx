import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Gift, Calendar, Shield, Award } from "lucide-react";

interface OfferSectionProps {
  onCTAClick: (ctaType: string) => void;
}

const benefits = [
  {
    icon: Gift,
    title: "初回カウンセリング無料",
    description: "まずはお気軽にご相談ください",
  },
  {
    icon: Calendar,
    title: "入会金50%OFF",
    description: "11月限定キャンペーン",
  },
  {
    icon: Shield,
    title: "安心の返金保証",
    description: "条件に応じて返金制度あり",
  },
  {
    icon: Award,
    title: "成婚お祝い金",
    description: "ご成婚時に最大10万円進呈",
  },
];

export function OfferSection({ onCTAClick }: OfferSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <Badge className="bg-accent text-white px-4 py-2 mb-6">
            11月限定特典
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground">
            今なら特別キャンペーン実施中
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            婚活をスタートするなら今がチャンスです
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-lg border border-border max-w-2xl">
            <p className="text-lg mb-6 text-foreground">
              キャンペーン期間：2025年11月30日まで
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full shadow-md"
                onClick={() => onCTAClick('counseling')}
              >
                無料カウンセリングを予約する
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full"
                onClick={() => onCTAClick('diagnosis')}
              >
                3分で理想の相手を診断
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
