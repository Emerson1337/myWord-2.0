import { Request, Response } from "express"

class WelcomeController {

    async execute(request: Request, response: Response) {

        response.status(200).render('../views/index.html')
    }

}

export { WelcomeController }