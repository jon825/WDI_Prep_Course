//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
    if (choice == 1) {
        reply = "play games"
    }
    else if (choice == 2) {
        reply = "do work"
    }

    /*
    write conditional logic here using if, else if, and else


    */

    console.log(choice);
    console.log(reply)
}

ask();
