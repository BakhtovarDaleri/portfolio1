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

document.addEventListener("DOMContentLoaded", function () {
  // Находим форму по ID
  const form = document.getElementById("contacts");

  //Добавляем обработчик события
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Получаем значения из полей формы
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Проверяем, заполнены ли обязательные поля
    if (!fullName || !email || !phone || !subject || !message) {
      alert("Пожалуйста, заполните все обязательные поля.");
      return; // Перекращаем выполнение, если поля не заполнены
    }

    // Выводим в консоль для проверки
    console.log("Полное имя", fullName);
    console.log("Электронная почта:", email);
    console.log("Номер телефона", phone);
    console.log("Тема:", subject);
    console.log("Сообщение:", message);

    // Очистка полей формы после отправки
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    // Сообщение об успешной отправке
    alert("Ваша заявка успешно отправлена!");

    form.requestFullscreen();
  });
});

function toggleMenu() {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("active");
}

// Скрыть  меню при клике вне его
document.addEventListener("click", function (event) {
  const navbar = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");

  // Проверяем, если клик был вне меню и кнопки гамбургера
  if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
    navbar.classList.remove("active");
  }
});

// Дополнительная проверка на клик внутри меню
navbar.addEventListener("click", function (event) {
  event.stopPropagation();
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

  const message = `Детали бронирования:\Полное имя: ${fullName}\Почта: ${email}\Номер телефона: ${phone}\Тема: ${subject}`;
  const botToken = "8029396925:AAGs5xNwPBe6awGpdktEsqe14j2EhngO9P8";
  const chatId = "5450770011";

  // Отправляем запрос на сервер для отправки сообщение в телеграмм
  fetch("http://localhost:3000/sendMessage", {
    method: "POST", // Метод для отправки данных
    headers: {
      "Content-Type": "application/json", // Отправляем в формате Json
    },
    body: JSON.stringify({
      token: botToken,
      chatId: chatId,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Если ответ успешный, выводим сообщение об успешной отправке
      if (data.ok) {
        alert("Бронирование успешно отправлено!");
        form.reset();
      } else {
        // Если произошла ошибка, выводим сообщение об ошибке
        alert("Ошибка при отправке бронирования.");
      }
    })
    .catch((error) => {
      // Выводим ошибку в консоль если она возникла
      console.error("Ошибка:", error);
    });
});
