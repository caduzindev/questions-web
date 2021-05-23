import { Box, Grid } from "@material-ui/core"
import QuizFactory from "../../../Factory/QuizFactory"
import { useQuiz } from "../../../hooks/useQuiz"
import Question from "../Question"

const ReportQuestionsResolved = ()=>{
    const { state } = useQuiz()
    const Quiz = QuizFactory(state)

    return (
        <Grid container style={{marginTop:20}}>
            <Grid item xs={12}>
                <Box>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        {Quiz.questions && (
                            Quiz.questions.map(item=>(
                                <Grid item>
                                    <Question {...item} typeForm="report"/>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ReportQuestionsResolved