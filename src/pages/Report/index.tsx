import { Card, CardContent, Grid } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useQuiz } from "../../hooks/useQuiz"
import QuizService from "../../services/QuizService"
import ReportQuestionsResolved from "../components/ReportQuestionsResolved"
import { CircleContent, NumberOfCircle, TextOfCircle } from "./styles"

const Report = ()=>{
    const { state } = useQuiz()
    const [totalScore,setTotalScore] = useState(0)

    useEffect(()=>{
        if(!!state.totalHits){
            QuizService.setTotalScore(state.hitValue,state.totalHits)

            setTotalScore(QuizService.getTotalScore())
        }
    },[state.hitValue, state.totalHits])

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <CircleContent typeBorder="solid" sizeBorder="8px" color="green" size={{
                                    width:280,
                                    height:280,
                                }}>
                                    <NumberOfCircle>{state.totalHits}</NumberOfCircle>
                                    <TextOfCircle>Acertos</TextOfCircle>
                                </CircleContent>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <CircleContent typeBorder="solid" sizeBorder="8px" color="red" size={{
                                    width:280,
                                    height:280,
                                }}>
                                    <NumberOfCircle>{state.totalErrors}</NumberOfCircle>
                                    <TextOfCircle>Erros</TextOfCircle>
                                </CircleContent>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <CircleContent typeBorder="solid" sizeBorder="8px" color="orange" size={{
                                    width:280,
                                    height:280, 
                                }}>
                                    <NumberOfCircle>{totalScore}</NumberOfCircle>
                                    <TextOfCircle>Pontuação</TextOfCircle>
                                </CircleContent>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <ReportQuestionsResolved/>
            </Grid>
        </>
    )
}

export default Report