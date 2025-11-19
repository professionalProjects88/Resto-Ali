const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient(
   {datasourceUrl: process.env.DATABASE_URL}
)

async function main() {
  // ... you will write your Prisma Client queries here
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  module.exports =prisma