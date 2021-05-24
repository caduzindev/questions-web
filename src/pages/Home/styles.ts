import { Grid, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Container = styled(Grid)`
    &&{
        display:flex;
        flex-direction:column;
        align-items:center;
        height:100vh;
        justify-content:center;
        background-color:#FAFAFA;
    }
`
export const TextTitle = styled(Typography)`
    &&{
        font-size:2.5rem;
        padding:15px;
        font-weight:bold;
        @media(max-width:450px){
            font-size:1.5rem;
        }
    }
`
export const InputQuantityQuestion = styled(TextField)`
    &&{
        width:360px;

        @media(max-width:450px){
            width:280px;
        }
    }
`