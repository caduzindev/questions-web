import { Button, Grid } from "@material-ui/core"
import { useEffect } from "react"
import { useQuiz } from "../../hooks/useQuiz"
import MultipleQuestion from "../components/Question"
import { ToastContainer,toast } from 'react-toastify'
import { useHistory } from "react-router"

const Quiz = ()=>{
    const history = useHistory()
    const { state,viewResult } = useQuiz()

    const handleViewResult = ()=>{
        const result = viewResult()
        if(!result){
            toast.error('Por favor respoda todas as questões')
        }else{
            history.push('/')
        }
    }

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
            <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                style={{marginBottom:100}}
                onClick={handleViewResult}
            >
                    Ver Resultado
            </Button>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
            />
        </Grid>
    )
}

export default Quiz