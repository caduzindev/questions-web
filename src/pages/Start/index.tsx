import { Grid } from "@material-ui/core"
import { useLocation,useHistory } from "react-router";
import { useQuiz } from "../../hooks/useQuiz";
import { ButtonAction, TextButtonAction } from "./styles";

interface LocationState{
    qt:string
}

const Start = ()=>{
    const {state} = useLocation<LocationState>()
    const {handleQuiz} = useQuiz()
    const history = useHistory()

    return (
        <Grid container justify="center" alignItems="center" style={{height:'100vh'}} spacing={1}>
            <Grid item xs={5} sm={5}>
                <ButtonAction size="large" variant="contained" colorButton="green" onClick={()=>{
                    handleQuiz(Number(state.qt))
                    history.push('/quiz')
                }}>
                    <TextButtonAction>Start</TextButtonAction>
                </ButtonAction>
            </Grid>
            <Grid item xs={5} sm={5}>
                <ButtonAction variant="contained" size="large" colorButton="red" onClick={()=>history.push('/')}>
                    <TextButtonAction>Cancel</TextButtonAction>
                </ButtonAction>
            </Grid>
        </Grid>
    )
}

export default Start;