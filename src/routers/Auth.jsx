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
const Introduce = lazy(() => import("../pages/Introduce/Introduce"));
const TeachingStaff = lazy(() =>
  import("../pages/TeachingStaff/TeachingStaff")
);
const Exams = lazy(() => import("../pages/Exams/Exams"));
const Courses = lazy(() => import("../pages/Courses/Courses"));
const Login = lazy(() => import("../pages/Login/Login"));
const Tutorials = lazy(() => import("../pages/Tutorials/Tutorials"));
const ProfileTeacher = lazy(() =>
  import("../pages/ProfileTeacher/ProfileTeacher")
);


// Admin
const CreateClass = lazy(() => import("../pages/admin/CreateClass/CreateClass"));
const Auth = () => {
  const role =  JSON.parse(localStorage.getItem("account"))?.role;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div></div>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/introduce"
        element={
          <Suspense fallback={<div></div>}>
            <Introduce />
          </Suspense>
        }
      />
      <Route
        path="/teaching-staff"
        element={
          <Suspense fallback={<div></div>}>
            <TeachingStaff />
          </Suspense>
        }
      />
      <Route
        path="/exams"
        element={
          <Suspense fallback={<div></div>}>
            <Exams />
          </Suspense>
        }
      />
      <Route
        path="/courses"
        element={
          <Suspense fallback={<div></div>}>
            <Courses />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div></div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/tutorials"
        element={
          <Suspense fallback={<div></div>}>
            <Tutorials />
          </Suspense>
        }
      />
      <Route
        path="/teaching-staff/:id"
        element={
          <Suspense fallback={<div></div>}>
            <ProfileTeacher />
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
      {
        role === "ADMIN" && (
          <Route
            path="/admin/create-class"
            element={
              <Suspense fallback={<div></div>}>
                <CreateClass />
              </Suspense>
            }
          />
        )
      }
    </Routes>
  );
};

export default Auth;
