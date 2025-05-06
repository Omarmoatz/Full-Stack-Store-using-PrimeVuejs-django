import img1 from "./assets/images/img1.jpeg"
import img2 from "./assets/images/img2.jpeg"
import img3 from "./assets/images/img3.jpeg"
import img4 from "./assets/images/img4.jpeg"
import img5 from "./assets/images/img5.jpeg"


export const brands = [
    {"id":1, "name":"brand 1"},
    {"id":2, "name":"brand 2"},
    {"id":3, "name":"brand 3"},
]

export const products = [
    {
        "id":1,
        "name":"product 1",
        "price":"280",
        "brand":brands[0].name,
        "image":img1,
    },
    {
        "id":2,
        "name":"product 2",
        "price":"280",
        "brand":brands[1].name,
        "image":img2,
    },
    {
        "id":3,
        "name":"product 3",
        "price":"280",
        "brand":brands[1].name,
        "image":img3,
    },
    {
        "id":4,
        "name":"product 4",
        "price":"280",
        "brand":brands[2].name,
        "image":img4,
    },
    {
        "id":5,
        "name":"product 5",
        "price":"280",
        "brand":brands[2].name,
        "image":img5,
    },

]

