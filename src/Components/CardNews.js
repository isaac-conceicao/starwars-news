class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        componentRoot.appendChild(this.buildCardLeft());
        componentRoot.appendChild(this.buildCardRight());

        return componentRoot;
    }

    buildCardLeft(){
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const author = document.createElement("span");
        author.setAttribute("class","card__author");
        author.textContent = "By: "+(this.getAttribute("author") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.setAttribute("class","card__title");
        linkTitle.href = this.getAttribute("link") || "#";
        linkTitle.textContent = this.getAttribute("title") || "Untitled";

        const content = document.createElement("p");
        content.setAttribute("class","card__content");
        content.textContent = this.getAttribute("content") || "blank";

        cardLeft.appendChild(author);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(content);

        return cardLeft;
    }

    buildCardRight(){
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const image = document.createElement("img");
        image.setAttribute("class","card__image");
        image.src = this.getAttribute("imgsrc") || "assets/default-image.png";
        image.alt = "News Imgae";

        cardRight.appendChild(image);

        return cardRight;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                margin-left: 10px;
                margin-top: 30px;
                box-shadow: 4px 4px 16px 1px #000000;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }

            .card__left{
                padding-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .card__title{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card__content {
                color: rgb(112, 112, 112);
            }

            .card__author {
                font-weight: 400;
            }

            .card__image{
                padding: 10px;
            }
        `;

        return style;
    }
}

customElements.define("card-news",CardNews);