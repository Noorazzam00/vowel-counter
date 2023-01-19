var vowelCount = document.getElementById('vowelCount');
function countVowel (str){
   str = str.toLowerCase();
   let VowArr = ['a','e', 'i', 'o','u'],
      counter = 0;


       for (let letter of str) {
         if(VowArr.includes(letter)) {
            counter++;
         }
       }
       vowelCount.innerHTML = counter;
      

      // call our function

}