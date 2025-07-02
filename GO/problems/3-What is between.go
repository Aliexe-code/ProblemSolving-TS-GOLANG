package problems

func Between(a, b int) []int {
     result := make([]int,b-a+1)
	 for i :=range result {
		result[i]= i+a
	 } 
	 return result
}
