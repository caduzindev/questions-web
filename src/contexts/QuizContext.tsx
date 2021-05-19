import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'
import { QuestionJson } from "../Entity/Question"
import QuizService from "../services/QuizService"
import { answerQuestion, setQuestions } from "./actions/QuizActions"
import { SET_QUESTIONS, ANSWER_QUESTION } from "./types/QuizTypes"

interface QuizInterface{
    children: React.ReactNode
}

interface StateOfContext{
    score: number;
    totalQuestions: number;
    totalHits: number;
    totalErros: number;
    questions:QuestionJson[]
}

interface QuizContextInterface{
    state:StateOfContext
    dispatch:any
    handleQuiz:(quantity:number)=>void
    handleAnswerQuestion:(idQuestion:string,chosen:string,isCorrect:boolean)=>void
}

export const QuizContext = createContext({} as QuizContextInterface)

const initialState = {
    score:5,
    totalQuestions:0,
    totalHits:0,
    totalErros: 0,
    questions:[]
}

type ACTIONTYPE = 
    | { type:typeof SET_QUESTIONS,payload:{questions:QuestionJson[],quantity:number} }
    | { type:typeof ANSWER_QUESTION,payload:{id:string,chosen:string} }

const reduce = (state:StateOfContext=initialState,action:ACTIONTYPE)=>{
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                totalQuestions:action.payload.quantity,
                questions:[
                    ...action.payload.questions.map(item=>({
                        ...item,
                        id:uuidv4()
                    }))
                ]
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                questions:state.questions.map(item=>{
                    if(item.id === action.payload.id){
                        item.chosen = action.payload.chosen
                    }
                    return item
                })
            }
        default:
            return state
    }
}

const QuizProvider = ({children}:QuizInterface)=>{
    const [state,dispatch] = useReducer(reduce,initialState)

    const handleQuiz = async (quantity:number)=>{
        const questions = await QuizService.getQuestions(quantity)
        if (questions){
            dispatch(setQuestions(quantity,questions))
        }
    }
    const handleAnswerQuestion = (idQuestion:string,chosen:string,isCorrect:boolean)=>{
        dispatch(answerQuestion(idQuestion,chosen))
    } 
    return (
        <QuizContext.Provider value={{
            state,
            dispatch,
            handleQuiz,
            handleAnswerQuestion
        }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider