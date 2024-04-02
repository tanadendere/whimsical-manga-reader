import { Input, Button } from "@nextui-org/react";
import { GiSpellBook } from "react-icons/gi";
import LoginLogo from "./LoginLogo";
import LoginName from "./LoginName";
import ninjaImage from "../assets/ninja.png";

function LoginPage() {
  return (
    <>
      <div className="relative w-full h-screen flex justify-evenly">
        <div className="hidden md:flex relative m-5 z-0 rounded-lg">
          <img
            alt="Ninja Hero Image"
            src={ninjaImage}
            className="rounded-3xl"
          />
        </div>
        <div className="absolute top-0 bottom-0 right-50 left-20 bg-[white] flex flex-col m-auto p-10 z-10 ">
          <div className="flex justify-center">
            <LoginLogo />
          </div>
          <LoginName />
          <div className="flex flex-col mt-8">
            <form className="my-auto mx-auto flex flex-col gap-4 items-center justify-center">
              <Input type="username" variant={"underlined"} label="Username" />
              <Input type="name" variant={"underlined"} label="Name" />
              <Input type="surname" variant={"underlined"} label="Surname" />
              <Input type="age" variant={"underlined"} label="Age" />
              <Button
                className="bg-blue-green text-[white] m-8"
                type="submit"
                endContent={<GiSpellBook />}
              >
                Starting reading
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
