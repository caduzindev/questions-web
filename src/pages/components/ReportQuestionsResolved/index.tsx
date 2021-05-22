import { Box, Grid } from "@material-ui/core"
import ReportFactory from "../../../Factory/ReportFactory"
import { useQuiz } from "../../../hooks/useQuiz"
import Question from "../Question"

const ReportQuestionsResolved = ()=>{
    const { state } = useQuiz()
    const Report = ReportFactory(state)

    return (
        <Grid container style={{marginTop:20}}>
            <Grid item xs={12}>
                <Box>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        {Report.questions && (
                            Report.questions.map(item=>(
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