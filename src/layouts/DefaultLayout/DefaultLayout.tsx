import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./DefaultLayout.styles";
import { Header } from "../../components/Header/Header";
// import { Snackbar } from "../../components/Snackbar/Snackbar";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      {/* <Snackbar /> */}
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
