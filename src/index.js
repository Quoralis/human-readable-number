module.exports = function toReadable (number) {
    const One = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const Two = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const Decade = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const Hundred = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];



    let arr  = Array.from(String(number),Number)
    let StrNumber = ''

    if (number ===0 ) {
        StrNumber = 'zero'
    }

    if (number  >= 100) {
        StrNumber += Hundred[Math.floor(number/100)]+ " "
            if (number % 100 > 10 && number % 100 < 20) {
                StrNumber += Two[Math.floor(number % 10)]
            } else if(number % 100 <10){
                StrNumber += One[Math.floor(number % 10)]
            }else {
                StrNumber += Decade[Math.floor(number % 100 / 10)]+ " " +One[Math.floor(number % 10)]

            }
    }

    if (number >= 20 && number <= 99) {
        StrNumber += Decade[Math.floor(number/10)] + " " + One[Math.floor(number % 10)]

    }
    if (number  >= 10 && number <= 19) {
        if (number === 10){
            StrNumber += "ten"
        }
        StrNumber += Two[Math.floor(number % 10)]
    }
    if (number  > 0 && number <= 9) {
        StrNumber += One[number]
    }

    return  StrNumber.trim()
}

