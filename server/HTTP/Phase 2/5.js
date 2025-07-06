import { URL } from "url";

const myUrl = new URL('https://site.com/products?id=15&type=book&lang=en');

const params = myUrl.searchParams;

console.log(`id: ${params.get(`id`)}`);
console.log(`type: ${params.get(`type`)}`);
console.log(`Language: ${params.get(`lang`)}`);