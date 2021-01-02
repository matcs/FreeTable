const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async index (request, response){
        const customers = await prisma.customer.findMany();
        return response.json(customers);
    }
}