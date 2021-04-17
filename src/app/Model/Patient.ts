import { User } from "./User";

export class Patient {
    public usuario: User;

    public constructor()
    {
        this.usuario = new User();
    }
}