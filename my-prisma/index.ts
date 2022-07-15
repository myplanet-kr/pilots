import { prisma, PrismaClient } from "@prisma/client";

(async () => {
  const prisma = new PrismaClient();
  await prisma.user.createMany({
    data: [
      {
        email: "test@naver.com",
        name: "tester",
      },
    ],
  });
})();
