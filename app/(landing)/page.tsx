// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Brain, Zap, Trophy, Users, ArrowLeft, Sparkles } from "lucide-react";
import heroBg from "@/public/hero-bg.webp";
import { ThemeToggle } from "@/components/toggle-mode";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const features = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "فئات متنوعة",
    description: "اختبر معلوماتك في العلوم والتاريخ والمعلومات العامة",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "نتائج فورية",
    description: "اعرف إجابتك الصحيحة أو الخاطئة فوراً مع تأثيرات بصرية",
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "تقييم ذكي",
    description: "احصل على تقييم شامل بالنجوم والنسبة المئوية",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "تحدّى نفسك",
    description: "أعد الاختبار وحسّن نتيجتك في كل مرة",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 quiz-gradient rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-extrabold text-foreground">كويز</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex">
              <Link href={"/auth/login"} className={cn(buttonVariants())}>تسجيل الدخول</Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          className="object-cover opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center animate-fade-up fade-up">
          <div className="w-24 h-24 quiz-gradient rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl pop-in">
            <Sparkles className="w-12 h-12 text-primary-foreground" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight">
            اختبر <span className="text-primary">معلوماتك</span>
            <br />
            وتحدّى نفسك
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            منصة اختبارات تفاعلية بتصميم عصري. اختر فئتك المفضلة وابدأ رحلة المعرفة الآن!
          </p>

          <Link
            href="/quiz"
            className="quiz-gradient text-primary-foreground font-bold text-lg py-4 px-10 rounded-2xl shadow-xl inline-flex items-center gap-3 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            ابدأ الاختبار الآن
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              ليه تختار <span className="text-primary">كويز</span>؟
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              تجربة اختبار فريدة بتصميم أنيق وتفاعل سلس
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 stagger">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-14 h-14 quiz-gradient-light rounded-2xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-6">
  <div className="max-w-3xl mx-auto quiz-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden scale-fade-in">
    
    {/* Decorative Emojis */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-4 right-8 text-8xl float-slow">🧠</div>
      <div className="absolute bottom-4 left-8 text-6xl float-slow delay-200">🏆</div>
    </div>

    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
        جاهز للتحدي؟
      </h2>

      <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
        اختبر معلوماتك الآن واكتشف كم تعرف في مختلف المجالات
      </p>

      <a
        href="/quiz"
        className="bg-card text-foreground font-bold text-lg py-4 px-10 rounded-2xl shadow-xl inline-flex items-center gap-3 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        ابدأ الآن
        <ArrowLeft className="w-5 h-5" />
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 quiz-gradient rounded-lg flex items-center justify-center">
              <Brain className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold">كويز</span>
          </div>
          <span>© 2026 جميع الحقوق محفوظة</span>
        </div>
      </footer>
    </div>
  );
}