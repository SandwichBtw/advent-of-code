package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	input, err := os.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}

	lines := strings.Split(string(input), "\n")

	fmt.Println("Part 1:", part1(lines))
	fmt.Println("Part 2:", part2(lines))
}