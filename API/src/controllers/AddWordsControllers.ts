import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { AddWordsRepository } from '../repositories/AddWordsRepository';

class AddWordsControllers {

    async create(request: Request, response: Response) {
        const addWordsRepository = getCustomRepository(AddWordsRepository);

        const { portugueseWord, englishWord } = request.body;

        if (portugueseWord == null || portugueseWord == undefined || englishWord == null || englishWord == undefined) {
            return console.log("This value is null!")
        }

        const wordsAlreadyExists = await addWordsRepository.findOne({
            portugueseWord,
            englishWord
        })

        if (wordsAlreadyExists) {
            return console.log("word already exists!")
        }

        const NewTranslate = addWordsRepository.create({
            portugueseWord,
            englishWord,
            id_user: "463a6565-454f-4aea-ab94-7c3a760cddbd"
        });
        await addWordsRepository.save(NewTranslate);

        return response.status(201).json({
            message: 'adicionado com sucesso!'
        })
    }

    async show(request: Request, response: Response) {
        const wordList = getCustomRepository(AddWordsRepository);
        const words = wordList.find()

        return response.send({ words })
    }
}

export { AddWordsControllers }