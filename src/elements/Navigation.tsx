import {
  Navbar,
  NavbarContent,
  Link,
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

function Navigation({ isLoggedIn }: { isLoggedIn: boolean }) {
  const username = useContext(UsernameContext);
  return (
    <Navbar className="h-32">
      <NavbarContent className="pt-10" justify="start">
        <Link href="home">
          <Logo />
          <NavbarContent className="hidden sm:flex gap-3">
            <Name />
          </NavbarContent>
        </Link>
      </NavbarContent>
      {isLoggedIn && (
        <NavbarContent as="div" className="items-center pt-5" justify="end">
          <Input
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
                className="transition-transform bg-sky-blue"
                size="sm"
                showFallback
                src="https://images.unsplash.com/broken"
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
