import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-slate-100 h-screen">
      <Header />

      <main className="container mx-auto flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
