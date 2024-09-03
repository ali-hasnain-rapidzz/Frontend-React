import AuthService from "@Services/auth.service";
import IUser from "@Types/user.type";
import { Link } from "react-router-dom";

type Props = {
  currentUser: IUser | undefined;
};

const Navbar: React.FC<Props> = ({ currentUser }) => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-white text-lg font-bold">
          Authentication
        </Link>
        <li className="list-none">
          <Link to="/home" className="text-gray-300 hover:text-white">
            Home
          </Link>
        </li>
      </div>

      <div className="flex space-x-4">
        {currentUser ? (
          <>
            <li className="list-none">
              <Link to="/profile" className="text-gray-300 hover:text-white">
                {currentUser.name}
              </Link>
            </li>
            <li className="list-none">
              <a
                href="/login"
                className="text-gray-300 hover:text-white"
                onClick={() => AuthService.logout()}
              >
                LogOut
              </a>
            </li>
          </>
        ) : (
          <div className="flex space-x-4">
            <li className="list-none">
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
            </li>
            <li className="list-none">
              <Link to="/register" className="text-gray-300 hover:text-white">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
