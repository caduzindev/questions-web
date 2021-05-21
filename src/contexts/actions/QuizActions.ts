import { QuestionJson } from "../../Entity/Question";
import { ANSWER_QUESTION, SET_ERRORS_HITS, SET_QUESTIONS } from "../types/QuizTypes";

export const setQuestions = (questions:QuestionJson[])=>{
    return {
        type:SET_QUESTIONS,
        payload:{
            questions
        }
    }
}
export const answerQuestion = (id:string,chosen:string,isCorrect:boolean)=>{
    return {
        type:ANSWER_QUESTION,
        payload:{
            id,
            chosen,
            isCorrect
        }
    }
}
export const setErrorsHits = (errors:number,hits:number)=>{
    return {
        type:SET_ERRORS_HITS,
        payload:{
            errors,
            hits
        }
    }
}