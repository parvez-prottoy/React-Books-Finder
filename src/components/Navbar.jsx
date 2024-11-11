import logo from "../assets/logo.svg";
import NotificationSvg from "./UI/svg/NotificationSvg";
const Navbar = () => {
  return (
    <nav className="py-2">
      <div className="container mx-auto flex items-center justify-between gap-x-6 max-w-7xl">
        {/* Logo  */}
        <a className="flex items-center" href="#">
          <img
            className="max-w-[100px] md:max-w-[80px]"
            src={logo}
            alt="Logo"
          />
          <p className="text-2xl font-bold">
            Books<span className="text-[#1C4336]">.</span>
          </p>
        </a>
        {/* Notification */}
        <NotificationSvg />
      </div>
    </nav>
  );
};

export default Navbar;
