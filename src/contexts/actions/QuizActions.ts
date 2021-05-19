import { QuestionJson } from "../../Entity/Question";
import { ANSWER_QUESTION, SET_QUESTIONS } from "../types/QuizTypes";

export const setQuestions = (quantity:number,questions:QuestionJson[])=>{
    return {
        type:SET_QUESTIONS,
        payload:{
            questions,
            quantity
        }
    }
}
export const answerQuestion = (id:string,chosen:string)=>{
    return {
        type:ANSWER_QUESTION,
        payload:{
            id,
            chosen
        }
    }
} 