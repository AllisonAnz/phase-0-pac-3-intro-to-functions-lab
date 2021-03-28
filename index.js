//shout(string) receives one argument and returns it in all caps
function shout(string) {
    return string.toUpperCase();
}

// whisper(string) receives one argu. and returns it in all lowercase
function whisper(string){
    return string.toLowerCase();
}

// logShout(string) recieves one arg. and logs it in all caps using console.log()
function logShout(string){
    console.log(string.toUpperCase());
}

// logWhisper takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string){
    console.log(string.toLowerCase());
}

// SayHiToGrandma(string)
//  returns "I can't hear you!" if `string` is lowercase 
//  returns "YES INDEED!" if `string` is uppercase 
//  returns "I love you, too." if `string` is "I love you, Grandmo."
function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
        return `I can\'t hear you!`
    }   
    if (string.toUpperCase() === string) {
        return `YES INDEED!`
    }   
    if (string === 'I love you, Grandma.') {
        return "I love you, too."
    }
}