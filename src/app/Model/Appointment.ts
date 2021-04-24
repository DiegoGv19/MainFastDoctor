export class Appointment {
    public horaInicio: string;
    public fechaCita: string;
    public areaSintoma_id: number;
    public descripcion: string;
    public doctor_id: number;
    public paciente_usuario_id: number;
    
    public constructor()
    {
        this.horaInicio = '';
        this.fechaCita = '';
        this.areaSintoma_id = 0;
        this.descripcion = '';
        this.doctor_id = 0;
        this.paciente_usuario_id = 0;
    }
}