"use·strict";

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const userAnswer = prompt("Какое количество дроидов Вы хотите купить?");

if (userAnswer === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = Number(userAnswer) * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    const creditsLast = credits - totalPrice;
    console.log(
      `Вы купили ${userAnswer} дроидов, на счету осталось ${creditsLast} кредитов.`
    );
  }
}
