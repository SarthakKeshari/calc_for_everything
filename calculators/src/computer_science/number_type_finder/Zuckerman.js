export const checkZuckerman = (limit) => {
  // Add your code for finding Zuckerman Numbers here (if applicable)
  if(limit % getProduct(limit) === 0){
    return 1;
  }else{
    return 0;
  }
};

// Function to get product of digits
function getProduct( limit) {
let product = 1;

while (limit !== 0) {
    product = product * (limit % 10);
    limit = parseInt(limit / 10);
}
return product;
}