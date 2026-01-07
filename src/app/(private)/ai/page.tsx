"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Bot, FileText, Send, Sparkles, Upload } from "lucide-react";

export default function AiPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="h2">Inteligência Artificial</h1>
        <p className="base1 text-n-5">
          Ferramentas avançadas para análise de reuniões.
        </p>
      </div>

      <div className="grid h-full gap-6 md:grid-cols-3">
        {/* Sidebar / Upload Area */}
        <div className="flex flex-col gap-6 md:col-span-1">
          <Card className="h-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload de Gravação/PDF
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-n-3 dark:border-n-6 hover:bg-n-2 dark:hover:bg-n-8 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors">
                <FileText className="text-n-5 mb-4 h-10 w-10" />
                <p className="base2 font-medium">Arraste arquivos aqui</p>
                <p className="caption1 text-n-5 mt-1">
                  PDF ou Áudio (MP3, WAV)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="grow">
            <CardHeader>
              <CardTitle>Arquivos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-n-2 dark:bg-n-8 hover:bg-n-3 dark:hover:bg-n-7 flex cursor-pointer items-center rounded-lg p-3 transition-colors"
                  >
                    <FileText className="text-primary-1 mr-3 h-5 w-5" />
                    <div className="overflow-hidden">
                      <p className="truncate text-sm font-medium">
                        Reunião de Alinhamento {i}.pdf
                      </p>
                      <p className="text-n-5 text-xs">Processado há 2h</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Interface */}
        <Card className="flex h-full max-h-[600px] flex-col md:col-span-2 md:max-h-full">
          <CardHeader className="border-n-2 dark:border-n-7 border-b">
            <CardTitle className="text-primary-1 flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Assistente Health Voice
            </CardTitle>
          </CardHeader>
          <CardContent className="flex h-full flex-col p-0">
            {/* Messages Area */}
            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              <div className="flex gap-4">
                <div className="bg-primary-1 text-n-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="bg-n-2 dark:bg-n-8 max-w-[80%] rounded-2xl rounded-tl-none p-4">
                  <p className="text-sm">
                    Olá! Sou sua IA assistente. Faça upload de uma gravação ou
                    PDF e peça resumos, extração de tarefas ou análises de
                    sentimento.
                  </p>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-4">
                <div className="bg-n-6 text-n-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <span className="text-xs font-bold">ME</span>
                </div>
                <div className="bg-primary-1 max-w-[80%] rounded-2xl rounded-tr-none p-4">
                  <p className="text-n-1 text-sm">
                    Pode resumir os pontos principais da reunião de ontem?
                  </p>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="border-n-2 dark:border-n-7 border-t p-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="border-n-3 bg-n-1 focus:border-primary-1 dark:border-n-6 dark:bg-n-8 h-12 w-full rounded-xl border pr-12 pl-4 text-sm transition-colors outline-none"
                />
                <button className="text-primary-1 hover:bg-primary-1/10 absolute right-2 rounded-lg p-2 transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
