import { services } from "../Components/AvhService/Services/Services"

const useService = (serviceName) => {

    const foundService = services.filter((service)=> service.name === serviceName);

    if(!foundService){
        return [];
    }else{
        return foundService;
    }
}

export default useService;