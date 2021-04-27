import { Doctor } from "./Doctor";
import { MedicalPrescription } from "./MedicalPrescription";
import { Patient } from "./Patient";
import { SymptomArea } from "./SymptomArea";

export class MedicalHistory {
    public idCita: number;
    public status: number;
    public descripcion: string;
    public horaInicio: string;
    public horaFin: string;
    public codigoCita: string;
    public fechaCita: string;
    public areaSintoma: SymptomArea;
    public doctor: Doctor;
    public paciente: Patient;
    public prescripcionMedica: MedicalPrescription;

    public constructor() {
        this.idCita = 0;
        this.status = 0,
        this.descripcion = '';
        this.horaInicio = '';
        this.horaFin = '';
        this.codigoCita = '';
        this.fechaCita = '';
        this.areaSintoma = new SymptomArea();
        this.doctor = new Doctor();
        this.paciente = new Patient();
        this.prescripcionMedica = new MedicalPrescription();
    }
}