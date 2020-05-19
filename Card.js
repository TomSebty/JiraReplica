function Card (header, body)
{
    this.header = header;
    this.body = body;
    this.state = false;

    this.Body = function () {return this.body}

    this.CreateCard = function() 
    {
        // Getting the list div
        listDiv = document.querySelectorAll(".list-items-container")[2];

        // Creating the card
        var newCard = document.createElement('div');
        newCard.className = 'list-card';
        listDiv.appendChild(newCard);

        //Creating the Header and appending to the card
        var headerP = document.createElement('p');
        headerP.className = 'list-card-title';
        headerP.innerHTML = this.header;
        newCard.appendChild(headerP);

        //Creating the Body and appending to the card
        var infoP = document.createElement('p');
        infoP.className = 'list-card-info';
        infoP.innerHTML = this.body;
        newCard.appendChild(infoP);
    }

}

/*

<div class="list-card">
	<p class="list-card-title">test test test</p>
  	<p class="list-card-info">some text to test body of card. It is very long.</p>
</div>

*/
