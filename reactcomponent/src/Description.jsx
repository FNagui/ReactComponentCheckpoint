

export default function ProductDesc({id}){
    switch(id){
        case 1: return "1000CC";
        case 2: return "1400CC Turbo";
        case 3: return "1500CC Turbo";
        default: return "No product goes by this ID";
    }
}