import {  Card, CardContent, Grid } from "@material-ui/core"
import { useEffect, useState } from "react"
import ReportFactory from "../../Factory/ReportFactory"
import { useQuiz } from "../../hooks/useQuiz"
import QuizService from "../../services/QuizService"
import DialogSaveReport from "../components/DialogSaveReport"
import ReportQuestionsResolved from "../components/ReportQuestionsResolved"
import { ButtonActionReport, CircleContent, NumberOfCircle, TextOfCircle } from "./styles"

const Report = ()=>{
    const { state } = useQuiz()
    const Report = ReportFactory(state)
    const [totalScore,setTotalScore] = useState(0)
    const [open,setOpen] = useState(false)
    const [name,setName] = useState('')

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
                                    <NumberOfCircle>{Report.totalHits}</NumberOfCircle>
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
                                    <NumberOfCircle>{Report.totalErrors}</NumberOfCircle>
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
                                <CircleContent typeBorder="solid" sizeBorder="8px" color="#303F9F" size={{
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

                <Grid container justify="center" style={{marginBottom:30,marginTop:30}} spacing={1}>
                    <Grid item>
                        <ButtonActionReport colorButton="green"variant="contained" size="large" onClick={()=>setOpen(true)}>Salvar</ButtonActionReport>
                        <DialogSaveReport handle={setOpen} handleName={setName} name={name} open={open}/>
                    </Grid>
                    <Grid item>
                        <ButtonActionReport colorButton="red" variant="contained" size="large">Sair</ButtonActionReport>
                    </Grid>
                </Grid>
                <ReportQuestionsResolved/>
            </Grid>
        </>
    )
}

export default Report