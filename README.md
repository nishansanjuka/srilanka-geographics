# Project Overview

## Sri Lanka Geographic Informations

### Provinces, Districts, Cities - Oh My!

Unleash the power of geographical data with our npm library that provides seamless access to detailed information about provinces, districts, and cities. Whether you're building a location-based app, analyzing regional trends, or just curious about the world around you, our library has got you covered.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)



## Introduction

Welcome to the world of geographic exploration and seamless data retrieval! Our npm library, @nishansanjuka/srilanka_geographics, is designed to empower developers, data enthusiasts, and curious minds with comprehensive information about provinces, districts, and cities from around the globe.



## Features

- 🌍 **Local Reach:** Explore comprehensive data on provinces from the Sri Lanka.
- 🏙️ **City Insights:** Dive deep into districts and uncover the cities that make them unique.
- 🚀 **Effortless Integration:** Integrate our library seamlessly into your project with just a few lines of code.
- 📚 **Documentation Delight:** Clear and concise documentation makes using our library a breeze.


## Installation

```bash
npm install @nishansanjuka/srilanka_geographics
```




## Usage

**Getting All The Provinces is Look Likes This**

```js
const { GetAllProvinces, GetProvince, GetAllDistricts, GetDistrict, GetAllCities, GetCities } = require('@nishansanjuka/srilanka_geographics');

const allProvinces = await GetAllProvinces();
console.log(allProvinces);
```

## Documentation

### `getData()`

#### Description

This asynchronous function reads data from the specified file path and returns an array of `Province` objects.

#### Input

- None

#### Output

- Returns a Promise resolving to an array of `Province` objects.

### `GetAllProvinces()`

#### Description

Retrieves all provinces with their basic details.

#### Input

- None

#### Output

- Returns a Promise resolving to an array of `Province` objects with properties `id`, `name_en`, `name_si`, and `name_ta`.

### `GetAllDistricts()`

#### Description

Retrieves all districts with their details within each province.

#### Input

- None

#### Output

- Returns a Promise resolving to an array of `District` objects with properties `id`, `province_id`, `name_en`, `name_si`, and `name_ta`.

### `GetAllCities()`

#### Description

Retrieves all cities within all districts across provinces.

#### Input

- None

#### Output

- Returns a Promise resolving to an array of `city` objects.

### `GetProvince(province: string, districts: boolean, city: boolean)`

#### Description

Retrieves details of a specific province based on the provided name. Optional parameters `districts` and `city` determine whether to include district and city details.

#### Input

- `province` (string): Name of the province.
- `districts` (boolean): Include district details (default: false).
- `city` (boolean): Include city details within districts (default: false).

#### Output

- Returns a Promise resolving to a `Province` object with optional `districts` and `city` details.

### `GetDistrict(district: string, cities: boolean)`

#### Description

Retrieves details of a specific district based on the provided name. Optional parameter `cities` determines whether to include city details within the district.

#### Input

- `district` (string): Name of the district.
- `cities` (boolean): Include city details within the district (default: false).

#### Output

- Returns a Promise resolving to a `District` object with optional `cities` details.

### `GetCities(district: string)`

#### Description

Retrieves all cities within a specific district.

#### Input

- `district` (string): Name of the district.

#### Output

- Returns a Promise resolving to an array of `city` objects within the specified district.


## License

@nishansanjuka/srilanka_geographics is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

