package problems

import (
	"testing"

	"github.com/aliexecode/golang-ps-unitTest/problems"
)


func TestIsPalindrome(t *testing.T) {
    // Test cases structure: {input, expected result}
    testCases := []struct {
        input    string
        expected bool
    }{
        // True cases - standard palindromes
        {"racecar", true},
        {"madam", true},
        {"level", true},
        {"deed", true},
        
        // True cases - case insensitive
        {"Racecar", true},
        {"MaDaM", true},
        {"A", true},  // Single character is always a palindrome
        {"", true},   // Empty string is considered a palindrome
        
        // False cases
        {"hello", false},
        {"world", false},
        {"golang", false},
        {"palindrome", false},
        {"abcde", false},
    }

    for _, tc := range testCases {
        t.Run(tc.input, func(t *testing.T) {
            result := problems.IsPalindrome(tc.input)
            if result != tc.expected {
                t.Errorf("IsPalindrome(%q) = %v; expected %v", 
                    tc.input, result, tc.expected)
            }
        })
    }
}