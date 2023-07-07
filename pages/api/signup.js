import { hash } from "argon2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {

    if (req.method === "POST") {
        console.log('hui')
        const { userName, password, email, phone } = JSON.parse(req.body);
        console.log(userName, password, email, phone )
        const existUser = await prisma.customer.findUnique({ where: { userName: userName } });
        if (existUser) {
            return res.status(405).json({ existUser });
        }
        const hashedPassword = await hash(password);
        const user = await prisma.customer.create({
            data: {
                userName: userName,
                password: hashedPassword,
                email: email,
                phone: phone,
            },
        });
        return res.status(200).json({ userName, password, email, phone });
    }
}
