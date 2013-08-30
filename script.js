var odds = 0.50;
var coin = "florin";
var StartCoin =function(){
	var startCoin=(coin)+"/heads.png";
	document.images[0].src = (startCoin);};
var CoinToss = function() {
    var side = Math.random();
    if (side >(odds) ){
		side= "tails.png";
    } else if (side <(odds) ){
        side= "heads.png";
    } else {
        side = "edge.png";}
        return (coin)+"/"+side;
}; 
var TossCoin = function() {
	var coinGif =(coin)+"/coin.gif";
	setTimeout(function() {document.images[0].src = (coinGif);},250);
	setTimeout(function() {document.images[0].src = CoinToss();},3000);
	};
var ChangeOdds = function () {
	var chance = prompt("Please a number between 0-100, this is the percent chance of getting 'heads' ");
	odds = chance / 100;
	};
//var ChangeCoin = function () {
//	coin = prompt("Please select new coin");
//		};
