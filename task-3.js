"use·strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userAnswer = prompt("ВВведите пароль!");
if (userAnswer === null) {
  message = "Отменено пользователем!";
} else if (userAnswer === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (userAnswer !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
