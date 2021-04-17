import { Authority } from "./Authority";

export class Token {
    
    public usuario_id: number;
    public token: string;
    public tokenType: string;
    public authorities: Authority[];

    public constructor()
    {   
        this.usuario_id = 0;
        this.token = '';
        this.tokenType = '';
        this.authorities = [];
    }

}