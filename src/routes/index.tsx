import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

import Hero from "@/pages/home/Home";
import Skills from "@/pages/skills/Skills";
import About from "@/pages/about/About";
import Jobs from "@/pages/jobs/Jobs";
import Contacts from "@/pages/contacts/Contacts";
import NotFound from "@/components/NotFound";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Hero /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills/> },
      { path: "experiences", element: <Jobs /> },
      { path: "contact", element: <Contacts /> },
      { path: "*", element: <NotFound /> }
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouter() {
  return <RouterProvider router={router} />;
}