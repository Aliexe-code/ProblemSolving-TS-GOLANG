export function gradingStudents(grades: number[]): number[] {
    if(grades.length === 0) return []
    for (let i=0; i<grades.length;i++){
        if(grades[i]<38) continue
        let nextGrade = Math.ceil(grades[i]/5)*5
        if(nextGrade - grades[i] < 3){
            grades[i] = nextGrade
        }
    }
    return grades
}