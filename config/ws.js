/* import api from "../api/api.js" */
function nam(p) {
    
    return console.log(p);
}


self.addEventListener("message", (e)=>{
    /* let res = api[`${e.data.type}`];
    Promise.resolve(res).then(res=>postMessage(res)); */

    postMessage(nam(e.data))
})