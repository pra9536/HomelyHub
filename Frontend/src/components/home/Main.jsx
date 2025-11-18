import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import PropertyList from "./PropertyList";
const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <PropertyList /> */}
      <Footer />
    </div>
  );
};

export default Main;
