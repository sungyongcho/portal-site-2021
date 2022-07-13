import { useEffect } from "react";
import { withRouter, useLocation, Route, Switch } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default withRouter(ScrollToTop);
