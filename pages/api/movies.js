import {PrismaClient} from '@prisma/client';

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    await prisma
        .$connect()
        .then(() => prisma.movie.findMany())
        .then(movieList => {
            res.status(200).json({result: movieList});
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({error: "Server error"});

        })
        .finally(prisma.$disconnect)
}