import { SymptomArea } from "./SymptomArea";
import { Doctor } from "./DoctorHM";

export class Appointment {
    public idCita: number;
    public status: number;
    public horaInicio: string;
    public horaFin: string;
    public codigoCita: string;
    public fechaCita: string;
    public areaSintoma_id: number;
    public descripcion: string;
    public doctor_id: number;
    public paciente_usuario_id: number;
    public areaSintoma: SymptomArea
    public doctor: Doctor;

    public constructor()
    {
        this.idCita = 0;
        this.status = 0;
        this.horaInicio = '';
        this.horaFin = '';
        this.codigoCita = '';
        this.horaInicio = '';
        this.fechaCita = '';
        this.areaSintoma_id = 0;
        this.descripcion = '';
        this.doctor_id = 0;
        this.paciente_usuario_id = 0;
        this.areaSintoma = new SymptomArea();
        this.doctor = new Doctor();
    }
}