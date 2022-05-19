export interface Skill{
    id? : Number;
    name : String;
    porc: Number;
};

export interface Portfolio{
    id? : Number;
    titulo: string;
    subtitulo: string;
    text: string;
    imageUrl: string;
    linkUrl:string;
};

export interface Educacion{
    id?: Number;
    centro: String;
    titulo: String;
    text: String;
    imagenUrl: String;
    linkUrl: String;
}

export interface About {
    id? : number;
    name: string;
    age : number;
    ocupation: string;
    text: string;
    imageUrl: string;
}