import { Response, Request } from 'express'
import { getCustomRepository } from 'typeorm';
import { UserSignUpRepository } from '../repositories/UserSignUpRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class LoginController {
    async execute(request: Request, response: Response) {

        function generateToken(params = {}) {
            return jwt.sign(params, process.env.TOKEN, {
                expiresIn: 86400,
            })
        }

        const userFromDB = getCustomRepository(UserSignUpRepository)
        const { email, password } = request.body;

        const user = await userFromDB.findOne({
            email
        })

        if (!user) {
            return response.status(400).send({
                message: 'user not found'
            })
        }

        if (!await bcrypt.compare(password, user.password)) {
            return response.status(400).send({
                message: 'wrong password!'
            })
        }
        const token = generateToken({ id: user.id })
        return response.send({ token })
    }

    async show(request: Request, response: Response) {

        console.log("chegou")
        return response.json({
            message: "deu certo!"
        })
    }
}


export { LoginController }