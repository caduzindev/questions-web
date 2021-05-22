import { FormControl, Grid, Radio, RadioGroup } from "@material-ui/core"
import { FormLabel, SvgError, SvgSuccess, TextHitAndError } from './styles'
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

interface ReportProps{
    questions:Array<string>;
    chosen:string;
    right:boolean;
    correct:string;
}


const ReportForm = ({questions,right,chosen,correct}:ReportProps)=>{
    return (
        <Grid container>
            <Grid item xs={12}>
                <form>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="quiz" name="quiz">
                            {questions && (
                                questions.map(item=>(
                                    <FormLabel 
                                    control={<Radio color="primary"/>} 
                                    label={item} 
                                    value={item}
                                    success={correct===item} 
                                    chosenIsCorrect={chosen===correct} 
                                    chosenEqual={chosen===item} 
                                    checked={chosen===item?true:false}
                                    />
                                ))
                            )}
                        </RadioGroup>
                    </FormControl>
                </form>
            </Grid>
            {!right && (
                <Grid item xs={12} container alignItems="center" spacing={1}>
                    <Grid item>
                        <SvgError>
                            <ErrorIcon/>
                        </SvgError>
                    </Grid>
                    <Grid item>
                        <TextHitAndError colorText="red">Você Errou</TextHitAndError>
                    </Grid>
                </Grid>
            )}
            {right && (
                <Grid item xs={12} container alignItems="center" spacing={1}>
                    <Grid item>
                        <SvgSuccess>
                            <CheckCircleIcon/>
                        </SvgSuccess>
                    </Grid>
                    <Grid item>
                        <TextHitAndError colorText="green">Você Acertou</TextHitAndError>
                    </Grid>
                </Grid>
            )}
        </Grid>
    )
}

export default ReportForm