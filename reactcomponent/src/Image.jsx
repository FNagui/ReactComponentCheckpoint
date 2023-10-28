

export default function ProductImage({id}){
    switch(id){
        case 1: return "/spresso.jpg";
        case 2: return "/skoda.jpg";
        case 3: return "/mercedes C180.jpg";
        default: return "No product goes by this ID";
    }
}