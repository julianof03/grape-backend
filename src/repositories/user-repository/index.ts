import { prisma } from "@/config";
import { Users } from "@prisma/client";
import { Prisma } from "@prisma/client";

async function FindUsers(name: string) {
  return prisma.users.findFirst({
    where: {
      name,
    }
  });
}

async function findByEmail(email: string, select?: Prisma.UsersSelect) {
  const params: Prisma.UsersFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.users.findUnique(params);
}

async function create(data: Prisma.UsersUncheckedCreateInput) {
  return prisma.users.create({
    data,
  });
}

const usersRepository = {
  FindUsers,
  create,
  findByEmail
};

export default usersRepository;
