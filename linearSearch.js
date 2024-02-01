function linearSearch(searchTerm, arr) {
 
 for(let i = 0; i<arr.length; i++){
  if (arr[i] === searchTerm){
    return i 
  }
 }
return undefined
}

bannaList = "bananas".split("")





function globalLinearSearch(searchTerm, arr) {
  let answer = []
  for(let i = 0; i<arr.length; i++){
    if (arr[i] === searchTerm){
      answer.push(i)
    }
  }
if(answer.length === 0){
  return undefined
}

  return answer;
}




module.exports = { linearSearch, globalLinearSearch };
