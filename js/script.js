// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
	
	function wordToPigLatin (wordy) {
		for (var i = 0; i < wordy.length; i++){
		    if (startsWithAVowel(wordy)) {
		        return wordy + "ay"; 
		    } else {
		        return wordy.slice(1) + wordy[0] + "ay";
		    }
		}
	}
	
	function sentenceToPigLatin (sentence) {
		for(var i = 0; i < sentence.length; i++){
			var words = sentence.split(" ");
			var pigLatinizedWords = " ";
			for (var k = 0; k < words.length; k++) {
			   var word = words[k];
			   var pigLatinizedWord = wordToPigLatin(word);
			   pigLatinizedWords = pigLatinizedWords + " " + pigLatinizedWord;
			}
		}
		return pigLatinizedWords;
	}

	function startsWithAVowel(wordo) {
		var firstLetter = wordo[0].toLowerCase();
		if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    	return true;
		} else {
    	return false;
		}
	}

	$('#button').click(function(){
		var sentencey = $('#textBox').val();
		var piglatin = sentenceToPigLatin(sentencey);
		$('#display').text(piglatin);
	});

});