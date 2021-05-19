import { Button } from "@material-ui/core"
import { useLocation,useHistory } from "react-router";
import { useQuiz } from "../../hooks/useQuiz";

interface LocationState{
    qt:string
}

const Start = ()=>{
    const {state} = useLocation<LocationState>()
    const {handleQuiz} = useQuiz()
    const history = useHistory()

    return (
        <>
            <Button onClick={()=>{
                handleQuiz(Number(state.qt))
                history.push('/quiz')
            }}>Start</Button>
            <Button onClick={()=>history.push('/')}>Cancel</Button>
        </>
    )
}

export default Start;