import React from "react";
import internal from "stream";

export interface UserData {
    firstname: string;
    lastname: string;
    age: number;
}

export default interface User extends UserData {
    getUserData: ()=> UserData
}

export interface Category {
    title: string;
    description: string;
    rating: number,
    banner: string
}
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number,
    rating: number,
    banner: string
}