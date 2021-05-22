import { QuestionJson } from '../Entity/Question';
import http from '../utils/axios'

class QuizRepository{
    http;
    constructor(){
        this.http = http
    }
    async getQuestions(quantity:number):Promise<QuestionJson[]>{
        return (await this.http.get(`?amount=${quantity}`)).data.results
    }
    public AllQuestionsAnswered(array:QuestionJson[]):QuestionJson|undefined{
        return array.find(item=>!item.chosen)
    }
    public getStorage(key:string):number{
        return Number(localStorage.getItem(key))
    }
    public setStorage(key:string,num:number){
        localStorage.setItem(key,String(num))
    }
}

export default QuizRepository