import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import SideBar from "./SideBar";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import AllGames from "./AllGames";

const HomeScreen = () => {
  return (
    <>
      <PageHeader />

      <section className="app-body">
        <SideBar />
        <AllGames></AllGames>
        <Outlet></Outlet>
      </section>

      <PageFooter />
    </>
  );
};

export default HomeScreen;
