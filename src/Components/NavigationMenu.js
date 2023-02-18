export default function NavigationMenu(props) {
  return (
    <li className="p-4 border-b border-gray-200 text-md hover:bg-gray-100 transition-all duration-100">
      {props.label}
    </li>
  );
}
