# Problem Solving with Go

Welcome to my problem-solving repository! This is a collection of solutions to various algorithmic and coding challenges, implemented in **Go**. Each problem is thoroughly tested with Go's built-in testing framework.

---

## Problems Solved

### 001. Is it a Palindrome?

- **Link**: [https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/go](https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/go)
- **Solution File**: [problems/1-Isitapalindrome.go](./problems/1-Isitapalindrome.go)
- **Test File**: [tests/1-Isitapalindrome_test.go](./tests/1-Isitapalindrome_test.go)
- **Description**: A function that checks if a given string (case insensitive) is a palindrome.

### 002. Invert Values

- **Link**: [https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/go](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/go)
- **Solution File**: [problems/2-Invertvalues.go](./problems/2-Invertvalues.go)
- **Test File**: [tests/2-Invertvalues_test.go](./tests/2-Invertvalues_test.go)
- **Description**: A function that inverts the values of each element in an array (multiplies by -1).

### 003. What is between?

- **Link**: [https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/go](https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/go)
- **Solution File**: [problems/3-What is between.go](./problems/3-What%20is%20between.go)
- **Test File**: [tests/3-What is between_test.go](./tests/3-What%20is%20between_test.go)
- **Description**: A function that returns an array of integers from a to b, inclusive.

## 🛠️ Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aliexecode/golang-ps-unitTest.git
   cd golang-ps-unitTest
   ```

2. **Running tests**:
   ```bash
   go test ./tests
   ```

3. **Running specific test**:
   ```bash
   go test ./tests -run TestIsPalindrome
   ```

4. **Running tests with verbose output**:
   ```bash
   go test ./tests -v
   ```

## 📝 Contributing

Feel free to add more problems and solutions! Just make sure to:
1. Create the solution in the `problems` directory
2. Create corresponding tests in the `tests` directory
3. Update this README with the new problem information
