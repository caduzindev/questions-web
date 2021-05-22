import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@material-ui/core"
import { useQuiz } from "../../../hooks/useQuiz"
import Question from "../Question"

const ReportQuestionsResolved = ()=>{
    const { state } = useQuiz()
    return (
        <Grid container style={{marginTop:20}}>
            <Grid item xs={12}>
                <Box>
                    <Accordion TransitionProps={{unmountOnExit:true}}>
                        <AccordionSummary>
                            <Typography>Lista de Questões</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container justify="center" alignItems="center" spacing={5} direction="column">
                                {state.questions && (
                                    state.questions.map(item=>(
                                        <Grid item>
                                            <Question {...item} typeForm="report"/>
                                        </Grid>
                                    ))
                                )}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ReportQuestionsResolved