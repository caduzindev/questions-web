import { AppBar, Button, Toolbar, Typography } from "@material-ui/core"
import { useState } from "react"
import DrawerReport from "../DrawerReport"

const Header = ()=>{
    const [open,setOpen] = useState(false)
    return (
        <>
            <DrawerReport handle={setOpen} open={open}/>
            <AppBar position="static" style={{flexGrow:1}}>
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow:1}}>
                    Questionarios Salvos
                    </Typography>
                    <Button color="inherit" onClick={()=>setOpen(true)}>Ver Todos</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header