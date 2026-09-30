"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  ChartContainer,
 
} from "@/components/ui/chart";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardPage = () => {
  // Data for Bar Chart
  const sessionData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Therapy Sessions",
        data: [120, 150, 180, 200, 250],
        backgroundColor: [
          "blue",
          "yellow",
          "orangered",
          "green",
          "grey",
        ],
        borderColor: "hsl(var(--background))",
        borderWidth: 1,
      },
    ],
  };

  // Data for Pie Chart
  const issueData = {
    labels: ["Anxiety", "Depression", "Relationships", "Stress", "Others"],
    datasets: [
      {
        label: "Client Issues",
        data: [30, 25, 20, 15, 10],
        backgroundColor: ["blue", "yellow", "orangered", "green", "grey"],
        borderColor: "hsl(var(--background))",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
         Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sessions: {
                  label: "Therapy Sessions",
                  color: "hsl(var(--primary))",
                },
              }}
            >
              <Bar
                data={sessionData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      enabled: false,
                      external: ({ chart, tooltip }) => {
                        let tooltipEl =
                         chart.canvas.parentNode && chart.canvas.parentNode.querySelector("div");
                        if (!tooltipEl) {
                          tooltipEl = document.createElement("div");
                          tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
                          tooltipEl.style.borderRadius = "3px";
                          tooltipEl.style.color = "white";
                          tooltipEl.style.opacity = '1';
                          tooltipEl.style.pointerEvents = "none";
                          tooltipEl.style.position = "absolute";
                          tooltipEl.style.transform = "translate(-50%, 0)";
                            tooltipEl.style.transition = "all .1s ease";
                            if(chart.canvas.parentNode)chart.canvas?.parentNode.appendChild(tooltipEl);
                        }

                        if (tooltip.opacity === 0) {
                          tooltipEl.style.opacity = '0';
                          return;
                        }

                        if (tooltip.body) {
                          const bodyLines = tooltip.body.map((b) => b.lines);
                          const tooltipContent = `
                            <div class="p-2">
                              <div class="font-bold">${tooltip.title}</div>
                              ${bodyLines
                                .map((body) => `<div>${body}</div>`)
                                .join("")}
                            </div>
                          `;
                          tooltipEl.innerHTML = tooltipContent;
                        }

                        const position = chart.canvas.getBoundingClientRect();
                        tooltipEl.style.opacity = "1";
                        tooltipEl.style.left =
                          position.left + tooltip.caretX + "px";
                        tooltipEl.style.top =
                          position.top + tooltip.caretY + "px";
                      },
                    },
                  },
                }}
              />
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Client Issues Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                issues: {
                  label: "Client Issues",
                  color: "hsl(var(--primary))",
                },
              }}
            >
              <Pie
                data={issueData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "right" },
                    tooltip: {
                      enabled: false,
                      external: ({ chart, tooltip }) => {
                        let tooltipEl =
                         chart.canvas.parentNode && chart?.canvas?.parentNode.querySelector("div");
                        if (!tooltipEl) {
                          tooltipEl = document.createElement("div");
                          tooltipEl.style.background = "rgba(0, 0, 0, 0.7)";
                          tooltipEl.style.borderRadius = "3px";
                          tooltipEl.style.color = "white";
                          tooltipEl.style.opacity = "1";
                          tooltipEl.style.pointerEvents = "none";
                          tooltipEl.style.position = "absolute";
                          tooltipEl.style.transform = "translate(-50%, 0)";
                            tooltipEl.style.transition = "all .1s ease";
                            if (chart.canvas.parentNode)chart.canvas.parentNode.appendChild(tooltipEl);
                        }

                        if (tooltip.opacity === 0) {
                          tooltipEl.style.opacity ="0";
                          return;
                        }

                        if (tooltip.body) {
                          const bodyLines = tooltip.body.map((b) => b.lines);
                          const tooltipContent = `
                            <div class="p-2">
                              <div class="font-bold">${tooltip.title}</div>
                              ${bodyLines
                                .map((body) => `<div>${body}</div>`)
                                .join("")}
                            </div>
                          `;
                          tooltipEl.innerHTML = tooltipContent;
                        }

                        const position = chart.canvas.getBoundingClientRect();
                        tooltipEl.style.opacity = "1";
                        tooltipEl.style.left =
                          position.left + tooltip.caretX + "px";
                        tooltipEl.style.top =
                          position.top + tooltip.caretY + "px";
                      },
                    },
                  },
                }}
              />
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Total Sessions: 900</li>
            <li>Top Issue: Anxiety</li>
            <li>Client Growth Rate: 25% compared to last month</li>
            <li>New Clients: 45</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
