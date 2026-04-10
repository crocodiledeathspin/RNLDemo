import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const LayoutContent = () => {
  return (
    <>
      <AppSidebar />
      <AppHeader />
      <main className="pt-16 sm:ml-64">
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <LayoutContent />
    </>
  );
};

export default AppLayout;
