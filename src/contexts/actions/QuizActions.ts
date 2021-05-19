import { QuestionJson } from "../../Entity/Question";
import { SET_QUESTIONS } from "../types/QuizTypes";

export const setQuestions = (quantity:number,questions:QuestionJson[])=>({
    type:SET_QUESTIONS,
    payload:{
        questions,
        quantity
    }
})
 