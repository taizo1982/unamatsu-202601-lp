import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Shield } from "lucide-react";

export function EventFAQ() {
  const faqs = [
    {
      question: "無理な勧誘はありませんか？",
      answer: "結婚相談所ではないため、勧誘は一切ありません。安心してご参加ください。"
    },
    {
      question: "プライバシーは守られますか？",
      answer: "登録情報は厳重に管理します。個人情報保護法に基づき、適切に取り扱います。"
    },
    {
      question: "サポートは有料ですか？",
      answer: "女性はすべて無料です。男性はお見合い成立時または交際中のみ費用が発生します。（お見合い1件5,000円、交際中サポート料1万円／月）"
    },
    {
      question: "当日の服装は？",
      answer: "カジュアルな服装で大丈夫です。冬の寒い時期ですので、暖かい服装でお越しください。"
    },
    {
      question: "一人で参加しても大丈夫？",
      answer: "ほとんどの方がお一人での参加です。スタッフが丁寧にサポートしますので、安心してご参加ください。"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-primary">安心してご参加いただけます</span>
            </div>
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold">
              よくあるご質問
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
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
