var mes = 'hello, js';
console.log(mes);

var a, b;
a = 14;
b = 2;
c = a + b;
p = a - b;
w = a * b;
k = a / b;
console.log(c, p, w, k);

var r = prompt('enter r');
per = 2 * 3.14 * Number(r);
pl = 3.14 * (Number(r) ** 2 );
console.log("r=" + Number(r) + "," + "per=" + per + "," + "pl=" + pl);

var m = prompt('m');
var n;
if (Number(m) > 0) {
    var n = 1;
    console.log("n=" + n);
} else if (Number(m) < 1 && Number(m) > -1) {
    var n = 0; 
    console.log("n=" + n);
} else {
    var n = -1;
    console.log("n=" + n);
}

var s = prompt('n=');
var n = Number(s);
perev = n % 2;
if (perev === 0) {
    console.log("parne")
}
else {
    console.log("neparne")
}

var sum = 0;
var pwr = 1;

for (var i = 1; i < 11; i++) {
  sum += i;
  pwr *= i;
}

console.log("sum:", sum);
console.log("pwr:", pwr);

var n = prompt('n=');
function sumOfSeries(n) {
    let sum = 0;
    let count = 1;
    
    for (let i = 1; i <= n; i++) {
      sum += count;
      count = count * 10 + 1;
    }
    
    return sum;
  }
  
console.log(sumOfSeries(n));