function verificaPalindromo(string){
    if(!string) return "not valid"

    for(let i = 0; i < string.length; i++){

        if(string[i] != string[string.length - 1 - i] ){
            return false
        }

    }

    return true
}

console.log(verificaPalindromo('socorrammesubinoonibusemmarrocos'));