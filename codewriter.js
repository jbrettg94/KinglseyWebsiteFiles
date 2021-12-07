let inputCode = ``;

const createArray = (string) => {
    let newArray = string.split("\n");
    //for (let i = 0 ; i < newArray.length - 1 ; i++ ) {
        //newArray[i] = `${newArray[i]}>`;
    //}
    //newArray.splice(-1);
    return newArray;
}

const addLinkCode = (arr) => {
    for (let i = 0 ; i < arr.length ; i++ ) {
        let temporaryString = arr[i].toString();
        let secondArray = temporaryString.split(`"`);
        let linkText = `${secondArray[1]}`;
        arr[i] = `<a href="${linkText}" class="resumelink" target="_blank">\n${arr[i]}\n</a>\n`;
    }
    return arr;
}

const createFinalString = (arr) => {
    let finalString = arr.join(" ");
    return finalString;
}

console.log(createFinalString(addLinkCode(createArray(inputCode))));

