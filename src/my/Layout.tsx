import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import Header from "./components/Header";

function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-start p-4 md:p-8 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/bg-1.webp')",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-8">
        <Header setIsSidebarOpen={handleMenuClick} />

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 flex flex-col gap-5">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
