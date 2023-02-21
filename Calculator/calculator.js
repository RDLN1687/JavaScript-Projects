const Calculator = {
Display_Value:'0',
First_Operand: null,
wait_Second_Operand: false,
operator: null,
};

function Input_Digit(digit) {
    const {Display_Value, wait_Second_Operand} = Calculator;

    if (wait_Second_Operand===true) {
        Calculator.Display_Value = digit;
        Calculator.wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
}

function Input_Decimal(dot) {
    if (Calculator.wait_Second_Operand ==='true') return;
    if (Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

function Handle_operator(Next_operator) {
    const { First_Operand, Display_Value, operator} = Calculator;
    const value_of_input = parseFloat (Display_Value);
    
    if (operator && Calculator.wait_Second_Operand) {
        Calculator.operator = Next_operator;
        return;
    }

    if (First_Operand == null) {
        Calculator.First_Operand = value_of_input;
    } else if (operator) { 
        const Value_now = First_Operand || 0;
        let result = Perform_Calulation[operator](Value_now,value_of_input);
        result = Number(result).toFixed (9);
        result = (result*1).toString();
        Calculator.Display_Value = result;
        Calculator.First_Operand = result;
}

Calculator.wait_Second_Operand = true;
Calculator.operator =Next_operator;
}

const Perform_Calulation = {
    '/' : (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*' : (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+' : (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-' : (First_Operand, Second_Operand) => First_Operand = Second_Operand,
    '=' : (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_reset () {
    Calculator.Display_Value ='0';
    Calculator.First_Operand = null;
    Calculator.wait_Second_Operand = false;
    Calculator.operator = null;
}

function update_Display() {
    const display = document.querySelector ('.calculator-screen');
    Display_Value =Calculator.Display_Value;
}

update_Display ();
    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click' , (event) => {
    const {target} = event;

    if (!target.matches ('button')) {
        return;
    }
    if (target.classList.contains ('operator')) {
        Handle_operator(target.value);
        update_Display();
        return
    }

    if (target.classList.contains ('decimal')) {
        Input_Decimal (target.value);
        update_Display();
        return;
    }

    if (target.classList.contains('all-clear')) {
        Calculator_reset();
        update_Display();
        return;
    }

    Input_Digit(target.value);
    update_Display();
})




    