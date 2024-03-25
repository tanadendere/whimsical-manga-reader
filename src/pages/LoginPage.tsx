import Navigation from "../elements/Navigation";
import { Input, Button } from "@nextui-org/react";
import { GiSpellBook } from "react-icons/gi";
// import ninjaImage from "../assets/ninja.jpeg"; for responsive design later

function LoginPage() {
  return (
    <>
      <Navigation isLoggedIn={false} />
      <div className="h-screen flex flex-col">
        <form className="my-auto w-auto mx-auto max-w-[500px] p-6 flex flex-col gap-4 items-center justify-center">
          <Input type="username" variant={"flat"} label="Username" />
          <Input type="name" variant={"flat"} label="Name" />
          <Input type="surname" variant={"flat"} label="Surname" />
          <Input type="age" variant={"flat"} label="Age" />
          <Button
            className="bg-orange-500"
            type="submit"
            endContent={<GiSpellBook />}
          >
            Starting reading
          </Button>
        </form>
        {/* for responsive design later<Image
          alt="Ninja Hero Image"
          src={ninjaImage}
          className="sm:hidden md:hidden lg:hidden"
        /> */}
      </div>
    </>
  );
}

export default LoginPage;
