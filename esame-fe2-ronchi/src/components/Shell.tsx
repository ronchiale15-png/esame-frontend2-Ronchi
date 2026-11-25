import { Outlet } from "react-router-dom";
import Header from "./Header";

const Shell = () => {
  return (
    <div className="shell">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Shell;