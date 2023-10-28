

export default function ProductPrice({id}){
    switch(id){
        case 1: return "550K";
        case 2: return "2.0M";
        case 3: return "3.4M";
        default: return "No product goes by this ID";
    }
}