"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Image as ImageIcon, Sparkles, BookA } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "motion/react";

export default function TutorPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi Kato! I'm your AI Tutor. Ready to revise?" },
  ]);

  return (
    <div className="flex flex-col h-full pt-4 md:pt-8 w-full max-w-3xl mx-auto pb-24 md:pb-0">
      <header className="px-4 md:px-0 flex-shrink-0 mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-extrabold tracking-tight flex items-center">
             AI Tutor <Sparkles className="w-6 h-6 ml-2 text-primary" />
          </h1>
          <p className="text-muted-foreground mt-1 text-sm font-medium">Powered by Gemini 2.5 Flash & RAG</p>
        </div>
      </header>

      {/* Suggested Prompts */}
      <div className="flex px-4 md:px-0 space-x-2 overflow-x-auto no-scrollbar py-2 flex-shrink-0">
        <Button variant="outline" size="sm" className="rounded-full bg-card shadow-sm border-border whitespace-nowrap">
          <BookA className="w-4 h-4 mr-2 text-indigo-500" /> Explain Integration
        </Button>
        <Button variant="outline" size="sm" className="rounded-full bg-card shadow-sm border-border whitespace-nowrap">
          <Sparkles className="w-4 h-4 mr-2 text-emerald-500" /> Topic Quiz
        </Button>
      </div>

      {/* Chat Area */}
      <ScrollArea className="flex-1 px-4 md:px-0 mt-2 mb-4">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <motion.div 
              initial={{opacity: 0, y: 10}} 
              animate={{opacity: 1, y: 0}}
              key={i} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`p-4 max-w-[85%] rounded-[20px] ${
                msg.role === 'user' 
                  ? 'bg-primary text-primary-foreground rounded-tr-sm' 
                  : 'bg-card border border-border shadow-sm rounded-tl-sm'
              }`}>
                {msg.role === 'assistant' && (
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground tracking-widest">TUTOR</span>
                  </div>
                )}
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="px-4 md:px-0 flex-shrink-0 mt-auto">
        <div className="bg-card border border-border shadow-md rounded-[24px] p-2 flex items-end relative focus-within:ring-2 ring-primary/50 transition-shadow">
          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-foreground h-12 w-12 rounded-full">
            <ImageIcon className="w-5 h-5" />
          </Button>
          <textarea 
            placeholder="Ask about a topic, or upload a question..."
            className="flex-1 bg-transparent border-none outline-none resize-none max-h-32 min-h-[48px] py-3 px-2 text-sm"
            rows={1}
          />
          <Button size="icon" className="shrink-0 h-10 w-10 mr-1 mb-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-center text-[10px] text-muted-foreground mt-3 font-medium">AI can make mistakes. Verify answers with marking guides.</p>
      </div>
    </div>
  );
}
