export class User {
    public idUser: number;
    public nombreUsuario: string;
    public password: string
    public nombre: string
    public apellidoPaterno: string
    public apellidoMaterno: string
    public dni: string
    public correo: string
    public celular: string
    public fechaNacimiento: string
    public distrito: string
    public direccion: string
    public latitud: string;
    public longitud: string;
    public constructor()
    {
        this.idUser = 0;
        this.nombreUsuario = '';
        this.password = '';
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.dni = '';
        this.correo = '';
        this.celular = '';
        this.fechaNacimiento = '';
        this.distrito = '';
        this.direccion = '';
        this.latitud = '';
        this.longitud = '';
    }
}