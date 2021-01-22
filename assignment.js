  
  


//1 no problem solve

function kilometerToMeter(km){
  var meter = 0;
  if(km<0){
    return "empty number  does not accepted any quary!";
  }
  else{
     meter = km*1000;
  }
    return meter;
}
var result = kilometerToMeter(55); 
//console.log(result);



//2 no problem solve

function budgetCalculator(watch,phone,laptop){
  if((watch<0)||(phone<0)||(laptop<0)){
    return "empty number  does not accepted any quary!";
  }
  else{

    var result1 = watch*50;
    var result2 = phone*100;
    var result3 = laptop*500;
    var total = result1 +result2 +result3;
  }
    return total;
}
var sum = budgetCalculator(2,3,4);
//console.log(sum);




//3 no problem solve

function hotelCost(number){
    var sum = 0;
    if(number < 0){
      return "empty array  does not accepted any quary!";
    }
    else{
    if(number <= 10){
       sum = number * 100;
    }
    else if(number <= 20){
     var firstTour = 10 * 100;
     var secondTour = 10 * 80;
     sum = firstTour + secondTour;
    } 
    else{
     var firstTour = 10 * 100;
     var secondTour = 10 * 80;
     var remaining = number - 20;
     var thirdTour = remaining * 50;
     sum = firstTour + secondTour + thirdTour;
    } 
  }
    return sum;
}
var total = hotelCost(-71);
//console.log(total);



//4 no problem solve.

    function megaFriend(str){
        var array = str; ["nisha", "ox", "enjoy", "please", "jannatulmottakin", "moreover", "daraz"];
        var long = array [0];
        if(str.length === 0){
          return "empty array  does not accepted!";
        }
        else{
          for(i=0;i < array.length; i++){
            if(long.length< array[i].length){
              long = array[i];
            }
          }
        }
        return long;
      }
        var list = ["nisha", "ox", "enjoy", "please", "jannatulmottakin", "moreover", "daraz"];
    var input = megaFriend(list);
    // console.log(input);