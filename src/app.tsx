import { Navbar } from "./components/Navbar/navbar";
import { Outlet } from "react-router-dom";



export function App() {
  return (

        <div className="h-full min-h-screen w-screen bg-slate-950 bg-cover bg-fixed bg-center bg-no-repeat">
          <Navbar />
          <main className="h-full min-h-screen w-full">
            <Outlet />
          </main>
        </div>

  );
}
