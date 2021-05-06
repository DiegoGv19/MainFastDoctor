export class Medicamento {
    public idMedicamento: number;
    public codigoMedicamento: string;
    public nombre: string;
    public forma: string;
    public presentación: string;
    public fraccion: string;
    public laboratorio: string;

    public constructor()
    {
        this.idMedicamento = 0;
        this.codigoMedicamento = '';
        this.nombre = '';
        this.forma = '';
        this.presentación = '';
        this.fraccion = '';
        this.laboratorio = '';
    }
}