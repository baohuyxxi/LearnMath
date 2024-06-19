import "./HeaderDefault.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import logo from "~/assets/images/logoMain.jpg";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import accountSlice from "~/redux/accountSlice";
import { getLeftMenuItems, getRightMenuItems, getDropdownMenuItems } from '~/models/functionRole'

export default function HeaderDefault() {
  const dispatch = useDispatch();
  const [anchor, setAnchor] = useState("right");
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const account = useSelector((state) => state.account);
  const role = account.info?.role;

  const leftMenuItems = getLeftMenuItems();
  const rightMenuItems = getRightMenuItems();
  const dropdownMenuItems = getDropdownMenuItems(role);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'LocalPhoneIcon':
        return <LocalPhoneIcon />;
      case 'IntegrationInstructionsIcon':
        return <IntegrationInstructionsIcon />;
      case 'FacebookOutlinedIcon':
        return <FacebookOutlinedIcon />;
      default:
        return null;
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const handleLogout = () => {
    dispatch(accountSlice.actions.logout());
    setConfirmOpen(false);
  };

  return (
    <header className="header-default">
      <div className="header-default__container slide-menu">
        <div className="slide-menu__left col">
         
            <img src={logo} alt="logo" className="logo" />
    
          {leftMenuItems.map((item, index) => (
            <Link key={index} to={item.to} className="slide-menu__left__item">
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
        <div className="slide-menu__right col">
          {rightMenuItems.map((item, index) => (
            <Link key={index} to={item.to} className="slide-menu__right__item">
              {getIconComponent(item.icon)}
              <span>{item.text}</span>
            </Link>
          ))}
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
            <Link className="slide-menu__right__item" onClick={() => setConfirmOpen(true)}>
              <LogoutIcon />
              <span>Đăng xuất</span>
            </Link>
          )}
        </div>
        <div className="slide-menu__drawer">
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={(e) => setOpen(true)}>
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
              {dropdownMenuItems.map((item, index) => (
                <Link key={index} to={item.to} className="dropdown-list__item">
                  {item.icon && getIconComponent(item.icon)}
                  <span>{item.text}</span>
                </Link>
              ))}
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
                <Link className="dropdown-list__item" onClick={() => setConfirmOpen(true)}>
                  <LogoutIcon />
                  <span>Đăng xuất</span>
                </Link>
              )}
            </div>
          </Box>
        </Drawer>
      </div>
      {confirmOpen && (
        <ConfirmDialog
          title="Xác nhận đăng xuất"
          message="Bạn có chắc chắn muốn đăng xuất?"
          onConfirm={handleLogout}
          onCancel={() => setConfirmOpen(false)}
        />
      )}
    </header>
  );
}
