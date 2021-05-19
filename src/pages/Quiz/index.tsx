import { Grid } from "@material-ui/core"
import { useEffect } from "react"
import { useQuiz } from "../../hooks/useQuiz"
import MultipleQuestion from "../components/Question"

const Quiz = ()=>{
    const { state } = useQuiz()
   
    useEffect(()=>{
        if(state.questions){
            console.log(state.questions)
        }
    },[state])

    return (
        <Grid container direction="column" alignItems="center" spacing={5}>
            <h1>Seus Questionario</h1>
            {state.questions && (
                state.questions.map(item=>(
                    <Grid item>
                        <MultipleQuestion {...item}/>
                    </Grid>
                ))
            )}
        </Grid>
    )
}

export default Quiz