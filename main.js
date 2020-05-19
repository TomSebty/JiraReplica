var card = new Card("This is a header", "This is the body");

//card.CreateCard();

function AddNewCard(){
    card.CreateCard();
}

var addCards = document.querySelectorAll('.card-add');

addCards.forEach(function() {

    this.onclick = AddNewCard;

})