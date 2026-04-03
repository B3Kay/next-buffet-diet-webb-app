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
              Free Guide - 18 Pages
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              THE BUFFET DIET
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              The Ultimate Life Hack for Busy People Who Love Food
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              How to Lose Weight, Save Time, and Beat the Buffet at Its Own Game
            </p>
            <div className="flex items-center justify-center gap-2 mb-10 text-muted-foreground">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">
                By <strong>Benjamin Karlsson</strong> — Buffet Diet Guru, Bio Hacker, Entrepreneur
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
          {/* Chapter 1 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                1
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                What the Hell is the Buffet Diet?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Alright, let me paint you a picture. It&apos;s a Tuesday afternoon. You&apos;ve just crushed a 24-hour fast.
              Your body is in full-on fat-burning, autophagy-cranking beast mode. You walk into an all-you-can-eat
              buffet. The staff smiles at you, blissfully unaware that you&apos;re about to absolutely
              <em> demolish</em> their profit margins.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Welcome to <strong>The Buffet Diet</strong>. It&apos;s not just a diet. It&apos;s a lifestyle. It&apos;s a
              philosophy. It&apos;s a movement. Okay fine, it&apos;s also a little bit of a joke — but here&apos;s the
              thing: <em>it actually works</em>.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The concept is beautifully simple: you combine <strong>intermittent fasting</strong> with{" "}
              <strong>eating at all-you-can-eat buffets</strong>. That&apos;s it. That&apos;s the whole thing.
              You fast, you feast, you repeat. No meal prep. No grocery shopping. No washing seventeen
              tupperware containers on a Sunday night while questioning your life choices.
            </p>

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">The Core Idea</p>
                    <p className="text-muted-foreground">
                      Fast strategically. Eat at buffets. Get lean. Save time. Save money. Live your best life.
                      The buffet thinks it&apos;s making money off you. You know better.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This guide is for <strong>entrepreneurs</strong>, <strong>students</strong>,{" "}
              <strong>busy professionals</strong>, and basically anyone who has better things to do than
              spend 2 hours a day in the kitchen. If you&apos;re the kind of person who values your time,
              loves good food, and thinks outside the box — you&apos;re in the right place.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Let me be real with you: when I first stumbled onto this concept, I thought I was losing my mind.
              &quot;Eat at buffets... to lose weight?&quot; It sounds backwards. It sounds like something a
              madman would say. But after trying it myself, tracking the numbers, and watching the results roll
              in — I realized I wasn&apos;t crazy. I was a <em>genius</em>. (Okay, maybe a little crazy too.)
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              You&apos;re not getting fat at buffets. You&apos;re getting <strong>lean</strong> at buffets.
              Let that sink in. Now let me show you how.
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
              Let&apos;s talk about how most people eat. They wake up, eat breakfast (or skip it and feel guilty).
              They go to work, eat a sad desk lunch. They come home exhausted, stare into the fridge for 10
              minutes, and then either cook something mediocre or order takeout. Then they clean up.
              Then they do it all again tomorrow. And the day after. And the day after that. Forever.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Let&apos;s actually break down the hidden cost of &quot;normal&quot; eating:
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

            <Card className="mb-6 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">The Bottom Line</p>
                    <p className="text-muted-foreground">
                      Less money spent. More time saved. Better food quality. Weight loss included.
                      The Buffet Diet isn&apos;t just a diet — it&apos;s the single most efficient way
                      to feed a human being in a modern city. Fight me.
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
              Not all buffets are created equal. You want buffets with <strong>quality protein options</strong>.
              Here&apos;s my tier list:
            </p>
            <div className="grid gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <Badge variant="outline" className="border-yellow-500 text-yellow-600">S-Tier</Badge>
                <span className="text-muted-foreground">Brazilian Rodizio (all-you-can-eat meat carved at your table), High-end sushi buffets, Hotel brunch buffets</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Badge variant="outline" className="border-blue-500 text-blue-600">A-Tier</Badge>
                <span className="text-muted-foreground">Korean BBQ buffets, Chinese hot pot buffets, Indian buffets with tandoori options</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <Badge variant="outline" className="border-green-500 text-green-600">B-Tier</Badge>
                <span className="text-muted-foreground">General Asian buffets with sushi section, Mediterranean buffets, Seafood buffets</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <Badge variant="outline" className="border-orange-500 text-orange-600">Avoid</Badge>
                <span className="text-muted-foreground">Pizza buffets, cheap Chinese steam table joints, anything that&apos;s mostly bread and fried food</span>
              </div>
            </div>

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

          {/* Chapter 7 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                7
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

          {/* Chapter 8 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                8
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

          {/* Chapter 9 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                9
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

          {/* Chapter 10 */}
          <section className="mb-16 print:break-before-page">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                10
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
                Welcome to the Buffet Diet Life
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              If you&apos;ve read this far, congratulations — you&apos;re now part of an elite group of people
              who have figured out what the rest of the world hasn&apos;t. While everyone else is stuck in the
              endless cycle of grocery shopping, meal prepping, cooking, cleaning, and repeating — you&apos;ve
              found the exit door. And it leads directly to an all-you-can-eat buffet.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              While others are eating sad tupperware lunches at their desk, you&apos;re feasting like a king
              on sashimi and prime rib. While they&apos;re spending $800/month on groceries and 15 hours a week
              in the kitchen, you&apos;re spending half that with zero cooking time. While they&apos;re gaining
              weight from constant snacking and three-meal-a-day habits, you&apos;re getting leaner through
              strategic fasting and protein-focused buffet meals.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The buffet doesn&apos;t know what hit it. You walked in with a plan, a strategy, and an empty stomach.
              You loaded up on the premium proteins. You skipped the cheap fillers. You drank water instead of soda.
              You extracted maximum value per dollar. The buffet expected you to fill up on rice and bread.
              Instead, you ate $40 worth of sashimi for a $15 ticket. <strong>You didn&apos;t just eat at the buffet.
              You won the buffet.</strong>
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This is the Buffet Diet. It&apos;s a diet. It&apos;s a lifestyle. It&apos;s a philosophy.
              It&apos;s a little bit absurd. And it absolutely, genuinely works. I&apos;ve lived it.
              I&apos;ve loved it. And now I&apos;m sharing it with you.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Go find your buffet. Scout the line. Load up on protein. Save your time. Save your money.
              Get lean. Get free. And remember — <em>the buffet thinks it&apos;s winning. But you know better.</em>
            </p>

            <div className="text-center mb-8">
              <p className="text-xl font-semibold mb-2">See you at the buffet.</p>
              <p className="text-muted-foreground italic">
                — Benjamin Karlsson, Buffet Diet Guru, Bio Hacker, Entrepreneur
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
