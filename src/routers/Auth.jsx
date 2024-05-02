// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars

const Test = lazy(() =>
  import("../components/TestComponent/TestComponent").then((module) => ({
    default: module.TestComponent,
  }))
);
const NotFoundPage = React.lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage")
);
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

const Auth = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Auth;
