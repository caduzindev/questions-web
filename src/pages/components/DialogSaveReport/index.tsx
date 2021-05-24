import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField,DialogContentText } from "@material-ui/core"
import { useHistory } from "react-router"
import { useQuiz } from "../../../hooks/useQuiz"

interface DialogSaveReportProps{
    open:boolean
    handle:(state:boolean)=>void
    name:string
    handleName:(name:string)=>void
}

const DialogSaveReport = ({open,handle,name,handleName}:DialogSaveReportProps)=>{
    const history = useHistory()
    const {handleSave,handleClearState} = useQuiz()
    return(
        <Dialog open={open} onClose={()=>handle(false)}>
            <DialogTitle>Salvar</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Por Favor Insira um nome para seu Questionario/Relatorio
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Nome/Apelido"
                    type="email"
                    fullWidth
                    onChange={(e)=>handleName(e.target.value)}
                    value={name}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>handle(false)} color="primary">
                    Cancelar
                </Button>
                <Button color="primary" onClick={()=>{
                    handle(false)
                    handleSave(name)
                    history.push('/')
                    handleClearState()
                }}>
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
)}

export default DialogSaveReport