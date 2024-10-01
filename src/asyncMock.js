const pilas= [
    {id:1654, title: "Pila 9V X 1 Duracell", type: "Alcalina", brand:"Duracell", stock:195, price:7600, image:"https://www.lacasadelapila.com.ar/image/cache/data/9vduracell-500x500.jpg"
    },
    {id:7, title: "Pila AAA X 1 Energizer", type: "Alcalinas", brand:"Energizer", stock:113, price:1620, image:"https://www.lacasadelapila.com.ar/image/cache/data/lr03en1-500x500.jpg"
    },
    {id:2, title: "Pila AA X 2 Energizer", type: "Alcalinas", brand:"Energizer", stock:110, price:3300, image: "https://www.lacasadelapila.com.ar/image/cache/data/lr6en2-500x500.jpg"
    },
    {id:2657, title: "Pila AA X2 Safety Energy",type: "Recargables",brand:"Safety Energy", stock:32, price:12070, image: "https://www.lacasadelapila.com.ar/image/cache/data/aasafet-500x500.jpg"
    },
    ];

const baterias= [
    {id:3363, title: "Bat. Cel. SAMSUNG YOUNG", type: "2 3.7V /1300MAH / LITIO-ION", brand:"Samsung", stock:10, price:19200, image: "https://www.lacasadelapila.com.ar/image/cache/data/smg130sl-500x500.jpg"
    },
    {id:3952, title: "Bat. Cel.  IPHONE 5S", type: "Li-Polymer 1500mAh", brand:"Iphone", stock:15, price: 31400, image: "https://www.lacasadelapila.com.ar/image/cache/data/cs-iph510sl-5-500x500.jpg"
    },
    {id: 4701, title: "Bat. Cel.  MOTO G6", type: "3.85V / 4000MAH / LITIO-ION", brand:"Motorola", stock:10, price:12300, image: "https://www.lacasadelapila.com.ar/image/cache/data/mob855fro-500x500.jpg"
    },
    {id: 3392, title: "Bat. Cel. NOKIA 435", type: "3.7V / 1300MAH Li-ion", brand:"LG", stock:6, price: 18300, image: "https://www.lacasadelapila.com.ar/image/cache/data/cs-nk435sl-5-500x500.jpg",
    },
    ];  



const controles= [
    {id:3055, title: "IRF301 CONTROL REMOTO P/ LCD", type: "Tv LCD Smart", brand:" SAMSUNG", stock:10, price:41376, image: "https://www.lacasadelapila.com.ar/image/cache/data/irf301-500x500.jpg", description: 'Control remoto carcasa original Aire Acondicionado. No se programa. Reemplazo directo del original.Con Garantía'
    },
    {id:4313, title: "AC009 REMOTO AIRE", type: "Aire Acondicionado", brand:"Varias", stock:10, price:13032, image: "https://www.lacasadelapila.com.ar/image/cache/data/ac009-500x500.jpg", description: 'Control remoto carcasa original Aire Acondicionado. No se programa. Reemplazo directo del original.Con Garantía'
    },
    {id:4300, title: "RMC100 CONTROL REMOTO", type: "REMOTO ALARMA Y PORTONES", brand:"REMOCOM", stock:10, price:24645 ,image: "https://www.lacasadelapila.com.ar/image/cache/data/rmc100-500x500.jpg", description: 'CONTROL REMOTO PARA ALARMA Y PORTONES SE COPIA EL CÓDIGO DEL REMOTO VIEJO (ANDAND) Y SE PROGRAMAN, HASTA 3 CODIGOS POR REMOTO'
    },
    {id:4350, title: "GA20 CONTROL REMOTO", type: "REMOTO ALARMA Y PORTONES", brand:"REMOCON", stock:10, price:36326 ,image: "https://www.lacasadelapila.com.ar/image/cache/data/ga20-500x500.jpg", description: 'CONTROL REMOTO PARA ALARMA Y PORTONES SE COPIA EL CÓDIGO DEL REMOTO VIEJO (ANDAND) Y SE PROGRAMAN, HASTA 3 CODIGOS POR REMOTO ESTE MODELO COPIA ROLLING CODE'
    },
    ];  

export const getPilas = new Promise ((resolve)=>{
    setTimeout(() => {
        resolve(pilas)
    }, 2000);
});

export const getBaterias = new Promise ((resolve)=>{
    setTimeout(() => {
        resolve(baterias)
    }, 2000);
});

export const getControles = new Promise ((resolve)=>{
    setTimeout(() => {
        resolve(controles)
    }, 2000);
});




export const getPila = (id)=> 
{
    return pilas.find((prod)=>prod.id == id)
};
export const getBateria = (id)=> 
{
    return baterias.find((prod)=>prod.id == id)
};
export const getControl = (id)=> 
{
    return controles.find((prod)=>prod.id == id)
};