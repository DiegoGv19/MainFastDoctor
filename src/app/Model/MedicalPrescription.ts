import { Medicamento } from "./Medicamento";

export class MedicalPrescription {
    public idPrescripcionMedica: number;
    public codigoPrescripcion: string;
    public fechaFin: string;
    public frecuencia: string;
    public medicamento: Medicamento;
    public cantidad: number;
    public fechaInicio: string;
    public medicamento_id: number;
    public descripcion: string;
    public cita_id: number;

    public constructor() {
        this.idPrescripcionMedica = 0;
        this.codigoPrescripcion = '';
        this.fechaInicio = '';
        this.fechaFin = '';
        this.cantidad = 0;
        this.frecuencia = '';
        this.medicamento = new Medicamento();
        this.medicamento_id = 0;
        this.descripcion = '';
        this.cita_id = 0;
    }
}