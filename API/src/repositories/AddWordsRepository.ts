
import { Entity, EntityRepository, Repository } from "typeorm";
import { Words } from "../models/NewWords";

@EntityRepository(Words)
class AddWordsRepository extends Repository<Words>{

}

export { AddWordsRepository };
