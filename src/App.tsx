import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhoneHomeScreenDark from "./pages/IPhoneHomeScreenDark";
import IPhone1425 from "./pages/IPhone1425";
import IPhone1424 from "./pages/IPhone1424";
import IPhone1433 from "./pages/IPhone1433";
import IPhone1434 from "./pages/IPhone1434";
import IPhone1432 from "./pages/IPhone1432";
import IPhone1423 from "./pages/IPhone1423";
import IPhone1422 from "./pages/IPhone1422";
import IPhone1421 from "./pages/IPhone1421";
import IPhone1420 from "./pages/IPhone1420";
import IPhone1426 from "./pages/IPhone1426";
import IPhone1419 from "./pages/IPhone1419";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-25":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-24":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-33":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-34":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-32":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-23":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-22":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-21":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-20":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-26":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-19":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhoneHomeScreenDark />} />
      <Route path="/iphone-14-25" element={<IPhone1425 />} />
      <Route path="/iphone-14-24" element={<IPhone1424 />} />
      <Route path="/iphone-14-33" element={<IPhone1433 />} />
      <Route path="/iphone-14-34" element={<IPhone1434 />} />
      <Route path="/iphone-14-32" element={<IPhone1432 />} />
      <Route path="/iphone-14-23" element={<IPhone1423 />} />
      <Route path="/iphone-14-22" element={<IPhone1422 />} />
      <Route path="/iphone-14-21" element={<IPhone1421 />} />
      <Route path="/iphone-14-20" element={<IPhone1420 />} />
      <Route path="/iphone-14-26" element={<IPhone1426 />} />
      <Route path="/iphone-14-19" element={<IPhone1419 />} />
    </Routes>
  );
}
export default App;
