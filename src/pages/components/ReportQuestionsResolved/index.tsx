import { Box, Grid } from "@material-ui/core"
import { useParams } from "react-router"
import QuizFactory from "../../../Factory/QuizFactory"
import { useQuiz } from "../../../hooks/useQuiz"
import Question from "../Question"

interface ParamsTypes{
    idReport:string;
}

const ReportQuestionsResolved = ()=>{
    const { idReport } = useParams<ParamsTypes>()
    const { handleReportIsParam } = useQuiz()
    const Quiz = QuizFactory(handleReportIsParam(idReport))

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