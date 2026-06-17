"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, ShieldCheck, Crown, Bell, LogOut, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="pt-8 pb-32 md:pb-8 px-4 md:px-0 space-y-8 max-w-3xl mx-auto">
      <header className="flex justify-between items-start">
        <h1 className="text-3xl font-heading font-extrabold tracking-tight">Profile</h1>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Settings className="w-6 h-6 text-muted-foreground" />
        </Button>
      </header>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="relative w-20 h-20 rounded-full border-2 border-border overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/portrait/200/200" 
            alt="Profile Avatar" 
            fill 
            className="object-cover" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Kato Wasswa</h2>
          <p className="text-sm text-muted-foreground font-medium">katowasswa@school.edu</p>
          <div className="flex items-center mt-2 space-x-2">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-widest uppercase">Student</span>
            <span className="bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-widest flex items-center">
              <Crown className="w-3 h-3 mr-1" /> PREMIUM
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold tracking-wide text-sm text-muted-foreground pl-1">ACCOUNT</h3>
        
        <Card className="rounded-[20px] border border-border shadow-sm overflow-hidden">
          <div className="divide-y divide-border">
            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <Crown className="w-5 h-5" />
                </div>
                <span className="font-medium">Subscription Plan</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="font-medium">Notifications</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-medium">Privacy & Security</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </Card>
      </div>

      <div className="pt-4">
        <Button variant="outline" className="w-full h-14 rounded-[16px] text-destructive border-border hover:bg-destructive/10 hover:text-destructive font-bold text-base shadow-sm">
          <LogOut className="w-5 h-5 mr-2" /> Log Out
        </Button>
      </div>
    </div>
  );
}
