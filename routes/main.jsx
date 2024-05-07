import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
  QuirkifyLandingPage,
  Navbar,
  WebsiteShowcase,
  EmailMarketingShowcase,
  MobileAppShowcase
} from "features/quirkify";
// import { protectedRoutes } from "./protected";
// import { publicRoutes } from "./public";
import { Home } from "features/misc";

const Showcase = () => {
  return (
    <main>
      <Navbar />
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
};

export const AppRoutes = () => {
  // const auth = useAuth();

  const commonRoutes = [
    { path: "/", element: <Home /> },
    {
      path: "/quirkfy",
      element: <QuirkifyLandingPage />,
    },
    {
      path: "/quirkfy/showcase",
      element: <Showcase />,
      children: [
        {
          path: "website",
          element: <WebsiteShowcase />,
        },
        {
          path: "email-marketing",
          element: <EmailMarketingShowcase />,
        },
        {
          path: "mobile-app",
          element: <MobileAppShowcase/>,
        },
      ],
    },
  ];

  // const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
