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
        (e.type === "click") ? this.obtain(e)
        : undefined;
    }
    obtain(e){
        console.log(e);
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myButton.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.MyHead = this.shadowRoot.querySelector(".but")
            this.MyHead.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(name, myButton)