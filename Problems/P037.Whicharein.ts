export function inArray(a1: string[], a2: string[]): string[] {
    const resultSet= new Set<string>()

    for(const str of a1){
        if(a2.some(word=> word.includes(str))){
            resultSet.add(str)
        }
    }

    return Array.from(resultSet).sort()
}
const a1 = ["tarp", "mice", "bull"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));
