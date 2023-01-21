var vowelCount = document.getElementById('vowelCount');
var characterCount = document.getElementById("characterCount");
var wordCount = document.getElementById("wordCount");

function getWordCount(str) {
   str = str.toLowerCase();
   let wordCounter = 0;
   wordCounter = str.split(" ").length;
   wordCount.innerHTML = wordCounter;
 }

 function getCharacterCount(str) {
   str = str.toLowerCase();
   let charCounter = 0,
     sentenceWithoutWhiteSpace = 0;
   sentenceWithoutWhiteSpace = str.replace(/\s/g, "");
   charCounter = sentenceWithoutWhiteSpace.length;
   characterCount.innerHTML = charCounter;
 }

function countVowel (str){
   str = str.toLowerCase();
   let VowArr = ['a','e', 'i', 'o','u'],
      counter = 0;
       for (let letter of str) {
         if(VowArr.includes(letter)) {
            counter++;
         }
       }
       vowelCount.innerHTML = counter;  // call our function
}