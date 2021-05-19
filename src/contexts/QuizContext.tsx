import { createContext, useReducer } from "react"
import { QuestionJson } from "../Entity/Question"
import QuizService from "../services/QuizService"
import { setQuestions } from "./actions/QuizActions"
import { SET_QUESTIONS } from "./types/QuizTypes"

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
    state:StateOfContext,
    dispatch:any,
    handleQuiz:(quantity:number)=>void
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
    | { type:string,payload:{questions:QuestionJson[],quantity:number} }

const reduce = (state:StateOfContext=initialState,action:ACTIONTYPE)=>{
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                totalQuestions:action.payload.quantity,
                questions:[...action.payload.questions]
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
    return (
        <QuizContext.Provider value={{
            state,
            dispatch,
            handleQuiz
        }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider