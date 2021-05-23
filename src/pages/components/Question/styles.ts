import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(Grid)`
    &&{
        background-color:#34319e;
        height:450px;
        width:450px;
        padding:15px;

        @media(max-width:450px){
            width:350px;
            height:500px;
        }
        @media(max-width:360px){
            width:300px;
            padding:0;
        }
    }
`
export const TextHead = styled(Typography)`
    &&{
        font-size:1.2rem;
        background-color:white;
        padding:5px;
        font-weight:bold;
        text-align:center;
        border-radius:10px;

        @media(max-width:320px){
            font-size:1rem;
        }
    }
`
export const TextQuestion = styled(Typography)`
    &&{
        font-size:1.1rem;
        font-weight:500;
        text-align:center;
        color:white;

        @media(max-width:320px){
            font-size:0.9rem;
        }
    }
`
