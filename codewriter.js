let inputCode = `<img src="images/3d_models/Book.jpg" class="image-gallery"/><img src="images/3d_models/Bottle.jpg" class="image-gallery"/><img src="images/3d_models/Character_FinalRender.png" class="image-gallery"/><img src="images/3d_models/Cup.jpg" class="image-gallery"/><img src="images/3d_models/Maya_Drone_Color.png" class="image-gallery"/><img src="images/3d_models/Remote_FinalRender.jpg" class="image-gallery"/>`;

const createArray = (string) => {
    let newArray = string.split(">");
    for (let i = 0 ; i < newArray.length - 1 ; i++ ) {
        newArray[i] = `${newArray[i]}>`;
    }
    newArray.splice(-1);
    return newArray;
}

const addLinkCode = (arr) => {
    for (let i = 0 ; i < arr.length ; i++ ) {
        let temporaryString = arr[i].toString();
        let secondArray = temporaryString.split(`"`);
        let linkText = `${secondArray[1]}`;
        arr[i] = `<a href="${linkText}" class="resumelink" target="_blank">${arr[i]}</a>`;
    }
    return arr;
}

const createFinalString = (arr) => {
    let finalString = arr.join(" ");
    return finalString;
}

console.log(createFinalString(addLinkCode(createArray(inputCode))));

