import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(Grid)`
    &&{
        background-color:#DADADA;
        height:500px;
        width:450px;
        padding:10px;
        
    }
`
export const TextHead = styled(Typography)`
    &&{
        font-size:1.2rem;
        background-color:#A4A6A6;
        padding:5px;
        font-weight:bold;
        text-align:center;
    }
`
export const TextQuestion = styled(Typography)`
    &&{
        font-size:1.1rem;
        font-weight:500;
        text-align:center;
    }
`
