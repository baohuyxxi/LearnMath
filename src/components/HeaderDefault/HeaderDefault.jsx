import "./HeaderDefault.scss";
import React, { useState } from "react";
import logo from "~/assets/images/logoMain.jpg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import accountSlice from "~/redux/accountSlice";

export default function HeaderDefault() {
  const dispatch = useDispatch();
  const [anchor, setAnchor] = useState("right");
  const [open, setOpen] = useState(false);
  const account = useSelector((state) => state.account);
  const toggleDrawer = (anchor, open) => (event) => {
    console.log("toggleDrawer");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const handleLogout = () => {
    dispatch(accountSlice.actions.logout());

  }
  return (
    <header className="header-default ">
      <div className="header-default__container slide-menu">
        <div className="slide-menu__left col">
          <div className="slide-menu__left__item">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="slide-menu__left__item"></div>
        </div>
        <div className="slide-menu__right col">
          <Link to="/#phone" className="slide-menu__right__item">
            <LocalPhoneIcon />
            <span>0123456789</span>
          </Link>
          <Link to="/tutorials" className="slide-menu__right__item">
            <IntegrationInstructionsIcon />
            <span>Hướng dẫn học</span>
          </Link>
          {account.info === null ? (
            <>
              <Link to="#z" className="slide-menu__right__item">
                <AppRegistrationIcon />
                <span>Đăng ký</span>
              </Link>
              <Link to="/Login" className="slide-menu__right__item">
                <LoginIcon />
                <span>Đăng nhập</span>
              </Link>
            </>
          ) : (
            <Link  className="slide-menu__right__item" onClick={handleLogout}>
              <LogoutIcon />
              <span>Đăng xuất</span>
            </Link>
          )}
        </div>
        <div className="slide-menu__drawer">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={(e) => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(anchor, false)}>
          <Box>
            <div className="dropdown-list">
              <div className="dropdown-list__logo-name">
                <img src={logo} alt="logo" className="logo" />
                <span className="name"></span>
              </div>
              <Link to="/introduce" className="dropdown-list__item">
                <span>Giới thiệu</span>
              </Link>
              <Link to="/teaching-staff" className="dropdown-list__item">
                <span>Đội ngũ giáo viên</span>
              </Link>
              <Link to="/courses" className="dropdown-list__item">
                <span>Khóa học</span>
              </Link>
              <Link to="#z" className="dropdown-list__item">
                <span>Bài tập về nhà</span>
              </Link>
              <Link to="#z" className="dropdown-list__item">
                <span>Toán vui</span>
              </Link>
              <Link to="#z" className="dropdown-list__item">
                <span>Thi thử</span>
              </Link>
              <Link to="/exams" className="dropdown-list__item">
                <span>Đề thi </span>
              </Link>
              <Link to="#z" className="dropdown-list__item">
                <span>Tài liệu</span>
              </Link>
              <Link to="/#phone" className="dropdown-list__item">
                <LocalPhoneIcon />
                <span>0123456789</span>
              </Link>
              <Link to="/tutorials" className="dropdown-list__item">
                <IntegrationInstructionsIcon />
                <span>Hướng dẫn học </span>
              </Link>
              {account.info === null ? (
                <>
                  <Link to="#z" className="dropdown-list__item">
                    <AppRegistrationIcon />
                    <span>Đăng ký</span>
                  </Link>
                  <Link to="#login" className="dropdown-list__item">
                    <LoginIcon />
                    <span>Đăng nhập</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link className="dropdown-list__item" onClick={handleLogout}>
                    <LogoutIcon />
                    <span>Đăng xuất</span>
                  </Link>
                </>
              )}
            </div>
          </Box>
        </Drawer>
      </div>
    </header>
  );
}
