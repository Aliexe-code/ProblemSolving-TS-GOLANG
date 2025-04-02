export function reverseWords(str:string):string{
    let words:string[] = str.split(" ");
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].split('').reverse().join('');
    }
    return words.join(" ")
}


