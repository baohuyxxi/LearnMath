import "./Banner.scss";
import HomeIcon from "@mui/icons-material/Home";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import pathLabels from "~/models/pathLabels ";
import { useLocation, Link } from "react-router-dom";       

export default function Banner() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="banner">
      <div className="banner__content">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="banner__breadcrumbs"
        >
          <Link to="/">
            <HomeIcon />
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const label = pathLabels[routeTo] || name; // Lấy nhãn từ model dữ liệu
            return isLast ? (
              <span key={name}>{label}</span>
            ) : (
              <Link key={name} to={routeTo}>
                {label}
              </Link>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
}
