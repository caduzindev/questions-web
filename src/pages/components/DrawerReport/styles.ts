import { Avatar, List, ListItem, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const ListReport = styled(List)`
    &&{
        width:300px;
        background-color:#3F51B5;
        height:100%;
        overflow-x:hidden;
    }
`

export const TextItemTitle = styled(Typography)`
    &&{
        color:white;
        font-weight:bold;
        font-size:1.5rem;
        padding:15px;
    }
`

export const TextItem = styled(Typography)`
    &&{
        color:white;
        font-size:1.1rem;
    }
`
export const AvatarList = styled(Avatar)`
    &&{
        color:black;
        width:2.5rem;
        height:2.5rem;
        background:white;
    }
`
export const ListItemReport = styled(ListItem)`
    &:hover{
        transform:scale(1.1);
        transition:0.2s transform;
    }
`