import * as fs from 'fs'
import path from 'path'

const filePath = path.resolve(__dirname, '../data.json');

let Data:Province[] | null= null;



async function getData():Promise<Province[]> {
    return new Promise((resolve , reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            reject(err);
        } else {
            Data = JSON.parse(data);
            resolve(JSON.parse(data));
        }
        });
    })
}


export async function GetAllProvinces():Promise<Province[]> {
    return new Promise(async(resolve , reject) => {
        try {    
            if(!Data) {
                Data = await getData();
            }

            const extractedData = Data.map(obj => ({id:obj.id , name_en:obj.name_en , name_si:obj.name_si  , name_ta:obj.name_ta })) as any;

            resolve(extractedData as Province[]);

        } catch (error) {
            reject(error);
        }
    })
}


export async function GetAllDistricts():Promise<District[]> {
    return new Promise(async(resolve , reject) => {
        try {    
            if(!Data) {
                Data = await getData();
            }

            const extractedData = Data.map(obj => (obj.districts.map(data => ({id:data.id ,province_id:data.province_id ,name_en:data.name_en , name_si:data.name_si , name_ta:data.name_ta}))))as any;

            resolve(extractedData as District[]);

        } catch (error) {
            reject(error);
        }
    })
}

export async function GetAllCities():Promise<city[]> {
    return new Promise(async(resolve , reject) => {
        try {    
            if(!Data) {
                Data = await getData();
            }

            const extractedData = [].concat(...Data.map(obj => (obj.districts)).map(distobj => (distobj.map(obj => (obj.city)))) as any);

            resolve(extractedData as city[]);

        } catch (error) {
            reject(error);
        }
    })
}


export async function GetProvince(province:string, districts:boolean , city:boolean ):Promise<Province> {
    return new Promise(async(resolve , reject) => {
        try {    
            if(!Data) {
                Data = await getData();
            }

            const extractedData = Data.filter( obj => province === obj.name_en).map( obj => districts ? ({id:obj.id , name_en:obj.name_en , name_si:obj.name_si  , name_ta:obj.name_ta ,districts:obj.districts.map(obj => city ? ({id:obj.id ,province_id:obj.province_id ,name_en:obj.name_en , name_si:obj.name_si , name_ta:obj.name_ta , city:obj.city}) :({id:obj.id ,province_id:obj.province_id ,name_en:obj.name_en , name_si:obj.name_si , name_ta:obj.name_ta}))}) : city ? (obj.districts.map(obj => (obj.city))) : ({id:obj.id , name_en:obj.name_en , name_si:obj.name_si  , name_ta:obj.name_ta})) as any;

            resolve(extractedData as Province);

        } catch (error) {
            reject(error);
        }
    })
}

export async function GetDistrict(district:string , cities:boolean):Promise<District> {
    return new Promise(async(resolve , reject) => {
        try {    
            if(!Data) {
                Data = await getData();
            }
            const extractedData = [].concat(...Data.map( obj => obj.districts.filter(obj => obj.name_en === district).map(obj => cities ? ({id:obj.id ,province_id:obj.province_id ,name_en:obj.name_en , name_si:obj.name_si , name_ta:obj.name_ta , city:obj.city}) :({id:obj.id ,province_id:obj.province_id ,name_en:obj.name_en , name_si:obj.name_si , name_ta:obj.name_ta}))) as any) as any;

            resolve(extractedData as District);

        } catch (error) {
            reject(error);
        }
    })
}


export async function GetCities(district:string):Promise<city[]> {
    return new Promise(async(resolve , reject) => {
        try {    
            if(!Data) {
                Data = await getData();
            }
            const extractedData = [].concat(...Data.map( obj => obj.districts.filter(obj => obj.name_en === district).map(obj => (obj.city))) as any) as any

            resolve(extractedData as city[]);

        } catch (error) {
            reject(error);
        }
    })
}