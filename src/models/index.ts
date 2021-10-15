export interface IMovie{
    ShowId?:string;
    ShowNam: string;
    ShowTypCod: string;
    LangCod: string;
    IsCurrent: number;
    ShowUrl: string;
    ShowDesc: string;
    ShowTypNam: string
    
}
export interface IWorker{
    WorkerId ?:string;
    workername :string;
    workerRole:string
}

export interface ITime{
    hallid: string;
    ShowTimeCod: string;
    ShowTimeName: string;
    timein: string;
    startdate: string;
    enddate: string;
    colsNo: string;
    rowsNo: string
      
}
interface AxiosResponse{
    data?:any;
}
export interface ICinema{
    CinemaId: string,
    CinemaNamA: string,
    CinemaNamE: string,
}