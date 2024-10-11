//exercise1
function sentence(sent){
    var count=0
    for (let i=0;i<sent.length;i++){
        count++
     
       
    }
    return count
}
console.log(sentence("hello world"));

//exercise2
function sentence(sent){
    var count1=0
    var word = sent.split(" "); 
    for (let i=0;i<word.length;i++){
        count1++
    }
    return count1
    }    
    
    console.log(sentence("hello world"));

    
    //exercise 3

    function getCount(str) {
        const vowels = 'aeiou';
        let count = 0;
      
        for (let i = 0; i < str.length; i++) {
          if (vowels.includes(str[i])) {
            count++;
          }
        }
      
        return count;
      }
      console.log(getCount("hello world"))






