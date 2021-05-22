export class EndAppointment {
    cita_id: number;
    horaInicio: string;
    horaFin: string;

    public constructor()
    {
        this.cita_id = 0;
        this.horaInicio = '';
        this.horaFin = '';
    }
}