import service from "@/request/index";
import {ILoginData} from "@/type/login";


export function login(data: ILoginData) {
    return service({
        url: "/auth/login",
        method: "POST",
        data
    })
}


export function logout(data:string) {
    return service({
        url: "/auth/logout",
        method: "POST",
        data
    })
}

export function fetch_chart() {
    return service({
        url: "https://api.worldbank.org/v2/countries/AU/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json",
        method: 'get',
    })
}