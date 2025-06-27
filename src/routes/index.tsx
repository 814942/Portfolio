import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";

import suspense from "@/components/Suspense";

const Hero = lazy(() => import("@/pages/home/Home"));
const Skills = lazy(() => import("@/pages/skills/Skills"));
const About = lazy(() => import("@/pages/about/About"));
const Jobs = lazy(() => import("@/pages/jobs/Jobs"));
const Contacts = lazy(() => import("@/pages/contacts/Contacts"));
const NotFound = lazy(() => import("@/components/NotFound"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: suspense(<Hero />) },
      { path: "about", element: suspense(<About />) },
      { path: "skills", element: suspense(<Skills />) },
      { path: "experiences", element: suspense(<Jobs />) },
      { path: "contact", element: suspense(<Contacts />) },
      { path: "*", element: suspense(<NotFound />) }
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouter() {
  return <RouterProvider router={router} />;
}