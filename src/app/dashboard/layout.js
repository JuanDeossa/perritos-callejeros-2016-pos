import { LayoutTypeA } from "@/components/layoutTypeA";

export default function DashboardLayout({ children }) {
  return <LayoutTypeA id="DashboardLayout" className="bg-gray-700 pt-8 max-w-screen-xl mx-auto min-h-screen">{children}</LayoutTypeA>;
}
