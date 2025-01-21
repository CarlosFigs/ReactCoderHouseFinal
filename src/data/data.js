//Se ejecuta el fetch de datos para la comunicacion con la api
const products = [
    {
        id: "1",
        name: "Franelas XXX",
        size: ["s", "m", "l", "xl"],
        img: "/img/franela1.jpg",
        price: 400,
        stock: 6,
        category: "franelas",
    },
    {
        id: "2",
        name: "Franelas AAA",
        size: ["s", "m", "l", "xl"],
        img: "/img/franela2.jpg",
        price: 300,
        stock: 5,
        category: "franelas",
    },
    {
        id: "3",
        name: "Pantalones AAA",
        size: ["s", "m", "l", "xl"],
        img: "/img/pantalon1.jpeg",
        price: 500,
        stock: 3,
        category: "pantalones",
    },
    {
        id: "4",
        name: "Pantalones XXX",
        size: ["s", "m", "l", "xl"],
        img: "/img/pantalon2.jpeg",
        price: 550,
        stock: 8,
        category: "pantalones",
    },
    {
        id: "5",
        name: "Chaqueta AAA",
        size: ["s", "m", "l", "xl"],
        img: "/img/chaqueta1.jpeg",
        price: 700,
        stock: 1,
        category: "chaquetas",
    },
    {
        id: "6",
        name: "Chaquetas XXX",
        size: ["s", "m", "l", "xl"],
        img: "/img/chaqueta2.jpeg",
        price: 750,
        stock: 4,
        category: "chaquetas",
    },
    {
        id: "7",
        name: "Zapatos XXX",
        size: ["s", "m", "l", "xl"],
        img: "/img/zapato1.jpeg",
        price: 600,
        stock: 9,
        category: "zapatos",
    },
    {
        id: "8",
        name: "Zapatos AAA",
        size: ["s", "m", "l", "xl"],
        img: "/img/zapato2.jpeg",
        price: 650,
        stock: 2,
        category: "zapatos",
    }
]

// promise para una BD local
const getProducts = () => {
    return new Promise((resolve, reject) => {
        //se esta simulando un retraso
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}
// esto es solo una ejecucion fecth a una api
// const getProducts = () => {
//     return fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .catch((error) => console.log(error)
//         )
// }
export { getProducts }