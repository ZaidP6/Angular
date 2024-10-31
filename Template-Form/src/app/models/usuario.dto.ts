export class UsuarioDto{

    constructor(
        public nombre: string,
        public apellidos: string,
        public dni: string,
        public letraNif: string,
        public email: string,
        public telefono: string,
        public sexo: string,
        public conocimiento: string,
        public password: string,
        public confirmPassword:string,
        public aceptarTerminos: boolean ){}

}