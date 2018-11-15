//                                             -4a.1-
function RecFact(num)
{
    if (num> 0 && num<=1)
      { return 1; }
    else
      { return num * RecFact( num - 1 );
      }
}
console.log(RecFact(5));



//                                              -4a.2-
function IterFact(value)
{
  var result = 1;
    while (value> 0)
      { 
        result = result * value; 
       value = value - 1;
      }
  return result; 
}
console.log(IterFact(7));



//                                                -4b-
var fibonacciSeq = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacciSeq(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacciSeq(8));



//                                                 -4c-
isPalindrom = (str = "") => {
  if (str[0] === str[str.length - 1]) {
    return str.length <= 1 ? true : isPalindrom(str.slice(1, -1))
  }

  return false;
}

console.log(["exe", "vdacb", "aa", "abba", "s","AED"].map((e, i) => isPalindrom(e)).join())


//                                                 -4d-

function AlphabetOrder(str) {
  var arr = str.split('');
  arr.sort();
  return arr.join('').trim();
}
console.log(AlphabetOrder("world of warcraft"));




//                                                 -4e-
function longestWord(string) {
  let words = string.split(" ");
  return words.reduce((prev, next) => prev.length > next.length ? prev : next);
}

console.log(longestWord("smile google fun"));


//                                                  -4f-

function isAPrimeNumber(num){
     var counter = 0;
    
     for (k = 1; k <= num; k++) {
        if (num % k == 0) {
         counter  = counter  + 1;
        }
    }
    if (counter == 2) {
     return num + ' is a Prime Number';
   }else{
    return num + ' is not a Prime Number';
   }
 }
var resp = isAPrimeNumber(1);
console.log(resp);


//                                                   -4g-

function DataType(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(DataType(4));
console.log(DataType('Warcraft'));
console.log(DataType(true));

//                                                    -4h-


function SecondGreatestLowest(arrNum)
{
  arrNum.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arrNum[0]];
  var result = [];
  
  for(var j=1; j < arrNum.length; j++)
  {
    if(arrNum[j-1] !== arrNum[j])
    {
      uniqa.push(arrNum[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(SecondGreatestLowest([1,2,3,4,5]));



//                                               -4i-

function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2,1]));


//                                                -4j-

function binary_Search(items, value){
    var firstIndex  = 0,
        lastIndex   = items.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex)/2);

    while(items[middleIndex] != value && firstIndex < lastIndex)
    {
       if (value < items[middleIndex])
        {
            lastIndex = middleIndex - 1;
        } 
      else if (value > items[middleIndex])
        {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex)/2);
    }

 return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 2));   
console.log(binary_Search(items, 4));






