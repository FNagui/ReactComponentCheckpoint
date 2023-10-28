

export default function ProductName({id}){
    
    switch(id){
        case 1: return "Suzuki S-presso";
        case 2: return "Skoda Octavia A8";
        case 3: return "Mercedes C180";
        default: return "No product goes by this ID";
    }
}