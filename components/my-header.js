let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myButton extends HTMLElement{
    static async components(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }

    handleEvent(e){
        (e.type === "submit") ? this.obtain(e)
        : undefined;
    }
    
    obtain(e){
        e.preventDefault();

        let uri = "http://localhost/SkylAb-177/php/api.php";

        console.log("fsfs");
        let ws = new Worker("../config/ws.js", {type: "module"});

        ws.postMessage(uri);
        
        /* ws.addEventListener("message", (e)=>{
            console.log(e.data);
        }) */
        
       /*  let data = Object.fromEntries(new FormData(e.target))
        console.log(data);
        switch (e.submitter.dataset.valor){
            case "get":
                ws.postMessage({type: "api"});
                break;
            default:
                break;
        } */

       /*  ws.addEventListener("message", (e)=>{
            console.log(e.data);
            ws.terminate();
        }) */
        // console.log(ws);
    }

    static get observedAttributes(){
        return ['data-accion'];
    }
    attributeChangedCallback(name,old,now){
        console.log(name,old,now);
        console.log(this.dataset.accion);
    }

    connectedCallback(){
        Promise.resolve(myButton.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.button = this.shadowRoot.querySelector("#but")
            this.button.addEventListener("submit", this.handleEvent.bind(this))
        })
    }
}
customElements.define(name, myButton)