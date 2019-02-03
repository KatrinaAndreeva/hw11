// Получить пользователей (users) от сервера
//  https://jsonplaceholder.typicode.com используя класс
//   созданный на занятии. Получив ответ от сервера вывести 
//   имена пользователей на страницу. При клике на имя пользователя 
//   в произвольном месте должна появиться подробная информация о нем. 
//   Для визуальной части можно использовать bootstrap или другие фреймворки.


const url = 'https://jsonplaceholder.typicode.com';
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();

// httpClient.get('https://jsonplaceholder.typicode.com/todos', (response) => {
//     console.log(JSON.parse(response));
// });

// httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
//     console.log(JSON.parse(response));
// });

const data = {
    body: 'Some body',
    userId: 1,
    title: 'Some title'
};
httpClient.post('https://jsonplaceholder.typicode.com/todos', JSON.stringify(data), (response) => {
    console.log(response);
});