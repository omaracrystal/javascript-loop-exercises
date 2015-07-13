
//1.
for (var i = 0; i <= 1000; i+=100) {
  console.log(i);
}

//2.
for (var i = 1; i <= 128; i*=2) {
  console.log(i);
}

//.3
for (var i = 0; i <= 10; i+=2) {
  console.log(i);
}

//.4
for (var i = 3; i <= 15; i+=3)
  console.log(i);


//5.
for ( var i = 9; i >= 0; i-=1) {
  console.log(i);
}

//6.
for ( var i = 1; i <= 4; i++) {
  for (g = 0; g < 3; g++)
      console.log(i);
}

//7.
for ( var g = 0; g < 3; g++) {
  for (i = 1; i <= 4; i++)
      console.log(i);
}
