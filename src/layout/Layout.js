import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Meta from "../components/Meta/Meta";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
