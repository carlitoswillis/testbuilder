// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var dinersClubPrefix = [...Array(4000).keys()].slice(3800, 4000).map((x) => x.toString());
var dinerClubLengths = [14];
var amexPrefix = [...Array(3800).keys()].slice(3700, 3800).map((x) => x.toString()).concat([...Array(3500).keys()].slice(3400, 3500).map((x) => x.toString()));;
var amexLengths = [15];
var visaPrefix = [...Array(1000).keys()].map(((y) => y+4000)).map((x) => x.toString());
var visaLengths = [13, 16, 19];
var masterCardPrefix = [...Array(5600).keys()].slice(5100, 5600).map((x) => x.toString());
var masterCardLengths = [16];
var discoverPrefix = ["6011"].concat([...Array(160).keys()].map((x) => (x+6440).toString()));
var discoverLengths = [16, 19];
var maestroPrefix = ["5018", "5020", "5038", "6304"];
var maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
var chinaUnionPayPrefix = [...Array(6270).keys()].slice(6240).concat([...Array(7).keys()].map((x) => x+6282)).map((y) => y.toString());
var chinaUnionPayPrefixLong = [...Array(622926).keys()].slice(622126).map((x) => x.toString());
var chinaUnionPayPrefixAll = chinaUnionPayPrefix.concat(chinaUnionPayPrefixLong);
var chinaUnionPayLengths = [16, 17, 18, 19];
var switchPrefix = ["4903", "4905", "4911", "4936", "6333", "6759"];
var switchPrefixLong = ["564182", "633110"];
var switchLengths = [16, 18, 19];


var prefixLengthPairs = [["Switch", switchPrefix, switchLengths], ["China UnionPay", chinaUnionPayPrefix, chinaUnionPayLengths], ["Maestro", maestroPrefix, maestroLengths], ["Discover", discoverPrefix, discoverLengths], ["Diner's Club", dinersClubPrefix, dinerClubLengths], ["American Express", amexPrefix, amexLengths], ["Visa", visaPrefix, visaLengths], ["MasterCard", masterCardPrefix, masterCardLengths]];
var prefixLengthPairsLong = [["Switch", switchPrefixLong, switchLengths], ["China UnionPay", chinaUnionPayPrefixLong, chinaUnionPayLengths]];


var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  var cardPrefixLong = cardNumber.substr(0, 6);
  var cardPrefix = cardNumber.substr(0, 4);
  var cardLength = cardNumber.length;

  for (var givenPairLong of prefixLengthPairsLong) {
  	if (givenPairLong[1].includes(cardPrefixLong) && givenPairLong[2].includes(cardLength)) {
  		return givenPairLong[0];
  	}
  }

  
  for (var givenPair of prefixLengthPairs) {

  	if (givenPair[1].includes(cardPrefix) && givenPair[2].includes(cardLength)) {
  		return givenPair[0];
  	}
  }

  return "failed to match card";

};


/*
China UnionPay always has a prefix of 
622126-622925, 624-626, or 6282-6288
and a length of 16-19.
-----------
Switch always has a prefix of 
4903, 4905, 4911, 4936, 
564182, 633110, 
6333, or 6759 and a 
length of 16, 18, or 19.
---------------
Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
*/
