const dict = require('./dict.json')
console.log(Object.entries(dict))
const dictAr = Object.entries(dict)

const msg = '11111011111111110001111111001011111101011111111100110111111111110001001111110100111100110111111100101111010010111111000111111111110001101111110101110011011111111111000110111101001111110010111111001011011111110100111100110111111111110001011101100011111110111111111001110111111111110001111110111111101011111111110001111110111111100111111111110001111011111110111111110100111111111100010011111101001100111111111100011101111111111010111110111111101011111011111101001111001111111111000100111111010011001111111111000111111011111111110001110011111011111110011111110010111110111111000111011111111111000111111110101111011101111111111100011111111101111111010111111110001100111111111100011111111111000111111111110001111111101011110100111111101011111111110001001111110110111111011011010011111110001111111001111111111100011111101111110100111111111100011111111010111101110111111111110001111111011011110111111110000011111110011101'
console.log(msg)

var decoded = msg

// while(decoded.includes('1') || decoded.includes('0')){
// while(decoded.includes('11111111110001')){    
    // decoded = decoded.replace(/11111111110001/g, ' ')
    // console.log(decoded)
    // for(var i = dictAr.length-1; i >= 0; i--){
    //     const OnesZeroes = new RegExp((dictAr[i][1]), 'g')//.replace(/`"`/g,``)
    //     decoded = decoded.replace(OnesZeroes, dictAr[i][0])
    //     console.log()
    //     console.log(decoded)
    // }
    
// }
decoded = decoded.replace(new RegExp((dictAr[26][1]), 'g'), dictAr[26][0])
decoded = decoded.replace(new RegExp((dictAr[25][1]), 'g'), dictAr[25][0])
// for(var i = dictAr.length - 18; 9 <= i && i < 25; i++){
//     console.log(i)
//     const OnesZeroes = new RegExp((dictAr[i][1]), 'g')//.replace(/`"`/g,``)
//     decoded = decoded.replace(OnesZeroes, dictAr[i][0])
//     console.log()
//     console.log(decoded)
// }
//     for(var i = dictAr.length - 18; i >= 0; i--){
//         console.log(i)
//         const OnesZeroes = new RegExp((dictAr[i][1]), 'g')//.replace(/`"`/g,``)
//         decoded = decoded.replace(OnesZeroes, dictAr[i][0])
//         console.log()
//         console.log(decoded)
//     }
// for(var i = dictAr.length - 21; 6 <= i && i <= 8; i++){
//     console.log(i)
//     const OnesZeroes = new RegExp((dictAr[i][1]), 'g')//.replace(/`"`/g,``)
//     decoded = decoded.replace(OnesZeroes, dictAr[i][0])
//     console.log()
//     console.log(decoded)
// }
// for(var i = dictAr.length - 24; 3 <= i && i <= 5; i++){
//     console.log(i)
//     const OnesZeroes = new RegExp((dictAr[i][1]), 'g')//.replace(/`"`/g,``)
//     decoded = decoded.replace(OnesZeroes, dictAr[i][0])
//     console.log()
//     console.log(decoded)
// }
// for(var i = dictAr.length - 26; 0 <= i && i <= 2; i++){
//     console.log(i)
//     const OnesZeroes = new RegExp((dictAr[i][1]), 'g')//.replace(/`"`/g,``)
//     decoded = decoded.replace(OnesZeroes, dictAr[i][0])
//     console.log()
//     console.log(decoded)
// }
console.log(decoded.includes('1') || decoded.includes('0'))
var tt = '11111111111111111'
console.log((tt.substring(0, 7)).includes('1111110'))
console.log()
console.log(9 >= dictAr.length - 18 >= 24)
console.log((dictAr[25][1]))//.replace(/`"`/g,``))
// console.log(decoded.replace(/11111111110001/g, ' '))

// console.log([...decoded])
var varyingLength = decoded.length
for(var i = 0; i <= varyingLength; i++){
    // console.log(i)
    // console.log(varyingLength)
    checker(decoded.charAt(i-1))
}


function checker(i) {
    decoded.substring()
        if(decoded.substring(i, i+7).includes('111111')){
            console.log('HIII')
            sixBitChecker(decoded.substring(i+11), i)
           } else if(decoded.substring(i, i+5).includes('1111')){
            console.log('4')
            sixBitChecker(decoded.substring(i+5), i)
           } else if(decoded.substring(i, i+3).includes('11')){
            console.log('2')
            sixBitChecker(decoded.substring(i+4), i)
           } else if(decoded.substring(i, i+7).includes(' ')){
            console.log('0')
            sixBitChecker(decoded.substring(i+10), i)
    } //else console.log('uhh..')
}

function sixBitChecker(decodedHere, i) {
    console.log(decodedHere.substring(i+6, i+10) + '         '  + i)
        if(decodedHere.substring(i+6, i+10).includes('0000')){
            decoded.substring(i, i+10).replace(dict[9][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0001')){
            decoded.substring(i, i+10).replace(dict[10][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0010')){
            decoded.substring(i, i+10).replace(dict[11][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0011')){
            decoded.substring(i, i+10).replace(dict[12][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0100')){
            decoded.substring(i, i+10).replace(dict[13][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0101')){
            decoded.substring(i, i+10).replace(dict[14][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0110')){
            decoded.substring(i, i+10).replace(dict[15][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('0111')){
            decoded.substring(i, i+10).replace(dict[16][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1000')){
            decoded.substring(i, i+10).replace(dict[17][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1001')){
            decoded.substring(i, i+10).replace(dict[18][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1010')){
            decoded.substring(i, i+10).replace(dict[19][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1011')){
            decoded.substring(i, i+10).replace(dict[20][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1100')){
            decoded.substring(i, i+10).replace(dict[21][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1101')){
            decoded.substring(i, i+10).replace(dict[22][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1110')){
            decoded.substring(i, i+10).replace(dict[23][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
           } else if(decodedHere.substring(i+6, i+10).includes('1111')){
            decoded.substring(i, i+10).replace(dict[24][0])
            console.log('decoded.substring(i, i+10)')
            varyingLength = varyingLength-10
    } else console.log('idk..')
}

console.log(varyingLength)