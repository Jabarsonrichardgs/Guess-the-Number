var b = document.getElementById('intiai'); 



function checker() {
    var d =Math.floor(Math.random() * 10) + 1 ;
    //console.log(d);
    var e = b.value;
    //console.log(e)

    
  
    if (d == e) {
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').innerHTML = 'Congrats!, You have Guessed the Number';
    } else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerHTML = 'No, Your Guess is Wrong';
    }
}
