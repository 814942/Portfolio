import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import NotFound from "@/components/NotFound";
import Hero from "@/pages/home/Home";
import Skills from "@/pages/skills/Skills";
import About from "@/pages/about/About";
import Works from "@/pages/works/Works";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "skills", element: <Skills/> },
      { path: "about", element: <About /> },
      { path: "works", element: <Works /> },
      // { path: "experiences", element: <Jobs /> },
      // { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouter() {
  return <RouterProvider router={router} />;
}