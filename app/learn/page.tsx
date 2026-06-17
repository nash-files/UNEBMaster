"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const subjects = [
  { name: "Mathematics", color: "text-blue-500", bg: "bg-blue-500/10", progress: 45 },
  { name: "Physics", color: "text-indigo-500", bg: "bg-indigo-500/10", progress: 65 },
  { name: "Chemistry", color: "text-emerald-500", bg: "bg-emerald-500/10", progress: 30 },
  { name: "Biology", color: "text-green-500", bg: "bg-green-500/10", progress: 15 },
  { name: "Geography", color: "text-orange-500", bg: "bg-orange-500/10", progress: 80 },
  { name: "History", color: "text-red-500", bg: "bg-red-500/10", progress: 10 },
];

export default function LearnPage() {
  return (
    <div className="pt-8 pb-32 md:pb-8 px-4 md:px-0 space-y-6 max-w-3xl mx-auto">
      <header>
        <h1 className="text-3xl font-heading font-extrabold tracking-tight">Learn</h1>
        <p className="text-muted-foreground mt-1 text-sm font-medium">Explore topics, read notes, and download resources.</p>
      </header>

      <div className="relative">
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="Search for a subject or topic..." 
          className="pl-12 h-12 rounded-[16px] bg-card border-border shadow-sm text-base"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject, i) => (
          <motion.div 
            key={subject.name} 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.05 }}
          >
            <Card className="rounded-[20px] border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="p-4 flex items-center">
                <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center shrink-0 mr-4 ${subject.bg} ${subject.color}`}>
                  <BookOpen className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base">{subject.name}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${subject.bg.replace('/10', '')}`} style={{ width: `${subject.progress}%` }} />
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground">{subject.progress}%</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors ml-2 shrink-0" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
