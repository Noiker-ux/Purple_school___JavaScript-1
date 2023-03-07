const arr = ['!', 'JS', 'люблю', 'Я'];
let stroka='';

for (let i=arr.length-1; i>-1; i--){
    if ((arr[i]=='!') || (arr[i]=='.') || (arr[i]=='?')){
        stroka=stroka.slice(0, -1);
        stroka+=arr[i]+' ';
    } else {
    stroka+=arr[i]+' ';
    }
}
console.log(stroka);