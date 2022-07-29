export interface Skill{
    id? : number;
    name : string;
    porc: number;
};

export interface Portfolio{
    id? : number;
    titulo: string;
    subtitulo: string;
    text: string;
    imageUrl: string;
    linkUrl:string;
};

export interface Educacion{
    id?: number;
    centro: string;
    titulo: string;
    text: string;
    imageUrl: string;
    linkUrl: string;
}

export interface About {
    id? : number;
    name: string;
    age : number;
    ocupation: string;
    text: string;
    imageUrl: string;
}