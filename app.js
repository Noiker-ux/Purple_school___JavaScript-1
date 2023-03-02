const answer = prompt('Сколько будет 7 + или - 15?');
switch (answer) {
    case '-8':
    case '22': 
    case 'Я не робот':
        console.log('Успех');
        break;
    default:
        console.log('Вы робот');
        break;
}


    
