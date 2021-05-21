import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'
import { QuestionJson } from "../Entity/Question"
import { SuffleResponses } from "../helper/SuffleResponses"
import QuizService from "../services/QuizService"
import { answerQuestion,setErrorsHits,setQuestions } from "./actions/QuizActions"
import { SET_QUESTIONS, ANSWER_QUESTION, SET_ERRORS_HITS } from "./types/QuizTypes"

interface QuizInterface{
    children: React.ReactNode
}

interface StateOfContext{
    hitValue:number;
    totalHits: number;
    totalErrors: number;
    questions:QuestionJson[]
}

interface QuizContextInterface{
    state:StateOfContext
    dispatch:any
    handleQuiz:(quantity:number)=>void
    handleAnswerQuestion:(idQuestion:string,chosen:string,isCorrect:boolean)=>void
    viewResult:()=>boolean
}

export const QuizContext = createContext({} as QuizContextInterface)

const initialState = {
    hitValue:5,
    totalHits:0,
    totalErrors:0,
    questions:[]
}

type ACTIONTYPE = 
    | { type:typeof SET_QUESTIONS,payload:{questions:QuestionJson[]} }
    | { type:typeof ANSWER_QUESTION,payload:{id:string,chosen:string,isCorrect:boolean} }
    | { type:typeof SET_ERRORS_HITS,payload:{errors:number,hits:number} }

const reduce = (state:StateOfContext=initialState,action:ACTIONTYPE)=>{
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
        default:
            return state
    }
}

const QuizProvider = ({children}:QuizInterface)=>{
    const [state,dispatch] = useReducer(reduce,initialState)

    const handleQuiz = async (quantity:number)=>{
        const questions = await QuizService.getQuestions(quantity)
        if (questions){
            dispatch(setQuestions(questions))
        }
    }

    const handleAnswerQuestion = (idQuestion:string,chosen:string,isCorrect:boolean)=>{
        dispatch(answerQuestion(idQuestion,chosen,isCorrect))
    }

    const viewResult = ():boolean=>{
        if(!QuizService.AllQuestionsAnswered(state.questions)){
            return false
        }
        handleViewResultReport()
        return true
    }
    const handleViewResultReport = ()=>{
        const { errors,hits } = QuizService.getErrorAndHits(state.questions)

        dispatch(setErrorsHits(errors,hits))

        QuizService.setTotalScore(state.hitValue,state.totalHits)
    }
    return (
        <QuizContext.Provider value={{
            state,
            dispatch,
            handleQuiz,
            handleAnswerQuestion,
            viewResult
        }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider