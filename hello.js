function plindrome(str) {

    // console.log(str.length);

    for (let i = str.length - 1; i >= 0; i--) {

        // console.log(` ${i} : ${str.length - i}`);
        // console.log(`${str[i]} : ${str[str.length - i - 1]}`);
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }

        // console.log(`${str[i]} : ${str[str.length - i]} : ${i} : ${str.length - i}`);

    }
    return true;

}

const result = plindrome("k");

console.log(result);