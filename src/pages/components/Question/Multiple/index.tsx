import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core"

interface MultipleProps{
    handle:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    questions:Array<string>
}

const Mutiple = ({ questions,handle }:MultipleProps)=>{
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
export default Mutiple