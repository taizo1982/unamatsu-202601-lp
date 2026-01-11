import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ClosingCTAProps {
  onCTAClick: (ctaType: string) => void;
}

export function ClosingCTA({ onCTAClick }: ClosingCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight">
            結婚したいと思った「今」が、<br className="hidden sm:block" />
            一番のチャンスです。
          </h2>
          
          <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
            あなたの幸せな未来を、私たちと一緒に創りませんか？<br />
            まずは無料カウンセリングで、あなたの想いをお聞かせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-6 rounded-full shadow-xl min-w-[280px] group"
              onClick={() => onCTAClick('counseling')}
            >
              無料カウンセリングを予約する
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-white/90 text-primary border-2 border-white px-10 py-6 rounded-full shadow-xl min-w-[280px]"
              onClick={() => onCTAClick('diagnosis')}
            >
              3分で理想の相手を診断
            </Button>
          </div>

          <p className="text-sm opacity-80">
            ※無料カウンセリングは完全予約制です。お早めにご予約ください。
          </p>
        </div>
      </div>
    </section>
  );
}
