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

export interface ITimeItem{
    hallid: string;
    ShowTimeCod: string;
    ShowTimeName: string;
    timein: string;
    colsNo: string;
    rowsNo: string
      
}

export interface ICinema {
    CinemaId?: string;
    CinemaNamA: string;

    CinemaNamE: string;
    IpAdress: string;

    Phone: string;
    SanfQuantity: string;
    StockCod: string;
    UpdateDate: string;
    VisaExpence: string;
    amanWaitingMinutes: string;
    boxBookingDisableFrom: string;
    boxBookingDisableTo: string;
    boxWaitingMinutes: string;
    cafeteriaExpence: string;
    cafeteriaExpenceType: string;
    cafeteriaIsActive: string;
    holdWaitingMinutes: string;
    isBoxBookingEnabled: string;
    location: string;
    visaWaitingMinutes: string
}
export interface IChair{
    ChairId: string;
    RowNo: string;
    ColNo: string;
    ChairColTitle: string;
    ChairRowTitle: string;
    ChairPrice: string;
    ChairStatCod: string;
    selected:boolean;
}
export interface ILogin{
    usermail:string;
    password:string;
    history:any;

}
export interface IRegister{
    UserName:string;
    UserEmail:string;
    UserPhone:string;
    UserPassword:string
}
export interface IUserInfo{
    UserName:string;
    UserEmail:string;
    UserPhone:string;
   
}