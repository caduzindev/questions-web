import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core"

interface CommomProps{
    handle:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    questions:Array<string>
}

const CommomForm = ({ questions,handle }:CommomProps)=>{
    return (
        <form>
            <FormControl component="fieldset">
                <RadioGroup aria-label="quiz" name="quiz" onChange={handle}>
                    {questions && (
                        questions.map(item=>(
                            <FormControlLabel control={<Radio/>} label={item} value={item}/>
                        ))
                    )}
                </RadioGroup>
            </FormControl>
        </form>
    )
}
export default CommomForm