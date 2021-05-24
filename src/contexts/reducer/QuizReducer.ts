import { SET_QUESTIONS, ANSWER_QUESTION, SET_ERRORS_HITS, CLEAR_STATE } from "../types/QuizTypes"
import { SuffleResponses } from "../../helper/SuffleResponses"
import { QuestionJson } from "../../Entity/Question"
import { QuizJson } from "../../Entity/Quiz"
import { v4 as uuidv4 } from 'uuid'

export const initialState = {
    hitValue:5,
    totalHits:0,
    totalErrors:0,
    questions:[]
}

type ACTIONTYPE = 
    | { type:typeof SET_QUESTIONS,payload:{questions:QuestionJson[]} }
    | { type:typeof ANSWER_QUESTION,payload:{id:string,chosen:string,isCorrect:boolean} }
    | { type:typeof SET_ERRORS_HITS,payload:{errors:number,hits:number} }
    | { type:typeof CLEAR_STATE }

const reduce = (state:QuizJson=initialState,action:ACTIONTYPE)=>{
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                questions:[
                    ...action.payload.questions.map(item=>({
                        ...item,
                        id:uuidv4(),
                        questions:SuffleResponses([item.correct_answer,...item.incorrect_answers])
                    }))
                ]
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                questions:state.questions.map(item=>{
                    if(item.id === action.payload.id){
                        item.chosen = action.payload.chosen
                        item.right = action.payload.isCorrect
                    }
                    return item
                })
            }
        case SET_ERRORS_HITS:
            return {
                ...state,
                totalHits:action.payload.hits,
                totalErrors:action.payload.errors
            }
        case CLEAR_STATE:
            return initialState
        default:
            return state
    }
}

export default reduce