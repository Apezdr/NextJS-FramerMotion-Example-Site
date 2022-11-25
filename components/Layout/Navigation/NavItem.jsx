import Link from "next/link";
const NavItem = ({ text, href, active, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className={`block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 ${
        active ? "font-semibold text-white underline decoration-teal-200" : "text-teal-200"
      }`}>
        {text}
    </Link>
  );
};

export default NavItem;