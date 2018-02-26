// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	

	
	function wordToPigLatin (word) {
		for (var i = 0; i < word.length; i++){
			return word + "ay";
	}
}
	
	function sentenceToPigLatin (sentence) {
		for(var i = 0; i < sentence.length; i++){
			var words = sentence.split(" ");
			var pigLatinizedWords = " ";
			for (var k = 0; k < words.length; k++) {
			   var word = words[k];
			   var pigLatinizedWord = wordToPigLatin(word);
				pigLatinizedWords = pigLatinizedWords + pigLatinizedWord;
			}
		}
		return pigLatinizedWords;
	}

console.log(sentenceToPigLatin("Words are cool"));

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


});