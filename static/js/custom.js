/* Custom JS */

var quotes = [

	{ 
	quote: "All models are wrong, but some are useful.",
	character: "George Box"
	},
	
	{ 
	quote: "In God we trust. All others bring data.",
	character: "Edwards Deming"
	},
	
	{ 
	quote: "Statistics are like bikinis. What they reveal is suggestive, but what they conceal is vital.",
	character: "Aaron Levenstein"
	},

	{ 
	quote: "There are three types of lies -- lies, damn lies, and statistics.",
	character: "Benjamin Disraeli"
	},	
	
	{ 
	quote: "Be careful of averages and how they’re applied. One way that they can fool you is if the average combines samples from disparate populations. This can lead to absurd observations such as: 'On average, humans have one testicle.'",
	character: "Daniel J. Levitin"
	},	
	
	{ 
	quote: "To call in the statistician after the experiment is done may be no more than asking him to perform a post-mortem examination: he may be able to say what the experiment died of.",
	character: "Ronald Fisher"
	},	
	
	{ 
	quote: "All models are wrong, except mine.",
	character: "Emi Tanaka"
	},	
		
	{ 
	quote: "More data means more information, but it also means more false information.",
	character: "Nassim Nicholas Taleb"
	},	
	
		{ 
	quote: "There are two kinds of statistics, the kind you look up and the kind you make up.",
	character: "Rex Stout"
	}
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
