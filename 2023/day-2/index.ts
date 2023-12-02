import { getInput } from "../utils/input"

function part1() {
    const input = getInput(2)?.split("\n")
    if (input == undefined) process.exit(1)

    let possibleGames = []

    for (const line of input) {
        const rounds = line.split(': ')[1].split('; ')
        const id = +line.split(': ')[0].replace(/[^0-9]/g, "")
        let possible = true

        for (const round of rounds) {
            let cubes = round.split(', ')

            for (const cube of cubes) {
                let number = +cube.replace(/[^0-9]/g, '')

                switch (true) {
                    case cube.includes("red"):
                        if (number > 12) possible = false
                        break;
                    case cube.includes("green"):
                        if (number > 13) possible = false
                        break;
                    case cube.includes("blue"):
                        if (number > 14) possible = false
                        break;
                }
            }
        }

        if (possible) {
            possibleGames.push(id)
        }
    }

    console.log(possibleGames.reduce((a, c) => a + c))
}

function part2() {
    const input = getInput(2)?.split("\n")
    if (input == undefined) process.exit(1)

    let powers = []

    for (const line of input) {
        const rounds = line.split(': ')[1].split('; ')
        let red = 0, green = 0, blue = 0

        for (const round of rounds) {
            let cubes = round.split(', ')

            for (const cube of cubes) {
                let number = +cube.replace(/[^0-9]/g, '')

                switch (true) {
                    case cube.includes("red"):
                        if (number > red) red = number
                        break;
                    case cube.includes("green"):
                        if (number > green) green = number
                        break;
                    case cube.includes("blue"):
                        if (number > blue) blue = number
                        break;
                }
            }
        }
        powers.push(red * green * blue)
    }

    console.log(powers.reduce((a, c) => a + c))
}

part1()
part2()