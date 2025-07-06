import { URL } from "url";

const myUrl = new URL('https://app.com/search?query=node&sort=asc');

myUrl.searchParams.set(`sort`,`desc`)
myUrl.searchParams.append(`page`,3)
myUrl.searchParams.delete(`query`)
console.log(myUrl.href);