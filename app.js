const urlAdress = 'https://purpleschool.ru/course/javascript';

function destructurisationUrl(urlAdress) {
    const destructurisationUrlArray = urlAdress.split('/');
    console.log(`Доменное имя: ${destructurisationUrlArray}`);
    let [protocol , _ , adress,...other] = destructurisationUrlArray;
    console.log(`Доменное имя: ${protocol.slice(0,-1)}\nДоменное имя: ${adress}\nПуть: ${'/'+other.join('/')}`);
    return destructurisationUrlArray;
};
destructurisationUrl(urlAdress);