type Province  ={
    id:number
    name_en:string
    name_si:string
    name_ta:string
    districts:District[]
}


type District  ={
    id:number
    province_id:number
    name_en:string
    name_si:string
    name_ta:string
    city:city[]
}


type city = {
    id:number
    district_id:number
    name_en:string
    name_si:string
    name_ta:string
    sub_name_en:string
    sub_name_si:string
    sub_name_ta:string
    postcode:string
    latitude:any
    longitude:any
}

declare function GetAllProvinces(): Promise<Province[]>;
declare function GetAllDistricts(): Promise<District[]>;
declare function GetAllCities(): Promise<city[]>;
declare function GetProvince(province: string, districts: boolean, city: boolean): Promise<Province>;
declare function GetDistrict(district: string, cities: boolean): Promise<District>;
declare function GetCities(district: string): Promise<city[]>;

export { GetAllCities, GetAllDistricts, GetAllProvinces, GetCities, GetDistrict, GetProvince };
