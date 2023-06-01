import { PrismaClient } from "@prisma/client";

export default async function handler(
    req,
    res
) {
    const prisma = new PrismaClient();
    console.log(prisma.movie)
    const movieList =  prisma.movie.findMany();


    res.status(200).json({ movieList });

}
