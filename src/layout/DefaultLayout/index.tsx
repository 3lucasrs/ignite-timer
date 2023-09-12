import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import Header from "../../components/Header";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default DefaultLayout;
