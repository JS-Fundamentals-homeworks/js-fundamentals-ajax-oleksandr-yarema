// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

async function fetchUserCityByName(userName) {
    try {
      // Отримуємо дані про користувачів через API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      // Перевіряємо, чи успішно виконаний запит
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      // Перетворюємо отримані дані у формат JSON
      const users = await response.json();
  
      // Шукаємо користувача за іменем
      const user = users.find(u => u.name.toLowerCase() === userName.toLowerCase());
  
      // Знаходимо елемент для відображення міста
      const userCityElement = document.getElementById('userCity');
  
      // Якщо користувача знайдено, відображаємо його місто, інакше показуємо повідомлення
      if (user) {
        userCityElement.textContent = user.address.city;
      } else {
        userCityElement.textContent = 'User not found';
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Додаємо обробник події для кнопки
  const getUserButton = document.getElementById('getUserButton');
  getUserButton.addEventListener('click', () => {
    const userNameInput = document.getElementById('userNameInput').value;
    fetchUserCityByName(userNameInput);
  });