import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
  const linkClassName = ({ isActive, isPending }) => {
    return isActive ? "active" : isPending ? "pending" : "";
  };

  return (
    <>
      <div>root</div>
      <NavLink to="/" className={linkClassName}>
        Главная
      </NavLink>
      <NavLink to="user/1" className={linkClassName}>
        Пользователь
      </NavLink>
      <NavLink to="me" className={linkClassName}>
        Я
      </NavLink>
      <Outlet />
    </>
  );
};

export default Root;
