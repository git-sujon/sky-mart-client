
  export interface IMeta {
    limit:number,
    page:number,
    total:number,
    

}



export interface IResponseErrorType {
    statusCode:string
    message:string
    errorMessages:string
}



  
  export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
  };
  
  export type IGenericErrorMessage = {
    path: string | number;
    message: string;
  };
  

  export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };