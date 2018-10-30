$(document).ready(function () {
    console.log("hey, im ready :)")

    let minesLeft

    $(".start").click(function () {
        startGame()
    })

    function startGame(){
        let level = $('#game-level :selected').val()
        console.log(level)
    }

});

