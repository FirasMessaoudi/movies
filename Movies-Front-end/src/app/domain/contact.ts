export class Contact{
    id?:number;
    name:string;
    email:string;
    subject:string;
    message:string;
    response:string;
    dateMessage:Date;
    constructor(name:string,email:string,subject:string,message:string,response:string,dateMessage){
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
        this.response = response;
        this.dateMessage = dateMessage;
    }


}