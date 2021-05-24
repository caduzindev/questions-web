import { Button, CircularProgress, Grid, Typography } from "@material-ui/core"
import { useQuiz } from "../../hooks/useQuiz"
import Question from "../components/Question"
import { ToastContainer,toast } from 'react-toastify'
import { useHistory } from "react-router"
import QuizFactory from "../../Factory/QuizFactory"
import { useEffect, useState } from "react"

const Quiz = ()=>{
    const [loaded,setLoaded] = useState(false)
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

    useEffect(()=>{
        if(!!state.questions.length){
            setLoaded(true)
        }else{
            setLoaded(false)
        }
    },[state.questions.length])

    return (
        <Grid container direction="column" alignItems="center" spacing={5}>
            <Typography variant="h4" style={{marginTop:20,fontWeight:'bold',textTransform:"uppercase"}}>Questionario</Typography>
            {loaded && (
                <>
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
                </>
            )}
            {!loaded && (
                <CircularProgress/>
            )}
        </Grid>
    )
}

export default Quiz