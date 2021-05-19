import { User } from "./User";

export class Patient {
    public idPaciente: number;
    public usuario: User;

    public constructor()
    {
        this.idPaciente = 0;
        this.usuario = new User();
    }
}