package main

import (
	"sort"
	"strconv"
	"strings"
)

func part1(input []string) int {
	left := make([]int, len(input))
	right := make([]int, len(input))
	sum := 0

	for i, line := range input {
		col := strings.Split(line, "   ")
		
		left_int, err := strconv.Atoi(col[0])
		right_int, err := strconv.Atoi(col[1])
		
		if err != nil {
			panic(err)
		}

		left[i] = left_int
		right[i] = right_int
	}
	
	sort.Ints(left)
	sort.Ints(right)

	for i := range input {
		if left[i] > right[i] {
			sum += left[i] - right[i]
		} else {
			sum += right[i] - left[i]
		}
	}

	return sum
}