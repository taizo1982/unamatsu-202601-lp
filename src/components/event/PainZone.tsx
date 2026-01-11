import { X } from "lucide-react";
import painImageAvif from "../../assets/6fe7d929f4abf0a9fc915a7c7ebcc30fcf034131.avif";
import painImageWebp from "../../assets/6fe7d929f4abf0a9fc915a7c7ebcc30fcf034131.webp";
import painImagePng from "../../assets/6fe7d929f4abf0a9fc915a7c7ebcc30fcf034131.png";

export function PainZone() {
  const pains = [
    "アプリで真剣な出会いがない",
    "仕事が忙しくて出会う時間がない",
    "結婚相談所はハードルが高そう"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-12 font-bold">
            こんなお悩み、ありませんか？
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            {/* Pain points */}
            <div className="space-y-4">
              {pains.map((pain, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-red-100"
                >
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-left">{pain}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <picture>
                <source srcSet={painImageAvif} type="image/avif" />
                <source srcSet={painImageWebp} type="image/webp" />
                <img
                  src={painImagePng}
                  alt="悩む人"
                  className="w-full h-64 object-cover"
                />
              </picture>
            </div>
          </div>

          {/* Empathy message */}
          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <p className="text-xl sm:text-2xl mb-4">
              💑 「気づけば、1年があっという間に<br className="hidden sm:inline" />過ぎていた…」
            </p>
            <p className="text-lg text-foreground/80">
              そんなあなたに、冬のロマンチックな列車で<br className="hidden sm:inline" />
              自然な出会いをお届けします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
