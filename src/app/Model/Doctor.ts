import { Speciality } from "./Speciality";
import { User } from "./User";

export class Doctor {
    public idDoctor: number;
    public dniFoto: string;
    public disponibilidad: boolean;
    public habilitado: string;
    public centro_labor: string;
    public numero_colegiatura: string;
    public tarifa: string;
    public usuario: User;
    public especialidad: any;
    public doctor_apellido_materno: string;
    public doctor_apellido_paterno: string;
    public doctor_nombre: string;
    public constructor()
    {
        this.idDoctor = 0;
        this.dniFoto = '';
        this.disponibilidad = true;
        this.habilitado = '';
        this.centro_labor = '';
        this.numero_colegiatura = '';
        this.tarifa = '';
        this.usuario = new User();
        this.especialidad = '';  
        this.doctor_nombre = '';
        this.doctor_apellido_materno = '';
        this.doctor_apellido_paterno = '';
    }
}