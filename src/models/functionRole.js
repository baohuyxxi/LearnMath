

export const getLeftMenuItems = () => [
  { to: "/", text: "Trang chủ" },
  { to: "/introduce", text: "Giới thiệu" },
];

export const getRightMenuItems = () => [
  { to: "https://www.facebook.com/BiSteam129", text: "Facebook Bi Steam", icon: 'FacebookOutlinedIcon' },
  { to: "/#phone", text: "0123456789", icon: 'LocalPhoneIcon' },
];

const commonDropdownMenuItems = [
  { to: "/introduce", text: "Giới thiệu" },
  { to: "/teaching-staff", text: "Đội ngũ giáo viên" },
  { to: "/courses", text: "Khóa học" },
  { to: "#z", text: "Bài tập về nhà" },
  { to: "#z", text: "Toán vui" },
  { to: "#z", text: "Thi thử" },
  { to: "/exams", text: "Đề thi" },
  { to: "#z", text: "Tài liệu" },
  { to: "/#phone", text: "0123456789", icon: 'LocalPhoneIcon' },
  { to: "/tutorials", text: "Hướng dẫn học", icon: 'IntegrationInstructionsIcon' },
];

const adminDropdownMenuItems = [
  ...commonDropdownMenuItems,
  { to: "/admin", text: "Admin Dashboard" }
];

const teacherDropdownMenuItems = [
  ...commonDropdownMenuItems,
  { to: "/teacher", text: "Teacher Dashboard" }
];

export const getDropdownMenuItems = (role) => {
  switch (role) {
    case 'admin':
      return adminDropdownMenuItems;
    case 'teacher':
      return teacherDropdownMenuItems;
    default:
      return commonDropdownMenuItems;
  }
};

const commonMenuItems = [
  { to: "/tutorials", text: "Hướng dẫn học" },
  { to: "/teaching-staff", text: "Đội ngũ giáo viên" },
  { to: "/courses", text: "Khóa học" },
  { to: "#z", text: "Bài tập về nhà" },
  { to: "#z", text: "Toán vui" },
  { to: "#z", text: "Thi thử" },
  { to: "/exams", text: "Đề thi" },
  { to: "#z", text: "Tài liệu" },
];

const adminMenuItems = [

  { to: "/admin", text: "Admin Dashboard" },
  { to : '/admin/create-class', text: "Tạo lớp học" },
  { to: '/admin/list-classes', text: "Danh sách lớp học" },

];

const teacherMenuItems = [
  ...commonMenuItems,
  { to: "/teacher", text: "Teacher Dashboard" }
];

export const getMenuItems = (role) => {
  switch (role) {
    case 'ADMIN':
      return adminMenuItems;
    case 'TEACHER':
      return teacherMenuItems;
    default:
      return commonMenuItems;
  }
};

// {role === "ADMIN" && (
//     <>
//       <Route
//         path="/admin/create-class"
//         element={
//           <Suspense fallback={<div></div>}>
//             <CreateClass />
//           </Suspense>
//         }
//       />
//       <Route
//         path="/admin/edit-class/:classId"
//         element={
//           <Suspense fallback={<div></div>}>
//             <EditClass />
//           </Suspense>
//         }
//       />
//       <Route
//         path="/admin/add-book/:classId"
//         element={
//           <Suspense fallback={<div></div>}>
//             <AddBook />
//           </Suspense>
//         }
//       />
//       <Route
//         path="/admin/edit-book/:classId/:bookId"
//         element={
//           <Suspense fallback={<div></div>}>
//             <EditBook />
//           </Suspense>
//         }
//       />
//       <Route
//         path="/admin/list-classes"
//         element={
//           <Suspense fallback={<div></div>}>
//             <ListClasses />
//           </Suspense>
//         }
//       />
//     </>
//   )}