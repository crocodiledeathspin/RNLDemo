import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { SidebarProvider } from "./context/SidebarContext";
import { HeaderProvider } from "./context/HeaderContext";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <HeaderProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </HeaderProvider>
      </SidebarProvider>
    </>
  );
};

export default App;
