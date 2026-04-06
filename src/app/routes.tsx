import { createBrowserRouter } from "react-router";
import Stage1Wide from "../imports/Stage1Wide";
import Stage2Complete from "../imports/Stage2Complete";
import Stage3Wide from "../imports/Stage3Wide-1/Stage3WideInteractive";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Stage1Wide,
  },
  {
    path: "/stage2",
    Component: Stage2Complete,
  },
  {
    path: "/stage3",
    Component: Stage3Wide,
  },
]);
