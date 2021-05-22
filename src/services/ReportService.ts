import { ReportJson } from "../Entity/Report";
import ReportRepository from "../repositories/ReportRepository";

class ReportService{
    private repository;
    
    constructor(repository:ReportRepository){
        this.repository = repository
    }
    public save(id:string,name:string,score:number,quiz:ReportJson):void{
        if(this.repository.existsStorage('reports')){
            this.repository.createStorage('reports')
        }
        this.repository.setStorage('reports',id,name,score,quiz)
    }
}

export default new ReportService(new ReportRepository())