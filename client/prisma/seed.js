// To Seed the data...
// npx prisma migrate dev --name init

import { Categories } from './categories';
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Mark',
        email: 'promaxcoq@gmail.com',
        /*posts: {
            create: [
                title: 'Example Title Here',
                content: 'https://markacard.com',
                published: true,
            ]
        }
        */
    }
]



async function main() {
    console.log(`Seeding started...`);
    /*
    for (let u of userData) {
        const user = await prisma.user.create({
            data: u
        });
        console.log(`Created User with id: ${user.id}`);
    }
    */

    for (let category of Categories) {
        console.log('Seeding Categories...')
        await prisma.category.create({
            data: category;
        })
        console.log(`Category created ${category.id}`);
    }

    console.log(`Seeding finished.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })