//challenge #2 "Reverse a String"
//Selects the "reverse a string" id "reverse"
document.querySelector("#reverse").innerHTML = reverseString("Jade, Pearl, Amber, Moonstone, Opal, Onyx, Malachite");
//The function you use to convert the entire string into a reverse string the words & letters are all backwards!
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("Jade, Pearl, Amber, Moonstone, Opal, Onyx, Malachite"));
//Output will be 'etihcalaM ,xynO ,lapO ,enotsnooM ,rebmA ,lraeP ,edaJ'

//challenge #5 "Title Case a sentence"
//Selects the "title case a sentence" id "case"
document.querySelector("#case").innerHTML = titleCase("title case a sentence, convert the lowercase from the starting of each word into an uppercase letter!");
//The function you use to convert the lowercase from the starting of each word into an uppercase letter!
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log(titleCase("title case a sentence, convert the lowercase from the starting of each word into an uppercase letter!"));
//Output will be 'Title Case A Sentence'