"use·strict";

let userAnswer = prompt("Введите страну для доставки.");

if (userAnswer === null) {
  console.log("Отмененно пользователем");
} else if (userAnswer !== null && userAnswer !== "") {
  userAnswer = userAnswer.toLocaleLowerCase();
  switch (userAnswer) {
    case "китай":
      alert("Доставка в Китай будет стоить 100 кредитов");
      break;
    case "чили":
      alert("Доставка в Чили будет стоить 250 кредитов");
      break;
    case "австралия":
      alert("Доставка в Австралию будет стоить 170 кредитов");
      break;
    case "Индия":
      alert("Доставка в Индию будет стоить 80 кредитов");
      break;
    case "ямайка":
      alert("Доставка в Ямайку будет стоить 120 кредитов");
      break;
    default:
      alert("В вашей стране доставка не доступна");
  }
}
