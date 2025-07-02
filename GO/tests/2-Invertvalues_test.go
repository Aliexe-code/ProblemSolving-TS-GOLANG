package problems

import (
	"reflect"
	"testing"

	"github.com/aliexecode/golang-ps-unitTest/problems"
)


func TestInvert (t *testing.T){
	testCases := []struct{
		input []int
		expected []int
	}{
		 {[]int{1, 2, 3, 4, 5}, []int{-1, -2, -3, -4, -5}},
        {[]int{-1, -2, -3, -4, -5}, []int{1, 2, 3, 4, 5}},
        {[]int{0, 0, 0}, []int{0, 0, 0}},
        {[]int{}, []int{}},
        {[]int{10, -20, 30, -40, 0}, []int{-10, 20, -30, 40, 0}},
	}
	for _,tc := range testCases{
		result := problems.Invert(tc.input)
		if !reflect.DeepEqual(result, tc.expected){
			t.Errorf("Invert(%v) = %v; expected %v", tc.input, result, tc.expected)
		}
	}
}