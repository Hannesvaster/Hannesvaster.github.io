import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Pricing } from "./components/Pricing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "features", Component: Features },
      { path: "about", Component: About },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
    ],
  },
]);
