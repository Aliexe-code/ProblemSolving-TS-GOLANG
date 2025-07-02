package problems

import (
	"reflect"
	"testing"

	"github.com/aliexecode/golang-ps-unitTest/problems"
)

func TestBetween(t *testing.T) {
    tests := []struct {
        a, b     int
        expected []int
    }{
        {1, 4, []int{1, 2, 3, 4}},
        {3, 7, []int{3, 4, 5, 6, 7}},
        {5, 5, []int{5}},
        {-2, 2, []int{-2, -1, 0, 1, 2}},
    }
	 for _, tt := range tests {
        result := problems.Between(tt.a, tt.b)
        if !reflect.DeepEqual(result, tt.expected) {
            t.Errorf("Between(%d, %d) = %v; want %v", tt.a, tt.b, result, tt.expected)
        }
    }
}