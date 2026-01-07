"use client";

import { CardContent, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Filter, Plus, Search, Shield, ShieldCheck, User } from "lucide-react";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="h2 text-n-7">Gestão de Usuários</h1>
          <p className="base1 text-n-4">
            Administre os acessos e permissões da equipe.
          </p>
        </div>
        <button className="btn btn-blue">
          <Plus className="mr-2 h-5 w-5" />
          Novo Usuário
        </button>
      </div>

      <div className="border-n-3 flex flex-col gap-6 rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <CardTitle>Todos os Usuários</CardTitle>
          <div className="flex w-full items-center gap-3 md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="text-n-4 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar usuário..."
                className="border-n-3 bg-n-1 focus:border-primary-1 h-10 w-full rounded-xl border pr-4 pl-10 text-sm outline-none"
              />
            </div>
            <button className="btn btn-white h-10 px-3">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </button>
          </div>
        </div>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-n-3 border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Usuário
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Função
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Empresa/Clínica
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Status
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[
                  {
                    name: "Carlos Gerente",
                    role: "Manager",
                    company: "Clínica Central",
                    status: "Ativo",
                  },
                  {
                    name: "Dr. Silva",
                    role: "User",
                    company: "Clínica Central",
                    status: "Ativo",
                  },
                  {
                    name: "Maria Recepcionista",
                    role: "User",
                    company: "Clínica Central",
                    status: "Inativo",
                  },
                  {
                    name: "Admin Geral",
                    role: "Admin",
                    company: "Health Voice",
                    status: "Ativo",
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="border-n-3 border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100"
                  >
                    <td className="flex items-center gap-2 p-4 align-middle font-medium">
                      <div className="bg-n-3 text-n-6 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
                        {item.name.substring(0, 2).toUpperCase()}
                      </div>
                      {item.name}
                    </td>
                    <td className="p-4 align-middle">
                      <div
                        className={cn(
                          "flex items-center gap-1",
                          item.role === "Admin"
                            ? "text-accent-1"
                            : item.role === "Manager"
                              ? "text-primary-1"
                              : "text-n-4",
                        )}
                      >
                        {item.role === "Admin" && (
                          <ShieldCheck className="h-4 w-4" />
                        )}
                        {item.role === "Manager" && (
                          <Shield className="h-4 w-4" />
                        )}
                        {item.role === "User" && <User className="h-4 w-4" />}
                        {item.role}
                      </div>
                    </td>
                    <td className="p-4 align-middle">{item.company}</td>
                    <td className="p-4 align-middle">
                      <span
                        className={cn(
                          "focus:ring-ring inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
                          item.status === "Ativo"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800",
                        )}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="space-x-3 p-4 align-middle">
                      <span className="text-primary-1 cursor-pointer font-semibold hover:underline">
                        Editar
                      </span>
                      <span className="text-accent-1 cursor-pointer font-semibold hover:underline">
                        Desativar
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </div>
    </div>
  );
}
