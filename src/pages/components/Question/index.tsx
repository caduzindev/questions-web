import { Grid } from "@material-ui/core"
import { QuestionJson } from "../../../Entity/Question"
import { Container, TextHead, TextQuestion } from "./styles"
import QuestionFactory from '../../../Factory/QuestionFactory'
import CommmomForm from "./CommomForm"
import { useQuiz } from "../../../hooks/useQuiz"
import { useEffect, useState } from "react"
import ReportForm from "./ReportForm"

interface QuestionProps extends QuestionJson{
    typeForm:string;
}

const Question = (props:QuestionProps)=>{
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
                <TextQuestion dangerouslySetInnerHTML={{__html:Question.question}}></TextQuestion>
            </Grid>
            <Grid item>
                {questions &&(
                    <>
                        {props.typeForm==='commom' && (
                            <CommmomForm handle={handleChangeInput} questions={questions}/>
                        )}
                        {props.typeForm==='report' && (
                            <>
                                {Question.right !== undefined && Question.chosen &&(
                                    <ReportForm questions={questions} right={Question.right} chosen={Question.chosen} correct={Question.correct_answer}/>
                                )}
                            </>
                        )}
                    </>
                )}
            </Grid>
        </Container>
    )
}

export default Question