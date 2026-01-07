"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Filter, Plus, Search } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="h2 text-n-7">Gestão de Contatos</h1>
          <p className="base1 text-n-4">
            Gerencie os clientes e seus históricos.
          </p>
        </div>
        <button className="btn btn-blue">
          <Plus className="mr-2 h-5 w-5" />
          Novo Contato
        </button>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CardTitle>Todos os Contatos</CardTitle>
          <div className="flex w-full items-center gap-3 md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="text-n-4 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nome..."
                className="border-n-3 bg-n-1 focus:border-primary-1 h-10 w-full rounded-xl border pr-4 pl-10 text-sm outline-none"
              />
            </div>
            <button className="btn btn-white h-10 px-3">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-n-3 border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Nome
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Responsável
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Data Cadastro
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Última Gravação
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <tr
                    key={item}
                    className="border-n-3 border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100"
                  >
                    <td className="p-4 align-middle font-medium">
                      Paciente Exemplo {item}
                    </td>
                    <td className="p-4 align-middle">Dr. Silva</td>
                    <td className="p-4 align-middle">01/01/2026</td>
                    <td className="p-4 align-middle">05/01/2026</td>
                    <td className="text-primary-1 cursor-pointer p-4 align-middle font-semibold hover:underline">
                      Ver Histórico
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
