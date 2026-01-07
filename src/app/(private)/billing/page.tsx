"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarChart2, CreditCard, FileText } from "lucide-react";

const UsageProgress = ({ used, total }: { used: number; total: number }) => {
  const percentage = Math.min((used / total) * 100, 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-n-7 font-medium">Horas Utilizadas</span>
        <span className="text-n-4">
          {used}h / {total}h
        </span>
      </div>
      <div className="bg-n-3 h-3 w-full overflow-hidden rounded-full">
        <div
          className="bg-primary-1 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-n-4 text-right text-xs">
        {percentage.toFixed(0)}% Utilizado
      </p>
    </div>
  );
};

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="h2 text-n-7">Faturamento</h1>
        <p className="base1 text-n-4">
          Gerencie sua assinatura e notas fiscais.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Plano Atual</CardTitle>
            <CreditCard className="text-n-4 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="mb-2 text-2xl font-bold">
              Plano Empresarial Gold
            </div>
            <p className="caption1 text-n-4 mb-4">Renova em 01/02/2026</p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                Ativo
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Consumo Mensal</CardTitle>
            <BarChart2 className="text-n-4 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <UsageProgress used={145} total={200} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Notas Fiscais</CardTitle>
            <button className="btn btn-blue h-10 px-4">
              Solicitar Nota Fiscal
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-n-3 border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Data de Emissão
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0">
                    Valor
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
                  { date: "01/01/2026", value: "R$ 4.500,00", status: "Pago" },
                  { date: "01/12/2025", value: "R$ 4.500,00", status: "Pago" },
                  { date: "01/11/2025", value: "R$ 4.500,00", status: "Pago" },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="border-n-3 border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100"
                  >
                    <td className="p-4 align-middle font-medium">
                      {item.date}
                    </td>
                    <td className="p-4 align-middle">{item.value}</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="text-primary-1 flex cursor-pointer items-center gap-2 p-4 align-middle font-semibold hover:underline">
                      <FileText className="h-4 w-4" /> PDF
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
