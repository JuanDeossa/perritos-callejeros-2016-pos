import { LayoutTypeA } from "@/components/layoutTypeA";

export default function ProductLayout({ children }) {
  return (
    <LayoutTypeA id="ProductLayout">
      <div>{children}</div>
    </LayoutTypeA>
  );
}