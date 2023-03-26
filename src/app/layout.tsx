import NavigationRail from "@/components/NavigationRail";
import "./globals.css";

export const metadata = {
  title: "Paper",
  description: "Fun Invoicing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex bg-slate-100">
        <NavigationRail />
        <div className="flex-1 relative">{children}</div>
      </body>
    </html>
  );
}
