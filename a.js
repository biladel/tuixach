let a = 1;
let b = -3;
let c = 2;

let delta = b * b - 4 * a * c;

if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(x1, x2);
}
