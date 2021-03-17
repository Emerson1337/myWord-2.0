import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { AddWordsRepository } from '../repositories/AddWordsRepository';

class AddWordsControllers {

    async create(request: Request, response: Response) {

        const id_user = response.locals.userId
        const addWordsRepository = getCustomRepository(AddWordsRepository);

        const { portugueseWord, englishWord } = request.body;

        if (!portugueseWord ||
            !englishWord ||
            !id_user) {
            return console.log("These value is null!")
        }

        const wordsAlreadyExists = await addWordsRepository.findOne({
            id_user,
            portugueseWord,
            englishWord,
        })

        if (wordsAlreadyExists) {
            return console.log("word already exists!")
        }

        const NewTranslate = addWordsRepository.create({
            portugueseWord,
            englishWord,
            id_user,
        });
        await addWordsRepository.save(NewTranslate);

        console.log("adicionado com sucesso!")
        return response.status(201)
    }
}

export { AddWordsControllers }