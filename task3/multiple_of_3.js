var arr = [];
newArray = [];

var number = 0;

for (var i = 0; i <5; i++) {
        var number = prompt('Введите элемент массива номер  '+ i );   
         arr.push(number);
      }




for (var i = 0; i < arr.length; i++) {
          
        if (arr[i] % 3 === 0) 
             newArray.push(arr[i]);
          }

    alert("Числа кратные 3 : \n " + newArray);