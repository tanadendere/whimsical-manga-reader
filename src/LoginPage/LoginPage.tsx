import { Input, Button } from "@nextui-org/react";
import { GiSpellBook } from "react-icons/gi";
import LoginLogo from "./LoginLogo";
import LoginName from "./LoginName";
import ninjaImage from "../assets/ninja.png";
import React, { createContext } from "react";
import HomePage from "../pages/HomePage";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  name: string;
  surname: string;
  age: number;
};

export const UsernameContext = createContext("");

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    <UsernameContext.Provider value={data.username}>
      <HomePage />
    </UsernameContext.Provider>;
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="my-auto mx-auto flex flex-col gap-4 items-center justify-center"
            >
              <Input
                {...register("username", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                type="username"
                variant={"underlined"}
                label="Username"
              />
              {errors.username && (
                <span className="text-[red]">This field is required</span>
              )}

              <Input
                {...register("name")}
                type="name"
                variant={"underlined"}
                label="Name"
              />
              <Input
                {...register("surname")}
                type="surname"
                variant={"underlined"}
                label="Surname"
              />
              <Input
                {...(register("age"), { min: 18, max: 199 })}
                type="age"
                variant={"underlined"}
                label="Age"
              />
              {errors.age && <span className="text-[red]">Invalid age.</span>}
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
