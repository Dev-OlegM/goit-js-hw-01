"use·strict";

const total = 100;
let ordered = 50;
const a = "На складе недостаточно товаров!.";
const b = "Заказ оформлен, с вами свяжется менеджер.";

if (ordered > total) {
  console.log(a);
} else {
  console.log(b);
}

ordered = 20;
if (ordered > total) {
  console.log(a);
} else {
  console.log(b);
}
ordered = 80;
if (ordered > total) {
  console.log(a);
} else {
  console.log(b);
}

ordered = 130;
if (ordered > total) {
  console.log(a);
} else {
  console.log(b);
}
