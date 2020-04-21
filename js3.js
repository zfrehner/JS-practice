//zach frehner
//4/19/2020
//js3 heehaw



document.getElementById("submit").addEventListener("click", function(e) {

    let number = document.getElementById("number").value;


    for (let i = 1; i <= number ; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            document.write("Hee Haw!");
        } else if (i % 3 === 0) {
            document.write("Hee!");
        } else if (i % 5 === 0) {
            document.write("Haw!");
        } else {
            document.write(i);
        }
        document.write('<br>');
    }
});




