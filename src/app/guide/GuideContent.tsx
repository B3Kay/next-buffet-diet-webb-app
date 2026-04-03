'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  BookOpen,
  Download,
  Clock,
  DollarSign,
  Utensils,
  Trophy,
  Heart,
  ArrowRight,
  Zap,
  Target,
  Scale,
  ShieldCheck,
  Brain,
  Timer,
  TrendingDown,
  ChefHat,
  Users,
  Star,
  CheckCircle,
  AlertTriangle,
  Flame,
} from "lucide-react";

export function GuideContent() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          nav,
          footer,
          .no-print,
          .toaster {
            display: none !important;
          }
          body {
            font-size: 11pt;
            line-height: 1.5;
            color: #000 !important;
            background: #fff !important;
          }
          @page {
            size: A4;
            margin: 2cm 2.5cm;
          }
          .print\\:break-before-page {
            break-before: page;
          }
          .print-title-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 90vh;
            text-align: center;
          }
          h1, h2, h3 {
            color: #000 !important;
          }
          .guide-container {
            max-width: 100% !important;
            padding: 0 !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-background">
        {/* Hero / Cover Section */}
        <section className="print-title-page relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-1">
              Free Guide - 25+ Pages
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              THE BUFFET DIET
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              The Protocol Nobody Is Talking About
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-4 max-w-2xl mx-auto">
              Lose fat. Save money. Eat like a king. Skip the meal prep. The ancestral eating strategy hiding in plain sight at your local all-you-can-eat.
            </p>
            <p className="text-base text-muted-foreground/60 mb-8 max-w-lg mx-auto italic">
              &quot;I did a 5-day water fast and then remembered I had a half marathon in two days. That was the beginning.&quot;
            </p>
            <div className="flex items-center justify-center gap-2 mb-10 text-muted-foreground">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">
                By <strong>Benjamin Karlsson</strong> — Software Engineer, Carnivore, Weighted Calisthenics Enjoyer, and the Guy Who Eats at a Buffet Every Day
              </span>
            </div>
            <Button
              size="lg"
              onClick={handleDownloadPDF}
              className="no-print text-lg px-8 py-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free PDF
            </Button>
          </div>
        </section>

        <div className="guide-container max-w-3xl mx-auto px-4 py-12 md:py-16">

          {/* Foreword */}
          <section className="mb-16">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed italic">
              &quot;I train weighted calisthenics 4x a week. Gymnastics 3x. I eat carnivore.
              I fast for days at a time. I build software companies. And the single greatest
              optimization I&apos;ve ever made to my life is eating at a $15 all-you-can-eat buffet.
              This is not a joke. I am being completely serious.&quot;
            </p>
            <p className="text-base text-muted-foreground text-right">— Benjamin Karlsson</p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 1: The Origin Story */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                How This Started (It&apos;s Stupidly Obvious)
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I&apos;m a software engineer. I build startups. I train weighted calisthenics 3-4 times a week and gymnastics 3 times a week. I eat carnivore. These are not separate hobbies. This is just the operating system.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The carnivore diet did something unexpected. It naturally compressed my eating window. You stop snacking. You stop thinking about food every 2 hours. You eat meat. You feel full for a long time. One day you realize you haven&apos;t eaten since yesterday and you feel completely fine. That&apos;s when you start experimenting.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              First fast: 24 hours. Easy. Then 3 days. Then 5 days. Water only. I did a 5-day water fast just to see what happened. What happened was I felt weirdly good and then remembered I had a half marathon in 2 days.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-xl text-center italic font-medium">
                  I ran it anyway. Felt fine. Nobody is talking about this.
                </p>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Here&apos;s the actual problem. Eating carnivore while training hard means you need a <strong>lot</strong> of meat. Like 1.5kg of steak a day. Cooking that while running companies wasn&apos;t happening. And buying that volume of quality meat? Expensive. The protocol was right. The logistics were broken.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              There were two all-you-can-eat buffets on each side of the road next to my office. I had walked past them every day for months. Then one day — 36 hours into a fast — I walked in. Sat down. Ate an absurd amount of protein for $15. Walked out. Didn&apos;t need to eat anything else that day.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I have a best friend. Overweight. I challenged him. &quot;Come eat with me every day. We&apos;re going to turn this into a game.&quot; He said yes. We started eating together daily. We started figuring out strategies. How do you maximize protein per dollar? How do you &quot;win&quot; against the buffet&apos;s business model? It became a competitive sport between two engineers with too much time and not enough food.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Then I checked my bank statement. I wasn&apos;t spending more money on food. I was spending <strong>less</strong>. Then the obvious thought hit: if I eat every 2nd day, I cut costs in half. Same food. Half the price. I tried every other day. Then every 3rd day. Three days was the limit — beyond that it stops being strategic and starts being something else. Every other day wasn&apos;t the most fun. But the savings in time and money were insane.
            </p>

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">The Reframe Nobody Does</p>
                    <p className="text-muted-foreground">
                      All that time NOT thinking about food, NOT cooking, NOT cleaning — it goes back into the business. Into training. Into actually living. Your ancestors didn&apos;t meal prep. They ate when there was food. Then they went and did things that mattered. The protocol is that simple.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This guide is the system I built from that experiment. Written for builders, athletes, and anyone who looked at how they were spending time and money on food and thought: there has to be a better way. There is. It&apos;s $15 and it&apos;s across the street.
            </p>
          </section>

          <Separator className="mb-16" />

          <Separator className="mb-16" />

          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Your Current Food System Is Broken
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Let&apos;s be honest about what normal eating actually is. Not what the food pyramid said it should be. Not what the wellness influencer says it is. What it actually is.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The food pyramid was a psyop. Six small meals a day is propaganda invented by the snack industry. Breakfast being the most important meal of the day was a marketing slogan from a cereal company. Nobody is talking about this.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Here&apos;s your current protocol whether you chose it or not. Wake up. Eat something (or skip it and feel guilty about it, as if toast is a moral obligation). Go to work. Eat a sad desk lunch from a container you packed the night before in a ritual you call &quot;meal prep&quot; but which is more accurately described as packing a school lunchbox for yourself as a grown adult. Come home. Stare into the fridge for ten minutes as if the ingredients might spontaneously assemble. Cook something mediocre. Or order $28 of pad thai from an app. Clean up. Sleep. Repeat forever.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Your great-great-grandfather didn&apos;t have a meal prep container. He didn&apos;t have a weekly grocery run scheduled in his calendar. He didn&apos;t have a 6-meal-a-day protocol. He ate when there was food. He didn&apos;t eat when there wasn&apos;t. He was fine. You will also be fine.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here are the real numbers. Until you see them in writing you will not believe how much of your life you are donating to food logistics:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-3">The Time Tax of Normal Eating (Per Week)</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Meal planning &amp; recipe scrolling</span>
                        <span className="font-mono">1–2 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Grocery shopping (including transit)</span>
                        <span className="font-mono">2–3 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Prep &amp; cooking (3 meals/day)</span>
                        <span className="font-mono">7–10 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Dishes, cleaning, putting things away</span>
                        <span className="font-mono">3–5 hours</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 font-semibold">
                        <span>Total</span>
                        <span className="font-mono text-primary">13–20 hours/week</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Read that again. <strong>Thirteen to twenty hours a week.</strong> That is a part-time job. You are working a part-time job whose entire output is feeding yourself the same 6 meals on rotation. Every week. Until you die.
            </p>

            <Card className="mb-6 border-destructive/20 bg-destructive/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Meal Prep Is Cope</p>
                    <p className="text-muted-foreground">
                      The fitness industry sold you this: spend your entire Sunday cooking 21 identical meals, stack them in plastic containers, eat the same reheated chicken breast for 7 days straight. This is presented as discipline. It is actually misery with a macros spreadsheet. Nobody who genuinely enjoys their life is doing this long-term.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Eating at regular restaurants isn&apos;t the answer either. You&apos;re paying $20–40 per meal for a portion designed by an accountant. Exactly 200g of protein. A decorative sprig of parsley. The privilege of tipping 20% for someone to carry it 8 metres. Three meals a day at restaurants is $60–120 per day. $1,800–3,600 per month. Nobody is doing that.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The current system wastes your time, wastes your money, and still somehow produces mediocre food. Every single day. This is the problem. Keep reading.
            </p>
          </section>

          <Separator className="mb-16" />

          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                3
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Buffet Protocol
              </h2>
            </div>

            <p className="text-lg text-primary font-medium mb-6 italic">
              The system hiding in plain sight.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Buffets solve every problem from the previous chapter. Every single one. Not partially. Completely. Let&apos;s go through the stack.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Most people think buffets are where you go to overeat garbage and feel terrible. That&apos;s because most people go to buffets wrong. They are playing a different game — the eat-until-physically-immobile game. We are not playing that game. We are playing the high-protein, maximum-value, zero-cooking-overhead game. Completely different.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                {
                  icon: ChefHat,
                  title: "Zero Cooking Overhead",
                  desc: "Walk in. Food exists. Walk out. No shopping list. No grocery run. No prep. No cooking. No dishes. No putting things away. You just eliminated the 13–20 hour weekly time tax in a single move. This is not a small thing.",
                },
                {
                  icon: Utensils,
                  title: "Infinite Variety on Demand",
                  desc: "Sushi. Roast beef. Grilled salmon. Brazilian churrasco. Korean BBQ. Indian curry. All from the same location. On rotation. Your meal prep chicken breast cannot compete. Variety is not a luxury — dietary variety means micronutrient completeness. The buffet handles this automatically.",
                },
                {
                  icon: Target,
                  title: "You Control the Portions",
                  desc: "This is the one everyone misses. At a regular restaurant, a cost-conscious kitchen controls your macros. At a buffet, you do. Want 600g of salmon and zero carbohydrates? Done. Want to run a high-protein, carnivore-style feast? Go stack the plate. Nobody is stopping you. No judgment. Just food.",
                },
                {
                  icon: Users,
                  title: "Zero Social Friction",
                  desc: "Bring your friend who eats vegan. Bring your carnivore training partner. Bring your business contact. Bring your mom. Everyone finds something. The buffet is the universal restaurant. The 'where should we eat?' debate is over.",
                },
                {
                  icon: Star,
                  title: "Quality Exists at the Top End",
                  desc: "We are not talking about the sad pizza carousel at a highway rest stop. We are talking about sushi buffets. Brazilian steakhouses. Hotel brunch spreads. Korean BBQ. These are legitimate high-quality meals. Find the right buffet and the quality-per-dollar ratio is genuinely absurd.",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Time math. Buffet Diet food commitment: walk there (10 min), eat (30–45 min), walk back (10 min). Roughly <strong>1 hour per eating event</strong>. Normal eating: 2–3 hours per day minimum. That&apos;s <strong>10+ hours a week</strong> back in your life. Every week.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">You vs. the Buffet&apos;s Business Model</p>
                    <p className="text-muted-foreground">
                      The buffet makes money when you fill up on bread rolls, pasta, fried rice, and dessert. High volume, low cost ingredients. That is their margin. You win by ignoring all of that entirely. Stack the protein. Salmon, beef, eggs, shrimp. Hit the high-value items first before your stomach fills. Play offense from plate one. The buffet built a business on the assumption that you would eat cheap carbs. Prove them wrong.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This is a game. Two engineers sitting across from each other at a $15 buffet, figuring out how to extract maximum protein per dollar, is how this protocol got stress-tested. The strategies in the rest of this guide came from that process. It works.
            </p>
          </section>

          <Separator className="mb-16" />

          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                4
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Fasting + Buffets = The Stack Nobody Sees
              </h2>
            </div>

            <p className="text-lg text-primary font-medium mb-6 italic">
              This is where the whole thing clicks.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The buffet alone is already a strong protocol. But combined with fasting, it becomes something else entirely. This is the stack. This is why it works so well that it sounds made up when you explain it to people.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Intermittent fasting is not a diet. It is a timing protocol. Not about what you eat — about when. You cycle between eating and not eating. That&apos;s it. Humans have been doing this for the entire history of the species. Your great-great-great-grandfather didn&apos;t have a fridge full of snacks. He ate when food existed. He fasted when it didn&apos;t. His body was built for exactly this pattern. So is yours. Nobody is talking about this.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The carnivore path naturally compresses the eating window. You stop wanting to snack. One thing leads to another. You try 24 hours. Then 3 days. Then 5 days. Then you realize you have a half marathon in 2 days and you run it anyway. The body adapts. It always does.
            </p>

            <div className="grid gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Timer className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">16:8 — Entry Level</p>
                      <p className="text-muted-foreground">
                        Fast 16 hours. Eat within an 8-hour window. Mechanically: skip breakfast. Eat lunch and dinner. That&apos;s it. This is the minimum viable dose. If this feels hard, the problem is not fasting — the problem is dependence on snacks and the psychological weight of three mandatory meals a day. That conditioning breaks fast.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Flame className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">OMAD — One Meal A Day</p>
                      <p className="text-muted-foreground">
                        24-hour fast. One meal. This is where the Buffet Diet becomes obvious. If you only eat once a day, that meal needs to be worth it. Not a sad bowl of soup. A real feast. High-protein, high-variety, fully satisfying. Enter: the all-you-can-eat. The protocol snaps together perfectly here.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Zap className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">48-Hour Fast — The Full Stack</p>
                      <p className="text-muted-foreground">
                        Eat every other day. One serious feast every 48 hours. This is the configuration that cuts food costs in half while maximizing everything fasting has to offer. Not for day one. But it is absolutely achievable and the time and money returns are remarkable. All that recovered time goes back into work and training.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Here is why fasting and buffets are the perfect pairing. When you have fasted for 24 or 48 hours, you have earned a real feast. Not a 400-calorie salad. Not a protein shake. A <strong>feast</strong>. Varied. Protein-dense. Satisfying in every dimension. A regular restaurant gives you a fist-sized portion and charges $35 for it. That is the wrong tool. An all-you-can-eat buffet is the exact right tool.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">The Science. Briefly. Without Apology.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Autophagy</strong> — Your cells start eating their own damaged components during extended fasts. Literally cellular housekeeping. The trash gets taken out. It kicks in around 16–24 hours. This is real and documented.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Insulin Sensitivity</strong> — Fasting resets your insulin response. When you do eat, your body handles the fuel efficiently. The feast after the fast is metabolically different from eating the same food in a constant-fed state.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Metabolic Flexibility</strong> — Your body learns to switch between burning glucose and burning fat without drama. You stop being dependent on constant food input to function. This is called being a metabolic adult.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Growth Hormone</strong> — HGH spikes significantly during fasting. This helps preserve lean muscle mass while burning fat. Relevant if you are training hard and care about the body composition side of this protocol.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              You are not starving. Starving is having no food. This is choosing not to eat because in a few hours you are going to sit down at an all-you-can-eat buffet and have the best meal of your week. That is not deprivation. That is anticipation. That is the stack.
            </p>
          </section>


          {/* Chapter 5 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                5
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Math (This Is Where It Gets Stupid)
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Nobody is talking about this. The financial case for the Buffet Diet is so obvious it&apos;s embarrassing. Drop the numbers. Let them hit.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your grocery bill is a lie you&apos;ve accepted. $500-800/month. Plus the time tax. Meal prep is cope — it&apos;s just outsourcing misery to Sunday-you so weekday-you can eat cold sad chicken. There&apos;s a better protocol.
            </p>

            <Card className="mb-6 border-green-500/30 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-3">Scenario 1: OMAD Protocol</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3 font-medium">One meal a day. That meal is a buffet. Period.</p>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Buffet entry fee</span>
                        <span className="font-mono font-bold">$15–20/day</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Monthly cost</span>
                        <span className="font-mono font-bold">$450–600</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Average US grocery bill</span>
                        <span className="font-mono font-bold text-red-500">$500–800</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Your cooking time cost (@ $20/hr)</span>
                        <span className="font-mono font-bold text-red-500">$800–1,600</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="font-bold text-green-600 text-base pt-1">
                        You spend LESS than groceries alone. Zero cooking. Zero cleaning. Zero Sunday meal prep.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-yellow-500/30 bg-yellow-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <TrendingDown className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-3">Scenario 2: 48-Hour Protocol</p>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3 font-medium">Warrior Mode. Eat every other day. One feast every 48 hours.</p>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Meals per month</span>
                        <span className="font-mono font-bold">~15</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Monthly food cost</span>
                        <span className="font-mono font-bold text-yellow-600">$225–300</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-muted">
                        <span>Daily average</span>
                        <span className="font-mono font-bold text-yellow-600">$8–10</span>
                      </div>
                      <Separator className="my-2" />
                      <p className="font-bold text-yellow-600 text-base pt-1">
                        $225-300/month for ALL your food. Read that again. Slower this time.
                      </p>
                      <p className="text-sm mt-1">
                        Less than half what most people pay for groceries. And you&apos;re eating premium proteins. And you&apos;re losing fat. This is the stack.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here&apos;s where it gets interesting. The buffet&apos;s entire business model assumes you&apos;re an average customer. Average customers fill up on bread. On fried rice. On pasta. That stuff costs them $0.30 a serving. That&apos;s where they make their margin.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              You&apos;re not an average customer. You waltz in after a 24-48 hour fast and head directly for the premium proteins. Sashimi: costs them $8-12 per plate. Prime rib: $10+ per slice. Crab legs: pure loss for them. You are not a customer. You are a liability on their balance sheet.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This is value arbitrage. You pay $15. You extract $30-40 worth of food. The buffet thought it was winning. It was not winning. You were winning. You were always winning.
            </p>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Bottom Line</p>
                    <p className="text-muted-foreground">
                      Less money. Better food. Zero cooking time. Active fat loss. The Buffet Diet isn&apos;t a diet hack — it&apos;s the only rational nutritional strategy for anyone who values their time and their money. Everything else is cope.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 6 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                6
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Buffet Counter-Intelligence
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
              They have a playbook. You need to know it.
            </p>
            <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
              Buffets are not charities. They are engineered environments. Decades of behavioral psychology baked into the floor plan. Every tray placement is a calculated move. The dessert section looks like that on purpose. Nothing is an accident.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This is a tactical briefing. Study it. Internalize it. Walk into your next buffet like a professional.
            </p>

            <div className="space-y-5 mb-8">
              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 1: The Bread &amp; Carb Wall</p>
                      <p className="text-muted-foreground mb-3">
                        First items you see: bread rolls, pasta salad, fried rice, noodles. Not an accident. A tray of bread rolls costs them $2. A tray of prime rib costs them $40. They front-load the cheap stuff because you&apos;re hungry and your plate is empty and your brain is offline. You load up on carbs, hit satiety early, never reach the protein station. They win. You lose. You drove here for that.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Walk past all of it. Eyes forward. First plate is protein-only. The bread section does not exist.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 2: Small Plates</p>
                      <p className="text-muted-foreground mb-3">
                        Buffet plates are shrinking. Intentionally. A smaller plate feels full faster. Three small plates psychologically register as &quot;three full meals.&quot; Your brain counts plates, not macros. Three small plates of fried rice is not the same as three full plates of protein. But your dopamine system doesn&apos;t know that. They&apos;re exploiting the gap.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Don&apos;t count plates. Count grams of protein. Target 100-150g minimum. Go back as many times as it takes. Stack it high. Nobody cares.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 3: The Soda Sugar Trap</p>
                      <p className="text-muted-foreground mb-3">
                        &quot;Free&quot; soda. What a gift. One large soda: 200+ calories of pure glucose. Two glasses and you&apos;ve torched 400 calories of stomach space on liquid that has zero protein, zero satiety effect, and spikes insulin before you&apos;ve touched a single piece of food. The buffet loves this. You&apos;re full on sugar. They serve you less real food. Perfect trade — for them.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Water. Full stop. Sparkling if you need the ritual. Black coffee after. That&apos;s the entire beverage stack.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 4: The Dessert Showstopper</p>
                      <p className="text-muted-foreground mb-3">
                        The dessert station is always the most visually dramatic section of the buffet. Towers of cake. Chocolate fountains. Mochi. Macarons. It&apos;s theater. A magazine cover. They make it look expensive because it <em>looks</em> like value. It is not value. Flour, sugar, butter. Costs them $1.50. Fills you with 1,500 calories of nothing. They actively want you to spend 20 minutes here.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Desserts are a victory lap. One small piece, after protein and vegetables are done. Or skip it. Your post-fast body does not need a sugar bomb.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 5: The Hidden Premium Zone</p>
                      <p className="text-muted-foreground mb-3">
                        Sashimi bar in the back corner. Carving station tucked behind the salad section. Fresh seafood counter with no signage. They hide the expensive stuff. By the time most customers find the prime rib, their plate is already loaded with fried noodles. The layout is adversarial. It is designed against you specifically.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Recon Walk — mandatory. Scout the entire buffet before picking up a plate. You need the full map before you start executing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 6: The Sauce &amp; Dressing Calorie Bomb</p>
                      <p className="text-muted-foreground mb-3">
                        Ranch dressing: 200 calories per ladle. Teriyaki glaze: pure sugar syrup with a protein costume. Creamy alfredo: more calories than the pasta underneath. Sauces are cheap, they make mediocre food taste good, and they demolish your macro stack without you noticing. They don&apos;t label calories on the sauce station. That is not an oversight.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Grilled, roasted, steamed. Protein that tastes good without sauce — sashimi, roast beef, tandoori chicken. Sauce on the side if necessary. Never drowned.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg mb-1">Trick 7: The Time Pressure</p>
                      <p className="text-muted-foreground mb-3">
                        60-minute limit. 90-minute limit. The clock creates panic. Panic creates bad decisions. Panicked eaters grab the first thing they see — bread, fried rice, anything in arm&apos;s reach. They pile their plate in a sprint. They eat fast, don&apos;t chew properly, register fullness late, and leave without having hit a single premium item. The buffet counted on exactly this.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: The first 5 minutes are always the Recon Walk. Non-negotiable. Three strategic plates beat six panicked ones every single time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Bottom Line</p>
                    <p className="text-muted-foreground">
                      The buffet is running a counter-operation against your wallet and your waistline. Now you know the playbook. You&apos;re no longer a customer. You&apos;re an operative. Walk in with a protocol. Execute the protocol. Walk out having extracted maximum value from a business that bet against you. They should be scared of you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 7 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                7
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                How to Win the Buffet Game — The Strategy Guide
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Going to a buffet without a protocol is like going to a gym and wandering around. You&apos;re there. The equipment exists. Nothing is happening.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Eight rules. Memorize them. Execute them in order. Every time.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 1: The Recon Walk
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Before you touch a plate, walk the entire buffet. Every section. Every corner. Every station they hid behind the salad bar. Full reconnaissance. This takes 3-5 minutes. It saves you from loading up on fried rice and discovering the carving station when your plate is already full. Amateurs grab the first thing they see. You gather intel first.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 2: Protein First Protocol
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your first plate is 100% protein. Meat. Fish. Seafood. Eggs. Non-negotiable. This is the protocol. Protein is the most expensive item for the buffet to provide. When you load it first, you maximize value extracted per dollar. Their accountant feels it. Also: protein is the most satiating macro. It keeps you full. It protects muscle. It is the entire point. First plate is protein. No exceptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 3: The Value Stack
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Eat the items that would cost you $30-50 at a normal restaurant. At the buffet, they&apos;re included. This is the value stack. Execute it every time.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="font-semibold text-green-700 dark:text-green-400 text-sm mb-1">Eat this</p>
                    <p className="text-sm text-muted-foreground">Sashimi, steak, prime rib, crab legs, shrimp, lamb, salmon, tuna</p>
                  </div>
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="font-semibold text-red-700 dark:text-red-400 text-sm mb-1">Skip this</p>
                    <p className="text-sm text-muted-foreground">Bread, fried rice, pasta, noodles, french fries, anything beige</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">A plate of rice costs them $0.30. A plate of sashimi costs them $8-12. You know which one to reach for.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 4: The Plate Method
                </h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <Badge className="mt-0.5 bg-red-500 flex-shrink-0">Plate 1</Badge>
                        <p className="text-muted-foreground">
                          <strong>Pure Protein.</strong> Sashimi, grilled chicken, roast beef, shrimp, eggs. The foundation. Build it heavy.
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Badge className="mt-0.5 bg-green-600 flex-shrink-0">Plate 2</Badge>
                        <p className="text-muted-foreground">
                          <strong>Vegetables.</strong> Grilled, steamed, roasted. Salad with minimal dressing. Avocado if available. Color is the signal.
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <Badge className="mt-0.5 bg-blue-500 flex-shrink-0">Plate 3</Badge>
                        <p className="text-muted-foreground">
                          <strong>The Wildcard.</strong> You earned it. Curious about the curry? Go. Want one dessert item? Fine. This is your victory lap. Keep it moderate — you&apos;re the one running this protocol, not the buffet.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 5: Hydration Hack
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Water only. That&apos;s the stack. Not soda. Not juice. Not the &quot;complimentary&quot; sweet tea that has more sugar than a candy bar. Water before eating helps signal satiety. Water during keeps digestion moving. Sugary drinks spike insulin before you&apos;ve eaten a single gram of protein, torch your stomach capacity, and cost the buffet $0.05 while charging you $3. It&apos;s a trap. Don&apos;t walk into the trap.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 6: Timing
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Lunch buffet. Not dinner. Lunch is $5-10 cheaper and the food quality is identical. Go at 11:30 AM — off-peak, fresh trays, first access to premium items before the crowd picks them clean. The person showing up at 1 PM on a Friday gets the dried-out salmon and the empty sashimi tray. You show up at 11:30 and get the fresh cut. Timing is a free advantage. Use it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 7: Choose Your Buffet Wisely
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The buffet is your kitchen. You don&apos;t stock your kitchen with junk. Don&apos;t pick a junk buffet. Protein quality is the only metric that matters. A $20 buffet with excellent sashimi and a carving station is worth infinitely more than a $12 buffet that&apos;s 90% fried rice. Chapter 8 covers this in full. Read it. It matters.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary flex-shrink-0" />
                  Rule 8: The Macro Play
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nobody is talking about this. You can hit your macros perfectly at a buffet. Need 150g protein? Load chicken and fish. Need more fat? Salmon and eggs. Staying low-carb? Skip the entire bread and rice section — it&apos;s not hard, it&apos;s just a choice. The buffet is a macro-flexible meal prep station where someone else did all the work and cleaned up after. Track it in your app or just follow the Plate Method and you&apos;ll land in range every time. No meal prep. No plastic containers. No reheated chicken breast at your desk. Just the protocol.
                </p>
              </div>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 8 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                8
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                How to Select a Good Buffet — Your Buffet Is Your Kitchen
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              This is your kitchen now. Act like it.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              You wouldn&apos;t stock your home kitchen with junk food and call it meal prep. So don&apos;t pick a junk buffet and call it the Buffet Diet. The buffet you choose determines 90% of your results. Selection is the protocol.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Here&apos;s the tier list. Ranked by protein quality, value, and how much the buffet will regret your presence.
            </p>

            <h3 className="text-2xl font-bold mb-5 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              The Buffet Tier List
            </h3>

            <div className="grid gap-4 mb-10">
              <div className="p-5 rounded-lg bg-yellow-500/10 border-2 border-yellow-500/40">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-600 font-bold text-sm px-3 py-1">S-Tier</Badge>
                  <span className="font-bold text-lg">The Gold Standard</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Brazilian Rodizio / Churrascaria</p>
                    <p className="text-muted-foreground text-sm">
                      They bring unlimited meat to your table. On a sword. They carve it in front of you. Picanha, lamb chops, chicken hearts, sausages. Protein delivery on a blade. This is the Buffet Diet endgame. The business model is literally designed to lose money to high-protein eaters. You are the target demographic they fear.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">High-End Sushi Buffets</p>
                    <p className="text-muted-foreground text-sm">
                      All-you-can-eat sashimi. Salmon, tuna, yellowtail, shrimp. Pure protein with near-zero carbs if you skip the tempura rolls. One of the highest protein-per-dollar ratios available to a human being in a modern city. Nobody is talking about this.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Premium Hotel Brunch Buffets</p>
                    <p className="text-muted-foreground text-sm">
                      Sunday brunch at a decent hotel: carving station, fresh seafood, omelette station, smoked salmon, quality everything. Yes, it&apos;s $25-40. It&apos;s also the finest meal you will eat all week. Worth it. Do the math.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-blue-500/10 border-2 border-blue-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-blue-500 text-blue-600 font-bold text-sm px-3 py-1">A-Tier</Badge>
                  <span className="font-bold text-lg">Excellent Choices</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Korean BBQ Buffets</p>
                    <p className="text-muted-foreground text-sm">
                      You grill your own meat. Bulgogi, pork belly, short ribs, chicken thighs. You control the cook. High protein, interactive, legitimately fun. The banchan sides add variety. Strong protocol fit.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Chinese Hot Pot Buffets</p>
                    <p className="text-muted-foreground text-sm">
                      Choose your proteins — thinly sliced beef, shrimp, fish balls, pork — cook them in broth. Skip the noodles entirely. This format is almost custom-designed for the Buffet Diet. Maximum protein control, zero filler obligation.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Indian Buffets with Tandoori</p>
                    <p className="text-muted-foreground text-sm">
                      Tandoori chicken, lamb seekh kebabs, paneer tikka. If the tandoor is active, this is A-tier without question. Watch the naan trap and the heavy curry gravies — they&apos;re designed to fill you up on carbs and fat. Navigate around them. Focus on the grill.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-green-500/10 border-2 border-green-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-green-500 text-green-600 font-bold text-sm px-3 py-1">B-Tier</Badge>
                  <span className="font-bold text-lg">Solid Options</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  General Asian buffets with a sushi section. Mediterranean buffets. Seafood buffets. Any buffet with a functioning carving station or grill. These work. They require more selectivity — protein exists but is surrounded by carb-heavy filler. Execute the protocol and you&apos;ll be fine. Don&apos;t autopilot.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-red-500/10 border-2 border-red-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="border-red-500 text-red-600 font-bold text-sm px-3 py-1">Avoid</Badge>
                  <span className="font-bold text-lg">Not Worth Your Fast</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Pizza buffets. Cheap steam table joints. Anything that is 90% fried food, bread, and cornstarch-thickened mystery sauces. If you cannot identify what animal the &quot;protein&quot; came from, you walk out. Full stop. You fasted 24 hours for this meal. It is a feast. Treat it like one.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              The Buffet Selection Checklist
            </h3>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              Eight checkpoints. Score at least 6/8 before committing to a spot as your regular kitchen. Non-negotiable.
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Dedicated protein station?</p>
                      <p className="text-sm text-muted-foreground">Carving station, sushi bar, live grill, or seafood counter. If the only protein is buried inside fried rice, that&apos;s a red flag not a buffet.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Protein quality — fresh, not abused?</p>
                      <p className="text-sm text-muted-foreground">Sashimi should glisten. Roast beef should be pink, not grey. Chicken should be grilled, not floating in a pool of oil. Trust your eyes. Trust your nose.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Solid vegetable selection?</p>
                      <p className="text-sm text-muted-foreground">Steamed, grilled, or roasted. Not just iceberg lettuce drowning in ranch. Real vegetables cooked by someone who respected them.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Clean and well-maintained?</p>
                      <p className="text-sm text-muted-foreground">Check the bathroom. Non-negotiable diagnostic. Are trays fresh or crusty? Is staff replacing empty dishes promptly? Cleanliness is food safety. Food safety is not optional.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Price-to-protein ratio makes sense?</p>
                      <p className="text-sm text-muted-foreground">A $15 buffet with excellent sashimi beats a $25 buffet with mediocre everything. Price per gram of quality protein is your only real metric.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Conveniently located?</p>
                      <p className="text-sm text-muted-foreground">You&apos;re going here almost every day. A 40-minute drive destroys the time-saving advantage. Within 15 minutes of home or office. That&apos;s the threshold.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Hours align with your protocol?</p>
                      <p className="text-sm text-muted-foreground">Lunch service 11 AM – 2:30 PM covers most OMAD windows. Verify before you commit. A buffet that closes at 1 PM on weekdays is useless to you.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Do they refresh food regularly?</p>
                      <p className="text-sm text-muted-foreground">Visit at different times. A great buffet at 11:30 AM can be a wasteland at 2 PM. You need a place that keeps premium trays stocked throughout service. Test it before committing.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Multi-Buffet Rotation Strategy
            </h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Don&apos;t rely on a single buffet. Find 2-3 solid spots and rotate. This is not optional — this is the advanced protocol.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Variety keeps the diet sustainable. Rotation means you notice when one spot has an off week. And here&apos;s the tactical reason nobody talks about: if you hit the same buffet every day, staff start recognizing you. You become known as &quot;the person who only eats sashimi.&quot; Suddenly your sashimi tray is restocked slower. Your portion carves get smaller. You rotate. You return in a week. Problem solved. This is not paranoia. This is game theory.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Pro Move: Use the Community Finder</p>
                    <p className="text-muted-foreground">
                      Before breaking a fast at a new buffet, check <strong>The Buffet Diet restaurant finder</strong>. Other protocol runners have already rated these spots specifically for protein quality, value, and diet compatibility. Look for &quot;Lean Protein,&quot; &quot;Carnivore Friendly,&quot; &quot;Keto Friendly&quot; tags. Don&apos;t waste a 24-hour fast on a 2-star buffet. Your fast is sacred. Your break-fast meal should be worthy of it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A normal person picks a restaurant based on cravings and whatever is nearby. You pick your buffet like an athlete picks a training facility. Right equipment. Right environment. Right price. Right location. This is not just eating out. This is strategic nutrition sourcing. And once you lock in your rotation, you&apos;ll never think about where to eat again. The protocol runs itself.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 9 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                9
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Buffet Diet Protocols
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Think of these as difficulty settings. Pick your level. Play to win.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              No wrong answer. The right protocol is the one you actually run. Start where you are. Upgrade when you&apos;re ready.
            </p>

            <Card className="mb-6 border-green-500/30">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-green-500 text-white">Protocol 1</Badge>
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">The Starter</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 16:8.</strong> Skip breakfast. Buffet at noon. Small dinner if you need it.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Entry level. Still get 80% of the benefits. Zero meal prep during the day. Kitchen stays clean. You can still eat dinner with your family. Your oven will start to feel neglected. Good.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Mon–Fri buffet lunch + light dinner. Weekends flexible.</p>
                      <p><strong>Monthly cost:</strong> ~$350–500 buffet + ~$100–150 light dinners.</p>
                      <p><strong>Difficulty:</strong> Easy. This is the tutorial level.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-blue-500/30">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-500 text-white">Protocol 2</Badge>
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">The OMAD</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 24 hours.</strong> One buffet meal. Per day. That&apos;s it. That&apos;s the protocol.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This is the sweet spot. Most people live here permanently. Lunch at noon. Eat like a champion. Walk out. Do your life. No dinner. No decisions. Your kitchen is now a storage room. The oven is a decorative appliance. You have reclaimed 2 hours of your day. Every day. Do the math.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Buffet lunch daily. Nothing else.</p>
                      <p><strong>Monthly cost:</strong> ~$450–600 total. All-in.</p>
                      <p><strong>Difficulty:</strong> Medium. Your hunger cues will adapt in 3–5 days.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-orange-500/30">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-orange-500 text-white">Protocol 3</Badge>
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">The Warrior</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 48 hours.</strong> Eat every other day. This is the final boss.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Not for everyone. Built for the serious. You eat Mon, Wed, Fri, Sun. You fast Tue, Thu, Sat. On eating days you go to the buffet and you eat. Protein first. Everything else second. On fast days you drink water and you get things done. Cost? $225–300 a month. For food. Total. Less than most people&apos;s Spotify, Netflix, gym membership, and coffee budget combined. The results are dramatic. The savings are insane. The time reclaimed is obscene. If you make it here, the buffet manager will know your name.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Mon/Wed/Fri/Sun buffet. Tue/Thu/Sat fast.</p>
                      <p><strong>Monthly cost:</strong> ~$225–300. Total. Yes really.</p>
                      <p><strong>Difficulty:</strong> Hard. Rewarding. Final boss energy.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-purple-500/30">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-purple-500 text-white">Protocol 4</Badge>
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">The Social</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 5:2 style.</strong> Buffet weekdays. Cook with people you like on weekends.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      For people who have a partner who cooks. Or family dinners on Saturday. Or Sunday brunch is sacred. Fine. The protocol bends. Run OMAD buffet Mon–Fri. Reclaim your entire work week. Then do the social cooking thing on weekends. You still save 10+ hours a week. You still spend half what everyone else does. And you get to have the dinner thing. Best of both stacks.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Mon–Fri OMAD buffet. Sat–Sun cook at home.</p>
                      <p><strong>Monthly cost:</strong> ~$350–450 buffet + ~$100–200 weekend groceries.</p>
                      <p><strong>Difficulty:</strong> Easy–Medium. Socially compatible.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 10 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                10
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Science (For People Who Need Permission)
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Fine. You want citations. Here&apos;s the science. Keep up.
            </p>

            <div className="grid gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <TrendingDown className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Weight Loss Through Natural Caloric Deficit</p>
                      <p className="text-muted-foreground">
                        Your stomach has a physical size. Even at an all-you-can-eat buffet, one meal caps out at 1,200–2,000 calories. Three meals plus snacks? That&apos;s 2,500–3,500+. The math runs itself. You eat less without counting anything. No apps. No macros. No meal prep containers labeled by day. Just physics.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Mental Clarity &amp; Focus</p>
                      <p className="text-muted-foreground">
                        No post-lunch food coma. Ever again. Ketones. Your brain runs on them during a fast. Cleaner than glucose. Sharper. No 2 PM crash. No mid-meeting fog. People ask what nootropic stack you&apos;re running. The answer is: not eating.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Cardiovascular Health</p>
                      <p className="text-muted-foreground">
                        Intermittent fasting improves blood pressure. Improves cholesterol profiles. Reduces inflammatory markers. Peer-reviewed. Published. Boring to read but the results aren&apos;t boring. Your heart is doing better. Your doctor will be confused but impressed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Nutrient Diversity from Buffets</p>
                      <p className="text-muted-foreground">
                        Your home cooking rotation has 8 meals in it. Maybe 10 if you&apos;re adventurous. A buffet visit hits 15–20 different preparations. Different proteins. Different cooking methods. Different micronutrient profiles. The variety you get from one buffet meal beats a week of meal prep. This is not an opinion. It&apos;s arithmetic.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Flame className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Enhanced Fat Burning</p>
                      <p className="text-muted-foreground">
                        Autophagy. Look it up. Your cells literally clean house when you fast. By the time you walk into the buffet you&apos;ve been running on stored fat for 16–48 hours. That&apos;s the entire point. You eat. You feast. Then you burn it all down. Then you do it again. This is the ancestral cycle. It works because it&apos;s what humans are built for.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-orange-500/30 bg-orange-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Disclaimer</p>
                    <p className="text-muted-foreground">
                      I&apos;m not a doctor. I&apos;m a software engineer who eats at buffets every day. If you have medical conditions, medications that require food, or a history of eating disorders — talk to a healthcare professional before running any fasting protocol. Don&apos;t be stupid about this. Be smart. Like someone who eats at buffets strategically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 11 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                11
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Things People Say Before They Try It
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every objection. Addressed. You&apos;re welcome.
            </p>

            <div className="space-y-5">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;Buffets are unhealthy!&quot;</p>
                  <p className="text-muted-foreground">
                    A buffet is morally neutral. It&apos;s a delivery mechanism. YOU control the plate. No one is forcing fried dough into your hand. You walk up. You choose grilled salmon and steamed vegetables. That&apos;s healthier than 90% of what people cook at home. The buffet didn&apos;t make you eat the dessert station. That was a personal decision. Make better decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;Fasting is dangerous!&quot;</p>
                  <p className="text-muted-foreground">
                    Humans fasted for 200,000 years. Six small meals a day is the experiment. Not fasting. Every major religion on earth includes fasting. Your body has an entire metabolic pathway — ketosis — specifically designed to run efficiently without food. The dangerous thing is the modern pattern of constant eating. Fasting is the baseline. &quot;Three meals plus snacks&quot; is the anomaly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;That&apos;s too extreme!&quot;</p>
                  <p className="text-muted-foreground">
                    You know what&apos;s extreme? Spending 15–20 hours a week on food prep. Washing dishes every day until you die. Throwing away 30% of your groceries because they went bad before you used them. Eating the same chicken and broccoli on repeat while calling it &quot;clean eating.&quot; One buffet meal a day is not extreme. It&apos;s called being efficient. There&apos;s a difference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;Won&apos;t you get bored?&quot;</p>
                  <p className="text-muted-foreground">
                    Your meal prep chicken and broccoli is boring. Your Tuesday pasta is boring. Your sad desk lunch in a Tupperware container is boring. A buffet has infinite variety. Sashimi. Roast beef. Stir-fry. Crab legs. Grilled fish. Soup. Salads with 12 toppings. A completely different combination every single day. Rotate between 2–3 buffets and the variety is literally infinite. Your kitchen could never.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;My friends will think I&apos;m weird.&quot;</p>
                  <p className="text-muted-foreground">
                    Your friends spend $800/month on groceries and throw away 30% of it. You spend $300 eating steak and sashimi daily. Your friends spend 15 hours a week in the kitchen. You spend 45 minutes at a table being served. Give it 90 days. When they see the physique, the energy, the bank account — they won&apos;t think you&apos;re weird. They&apos;ll want the guide. Send them this one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 12 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                12
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Week 1 Protocol — Just Start
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Theory is done. Here&apos;s exactly what you do. Day by day. No excuses.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-blue-500 text-white rounded-lg p-2 font-bold text-sm">
                    Day 1–2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Recon Phase</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Find 3–5 buffets within range. Google Maps. Check reviews. Look at photos of the actual food not the interior. Scout for protein quality — sushi bar, carving station, grill section. Visit your top 2. Eat normally — this is intelligence gathering, not a protocol day. You&apos;re building the stack. You&apos;re picking your arena. Where&apos;s the sashimi? Is the salmon fresh? What&apos;s the protein-to-filler ratio? Take notes. Pick your primary.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-green-500 text-white rounded-lg p-2 font-bold text-sm">
                    Day 3–4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">16:8 Intro</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Skip breakfast. Coffee is fine. Black. No sugar. No milk. First meal is buffet lunch at noon. Run the Plate Method. Protein first. Vegetables second. Wildcard third. Light dinner at home if you need it — keep it small. Notice what happens in the morning without breakfast prep. Notice how 2 free hours appear. Notice how satisfied you feel after a proper lunch. Notice how little you actually need for dinner. Your body is already adapting. Let it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-orange-500 text-white rounded-lg p-2 font-bold text-sm">
                    Day 5–6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">OMAD Test</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Level up. Try a full OMAD day. No breakfast. No dinner. One buffet meal. Apply the full protocol — recon walk, protein first, value stack, water only. Eat until comfortably full. Not stuffed. There&apos;s a difference. Then observe. Check in at 3 PM. Are you hungry or just thinking about food? Check at 6 PM. Check at 9 PM. Most people are surprised. The big protein meal holds. Your body is burning. Trust it.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-purple-500 text-white rounded-lg p-2 font-bold text-sm">
                    Day 7
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reflect &amp; Pick Your Protocol</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    One week in. How do you feel? Time saved — add it up. Money saved — check the math. Energy levels — better, worse, same? Weigh yourself if you want. Now decide: which protocol are you running going forward? Starter, OMAD, Warrior, or Social. There&apos;s no wrong answer. The best protocol is the one you can run indefinitely. Pick it. Commit. Week 2 starts tomorrow.
                  </p>
                </div>
              </div>
            </div>

            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-3">What to Track</p>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1"><Scale className="w-3 h-3" /> Body weight — weekly</span>
                      <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Energy levels — daily, 1–10</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Hours saved from cooking</span>
                      <span className="flex items-center gap-1"><Target className="w-3 h-3" /> Money spent on food</span>
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> How you feel overall</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3" /> Buffet quality scores</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Closing Section */}
          <section className="mb-16 print:break-before-page">
            <div className="text-center mb-10">
              <Trophy className="w-14 h-14 text-primary mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See You at the Buffet
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              The protocol works. The math works. The science works. You now have all three.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Has not used his oven since March 2019. The spider is still there. They have an understanding.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Monthly food cost is lower than most people&apos;s grocery bill alone.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> 10–15 hours per week reclaimed. Every week. Compounding.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Wider variety of high-quality protein than anyone cooking at home.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Healthy body composition. Doctor described it as &quot;surprisingly good, considering.&quot;</p>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              People will tell you this is crazy. These are the same people spending $800/month on groceries and throwing away 30% of it. They eat the same four meals on rotation and call it cooking. You&apos;re sitting down at a clean table, eating world-class sashimi and prime rib for $15, and walking out. One of us is crazy. It&apos;s not you anymore.
            </p>

            <div className="text-center mt-10">
              <p className="text-2xl font-bold mb-3">See you at the buffet.</p>
              <p className="text-muted-foreground italic mb-2">— Benjamin Karlsson</p>
              <p className="text-sm text-muted-foreground/70">
                Software Engineer. Carnivore. The guy who eats at a buffet every day.
              </p>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* Back Page / CTA */}
          <section className="print:break-before-page">
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Buffet?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Use our community-driven restaurant finder to discover the best quality buffets near you. Rated by fellow Buffet Dieters for protein quality, value, and overall experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center no-print">
                <Link href="/restaurants">
                  <Button size="lg" className="text-lg px-8">
                    <Utensils className="w-5 h-5 mr-2" />
                    Find Buffets Near You
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="mt-12 text-muted-foreground text-sm">
                <p className="mb-2">Join the Buffet Diet Community</p>
                <p>thebuffetdiet.com</p>
              </div>
            </div>
          </section>


          {/* Download CTA at bottom */}
          <div className="no-print sticky bottom-4 flex justify-center mt-8 mb-4">
            <Button
              size="lg"
              onClick={handleDownloadPDF}
              className="shadow-lg text-lg px-8 py-6"
            >
              <Download className="w-5 h-5 mr-2" />
              Download This Guide as PDF
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
