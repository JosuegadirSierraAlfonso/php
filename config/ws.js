/* import api from "../api/api.js" */
// function nam(p) {
//     return console.log(p);
// }

async function api(uri){
    let data = await ((await fetch(uri))).json();
    console.log(data);
    self.postMessage({message: "api", data: data});
}


self.addEventListener("message", (e)=>{
    /* let res = api[`${e.data.type}`];
    Promise.resolve(res).then(res=>postMessage(res)); */
    // postMessage(nam(e.data))
    api(e.data);
})