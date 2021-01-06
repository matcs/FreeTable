const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    async index(req, res) {
        const restaurants = await prisma.restaurant.findMany({include: {tables: true}});
        return res.json(restaurants);
    },

    async getById(req, res) {
        const restaurantId = Number(req.params['id']);
        const restaurant = await prisma.restaurant.findUnique({
            where: {  idRestaurant: restaurantId },
        });
        
        return res.json(restaurant);
    },

    async getAvalibleTables(req, res) {
        const restaurantId = Number(req.params['id']);
        const restaurant = await prisma.restaurant.findMany({
            where: {  
                idRestaurant: restaurantId,
                tables: {
                    every: {
                        avalible: true
                    }
                }
            },
        });

        return res.json(restaurant);
    },

    async book(req,res)  {
        const restaurantId = Number(req.params['id']);
        const update = await prisma.table.update({
            where: { 
                resutaurantId: restaurantId
            },
            data: { 
                avalible: false
            }
        });

        return res.json(update);
    },
    
}