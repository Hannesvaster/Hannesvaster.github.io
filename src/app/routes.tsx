import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "features",
        lazy: async () => ({ Component: (await import("./components/Features")).Features }),
      },
      {
        path: "about",
        lazy: async () => ({ Component: (await import("./components/About")).About }),
      },
      {
        path: "pricing",
        lazy: async () => ({ Component: (await import("./components/Pricing")).Pricing }),
      },
      {
        path: "contact",
        lazy: async () => ({ Component: (await import("./components/Contact")).Contact }),
      },
    ],
  },
]);
