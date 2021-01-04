import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//npx ts-node seeder.ts
const newTables = [
  {avalible:true, capacity:5 },
  //{id:2, avalible:true, capacity:5}
];
async function main() {
    /*await prisma.customer.create({
      data: {
        first_name: 'Bike',
        last_name: 'Watzolski',
        email:'generator+berauschendem@gmail.com',
        password: 'pass'
      }
    })*/

    await prisma.table.deleteMany()
    await prisma.restaurant.deleteMany()

    await prisma.restaurant.create({
      data: {
        idRestaurant: 1,
        name: 'Another',
        location: 'Osasco',
        description: 'Um ótimo restaurante',
        tables: { create: [{avalible: true, capacity:5 }] }
      },
    })      
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })