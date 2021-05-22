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
                    throw new Error('Deu erroooo')
                }
                return data
            }
        }catch(error){
            console.error(error)
        }
    }
    public AllQuestionsAnswered(array:QuestionJson[]):boolean{
        const result = this.repository.AllQuestionsAnswered(array)

        if(result){
            return false
        }

        return true
    }
    public getErrorAndHits(questions:QuestionJson[]):{errors:number,hits:number}{
        let errors = 0
        let hits = 0

        questions.forEach(question => {
            if(question.right){
                hits+=1
            }else{
                errors+=1
            }
        });

        return {
            errors,
            hits
        }
    }
    public setTotalScore(hitValue:number,hits:number):void{
        const total = hitValue*hits
        this.repository.setStorage('score',total)
    }
    public getTotalScore():number{
        return this.repository.getStorage('score')
    }
}

export default new QuizService(new QuizRepository())