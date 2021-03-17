import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { AddWordsRepository } from '../repositories/AddWordsRepository'

class ListingWordsController {
    async listing(request: Request, response: Response) {

        const id_user = response.locals.userId
        const wordList = getCustomRepository(AddWordsRepository);
        const words = await wordList.find({
            id_user,
        })

        if (!words) {
            return response.status(404).json({
                message: "você não tem palavras cadastradas!"
            })
        }
        return response.status(200).json({ words })
    }
}

export { ListingWordsController }