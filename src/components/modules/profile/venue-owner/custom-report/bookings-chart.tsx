import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
import { bookingsData } from "./constant";

const BookingChart = () => {
  return (
    <>
      <div>
        <h3 className="text-sm font-semibold text-ns-title mb-4">Bookings Over Time</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={bookingsData}
              margin={{
                left: 15,
                right: 12,
              }}
            >
              <defs>
                <linearGradient
                  id="bookingsGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />
              <YAxis hide />
              <Area
                type="linear"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#bookingsGradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BookingChart;
