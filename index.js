console.log('1-misol')
var a=6;
console.log('a='+a)
console.log('p='+(a*4))

console.log('2-misol')
console.log('S='+(a*a))

console.log('3-misol')
var a1=2;
var a2=3;
console.log('S='+(a1*a2))
console.log('p='+(2*(a1+a2)))

console.log('4-misol')
var d=5;
console.log('L='+(3.14*d))

console.log('5-misol')
var a3=4;
console.log('V='+(a3*a3*a3))
console.log('S='+(6*a3*a3))

console.log('6-misol')
var b1=3;
var b2=5;
var b3=7;
console.log('V='+(b1*b2*b3))
console.log('S='+(2*(b1*b2+b2*b3+b1+b3)))

console.log('7-misol')
var r=5;
console.log('L='+(2*3.14*r))
console.log('S='+(3.14*r*r))

console.log('8-9-misol')
var son1=2;
var son2=8;
console.log("O'rta arifmetigi: "+(son1+son2)/2)
console.log("O'rta geometrigi: "+Math.sqrt(son1*son2))

console.log('10-11-misol')
console.log('a+b='+(son1+son2))
console.log('a*b='+(son1*son2))
console.log('a^2='+(son1*son1))
console.log('b^2='+(son2*son2))
console.log('|a|='+Math.abs(son1))
console.log('|b|='+Math.abs(son2))

console.log('12-misol')
var katet1=9
var katet2=12
console.log('c='+Math.sqrt(katet1*katet1+katet2*katet2))
console.log('P='+(Math.sqrt(katet1*katet1+katet2*katet2)+katet1+katet2))

console.log('13-misol')
var radius1=5
var radius2=8
console.log('S1='+(3.14*radius1*radius1))
console.log('S2='+(3.14*radius2*radius2))
console.log('S3='+(3.14*(radius1*radius1-radius2*radius2)))

console.log('14-misol')
var l=6.28
console.log('R='+(l/(2*3.14)))
console.log('S='+(l*l/(4*3.14)))

console.log('15-misol')
var s=3.14
console.log('d='+(2*(Math.sqrt(s/3.14)))) 
console.log('R='+(Math.sqrt(s/3.14)))

console.log('16-misol')
var x1=45
var x2=10
console.log('|x1-x2|='+(x1>x2?(x1-x2):(x2-x1)))

console.log('17-18-misol')
var xa=4
var ya=5
var xb=3
var yb=7
var xc=9
var yc=6
console.log('AC='+Math.sqrt((xa-xc)*(xa-xc)+(ya-yc)*(ya-yc)))
console.log('BC='+Math.sqrt((xb-xc)*(xb-xc)+(yb-yc)*(yb-yc)))
console.log('AC+BC='+(Math.sqrt((xa-xc)*(xa-xc)+(ya-yc)*(ya-yc))+Math.sqrt((xb-xc)*(xb-xc)+(yb-yc)*(yb-yc))))
console.log('AC*BC='+(Math.sqrt((xa-xc)*(xa-xc)+(ya-yc)*(ya-yc))*Math.sqrt((xb-xc)*(xb-xc)+(yb-yc)*(yb-yc))))

console.log('19-misol')
var y1=35
var y2=22
console.log('Perimetri: '+2*(Math.abs(x1-x2)+Math.abs(y1-y2)))
console.log('Yuzasi: '+(Math.abs(x1-x2)*Math.abs(y1-y2)))

console.log('20-misol')
console.log("Ikki nuqta orasidagi masofa: "+Math.sqrt(Math.pow(x2-x1)+Math.pow(y2-y1)))

console.log('21-misol')
var x3=12
var y3=7
var peri=Math.sqrt(Math.pow(x1-x2)+Math.pow(y1-y2))+Math.sqrt(Math.pow(x3-x2)+Math.pow(y3-y2))+Math.sqrt(Math.pow(x1-x3)+Math.pow(y1-y3))
peri=peri/2
console.log('3burchakning perimetri: '+peri)
console.log('3burchakning yuzi: '+Math.sqrt(peri*(peri-Math.pow(x1-x2)+Math.pow(y1-y2))*(peri-Math.sqrt(Math.pow(x3-x2)+Math.pow(y3-y2))*(peri-Math.sqrt(Math.pow(x1-x3)+Math.pow(y1-y3))))))

console.log('22-misol')
var son2Temp=son2
son2=son1
son1=son2Temp
console.log(son1, son2)

console.log('23-misol')
var son1=2
var son2=8
var son3=10
var son1Temp=son1
son1=son2
son2=son3
son3=son1Temp
console.log(son1,son2,son3)