let a =parseInt(prompt("กรอกคะแนนเก็บ"))
if (a >30){
    alert("ผิดพลาดคะแนนเกินกว่าที่กำหนด");
    
}else if (a < 0){
    alert("คำแนนน้อยเกินไป");
}
let b = parseInt(prompt("กรอกคะแนนสอบกลางภาค"))
if (b >30){
    alert("ผิดพลาดคะแนนเกินกว่าที่กำหนด");
}else if (b < 0){
    alert("คำแนนน้อยเกินไป");
}
let c =parseInt(prompt("กรอกคะแนนสอบปลายภาค"))
if (c >40){
    alert("ผิดพลาดคะแนนเกินกว่าที่กำหนด");
}else if (b < 0){
    alert("คำแนนน้อยเกินไป");
}
let point = a+b+c;
if(point >=80){
    confirm(point+"Point"+" Grad: 'A'");
}else if(point >=75){
    confirm(point+"Point"+" Grad: 'B+'");
}else if(point >=70){
    confirm(point+"Point"+" Grad: 'B'");
}else if(point >=65){
    confirm(point+"Point"+" Grad: 'C+'");
}else if(point >=60){
    confirm(point+"Point"+" Grad: 'C'");
}else if(point >=55){
    confirm(point+"Point"+" Grad: 'D+'");
}else if(point >=50){
    confirm(point+"Point"+" Grad: 'D+'");
}
else {
    confirm(point+"Point"+" Grad: 'F'");
}