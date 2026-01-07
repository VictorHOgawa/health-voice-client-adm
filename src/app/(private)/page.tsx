"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Clock, FileText, Mic, Users } from "lucide-react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", recordings: 40 },
  { name: "Fev", recordings: 30 },
  { name: "Mar", recordings: 20 },
  { name: "Abr", recordings: 27 },
  { name: "Mai", recordings: 18 },
  { name: "Jun", recordings: 23 },
  { name: "Jul", recordings: 34 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="h2">Dashboard</h1>
          <p className="base1 text-n-5">Visão geral da sua clínica</p>
        </div>
        <div className="dark:bg-n-8 border-n-3 dark:border-n-6 flex items-center gap-2 rounded-lg border bg-white p-1 shadow-sm">
          <div className="relative">
            <input
              type="date"
              className="cursor-pointer bg-transparent py-1.5 pr-2 pl-3 text-sm font-medium outline-none dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="base2 text-n-5 font-medium">
              Total de Gravações
            </CardTitle>
            <Mic className="text-n-5 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="caption1 text-n-5">
              +20.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="base2 text-n-5 font-medium">
              Horas Gravadas
            </CardTitle>
            <Clock className="text-n-5 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">543h</div>
            <p className="caption1 text-n-5">+15% em relação ao mês passado</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="base2 text-n-5 font-medium">
              Novos Contatos
            </CardTitle>
            <Users className="text-n-5 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="caption1 text-n-5">+201 novos nesta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="base2 text-n-5 font-medium">
              Média de Horas/Usuário
            </CardTitle>
            <FileText className="text-n-5 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12h</div>
            <p className="caption1 text-n-5">-4% em relação ao mês passado</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Chart */}
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Volume de Gravações</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="recordings"
                  fill="var(--color-primary-1)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Ranking */}
        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Ranking de Usuários</CardTitle>
            <p className="caption1 text-n-5">
              Usuários com mais gravações neste mês
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[
                {
                  name: "Dr. Silva",
                  email: "silva@clinica.com",
                  amount: "150h",
                },
                {
                  name: "Dra. Maria",
                  email: "maria@clinica.com",
                  amount: "120h",
                },
                { name: "Dr. João", email: "joao@clinica.com", amount: "90h" },
                { name: "Dra. Ana", email: "ana@clinica.com", amount: "85h" },
                {
                  name: "Dr. Pedro",
                  email: "pedro@clinica.com",
                  amount: "50h",
                },
              ].map((user, i) => (
                <div key={i} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm leading-none font-medium">
                      {user.name}
                    </p>
                    <p className="text-n-5 text-sm">{user.email}</p>
                  </div>
                  <div className="ml-auto font-medium">{user.amount}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Recordings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Últimas Gravações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-n-3 border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0">
                    Paciente/Contato
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0">
                    Médico/Usuário
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0">
                    Data
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0">
                    Duração
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 [&:has([role=checkbox])]:pr-0">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr
                    key={item}
                    className="border-n-3 border-b transition-colors hover:bg-neutral-100/50 data-[state=selected]:bg-neutral-100"
                  >
                    <td className="p-4 align-middle font-medium">
                      Paciente {item}
                    </td>
                    <td className="p-4 align-middle">Dr. Silva</td>
                    <td className="p-4 align-middle">07/01/2026</td>
                    <td className="p-4 align-middle">45 min</td>
                    <td className="text-primary-1 cursor-pointer p-4 align-middle font-semibold">
                      Ver Resumo
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
