// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

// Функція для отримання даних про користувачів і відображення їх імен
async function fetchAndDisplayUsers() {
    try {
      // Отримуємо дані про користувачів через API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      // Перевіряємо, чи успішно виконаний запит
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      // Перетворюємо отримані дані у формат JSON
      const users = await response.json();
  
      // Знаходимо ul.usersList у DOM
      const usersList = document.querySelector('ul.usersList');
  
      // Очищаємо список перед додаванням нових даних (на випадок повторного виклику)
      usersList.innerHTML = '';
  
      // Створюємо елементи списку li для кожного користувача та додаємо їх у ul
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        usersList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Виклик функції після завантаження сторінки
  window.addEventListener('DOMContentLoaded', fetchAndDisplayUsers);
  