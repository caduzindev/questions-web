import { Grid } from "@material-ui/core"
import { QuestionJson } from "../../../Entity/Question"
import { Container, TextHead, TextQuestion } from "./styles"
import QuestionFactory from '../../../Factory/QuestionFactory'
import Mutiple from "./Multiple"
import { useQuiz } from "../../../hooks/useQuiz"

const Question = (props:QuestionJson)=>{
    const { handleAnswerQuestion } = useQuiz()
    const Question = QuestionFactory(props)

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const chosen = e.target.value

        Question.setChosen(chosen)
        
        handleAnswerQuestion(Question.id,chosen,false)
    }

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
                {Question.type === 'multiple' && <Mutiple handle={handleChangeInput} questions={Question.getAllQuestions()}/>}
            </Grid>
        </Container>
    )
}

export default Question