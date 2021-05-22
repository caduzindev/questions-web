import { ReportJson,Report } from '../Entity/Report'

function ReportFactory(props:ReportJson){
    return new Report(props)
}

export default ReportFactory