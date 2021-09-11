import Menu from "./Menu";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children } : any) => {
  return (
    <>
      <Menu
        initIsVisibleArtists={
          children.type.name === "ArtistNav" ||
          children.type.name === "artistPage"
        }
        initIsVisibleInterviews={children.type.name === "interview"}
      />
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
