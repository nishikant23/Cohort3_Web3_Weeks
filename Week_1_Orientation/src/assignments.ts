import crypto from "crypto";

//Q1: Give me an input string that outputs a SHA-256 hash that starts with 00000

function findHashWithPrefix(prefix : string) {
    let i = 0;

    while(true) {
        const inp = i.toString();
        const hashStr = crypto.createHash('sha256').update(inp).digest('hex');
        
        if(hashStr.startsWith(prefix)){
            return { input : inp, hash : hashStr}
        }
        i++;
    }
}
const output_1 = findHashWithPrefix('00000');
console.log("ASSIGNMANET-1 Soln. : The number whose hash starting with five-zeros is = ", output_1);

//Q:2 What if I ask you that the input string should start with 100xdevs ? How would the code change?What if I ask you that the input string should start with 100xdevs ? How would the code change?
function findInputSting(inpStr : string, prefix : string) {
    let i = 0;

    while(true) {
        const inp = inpStr + i.toString();
        const hashStr = crypto.createHash('sha256').update(inp).digest('hex');
        
        
        if(hashStr.startsWith(prefix)){
            return { input : inp, hash : hashStr}
        }
        i++;
    }
}
const output_2 = findInputSting('100xdevs', '00000');
console.log("ASSIGNMANET-2 Soln. : The number whose hash starting with five-zeros is = ", output_2);

//Q:3 What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

function findNounce(input: string, prefix: string) {
    let i=0;
    

    while(true) {
        const inputStr = input + i.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {
                input : inputStr,
                hash : hash,
                nounce : i.toString(),
            }
        }
        i++;
    }
}

const output_3 = findNounce(`harkirat => Raman | Rs 100 
    Ram => Ankit | Rs 10`, "00000");
console.log('ASSIGNMANET-3 Soln. :Nounce for a given string whose has starts with prefix zeros = ', output_3);