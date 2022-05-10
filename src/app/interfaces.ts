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
    descipcion: String;
    imagenUrl: String;
    linkUrl: String;
}