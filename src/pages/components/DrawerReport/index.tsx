import { Drawer, ListItemAvatar } from "@material-ui/core"
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useEffect, useState } from "react";
import { ReportJson } from "../../../Entity/Report";
import ReportService from "../../../services/ReportService";
import { ListReport, TextItemTitle, TextItem, AvatarList, ListItemReport } from "./styles";

interface DrawerReportProps{
    open:boolean;
    handle:(state:boolean)=>void;
}

const DrawerReport = ({open,handle}:DrawerReportProps)=>{
    const [reports,setReports] = useState<ReportJson[]>()

    useEffect(()=>{
        const data = ReportService.getAllReports()
        setReports(data)
        
    },[])

    return (
        <Drawer anchor="right" open={open} onClose={()=>handle(false)}>
            <ListReport>
                <TextItemTitle>Questionarios Salvos</TextItemTitle>
                {reports?.map(report=>(
                    <ListItemReport button>
                        <ListItemAvatar>
                            <AvatarList>
                                <AssessmentIcon />
                            </AvatarList>
                        </ListItemAvatar>
                        <TextItem>{report.name}</TextItem>
                    </ListItemReport>
                ))}
                {/* <ListItemReport button>
                    <ListItemAvatar>
                        <AvatarList>
                            <AssessmentIcon />
                        </AvatarList>
                    </ListItemAvatar>
                    <TextItem>Relarotio 1</TextItem>
                </ListItemReport> */}
            </ListReport>
        </Drawer>
    )
}

export default DrawerReport