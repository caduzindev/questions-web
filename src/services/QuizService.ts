import { QuestionJson } from "../Entity/Question";
import QuizRepository from '../repositories/QuizRepository'

class QuizService{
    private repository;
    constructor(repository:QuizRepository){
        this.repository = repository
    }
    async getQuestions(quantity:number):Promise<QuestionJson[]|undefined>{
        try{
            if(quantity > 0){
                const data = await this.repository.getQuestions(quantity)
                if(data.length===0){
                    throw new Error('Deu erro')
                }
                return data
            }
        }catch(error){
            console.error(error)
        }
    }
}

export default new QuizService(new QuizRepository())