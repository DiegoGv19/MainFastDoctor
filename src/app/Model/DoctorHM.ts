import { Speciality } from "./Speciality";

export class Doctor {
    public doctor_nombre: string;
    public doctor_apellido_paterno: string;
    public doctor_apellido_materno: string;
    public doctor_especialidad: Speciality;
    public doctor_centroLabor: string;

    public constructor()
    {  
        this.doctor_nombre = '';
        this.doctor_apellido_paterno = '';
        this.doctor_apellido_materno = '';
        this.doctor_especialidad = new Speciality();
        this.doctor_centroLabor = '';
    }
}