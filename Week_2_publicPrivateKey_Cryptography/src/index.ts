import bs58 from 'bs58'


//1. Bytes to Ascii
function bytesToAscii(bytesArr : Uint8Array){
    const str = String.fromCharCode(...bytesArr)
    return str;
}
const bytesArr  = new Uint8Array([78, 105, 115, 104, 105, 107, 97, 110, 116]);
const asciiString : string = bytesToAscii(bytesArr);
console.log(`1. Bytes Array to Ascii string = ${asciiString}`);

//2. Ascii to bytes
function asciiToBytes(str : string){
    const arr : number[] = [];
    for( let s of str) {
        arr.push(s.charCodeAt(0))
    }
    return arr;
}
const str  = 'Nishikant';
const byetsArr  = asciiToBytes(str);
console.log("2. Ascii to Bytes Array = ",byetsArr);

//3. UInt8Array to ascii
function uintToAscii(bytesArr : Uint8Array){
    return new TextDecoder().decode(bytesArr);
    // const str = String.fromCharCode(...bytesArr)
    // return str;
}
const bytes  = new Uint8Array([78, 105, 115, 104, 105, 107, 97, 110, 116]);
const ascii : string = uintToAscii(bytesArr);
console.log(`3. Uint-8-Array to Ascii string = "${ascii}"`);

//4. Ascii to UInt8Array

function asciiToUint(str : string){
    return new Uint8Array([...str].map((s) => s.charCodeAt(0)));
}
const asciiStr  = 'Nishikant';
const uintArr : Uint8Array  = asciiToUint(str);
console.log("4. Ascii to Bytes Array = ",uintArr);

//5. Array to Hexadecimal

function arrayToHex(arr5 : Uint8Array) {
    let str = '';
    arr5.forEach((byte) => {
        str += byte.toString(16).padStart(2,'0')
        //toString -> converts to string, as it is what ever it is just changes the type
        //toString(16) -> converts the byte toHexCharacter as 'base16' 
        //since 16 = 2^4,therefore 4-bits = 1byte in Base16(Hex),
        //padStart adds, a padding of '0' in start,  if the binary of some byte = 4 bits only, means 1 char only,
        //like hex(8) => '8', but nedds to be 2 char hence padded with 0 = '08'
    })
    return str;
}
//NOTE: toStrig() -> can on take, 2-binary,8-octal,10-decimal,16-hexadecimal,32-max,
//Hecne, we can't do as toString(64) -. to think as it converted to base64-WRONG
const arr5 =  new Uint8Array([78, 105, 115, 104, 105, 107, 97, 110, 116]);
const hexStr5 = arrayToHex(arr5)
console.log('5. Array of bytes to Hexadecimal string = ', hexStr5);

//6. Hexadecimal to Array

function hexToArray(hexStr6 : string) {
const bytes = new Uint8Array(hexStr6.length/2); //Bcos, 2 Chars of 'HexStr6' = 1 Byte(8bits) 
    for(let i = 0; i<hexStr6.length; i++) {
        bytes[i] = parseInt(hexStr6.substr(i*2,2),16) //parseInt(2chars-of-hexStr6,radix-base-of-any-number)
        //1. substring() uses start and end indexes, while 2. substr() uses a start index and a length.
    }
    return bytes;
}
const hexStr6 = '4920616D206174207468652057656233206576656E74'
const arr6 = hexToArray(hexStr6)
console.log('6. Hexadecimal conversion to bytes array = ', arr6);

//7. Bytes array to Base64

function arrToBase64(arr : Uint8Array) {
    return Buffer.from(arr).toString('base64')
}
const arr7 = new Uint8Array([78, 105, 115, 104, 105, 107, 97, 110, 116]);
const str7 = arrToBase64(arr7)

const binaryArr7 = convertToBinary(arr7)
const binarayStr7 = binaryArr7.toString().split(',').join('');
const binary6BitsArray = to6BitsArray(binarayStr7); //converting my bits String to 6bits division array
const base64Str = toBase64(binary6BitsArray);

console.log('7. Bytes array conversion to Base-64(Scratch Implentation) = ', base64Str);
console.log('7. Bytes array conversion to Base-64 = ', str7);

//8. Bytes array to Base64

function arrToBase58(arr : Uint8Array) {
    return bs58.encode(arr)
}
const arr8 = new Uint8Array([78, 105, 115, 104, 105, 107, 97, 110, 116]);
const str8 = arrToBase58(arr8)

// const binaryarr8 = convertToBinary(arr8)
// const binaraystr8 = binaryarr8.toString().split(',').join('');
// const binary6BitsArraybaseBse58 = to6BitsArray(binaraystr8); //converting my bits String to 6bits division array
const base58Str = toBase58(arr8);

console.log('8. Bytes array conversion to Base-58(Scratch Implentation) = ', base58Str);
console.log('8. Bytes array conversion to Base-58 = ', str8);

//Bonus. 

function toBase64(arr : string[]) {
    const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    let str = '';
    arr.forEach((bits) => {
        const bitsInNum = parseInt(bits, 2); //parse bits-str to bits-int
        // console.log("7th result = ", bitsInNum)
        str += base64Chars[bitsInNum];
    })

    while(str.length % 4 !== 0 ) str += '=';

    return str;
}

function toBase58(arr: Uint8Array) {
    const base58Chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    let str = ''; 
    let bigNum = 0n;

    //convert all bytes of byte-array to 1-bigInteger for base58
    //to convert any number to BigInt,  multiply thatnumber with '256'.
    //Base58 encodes the entire byte array as one big number, not as individual bytes or chunks.
    for(let byte of arr) {
        bigNum = bigNum*256n + BigInt(byte);
        console.log("8. Big number for base58 of bytes array = ", bigNum);
    }

    while(bigNum > 0n) {
        const remainder = Number(bigNum % 58n);
        str += base58Chars[remainder];
        bigNum = bigNum/58n;
    }
    let prefix = '';
    //If any byte which is zero present in array, add 1 for that
    for (let i=0; i<arr.length && arr[i] === 0; i++) {
        prefix += '1';
    }
    
    return prefix + str.split('').reverse().join('');
    /*
    bytes[0] * 256^(n-1) + bytes[1] * 256^(n-2) + ... + bytes[n-1] * 256^0 
                            EQUAl to
    num = num * 256 + byte

    ----------------------------------------
        Step	Current Byte	Computation	Result So Far
    0	78	0 * 256 + 78	78
    1	105	78 * 256 + 105	20073
    2	115	20073 * 256 + 115	5138683
    3	104	5138683 * 256 + 104	1315496840
    4	105	1315496840 * 256 + 105	336767208745
    5	107	336767208745 * 256 + 107	86112325338827
    6	97	86112325338827 * 256 + 97	22045555326740849
    7	110	22045555326740849 * 256 + 110	5643674159593897546
    8	116	5643674159593897546 * 256 + 116	1444780632828027576002 ✅
                        EQUIVALENT
    78  * 256^8 +
    105 * 256^7 +
    115 * 256^6 +
    104 * 256^5 +
    105 * 256^4 +
    107 * 256^3 +
    97 * 256^2 +
    110 * 256^1 +
    116 * 256^0 =  1444780632828027576002 ✅

    
   */
}

function to6BitsArray(bitsString : string) {
    const bitsArr = [];
    let i=0;
    while(i<bitsString.length) {
        let count = 0;
        let temp = '';
        while(count < 6 && i<bitsString.length) {
            temp = temp + bitsString[i];
            i++;
            count++;
        }
        if(temp.length<6){
            temp = temp.padEnd(6,'0');
        }
        bitsArr.push(temp);
    }
    
    return bitsArr;
}

function convertToBinary(arr : Uint8Array) {
    
    let binaryArr : string[] = [];
    arr.forEach((byte) => {
        if(byte <0 || byte >255) {
            throw new Error(" Byte bigger than an int");
        }
        let binaryStr : string = '';
        while(byte>0) {
            binaryStr = (byte%2) + binaryStr; //this concats the remainder infront of binaryStr
            byte = Math.floor(byte/2); //when byte become 1, the rem=0.5 and floor of it = 0 & loop will break
        }
        while(binaryStr.length<8){
            binaryStr = '0' + binaryStr;
        }
        binaryArr.push(binaryStr);
    })
    // console.log("The 8 bits containg binaray array = ", binaryArr)
    return binaryArr;
}

function binaryArrToStr(binaries : string[]) {
    let bitsStr = '';
    binaries.map((s) => {
        bitsStr = bitsStr + s
    })
    return bitsStr;
}

const arrBonus = new Uint8Array([78, 105, 115, 104, 105, 107, 97, 110, 116]);
const binaries = convertToBinary(arrBonus);
const bitsString = binaryArrToStr(binaries);

const bitsArray = to6BitsArray(bitsString)
// console.log("Bonus. Byte converted to a 6bits array = ", bitsArray)