import { Grid } from "@material-ui/core"
import { QuestionJson } from "../../../Entity/Question"
import { Container, TextHead, TextQuestion } from "./styles"
import QuestionFactory from '../../../Factory/QuestionFactory'
import Mutiple from "./Multiple"
import { useQuiz } from "../../../hooks/useQuiz"
import { useEffect, useState } from "react"

const Question = (props:QuestionJson)=>{
    const { handleAnswerQuestion } = useQuiz()
    const Question = QuestionFactory(props)
    const [questions,setQuestions] = useState<Array<string>>()

    const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const chosen = e.target.value

        Question.setChosen(chosen)
        
        handleAnswerQuestion(Question.id,chosen,Question.IsCorrect())
    }

    useEffect(()=>{
        setQuestions(Question.getAllQuestions())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
                {questions &&(
                    <>
                        {Question.type === 'multiple' && <Mutiple handle={handleChangeInput} questions={questions}/>}
                    </>
                )}
            </Grid>
        </Container>
    )
}

export default Question