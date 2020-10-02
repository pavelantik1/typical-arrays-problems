
exports.min = function min (array=[]) {
 if(!array.length) return 0; 
 return array.sort((x,y) => x-y)[0];
}

exports.max = function max (array=[]) {
  if(!array.length) return 0;  
  return array.sort((x,y) => y-x)[0];
  
}

exports.avg = function avg (array=[]) {
  if(!(array.length)) return 0;  
  return array.reduce( (sum, item) => sum +=item, 0)/array.length;
   
}
