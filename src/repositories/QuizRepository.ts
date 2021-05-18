import { QuestionJson } from '../Entity/Question';
import http from '../utils/axios'

class QuizRepository{
    http;
    constructor(){
        this.http = http
    }
    async getQuestions(quantity:number):Promise<QuestionJson>{
        return await this.http.get(`?amount=${quantity}`)
    }
}

export default QuizRepository