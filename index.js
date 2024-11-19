// Находим кнопки по ID и перенаправляем на страницу GitHub
document.addEventListener("DOMContentLoaded", function () {
  const myButton = this.getElementById("myButton2");

  myButton.addEventListener("click", function () {
    window.open("https://github.com/BakhtovarDaleri", "_blank"); // Открываем в новой вкладке
  });
});
// Находим кнопки по ID и перенаправляем на страницу GitLab
document.addEventListener("DOMContentLoaded", function () {
  const myButton = this.getElementById("myButton3");

  myButton.addEventListener("click", function () {
    window.open("https://gitlab.skillbox.ru/bakhtovar_rakhmatov", "_blank"); // Открываем в новой вкладке
  });
});

// Находим элемент по классу
const myButton1 = document.querySelector(".btn-1");

// Добавляем обработчик события
myButton1.addEventListener("click", function () {
  // При клике на кнопку перенаправляем пользователя к секции id="contacts"
  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
});

const form = document.querySelector("#bookingForm");

// Добавляем обработчик события на отправку формы
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Получаем данные из формы
  const fullName = document.querySelector("#fullName").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  // Формируем текст сообщения
  const telegramMessage = `
    Детали бронирования:
    Полное имя: ${fullName}
    Почта: ${email}
    Номер телефона: ${phone}
    Тема: ${subject}
    Сообщение: ${message}
  `;

  // Данные для отправки в Telegram
  const botToken = "8029396925:AAGs5xNwPBe6awGpdktEsqe14j2EhngO9P8";
  const chatId = "5450770011";

  // Отправляем данные в Telegram
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: telegramMessage,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert("Данные успешно отправлены в Telegram!");
        form.reset(); // Очищаем форму после успешной отправки
      } else {
        alert("Ошибка при отправке данных в Telegram.");
      }
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке.");
    });
});
