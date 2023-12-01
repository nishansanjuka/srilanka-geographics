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