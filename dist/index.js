"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  GetAllCities: () => GetAllCities,
  GetAllDistricts: () => GetAllDistricts,
  GetAllProvinces: () => GetAllProvinces,
  GetCities: () => GetCities,
  GetDistrict: () => GetDistrict,
  GetProvince: () => GetProvince
});
module.exports = __toCommonJS(src_exports);
var fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var filePath = import_path.default.resolve(__dirname, "../data.json");
var Data = null;
function getData() {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          Data = JSON.parse(data);
          resolve(JSON.parse(data));
        }
      });
    });
  });
}
function GetAllProvinces() {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      try {
        if (!Data) {
          Data = yield getData();
        }
        const extractedData = Data.map((obj) => ({ id: obj.id, name_en: obj.name_en, name_si: obj.name_si, name_ta: obj.name_ta }));
        resolve(extractedData);
      } catch (error) {
        reject(error);
      }
    }));
  });
}
function GetAllDistricts() {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      try {
        if (!Data) {
          Data = yield getData();
        }
        const extractedData = Data.map((obj) => obj.districts.map((data) => ({ id: data.id, province_id: data.province_id, name_en: data.name_en, name_si: data.name_si, name_ta: data.name_ta })));
        resolve(extractedData);
      } catch (error) {
        reject(error);
      }
    }));
  });
}
function GetAllCities() {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      try {
        if (!Data) {
          Data = yield getData();
        }
        const extractedData = [].concat(...Data.map((obj) => obj.districts).map((distobj) => distobj.map((obj) => obj.city)));
        resolve(extractedData);
      } catch (error) {
        reject(error);
      }
    }));
  });
}
function GetProvince(province, districts, city) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      try {
        if (!Data) {
          Data = yield getData();
        }
        const extractedData = Data.filter((obj) => province === obj.name_en).map((obj) => districts ? { id: obj.id, name_en: obj.name_en, name_si: obj.name_si, name_ta: obj.name_ta, districts: obj.districts.map((obj2) => city ? { id: obj2.id, province_id: obj2.province_id, name_en: obj2.name_en, name_si: obj2.name_si, name_ta: obj2.name_ta, city: obj2.city } : { id: obj2.id, province_id: obj2.province_id, name_en: obj2.name_en, name_si: obj2.name_si, name_ta: obj2.name_ta }) } : city ? obj.districts.map((obj2) => obj2.city) : { id: obj.id, name_en: obj.name_en, name_si: obj.name_si, name_ta: obj.name_ta });
        resolve(extractedData);
      } catch (error) {
        reject(error);
      }
    }));
  });
}
function GetDistrict(district, cities) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      try {
        if (!Data) {
          Data = yield getData();
        }
        const extractedData = [].concat(...Data.map((obj) => obj.districts.filter((obj2) => obj2.name_en === district).map((obj2) => cities ? { id: obj2.id, province_id: obj2.province_id, name_en: obj2.name_en, name_si: obj2.name_si, name_ta: obj2.name_ta, city: obj2.city } : { id: obj2.id, province_id: obj2.province_id, name_en: obj2.name_en, name_si: obj2.name_si, name_ta: obj2.name_ta })));
        resolve(extractedData);
      } catch (error) {
        reject(error);
      }
    }));
  });
}
function GetCities(district) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      try {
        if (!Data) {
          Data = yield getData();
        }
        const extractedData = [].concat(...Data.map((obj) => obj.districts.filter((obj2) => obj2.name_en === district).map((obj2) => obj2.city)));
        resolve(extractedData);
      } catch (error) {
        reject(error);
      }
    }));
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GetAllCities,
  GetAllDistricts,
  GetAllProvinces,
  GetCities,
  GetDistrict,
  GetProvince
});
