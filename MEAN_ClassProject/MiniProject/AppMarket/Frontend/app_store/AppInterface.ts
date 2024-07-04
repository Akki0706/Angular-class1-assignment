import { CommentInterface } from "./commentInterface";
export interface ApplicationInterface{
    id?:number,
    user_id?:string;
    app_name:string;
    description:string;
    release_date:Date;
    version:number;
    genre:string;
    visibility:boolean;
    downloadCount?:number;
    comments?:CommentInterface[];
    averageRating?:number;
    imageurl:string;

}