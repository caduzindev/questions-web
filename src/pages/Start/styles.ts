import { Button, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const ButtonAction = styled(Button)<{colorButton:string}>`
    &&{
        background-color:${props=>props.colorButton};
        width:100%;

        &:hover{
            transform:scale(0.9);
        }
    }
`
export const TextButtonAction = styled(Typography)`
    &&{
        color:white;
        font-weight:bold;
    }
`