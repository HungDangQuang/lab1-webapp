

const buttonsPagination = document.querySelectorAll(".pagination > button");
        for (let i = 0; i < buttonsPagination.length; i++) {
            buttonsPagination[i].addEventListener("click", function () {
                for (let j = 0; j < buttonsPagination.length; j++) {
                    buttonsPagination[j].classList.remove("active");
                }
                this.classList.add("active");
            })
        }

const items = document.querySelectorAll(".item")
const cards = document.querySelectorAll(".card")
for (let i = 0; i < items.length; i++){
    items[i].addEventListener("click",function(){
        for(let j = 0; j < items.length; j++){
            items[j].classList.remove("active")
        }
        this.classList.add("active")
        let filterName = this.getAttribute("data-filter")
        for(let k = 0; k < cards.length; k++){
            cards[k].classList.remove("show")
            cards[k].classList.add("hide")

            if(filterName == "All") {
                cards[k].classList.remove("hide")
                cards[k].classList.add("show")
            }

            if (cards[k].getAttribute("data-item") == filterName) {
                cards[k].classList.remove("hide")
                cards[k].classList.add("show")
            }

            
        }

    })
}