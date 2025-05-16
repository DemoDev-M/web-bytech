import style from "./style.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.container}>
      <img
        className={style.mainLogo}
        src="https://bytech.vn/public/upload/z4447072517157_4b465379f65015e5dea6e56a267d6c05.jpg"
        alt=""
      />
      <div className={style.menu}>
        <ul className={style.navList}>
          <li>
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <Link to="/gioi-thieu">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/dich-vu">Dịch vụ</Link>
          </li>
          <li>
            <Link to="/san-pham">Sản phẩm</Link>
          </li>
          <li>
            <Link to="/giai-phap">Giải pháp</Link>
          </li>
          <li>
            <Link to="/doi-tac">Đối tác</Link>
          </li>
          <li>
            <Link to="/tin-tuc">Tin tức</Link>
          </li>
          <li>
            <Link to="/chinh-sach-bao-hanh">Chính sách bảo hành</Link>
          </li>
          <li>
            <Link to="/lien-he">Liên hệ</Link>
          </li>
        </ul>
        <div className={style.imgLogo}>
          <img
            src="https://bytech.vn/public/frontend/image/lang_vi.jpg"
            alt="Vietnamese Language"
          />
          <img
            src="https://bytech.vn/public/frontend/image/lang_en.jpg"
            alt="English Language"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
