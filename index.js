import PromptSync from "prompt-sync";
import chalk from "chalk";

const Input = PromptSync();

const num1 = parseInt(Input('Digite um numero '))
const num2 = parseInt(Input('Digite outro numero '))
console.log(num1+num2)
//Testando