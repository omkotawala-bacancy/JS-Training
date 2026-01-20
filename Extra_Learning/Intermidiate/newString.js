let sentence = "My name is om kotawala"

let capitalizedSentence = sentence.split(" ")
                                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                   .join(" ")

console.log(capitalizedSentence);
