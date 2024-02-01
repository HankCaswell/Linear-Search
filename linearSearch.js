function linearSearch(searchTerm, arr) {
 
 for(let i = 0; i<arr.length; i++){
  if (arr[i] === searchTerm){
    return i 
  }
 }
return undefined
}

bannaList = "bananas".split("")
console.log(linearSearch('q', bannaList))
console.log(linearSearch('b', bannaList))




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


console.log(globalLinearSearch('a', bannaList))
console.log(globalLinearSearch('q', bannaList))

module.exports = { linearSearch, globalLinearSearch };
