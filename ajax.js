// Получить пользователей (users) от сервера
//  https://jsonplaceholder.typicode.com используя класс
//   созданный на занятии. Получив ответ от сервера вывести
//   имена пользователей на страницу. При клике на имя пользователя
//   в произвольном месте должна появиться подробная информация о нем.
//   Для визуальной части можно использовать bootstrap или другие фреймворки.


const url = 'https://jsonplaceholder.typicode.com/users';
class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.addEventListener('load', () => callback(xhr.responseText));
        //xhr.addEventListener("load",uploadComplete,false);
        xhr.send();
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
httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    let jsonRes = JSON.parse(response),
        html = '';
    for (let i = 0; i < jsonRes.length; i++) {
        html += '<div componentid="' + jsonRes[i].id + '" class="trow">';
        html += '<span>' + jsonRes[i].name + '</span>';
        html += '<div class="dropdown hide">';
        html += '<div class="row">' + jsonRes[i].username + '</div>';
        html += '<div class="row">' + jsonRes[i].email + '</div>';
        html += '<div class="row">' + jsonRes[i].address.street + ' ' + jsonRes[i].address.suite + ' ' + jsonRes[i].address.city + ' ' + jsonRes[i].address.zipcode + '</div>';
        html += '<div class="row">' + jsonRes[i].address.geo.lat + ' ' + jsonRes[i].address.geo.lng + '</div>';
        html += '<div class="row">' + jsonRes[i].phone + '</div>';
        html += '<div class="row">' + jsonRes[i].website + '</div>';
        html += '<div class="row">' + jsonRes[i].company.name + ' ' + jsonRes[i].company.catchPhrase + ' ' + jsonRes[i].company.bs + '</div>';
        html += '</div>';
        html += '</div>';
    }
    document.getElementById("top_div_users").innerHTML = html;
});
document.addEventListener('click', function(e) {
    if (e.target.tagName != 'SPAN') return;
    let dropdown = e.target.nextElementSibling;
    if (dropdown.classList.contains('hide')) {
        let dropdownshow = document.querySelectorAll('.dropdown.show');
        for (let i = 0; i < dropdownshow.length; i++) {
            dropdownshow[i].className = "dropdown hide";
        }
        dropdown.className = "dropdown show";
    }
    else {
        dropdown.className = "dropdown hide";
    }
});
