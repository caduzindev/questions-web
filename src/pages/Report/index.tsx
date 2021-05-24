import {  Card, CardContent, Grid } from "@material-ui/core"
import { useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router"
import QuizFactory from "../../Factory/QuizFactory"
import { useQuiz } from "../../hooks/useQuiz"
import QuizService from "../../services/QuizService"
import ReportService from "../../services/ReportService"
import DialogSaveReport from "../components/DialogSaveReport"
import ReportQuestionsResolved from "../components/ReportQuestionsResolved"
import { ButtonActionReport, CircleContent, NumberOfCircle, TextOfCircle } from "./styles"

interface ParamsTypes{
    idReport:string;
}

const Report = ()=>{
    const ref = useRef<HTMLDivElement|null>(null)
    const history = useHistory()
    const { state,handleReportIsParam,handleClearState } = useQuiz()
    const { idReport } = useParams<ParamsTypes>()
    
    const Quiz = QuizFactory(handleReportIsParam(idReport))
    const [totalScore,setTotalScore] = useState(0)
    const [open,setOpen] = useState(false)
    const [name,setName] = useState('')


    useEffect(()=>{
        if(!Quiz.questions.length && !idReport){
            history.push('/')
        }

        if(!!state.totalHits && !idReport){
            QuizService.setTotalScore(state.hitValue,state.totalHits)

            setTotalScore(QuizService.getTotalScore())
            return;
        }
        const data = ReportService.getReport(idReport)
        if(!!data){
            setTotalScore(data.score)
        }
    },[Quiz.questions.length, history, idReport, state.hitValue, state.totalHits])

    useEffect(()=>{
        if(ref.current){
            ref.current.scrollIntoView()
        }
    },[])

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={4} ref={ref}>
                    <Card>
                        <CardContent>
                            <Grid container justify="center">
                                <CircleContent typeBorder="solid" sizeBorder="8px" color="green" size={{
                                    width:280,
                                    height:280,
                                }}>
                                    <NumberOfCircle>{Quiz.totalHits}</NumberOfCircle>
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
                                    <NumberOfCircle>{Quiz.totalErrors}</NumberOfCircle>
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
                        {!idReport && (
                            <>
                                <ButtonActionReport colorButton="green"variant="contained" size="large" onClick={()=>setOpen(true)}>Salvar</ButtonActionReport>
                                <DialogSaveReport handle={setOpen} handleName={setName} name={name} open={open}/>
                            </>
                        )}
                    </Grid>
                    <Grid item>
                        <ButtonActionReport colorButton="red" variant="contained" size="large" onClick={()=>{
                            history.push('/')
                            handleClearState()
                        }}>Sair</ButtonActionReport>
                    </Grid>
                </Grid>
                <ReportQuestionsResolved/>
            </Grid>
        </>
    )
}

export default Report