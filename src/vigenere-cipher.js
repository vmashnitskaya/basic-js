class VigenereCipheringMachine {
    constructor(option = true) {
        this.option = option;
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
    }
    encrypt(string, key) {
        this.checkParameters(string, key);

        let result = '';
        string = string.toLowerCase();
        key = key.toLowerCase();

        for (let i = 0, a = 0; i < string.length; ++i, ++a) {
            if (/[a-z]/.test(string[i])) {
                let num = (this.alphabet.indexOf(string[i]) + this.alphabet.indexOf(key[a % key.length])) % this.alphabet.length;
                result += this.alphabet[num].toUpperCase();
            } else {
                result += string[i];
                a = --a;
            }
        }

       return this.machineType(result);
    }


    decrypt(string, key) {
       this.checkParameters(string, key);

        let result = '';
        string = string.toLowerCase();
        key = key.toLowerCase();

        for (let i = 0, a = 0; i < string.length; ++i, ++a) {
            if (/[a-z]/.test(string[i])) {
                let num = (this.alphabet.indexOf(string[i]) - this.alphabet.indexOf(key[a % key.length]) + this.alphabet.length) % this.alphabet.length;
                result += this.alphabet[num].toUpperCase();
            } else {
                result += string[i];
                a = --a;
            }

        }
       return this.machineType(result);
    }

    machineType(string) {
        if (this.option == true) {
            return string;
        } else {
            return string.split('').reverse().join('');
        }
    }
    checkParameters(string, key){
        if (!string || !key) throw new Error();
    }
}


module.exports = VigenereCipheringMachine;

