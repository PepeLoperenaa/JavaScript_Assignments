
function generateQuote(){
    var quotes = ["Skip JavaScript Lectures", "Drink beer", "Hydrate with some water!", "Spend money in NHL Stenden merch", "Spend money on Steam. Maybe Valheim ;)", "Overreact when you get a grade" ];
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]; //random the quotes.
    document.getElementById('quote').textContent = randomQuotes;
    console.log(randomQuotes);
    window.alert(randomQuotes);
    
}