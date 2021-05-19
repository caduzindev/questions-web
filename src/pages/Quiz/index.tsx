import { useEffect } from "react"
import { useQuiz } from "../../hooks/useQuiz"
import MultipleQuestion from "../components/MultipleQuestion"

const Quiz = ()=>{
    const { state } = useQuiz()
   
    useEffect(()=>{
        if(!!state.questions){
            console.log(state.questions)
        }
    },[state])

    return (
        <>
            {state.questions && (
                state.questions.map(item=>(
                    <MultipleQuestion {...item}/>
                ))
            )}
        </>
        // <h1>asdjhsadas</h1>
    )
}

export default Quiz