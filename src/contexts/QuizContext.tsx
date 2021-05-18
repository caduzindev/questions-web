import { createContext, useReducer } from "react"
import { QuestionJson } from "../Entity/Question"

interface QuizInterface{
    children: React.ReactNode
}

interface StateOfContext{
    score: number;
    totalQuestions: number;
    totalHits: number;
    totalErros: number;
    questions?:QuestionJson[]
}

interface QuizContextInterface{
    state:StateOfContext,
    dispatch:any,
}

export const QuizContext = createContext({} as QuizContextInterface)

const initialState = {
    score:5,
    totalQuestions:0,
    totalHits:0,
    totalErros: 0,
}

type ACTIONTYPE = 
    | { type:"SET_QUESTIONS",payload:{questions:QuestionJson[]} }

const reduce = (state:StateOfContext=initialState,action:ACTIONTYPE)=>{
    switch (action.type) {
        case 'SET_QUESTIONS':
            return state
        default:
            return state
    }
}

const QuizProvider = ({children}:QuizInterface)=>{
    const [state,dispatch] = useReducer(reduce,initialState)

    return (
        <QuizContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider