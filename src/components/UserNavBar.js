import UserDropdown from "../components/UserDropdown";
import { useEffect, useState } from "react";
import { FaSignInAlt, FaKey, FaUser, FaSignOutAlt, FaCog, FaEnvelope, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";


export default function NavBar() {
  const router = useRouter();
  const { status, data } = useSession();

  const [singedIn, setSignedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (route) => {
    setDrawerOpen(false);
    router.push(route);
  };
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  if (status === "loading") return null;

  if (status != "authenticated") {
    return (
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
            <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" className="md:hidden mr" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </div>
          {drawerOpen ? null : (
            <div className="hidden md:block">
              <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/auth/signin")}>
                Signin
                <FaSignInAlt />
              </button>
              <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4" onClick={() => router.push("/auth/signup")}>
                Signup
                <FaKey />
              </button>

            </div>
          )}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: 250 }}>
              <ListItem button onClick={() => handleMenuItemClick("/")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/about")}>
                <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/auth/signin")}>
                  Signin
                  <FaSignInAlt />
                </button>
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/contact")}>
                <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4" onClick={() => router.push("/auth/signup")}>
                  Signup
                  <FaKey />
                </button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>

    );

  } if (status === "authenticated") {
    return (
      <AppBar position="static" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div onClick={() => router.push("/")} className="flex items-center gap-x-3 cursor-pointer">
            <img src="/favicon_io/eventhive-logo.svg" width={250} height={70} alt="Logo" />
          </div>
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" className="md:hidden mr" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </div>

          {drawerOpen ? null : (
            <div className="hidden md:block flex">
              {drawerOpen ? null : (
                <div className="hidden md:block flex">
                  <span onClick={toggleMenu} className="mr-4 cursor-pointer flex">
                    Hello, {data.user.username}!
                    {menuOpen ? (
                      <FaAngleUp className="ml-1 pt-2" />
                    ) : (
                      <FaAngleDown className="ml-1 pt-2" />
                    )}
                  </span>
                  {menuOpen && (
                    <div className="absolute right-0 top-10 bg-white border rounded-md shadow-lg">
                      <button type="button" className="btn text-gray-700 w-full py-2 px-4 block text-left" onClick={() => router.push("/dashboard")}>
                        Dashboard
                        <FaUser className="ml-1" />
                      </button>
                      <a href="/settings" className="btn text-gray-700 w-full py-2 px-4 block text-left">
                        Settings
                        <FaCog className="ml-1" />
                      </a>
                      <button type="button" className="btn text-gray-700 w-full py-2 px-4 block text-left" onClick={() => signOut()}>
                        Signout
                        <FaSignOutAlt className="ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              )}
              <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/dashboard")}>
                Dashboard
                <FaUser />
              </button>
              <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4" onClick={() => signOut()}>
                Signout
                <FaSignOutAlt />
              </button>

            </div>
          )}
          <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
            <List sx={{ width: 250 }}>
              <ListItem button onClick={() => handleMenuItemClick("/")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/dashboard")}>
                <button type="button" className="btn text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] w-full mb-4 sm:w-auto sm:mb-0" onClick={() => router.push("/dashboard")}>
                  Dashboard
                  <FaUser />
                </button>
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/settings")}>
                <a href="/settings" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4">
                  Settings
                  <FaCog />
                </a>
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/contact")}>
                <a href="/contact" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4">
                  Contact Us
                  <FaEnvelope />
                </a>
              </ListItem>
              <ListItem button onClick={() => signOut()}>
                <button type="button" className="btn text-white bg-[color:var(--gray-color)] hover:bg-[color:var(--light-gray)] w-full sm:w-auto sm:ml-4">
                  Signout
                  <FaSignOutAlt />
                </button>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    );
  }

}
