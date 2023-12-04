import { getInput } from "../utils/input"

function part1() {
    const input = getInput(4)?.split('\n')
    if (input == undefined) process.exit(1)

    let points = []

    for (const line of input) {
        const winningNumbers = line.split(': ')[1].split(' | ')[0].split(' ').filter((str) => str != '')
        const yourNumbers = line.split(': ')[1].split(' | ')[1].split(' ').filter((str) => str !== '')
        const winningCards = yourNumbers.filter((element) => winningNumbers.includes(element))

        if (winningCards.length >= 1) {
            let accumulator = 1
            for (const element of winningCards) {
                accumulator *= 2
            }
            accumulator /= 2
            points.push(accumulator)
        }
    }

    console.log(points.reduce((a, c) => a + c))
}

function part2() {
    const input = getInput(4)?.split('\n')
    if (input == undefined) process.exit(1)

    type Card = {
        num: number
        winning: string[]
        have: string[]
    }

    let result = 0

    // Basically take our input array and turn it into an array of objects for further processing
    const cards = input.map((line, num) => {
        let [left, right] = line.split(': ')[1].split(' | ')
        const winning = left
            .split(' ')
            .map(v => v.trim())
            .filter(v => v)
        const have = right
            .split(' ')
            .map(v => v.trim())
            .filter(v => v)
        return { num, winning, have }
    })

    const wonCards = new Map<number, Card[]>()

    cards
        .map((card: Card) => card.have.filter(h => card.winning.includes(h)).length)
        .forEach((numWon, cardNum) => {
            wonCards.set(cardNum, cards.slice(cardNum + 1, cardNum + numWon + 1))
        })

    while (cards.length > 0) {
        result++
        const c = cards.pop()!
        cards.push(...wonCards.get(c.num)!)
    }

    console.log(result)
}

part1()
part2()