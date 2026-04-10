import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";
import { useHeader } from "../context/HeaderContext";

const AppHeader = () => {
  const { isOpen: userMenuOpen, toggleHeader } = useHeader();
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {userMenuOpen && (
        <div
          className="fixed inset-0 z-40 blur-lg sm:hidden"
          onClick={toggleHeader}
        />
      )}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-1.5 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="top-bar-sidebar"
                data-drawer-toggle="top-bar-sidebar"
                aria-controls="top-bar-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="sm:hidden text-gray-900 bg-transparent box-border border border-transparent hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium leading-5 rounded text-sm p-2 focus:outline-none"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h10"
                  />
                </svg>
              </button>
              <a
                href="https://flowbite.com"
                className="flex ms-2 md:me-24 items-center"
              >
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-5 me-2"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-base font-semibold whitespace-nowrap text-gray-900">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleHeader}
                    className="flex items-center justify-center text-sm bg-gray-800 rounded-full p-1.5 focus:ring-4 focus:ring-gray-300"
                    aria-expanded={userMenuOpen}
                    aria-haspopup="menu"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-7 h-7 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                  <div
                    className={`absolute right-0 mt-2 w-56 z-[60] ${userMenuOpen ? "block" : "hidden"} bg-white divide-y divide-gray-200 rounded shadow-lg`}
                    id="dropdown-user"
                    role="menu"
                    aria-label="User menu"
                  >
                    <div
                      className="px-4 py-3 border-b border-gray-200"
                      role="none"
                    >
                      <p
                        className="text-sm font-medium text-gray-900"
                        role="none"
                      >
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-600 truncate" role="none">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul
                      className="p-2 text-sm text-gray-600 font-medium"
                      role="none"
                    >
                      <li>
                        <Link
                          to="#"
                          className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                          role="menuitem"
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppHeader;
