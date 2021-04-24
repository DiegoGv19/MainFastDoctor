import { Speciality } from "./Speciality";
import { User } from "./User";

export class Doctor {
    public idDoctor: number;
    public dniFoto: string;
    public disponibilidad: string;
    public habilitado: string;
    public centro_labor: string;
    public numero_colegiatura: string;
    public tarifa: string;
    public usuario: User;
    public especialidad: any;

    public constructor()
    {
        this.idDoctor = 0;
        this.dniFoto = '';
        this.disponibilidad = '';
        this.habilitado = '';
        this.centro_labor = '';
        this.numero_colegiatura = '';
        this.tarifa = '';
        this.usuario = new User();
        this.especialidad = '';  
    }
}