import { Button } from "@material-ui/core"
import { useLocation,useHistory } from "react-router";

interface LocationState{
    qt:string
}

const Start = ()=>{
    const {state} = useLocation<LocationState>()
    const history = useHistory()
    
    const handleQuiz = ()=>{
        history.push({pathname:"/quiz"})
    }

    return (
        <>
            <Button onClick={handleQuiz}>Start</Button>
            <Button onClick={()=>history.push('/')}>Cancel</Button>
        </>
    )
}

export default Start;