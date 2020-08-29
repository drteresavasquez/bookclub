console.log("Arrays, yo!");

/**
 * @parameter {array} array  DESCRITION.
 */

const arrayMethod = (array) => {
    array.forEach((item, index) => {
        $('body').append(
            `<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`
        )
    })
}

let myArray = "123456";
console.log(typeof myArray)

arrayMethod(myArray)




