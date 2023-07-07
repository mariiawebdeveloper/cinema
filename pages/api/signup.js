import { hash } from "argon2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { userName, password, email, phone } = req.query;
        const existUser = await prisma.customer.findUnique({ where: { userName: userName.toString() } });
        if (existUser) {
            return res.status(405).json({ existUser });
        }

        const hashedPassword = await hash(password);
        const user = await prisma.customer.create({
            data: {
                userName: userName.toString(),
                password: hashedPassword,
                email: email.toString(),
                phone: phone.toString(),
            },
        });
        return res.status(200).json({ userName, password, email, phone });
    }
    res.status(405).json({ message: "Method  not allowed" });
}
