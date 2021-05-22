import { Box, Typography } from '@material-ui/core'
import styled from 'styled-components'

interface CircleContentComponent{
    color?:string;
    typeBorder:string;
    sizeBorder?:string;
    size:{
        height:string|number,
        width:string|number
    }
}

export const CircleContent = styled(Box)<CircleContentComponent>`
    &&{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        border:
            ${props=>props?.sizeBorder} 
            ${props=>props.typeBorder} 
            ${props=>props.color?props.color:'silver'};

        width:${props=>{
            if(typeof props.size.width==="number"){
                return String(props.size.width)+"px"
            }
            return props.size.width
        }};
        height:${props=>{
            if(typeof props.size.height==="number"){
                return String(props.size.height)+"px"
            }
            return props.size.height
        }};
        border-radius:50%;
    }
`
export const NumberOfCircle = styled(Typography)`
    &&{
        font-size:7rem;
        font-weight:bold;
    }
`
export const TextOfCircle = styled(Typography)`
    &&{
        font-size:2rem;
        font-weight:bold;
    }
`