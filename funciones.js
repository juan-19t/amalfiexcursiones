let listaDeExcursiones = [
    {
        excursion: "Excursion a Capri y Anacapri",
        duración: "10 HORAS",
        idioma: "ESPAÑOL",
        comida: "No incluye comida",
        precio: "90 €",
        categoria: "Paseos en barco"
    },
    {
        excursion: "Excursion a la isla de Capri",
        duración: "9 HORAS",
        idioma: "ESPAÑOL",
        comida: "No incluye comida",
        precio: "€ 75",
        categoria: "Paseos en barco"
    },
    {
        excursion: "Excursion en barco por la Costa Amalfitana",
        duración: "9 HORAS",
        idioma: "ESPAÑOL e INGLES",
        comida: "Si, incluye almuerzo y merienda",
        precio: "€ 120",
        categoria: "Paseos en barco"
    },
    {
        excursion: "Paseo en barco al atardecer",
        duración: "3 HORAS",
        idioma: "ESPAÑOL",
        comida: "Si, incluye merienda",
        precio: "€ 105",
        categoria: "Paseos en barco"
    },
    {
        excursion: "Paseo en barco por la peninsula de Sorrento",
        duración: "4m - 30m",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "No, no incluye comidas",
        precio: "€ 66",
        categoria: "Paseos en barco"
    },
    {
        excursion: "Tour gastronomico por Salerno",
        duración: "4m - 30m",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "Si, incluye desgustaciones",
        precio: "€ 79",
        categoria: "Gastronomía y enoturismo"
    },
    {
        excursion: "Taller de pizzas",
        duración: "3 HORAS",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "No, no incluye comidas",
        precio: "€ 65",
        categoria: "Gastronomía y enoturismo"
    },
    {
        excursion: "Tour de comida callejera por Sorrento",
        duración: "3 HORAS",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "Si, incluye desgustaciones",
        precio: "€ 65",
        categoria: "Gastronomía y enoturismo"
    },
    {
        excursion: "Clase de cocina italiana en Sorrento",
        duración: "3 HORAS",
        idioma: "ESPAÑOL e ITALIANO",
        comida: "Si, incluye un almuerzo",
        precio: "€ 85",
        categoria: "Gastronomía y enoturismo"
    },
    {
        excursion: "Trekking por el Sendero del Príncipe",
        duración: "4 HORAS",
        idioma: "ESPAÑOL e INGLES",
        comida: "No incluye comidas",
        precio: "€ 15",
        categoria: "Acción y naturaleza"
    },
    {
        excursion: "Senderismo por el Vesubio",
        duración: "3 HORAS",
        idioma: "ITALIANO e INGLES",
        comida: "Incluye una merienda",
        precio: "€ 43",
        categoria: "Acción y naturaleza"
    },
    {
        excursion: "Snorkel en Sorrento",
        duración: "3-4 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "Incluye una merienda",
        precio: "€ 73",
        categoria: "Acción y naturaleza"
    },
    {
        excursion: "Senderismo por el monte Faito",
        duración: "5 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "No incluye comidas",
        precio: "€ 26",
        categoria: "Acción y naturaleza"
    },
    {
        excursion: "Senderismo por el monte San Liberatore",
        duración: "3 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "Incluye una merienda",
        precio: "€ 49",
        categoria: "Acción y naturaleza"
    },
    {
        excursion: "Tirolesa en la Costa Amalfitana",
        duración: "30 minutos",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "No incluye comidas",
        precio: "€ 40",
        categoria: "Acción y naturaleza"
    },
    {
        excursion: "Visita guiada por Pompeya",
        duración: "2 HORAS",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "Incluye un almuerzo",
        precio: "€ 55",
        categoria: "Visitas guiadas"
    },
    {
        excursion: "Visita guiada por Salerno",
        duración: "2 HORAS 30 MINUTOS",
        idioma: "ITALIANO",
        comida: "No incluye comidas",
        precio: "€ 49",
        categoria: "Visitas guiadas"
    },
    {
        excursion: "Tour privado por Positano",
        duración: "2 HORAS",
        idioma: "ESPAÑOL",
        comida: "Incluye un almuerzo y una merienda",
        precio: "€ 210 (por grupo)",
        categoria: "Visitas guiadas"
    },
    {
        excursion: "Visita guiada por el castillo de Lettere",
        duración: "1h - 30m",
        idioma: "ITALIANO y ESPAÑOL",
        comida: "No incluye comidas",
        precio: "€ 30",
        categoria: "Visitas guiadas"
    },
    {
        excursion: "Visita guiada por la villa de Oplontis",
        duración: "2 HORAS",
        idioma: "ESPAÑOL",
        comida: "Incluye un almuerzo y una merienda",
        precio: "€ 200 (por grupo)",
        categoria: "Visitas guiadas"
    },
    {
        excursion: "Entrada a la villa romana de Oplontis",
        duración: "-",
        idioma: "ESPAÑOL",
        comida: "-",
        precio: "€ 17",
        categoria: "espectaculos y entradas"
    },
    {
        excursion: "Concierto de ópera en el museo Correale",
        duración: "2 HORAS 30 MIN",
        idioma: "ITALIANO",
        comida: "-",
        precio: "€ 45",
        categoria: "espectaculos y entradas"
    }
]

let paseos = document.getElementById('paseos');
let visitas = document.getElementById('visitas');
let accion = document.getElementById('accion');
let gastronomia = document.getElementById('gastronomia');
let espectaculos = document.getElementById('espectaculos');
let seccionLista = document.getElementById('lista-excursiones');



function render (valor){
    

    
    let result = listaDeExcursiones.filter(excursion=>excursion.categoria== valor)
    seccionLista.innerHTML=``;

    for(let i=0;i<result.length;i++){
        seccionLista.innerHTML+=`<div class="card">
        <div class="img-card"><img src="./imagenes/pexels-ana-eva-4155240.jpg" alt=""></div>
        <div class="info-card">
            <h1>${result[i].excursion}</h1>
            <p>Duración:${result[i].duración} </p>
            <p>Idioma: ${result[i].idioma}</p>
            <p>${result[i].comida}</p>
            <p class="precio">${result[i].precio}</p>
        </div>
    </div>`
    }
}

