import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import { Shield, Lock, Award, CheckCircle } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "プライバシーマーク取得",
    description: "個人情報を厳重に管理",
  },
  {
    icon: Lock,
    title: "SSL暗号化通信",
    description: "安全な通信環境",
  },
  {
    icon: Award,
    title: "創業20年の実績",
    description: "12,000組以上の成婚",
  },
  {
    icon: CheckCircle,
    title: "本人確認100%",
    description: "全会員を厳格審査",
  },
];

const faqs = [
  {
    question: "料金はどのくらいかかりますか？",
    answer: "初回カウンセリングは無料です。入会金、月会費、成婚料など、プランによって異なりますが、現在11月限定で入会金50%OFFのキャンペーンを実施中です。詳しくは無料カウンセリングでご案内いたします。",
  },
  {
    question: "どのくらいの期間で結婚できますか？",
    answer: "個人差がありますが、平均的には6ヶ月〜1年以内に成婚される方が多いです。専任カウンセラーがお一人おひとりに合わせたペースでサポートいたしますので、ご安心ください。",
  },
  {
    question: "仕事が忙しくても大丈夫ですか？",
    answer: "はい、大丈夫です。オンラインでのカウンセリングやお見合いも可能です。また、専任カウンセラーがスケジュール調整もサポートしますので、忙しい方でも無理なく活動できます。",
  },
  {
    question: "本当に真剣な人だけが登録していますか？",
    answer: "はい。全会員に対して本人確認書類、独身証明書、収入証明書などの提出を義務付けており、100%の審査を行っています。真剣に結婚を考えている方だけが登録できる仕組みです。",
  },
  {
    question: "地方在住でも利用できますか？",
    answer: "はい、全国対応しております。オンラインでのサポートも充実しており、地方の方でも都市部の方と同様のサービスを受けられます。地域密着の視点で、各地域の会員様をサポートしています。",
  },
  {
    question: "個人情報の管理は大丈夫ですか？",
    answer: "プライバシーマークを取得しており、個人情報の管理には万全を期しています。SSL暗号化通信を使用し、お客様の大切な情報を厳重に保護しています。",
  },
];

export function TrustFAQ() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground">
              安心してご利用いただけます
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="mb-1 text-sm text-foreground">{badge.title}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground">
              よくあるご質問
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
