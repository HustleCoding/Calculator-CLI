import { question } from "readline-sync";

function main(): void {
    const firstString: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondString: string = question('Enter second number:\n');
}

function isOperator(operator: string): boolean {
    switch(operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

main();