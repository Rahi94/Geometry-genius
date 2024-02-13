function calculateTriangleArea(){
   const triangleInputBase = document.getElementById('triangle-base');
   const triangleBase = triangleInputBase.value;
   const base = parseFloat(triangleBase);
//    console.log(base);

const triangleInputHeight = document.getElementById('triangle-height');
const triangleHeight = triangleInputHeight.value;
const height = parseFloat(triangleHeight);
// console.log(typeof height);

const Area = 0.5 * base * height;
// console.log(Area);

const triangleArea = document.getElementById('triangle-area');
triangleArea.innerText = Area;


}