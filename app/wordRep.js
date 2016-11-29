module.exports = function(numCount){
 var outcome = {};
 var wordRep = numCount.replace(/[\n\t]/gi,' ')
                        .replace(/ {2,}/g, " ").split(' ');
     wordRep.forEach (function(word){
       if (Object.hasOwnProperty.call(outcome, word)){
         outcome[word] += 1;
       } else {
         outcome[word] = 1;
       }
     });
 
 return outcome;
}