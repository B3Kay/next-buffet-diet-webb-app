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
                How This Started
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              So I&apos;m a software engineer, building startups, training weighted calisthenics
              like 3-4 times a week and gymnastics another 3, and at some point I went full
              carnivore because that&apos;s just where the rabbit hole took me. And here&apos;s the
              thing about carnivore that nobody warns you about — you just stop being hungry all
              the time. Like, the constant background noise of &quot;I should eat something&quot;
              goes quiet. You eat a pile of meat, you&apos;re done for hours. Sometimes you look up
              and it&apos;s been a full day and you forgot to eat and you feel... fine? Better than fine
              actually. Sharp. So naturally you start pushing it.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              First I tried 24 hours. Nothing. Easy. Then 3 days, just water. Felt kind of amazing
              honestly, like this weird clarity kicks in around day 2 that I can&apos;t really explain
              to people who haven&apos;t done it. Then I did 5 days. Five days no food. And somewhere
              around day 4 I remembered — oh right, I have a half marathon in two days.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-xl text-center italic font-medium">
                  Ran it anyway. Felt fine. Your body has stored energy — that&apos;s literally
                  what body fat is for. Your ancestors didn&apos;t carb load before chasing dinner
                  across the savanna. Anyway.
                </p>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              But here&apos;s where the actual problem was. Carnivore plus serious training means you
              need a LOT of protein. Like genuinely absurd amounts of meat. And I&apos;m running
              companies, I&apos;m in the gym constantly, I do not have time to come home and pan-sear
              1.5 kilos of steak every single day. And sourcing that volume of quality meat from the
              grocery store was getting expensive fast. So the diet was right, the training was right,
              but the logistics of actually feeding myself were completely broken.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              And the whole time there are these two all-you-can-eat buffets sitting right there, one
              on each side of the road next to my office. I&apos;d walked past them literally every day
              for months without thinking about it. Then one day I&apos;m 36 hours into a fast and
              something just clicks — wait. Unlimited meat. Cooked for me. No cleanup. $15. I walked
              in, sat down, ate what was probably an irresponsible amount of salmon and roast beef,
              walked out, and didn&apos;t want food for the rest of the day. Just... done. One meal.
              Full. No dishes in the sink. No tupperware situation. Nothing.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              So then I got my best friend involved because that&apos;s what you do when you
              find something good — you drag someone into it. He was overweight, kind of stuck in
              the usual cycle, and I was like, just come eat lunch with me. Every day. We&apos;ll
              make it a thing. And it became this whole... game between us. Like two engineers
              who maybe have too much competitive drive sitting across from each other at a buffet
              trying to figure out the meta. Which stations do you hit first? What&apos;s the protein
              density play? How do you extract maximum value before your stomach taps out? We were
              basically running optimization problems on lunch. It was genuinely fun. Great food,
              good company, ridiculous conversations about buffet strategy. Every single day.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              And then — and this is the part where my brain kind of broke — I looked at my bank
              statement. And I wasn&apos;t spending more on food. I was spending <strong>less</strong>.
              No groceries. No takeout. No food waste rotting in the fridge. Just one buffet per day.
              And immediately the engineer brain goes: okay well what if I eat every <em>second</em> day?
              Same amount of food when I eat, same satisfaction, but now the cost literally cuts in
              half. There aren&apos;t many things in life where you can consume the exact same quality
              and quantity of food and just... halve the bill. That&apos;s not a diet trick, that&apos;s
              arbitrage.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              So I tested it. Every other day. Then pushed to every third day because why not. Three
              days without food was kind of the ceiling for me — past that it stops being a protocol
              and starts being an ordeal. And honestly even every other day isn&apos;t exactly a
              party. But the time you get back is insane. No cooking, no cleaning, no grocery runs,
              no meal prep Sunday. All those hours just... go back into your business. Into training.
              Into your actual life. And that&apos;s how this whole thing started. Not with some grand
              plan. Just a hungry engineer who noticed the buffet across the street was a better deal
              than his own kitchen.
            </p>

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">The Protocol</p>
                    <p className="text-muted-foreground">
                      Fast. Walk to buffet. Stack protein. Leave satisfied. Don&apos;t eat
                      again until tomorrow — or the day after. Spend less than you did on
                      groceries. Lose fat. Save time. Build things that matter with the hours
                      you got back. It&apos;s that simple.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />


          {/* Chapter 2 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Current Food System Is a Psyop
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Before we go further I need you to actually look at what you&apos;re doing right now with food. Not what you think you&apos;re doing. What you&apos;re actually doing. Because most people have never stopped to audit this and when they do it&apos;s genuinely horrifying.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The food pyramid was a psyop. &quot;Breakfast is the most important meal of the day&quot; was a marketing slogan from a cereal company. Six small meals a day to &quot;stoke your metabolic fire&quot; is propaganda that the snack industry funded into existence. None of this is ancestral. None of this is how humans ate for 200,000 years. Your great-great-grandfather didn&apos;t have a meal prep container or a scheduled 10am snack. He ate when food was available and he performed when it wasn&apos;t. He was fine. He was probably in better shape than you. Sorry.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Here&apos;s what &quot;normal eating&quot; actually looks like for most people. You wake up, eat something out of obligation (or skip it and feel guilty, as if toast is a moral requirement), go to work, eat a sad desk lunch from a plastic container you packed the night before in a ritual you call &quot;meal prep&quot; but which more accurately resembles packing a school lunchbox for yourself as an adult. Then you come home exhausted, stare into the fridge for ten minutes as if the ingredients might spontaneously assemble themselves, cook something mediocre or spend $28 on pad thai from an app, clean up, go to sleep, and do it all again tomorrow. And the day after. And the day after that. For the rest of your life.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Lets look at the actual numbers because until you see them written down you will not believe how much of your life you are donating to food logistics:
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
                        <span className="font-mono">1-2 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Grocery shopping (including transit)</span>
                        <span className="font-mono">2-3 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Cooking (3 meals/day)</span>
                        <span className="font-mono">7-10 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Dishes, cleanup, putting away</span>
                        <span className="font-mono">3-5 hours</span>
                      </li>
                      <li className="flex justify-between border-t pt-2 font-semibold">
                        <span>Total</span>
                        <span className="font-mono text-primary">13-20 hours/week</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Thirteen to twenty hours a week. That is a part-time job. You are working a part-time job whose entire output is feeding yourself the same 5-6 meals on rotation, half of which get eaten standing over the kitchen counter while you scroll your phone. You&apos;re doing this every week. You will do this every week until you die. And nobody has stopped to ask if maybe there&apos;s a better way to do this.
            </p>

            <Card className="mb-6 border-destructive/20 bg-destructive/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Meal Prep Is Cope</p>
                    <p className="text-muted-foreground">
                      The fitness industry&apos;s favorite solution. Spend your entire Sunday cooking 21 identical meals, stack them in matching plastic containers like a psychopath, eat the same reheated chicken breast for 7 days straight. This is presented as &quot;discipline.&quot; It&apos;s actually just misery with a macros spreadsheet. Meal prep is outsourcing your suffering to Sunday-you so that weekday-you can eat cold sad protein out of tupperware and call it a lifestyle. Pass.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              And restaurants? Sure, someone else cooks for you. But you&apos;re paying $20-40 for a portion that was designed by an accountant, not a chef. 200 grams of protein, a decorative sprig of parsley, and the privilege of tipping 20% for someone to carry it 8 meters. Three meals a day at restaurants is $60-120 per day. $1,800-3,600 per month. Nobody is doing that. And if they are, they should be reading this guide even more urgently.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The system is broken. The time cost is broken. The financial cost is broken. And somehow the food still isn&apos;t even that good. There has to be a better protocol. Keep reading.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 3 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                3
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Buffetmaxxing Protocol
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              So here&apos;s the thing that I genuinely cannot believe more people haven&apos;t figured out. Buffets solve every single problem I just described. Not partially. Not &quot;kind of.&quot; Completely. Zero cooking, infinite variety, total portion control, better nutrition than what most people eat at home, and the cost is lower than your grocery bill. The fact that this isn&apos;t mainstream knowledge tells me the food industry has done an incredible job making you feel weird about eating at buffets. That stigma is protecting their business model. You are about to see through it.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              &quot;But buffets are where people go to get fat!&quot; Right. And gyms are where people go to get hurt. Knives are what people use to cut themselves. The tool is neutral. The strategy is everything. Most people go to buffets and load up on bread, fried rice, desserts, and fountain soda. Those people are playing a completely different game than you. They&apos;re subsidizing your sashimi habit and they don&apos;t even know it.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                {
                  icon: ChefHat,
                  title: "Zero Cooking Overhead",
                  desc: "Walk in. Food is ready. Walk out. No shopping list, no grocery run, no prep, no cooking, no dishes, no putting things away. You just eliminated that 13-20 hour weekly time tax in a single move. All that time goes back into your business, your training, your life. This alone should be enough to convince you.",
                },
                {
                  icon: Utensils,
                  title: "Infinite Variety",
                  desc: "Sashimi, roast beef, grilled salmon, tandoori chicken, steamed vegetables, Korean BBQ — all from the same location, on rotation, every day. Your meal prep chicken breast could never compete with this. Dietary variety isn't a luxury — it's how you get micronutrient completeness without thinking about it. The buffet handles this automatically.",
                },
                {
                  icon: Target,
                  title: "You Control Everything",
                  desc: "This is the one everyone misses. At a regular restaurant, a cost-conscious kitchen decides your macros. At a buffet, YOU do. Want 600g of salmon and zero carbs? Done. Running a high-protein carnivore feast? Stack the plate. Nobody is stopping you. No portion anxiety. No ordering three entrees and getting judged by the waiter. Total control.",
                },
                {
                  icon: Users,
                  title: "Zero Social Friction",
                  desc: "Bring your vegan friend. Bring your carnivore training partner. Bring your mom. Everyone finds something. The 'where should we eat?' debate is over forever. My best friend and I ate at a buffet together every single day and it was some of the best social time I've had. Good food, ridiculous conversations, competitive protein stacking. It's genuinely fun.",
                },
                {
                  icon: Star,
                  title: "Quality Exists",
                  desc: "We're not talking about the sad pizza carousel at a highway rest stop. Sushi buffets with fresh-cut sashimi. Brazilian steakhouses where they bring you swords of meat. Hotel brunch spreads with carving stations. Korean BBQ where you grill your own wagyu. Find the right spot and the quality-per-dollar ratio is genuinely absurd.",
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
              Time math. Buffet protocol: walk there (10 min), eat (30-45 min), walk back (10 min). About <strong>1 hour per eating event</strong>. Normal eating: 2-3 hours per day minimum between planning, shopping, cooking, and cleaning. That&apos;s <strong>10+ hours a week</strong> you just got back. Every week. What are you going to do with an extra 10 hours? I built a company with mine. You can do whatever you want. The point is those hours exist now and they didn&apos;t before.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">You vs. The Buffet&apos;s Business Model</p>
                    <p className="text-muted-foreground">
                      The buffet makes money when you fill up on bread, rice, pasta, and dessert — high volume, pennies per serving. That&apos;s their margin. You win by ignoring all of that and going straight for the premium proteins. Salmon, sashimi, prime rib, crab legs — the stuff that costs THEM $8-12 per plate. You pay $15, you extract $30-40 of food. That&apos;s not eating out. That&apos;s value arbitrage. And the guy next to you eating his body weight in lo mein is literally subsidizing your sashimi habit. You should send him a thank you card.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 4 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                4
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Fasting Stack
              </h2>
            </div>
            <p className="text-lg text-primary font-medium mb-6 italic">
              This is where the whole thing clicks.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The buffet alone is already a strong protocol. But when you stack it with fasting, it becomes something else entirely. This is the combination that sounds made up when you explain it to people, and then they see your results and your bank statement and get very quiet.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Intermittent fasting is not a diet. It&apos;s a timing protocol. Not about what you eat — about when you eat. You cycle between eating and not eating. That&apos;s it. Humans have been doing this for the entire history of the species. Your ancestors didn&apos;t eat 6 small meals a day while being chased across the savanna. They ate when food was available, they fasted when it wasn&apos;t, and their bodies ran beautifully on both. Your body is the same hardware. It&apos;s designed for this. The &quot;eat every 3 hours or your metabolism shuts down&quot; thing is straight up propaganda from the snack industry. Your metabolism doesn&apos;t shut down. It shifts gears. That&apos;s what metabolic flexibility IS.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For me it happened naturally through carnivore. You eat just meat, you stop being hungry every 2 hours, your eating window naturally compresses. First you&apos;re eating twice a day, then once, then you&apos;re doing 36 hours without food and feeling better than you ever did eating 3 meals. Then you do 3 days. Then 5 days. Then you remember you have a half marathon and run it fasted. And at that point you realize — oh, the body is WAY more capable than the food industry wants you to believe. They need you eating constantly. Your biology does not.
            </p>

            <div className="grid gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Timer className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">16:8 — Entry Level</p>
                      <p className="text-muted-foreground">
                        Fast 16 hours, eat within an 8-hour window. Mechanically this is just skipping breakfast. That&apos;s literally it. Most people are already halfway doing this — they just feel guilty about it because a cereal company told them breakfast is the most important meal of the day. It&apos;s not. Stop feeling guilty. Start here.
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
                        24-hour fast. One meal. This is where the buffetmaxxing protocol becomes obvious. If you only eat once a day, that meal needs to be incredible. Not a sad bowl of soup. Not a protein shake. A real feast — high protein, high variety, completely satisfying. You know what place offers exactly that for $15? Right.
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
                      <p className="font-semibold mb-1">48-Hour — The Full Stack</p>
                      <p className="text-muted-foreground">
                        Eat every other day. One massive feast every 48 hours. This is the configuration that cuts your food costs literally in half. Same food, same satisfaction, half the price. Not for day one. But when you get here, the time and money savings are absurd. All that recovered time goes back into your work and training. This is when the protocol reaches its final form.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">The Science. Briefly.</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Autophagy</strong> — kicks in around 16-24 hours. Your cells literally start eating their own damaged components. Cellular housekeeping. The trash gets taken out. This is real, documented, and the reason fasting makes you feel weirdly sharp after day 1.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Insulin Sensitivity</strong> — fasting resets your insulin response. When you do eat, your body handles the fuel efficiently instead of panic-storing everything. The feast after the fast is metabolically different from eating the same food in a constant-fed state.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Metabolic Flexibility</strong> — your body learns to switch between burning glucose and burning fat without drama. You stop being dependent on constant food input to function. This is called being a metabolic adult. Most people never get here because they&apos;re eating every 3 hours.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Growth Hormone</strong> — HGH spikes significantly during fasting. Preserves lean muscle mass while burning fat. Very relevant if you train hard and care about body composition. Which you do, otherwise you wouldn&apos;t be reading this.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              You&apos;re not starving. Starving is having no food. This is choosing not to eat because in a few hours you&apos;re going to sit down at an all-you-can-eat buffet and demolish an irresponsible amount of premium protein. That is not deprivation. That is anticipation. That is the stack.
            </p>
          </section>

          <Separator className="mb-16" />

{/* Chapter 5 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">5</div>
              <h2 className="text-3xl font-bold">The Math</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I&apos;m about to show you numbers so embarrassingly simple that you&apos;ll feel personally attacked for every grocery haul you&apos;ve ever posted on Instagram. We&apos;re talking about the financial case for buffet-based nutrition, and honestly, the fact that more people haven&apos;t figured this out tells me the meal prep industrial complex has been running one of the most successful psyops of our generation.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Let&apos;s start with what most people are doing. You go to the grocery store, you buy chicken breast at $5/lb, some vegetables that will rot in your crisper drawer within 4 days (we both know this is true), rice, eggs, maybe some overpriced protein bars because the packaging had a picture of a shredded guy on it. You&apos;re spending $500-800 a month on groceries. And that&apos;s BEFORE we talk about the time cost. Meal prepping takes 3-4 hours per week minimum. At even $20/hour for your time, that&apos;s another $240-320/month. You&apos;re bleeding close to a thousand dollars a month to eat the same sad tupperware chicken every day. And you think THIS is the optimized path?
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Now let me show you what happens when you stop playing their game.
            </p>

            <Card className="mb-6 border-green-500/20 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">OMAD Buffet Protocol — The Numbers</h4>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      One meal a day at a quality buffet runs you $15-20. That&apos;s it. That&apos;s your entire food budget for the day. You walk in, you demolish 120-180g of premium protein across multiple sources, you get your micronutrients from an actual variety of vegetables instead of the same steamed broccoli you&apos;ve been choking down since 2019, and you walk out. Done.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Monthly cost: $450-600</p>
                      <p className="text-sm text-muted-foreground">Compare to $500-800 groceries + $240-320 in time costs. You&apos;re saving money AND getting 3-4 hours of your life back every single week. The math is undeniable.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              But it gets even more ridiculous when you pair this with extended fasting windows.
            </p>

            <Card className="mb-6 border-yellow-500/20 bg-yellow-500/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <TrendingDown className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">48-Hour Cycle Protocol — The Cheat Code</h4>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      If you&apos;re running the 48-hour refeed cycle from Chapter 4, you&apos;re eating roughly 15 buffet meals per month. Fifteen. At $15-20 per visit, that&apos;s $225-300 per month for ALL of your food. Let that sink in.
                    </p>
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="font-semibold mb-1">Daily average: $8-10/day for ALL your nutrition</p>
                      <p className="text-sm text-muted-foreground">That&apos;s less than a single Chipotle bowl. You are eating like royalty — sushi, prime rib, crab legs — for the price of a sad desk lunch. Meanwhile your coworker just spent $14 on a grain bowl with 22g of protein.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Here&apos;s the part that really makes my brain light up though. The value arbitrage. When you sit down at a buffet and pay $15-20, the restaurant is pricing that ticket based on the AVERAGE customer. The average customer fills up on bread, drowns themselves in fountain soda, eats two plates of fried rice, then grabs a slice of cake and waddles out. That customer cost them maybe $4-5 in food. You are not that customer. You are walking in and systematically extracting $30-40 worth of premium protein — sashimi, carved meats, shellfish, grilled fish. You&apos;re not a customer. You&apos;re a liability on their balance sheet. You are the reason their food cost percentage keeps the manager up at night.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Think about it like this. The guy next to you eating his body weight in lo mein is literally subsidizing your sashimi habit. He&apos;s paying $18 to eat $3 worth of noodles so that the restaurant can afford to put out the salmon that you&apos;re about to inhale. This is wealth transfer, but for macros. You should send him a thank you card honestly.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">The Bottom Line</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      You save $200-500/month compared to traditional grocery shopping. You eliminate 15-20 hours of monthly meal prep. You get access to more protein variety in a single sitting than most people eat in a week. You pay $8-20/day to eat like you have a personal chef. There is no financial argument against this. The only thing standing between you and this life is the weird guilt society programmed into you about going to a buffet alone. Get over it. Your bank account will thank you.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 6 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">6</div>
              <h2 className="text-3xl font-bold">Buffet Counter-Intelligence</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Listen to me very carefully. The buffet is not your friend. The buffet is a business, and that business has one goal: make you fill up on the cheapest possible ingredients so they can pocket the difference between what you paid and what you actually consumed. They have literally hired psychologists and behavioral economists to design the layout, the lighting, the plate sizes — all of it engineered to make you a cheap date. This is a psyop, and you&apos;ve been walking into it with zero counter-intelligence training. Until now.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I&apos;ve identified 8 tactics they use against you. Learn these, internalize them, and you will never fall for their tricks again. You&apos;ll walk through that buffet line like a Navy SEAL walking through a room of laser tripwires — calm, calculated, untouchable.
            </p>

            <div className="grid gap-4 mb-8">
              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">1. The Bread &amp; Carb Wall</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Every buffet on planet earth puts the bread, rolls, naan, and pasta RIGHT at the entrance. This is not a coincidence. This is the oldest trick in the book. Bread costs them literally pennies per serving and it fills your stomach with a dense, expandable mass that kills your capacity for the expensive stuff. They want you full before you even see the carving station. It&apos;s the nutritional equivalent of filling your shopping cart with packing peanuts before you get to the actual products.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Walk past the entire bread section like it doesn&apos;t exist. Pretend it&apos;s an ex at a party. Eyes forward, zero acknowledgment. Your first interaction with the buffet should be at the protein station. Period.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">2. The Small Plate Illusion</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Notice how buffet plates are always slightly smaller than what you&apos;d use at home? This is straight out of behavioral psychology. The Delboeuf illusion — food looks like a bigger portion on a smaller plate, so your brain thinks you&apos;ve eaten more than you have. Except in this context, they WANT you to think you&apos;re getting a lot so you stop going back. It&apos;s brilliant and evil simultaneously. Your brain sees a &quot;full plate&quot; and starts sending premature satisfaction signals. You&apos;ve been gaslit by dinnerware.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Ignore the visual. Count your trips by protein content, not by plates. Your target is a specific gram amount of protein, not a specific number of &quot;full plates.&quot; If they have larger plates anywhere — the salad bar sometimes has bigger ones — use those. No shame in your game.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">3. The Soda Sugar Trap</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        &quot;Free refills!&quot; they announce proudly, like they&apos;re doing you a favor. That fountain soda costs them about 3 cents per cup. Meanwhile you&apos;re slamming 600+ calories of pure liquid sugar that spikes your insulin, triggers a hunger-then-crash cycle, bloats you with carbonation so you eat less protein, and takes up stomach volume that should be reserved for sashimi. They are paying 3 cents to rob you of $8 worth of salmon. That&apos;s a 26,000% ROI against you personally.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Water. Just water. Maybe unsweetened tea or black coffee if they have it. Zero calorie liquids only. Every sip of Coke is a bite of prime rib you&apos;re leaving on the table. If you need flavor, a squeeze of lemon in your water. That&apos;s it. That&apos;s the whole strategy.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">4. The Dessert Showstopper</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Oh look, a beautiful three-tier chocolate fountain next to a display of mini cheesecakes that look like they belong in a Parisian patisserie. Gorgeous. Stunning. Also about $1.50 worth of ingredients styled to look like $20 of dessert. The dessert station is the final boss of buffet psyops. It&apos;s positioned to be the grand finale of your meal, the emotional reward, the &quot;treat yourself&quot; moment. It&apos;s pure theater. That chocolate fountain is running the same chocolate over and over through a heated pump. It&apos;s dessert recycling.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">If you absolutely must have something sweet, grab fresh fruit. Otherwise, recognize this for what it is — the buffet&apos;s last attempt to fill you with cheap sugar before you go back for more crab legs. You didn&apos;t come here for a $1.50 brownie. You came here for $40 worth of protein. Stay locked in.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">5. The Hidden Premium Zone</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        The expensive stuff — the carving station, the sushi bar, the seafood section — is always tucked in the back corner or off to the side where the foot traffic is lowest. This is intentional. They know that most people load up their plate in the first 30 seconds of entering the buffet line and then just find a seat. By hiding the premium options, they ensure that the majority of customers never even discover the good stuff. It&apos;s like burying the terms and conditions — most people won&apos;t scroll that far.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Always do a full lap before you pick up a plate. Recon walk the entire buffet. Find every station. The carving station in the back corner? That&apos;s your new home base. The sushi counter that&apos;s weirdly far from everything else? That&apos;s your second home. Map the terrain before you engage.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">6. The Sauce &amp; Dressing Calorie Bomb</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        That creamy garlic sauce, the sweet chili glaze, the ranch dressing pooling on the salad bar — these are calorie delivery vehicles disguised as flavor enhancers. A single ladle of cream sauce can pack 200-300 calories of pure cheap fat and sugar onto your plate. The buffet LOVES sauces because they make cheap ingredients taste amazing while destroying your caloric budget. You came here for 8oz of grilled salmon and accidentally turned it into a 600-calorie cream dish because you didn&apos;t respect the sauce.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Sauces on the side, always. Or better yet, skip them entirely and use lemon, vinegar, hot sauce, or soy sauce — condiments that add flavor without caloric ambush. If a protein is drowning in sauce at the buffet, look for the plain version or ask the station chef. Yes, you can talk to them. They&apos;re right there.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">7. Time Pressure</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Some buffets have a time limit (usually 90 minutes). Even the ones that don&apos;t will subtly create urgency — servers clearing your plate the second you put your fork down, asking if you want the check while you&apos;re mid-chew, refilling the bread station constantly while letting the prime rib run out. The rush mentality makes you eat faster, choose worse, and leave earlier. You start panic-loading your plate with whatever&apos;s closest instead of being strategic. This is exactly what they want. A flustered customer is a cheap customer.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Slow down. You paid for this time. Eat methodically, take breaks between plates, let your satiety signals catch up. If there&apos;s a time limit, know it going in and plan your plates accordingly. And if the server asks if you want the check while you&apos;re clearly still eating — just smile and say &quot;not yet.&quot; You&apos;re not here to make their table turnover metrics look good.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

              <Card className="mb-6 border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">8. The Starch &amp; Oil Trap</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        This one is sneaky and it&apos;s everywhere at Asian buffets especially. That &quot;stir-fried chicken&quot; that looks like protein? It&apos;s 40% cornstarch and potato starch by weight, deep-fried in seed oil, then tossed in a sugary glaze. The &quot;Thai basil beef&quot; is a thin layer of meat swimming in a pool of oil thickened with starch. These dishes look like protein but they&apos;re actually cheap carb and fat delivery systems wearing a protein costume. The buffet takes $2 of chicken, coats it in $0.10 of cornstarch and oil, and suddenly it looks like a generous protein portion. You eat three pieces thinking you got 40g of protein — you actually got 15g of protein and 300 calories of inflammatory seed oil and refined starch. This is probably the most common trap that even experienced buffet-goers fall for.
                      </p>
                      <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <p className="font-semibold text-green-600 mb-1">Counter-move:</p>
                        <p className="text-sm text-muted-foreground">Prioritize single-ingredient proteins you can identify. Sashimi — just fish. Carved roast beef — just beef. Steamed shrimp — just shrimp. If the protein is coated, glazed, battered, or swimming in sauce, treat it as suspicious. The absolute best for this protocol are cook-to-order spots like Mongolian BBQ where you pick your own raw meat and they grill it in front of you. You know exactly what you&apos;re getting. No hidden starch. No mystery oil. Just protein.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">The New Dynamic</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Once you internalize these 8 tactics, the power dynamic at any buffet completely inverts. You&apos;re not a mark anymore. You&apos;re an apex predator who happens to walk upright and pay a cover charge. Every layout trick, every psychological nudge, every cheap filler — you see through all of it. The buffet manager should be scared of you. You walk in with a plan, you execute with precision, and you extract maximum nutritional value while the guy next to you is on his third plate of garlic bread wondering why he&apos;s tired all the time. They designed this system to exploit the average person. You are no longer average.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 7 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">7</div>
              <h2 className="text-3xl font-bold">How to Win — The Strategy Guide</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Alright. You understand the science, you know the financial case, you can see through every trick they throw at you. Now it&apos;s time for the actual playbook. These are my 10 non-negotiable rules for absolutely dominating a buffet visit. I&apos;ve refined these over hundreds of buffet sessions and I can tell you with complete confidence — this is the most efficient way to feed yourself at an all-you-can-eat establishment. Follow these and you will walk out every single time with 150+ grams of premium protein, a full micronutrient profile, and the quiet satisfaction of someone who just gamed a system that was designed to game you.
            </p>

            <div className="grid gap-4 mb-8">
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">1. The Recon Walk</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Before you touch a plate, walk the entire buffet. Every station, every corner, every sneaky little section they tucked behind a pillar. This is non-negotiable. You need to know what you&apos;re working with before you commit a single square inch of plate real estate. I&apos;ve seen guys load up on mediocre chicken stir-fry only to discover there was a full sushi station around the corner. That&apos;s like buying a Honda Civic without checking if the dealership has a BMW section. Take 2-3 minutes, do a full lap, identify your high-value targets, mentally plan your plates, THEN grab your first plate. Professionals plan. Amateurs react.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">2. Protein First Protocol</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Your first plate is 100% protein. I don&apos;t care how good the mac and cheese looks. I don&apos;t care if they have truffle fries. Plate one is nothing but the highest quality protein you identified during your recon walk. Sashimi, grilled chicken, carved prime rib, steamed shrimp, roasted salmon — whatever the premium protein options are, that&apos;s your entire first plate. This is non-negotiable and it&apos;s the single most important rule. Your body is most efficient at utilizing protein when you&apos;re eating in a fasted state. That first plate is hitting your muscles like rain on a dry sponge. Every gram is getting absorbed and allocated. Don&apos;t waste this window on breadsticks.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">3. The Value Stack</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Eat what costs THEM the most. This is the core principle of buffet arbitrage. Every item on that buffet has a cost-to-the-restaurant, and your job is to maximize the gap between what you paid and what you consumed. Think of yourself as a value investor, but instead of stocks, you&apos;re investing in sashimi-grade tuna.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                          <p className="font-semibold text-green-600 mb-2">Stack This</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>Sashimi &amp; sushi (raw fish)</li>
                            <li>Carved prime rib / roast beef</li>
                            <li>Crab legs &amp; shrimp</li>
                            <li>Grilled salmon / tuna</li>
                            <li>Lamb chops</li>
                            <li>Oysters &amp; shellfish</li>
                          </ul>
                        </div>
                        <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
                          <p className="font-semibold text-red-600 mb-2">Skip This</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>Bread &amp; rolls</li>
                            <li>Fried rice &amp; noodles</li>
                            <li>Pasta dishes</li>
                            <li>Mashed potatoes</li>
                            <li>Pizza / flatbreads</li>
                            <li>Soup (it&apos;s mostly water)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">4. The Plate Method</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Three plates. That&apos;s the framework. Not a limit — a structure. Each plate has a mission, and you don&apos;t deviate from the mission. This is how you turn chaos into a system.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Plate 1: Protein</Badge>
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Plate 2: Vegetables &amp; Protein</Badge>
                        <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Plate 3: Wildcard</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Plate 1 is pure protein — we covered this. Plate 2 is vegetables with a side of more protein. Get your greens, your colors, your micronutrients. Plate 3 is your wildcard — this is where you can grab a second round of your favorite protein, try something new, or yes, even have a small portion of something fun. You&apos;ve earned it. The key is that by plate 3, you&apos;ve already secured 100+ grams of protein and a full spectrum of vegetables. The wildcard plate is playing with house money.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-orange-500/20 bg-orange-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Flame className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">5. The Extended Fast Refeed Order</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Ok this one is critical and nobody talks about it. When you&apos;re coming off a 48 or 72 hour fast, your problem isn&apos;t willpower — it&apos;s capacity. You sit down with this massive caloric deficit that needs filling and your stomach has literally shrunk. You feel full after one plate and you&apos;re sitting there like &quot;I just fasted for three days and I ate 800 calories.&quot; That&apos;s not gonna cut it.
                      </p>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        So here&apos;s the order, and it matters:
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2">
                          <Badge className="bg-red-500/10 text-red-600 border-red-500/20">Phase 1</Badge>
                          <span className="text-muted-foreground"><strong>Protein first.</strong> Always. This is non-negotiable. Your body is a dry sponge right now — it&apos;s going to absorb and utilize protein more efficiently than at any other time. Get your meat in.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Phase 2</Badge>
                          <span className="text-muted-foreground"><strong>Vegetables and starchy carbs.</strong> Rice, pasta, sweet potatoes — your glycogen stores are completely depleted and these are going straight into your muscles. This is the one time carbs are genuinely your friend.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">Phase 3</Badge>
                          <span className="text-muted-foreground"><strong>Fat + sugar combos.</strong> Yes. Ice cream. This is not a joke. Fat and sugar together is the most calorie-dense combination that exists AND it makes you want to eat more. That&apos;s normally a trap — but after a 72 hour fast? It&apos;s a feature. You NEED to push calories in and ice cream is the optimal calorie bump.</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        The reason this order matters: if you eat the ice cream first, you get a sugar spike, feel temporarily full, and you&apos;ve wasted your stomach capacity on empty calories. Protein first guarantees you hit your most important macro. The fat+sugar at the end is strategic — it&apos;s pushing your total calorie count higher when your appetite is already fading. You&apos;re essentially using your body&apos;s hedonic response to calorie-dense food as a tool to overcome the stomach-shrinkage problem.
                      </p>
                      <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        <p className="font-semibold text-orange-600 mb-1">Real talk:</p>
                        <p className="text-sm text-muted-foreground">On a regular OMAD day, you avoid the dessert station. On a 48-72h refeed? You close with it. The protocol flips. Context is everything. A 72 hour fast burns through so much stored energy that getting 2500+ calories in a single sitting becomes genuinely difficult — and that ice cream might be the difference between a successful refeed and an under-recovered one.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">6. Bring a Scale</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Yeah I said it. Bring a portable food scale to the buffet. Is it a little unhinged? Sure. Does it work? Absolutely. The thing about buffet protein is you have zero idea how much you&apos;re actually eating. That pile of grilled chicken could be 40 grams or 120 grams — you literally cannot tell by looking at it. And if the entire protocol is built around hitting your protein target in one meal, guessing is not a strategy.
                      </p>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        A small digital kitchen scale costs $10, fits in your pocket, and turns your buffet from &quot;I think I ate enough protein&quot; into &quot;I know I hit 180 grams.&quot; You don&apos;t need to weigh everything forever — do it for two weeks and you&apos;ll develop a sense for portion sizes that&apos;ll serve you for life. Think of it as calibrating your instrument. After a while you can eyeball 200g of chicken breast with scary accuracy.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Pro tip: weigh your plate empty first, then weigh it loaded. Subtract. Done. Nobody even notices if you&apos;re subtle about it — and honestly, even if they do, who cares. You&apos;re the one hitting your macros while they&apos;re eating their fourth plate of lo mein and wondering why they&apos;re not losing weight.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">7. The Hydration Hack</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Water only. I said this in the counter-intelligence chapter and I&apos;m saying it again because it&apos;s that important. No soda, no juice, no lemonade. Every calorie you drink is a calorie of protein you&apos;re not eating. Liquid calories are the silent killer of buffet performance. I&apos;ve seen guys drink 800 calories of sweet tea and then wonder why they can only manage two plates. Your stomach has a finite volume — don&apos;t fill it with carbonated sugar water. Sip water between plates to aid digestion and reset your palate. That&apos;s it. This isn&apos;t complicated.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">8. Timing Is Everything</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Go for lunch, not dinner. Lunch buffets are typically $3-7 cheaper than dinner with 80-90% of the same food. The protein selection might be slightly smaller, but the value-per-dollar is significantly higher. Also — go off-peak. Hitting the buffet at 11:30am or 2pm means less competition for the premium stations, fresher food coming out of the kitchen, and less of that rushed feeling from being surrounded by a crowd. The sushi station at noon on a Tuesday versus 7pm on a Saturday is a completely different experience. You&apos;re getting fish that was just sliced versus fish that&apos;s been sitting under a sneeze guard for 45 minutes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">9. Choose Wisely</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Not all protein is created equal at a buffet. Fried chicken is protein, sure, but it&apos;s also wrapped in a coat of oil-soaked breading that turns a lean protein into a calorie bomb. You want to prioritize protein in its cleanest form. Grilled over fried. Steamed over sautéed. Raw (sashimi) over cooked when quality allows. Carved meats over mystery casseroles. If you can identify the animal and the cooking method by looking at it, it&apos;s probably a good choice. If it&apos;s a brown lump in an ambiguous sauce and the label just says &quot;Chef&apos;s Special&quot; — that&apos;s a hard pass. Protein quality over protein quantity. Always.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">10. The Macro Play</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Here&apos;s something nobody talks about — you can hit your macros with surgical precision at a buffet. More precisely than you can with meal prep, honestly. Think about it. You have access to dozens of individual ingredients, each visible and separate. You can build a plate that&apos;s exactly the ratio of protein, fats, and carbs you need. Need 50g protein with minimal fat? Pile up the sashimi and grilled chicken breast. Need to add healthy fats? Hit the salmon and avocado. Want some clean carbs for a post-workout refeed? Sweet potatoes and rice are right there. A buffet is basically a MyFitnessPal dashboard made physical. You just have to know your numbers and build accordingly. This is the most customizable meal on earth and people are out here using it to eat 4 plates of lo mein. Criminal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 8 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">8</div>
              <h2 className="text-3xl font-bold">How to Select a Good Buffet</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Your buffet is your kitchen now. Let that reframe settle in. You wouldn&apos;t build a kitchen with a broken stove and a mini fridge from a college dorm, so stop treating buffet selection like an afterthought. The quality of your buffet directly determines the quality of your nutrition, your results, and frankly, your entire experience with this protocol. Picking the wrong buffet is like buying a gym membership to a Planet Fitness when there&apos;s a powerlifting gym down the street. Technically the same category, but the outcomes couldn&apos;t be more different.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              After years of field research (yes, I&apos;m calling it that), I&apos;ve developed the definitive tier list. This is the buffet meta, and if you disagree with any of it, you haven&apos;t been to enough buffets.
            </p>

            <div className="grid gap-4 mb-8">
              <Card className="mb-6 border-yellow-500/30 bg-yellow-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">S-Tier — The God Tier</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        These are the buffets where the protocol reaches its final form. You will walk out of these places having consumed $40-60+ of premium protein for $20-35.
                      </p>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Brazilian Rodízio / Churrascaria</strong> — Unlimited meat carved tableside. Picanha, lamb, filet mignon, chicken hearts. This is the single greatest protein delivery system ever invented by human civilization. You sit down and they just keep bringing you swords of meat until you physically surrender. It&apos;s like DoorDash but the delivery guy is standing right next to you with a machete.</li>
                        <li><strong>High-end Sushi Buffet</strong> — All-you-can-eat sashimi is the holy grail. Raw fish is the leanest, most bioavailable protein source on the planet. 40g of protein per 200 calories. If you find a place with quality AYCE sushi, you protect that restaurant with your life.</li>
                        <li><strong>Mongolian BBQ / Cook-to-Order</strong> — This is the buffetmaxxing cheat code. You pick your own raw meat — beef, chicken, shrimp, whatever — load up a bowl, hand it to the cook, and they grill it right in front of you on a massive flat top. Zero mystery ingredients. Zero starch coating. Zero seed oil glazes. You know exactly what&apos;s going on your plate because you literally assembled it yourself. The protein-per-dollar here is insane because you&apos;re in full control of the ratio. Stack that bowl with nothing but meat and watch the cook give you a look like &quot;this guy again.&quot; Yes. This guy again.</li>
                        <li><strong>Premium Hotel Brunch</strong> — The weekend brunch at a nice hotel is an absolute sleeper. Omelet stations, smoked salmon, carved meats, shrimp cocktail, fresh fruit. Usually $25-35 and absolutely stacked with premium options. Business travelers aren&apos;t eating enough of the good stuff so there&apos;s always plenty.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-blue-500/30 bg-blue-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">A-Tier — Excellent</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        Slightly below god tier, but still absolutely crushing it for the protocol. You can run the entire system flawlessly at any of these.
                      </p>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Korean BBQ (AYCE)</strong> — You&apos;re literally grilling your own protein to your preferred doneness. Bulgogi, short ribs, pork belly, chicken. High quality marinated meats, total control over cooking. Only reason it&apos;s not S-tier is you have to cook it yourself, which slows down throughput.</li>
                        <li><strong>Hot Pot (AYCE)</strong> — Similar concept to KBBQ but boiled. Thinly sliced beef, lamb, shrimp, fish balls, tofu, vegetables. Super clean protein if you skip the noodles and focus on the meats. Plus the broth is basically free bone broth — collagen city.</li>
                        <li><strong>Indian Buffet with Tandoori</strong> — Massively underrated. Tandoori chicken is grilled lean protein with incredible spice profiles. Add in the dal for plant protein, the raita for probiotics, skip the naan and rice, and you&apos;ve got an incredibly macro-friendly meal. The flavor-to-calorie ratio at a good Indian buffet is unmatched.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-green-500/30 bg-green-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">B-Tier — Solid Options</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        These work. They&apos;re not going to blow your mind, but you can absolutely run the protocol and get great results. Just requires a bit more discipline to navigate the carb traps.
                      </p>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>General Asian Buffet with Sushi Section</strong> — The classic. Wide variety, usually has a sushi station, some grilled meats, seafood options. Quality varies wildly by location so you need to scout. The sushi alone can carry the visit if it&apos;s decent.</li>
                        <li><strong>Mediterranean / Middle Eastern</strong> — Grilled kebabs, shawarma, falafel, hummus, tabbouleh. Good protein options and some of the healthiest sides you&apos;ll find at any buffet. Olive oil based rather than soybean oil. Your cells will thank you.</li>
                        <li><strong>Seafood Buffet</strong> — Can range from B-tier to S-tier depending on the quality. A good seafood buffet with crab legs, oysters, and grilled fish is incredible. A bad one with previously-frozen breaded fish sticks is a disaster. Do your research.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-500/30 bg-red-500/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">F-Tier — Avoid</h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        These are not buffets. These are carbohydrate distribution centers with a sneeze guard. You cannot run the protocol here. Don&apos;t even try.
                      </p>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Pizza Buffets</strong> — It&apos;s just bread with toppings. The &quot;protein&quot; is a thin layer of mystery cheese on a thick slab of refined flour. You&apos;d have to eat 12 slices to hit 50g of protein and by then you&apos;ve consumed 3000 calories of inflammatory wheat and seed oils. Absolutely not.</li>
                        <li><strong>Mystery Meat Steam Table Buffets</strong> — You know the ones. The $7.99 places where everything is a shade of brown, swimming in gravy, and the sneeze guard is doing heavy lifting. If you can&apos;t identify the protein source by looking at it, you shouldn&apos;t be eating it. These places are where macros go to die. The &quot;chicken&quot; has more breading than chicken. The &quot;beef stew&quot; is 90% gravy and potatoes. Hard pass forever.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Now that you know WHAT to look for, here&apos;s HOW to evaluate a specific buffet before you commit. Run through this checklist and if a place hits 6 out of 8, it&apos;s worth your time.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h4 className="font-bold text-lg mb-4">The 8-Point Buffet Selection Checklist</h4>
                <div className="space-y-3">
                  {[
                    "Visible, identifiable protein sources — you can see the actual meat, fish, or seafood. Not hiding in a sauce.",
                    "At least 3 distinct protein options — variety means you won't burn out and you can hit different amino acid profiles.",
                    "A carving station or made-to-order protein — fresh carved or grilled to order means higher quality and you can control portions.",
                    "Sushi or sashimi bar — if they have this, it's almost always worth going. Raw fish is the buffet cheat code.",
                    "High turnover / busy during peak hours — busy buffet means fresh food. Empty buffet means food that's been sitting. Simple math.",
                    "Clean, well-maintained stations — if they care about presentation, they care about food quality. Correlation is nearly 1:1.",
                    "Lunch pricing under $20 — above this, the value proposition starts to weaken unless it's S-tier quality. Your dollar-per-gram-of-protein ratio matters.",
                    "Google reviews 4.0+ with recent positive comments about food freshness — do your due diligence. Five minutes of research saves you from a wasted meal.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              One more thing that nobody talks about — the multi-buffet rotation strategy. This is game theory applied to eating. Don&apos;t go to the same buffet every single time. Rotate between 2-3 spots. Here&apos;s why: first, variety prevents palate fatigue. If you eat the same sushi buffet every day for a month, you&apos;re going to start dreading it no matter how good it is. Second, different buffets have different protein strengths — your Korean BBQ spot covers your red meat days, your sushi buffet covers your fish days, and your Indian spot covers your poultry days. Third, and this is the game theory part — if you show up to the same buffet every single day and consistently crush their premium protein, they WILL notice. I&apos;ve heard stories. Managers adjusting portion sizes, moving the sashimi to a request-only basis, suddenly &quot;running out&quot; of crab legs when they see a regular walk in. Rotate your spots and you stay under the radar. You&apos;re a ghost. Different face at each location. Maximum extraction, minimum suspicion.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Pro Tip: Use the Community</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Check out the community restaurant finder in the app. Other people running this protocol are tagging and rating buffets specifically for protein quality, value, and macro-friendliness. This isn&apos;t a generic Yelp review from someone who thought the breadsticks were &quot;just okay&quot; — these are reviews from people who care about the same things you do. Sashimi freshness, carving station consistency, protein-to-price ratio. Crowd-sourced intelligence from people who are actually playing the same game as you. Use it. Contribute to it. We&apos;re all eating together even if we&apos;re at different tables.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 9 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                9
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Protocols
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Okay so think of these like difficulty settings in a video game. You wouldn&apos;t boot up Elden Ring on NG+7 your first playthrough. Same energy here. You pick the level that matches where you&apos;re at right now, you run it until it feels easy, then you level up. Or you don&apos;t. Some people stay on Protocol 1 forever and still get 80% of the results. There&apos;s no wrong answer here. The only wrong move is not picking one.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I started this whole thing I went straight to Protocol 3 because I have no chill, and honestly it was fine — but I&apos;m also the guy who did a 5-day water fast before a half marathon. You probably want to ease in. That&apos;s smart. Be smarter than me.
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
                      <strong>Fasting: 16:8.</strong> Skip breakfast. Hit the buffet at lunch. Light dinner if your body asks for it.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This is the tutorial level and honestly? Most people are shocked at how good it feels. You skip breakfast — which for most people was a granola bar and guilt anyway — walk into the buffet around noon, stack protein like we talked about, and you&apos;re set. If you need a little something at dinner, cool. Keep it light. An egg. Some yogurt. Whatever. The point is your entire daytime food situation is handled by professionals at a buffet while you do literally anything else with your life. Your kitchen stays clean. Your oven starts collecting dust. Good. It should.
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
                      <strong>Fasting: 24 hours.</strong> One meal. One buffet. Per day. That&apos;s the entire protocol.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      This is where most people end up living permanently and I get it because it&apos;s kind of the perfect equilibrium. You walk in around noon. You eat like an absolute king — salmon, roast beef, grilled chicken, vegetables, the whole spread. You walk out. And then you just... don&apos;t eat again until tomorrow. No dinner decisions. No evening cooking. No dishes. Your kitchen becomes a room where you store water glasses and that&apos;s about it. Your oven might file a missing persons report. When I tap into this protocol, the simplicity hits different — my entire food life is one decision per day and it takes 45 minutes. The other 23 hours are mine.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Buffet lunch daily. Nothing else.</p>
                      <p><strong>Monthly cost:</strong> ~$450–600 total. All-in.</p>
                      <p><strong>Difficulty:</strong> Medium. Hunger cues adapt in 3–5 days. Then it&apos;s autopilot.</p>
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
                      <strong>Fasting: 48 hours.</strong> Eat every other day. One buffet meal on eating days. This is the final boss.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Not gonna sugarcoat it — this one separates the tourists from the residents. You eat Monday. You fast Tuesday. You eat Wednesday. You fast Thursday. On eating days you walk into that buffet and you absolutely demolish the protein station with zero remorse. On fast days you drink water, maybe some black coffee, and you get an ungodly amount of work done because your brain is running on pure ketones and there&apos;s nothing slowing you down. The cost? $225–300 a month. For ALL your food. That&apos;s less than most people spend on coffee. I&apos;m not exaggerating. The fat loss on this protocol is dramatic. The mental clarity is absurd. The savings are almost embarrassing.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Mon/Wed/Fri/Sun buffet. Tue/Thu/Sat fast.</p>
                      <p><strong>Monthly cost:</strong> ~$225–300. Total. Yes really.</p>
                      <p><strong>Difficulty:</strong> Hard. But the results speak loud enough to shut everyone up.</p>
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
                      <strong>Fasting: Weekday OMAD.</strong> Buffet Monday through Friday. Cook with family or friends on weekends.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Look — the Buffet Diet isn&apos;t a cult (yet). If your partner cooks on Saturdays, if Sunday brunch with the family is sacred, if you actually enjoy making a meal with people you love on the weekend — do that. This protocol gives you the best of both worlds. Monday through Friday you&apos;re running full OMAD buffet. Zero food decisions. Zero kitchen time. Maximum efficiency. Then Saturday and Sunday you cook at home, make it a social thing, enjoy it. You still reclaim 10+ hours a week. You still spend half what everyone else does. And nobody can say you&apos;re being weird about it because you literally have the most balanced approach of anyone you know.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 space-y-1">
                      <p><strong>Schedule:</strong> Mon–Fri OMAD buffet. Sat–Sun cook at home.</p>
                      <p><strong>Monthly cost:</strong> ~$350–450 buffet + ~$100–200 weekend groceries.</p>
                      <p><strong>Difficulty:</strong> Easy–Medium. The socially bulletproof option.</p>
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
              Fine. You want citations. You need a guy in a lab coat to tell you it&apos;s okay before you&apos;ll try something that humans have been doing for 200,000 years. I get it. Society broke your trust in your own body. So here — let me give you the science so you can stop overthinking and start eating at buffets.
            </p>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The core mechanism is so simple it&apos;s almost insulting: caloric restriction through meal frequency reduction. Your stomach is a physical organ with a physical size. It can only hold so much food before it says &quot;we&apos;re done here.&quot; When you eat one big meal instead of three medium ones plus snacks, you naturally consume fewer total calories. Not because you&apos;re trying. Not because you&apos;re counting. Because your stomach literally runs out of room. It&apos;s not willpower. It&apos;s plumbing.
            </p>

            <div className="grid gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <TrendingDown className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Weight Loss — The Stomach Is a Bottleneck</p>
                      <p className="text-muted-foreground">
                        Picture your stomach like a gas tank. It holds maybe 1 liter comfortably. One buffet meal maxes out around 1,200–2,000 calories depending on what you choose. Now compare that to three meals plus snacks: 2,500–3,500+. You&apos;re in a caloric deficit every single day and you didn&apos;t download a single tracking app. You didn&apos;t weigh a chicken breast. You just... ate once. Research consistently shows that people who reduce meal frequency don&apos;t fully compensate by eating more at the remaining meal. Your body doesn&apos;t work like that. Protein is incredibly satiating — you hit your wall and you&apos;re done. Trust the wall.
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
                      <p className="font-bold mb-1">Mental Clarity — Your Brain on Ketones</p>
                      <p className="text-muted-foreground">
                        You know that 2 PM feeling where your brain turns into wet cement and you&apos;re staring at your screen like a golden retriever watching a ceiling fan? Gone. Permanently. When you fast, your body switches to burning fat and producing ketones, and your brain runs on those like premium fuel. It&apos;s like upgrading from dial-up to fiber optic. The clarity that kicks in around hour 16-18 of a fast is genuinely hard to describe to people who haven&apos;t experienced it. People at work will ask what nootropic stack you&apos;re on. The answer is: I skipped breakfast.
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
                      <p className="font-bold mb-1">Cardiovascular — Your Heart Will Thank You</p>
                      <p className="text-muted-foreground">
                        Think of intermittent fasting like taking your cardiovascular system to a spa. Blood pressure drops. Cholesterol profiles improve. Inflammatory markers — the ones that silently wreck your arteries over decades — go down. This is peer-reviewed, published, replicated stuff. Boring to read in a journal but the results are anything but boring. Your next blood panel is going to confuse your doctor in the best way possible. &quot;These numbers are... really good. What changed?&quot; I eat at a buffet every day, doc.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1">Nutrient Diversity — The Buffet Advantage</p>
                      <p className="text-muted-foreground">
                        Your home cooking rotation is like a Spotify playlist with 8 songs on repeat. You eat the same chicken breast, the same pasta, the same stir-fry, week after week, and you call it &quot;variety&quot; because sometimes you add sriracha. A single buffet visit hits 15–20 different preparations across multiple protein sources, cooking methods, and micronutrient profiles. Grilled salmon, roast beef, steamed vegetables, sashimi, bone broth, fermented sides — all in one sitting. One buffet meal has more nutritional diversity than most people&apos;s entire weekly meal prep. That&apos;s not an opinion. It&apos;s arithmetic.
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
                      <p className="font-bold mb-1">Fat Burning — The Ancestral Cycle</p>
                      <p className="text-muted-foreground">
                        We covered autophagy in the fasting chapter — your cells eating their own damaged parts, cellular housekeeping, all that. But the bigger picture is this: eat, feast, store energy, burn it all down, repeat. That&apos;s the cycle your biology was literally built for over 200,000 years. We just forgot about it because someone convinced us we need 6 small meals a day and a snack drawer at our desk.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              And before you ask — &quot;but won&apos;t I just overeat at the buffet and cancel it out?&quot; No. Research on meal frequency reduction consistently shows that people don&apos;t fully compensate. You might eat a bigger lunch than normal, sure. But you won&apos;t eat three meals worth of food in one sitting. Your stomach physically won&apos;t let you. And when you&apos;re prioritizing protein — which is the most satiating macronutrient by a mile — you hit the wall even faster. Your body knows when it&apos;s had enough. The problem was never that you couldn&apos;t trust your body. The problem was that you were eating so frequently your hunger signals were completely scrambled. Fix the frequency, fix the signals.
            </p>

            <Card className="border-orange-500/30 bg-orange-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Real Talk</p>
                    <p className="text-muted-foreground">
                      I&apos;m not a doctor. I&apos;m a software engineer who eats at a buffet every day and has the blood work to back it up. If you&apos;ve got medical conditions, if you&apos;re on medications that require food at specific times, if you have a history of eating disorders — go talk to a healthcare professional before running any fasting protocol. Don&apos;t be stupid about this. Be strategic. There&apos;s a difference between pushing your limits intelligently and just being reckless. This protocol is for healthy adults who want to optimize. If that&apos;s you, keep reading. If it&apos;s not, go get cleared first. I&apos;ll wait.
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

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Every single time I explain this protocol to someone, I get the same five objections. Like clockwork. It&apos;s actually kind of beautiful how predictable it is. So let me just burn through all of them right now so we can move on with our lives.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Spoiler: none of them hold up. Not even a little bit.
            </p>

            <div className="space-y-5">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;Buffets are unhealthy!&quot;</p>
                  <p className="text-muted-foreground">
                    Says who? A buffet is a delivery mechanism for food. That&apos;s it. It&apos;s morally neutral. It&apos;s like saying &quot;plates are unhealthy&quot; — no, what you PUT on the plate matters. Nobody is holding a deep-fried spring roll to your mouth. You walk up to the station, you pick grilled salmon, roast beef, steamed broccoli, a salad. That plate is healthier than what 90% of people cook at home on their best day. The buffet has everything — the junk AND the gold. You just have to not be a child about your choices. The dessert station exists. So does the sashimi bar. Pick your fighter.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;Fasting is dangerous!&quot;</p>
                  <p className="text-muted-foreground">
                    Humans have fasted for literally all of recorded history. Every religion on earth includes it — Islam, Christianity, Buddhism, Judaism, Hinduism. All of them. Your great-grandparents didn&apos;t have a snack drawer. The idea that you need to eat 6 small meals a day was invented by the snack food industry in the 1990s. THAT&apos;S the experiment. Not fasting. Fasting is the control group. Your body has an entire metabolic pathway — ketosis — specifically evolved to keep you sharp and functional without food for days at a time. You know what&apos;s actually dangerous? The modern pattern of never going more than 3 hours without shoving something in your mouth. That&apos;s the anomaly. Pass.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;That&apos;s too extreme!&quot;</p>
                  <p className="text-muted-foreground">
                    You want to talk about extreme? Let&apos;s talk about extreme. Spending 15–20 hours a week on food logistics — planning, shopping, prepping, cooking, cleaning — that&apos;s extreme. Blowing $800 a month on groceries and watching a third of it rot in the back of your fridge — that&apos;s extreme. Washing dishes every single day until you die — that&apos;s extreme. Eating the same sad chicken and broccoli on repeat and calling it &quot;clean eating&quot; while your soul slowly leaves your body — THAT is extreme. One buffet meal a day where you sit down, eat incredible food cooked by professionals, and walk out? That&apos;s called being efficient. The bar for &quot;extreme&quot; has been so warped by the fitness industry that literally just going to a restaurant seems radical. Think about that for a second.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;Won&apos;t you get bored?&quot;</p>
                  <p className="text-muted-foreground">
                    This is genuinely the most backwards objection and it makes me laugh every time. YOUR meal prep chicken breast and sad Tuesday pasta are boring. YOUR desk lunch in a Tupperware container that you packed at 10 PM last night while questioning your life choices is boring. A buffet has sashimi, prime rib, grilled salmon, stir-fry, crab legs, lamb, curry, bone broth, roasted vegetables, 12 kinds of salad toppings — a completely different combination every single day. Rotate between 2–3 buffets and the variety is mathematically infinite. Your kitchen could never. Your meal prep chicken could never. This objection is like saying &quot;won&apos;t you get bored of Netflix?&quot; My brother in Christ, there are more options at the buffet than you could try in a year.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-bold text-lg mb-2 text-red-500">&quot;My friends will think I&apos;m weird.&quot;</p>
                  <p className="text-muted-foreground">
                    Yeah, for about 90 days. Then they&apos;re going to notice that you dropped 15 pounds while eating steak and sashimi every day. They&apos;re going to notice you have energy at 4 PM when they&apos;re reaching for their third coffee. They&apos;re going to notice you&apos;re not stressed about dinner every night. They&apos;re going to look at your bank account and realize you spend $300-450 a month on food while they&apos;re hemorrhaging $800+. And then they&apos;re not going to think you&apos;re weird anymore. They&apos;re going to ask you how. And you&apos;re going to send them this guide. Full circle.
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
                Week 1 — Just Start
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Theory is done. Objections are handled. Science is covered. You have zero excuses left. Here&apos;s what you actually do this week, day by day, step by step. Start slow and steady. Don&apos;t overthink it. The protocol is simple enough that the hardest part is literally just walking through the door of a buffet for the first time and realizing this is your life now.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              When I did my first week I was basically vibrating with energy by day 5. I became a human golden retriever. Started jogging in place. Calling all my friends and family. Bursting with this feel-good, optimistic energy that I genuinely did not expect. You might have a different experience. But you won&apos;t know until you start.
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
                    Open Google Maps. Search &quot;buffet&quot; or &quot;all you can eat&quot; within your radius. Find 3–5 options. Read the reviews but ignore the ones complaining about decor — you&apos;re not here for ambiance, you&apos;re here for protein. Look at food photos. Look for the carving station, the sushi bar, the grill section. Those are your money makers. Visit your top 2 picks. Eat normally — this isn&apos;t a protocol day, this is intelligence gathering. You&apos;re a scout. Where&apos;s the sashimi? Is the salmon actually fresh or is it that weird warm salmon situation? What&apos;s the protein-to-filler ratio? Take mental notes. Pick your primary buffet. Pick a backup. You&apos;re building infrastructure. Treat it seriously.
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
                    Wake up. Hydrate — water with a pinch of salt if you want to feel fancy about it. Skip breakfast. If you need something, have some lower-glycemic fruit like berries. Coffee is fine — black, no sugar, no milk, none of that oat milk caramel situation. Your first real meal is buffet lunch around noon. Run the Plate Method from Chapter 7. Protein first. Vegetables second. Everything else third. Eat until you&apos;re genuinely satisfied. Then leave. If you need a light dinner at home, have one — an egg, some yogurt, keep it minimal. But notice something: notice how little you actually want for dinner after a proper protein-loaded buffet lunch. Notice how 2 free hours appear in your morning. Notice how your kitchen is clean. Your body is already adapting. Let it.
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
                    Time to level up. No breakfast. No dinner. One buffet meal. That&apos;s it. Walk in around noon, run the full protocol — recon walk first, protein stations first, value stack your plate, water only. Eat until comfortably full. NOT stuffed. There&apos;s a massive difference and you&apos;ll learn it fast. Then walk out and just... observe. Check in with yourself at 3 PM. Are you actually hungry or are you just thinking about food out of habit? Check at 6 PM. Check at 9 PM. Most people are genuinely surprised by how NOT hungry they are. That big protein-heavy meal holds. Your body switches to burning stored fat and it&apos;s running smooth. If you feel a little hungry in the evening, drink water. It passes. Trust the process. Trust your body. It knows what it&apos;s doing.
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
                    One week. That&apos;s all it takes to see the shape of this thing. Sit down and actually think about it. How do you feel? Honestly. Energy levels — better, worse, or the same? Time saved — add it up, actually count the hours you didn&apos;t spend cooking and cleaning and grocery shopping. Money spent — check your bank statement, compare it to a normal week. Step on a scale if you want to, but don&apos;t obsess over it — the real changes show up in weeks 2-4. Now the big question: which protocol are you running going forward? The Starter, The OMAD, The Warrior, or The Social? There&apos;s no wrong answer. The best protocol is the one you can actually sustain. Pick it. Commit to it. Week 2 starts tomorrow and you already know the playbook.
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
                      <span className="flex items-center gap-1"><Scale className="w-3 h-3" /> Body weight — weekly weigh-ins</span>
                      <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Energy levels — daily, 1–10 scale</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Hours saved from cooking/cleaning</span>
                      <span className="flex items-center gap-1"><Target className="w-3 h-3" /> Total money spent on food</span>
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> How you feel — mood, sleep, focus</span>
                      <span className="flex items-center gap-1"><Star className="w-3 h-3" /> Buffet quality scores — rate your spots</span>
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
              The protocol works. The math works. The science works. You&apos;ve got all three now. There&apos;s nothing left to figure out. The only variable is whether you actually walk through the door.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Benjamin hasn&apos;t used his oven since March 2019. There&apos;s a spider living in there now. They have an understanding.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Monthly food cost is lower than most people&apos;s grocery bill alone. Total. Everything included.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> 10–15 hours per week reclaimed from cooking, cleaning, shopping, and meal planning. Every single week. Compounding.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> More variety of high-quality protein in a single meal than most people get in an entire week of home cooking.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Healthy body composition maintained year-round. Doctor&apos;s exact words: &quot;surprisingly good, considering.&quot;</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Zero food waste. Zero dishes. Zero grocery runs. Zero meal prep Sundays. Zero excuses.</p>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              People will tell you this is crazy. These are the same people spending $800/month on groceries and throwing away a third of it. The same people who spend more time in the kitchen per week than they spend exercising per month. The same people eating the same four meals on rotation and calling it &quot;cooking.&quot; Meanwhile you&apos;re sitting at a clean table, eating world-class sashimi and prime rib for $15, and walking out with your entire evening free. One of us is crazy. It&apos;s not you anymore.
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
                The community is already out there finding the best spots, rating them for protein quality and value, and sharing notes. Use our restaurant finder to discover the highest-rated buffets near you — vetted by fellow Buffet Dieters who know exactly what to look for.
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
