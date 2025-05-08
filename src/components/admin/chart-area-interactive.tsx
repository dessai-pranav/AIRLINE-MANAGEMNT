"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-06-01", domestic: 45, international: 25 },
  { date: "2024-06-02", domestic: 50, international: 30 },
  { date: "2024-06-03", domestic: 65, international: 20 },
  { date: "2024-06-04", domestic: 55, international: 35 },
  { date: "2024-06-05", domestic: 70, international: 40 },
  { date: "2024-06-06", domestic: 60, international: 28 },
  { date: "2024-06-07", domestic: 30, international: 33 },
  { date: "2024-06-07", domestic: 55, international: 23},
  { date: "2024-06-07", domestic: 64, international: 54},
  { date: "2024-06-07", domestic: 54, international: 43},
  { date: "2024-06-07", domestic: 34, international: 32 },
  { date: "2024-06-07", domestic: 84, international: 12 },
  { date: "2024-06-07", domestic: 99, international: 51 },
  { date: "2024-06-07", domestic: 87, international: 76 },
  { date: "2024-06-07", domestic: 95, international: 49},
]

const chartConfig = {
  visitors: {
    label: "Bookings",
  },
  domestic: {
    label: "Domestic",
    color: "var(--primary)",
  },
  international: {
    label: "International",
    color: "var(--secondary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  return (
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Flight Bookings</CardTitle>
          <CardDescription>
          <span className="hidden @[540px]/card:block">
            Domestic vs International - Last 7 Days
          </span>
            <span className="@[540px]/card:hidden">Last 7 Days</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="fillDomestic" x1="0" y1="0" x2="0" y2="1">
                  <stop
                      offset="5%"
                      stopColor="var(--color-domestic)"
                      stopOpacity={1.0}
                  />
                  <stop
                      offset="95%"
                      stopColor="var(--color-domestic)"
                      stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillInternational" x1="0" y1="0" x2="0" y2="1">
                  <stop
                      offset="5%"
                      stopColor="var(--color-international)"
                      stopOpacity={0.8}
                  />
                  <stop
                      offset="95%"
                      stopColor="var(--color-international)"
                      stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
              />
              <ChartTooltip
                  cursor={false}
                  defaultIndex={isMobile ? -1 : 2}
                  content={
                    <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                        indicator="dot"
                    />
                  }
              />
              <Area
                  dataKey="domestic"
                  type="natural"
                  fill="url(#fillDomestic)"
                  stroke="var(--color-domestic)"
                  stackId="a"
              />
              <Area
                  dataKey="international"
                  type="natural"
                  fill="url(#fillInternational)"
                  stroke="var(--color-international)"
                  stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
  )
}
