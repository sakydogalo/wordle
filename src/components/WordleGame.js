class WordleGame extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    static get styles(){
        return /*css*/`
        :host{

        }`
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = /*html*/`
        <style>${WordleGame.styles}</style>
        <div>
        
        </div>
        `;
    }
}

customElements.define('wordle-game',WordleGame);