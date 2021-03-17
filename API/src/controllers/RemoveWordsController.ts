import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { AddWordsRepository } from '../repositories/AddWordsRepository'

class RemoveWordsController {

    async delete(request: Request, response: Response) {
        const AllWords = getCustomRepository(AddWordsRepository);

        const { portugueseWord, englishWord } = request.body;
        const id_user = response.locals.userId

        const WordFound = await AllWords.findOne({
            portugueseWord,
            englishWord,
            id_user
        })

        if (!WordFound) {
            return response.status(400).send({ error: "Words not found!" })
        }

        const idToDelete = WordFound.id;

        await AllWords.delete({
            id: idToDelete,
        })

        return response.status(200).send({
            message: "Words had deleted from your personal notebook!"
        })
    }

}

export { RemoveWordsController }