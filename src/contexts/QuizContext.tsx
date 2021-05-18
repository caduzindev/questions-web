import { createContext } from "react"
import { QuestionJson } from "../Entity/Question"

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
}

const QuizContext = createContext({} as QuizContextInterface)

// const QuizProvider = ({children}:QuizInterface)=>{
//     return (
//         <QuizContext.Provider>
//             {children}
//         </QuizContext.Provider>
//     )
// }
// export default QuizProvider