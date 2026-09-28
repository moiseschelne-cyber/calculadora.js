const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function calculadora() {
    // 1. Criar a interface da calculadora
    const rl = readline.createInterface({ input, output });

    console.log('=== CALCULADORA ===');

    // 2. Entrada de dados
    const n1 = Number(await rl.question('Digite o primeiro número: '));
    const n2 = Number(await rl.question('Digite o segundo número: '));
    const operacao = await rl.question('Digite a operação (+, -, *, /): ');

    let resultado;

    // 3. Cálculos
    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;

        case '-':
            resultado = n1 - n2;
            break;

        case '*':
            resultado = n1 * n2;
            break;

        case '/':
            if (n2 === 0) {
                console.log('Erro: Divisão por zero não é permitida.');
                rl.close();
                return;
            }

            resultado = n1 / n2;
            break;

        default:
            console.log('Erro: Operação inválida.');
            rl.close();
            return;
    }

    // 4. Saída de dados
    console.log(`Resultado: ${n1} ${operacao} ${n2} = ${resultado}`);

    // 5. Fechar a interface
    rl.close();
}

calculadora();