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

        let uri = "http://localhost/SpUkM01-087/php-1/api.php";
        let ws = new Worker("config/ws.js");
        ws.postMessage(uri);
        
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