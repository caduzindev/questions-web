import { Button } from "@material-ui/core"
import { useLocation,useHistory } from "react-router";

interface LocationState{
    qt:string
}

const Start = ()=>{
    const {state} = useLocation<LocationState>()
    const history = useHistory()
    
    return (
        <>
            <Button onClick={()=>history.push('/')}>Start</Button>
            <Button onClick={()=>history.push('/')}>Cancel</Button>
        </>
    )
}

export default Start;