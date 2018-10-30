$(document).ready(function () {
    console.log("hey, im ready :)")

    let minesLeft
    let level

    $(".start").click(function () {
        startGame()
    })

    function startGame() {
        level = $('#game-level :selected').val()
        console.log(level)
        $.get(`/game/${level}`, function (data, status) {
            console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
            renderGame(data)
        });
    }


    function renderGame(data) {
        if (level == 'beginner')
            minesLeft = 10
        else if (level == 'intermediate')
            minesLeft = 40
        else
            minesLeft = 99

        renderBoard(data.board)
    }

    function renderBoard(board){
        for(let i = 0;i<board.length;i++){
            let row = board[i]
            let tr = "<tr>"
            for(let j=0;j<row.length;j++){
                if(row[j]=='!'){
                    minesLeft--
                }
            }
            $('#board').append()
        }
    }

});
