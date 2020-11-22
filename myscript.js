
// TEST GIT HUB
console.log('test github in vsc');
//flating array
function flatten(arr) {
  // viết code ở đây.
  return arr.reduce((res, item)=>{return res.concat(item)},[]);
}


function toFlat(arr)
{
  return arr.reduce(
    (result, item)=>
    {
      result.concat(item);
    }, []
  )
}


//count frequence of element

function frequenceElement(arr)
{
  return arr.reduce(
    (result, item)=>{
      if (isNaN(result[item])
        result[item]=1;
       else
        result[item]+=1;
       return result;
    }, {}
  )
}

function countOccurrences(arr) {
  // viết code ở đây.
  return arr.reduce((result, item)=>
  {
      if (isNaN(result[item]))
        result[item] = 1;
      else
        result[item]+=1;
        return result;
      
      
  }, {})
}
//remove duplicate
function removeDuplicate(array) {
  // write code here...
  return array.filter((value,index)=>array.indexOf(value) == index);
}
