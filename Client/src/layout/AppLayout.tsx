import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div>
        <AppSidebar />
      </div>
      <div>
        <AppHeader />
      </div>
      <div className="p-20 -ml-14 sm:ml-52">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
