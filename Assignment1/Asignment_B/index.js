var a,b,c,d,e; 
a = 5;
b = 7;

c = a * b; 
d = b / a;
e  = a * a / b + a;

document.write("<p>The value of A is: " + a + "</p>"); //maybe it is not the way that they wanted. They want to show the full var?
document.write("<p>The value of B is: " + b + "</p>");
document.write("<p>The result of multiplying A and B is: " + c + "<p>");
document.write("<p>The result of dividing B and A is: " + d + "<p>");
document.write("<p>The result of: A * 2 / b + a is: " + e + "<p>");
