let inputCode = `<img src="images/traditionals/Charcoal_Still_Life_With_Fur.jpg" class="image-gallery"/>
<img src="images/traditionals/Gouache_Painting_Man_With_Cub.jpg" class="image-gallery"/>
<img src="images/traditionals/Graphite_Still_Life_In_Scenery.jpg" class="image-gallery"/>
<img src="images/traditionals/IMG_3973.JPG" class="image-gallery"/>
<img src="images/traditionals/Kingsley-Wentink_2DDesignFall2018.png" class="image-gallery"/>
<img src="images/traditionals/Pen_Patterns_Inside_Shapes.jpg" class="image-gallery"/>
<img src="images/traditionals/Pen_Radial_Symmetry.jpg" class="image-gallery"/>
<img src="images/traditionals/Pen_Symmetrical_Drawing.jpg" class="image-gallery"/>
<img src="images/traditionals/Prismacolor_Color_Pencils_Surrealism.jpg" class="image-gallery"/>
<img src="images/traditionals/traditional_one.JPG" class="image-gallery"/>
<img src="images/traditionals/Wentink_Final_Painting.jpg" class="image-gallery"/>`;

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

