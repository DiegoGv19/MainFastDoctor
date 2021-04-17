export class User {
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

    public constructor()
    {
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
    }
}