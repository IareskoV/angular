///1
var getConcatenation = function(nums) {
  arr = []

  for(index = 0;index<2;index++){
      arr = [...arr,...nums]
  }
  return arr
};
///2
var defangIPaddr = function(address) {
  ip = ""
  ip = address.replace(new RegExp(".", 'g'),"[.]")
  return   address.replaceAll(".", "[.]");
};
///3
var shuffle = function(nums, n) {
  ans = []
  for(index = 0;index<n;index++){
      ans.push(nums[index],nums[index+n])
  }
  return ans
};
///4
var smallestEvenMultiple = function(n) {
  for(index =1;;index++){
      if(!((n*index)%2)){
          return n*index
      }
  }
};
///5
var runningSum = function(nums) {
  ans = nums.map((element,num) =>{
      let sum = 0
      for(index = 0;index <=num;index++){
          sum += nums[index]
      }
      return sum
  })
  return ans
};
///6

///7
var createTargetArray = function(nums, index) {
  ans = []
   for(i = 0;i<nums.length;i++){
       ans.splice(index[i],0,nums[i])
   }
  return ans
};
///8
var restoreString = function(s, indices) {
  characters = [...s]

  newOrder = characters.map((char,index)=> {
      return characters[indices.indexOf(index)]
  }).join('')

  newOrder2=[]
  for(id in characters){
    newOrder2.push(characters[indices.indexOf(index)])
  }
  newOrder2.join('')

  return newOrder
};
///9
var checkIfPangram = function(sentence) {
  characters = [...sentence]

  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  for(letter of letters){
      isExists = characters.includes(letter)
      if(!isExists){

          return false
      }

  }
  return true
};
//10
var decodeMessage = function(key, message) {
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  messageChars = [...(new Set([...key.replaceAll(" ",'')]))];
  console.log(messageChars)
  decoded = [...message].map(char=>{
      if(char == " "){
          return char
      }
      return letters[messageChars.indexOf(char)]
  }).join('')
  return decoded
};
//11
var mySqrt = function(x) {
  if(x==1 || x ==0){ // without this faster
      return x
  }
  for(i = 0;;i++){
      if((i*i)>x){
          return i-1
      }
  }
};
