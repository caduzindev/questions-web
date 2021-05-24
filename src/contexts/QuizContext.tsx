import QuizReducer,{ initialState } from './reducer/QuizReducer'
import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'
import { QuizJson } from "../Entity/Quiz"
import QuizService from "../services/QuizService"
import ReportService from "../services/ReportService"
import { answerQuestion,clearState,setErrorsHits,setQuestions } from "./actions/QuizActions"

interface QuizInterface{
    children: React.ReactNode
}

interface QuizContextInterface{
    state:QuizJson
    dispatch:any
    handleQuiz:(quantity:number)=>void
    handleAnswerQuestion:(idQuestion:string,chosen:string,isCorrect:boolean)=>void
    viewResult:()=>boolean
    handleSave:(name:string)=>void
    handleReportIsParam:(idReport:string)=>QuizJson
    handleClearState:()=>void
}

export const QuizContext = createContext({} as QuizContextInterface)


const QuizProvider = ({children}:QuizInterface)=>{
    const [state,dispatch] = useReducer(QuizReducer,initialState)

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
        
    }
    const handleSave = (name:string)=>{
        const totalScore = QuizService.getTotalScore()
        ReportService.save(uuidv4(),name,totalScore,state)
    }
    const handleReportIsParam = (idReport:string):QuizJson=>{
        if(idReport){
            const report = ReportService.getReport(idReport)
            if(!report){
                alert('Este Relatorio/Questionario não existe')
                return state
            }
            return report?.quiz
        }
        return state
    }
    const handleClearState = ()=>{
        dispatch(clearState())
    }
    return (
        <QuizContext.Provider value={{
            state,
            dispatch,
            handleQuiz,
            handleAnswerQuestion,
            viewResult,
            handleSave,
            handleReportIsParam,
            handleClearState
        }}>
            {children}
        </QuizContext.Provider>
    )
}
export default QuizProvider