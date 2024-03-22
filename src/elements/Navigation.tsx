import React from "react";
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

function Navigation() {
  return (
    <Navbar>
      <NavbarContent className="pt-10" justify="start">
        <Link href="home">
          <Logo />
          <NavbarContent className="hidden sm:flex gap-3">
            <p className="hidden sm:block font-bold text-gray-700 ">
              <span className="font-chewy font-thin text-4xl">WHIMSICAL</span>
              <br />
              <span className="text-2xl p-8"> Comics</span>
            </p>
          </NavbarContent>
        </Link>
      </NavbarContent>

      <NavbarContent as="div" className="items-center pt-5" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Search..."
          size="sm"
          startContent={<AiOutlineSearch className="h-18" />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

export default Navigation;
