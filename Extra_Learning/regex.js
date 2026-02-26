// let str = "Om Kotawala , Rudra Kotawala , Darshna Kotawala "
// let pattern = /Kotawala/g;

// console.log(pattern.test(str));
// console.log(str.match(pattern));

// console.log(str.replace(pattern, "Shaktisinh Kotawala"));

//We can make use of regex when we we want to match any of the string with an expression and when we want to replace a group of same words from the document

// let pattern2 = /[aeiou]/;

// let word = "kjplhdf";

// if((pattern2.test(word)) == true){
//     console.log(`${word} contains the vowel`)
// }
// else{
//     console.log(`${word} doe not contain the vowel`)
// }

// let pattern3 = /^Hello/i      //It means the sentence/Word should start with the hello
// let pattern4 = /world$/i

// let greetings = "heLloworld goodWorld"

// console.log(pattern4.test(greetings));


//Validating the email

// let pattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/

// let email = "om234@gmail.com"

// if(pattern.test(email) === true){
//     console.log("You have a valid email");
// }

// else{
//     console.log("Please enter the valid email");
    
// }

// Password Suggestor and Validator

let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[^\s]{8,}$/

let str1 = "QWERTYUIOPASDFGHJKLZXCVBNM"
let str1_1 = "qwertyuiopasdfghjklmnbvcxz"
let str2 = "1234567890"
let str3 = "@$!%*?&"


function suggestPasword() {
    let arr = []
    let i = 0
    let randomvalue = Math.trunc((Math.random() * 100) + 8 )

    while(i< randomvalue){

        arr[i] = str1[Math.trunc(Math.random() * str1.length)]
        i++

        arr[i] = str1_1[Math.trunc(Math.random() * str1_1.length)]
        i++

        arr[i] = str2[Math.trunc(Math.random() * str2.length)]
        i++

        arr[i] = str3[Math.trunc(Math.random() * str3.length)]
        i++
    }

    let password = arr.join("")
    return password;
}

let password = suggestPasword()

console.log(password);

console.log(regex.test(password))

console.log(suggestPasword());
