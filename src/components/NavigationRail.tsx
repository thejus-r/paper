import Link from "next/link";

export default function NavigationRail() {
  return (
    <nav className="bg-white w-48 border-r drop-shadow-md">
      <ul className="flex flex-col gap-2 p-2">
        <NavElement />
        <NavElement />
        <NavElement />
      </ul>
    </nav>
  );
}

function NavElement() {
  return (
    <li>
      <Link href={"/"}>
        <div className="h-8 active:bg-blue-500 border-2 rounded-md">Text</div>
      </Link>
    </li>
  );
}
