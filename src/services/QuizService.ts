import { QuestionJson } from "../Entity/Question";
import QuizRepository from '../repositories/QuizRepository'

class QuizService{
    private repository;
    constructor(repository:QuizRepository){
        this.repository = repository
    }
    async getQuestions(quantity:number):Promise<QuestionJson|undefined>{
        if(quantity > 0){
            const data = await this.repository.getQuestions(quantity)
            return data
        }
    }
}

export default new QuizService(new QuizRepository())