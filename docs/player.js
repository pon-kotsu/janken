const GU = 0;
const CHOKI = 1;
const PA = 2;
let matches = 0;
　
function CountUp(){
   matches = matches + 1;
}

//帰ってきた表裏マン　on-third
function actionAgainstOmoteUra2(){
  CountUp();
  const isEven = matches % 3 == 0;
  let result = GU;
  if(isEven){
    return result = CHOKI;
  }
    return result;
}

//表裏マン　odd-even
  function actionOmoteUra(){
    CountUp();
    const isEven = matches % 2 == 0;
    let result = PA;
    if(isEven){
      return result = GU;
    }
    return result;
  }
  
  

//チョキ大好きマン　choki-lover
function CHOKIdaisukiman(){
  let result = GU;
  return result;

}

 //　順番に出すマン　rotation
  function actionOrder(){
   CountUp();
   const isEven = matches % 3;
   let result = CHOKI;
   if(isEven == 1){
return result = PA;
  }else if(isEven == 2){
return result = GU;
  }
  else{
    return result;
  }
 }

 function action(opponent){
console.log(opponent);

if(opponent =='fighter::choki-lover'){
result = CHOKIdaisukiman();
}
else if(opponent =='fighter::odd-even'){
  
  result = actionOmoteUra();
}
else if(opponent =='fighter::on-third'){
  
  result = actionAgainstOmoteUra2();
}
else{
  result = actionOrder();
}
return result;

 }
