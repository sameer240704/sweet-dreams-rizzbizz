import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  TrendingUp,
  DollarSign,
  Package,
  Award,
  BarChart2,
} from "lucide-react";

interface ChartData {
  name: string;
  value: number;
  fill: string;
}

interface TooltipProps {
  active?: boolean;
  payload?: { name: string; value: number }[];
  label?: string;
}

const platformData: ChartData[] = [
  { name: "Amazon", value: 42, fill: "#3B82F6" },
  { name: "Website", value: 35, fill: "#7C3AED" },
  { name: "Retail", value: 15, fill: "#10B981" },
  { name: "Other", value: 8, fill: "#DFFF00" },
];

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium">
          {payload[0].name}: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const SalesInsights: React.FC = () => {
  return (
    <section
      id="insights"
      className="pb-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-lg mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Sales Insights
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500 rounded-full transform -translate-y-1"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            How Sweet Dreams eye masks are performing
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            {
              title: "Total Sales",
              value: "₹35,00,000+",
              trend: "+24%",
              icon: <DollarSign className="h-4 w-4 text-green-600" />,
              bg: "bg-green-100",
            },
            {
              title: "Units Sold",
              value: "3,842",
              trend: "+18%",
              icon: <Package className="h-4 w-4 text-primary-600" />,
              bg: "bg-primary-100",
            },
            {
              title: "Avg. Rating",
              value: "4.8/5",
              trend: "+0.2",
              icon: <Award className="h-4 w-4 text-yellow-600" />,
              bg: "bg-yellow-100",
            },
            {
              title: "Return Rate",
              value: "2.3%",
              trend: "-0.5%",
              icon: <BarChart2 className="h-4 w-4 text-blue-600" />,
              bg: "bg-blue-100",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-2">
                <div className={`p-2 rounded-full ${item.bg} mr-2`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xl font-bold text-gray-900">{item.value}</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                <p className="text-xs text-green-600">{item.trend}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Sales by Platform
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={platformData}>
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tick={{ fontSize: 12 }}
                  width={60}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
                <Legend
                  verticalAlign="bottom"
                  height={10}
                  formatter={(value, entry) =>
                    entry.payload?.value !== undefined
                      ? `${entry.payload.value}%`
                      : ""
                  }
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesInsights;
