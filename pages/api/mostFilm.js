import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const prisma = new PrismaClient();

    try {
        const movieWithMaxScreenings = await prisma.movie.findFirst({
            orderBy: {
                screening: {
                    _count: {
                        movie_id: 'desc'
                    }
                }
            },
            include: {
                screening: true
            }
        });

        res.status(200).json({ result: movieWithMaxScreenings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    } finally {
        await prisma.$disconnect();
    }
}
