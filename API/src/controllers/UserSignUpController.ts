import { Response, Request } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserSignUpRepository } from '../repositories/UserSignUpRepository'
import bcrypt from 'bcryptjs'
import * as yup from 'yup'
class UserSignUpController {


    async execute(request: Request, response: Response) {

        const schema = yup.object().shape({
            name: yup.string().required("Username should be a value not null!"),
            email: yup.string().email().required(),
        });

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (err) {
            console.log("erro")
            return response.status(400).json({
                error: err,
            });
        }


        const userSignUpRepository = getCustomRepository(UserSignUpRepository);

        const { name, username, email, password } = request.body;

        if (!name || !username || !email || !password) {
            console.log("Invalid inputs!")
            return response.status(400).send({
                error: "Dados inválidos!"
            })
        }

        const UserSignAlreadyExists = await userSignUpRepository.findOne({
            username,
            email,
            password
        })

        if (UserSignAlreadyExists) {
            console.log("Error! The user already signed!")
            return response.status(400).json({
                error: "Error! The user already signed!"
            })
        }


        const newUser = userSignUpRepository.create({
            name,
            username,
            email,
            password
        });

        //GERANDO HASH DE SENHA
        bcrypt.genSalt(10, (error, salt) => {
            bcrypt.hash(newUser.password, salt, async (error, hash) => {
                if (error) {
                    response.redirect("/signup")
                }
                newUser.password = hash
                await userSignUpRepository.save(newUser);
            })
        })

        console.log("User added!")
        return response.status(200).send({
            message: "usuario criado com sucesso!"
        });

    }
}


export { UserSignUpController }