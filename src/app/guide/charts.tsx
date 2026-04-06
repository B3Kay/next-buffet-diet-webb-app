'use client';

import { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

// --- Monthly Cost Comparison ---

function generateMonthlyCostData(buffetPrice: number) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const groceryCost = 700;    // avg grocery + time cost
  const eatingOutCost = 1800; // 3 meals/day at restaurants
  const omadCost = buffetPrice * 30;
  const warriorCost = buffetPrice * 15;

  return months.map((month) => ({
    month,
    'Groceries + Cooking': groceryCost,
    'Eating Out (3x/day)': eatingOutCost,
    'Buffet Diet (OMAD)': omadCost,
    'Buffet Diet (Warrior)': warriorCost,
  }));
}

export function MonthlyCostChart() {
  const [buffetPrice, setBuffetPrice] = useState(17);
  const data = generateMonthlyCostData(buffetPrice);

  return (
    <Card className="my-8">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div>
            <p className="font-bold text-xl">Monthly Food Cost Comparison</p>
            <p className="text-sm text-muted-foreground">
              Adjust your local buffet price to see the real numbers
            </p>
          </div>
          <Badge variant="outline" className="text-base px-3 py-1 w-fit">
            Buffet: ${buffetPrice}/meal
          </Badge>
        </div>

        <div className="flex items-center gap-4 mb-6 px-1">
          <span className="text-sm text-muted-foreground whitespace-nowrap">$10</span>
          <Slider
            value={[buffetPrice]}
            onValueChange={(v) => setBuffetPrice(v[0])}
            min={10}
            max={35}
            step={1}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground whitespace-nowrap">$35</span>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
            <Tooltip
              formatter={(value) => [`$${Number(value).toLocaleString()}`]}
              contentStyle={{ borderRadius: '8px', fontSize: '14px' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="Eating Out (3x/day)" fill="#ef4444" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Groceries + Cooking" fill="#f59e0b" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Buffet Diet (OMAD)" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            <Bar dataKey="Buffet Diet (Warrior)" fill="#22c55e" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <SavingsCard
            label="OMAD Monthly"
            amount={buffetPrice * 30}
            color="text-blue-500"
          />
          <SavingsCard
            label="Warrior Monthly"
            amount={buffetPrice * 15}
            color="text-green-500"
          />
          <SavingsCard
            label="OMAD Annual Savings vs Groceries"
            amount={(700 - buffetPrice * 30) * 12}
            color="text-blue-600"
            isSavings
          />
          <SavingsCard
            label="Warrior Annual Savings vs Groceries"
            amount={(700 - buffetPrice * 15) * 12}
            color="text-green-600"
            isSavings
          />
        </div>
      </CardContent>
    </Card>
  );
}

function SavingsCard({ label, amount, color, isSavings }: {
  label: string; amount: number; color: string; isSavings?: boolean;
}) {
  const isPositive = amount > 0;
  return (
    <div className="text-center p-3 rounded-lg bg-muted/50">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className={`text-lg font-bold ${isSavings ? (isPositive ? 'text-green-500' : 'text-red-500') : color}`}>
        {isSavings && isPositive && '+'}{amount < 0 ? '-' : ''}${Math.abs(amount).toLocaleString()}
      </p>
    </div>
  );
}

// --- Investment Growth Chart ---

function generateInvestmentData(monthlySavings: number, annualReturn: number) {
  const years = 10;
  const monthlyReturn = annualReturn / 100 / 12;
  const data = [];

  let totalInvested = 0;
  let portfolioValue = 0;

  for (let year = 0; year <= years; year++) {
    data.push({
      year: `Year ${year}`,
      'Total Invested': Math.round(totalInvested),
      'Portfolio Value': Math.round(portfolioValue),
      'Pure Gains': Math.round(portfolioValue - totalInvested),
    });

    for (let month = 0; month < 12; month++) {
      portfolioValue = (portfolioValue + monthlySavings) * (1 + monthlyReturn);
      totalInvested += monthlySavings;
    }
  }

  return data;
}

export function InvestmentGrowthChart() {
  const [annualReturn, setAnnualReturn] = useState(10);
  const [protocol, setProtocol] = useState<'omad' | 'warrior'>('warrior');

  // Savings vs groceries ($700/mo baseline)
  const omadSavings = Math.max(700 - 17 * 30, 50);   // ~$190/mo
  const warriorSavings = Math.max(700 - 17 * 15, 50); // ~$445/mo
  const monthlySavings = protocol === 'warrior' ? warriorSavings : omadSavings;

  const data = generateInvestmentData(monthlySavings, annualReturn);
  const finalValue = data[data.length - 1]['Portfolio Value'];
  const totalInvested = data[data.length - 1]['Total Invested'];

  return (
    <Card className="my-8">
      <CardContent className="pt-6">
        <div className="mb-4">
          <p className="font-bold text-xl">What If You Invested the Savings?</p>
          <p className="text-sm text-muted-foreground">
            Your Buffet Diet savings invested in an S&P 500 index fund over 10 years
          </p>
        </div>

        <Tabs value={protocol} onValueChange={(v) => setProtocol(v as 'omad' | 'warrior')} className="mb-4">
          <TabsList>
            <TabsTrigger value="omad">OMAD (save ${omadSavings}/mo)</TabsTrigger>
            <TabsTrigger value="warrior">Warrior (save ${warriorSavings}/mo)</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-4 mb-6 px-1">
          <span className="text-sm text-muted-foreground whitespace-nowrap">5%</span>
          <Slider
            value={[annualReturn]}
            onValueChange={(v) => setAnnualReturn(v[0])}
            min={5}
            max={15}
            step={1}
            className="flex-1"
          />
          <span className="text-sm text-muted-foreground whitespace-nowrap">15%</span>
          <Badge variant="outline" className="px-3 py-1 whitespace-nowrap">
            {annualReturn}% annual
          </Badge>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              formatter={(value) => [`$${Number(value).toLocaleString()}`]}
              contentStyle={{ borderRadius: '8px', fontSize: '14px' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Area
              type="monotone"
              dataKey="Total Invested"
              stackId="1"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="Pure Gains"
              stackId="1"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.4}
            />
            <ReferenceLine y={0} stroke="#666" />
          </AreaChart>
        </ResponsiveContainer>

        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="text-center p-4 rounded-lg bg-blue-500/10">
            <p className="text-xs text-muted-foreground mb-1">Total Invested</p>
            <p className="text-xl font-bold text-blue-500">${totalInvested.toLocaleString()}</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-green-500/10">
            <p className="text-xs text-muted-foreground mb-1">Portfolio Value</p>
            <p className="text-xl font-bold text-green-500">${finalValue.toLocaleString()}</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-yellow-500/10">
            <p className="text-xs text-muted-foreground mb-1">Pure Compound Gains</p>
            <p className="text-xl font-bold text-yellow-600">${(finalValue - totalInvested).toLocaleString()}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-4 text-center italic">
          By not cooking and eating at buffets, you could turn food savings into a ${finalValue.toLocaleString()} portfolio in 10 years.
          That&apos;s the Buffet Diet wealth hack. Your oven isn&apos;t just unused — it&apos;s a symbol of financial freedom.
        </p>
      </CardContent>
    </Card>
  );
}
