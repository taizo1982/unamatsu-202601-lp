import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./ui/image-with-fallback";
import { Quote } from "lucide-react";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1653614704415-a3f533f60da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNvdXBsZSUyMHdlZGRpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIyMzExOTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "田中様・佐藤様",
    age: "34歳・32歳",
    period: "活動期間：4ヶ月",
    testimonial: "仕事が忙しく、自分で相手を探す時間がありませんでした。専任カウンセラーの方が私たちの性格や価値観を理解してくれて、理想の相手を紹介してくれました。今では幸せな家庭を築いています。",
  },
  {
    image: "https://images.unsplash.com/photo-1546618451-6cf536d22c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGFzaWFuJTIwY291cGxlfGVufDF8fHx8MTc2MjIzMTE5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "山田様・鈴木様",
    age: "29歳・28歳",
    period: "活動期間：6ヶ月",
    testimonial: "最初は婚活に不安がありましたが、カウンセラーの方が親身にサポートしてくださり、自信を持って活動できました。アプリとは違い、真剣な方ばかりで安心して婚活できました。",
  },
  {
    image: "https://images.unsplash.com/photo-1750931643605-7b52f8396504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBhc2lhbiUyMGNvdXBsZSUyMGhhcHB5fGVufDF8fHx8MTc2MjIzMTE5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "高橋様・伊藤様",
    age: "38歳・36歳",
    period: "活動期間：5ヶ月",
    testimonial: "再婚を考えていた私たちに、カウンセラーの方が丁寧に寄り添ってくれました。お互いの状況を理解し合える素敵な相手と出会え、第二の人生をスタートできました。",
  },
];

export function SuccessStories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground">
            幸せをつかんだカップルの声
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            実際に成婚されたカップルの体験談をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="mb-1 text-foreground">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.age} | {story.period}</p>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-sm text-foreground leading-relaxed pl-6">
                    {story.testimonial}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
