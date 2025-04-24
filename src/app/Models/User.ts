export interface IUser {
  id:number,
  email:string, 
  first_name:string,
  last_name:string,
  avatar:string
}

export interface IApiResponseArr {
    data: IUser[];
}

export interface IApiResponse {
  data: IUser;
}