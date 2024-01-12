
 function calculat(){
    const heightInput = document.getElementById("ht");
      const weightInput = document.getElementById("wt");
      const resultInput = document.getElementById("result");
      const button = document.getElementById("butt");
      const heightincm = (heightInput.value);
      const weight = (weightInput.value);
const height=heightincm/100;
      const bmi=weight/(height*height);

      if(  bmi<=18.5){

        resultInput.innerHTML=bmi+"  "+" "+"(Underweight)";
      }
      
        
      else if(bmi<=25) {
        resultInput.innerHTML=bmi+"  "+" "+"(Normal)";
     
      } 
      else if(bmi<=30) {
        resultInput.innerHTML=bmi+"  "+" "+"(Overweight)";
     
      } 
      else{
      
            resultInput.innerHTML=bmi+"  "+" "+"(Obesity)";
         
          } 
      }  
   
       
      
      
     



 
 calculate();
 