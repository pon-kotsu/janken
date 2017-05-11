const GU = 0;
const CHOKI = 1;
const PA = 2;


let matches = 0;
function action(opponent){  
  matches = matches + 1;
  let amari = matches % 2;
  let isEven = amari == 0;
  console.log(`${matches} % 2 = ${amari} : ${isEven}`);
  if(isEven){
    return GU;
  }
return PA;
}


/* 表裏マン
let matches = 0;
  function action(opponent){
   matches = matches + 1;
   if(matches % 2 == 1){
return PA;
   }else{
return GU;
   }
 }
*/
 /*　順番に出すマン
 let matches = 0;
  function action(opponent){
   matches = matches + 1;
   if(matches % 3 == 1){
return PA;
  }if else(matches % 3 == 2){
return GU;
  }
  else{
    return CHOKI;
  }
 }
 */