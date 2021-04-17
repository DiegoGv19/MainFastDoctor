export class Auth {
    private username: string;
    private password: string;

    public constructor()
    {
        this.username = "";
        this.password = "";
    }

    public setUsername(username: string)
    {
        this.username = username;
    }
    public getUsername(): string
    {
        return this.username;
    }
    public setPassword(password: string)
    {
        this.password = password;
    }
    public getPassword(): string
    {
        return this.password;
    }
}