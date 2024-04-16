import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Dropdown,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import Logo from "../atoms/Logo";
import { AiOutlineSearch } from "react-icons/ai";
import Name from "../atoms/Name";
import React, { useContext } from "react";
import { UsernameContext } from "../LoginPage/LoginPage";
import {Link, useNavigate} from "react-router-dom";

function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  const username = useContext(UsernameContext);
  const navigate = useNavigate();

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search/${encodeURIComponent((event.target as HTMLInputElement).value)}`)
    }
  }
  return (
    <Navbar className="h-32">
      <NavbarContent className="pt-10" justify="start">
        <Link to={'/'} className="flex items-center justify-center">
          <Logo />
          <NavbarContent className="hidden sm:flex gap-3">
            <Name />
          </NavbarContent>
        </Link>
      </NavbarContent>
      {isLoggedIn && (
        <NavbarContent as="div" className="items-center pt-5" justify="end">
          <Input
              onKeyDown={handleKeyDown}
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-white border-solid border-2",
            }}
            placeholder="Search..."
            size="sm"
            startContent={<AiOutlineSearch className="text-2xl" />}
            type="search"
          />
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform bg-sky-blue flex-shrink-0"
                size="sm"
                showFallback
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{username}</p>
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
    </Navbar>
  );
}

export default Navigation;
