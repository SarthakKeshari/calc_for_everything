export function checkZeisel(num) {
  if (Math.sqrt(num) == Math.floor(Math.sqrt(num)))
          return false;
  var count = 0, str = num, i=0,a=1 ,b=0;
  var fac = 2;
      while (num != 1) {
          // code block to be executed
          if(num % fac == 0) {
              count++;
              num /= fac;
          }
          else 
              fac++;
        }
        num = str;
      fac = 2;
      // storing factors in array
      var fact = [count];
      while (num != 1) {
          if(num % fac == 0) { 
              fact[i] = fac;
              i+=1;
              num /= fac;
          } else
              fac+=1;
      }
      if(i < 3)
          return false;
  
      while(a < fact[1]) {
          b = fact[0] - a;
              for(i = 1; i < count; i++) {
                  if(fact[i] != a*fact[i -1] + b) {
                      break;
                  }
              }
              if(i == count) {
                  return true;
              }
              a++;
          }
          return false;
}