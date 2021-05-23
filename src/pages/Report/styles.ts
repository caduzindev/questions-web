import { Box, Button, Typography } from '@material-ui/core'
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

        @media(max-width:340px){
            width:180px;
            height:180px;
        }
        @media(max-width:900px){
            width:230px;
            height:230px;
        }
        @media(max-width:700px){
            width:200x;
            height:200px;
        }
    }
`
export const NumberOfCircle = styled(Typography)`
    &&{
        font-size:7rem;
        font-weight:bold;

        @media(max-width:340px){
            font-size:3.5rem;
        }
        @media(max-width:900px){
            font-size:5rem;
        }
        @media(max-width:700px){
            font-size:4rem;
        }
    }
`
export const TextOfCircle = styled(Typography)`
    &&{
        font-size:2rem;
        font-weight:bold;

        @media(max-width:340px){
            font-size:1.5rem;
        }
        @media(max-width:900px){
            font-size:1.7rem;
        }
        @media(max-width:700px){
            font-size:1.6rem;
        }
    }
`
export const ButtonActionReport = styled(Button)<{colorButton?:string}>`
    &&{
        background-color:${({colorButton})=>colorButton};
        color:white;
        font-weight:bold;

        &:hover{
            background-color:transparent;
            color:${({colorButton})=>colorButton};
        }
    }
`