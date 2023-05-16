import api from "../api/api.js"

self.addEventListener("message", (e)=>{
    let res = api[`${e.data.type}`];
    Promise.resolve(res).then(res=>postMessage(res));
})