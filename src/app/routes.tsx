import { createBrowserRouter } from "react-router";
import Stage1Wide from "../imports/Stage1Wide";
import Stage2Complete from "../imports/Stage2Complete";
import Stage3Wide from "../imports/Stage3Wide-1/Stage3WideInteractive";
import Stage4Complete from "../imports/Stage4Complete";

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
  {
    path: "/stage4",
    Component: Stage4Complete,
  },
], {
  // Make routing work when hosted under /Cookingshow/ (GitHub Pages)
  basename: import.meta.env.BASE_URL,
});
