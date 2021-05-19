import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@material-ui/core"
import { QuestionJson } from "../../../Entity/Question"
import { Container, TextHead, TextQuestion } from "./styles"
import QuestionFactory from '../../../Factory/QuestionFactory'

const MultipleQuestion = (props:QuestionJson)=>{
    const Question = QuestionFactory(props)
    return (
        <Container container spacing={2} direction="column">
            <Grid item>
                <TextHead>{Question.difficulty}</TextHead>
            </Grid>
            <Grid item>
                <TextHead>{Question.category}</TextHead>
            </Grid>
            <Grid item>
                <TextQuestion>{Question.question}</TextQuestion>
            </Grid>
            <Grid item>
                <form>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="quiz" name="quiz">
                            {Question.getAllQuestions() && (
                                Question.getAllQuestions().map(item=>(
                                    <FormControlLabel control={<Radio />} label={item} value={item}/>
                                ))
                            )}
                        </RadioGroup>
                    </FormControl>
                </form>
            </Grid>
        </Container>
    )
}

export default MultipleQuestion