import { Appointment } from "./Appointment";
import { Diagnosis } from "./Diagnosis";
import { MedicalPrescription } from "./MedicalPrescription";

export class MedicalHistory {
    public cita: Appointment;
    public diagnosticos: Array<Diagnosis>;
    public prescripcionesMedicas: Array<MedicalPrescription>;

    public constructor() {
        this.cita = new Appointment();
        this.diagnosticos = new Array();
        this.prescripcionesMedicas = new Array();
    }
}


