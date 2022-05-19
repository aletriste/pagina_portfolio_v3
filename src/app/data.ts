import { Skill, Portfolio, Educacion } from "./interfaces"

export const SKILLS : Skill[] = [
    {id: 1,
     name: 'HTML5',
     porc: 55,
    },
    {id: 2,
    name: 'CSS',
    porc: 25,
    },
    {
        id: 3,
        name: 'JavaScript',
        porc: 55,
    },
    {
        id: 4,
        name: 'Bootstrap',
        porc: 25,
    }
];

export const PORTFOLIOS : Portfolio[] = [
    {
        id : 1,
        titulo: "Proyecto 1",
        subtitulo: "Este es el proyecto 1",
        text: "Esta es una breve descripcion del proxecto uno",
        imageUrl: "http:imagen",
        linkUrl: "este es el sitio",
    },
    {
        id : 2,
        titulo: "Proyecto 2",
        subtitulo: "Este es el proyecto 2",
        text: "Esta es una breve descripcion del proxecto dos",
        imageUrl: "http:imagen",
        linkUrl: "este es el sitio",
    },
];

export const EDUCACION : Educacion[] = [
    { id: 1,
        centro: "Argentina Programa",
        titulo: "SeProgramar",
        descipcion: "La cuenta de Alejandro Tristezza está verificada. Mumuki certifica que completó el curso de Certificación Argentina Programa Sé Programar",
        imagenUrl: "ttps://ibb.co/XLQKYkL",
        linkUrl: "https://mumuki.io/argentina-programa/certificates/verify/1TqCCiukSFvq250s"

    },
    { id: 2,
        centro: "Freecodecamp",
        titulo: "Responsive Web Desing",
        descipcion: "This certifies that Alejandro Tristezza has successfully completed the freeCodeCamp.org Responsive Web Design Developer Certification, representing approximately 300 hours of coursework.",
        imagenUrl: "https://ibb.co/j5t6xvK",
        linkUrl: "https://www.freecodecamp.org/certification/triste/responsive-web-design"

    },
    { id: 3,
        centro: "Freecodecamp",
        titulo: "JavaScript Algorithms and Data Structures",
        descipcion: "This certifies that Alejandro Tristezza has successfully completed the freeCodeCamp.org JavaScript Algorithms and Data Structures Developer Certification, representing approximately 300 hours of coursework.",
        imagenUrl: "https://ibb.co/FwXLBRh",
        linkUrl: "https://www.freecodecamp.org/certification/triste/javascript-algorithms-and-data-structures"

    },
]