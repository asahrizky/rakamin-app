import { NavLink } from "react-router-dom";

export default function NavigationMenu(props) {
  const activeStyle = "text-blue-500";

  return (
    <NavLink
      to={props.href}
      preventScrollReset
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={props.onClose}
    >
      <li className="p-4 border-b border-gray-200 text-md hover:bg-gray-100 transition-all duration-100">
        {props.label}
      </li>
    </NavLink>
  );
}
