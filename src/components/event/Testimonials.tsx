import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "ゲームとトークが楽しかったです。ありがとうございました。",
      age: 34,
      gender: "女性"
    },
    {
      text: "初めて婚活に参加しました！緊張したけど楽しかった！",
      age: 32,
      gender: "女性"
    },
    {
      text: "送迎も丁寧で、運営スタッフの対応が良かったです。",
      age: 38,
      gender: "男性"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-pink-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4 text-center font-bold">
            参加者のリアルな声
          </h2>
          <p className="text-center text-lg text-foreground/70 mb-16">
            💬 実際に参加された方々の感想
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                <div className="relative z-10">
                  <p className="text-lg mb-6 leading-relaxed">
                    「{testimonial.text}」
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                      {testimonial.gender === "女性" ? "👩" : "👨"}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">
                        {testimonial.age}歳・{testimonial.gender}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
