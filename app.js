const urlAdress = 'http://purpleschool.ru/course/javascript';

function destructurisationUrl(urlAdress) {
    const destructurisationUrlArray = urlAdress.split('/');
    let [protocol , _ , adress,...other] = destructurisationUrlArray;
    if (protocol === 'https:' || protocol === 'http:'){
        console.log(`Доменное имя: ${protocol.slice(0,-1)}\nДоменное имя: ${adress}\nПуть: ${'/'+other.join('/')}`);
        return destructurisationUrlArray;
    } else {
        console.log('Это не URL');
        return;
    }
};
destructurisationUrl(urlAdress);