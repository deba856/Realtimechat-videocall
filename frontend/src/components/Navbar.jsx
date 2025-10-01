import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, ShipWheelIcon, HomeIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const { logoutMutation } = useLogout();
  const currentPath = location.pathname;

  return (
    <nav className="bg-base-200 border-b sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        <div className="hidden lg:flex items-center gap-2.5">
          <Link to="/" className="flex items-center gap-2.5">
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          <Link to="/" className="btn btn-ghost btn-circle">
            <HomeIcon
              className="h-6 w-6 text-base-content opacity-70"/>
          </Link>

          {/* Notifications */}
          <Link to="/notifications" className="btn btn-ghost btn-circle">
            <BellIcon className="h-6 w-6 text-base-content opacity-70" />
          </Link>

          {/* Theme Selector */}
          <ThemeSelector />

          {/* Profile pic */}
          <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={authUser?.profilePic} alt="User Avatar" />
            </div>
          </div>

          {/* Logout */}
          <button className="btn btn-ghost btn-circle" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
