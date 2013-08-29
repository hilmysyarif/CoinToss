var CoinToss = function() {
    var side = Math.random();
    if (side <0.50 ){
    side= "tails.png";
    } else if (side >0.50 ){
        side= "heads.png";
    } else {
        side = "edge.png";}
        return side;
}; 
var TossCoin = function() {
	setTimeout(function() {document.images[0].src = "coin.gif";},500);
	setTimeout(function() {document.images[0].src = CoinToss();},3000);
//	document.images[0].src = CoinToss();
	}
