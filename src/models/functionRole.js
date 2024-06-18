export const getLeftMenuItems = () => [
  { to: "/", text: "Trang chủ" },
  { to: "/introduce", text: "Giới thiệu" },
];

export const getRightMenuItems = () => [
  {
    to: "https://www.facebook.com/BiSteam129",
    text: "Facebook Bi Steam",
    icon: "FacebookOutlinedIcon",
  },
  { to: "/#phone", text: "0123456789", icon: "LocalPhoneIcon" },
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
  { to: "/#phone", text: "0123456789", icon: "LocalPhoneIcon" },
  {
    to: "/tutorials",
    text: "Hướng dẫn học",
    icon: "IntegrationInstructionsIcon",
  },
];

const adminDropdownMenuItems = [
  ...commonDropdownMenuItems,
  { to: "/admin", text: "Admin Dashboard" },
];

const teacherDropdownMenuItems = [
  ...commonDropdownMenuItems,
  { to: "/teacher", text: "Teacher Dashboard" },
];

export const getDropdownMenuItems = (role) => {
  switch (role) {
    case "admin":
      return adminDropdownMenuItems;
    case "teacher":
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
  { to: "/admin/create-class", text: "Tạo lớp học" },
  { to: "/admin/list-classes", text: "Danh sách lớp học" },
];

const teacherMenuItems = [
  { to: "/teacher", text: "Teacher Dashboard" },
  {
    to: "/create-exam",
    text: "Tạo đề thi",
  },
];

export const getMenuItems = (role) => {
  switch (role) {
    case "ADMIN":
      return adminMenuItems;
    case "TEACHER":
      return teacherMenuItems;
    default:
      return commonMenuItems;
  }
};
