import { getInput } from "../utils/input";

function part1() {
    let input = getInput(1)?.split("\n")
    if (input == undefined) process.exit(1)

    const numberInput: string[] = []
    let sum = 0

    for (const i in input) {
        let number = input[i].replace(/\D/g, '');
        if (number.toString().length === 1) {
            number = `${number}${number}`
        }

        const firstNumber = number.charAt(0);
        const lastNumber = number.charAt(number.length - 1);

        numberInput.push(firstNumber + lastNumber)
    }

    for (const i in numberInput) {
        sum += Number(numberInput[i])
    }

    console.log(sum)
}

function part2() {
    const wordsToNums: Record<string, number> = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    }

    function replaceWordsWithNumbers(string: string): string[] {
        const numbers = []

        for (let i = 0; i < string.length; i++) {
            const curr = string[i]
            if (Number.isFinite(+curr)) {
                numbers.push(curr)
                continue
            }

            for (let key in wordsToNums) {
                if (string.substring(i).startsWith(key))
                    numbers.push(`${wordsToNums[key]}`)
            }
        }

        return numbers
    }

    const input = getInput(1)?.split('\n')
    if (input == undefined) process.exit(1)

    const numbers = input
        .map(line => replaceWordsWithNumbers(line))
        .map(digits => digits[0] + digits[digits.length - 1])

    const sum = numbers.map(number => +number).reduce((a, b) => a + b, 0)

    console.log(sum)
}

part1()
part2()