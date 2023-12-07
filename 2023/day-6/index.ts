import { getInput } from "../utils/input";

function part1() {
    const input = getInput(6)?.split('\n')
    if (input == undefined) process.exit(1)

    console.time("Part 1")
    const time = input[0]
        .split(': ')[1]
        .split(' ')
        .filter(x => x)
    const distance = input[1]
        .split(': ')[1]
        .split(' ')
        .filter(x => x)

    const waysToWin = []

    for (let i = 0; i < time.length; i++) {
        const roundTime = time[i]
        const roundDist = distance[i]
        let roundsWon = 0

        for (let buttonHeld = +roundTime; buttonHeld > 0; buttonHeld--) {
            if (+roundTime - buttonHeld <= 0 || +roundTime == buttonHeld) continue

            const remainingRoundTime = +roundTime - buttonHeld
            const travelDistanceMax = buttonHeld * remainingRoundTime

            if (travelDistanceMax > +roundDist) roundsWon += 1
        }
        waysToWin.push(roundsWon)
    }
    console.log(waysToWin.reduce((acc, curr) => acc * curr))
}

function part2() {
    const input = getInput(6)?.split('\n')
    if (input == undefined) process.exit(1)

    const time = input[0].split(': ')[1].trim().replace(/\s/g, '')
    const distance = input[1].split(': ')[1].replace(/\s/g, '')

    const waysToWin = []
    let roundsWon = 0

    for (let buttonHeld = +time; buttonHeld > 0; buttonHeld--) {
        if (+time - buttonHeld <= 0 || +time == buttonHeld) continue

        const remainingRoundTime = +time - buttonHeld
        const travelDistanceMax = buttonHeld * remainingRoundTime

        if (travelDistanceMax > +distance) roundsWon += 1
    }
    waysToWin.push(roundsWon)

    console.log(waysToWin.reduce((acc, curr) => acc * curr))
}

part1()
part2()