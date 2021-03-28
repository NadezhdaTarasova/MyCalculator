let counter = document.querySelector('.account');
let result = document.querySelector('.result');
let flag = false;

function input(digit){//ввод чисел от 1 до 9
	counter.value += digit;
}

function inputOperator(operator){ 
    /* минус данной функции: она не позволяет калькулятору работать более чем с двумя числами (зато можно бесконечно измениять результ операции с ними)
       плюс данной функции: пользователь не сможет ввести бред вроде +++++ или ---- или +-/*% и т.д.
    */
    if (counter.value.includes('+') == false && counter.value.includes('-') == false && counter.value.includes('%') == false && counter.value.includes('*') == false && counter.value.includes('/') == false)
    {
    	counter.value += operator;
    	flag = true; 
    }
}

function inputDot(){//чтобы у каждого из операндов могла быть только одна точка 
   	if (counter.value.includes('.') == false){
   		counter.value += '.';
   		flag = false;
   	}
   	else if (flag == true){
   		counter.value += '.';
   		flag = false;
   	}
}

function inputZero(){//чтобы нельзя было вводить несколько нулей перед первымчислом
   	if (counter.value != '0') 
   	counter.value += 0;
}

function clean(){//сброс 
   	counter.value = '';
   	result.value = '';
}

function back(){//удаление последнего символа 
   	counter.value = counter.value.substring(0, counter.value.length-1);
}

function equal(){//вычисление результата
  	if (counter)
	result.value = eval (counter.value);// знаю, что eval() лучше не использовать, но для калькулятора самое то, как мне кажется
    counter.value = result.value;//чтобы можно было работать с результатом вычисления дальше (в какой-то мере перекрывает минус функции inputOperator)
    if (eval(counter.value) == undefined){
    	counter.value = '';
   	    result.value = '';
    }
    if (eval(counter.value) == Infinity){
    	counter.value = '';
   	    result.value = "Not allowed";
    }
}	









