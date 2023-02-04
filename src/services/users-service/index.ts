import userRepository from "@/repositories/user-repository";
import { Users } from "@prisma/client";
import bcrypt from "bcrypt";

export async function createUser({name, email, password }: CreateUserParams): Promise<Users> {

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
    name
  });
}



export type CreateUserParams = Pick<Users, "email" | "password" | "name">;

const userService = {
  createUser,
};

export * from "./errors";
export default userService;
