import { Backlog } from "./backlog";
import { User } from "./user";

export class Fonctionnalite {
    id:number;
    nom:string;
    description:string;
    dateCreation:string;
    dateDebut:string;
    dateFin:string;
    termine:string;
    backlog:Backlog;
    idCreateur:User;
    etat:string;
    dateMin:Date;
    dateMax:Date;
}
