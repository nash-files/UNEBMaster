"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Flame, 
  Trophy, 
  BookOpen, 
  Bot, 
  FileText, 
  Timer, 
  ChevronRight,
  TrendingUp,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="pt-8 pb-32 md:pb-8 px-4 md:px-0 space-y-8 max-w-3xl mx-auto">
      {/* Header section */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-extrabold tracking-tight">Good morning, Kato</h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">UACE Sciences • Senior 6</p>
        </div>
        <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-[16px] border border-border shadow-sm">
          <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
          <span className="font-bold text-lg">14</span>
        </div>
      </header>

      {/* AI Recommendation Banner */}
      <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}}>
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-primary to-accent text-primary-foreground p-6 shadow-xl shadow-primary/20">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary-foreground/90" />
              <span className="font-bold text-sm tracking-widest text-primary-foreground/90">AI RECOMMENDED</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Master Organic Chemistry</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-[280px] text-sm leading-relaxed">
              Based on your last mock exam, we&apos;ve prepared a customized revision path for Alkanes and Alkenes. 
            </p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-[16px] font-bold shadow-lg">
              Start Session
            </Button>
          </div>
          <Bot className="absolute -right-6 -bottom-6 w-48 h-48 opacity-10" />
        </div>
      </motion.div>

      {/* Quick Actions */}
      <section>
        <h3 className="font-bold tracking-wide text-sm text-muted-foreground mb-4">QUICK ACTIONS</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/tutor">
            <Card className="hover:shadow-md transition-shadow border border-border bg-card rounded-[20px]">
              <CardContent className="p-5 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm">Ask AI Tutor</span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/practice">
            <Card className="hover:shadow-md transition-shadow border border-border bg-card rounded-[20px]">
              <CardContent className="p-5 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="font-bold text-sm">Past Papers</span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Continue Learning */}
      <section>
        <h3 className="font-bold tracking-wide text-sm text-muted-foreground mb-4">CONTINUE LEARNING</h3>
        <Card className="rounded-[20px] overflow-hidden border border-border shadow-sm">
          <div className="p-5 flex items-center">
            <div className="w-14 h-14 rounded-[16px] bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 mr-4">
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0 pr-4">
              <h4 className="font-bold text-base truncate">Physics: Mechanics</h4>
              <p className="text-xs text-muted-foreground mt-1">Projectile motion advanced...</p>
              <div className="flex items-center space-x-3 mt-3">
                <Progress value={65} className="h-2 flex-1" />
                <span className="text-xs font-bold text-muted-foreground">65%</span>
              </div>
            </div>
            <Button size="icon" variant="ghost" className="rounded-full shrink-0">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </Card>
      </section>

      {/* Performance Overview */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold tracking-wide text-sm text-muted-foreground">YOUR STATS</h3>
          <Button variant="link" className="text-primary text-xs h-auto p-0 font-bold">View full report</Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card className="rounded-[20px] border border-border shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-emerald-500 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" /> +12%
                </span>
              </div>
              <p className="text-2xl font-bold tracking-tight">1,240</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">Total XP Earned</p>
            </CardContent>
          </Card>
          <Card className="rounded-[20px] border border-border shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <Timer className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-bold tracking-tight">14h 30m</p>
              <p className="text-xs text-muted-foreground font-medium mt-1">Revision Time</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
