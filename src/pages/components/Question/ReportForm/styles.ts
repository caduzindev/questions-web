import { FormControlLabel, SvgIcon, Typography } from '@material-ui/core'
import styled from 'styled-components'

interface FormLabelInterface{
    success:boolean,
    chosenIsCorrect:boolean,
    chosenEqual:boolean
}

export const FormLabel = styled(FormControlLabel)<FormLabelInterface>`
    ${props=>{
        if(props.success){
            return "color:green;"
        }
        if(!props.chosenIsCorrect){
            if(props.chosenEqual){
                return "color:red;"
            }
        }
        return "color:white;"
    }}
`
export const SvgError = styled(SvgIcon)`
    &&{
        color:red;
    }
`
export const SvgSuccess = styled(SvgIcon)`
    &&{
        color:green;
    }
`
export const TextHitAndError = styled(Typography)<{colorText:string}>`
    &&{
        color:${props=>props.colorText};
        font-weight:bold;
    }
`