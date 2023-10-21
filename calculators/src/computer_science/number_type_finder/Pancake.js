export const checkPancake = (number) => {
  let i = 0, temp = 0;
  while( temp < number ){
    temp = ((i*i)+i+2)/2;
    if(temp === number)
      return true;
    i++
  }
  return false;
}