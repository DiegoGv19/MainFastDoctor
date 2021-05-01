import { Appointment } from "./Appointment";
import { Diagnosis } from "./Diagnosis";
import { MedicalPrescription } from "./MedicalPrescription";
import { SymptomArea } from "./SymptomArea";

export class MedicalHistory {
    public cita: Appointment;
    public prescripcionMedica: MedicalPrescription;
    public diagnostico: Array<Diagnosis>;
    public areaSintoma: SymptomArea

    public constructor() {
        this.cita = new Appointment();
        this.prescripcionMedica = new MedicalPrescription();
        this.diagnostico = new Array();
        this.areaSintoma = new SymptomArea();
    }
}