/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted)
 */

/*У треугольника сумма любых двух сторон должна быть больше третьей. Иначе две стороны просто "лягут" на третью и треугольника не получится. Пользователь вводит длины трех сторон. Программа должна определять, может ли существовать треугольник при таких длинах. */

function isTriangle (a, b, c) {
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      return false;
    } //closes if statement
    else {
      if ((a <= 0) || (b <= 0) || (c <= 0)) {
      return false;
      } //closes nested if statement
      else {
      return true;
      } //closes nested else statement
    } //closes else statement
  }//closes function isTrangle
  S