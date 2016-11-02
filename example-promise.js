function addPromise (a,b){
  return new Promise(function (reslove,reject) {
    if(typeof a === 'number' && typeof b == 'number'){
      reslove(a+b);
    }else {
      reject(' a and b should be numeric');
    }
  });
}

addPromise(2,3).then(function(sum){
  console.log('sucess',sum);
},function(err){
  console.log('this should appear',err);
});

addPromise('andrew',3).then(function(sum){
  console.log('sucess',sum);
},function(err){
  console.log('this should appear',err);
});
