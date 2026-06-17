"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CopyCheck, FileText, CheckCircle2, Clock } from "lucide-react";

export default function PracticePage() {
  return (
    <div className="pt-8 pb-32 md:pb-8 px-4 md:px-0 space-y-8 max-w-3xl mx-auto">
      <header>
        <h1 className="text-3xl font-heading font-extrabold tracking-tight">Practice</h1>
        <p className="text-muted-foreground mt-1 text-sm font-medium">Test yourself with past exams & quizzes.</p>
      </header>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Mock Exams</h2>
          <Button variant="link" className="text-primary h-auto p-0 font-bold">View all</Button>
        </div>
        
        <Card className="rounded-[20px] bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none shadow-lg shadow-indigo-500/20">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <CopyCheck className="w-6 h-6 text-white" />
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs font-bold">1h 30m</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1">UACE Mathematics P1</h3>
            <p className="text-indigo-100 mb-6 text-sm">Full paper simulation • Auto-graded</p>
            <Button className="w-full bg-white text-indigo-600 hover:bg-white/90 rounded-[12px] font-bold">
              Start Exam
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-2 gap-4">
        <Card className="rounded-[20px] border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-5 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm">Past Papers</h3>
            <p className="text-[10px] text-muted-foreground">Browse archives</p>
          </CardContent>
        </Card>

        <Card className="rounded-[20px] border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-5 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-sm">Topic Quizzes</h3>
            <p className="text-[10px] text-muted-foreground">Target specific areas</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
