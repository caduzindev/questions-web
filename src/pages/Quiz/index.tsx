import { Button, Grid } from "@material-ui/core"
import { useQuiz } from "../../hooks/useQuiz"
import Question from "../components/Question"
import { ToastContainer,toast } from 'react-toastify'
import { useHistory } from "react-router"
import QuizFactory from "../../Factory/QuizFactory"

const Quiz = ()=>{
    const history = useHistory()
    const { state,viewResult } = useQuiz()
    const Quiz = QuizFactory(state)

    const handleViewResult = ()=>{
        const result = viewResult()
        if(!result){
            toast.error('Por favor respoda todas as questões')
        }else{
            history.push('/report')
        }
    }

    return (
        <Grid container direction="column" alignItems="center" spacing={5}>
            <h1>Seus Questionario</h1>
            {Quiz.questions && (
                Quiz.questions.map(item=>(
                    <Grid item>
                        <Question {...item} typeForm="commom"/>
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