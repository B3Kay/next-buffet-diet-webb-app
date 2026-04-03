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
  Dna,
  Beef,
  Droplets,
  FlaskConical,
  Activity,
} from "lucide-react";
import { MonthlyCostChart, InvestmentGrowthChart } from "./charts";

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
              How One Man Discovered You Can Lose Weight by Eating at All-You-Can-Eat Buffets
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-4 max-w-2xl mx-auto">
              A Comprehensive Protocol for Strategic Fasting, Nutritional Optimization, and Making the Buffet Industry Regret Its Business Model
            </p>
            <p className="text-base text-muted-foreground/60 mb-8 max-w-lg mx-auto italic">
              &quot;The most important dietary breakthrough since someone realized you could eat the lobster.&quot;
            </p>
            <div className="flex items-center justify-center gap-2 mb-10 text-muted-foreground">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">
                By <strong>Benjamin Karlsson</strong> — Founder of The Buffet Diet, Bio Hacker, Entrepreneur, and the Man Who Hasn&apos;t Used His Oven Since 2019
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
              &quot;I graduated from one of Sweden&apos;s top engineering programs. I&apos;ve built software companies.
              I&apos;ve read over 200 books on nutrition, productivity, and human optimization.
              And I&apos;m here to tell you that the single greatest life hack I&apos;ve ever discovered
              is eating lunch at a $15 all-you-can-eat buffet.&quot;
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
                How I Accidentally Invented the Buffet Diet
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In 2019, I was running two startups simultaneously, sleeping five hours a night, and living in a
              studio apartment in Stockholm with a kitchen so small that the refrigerator door hit the stove
              when you opened it. I was, by most conventional measures, not taking great care of myself.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I had been experimenting with intermittent fasting — the 16:8 protocol at first, then OMAD
              (one meal a day), then pushing it further. 36 hours. 48 hours. At one point I did a 5-day water fast
              just to see what would happen. (What happened was I became extremely aware of how many restaurants
              there are in Stockholm.) The fasting was going well. The problem was the <em>eating</em>.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              When you fast for 24-48 hours, you don&apos;t want a normal meal. You want a <strong>feast</strong>.
              Your body has been running on stored energy for two days and it expects to be rewarded. But I was
              a busy entrepreneur — I didn&apos;t have time to cook elaborate meals. So I would break my fast with
              whatever was in the fridge, which was usually a sad piece of chicken breast I&apos;d cooked three
              days ago and some wilted spinach. I had been fasting like a monk and eating like a prisoner. Something
              had to change.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Then one afternoon in March — 31 hours into a fast — I was walking past an all-you-can-eat
              sushi restaurant near my office. I had walked past it hundreds of times. But on this day, in my
              fasted state, I had what I can only describe as a <em>vision</em>. I stopped on the sidewalk.
              I looked at the sign. I looked at the price: 149 SEK (about $15). And a thought entered my mind
              that would change the entire trajectory of my life:
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-xl text-center italic font-medium">
                  &quot;What if I just... ate here every day?&quot;
                </p>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I walked in. I sat down. And over the next 45 minutes, I consumed what I later calculated to be
              approximately 1,800 calories of premium sashimi, grilled salmon, edamame, miso soup, and a small
              amount of rice. The retail value of the sashimi alone, if purchased at the grocery store, would have
              been roughly $35-40. I paid $15. I had no dishes to wash. I had no groceries to buy. I had no food
              to prep. I walked in hungry. I walked out satisfied, nourished, and — though I didn&apos;t realize
              it yet — on my way to losing 12 kilograms over the next three months.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I went back the next day. And the day after. And the day after that. By week two, the staff
              recognized me. By week three, I noticed my clothes were fitting differently. By month two,
              I had to buy new pants. My grocery bill had dropped to essentially zero. My kitchen was so unused
              that a spider had built a web between the toaster and the wall. (I left it. The spider was paying
              about as much rent as me and bothering no one.)
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I started tracking everything. The weight loss. The cost savings. The time saved. The macros.
              I built spreadsheets. I made charts. I became, without intending to, the world&apos;s foremost
              researcher on the intersection of intermittent fasting and all-you-can-eat dining.
              A field that, as far as I can tell, I am the only person working in.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              People started asking me what I was doing differently. I told them. Most of them stared at me
              in silence for several seconds. A few laughed. One person asked if I was feeling okay. But the
              ones who actually tried it? They came back a month later with the same look on their face that
              I must have had that first day outside the sushi restaurant. The look that says: <em>&quot;Wait.
              This actually works. This actually, genuinely works.&quot;</em>
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I decided someone needed to write this down properly. To create a protocol. A system.
              A guide that takes what I had stumbled onto by accident and turns it into something anyone
              can follow. So I did. You&apos;re reading it.
            </p>

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">The Core Discovery</p>
                    <p className="text-muted-foreground">
                      Combine intermittent fasting with strategic all-you-can-eat buffet dining. You eat less
                      frequently but better. You spend less money but get more food. You lose weight while eating at a
                      place literally designed for overeating. It sounds impossible. It is not. I have the spreadsheets
                      to prove it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This guide is for entrepreneurs, students, busy professionals, and anyone who has looked at the
              amount of time and money they spend on food and thought: &quot;There has to be a better way.&quot;
              There is. It involves a $15 buffet and the willingness to ignore the concerned looks from your friends
              and family. At least until they see your results. Then they&apos;ll want the guide too.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 2 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                2
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Problem with Normal Eating
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Before I explain the solution, I want to make sure you understand the problem. Because
              most people don&apos;t realize how absurd their current eating situation is. They&apos;ve
              been doing it their whole life, so it feels normal. It is not normal. It is, when you actually
              examine it, a logistical nightmare that we have all collectively agreed to never question.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The average person wakes up, eats breakfast (or skips it and feels guilty — as if toast is a moral obligation).
              They go to work. They eat a sad desk lunch, possibly from a container they packed the night before
              in a ritual they describe as &quot;meal prep&quot; but which more closely resembles packing a school
              lunchbox for yourself as an adult. They come home exhausted, stare into the fridge for ten minutes
              as if the ingredients might spontaneously assemble into a meal, and then cook something mediocre or
              order $28 worth of pad thai from an app. Then they clean up. Then they do it all again tomorrow.
              And the day after. And the day after that. For the rest of their lives.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I want to show you the real numbers, because until you see them written down,
              you will not believe how much of your life you are currently donating to food logistics:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-3">The Time Tax of Cooking (Per Week)</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Meal planning & recipe research</span>
                        <span className="font-mono">1-2 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Grocery shopping</span>
                        <span className="font-mono">2-3 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Food prep & cooking (3 meals/day)</span>
                        <span className="font-mono">7-10 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Cleaning, dishes, putting away</span>
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

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Read that again. <strong>Thirteen to twenty hours per week</strong>. That&apos;s almost a
              part-time job — just to feed yourself. And what do you get in return? The same rotation
              of 5-7 meals you&apos;ve been making for the last three years, eaten standing over the
              kitchen counter while scrolling your phone.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Now let&apos;s talk about <strong>meal prepping</strong>. The fitness industry&apos;s favorite
              solution. Oh, you don&apos;t enjoy eating? Just spend your entire Sunday cooking 21 meals,
              stack them in identical plastic containers, and eat the same reheated chicken breast for 7
              days straight! What fun! What variety! What a life!
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              And then there&apos;s eating out at <em>regular</em> restaurants. Sure, someone else cooks for you.
              But you&apos;re paying $20-40 per meal for a portion that was designed by an accountant, not a chef.
              You get exactly 200 grams of protein, a decorative sprig of parsley, and the privilege of tipping
              20% for someone to bring it to you. Three meals a day at restaurants? That&apos;s $60-120 per day.
              That&apos;s $1,800-3,600 per month. Nobody is doing that.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              There has to be a better way, right? <em>Right?</em>
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
                Why Buffets Are the Ultimate Life Hack
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here&apos;s where things get beautiful. Buffets solve literally every problem we just talked about.
              Every. Single. One. Let me count the ways:
            </p>

            <div className="grid gap-4 mb-8">
              {[
                {
                  icon: ChefHat,
                  title: "Zero Cooking",
                  desc: "Walk in, food is ready. Walk out. That's it. No shopping, no prep, no cooking, no cleaning. You just saved 15+ hours per week. You're welcome.",
                },
                {
                  icon: Utensils,
                  title: "Infinite Variety",
                  desc: "Sushi today? Sure. Roast beef tomorrow? Why not. Indian curry on Thursday? Go for it. All from the same buffet. Your meal prep chicken breast could never.",
                },
                {
                  icon: Target,
                  title: "YOU Control the Portions",
                  desc: "This is the key that everyone misses. At a buffet, YOU decide what goes on your plate. Want 500g of salmon and a mountain of vegetables? Done. No waiter giving you a judgment look.",
                },
                {
                  icon: Users,
                  title: "Social Friendly",
                  desc: "Bring your friends, your date, your business partner, your mom. Everyone finds something they like. It's the universal restaurant. No more 'where do you want to eat?' debates.",
                },
                {
                  icon: Star,
                  title: "Quality Options Exist",
                  desc: "We're not talking about the sad pizza buffet at the highway rest stop. Sushi buffets. Brazilian steakhouses. Hotel brunch buffets. Korean BBQ. These are legitimate fine dining experiences.",
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

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Let&apos;s do the time math. With the Buffet Diet, your food-related time commitment looks like this:
              walk to buffet (10 min), eat (30-45 min), walk back (10 min). Total: about <strong>1 hour per day</strong>.
              Compare that to the 2-3 hours per day the average person spends on food prep and cooking.
              That&apos;s <strong>10+ hours per week</strong> you just got back. What are you going to do with
              an extra 10 hours every week? Start a business? Learn a language? Finally read that book?
              The world is your oyster — which, coincidentally, is also available at the buffet.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              &quot;But Benjamin,&quot; I hear you saying, &quot;buffets are where people go to get fat!&quot;
              And you&apos;re right — if you eat like most people eat at buffets. If you load up on bread rolls,
              pasta, fried rice, and desserts, yes, you will get fat. But that&apos;s not what we&apos;re doing here.
              We&apos;re playing a completely different game. We&apos;re playing <em>the Buffet Diet game</em>.
              And in this game, we <strong>win</strong>.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 4 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                4
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Fasting Connection
              </h2>
            </div>
            <p className="text-lg text-primary font-medium mb-8 italic">
              Where the Magic Happens
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Now we get to the secret sauce (which, unlike the buffet&apos;s actual sauce, is calorie-free).
              The Buffet Diet isn&apos;t just about eating at buffets. It&apos;s about combining buffets with{" "}
              <strong>intermittent fasting</strong>. This is where the whole thing goes from &quot;interesting
              idea&quot; to &quot;actual life-changing strategy.&quot;
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              If you&apos;re not familiar with intermittent fasting, here&apos;s the quick rundown. It&apos;s not
              about <em>what</em> you eat — it&apos;s about <em>when</em> you eat. You cycle between periods
              of eating and periods of not eating. Simple. Humans have been doing this for literally all of
              history. Your great-great-great-grandpa didn&apos;t have a refrigerator full of snacks. He ate
              when food was available, and fasted when it wasn&apos;t. His body was designed for exactly this pattern.
              So is yours.
            </p>

            <div className="grid gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <Timer className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">16:8 — The Gateway</p>
                      <p className="text-muted-foreground">
                        Fast for 16 hours, eat within an 8-hour window. Basically just skip breakfast.
                        This is baby&apos;s first fast. If you can&apos;t do this, we need to talk.
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
                        24-hour fast. One meal per day. This is where the Buffet Diet really starts to shine.
                        One meal, and it better be worth it. Enter: the buffet.
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
                      <p className="font-semibold mb-1">48-Hour Fast — The Warrior Mode</p>
                      <p className="text-muted-foreground">
                        Eat every other day. One massive feast every 48 hours. This is the final boss of the
                        Buffet Diet. Not for beginners, but the rewards are extraordinary.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here&apos;s why fasting and buffets are the perfect marriage. When you fast for 24 or even
              48 hours, you <em>deserve</em> a proper feast. Not a sad 400-calorie salad. Not a protein shake.
              A <strong>feast</strong>. A glorious, varied, protein-rich, culturally diverse explosion of food.
              And where do you get that? At a regular restaurant that gives you a portion the size of your fist?
              No. You get that at an <strong>all-you-can-eat buffet</strong>.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">The Science (Briefly)</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Autophagy</strong> — Your body starts cleaning up damaged cells during extended fasts. It&apos;s like a cellular deep-clean.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Insulin Sensitivity</strong> — Fasting improves how your body handles sugar. When you do eat, your body uses the fuel more efficiently.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Metabolic Flexibility</strong> — Your body gets better at switching between burning carbs and burning fat. You become a hybrid engine.</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span><strong>Growth Hormone</strong> — Fasting can boost human growth hormone levels, which helps preserve muscle mass and burn fat.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Remember: you&apos;re not starving. You&apos;re <strong>strategically not eating</strong>.
              There&apos;s a huge difference. Starving is when you have no food. Strategic fasting is when you
              have a fridge full of food but you choose not to eat because you know that in 6 hours you&apos;re
              going to absolutely annihilate a sushi buffet. That&apos;s not deprivation — that&apos;s delayed gratification.
              That&apos;s discipline. That&apos;s the Buffet Diet.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 5 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                5
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Math That Will Blow Your Mind
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Okay, let&apos;s talk numbers. Because when you actually sit down and do the math, the Buffet Diet
              doesn&apos;t just make sense — it makes <em>dollars and cents</em>. (I&apos;m sorry for that joke.
              I&apos;m not really sorry.)
            </p>

            <Card className="mb-6 border-green-500/20 bg-green-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <DollarSign className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-3">Scenario 1: OMAD Buffet (One Meal A Day)</p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Average lunch buffet price: <strong>$15-20</strong></p>
                      <p>You eat once per day: <strong>$15-20/day</strong></p>
                      <p>Monthly cost: <strong>$450-600/month</strong></p>
                      <Separator className="my-3" />
                      <p className="text-sm">Compare to average US grocery bill: <strong>$500-800/month</strong></p>
                      <p className="text-sm">Plus meal prep time valued at $20/hr: <strong>$800-1,600/month</strong></p>
                      <p className="font-semibold text-green-600 mt-2">
                        You&apos;re spending LESS than groceries alone, with ZERO time investment in cooking.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-yellow-500/20 bg-yellow-500/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <TrendingDown className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-3">Scenario 2: 48-Hour Fast (Eat Every Other Day)</p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Same buffet price: <strong>$15-20</strong></p>
                      <p>You eat every other day: <strong>~15 meals/month</strong></p>
                      <p>Monthly cost: <strong>$225-300/month</strong></p>
                      <Separator className="my-3" />
                      <p className="font-semibold text-yellow-600">
                        That&apos;s $225-300/month for ALL your food. Read that again.
                      </p>
                      <p className="text-sm mt-2">
                        You&apos;re spending less than half what most people spend on groceries.
                        AND you&apos;re losing weight. AND you have zero cooking time. AND you&apos;re
                        eating better food than 90% of people.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Let that settle in for a moment. On the 48-hour protocol, you&apos;re feeding yourself for
              about <strong>$8-10 per day</strong> on average. With world-class food. With zero time spent
              cooking or cleaning. No grocery bills. No food waste. No expired vegetables turning into
              science experiments in the back of your fridge.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              And here&apos;s the part that makes me smile every time: the buffet is <strong>losing money
              on you</strong>. Their entire business model is built on the assumption that people will fill
              up on cheap carbs — bread, rice, pasta, noodles. That&apos;s the stuff that costs them pennies.
              But you? You&apos;re walking in after a 24-48 hour fast and heading straight for the premium
              proteins. The sashimi. The prime rib. The crab legs. You are extracting maximum value.
              You are <em>winning</em> the buffet game. The buffet thought it was getting your money.
              Instead, you got their food. More food than you paid for. That&apos;s not just a diet —
              that&apos;s a <strong>value arbitrage strategy</strong>.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-10">The Numbers, Visualized</h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I know I keep throwing numbers at you, so I built some charts. Adjust the buffet price slider
              to match your local area. These numbers are real. I stared at spreadsheets for an uncomfortable
              amount of time to verify them. My therapist says the spreadsheets are &quot;a coping mechanism.&quot;
              I say they&apos;re proof.
            </p>

            <MonthlyCostChart />

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Now here&apos;s where it gets truly deranged in the best possible way. What if — and stay with me
              here — you took the money you&apos;re <em>not</em> spending on groceries and cooking, and invested
              it instead? Into an S&P 500 index fund, for example. The thing that has historically returned about
              10% annually. I made a chart for this too, because apparently that is what I do now. I make charts
              about buffets and compound interest. This is my life. I am not complaining.
            </p>

            <InvestmentGrowthChart />

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Read that final number again. By <strong>not cooking</strong> — by eating at a $15 buffet instead
              of spending $700/month on groceries and kitchen time — and investing the difference, you could be
              sitting on a five- or six-figure portfolio in 10 years. Your unused oven isn&apos;t just a place
              where a spider lives. It&apos;s a <strong>wealth generation strategy</strong>. I told my financial
              advisor about this. He was quiet for a very long time. Then he asked for the name of my buffet.
            </p>

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">The Bottom Line</p>
                    <p className="text-muted-foreground">
                      Less money spent. More time saved. Better food quality. Weight loss included.
                      And if you invest the savings, potential financial independence.
                      The Buffet Diet isn&apos;t just a diet — it&apos;s the single most efficient way
                      to feed a human being in a modern city. Fight me.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 6 - NEW: Know Your Enemy */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                6
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Know Your Enemy — The Tricks Buffets Use Against You
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Before we get into our battle plan, you need to understand what you&apos;re up against.
              Buffets are <strong>not your friend</strong>. They are a business. A business that has spent
              decades perfecting the art of making you fill up on cheap food while thinking you&apos;re
              getting an amazing deal. They have tricks. They have strategies. They have literal psychologists
              consulting on layout design. But once you know their playbook, you can beat them at their own game.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to <strong>Buffet Counter-Intelligence 101</strong>.
            </p>

            <div className="space-y-6 mb-8">
              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #1: The Bread & Carb Wall</p>
                      <p className="text-muted-foreground mb-2">
                        Ever noticed how the first things you encounter at a buffet are always the bread rolls,
                        pasta salads, rice dishes, and noodles? That&apos;s not an accident. Carbs are dirt cheap — a
                        tray of bread rolls costs the buffet about $2. If you fill up on bread before you reach the
                        proteins, you&apos;ve just saved them $15 worth of steak. They put the cheap stuff first because
                        your plate is empty and you&apos;re hungry. They&apos;re counting on you loading up.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Walk PAST all the carbs. Don&apos;t even look at them. Head straight for the protein station. Your first plate should have zero bread, zero rice, zero noodles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #2: Small Plates, Big Margins</p>
                      <p className="text-muted-foreground mb-2">
                        Notice the plate sizes at buffets? They&apos;re getting smaller every year. Many buffets now use
                        plates that are 20-30% smaller than a standard dinner plate. Smaller plate = less food per trip =
                        you feel like you&apos;ve &quot;had enough plates&quot; sooner. It&apos;s a psychological trick.
                        Three small plates feel like three full meals, even if the total food is barely one real serving.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Don&apos;t count plates. Count protein. You need 100-150g+ of protein in this meal. Go back as many times as needed. Stack that protein high and proud. Nobody is judging you — and if they are, they&apos;re the ones with a full plate of bread rolls.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #3: The Soda Sugar Trap</p>
                      <p className="text-muted-foreground mb-2">
                        Many buffets offer &quot;free&quot; sodas, juices, or sweet tea. How generous! Except it&apos;s
                        not generous at all. A large glass of soda has 200+ calories of pure sugar. Two or three glasses
                        and you&apos;ve consumed 600+ empty calories that do nothing to fill you up but absolutely wreck
                        your appetite for real food. You drink the sugar, you feel temporarily full, you eat less protein.
                        The buffet saves money. You lose. And then you&apos;re hungry again an hour later.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Water. Sparkling water if you feel fancy. Black coffee or tea after the meal. That&apos;s the complete beverage list. Save your stomach capacity for the food that matters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #4: The Dessert Showstopper</p>
                      <p className="text-muted-foreground mb-2">
                        The dessert section is always the most visually stunning part of the buffet. Towers of cakes.
                        Chocolate fountains. Colorful pastries. They make it look like a magazine cover. Why? Because
                        desserts are <em>incredibly cheap</em> to produce — mostly flour, sugar, and butter — but they
                        fill you up fast and look like high value. If you eat three slices of cake, you just consumed
                        1,500 calories of ingredients that cost the buffet about $1.50. They literally want you at the
                        dessert station.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Desserts are your victory lap, not your main event. If you want something sweet, have ONE small piece AFTER you&apos;ve had your protein and vegetables. Or skip it entirely — your post-fast body doesn&apos;t need a sugar bomb.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #5: The Hidden Premium Zone</p>
                      <p className="text-muted-foreground mb-2">
                        The best items at a buffet — the carving station, the sashimi bar, the fresh seafood — are
                        almost always tucked away in corners, behind other stations, or at the very end of the line.
                        This is by design. Most people fill their plates before they even discover these stations.
                        The buffet is literally hiding the expensive stuff from you. Some places even put the sushi
                        bar in a separate room or have the carving station in a back corner with no signage.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: The Recon Walk. ALWAYS walk the entire buffet before picking up a plate. Scout every corner, every station, every hidden counter. Know where the premium items are BEFORE you start loading up. This one habit separates amateurs from Buffet Diet warriors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #6: The Sauce & Dressing Calorie Bomb</p>
                      <p className="text-muted-foreground mb-2">
                        Sauces, gravies, and dressings are calorie nightmares that hide in plain sight. That innocent-looking
                        ranch dressing? 200 calories per serving. The sweet teriyaki glaze on the chicken? Pure sugar.
                        The creamy alfredo on the pasta? More calories than the pasta itself. Buffets drown food in sauces
                        because sauces are cheap and they make mediocre food taste better. But those hidden calories add
                        up fast and push you toward that overstuffed, sluggish feeling.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Go for grilled, roasted, or steamed items. Choose proteins that don&apos;t need sauce to taste good — sashimi, roast beef, grilled chicken. If you want sauce, use it sparingly on the side. Your protein should be the star, not a vehicle for ranch dressing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-lg mb-2">Trick #7: The Time Pressure</p>
                      <p className="text-muted-foreground mb-2">
                        Some buffets have time limits — 60 or 90 minutes. This creates a rush mentality. You feel
                        the clock ticking so you eat faster, grab more, and make worse choices. You pile food on your plate
                        in a panic. You eat quickly without really tasting anything. You end up overeating on the wrong
                        things because you didn&apos;t take time to be strategic. The buffet knows that panicked eaters
                        grab the cheap stuff first.
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        Counter-move: Even with a time limit, take the first 5 minutes for your recon walk. It&apos;s an investment that pays off for the remaining 55-85 minutes. Eat slowly, chew properly, and focus on protein. You&apos;ll get more value from 3 strategic plates than 6 frantic ones.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">The Bottom Line</p>
                    <p className="text-muted-foreground">
                      The buffet is a business, and their goal is to make money from you eating as much cheap food
                      as possible. Your goal is the opposite: extract maximum nutritional value per dollar, focusing
                      on premium proteins and real food. Now that you know their tricks, you&apos;re no longer a
                      regular customer — you&apos;re a Buffet Diet strategist. And <strong>they should be scared of you</strong>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 7 (was 6) */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                7
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                How to Win the Buffet Game
              </h2>
            </div>
            <p className="text-lg text-primary font-medium mb-8 italic">
              The Strategy Guide
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This is the chapter where we go full tactical. Because going to a buffet without a strategy
              is like going to war without a plan. You&apos;ll survive, but you won&apos;t <em>win</em>.
              And we&apos;re here to win. We are the special forces of buffet dining. Here are the rules of engagement:
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Rule 1: The Recon Walk
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Before you put a single item on your plate, walk the <strong>entire buffet line</strong>.
              All of it. Every station. Every corner. Every sneaky little section they hid behind the
              salad bar. This is your reconnaissance mission. You need to know what you&apos;re working with.
              Most amateurs grab the first thing they see — usually bread rolls or a sad caesar salad —
              and then discover the carving station with the prime rib three sections later when their plate
              is already full. Don&apos;t be that person. Scout first, eat second.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Rule 2: Protein First Protocol
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Your first plate is <strong>100% protein</strong>. Meat, fish, seafood, eggs. This is non-negotiable.
              Here&apos;s why: protein is the most expensive item for the buffet to provide. When you load up on
              protein, you are maximizing the value you extract per dollar spent. The buffet <em>hates</em> this.
              Their accountant is somewhere crying. But more importantly, protein is the most satiating
              macronutrient — it keeps you full longer and supports muscle retention while you&apos;re losing fat.
              It&apos;s a win-win. Well, a win for you. A loss for the buffet. Even better.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              Rule 3: The Value Stack
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Eat the high-value items. This means: sushi/sashimi, steak, roast beef, shrimp, crab legs,
              lamb chops, salmon, tuna. These are the items that would cost you $30-50 at a regular restaurant.
              At the buffet? Included in your $15-20 ticket. That&apos;s the value stack. Meanwhile,{" "}
              <strong>skip the fillers</strong>: bread, rice, pasta, noodles, french fries. The buffet wants
              you to fill up on these because they cost pennies. A plate of rice costs them about $0.30.
              A plate of sashimi costs them $8-12. You do the math. You know which one to reach for.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              Rule 4: The Plate Method
            </h3>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <Badge className="mt-1 bg-red-500">Plate 1</Badge>
                    <p className="text-muted-foreground">
                      <strong>Pure Protein.</strong> Sashimi, grilled chicken, roast beef, shrimp, eggs.
                      This is your foundation. Build it strong.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Badge className="mt-1 bg-green-500">Plate 2</Badge>
                    <p className="text-muted-foreground">
                      <strong>Vegetables & Healthy Fats.</strong> Grilled vegetables, salads (go easy on dressing),
                      avocado if they have it, olives, nuts. Color is king here.
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Badge className="mt-1 bg-blue-500">Plate 3</Badge>
                    <p className="text-muted-foreground">
                      <strong>The Wildcard.</strong> You earned it. Want a small dessert? Go for it.
                      Curious about that curry? Have some. This is your victory lap plate. Keep it moderate
                      — you&apos;re the boss, not the buffet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Rule 5: The Hydration Hack
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Drink <strong>water</strong>. Not soda. Not juice. Not the bottomless sugary iced tea.
              Water. Here&apos;s why: first, drinks are where buffets make a huge margin. That $3 soda costs
              them $0.05. Second, sugary drinks add empty calories that sabotage your fat loss. Third,
              water actually helps you digest better and feel more satisfied. Some buffets include drinks;
              many charge extra. Either way, water is the power move. Stay hydrated, stay lean, stay winning.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Rule 6: Timing is Everything
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Go at <strong>lunch</strong>, not dinner. Lunch buffets are typically $5-10 cheaper than dinner,
              and the food quality is often identical. Go slightly <strong>off-peak</strong> (11:30 AM or 1:30 PM)
              for fresher food and fewer crowds. The food at peak hours has been sitting longer and the good stuff
              gets picked clean. Show up at 11:30 when they&apos;re putting out fresh trays and you&apos;re first
              in line for the premium items. This is not a drill. This is strategic dining.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              Rule 7: Choose Your Buffet Wisely
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Not all buffets are created equal. This is so important that we dedicated an entire chapter to it next.
              But the short version: prioritize <strong>protein quality</strong> over everything else when choosing your buffet.
              A buffet with amazing sashimi and a carving station is worth $5 more than a buffet that&apos;s 90% fried rice.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Rule 8: The Macro Play
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here&apos;s a secret most people don&apos;t realize: you can actually <strong>hit your macros
              perfectly</strong> at a buffet. Need 150g of protein? Load up on chicken and fish. Need healthy
              fats? Grab some salmon and avocado. Want to keep carbs low? Just skip the rice and bread sections.
              A buffet is essentially a macro-flexible meal prep station where someone else did all the work.
              Track it in your app if you want, or just follow the Plate Method above and you&apos;ll be in
              the ballpark every time.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 8 - NEW: How to Select a Good Buffet */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                8
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                How to Select a Good Buffet
              </h2>
            </div>
            <p className="text-lg text-primary font-medium mb-8 italic">
              Your Buffet is Your Kitchen — Choose It Wisely
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              If you&apos;re going to live the Buffet Diet lifestyle, your choice of buffet is the single most important
              decision you&apos;ll make. This is your kitchen now. This is where your nutrition comes from. You wouldn&apos;t
              stock your home kitchen with junk, so don&apos;t pick a junk buffet. Here&apos;s how to think about it, what to
              look for, and what to avoid.
            </p>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-primary" />
              The Buffet Tier List
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Not all buffets are created equal. Here&apos;s how I rank them for Buffet Diet purposes — based on
              protein quality, value, and how much the buffet will hate you for eating there:
            </p>
            <div className="grid gap-3 mb-8">
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-600 text-base px-3">S-Tier</Badge>
                  <span className="font-semibold">The Gold Standard</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Brazilian Rodizio / Churrascaria</strong> — They literally bring unlimited meat to your table and
                  carve it in front of you. Picanha, lamb, chicken hearts, sausages. This is the Buffet Diet dream.
                  Protein delivery on a sword. It doesn&apos;t get better than this.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>High-end Sushi Buffets</strong> — All-you-can-eat sashimi is pure protein heaven. Salmon, tuna,
                  yellowtail, shrimp. Minimal carbs, maximum protein, insane value if you skip the tempura rolls.
                </p>
                <p className="text-muted-foreground">
                  <strong>Premium Hotel Brunch Buffets</strong> — The Sunday brunch at a nice hotel often has a carving station,
                  fresh seafood, omelette station, and quality everything. Pricier ($25-40) but the quality is unmatched.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="border-blue-500 text-blue-600 text-base px-3">A-Tier</Badge>
                  <span className="font-semibold">Excellent Choices</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  <strong>Korean BBQ Buffets</strong> — You grill your own meat. Bulgogi, pork belly, chicken, short ribs.
                  High protein, interactive, and you control the cooking. Plus the banchan (side dishes) add great variety.
                </p>
                <p className="text-muted-foreground mb-2">
                  <strong>Chinese Hot Pot Buffets</strong> — Choose your own meats, seafood, and vegetables, cook them in broth.
                  Extremely protein-friendly. Skip the noodles, load up on thinly sliced beef and shrimp.
                </p>
                <p className="text-muted-foreground">
                  <strong>Indian Buffets with Tandoori</strong> — Tandoori chicken, lamb kebabs, paneer tikka. Indian buffets
                  can be excellent if they have a good tandoor selection. Watch out for the heavy curry gravies and naan bread traps though.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="border-green-500 text-green-600 text-base px-3">B-Tier</Badge>
                  <span className="font-semibold">Solid Options</span>
                </div>
                <p className="text-muted-foreground">
                  General Asian buffets with sushi section, Mediterranean buffets, Seafood buffets, and any buffet with a
                  decent carving station or grill. These work well for the Buffet Diet but require more selectivity —
                  the protein options exist but are mixed in with a lot of carb-heavy fillers.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="border-red-500 text-red-600 text-base px-3">Avoid</Badge>
                  <span className="font-semibold">Not Worth Your Fast</span>
                </div>
                <p className="text-muted-foreground">
                  Pizza buffets. Cheap steam table joints where everything is drowning in oil and cornstarch. Buffets that
                  are 90% fried food and bread. Any place where the &quot;protein&quot; is mystery meat in a brown sauce.
                  If you can&apos;t identify what animal the meat came from, walk out. You fasted for 24 hours — you
                  deserve better than this.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              The Buffet Selection Checklist
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Before you commit to a buffet as your regular spot, run through this checklist. You want to score
              at least 6 out of 8 to make it Buffet Diet approved:
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[
                    {
                      q: "Does it have a dedicated protein station?",
                      detail: "Carving station, sushi bar, grill, or seafood counter. If the only proteins are buried inside fried rice and pasta dishes, it's a red flag."
                    },
                    {
                      q: "Is the protein fresh and high quality?",
                      detail: "Look at the sashimi — is it glistening or dried out? Is the roast beef pink or grey? Is the chicken grilled or sitting in a pool of oil? Trust your eyes and nose."
                    },
                    {
                      q: "Does it have a solid vegetable selection?",
                      detail: "Steamed, grilled, or roasted vegetables. Not just iceberg lettuce drowning in ranch. Real vegetables that were cooked with care."
                    },
                    {
                      q: "Is it clean and well-maintained?",
                      detail: "Check the bathroom (seriously). Check the serving area. Are the trays fresh or crusty? Is the staff replacing empty dishes promptly? Cleanliness = food safety."
                    },
                    {
                      q: "Is it reasonably priced for the protein quality?",
                      detail: "A $15 buffet with good sashimi is better value than a $25 buffet with mediocre everything. Price per gram of quality protein is your real metric."
                    },
                    {
                      q: "Is it conveniently located?",
                      detail: "You'll be going here almost daily. If it's a 40-minute drive, that kills the time-saving benefit. Within 15 minutes of your home or office is ideal."
                    },
                    {
                      q: "Does it have reasonable hours that fit your schedule?",
                      detail: "Lunch buffet hours (11 AM - 2:30 PM) work for most OMAD schedules. Make sure your chosen protocol timing aligns with their service hours."
                    },
                    {
                      q: "Do they refresh the food regularly?",
                      detail: "Visit at different times. A great buffet at 11:30 AM might be a wasteland at 2 PM if they don't replenish. You want a place that keeps the trays stocked and fresh."
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-2 rounded hover:bg-muted/50">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">{item.q}</p>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              The Multi-Buffet Rotation Strategy
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here&apos;s a pro tip: don&apos;t rely on just one buffet. Find <strong>2-3 solid options</strong> and
              rotate between them. Why? First, variety — different buffets have different cuisines and specialties.
              Second, freshness — if you go to the same place every day, you start noticing when they&apos;re having an
              off day. Third, leverage — if the staff at your regular spot starts recognizing you and giving you smaller
              plates or side-eye at the sashimi station (it happens), you rotate to your backup spot and come back in a week.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Pro Move: The Review Scout</p>
                    <p className="text-muted-foreground">
                      Before visiting any new buffet, check our community at{" "}
                      <strong>The Buffet Diet restaurant finder</strong>. Fellow Buffet Dieters rate restaurants
                      specifically for protein quality, value, and dietary compatibility. Look for tags like
                      &quot;Lean Protein,&quot; &quot;Carnivore Friendly,&quot; and &quot;Keto Friendly.&quot;
                      This saves you from wasting a precious fast-breaking meal on a bad buffet. Your fast is sacred —
                      don&apos;t break it at a place that scores 2 stars.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Think of it this way: a regular person picks a restaurant based on cravings and convenience.
              A Buffet Dieter picks their buffet like an athlete picks their training facility. It needs to have
              the right equipment (protein stations), the right environment (clean and fresh), the right price
              (sustainable daily), and the right location (convenient). This isn&apos;t just eating out.
              This is <strong>strategic nutrition sourcing</strong>. And you&apos;re about to become an expert at it.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 9 (was 7) */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                9
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Buffet Diet Protocols
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Not everyone is ready to jump straight into eating every 48 hours. That&apos;s fine. The Buffet Diet
              has protocols for every level. Pick the one that fits your life, and upgrade when you&apos;re ready.
              Think of these like difficulty settings in a video game. Everyone starts at Easy, and some absolute
              legends eventually play on Nightmare mode.
            </p>

            <Card className="mb-6 border-green-500/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-green-500">Protocol 1</Badge>
                  </div>
                  <div>
                    <p className="font-semibold text-xl mb-2">The Starter</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 16:8</strong> — Skip breakfast. Eat your first meal at noon.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      One buffet meal at lunch (12-1 PM). One small meal or snack in the evening.
                      This is the entry-level protocol. You&apos;re still getting most of the benefits —
                      time savings, reduced cooking, the buffet experience — without the intensity of
                      longer fasts. Great for beginners and people who like to eat dinner with their family.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded p-3">
                      <strong>Weekly Schedule:</strong> Mon-Fri buffet lunch + light dinner. Weekends flexible.
                      <br /><strong>Monthly Cost:</strong> ~$350-500 (buffet) + ~$100-150 (light dinners)
                      <br /><strong>Difficulty:</strong> Easy
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-blue-500/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-blue-500">Protocol 2</Badge>
                  </div>
                  <div>
                    <p className="font-semibold text-xl mb-2">The OMAD Buffet</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 24 hours</strong> — One meal per day. That meal is at a buffet. Period.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      This is the sweet spot for most Buffet Dieters. You fast for roughly 23-24 hours,
                      then have one glorious buffet feast. You follow the Plate Method, load up on protein,
                      get your vegetables, and leave feeling satisfied and slightly smug. Your kitchen
                      becomes purely decorative at this point. Your oven might file a missing persons report.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded p-3">
                      <strong>Weekly Schedule:</strong> Buffet lunch every day at 12-1 PM. Nothing else.
                      <br /><strong>Monthly Cost:</strong> ~$450-600 total
                      <br /><strong>Difficulty:</strong> Medium
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-orange-500/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-orange-500">Protocol 3</Badge>
                  </div>
                  <div>
                    <p className="font-semibold text-xl mb-2">The Warrior</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 48 hours</strong> — Eat every other day. Maximum savings. Maximum results.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      This is the protocol that breaks people&apos;s brains when they hear about it.
                      &quot;You only eat every other day?!&quot; Yes. And on the day you eat, you eat
                      at a buffet, and you eat like a champion. This protocol delivers the most dramatic
                      weight loss, the most money saved, and the most time freed up. It&apos;s not for everyone,
                      but for those who can handle it, it&apos;s transformative. You spend roughly $225-300/month
                      on food. That&apos;s less than most people spend on coffee.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded p-3">
                      <strong>Weekly Schedule:</strong> Buffet on Mon, Wed, Fri, Sun. Fast on Tue, Thu, Sat.
                      <br /><strong>Monthly Cost:</strong> ~$225-300 total
                      <br /><strong>Difficulty:</strong> Hard (but rewarding)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 border-purple-500/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <Badge className="bg-purple-500">Protocol 4</Badge>
                  </div>
                  <div>
                    <p className="font-semibold text-xl mb-2">The Social</p>
                    <p className="text-muted-foreground mb-3">
                      <strong>Fasting: 5:2 style</strong> — Buffet on weekdays, cook on weekends with family/friends.
                    </p>
                    <p className="text-muted-foreground mb-3">
                      This is the protocol for people who have a social life that involves cooking together.
                      Maybe you have a partner who loves cooking Sunday brunch. Maybe you do family dinners
                      on Saturdays. That&apos;s cool — the Buffet Diet isn&apos;t a cult (yet). Use buffets
                      as your weekday time-saver, and keep weekends for social cooking. You still save
                      massive amounts of time during the work week when you need it most.
                    </p>
                    <div className="text-sm text-muted-foreground bg-muted/50 rounded p-3">
                      <strong>Weekly Schedule:</strong> Mon-Fri OMAD buffet. Sat-Sun cook at home.
                      <br /><strong>Monthly Cost:</strong> ~$350-450 (buffet) + ~$100-200 (weekend groceries)
                      <br /><strong>Difficulty:</strong> Easy-Medium
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
                Health Benefits (Seriously Though)
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I know what you might be thinking: &quot;This is fun and all, but is this actually healthy?&quot;
              Fair question. Let me put on my serious biohacker hat for a moment. (It&apos;s a very cool hat, by the way.)
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Buffet Diet works for weight loss for one simple, almost boringly straightforward reason:
              <strong> caloric restriction through meal frequency reduction</strong>. When you eat once a day
              or once every two days, even if you eat a lot at that meal, it is incredibly difficult to consume
              the same number of calories as someone eating three meals plus snacks. Your stomach has a physical
              limit. Even at an all-you-can-eat buffet, you will hit that limit. Studies consistently show that
              people who practice intermittent fasting end up consuming fewer total calories — even when given
              unlimited access to food during their eating windows.
            </p>

            <div className="grid gap-4 mb-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Weight Loss Through Natural Caloric Deficit",
                  desc: "Even eating 'a lot' at one meal, you'll typically consume 1,200-2,000 calories. That's less than most people eat across three meals and snacks. The math does the work for you.",
                },
                {
                  icon: Brain,
                  title: "Mental Clarity & Focus",
                  desc: "Many fasters report dramatically improved focus and productivity during fasting periods. No post-lunch food coma. No mid-afternoon energy crash. Your brain runs clean on ketones.",
                },
                {
                  icon: Heart,
                  title: "Cardiovascular Health",
                  desc: "Intermittent fasting has been shown to improve blood pressure, cholesterol levels, and inflammatory markers. Your heart sends its thanks.",
                },
                {
                  icon: Zap,
                  title: "Nutrient Diversity from Buffets",
                  desc: "A well-chosen buffet provides a wider variety of nutrients than most home-cooked rotations. Different proteins, vegetables, cooking methods, and cuisines in a single meal.",
                },
                {
                  icon: Flame,
                  title: "Enhanced Fat Burning",
                  desc: "Extended fasting periods push your body into fat-burning mode. By the time you walk into that buffet, your body has been running on stored fat for hours. That's the whole point.",
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

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Real Talk: A Quick Disclaimer</p>
                    <p className="text-muted-foreground">
                      I&apos;m a buffet enthusiast, not a doctor. If you have medical conditions, eating disorders,
                      or take medications that require eating at regular intervals, please talk to a healthcare
                      professional before trying any fasting protocol. The Buffet Diet is meant for generally
                      healthy adults who want to optimize their eating lifestyle. Don&apos;t be stupid about this.
                      Be smart. Like someone who eats at buffets strategically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground leading-relaxed">
              &quot;But won&apos;t I just overeat at the buffet and gain weight?&quot; Here&apos;s the
              interesting thing: research on fasting shows that people who fast for extended periods
              do <em>not</em> fully compensate by overeating when they break their fast. Yes, you&apos;ll
              eat a big meal. But you won&apos;t eat 48 hours worth of food in one sitting. Your body has
              satiety signals. Protein is highly satiating. After your first plate of protein-rich food,
              your body starts telling you &quot;okay, we&apos;re good.&quot; Trust it. The Buffet Diet
              works <em>with</em> your biology, not against it.
            </p>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 11 - NEW: The Biohacker's Deep Dive */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                11
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Biohacker&apos;s Deep Dive
              </h2>
            </div>
            <p className="text-lg text-primary font-medium mb-8 italic">
              Keto, Carnivore, Hormones, and Why Your Body Is a Machine You&apos;re Not Reading the Manual For
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I mentioned earlier that I have a background in engineering. What I didn&apos;t mention is that
              I have spent an unreasonable number of hours reading published research papers on human metabolism
              while sitting in buffet restaurants. The staff at my regular spot has seen me eating salmon with
              one hand and scrolling PubMed with the other. They no longer ask questions. Here is what I have learned.
            </p>

            {/* Keto + Buffet */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-primary" />
              The Buffet Diet x Ketosis
            </h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              When you fast for 16-48 hours, your body depletes its glycogen stores and switches to burning
              fat for fuel — a metabolic state called <strong>ketosis</strong>. Your liver converts fatty acids
              into <strong>ketone bodies</strong> (beta-hydroxybutyrate, acetoacetate, and acetone), which your
              brain and muscles can use as an extremely efficient energy source. This is not a fad diet concept.
              This is biochemistry. Your body has been doing this since before humans invented agriculture.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Here&apos;s why this matters for the Buffet Diet: by the time you walk into that buffet after a
              24-48 hour fast, you are in <strong>deep ketosis</strong>. Your body has been running on its own
              stored fat for hours or days. Your metabolic machinery is primed for fat oxidation. When you then
              eat a high-protein, moderate-fat, low-carb meal at the buffet (which is exactly what happens when
              you follow the Protein First Protocol and skip the bread), you stay in or near ketosis. You&apos;re
              not spiking your insulin. You&apos;re not crashing your blood sugar. You&apos;re fueling the machine
              with premium protein while it continues to burn stored fat in the background.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="font-semibold mb-2">The Keto-Buffet Math</p>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>Fasting for 24h → liver glycogen depleted → ketone production begins (~12-16h mark)</p>
                  <p>Fasting for 48h → deep ketosis → blood ketones at 1.5-3.0 mmol/L</p>
                  <p>Breaking fast with protein + fat (sashimi, roast beef) → minimal insulin spike → sustained ketosis</p>
                  <p>Breaking fast with bread and rice → insulin spike → ketosis terminated → fat storage mode activated</p>
                  <p className="font-semibold text-foreground pt-2">This is why the Protein First Protocol isn&apos;t just a buffet strategy. It&apos;s a metabolic strategy.</p>
                </div>
              </CardContent>
            </Card>

            {/* Carnivore */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Beef className="w-6 h-6 text-primary" />
              Carnivore Diet Compatibility
            </h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The <strong>carnivore diet</strong> — eating exclusively animal products — has gained a devoted following
              among biohackers who report reduced inflammation, improved autoimmune symptoms, and enhanced mental clarity.
              The Buffet Diet is essentially <em>carnivore-compatible by default</em> if you follow the protocol. Your
              first plate is 100% animal protein. Your second plate can be more protein. A Brazilian Rodizio buffet is
              literally a carnivore diet delivery system on swords. A sushi buffet is a pescatarian carnival. A hotel
              brunch with an omelette station and a carving counter is carnivore paradise.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The beauty of the buffet is that it doesn&apos;t force a dietary ideology on you. Carnivore? Load up on
              the meat station. Keto? Skip the rice, grab the salmon and vegetables. Even if you&apos;re doing something
              like the <strong>vertical diet</strong> (red meat + white rice for bodybuilders) or <strong>paleo</strong>
              (no grains, no dairy), a well-chosen buffet accommodates all of it. You are the architect of your plate.
              The buffet is merely the supply chain.
            </p>

            {/* Sugar */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-primary" />
              The Sugar Problem (And How the Buffet Diet Solves It)
            </h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The average person consumes approximately <strong>77 grams of added sugar per day</strong> — over three
              times what the WHO recommends. This constant sugar bombardment creates a metabolic disaster: chronic
              elevated insulin, insulin resistance, inflammation, visceral fat accumulation, and eventually metabolic
              syndrome. It&apos;s the quiet engine behind the obesity epidemic, type 2 diabetes, and cardiovascular
              disease. It is, by most reasonable scientific accounts, the single biggest dietary problem of our time.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Buffet Diet attacks this problem from two angles simultaneously. First, <strong>fasting resets
              your insulin sensitivity</strong>. Every 24-48 hour fast gives your pancreas a break and allows your
              cells to re-sensitize to insulin. Studies show that intermittent fasting can improve insulin sensitivity
              by 20-31% within weeks. Second, when you follow the Protein First Protocol at the buffet, you&apos;re
              naturally avoiding the highest-sugar items (bread, desserts, sodas, sauces). You&apos;re replacing a
              sugar-heavy Standard American Diet with a protein-rich, whole-food feast. Your average daily sugar intake
              on the Buffet Diet — especially on the Warrior protocol — can drop below <strong>15 grams</strong>.
              That&apos;s an 80% reduction. Your pancreas sends its regards.
            </p>

            {/* Testosterone */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              Testosterone, Growth Hormone, and the Fasting-Feast Cycle
            </h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This section is going to make the biohacker bros very excited, and I want to be responsible about
              it, so let me cite actual research. A study published in the <em>Journal of Clinical Endocrinology
              &amp; Metabolism</em> found that short-term fasting (24-48 hours) can increase luteinizing hormone (LH)
              by up to <strong>67%</strong> in men, which is a precursor to testosterone production. Another study showed
              that 24-hour fasting periods increased growth hormone secretion by an average of <strong>2,000%</strong>
              (yes, twenty times). Human growth hormone is responsible for muscle protein synthesis, fat mobilization,
              and cellular repair. It is, in biohacker terms, the good stuff.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Now combine that with breaking your fast at a buffet loaded with <strong>zinc-rich red meat</strong>
              (critical for testosterone production), <strong>omega-3 fatty acids from salmon and tuna</strong>
              (reduces SHBG, freeing up more bioavailable testosterone), <strong>cholesterol from eggs and shellfish</strong>
              (the literal building block of steroid hormones), and <strong>vitamin D from fatty fish</strong> (linked
              to testosterone levels in multiple studies). You&apos;re not just eating. You&apos;re running a
              targeted hormonal optimization protocol. At a buffet. For $15.
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="font-semibold mb-3">The Hormonal Optimization Stack (Available at Your Local Buffet)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span><strong>Red Meat</strong> → Zinc, B12, creatine, iron, complete amino acids</span></div>
                  <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span><strong>Salmon/Tuna</strong> → Omega-3 (EPA/DHA), vitamin D, selenium</span></div>
                  <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span><strong>Eggs</strong> → Cholesterol (hormone precursor), choline, B vitamins</span></div>
                  <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span><strong>Shrimp/Shellfish</strong> → Zinc, iodine (thyroid support), copper</span></div>
                  <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span><strong>Liver (if available)</strong> → Vitamin A, copper, folate, iron (nature&apos;s multivitamin)</span></div>
                  <div className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /><span><strong>Dark Leafy Greens</strong> → Magnesium (supports 300+ enzymatic processes)</span></div>
                </div>
              </CardContent>
            </Card>

            {/* The Math of Macros */}
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Dna className="w-6 h-6 text-primary" />
              Macro Math: What a Buffet Diet Day Actually Looks Like
            </h3>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              People ask me: &quot;What are your actual macros?&quot; Fair question. Let me walk you through a
              typical OMAD buffet meal, tracked to the gram, because I am that person.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="font-semibold mb-3">Sample OMAD Buffet Meal — Tracked</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="grid grid-cols-4 gap-2 font-semibold border-b pb-2 text-foreground">
                    <span>Item</span><span>Protein</span><span>Fat</span><span>Carbs</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2"><span>Sashimi (200g)</span><span>46g</span><span>4g</span><span>0g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Roast Beef (150g)</span><span>38g</span><span>12g</span><span>0g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Grilled Chicken (150g)</span><span>35g</span><span>5g</span><span>0g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Shrimp (100g)</span><span>20g</span><span>1g</span><span>0g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Steamed Vegetables (200g)</span><span>4g</span><span>0g</span><span>12g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Mixed Salad + Olive Oil</span><span>2g</span><span>14g</span><span>6g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Miso Soup</span><span>3g</span><span>1g</span><span>4g</span></div>
                  <div className="grid grid-cols-4 gap-2"><span>Small Rice (optional, 100g)</span><span>3g</span><span>0g</span><span>28g</span></div>
                  <div className="grid grid-cols-4 gap-2 border-t pt-2 font-semibold text-foreground">
                    <span>Total</span><span>151g</span><span>37g</span><span>50g</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold text-foreground">
                    <span>Total Calories</span><span>~1,130 kcal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>151 grams of protein in a single meal.</strong> That exceeds the daily recommended intake for
              a 75kg adult (which is about 60g by RDA standards, or 120-150g by athletic/bodybuilding standards).
              You hit your protein target in one sitting. The calorie total? About 1,130 kcal. Even if you&apos;re
              generous with portions and add a dessert, you&apos;re looking at 1,400-1,800 kcal for the day. The
              average maintenance calorie requirement for an adult male is 2,200-2,500 kcal. You are in a caloric
              deficit <em>by default</em>, while eating until you&apos;re comfortably full at an all-you-can-eat buffet.
              Let that mathematical absurdity sink in.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              On the <strong>48-hour Warrior protocol</strong>, this gets even more extreme. You&apos;re consuming
              ~1,200-1,800 calories every other day, which averages to 600-900 calories per day. That&apos;s a
              massive deficit. Combined with elevated growth hormone (preserving muscle), ketosis (burning fat),
              and high protein intake (maintaining lean mass), you get what bodybuilders spend thousands on supplements
              trying to achieve: <strong>simultaneous fat loss and muscle preservation</strong>. Except you&apos;re
              doing it at a sushi buffet for the price of a medium pizza. I genuinely cannot think of anything
              funnier than that.
            </p>

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Brain className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">The Nerd Summary</p>
                    <p className="text-muted-foreground">
                      The Buffet Diet sits at the intersection of intermittent fasting (autophagy, ketosis, insulin
                      sensitivity), strategic nutrition (protein prioritization, micronutrient density, hormonal
                      optimization), and economic efficiency (cost arbitrage, time liberation, compound investment
                      potential). It is, as far as I can determine, the only dietary protocol that simultaneously
                      optimizes for health, wealth, and time. I have looked for flaws in this logic for three years.
                      I have not found any. This concerns me slightly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 12 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                12
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Common Objections (And Why They&apos;re Wrong)
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every time I tell someone about the Buffet Diet, I get the same reactions. Here they are,
              along with my responses, so you can handle the doubters in your life too. You&apos;re welcome.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2 text-red-500">&quot;Buffets are unhealthy!&quot;</p>
                  <p className="text-muted-foreground">
                    Incorrect. <em>Eating poorly at buffets</em> is unhealthy. A buffet is just a delivery mechanism
                    for food. It&apos;s morally neutral. If you walk up to a buffet and grab grilled salmon, steamed
                    vegetables, and a side salad — that&apos;s healthier than 90% of what people eat at home.
                    The buffet doesn&apos;t force fried chicken onto your plate. That&apos;s a choice. And we make better choices.
                    A buffet is literally a restaurant where YOU are in complete control of your portions and selections.
                    That&apos;s more control than you have at any regular restaurant where a chef decides what and how much goes on your plate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2 text-red-500">&quot;Fasting is dangerous!&quot;</p>
                  <p className="text-muted-foreground">
                    Humans have fasted for literally all of recorded history. Every major religion includes fasting.
                    Your great-grandparents didn&apos;t eat six small meals a day with snacks in between — that&apos;s
                    a modern invention created by the food industry to sell more food. Your body is specifically
                    designed to function during periods without food. It has an entire metabolic pathway (ketosis)
                    dedicated to running efficiently on stored energy. Fasting isn&apos;t dangerous; our modern
                    pattern of constant eating is the experiment. The science backs this up — intermittent fasting
                    has been studied extensively and shown to be safe and beneficial for healthy adults.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2 text-red-500">&quot;That&apos;s too extreme!&quot;</p>
                  <p className="text-muted-foreground">
                    Is it though? Let me tell you what&apos;s extreme. Spending 15-20 hours a week on food preparation.
                    Spending $600-800 a month on groceries. Throwing away 30-40% of the food you buy because it
                    went bad before you could eat it. Eating the same five meals on rotation for your entire adult
                    life. Washing dishes every single day until you die. THAT is extreme. Eating one amazing meal
                    a day at a place where someone else does all the work? That&apos;s called being <em>efficient</em>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2 text-red-500">&quot;What about variety? Won&apos;t you get bored?&quot;</p>
                  <p className="text-muted-foreground">
                    This might be my favorite objection because it&apos;s so backwards. You know what&apos;s boring?
                    Your meal prep chicken and broccoli. You know what has variety? A BUFFET. A single buffet visit
                    might include sushi, roast beef, grilled fish, stir-fry, salads, soups, and a dozen vegetable
                    preparations. You can eat completely different combinations every single day from the same buffet.
                    And if you rotate between 2-3 different buffets? The variety is practically infinite. Your home
                    kitchen could never compete.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2 text-red-500">&quot;My friends will think I&apos;m weird.&quot;</p>
                  <p className="text-muted-foreground">
                    Your friends are spending $800/month on groceries, 15 hours a week cooking, and eating the same
                    sad chicken pasta on repeat. You&apos;re spending $300-600/month, saving 10+ hours per week,
                    eating premium sushi and steak daily, and losing weight. When they see your results — the time
                    freedom, the savings, the physique — they won&apos;t think you&apos;re weird. They&apos;ll ask
                    you for the guide. And you&apos;ll send them this one. You&apos;re welcome.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* Chapter 13 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                13
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Getting Started — Your First Week
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Enough theory. Let&apos;s get you started. Here&apos;s your step-by-step plan for Week 1
              of the Buffet Diet. Follow this, and by next week you&apos;ll wonder why you ever spent
              time in a kitchen.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold">
                    Day 1-2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Recon Phase</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Find your buffets. Search for all-you-can-eat restaurants within a reasonable distance from
                    your home or office. You want 3-5 options. Check Google reviews, look at photos of the food,
                    check prices. Look specifically for places with good protein options — sushi buffets, Brazilian
                    rodizio, Asian buffets with a sushi bar, hotel buffets. Rate them on: protein quality, cleanliness,
                    price, and convenience. Pick your top 2. Visit them both. Eat normally — this is a scouting
                    mission, not a diet day. Take mental notes. Which one has better sashimi? Which one has a
                    carving station? Where&apos;s the good stuff?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold">
                    Day 3-4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The 16:8 Intro</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Start gentle. Skip breakfast (just have coffee or tea if you need it — black, no sugar).
                    Eat your first meal at noon at your chosen buffet. Follow the Plate Method: Plate 1 protein,
                    Plate 2 vegetables, Plate 3 wildcard. Have a light dinner at home if you&apos;re hungry (a
                    small salad, some nuts, maybe some yogurt). That&apos;s it. Notice how much time you have
                    in the morning without breakfast prep. Notice how satisfied you feel after a proper buffet lunch.
                    Notice how little you actually need for dinner. Your body is already adapting.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold">
                    Day 5-6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The OMAD Test</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ready to level up? Try a full OMAD day. No breakfast. No dinner. Just one magnificent
                    buffet lunch. Apply all the rules: recon walk, protein first, value stack, water only.
                    Eat until you&apos;re comfortably full (not stuffed — there&apos;s a difference). Then
                    go about your day. Notice how you feel at 3 PM. At 6 PM. At 9 PM. Most people are
                    surprised at how NOT hungry they are. That big protein-rich meal keeps you satisfied
                    for way longer than you&apos;d expect. If you struggle, that&apos;s totally fine — go
                    back to 16:8 for a few more days and try again.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-primary text-primary-foreground rounded-lg p-2 font-bold">
                    Day 7
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reflect & Plan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take stock. How do you feel? How much time did you save this week? How much money did you
                    save compared to a normal week? Weigh yourself if you want (though one week isn&apos;t enough
                    for dramatic changes). Most importantly: decide which protocol you want to follow going forward.
                    The Starter? The OMAD? Something in between? There&apos;s no wrong answer. The best protocol
                    is the one you can stick with. Week 2 and beyond: settle into your chosen protocol. Find your
                    rhythm. Rotate between your top 2-3 buffets for variety. Track your weight, energy, and savings
                    if you&apos;re into data. Or don&apos;t. Just enjoy the ride.
                  </p>
                </div>
              </div>
            </div>

            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">What to Track (If You Want)</p>
                    <div className="grid grid-cols-2 gap-2 text-muted-foreground text-sm">
                      <span>Body weight (weekly)</span>
                      <span>Energy levels (daily, 1-10)</span>
                      <span>Hours saved from cooking</span>
                      <span>Money spent on food</span>
                      <span>How you feel overall</span>
                      <span>Buffet quality scores</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="mb-16" />

          {/* Closing */}
          <section className="mb-16 print:break-before-page">
            <div className="text-center mb-12">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                A Final Word
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              When I tell people about the Buffet Diet, I can see the exact moment their brain short-circuits.
              Their eyes go slightly unfocused. Their mouth opens a little. They look at me the way you might
              look at someone who just told you the earth is flat — except then I show them the spreadsheets,
              and the weight loss photos, and the monthly food expenses, and slowly their expression changes
              from &quot;this man needs help&quot; to &quot;wait, actually, hold on.&quot;
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I understand the skepticism. I do. The first time I explained this to my mother, she was silent
              for about fifteen seconds and then asked if I was eating enough vegetables. (I am, Mom. The buffet
              has an excellent salad bar.) My business partner thought it was a joke for three weeks, until he
              noticed I had lost 8 kilos and asked me to explain the system in detail during a two-hour meeting
              where no other work got done.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              But here is what I know to be true, based on personal experience, basic arithmetic, and the
              visible discomfort of buffet managers who have watched me eat:
            </p>

            <Card className="mb-6 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> I have not used my oven since March 2019. The spider is still there. We have an understanding.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> My monthly food expenditure is lower than most people&apos;s grocery bill alone.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> I have reclaimed approximately 10-15 hours per week that I previously spent on food logistics.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> I eat a wider variety of high-quality protein than anyone I know who cooks at home.</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> I have maintained a healthy body composition that my doctor has described as &quot;surprisingly good, considering.&quot;</p>
                  <p className="flex gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> At least two buffet restaurants in Stockholm have menus that I am confident were redesigned partly in response to my dining habits.</p>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Buffet Diet is a diet. It is a lifestyle. It is an economic strategy disguised as a nutrition
              plan, or possibly a nutrition plan disguised as an economic strategy. I am genuinely not sure anymore.
              What I am sure of is that it works. I have the data. I have the results. I have a kitchen that could
              be featured in an architectural magazine because nothing in it has been moved in five years.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              People will tell you this is crazy. These are the same people who spend $800 a month on groceries,
              throw away 30% of their food, wash dishes every day, and eat the same four meals on rotation while
              calling it &quot;cooking.&quot; I sit down at a clean table, eat world-class sashimi and prime rib
              for $15, walk out, and go about my day. One of us is crazy. I no longer think it&apos;s me.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Go find your buffet. Do the recon walk. Load up on protein. Skip the bread. Drink water. Trust the
              process. And when your friends ask why you look different — leaner, more energetic, suspiciously
              well-fed for someone who claims to fast — send them this guide.
            </p>

            <div className="text-center mb-8">
              <p className="text-xl font-semibold mb-2">See you at the buffet.</p>
              <p className="text-muted-foreground italic mb-6">
                — Benjamin Karlsson
              </p>
              <p className="text-sm text-muted-foreground/60">
                Founder of The Buffet Diet. Bio Hacker. Entrepreneur.
                <br />The Man Who Hasn&apos;t Used His Oven Since 2019.
              </p>
            </div>
          </section>

          <Separator className="mb-16" />

          {/* Back Page / CTA */}
          <section className="print:break-before-page">
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Buffet?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Use our community-driven restaurant finder to discover the best quality buffets near you.
                Rated by fellow Buffet Dieters for protein quality, value, and overall experience.
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
                <p className="mb-2">Follow the Buffet Diet Community</p>
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
