export interface IResource {
    id:number,
    name:string, 
    year:number,
    color:string,
    pantone_value:string
  }
  
export interface IApiResponse {
    data: IResource[];
}