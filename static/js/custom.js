/* Custom JS */

var quotes = [

	{ 
	quote: "All models are wrong, but some are useful.",
	character: "George Box"
	},
	
	{ 
	quote: "Statistics are like bikinis. What they reveal is suggestive, but what they conceal is vital.",
	character: "Aaron Levenstein"
	},
];

$(document).ready(function() {
	
	window.onload = function() {
		pickQuote();
	}

	function pickQuote() {
		var randomNum = quotes[ Math.floor( Math.random() * quotes.length ) ];

		$("#quote").html(randomNum.quote);
		$("#character").html("- " + randomNum.character);
	}

});

document.addEventListener('DOMContentLoaded', function(){ 
    window.onload = function() {
		pickQuote();
	}

	function pickQuote() {
		var randomNum = quotes[ Math.floor( Math.random() * quotes.length ) ];

		$("#quote").html(randomNum.quote);
		$("#character").html("- " + randomNum.character);
	}
}, false);
