CONTENTS OF THIS FILE
---------------------
   
 * Introduction
 * What it can do
 * Usage
 * Automated tests
 * Project Structure
 * Decisions made
 * Deploy


 INTRODUCTION
------------

This is a technical test for Deviget, it has the objetive of showing the developer skills and logical thinking. It consist on a REST API and a web client for the game operations.


USAGE (API)
------

the project has 2 routes

GET /game/:level

    - Returns a new game of the level choosen
    - Example usage
        GET https://minesweeper-deviget.glitch.me/game/beginner
    - Exampĺe Response
        {
            "board": <bidimensional array>,
            "numRows": 10,
            "numColums": 10,
            "state": "pristine"
        }

POST /game

    - inputs a click on a x,y coordinate
    - Example usage
        POST https://minesweeper-deviget.glitch.me/game/beginner
        body = { 'click': 'left', 'x': 0, 'y': 0 }
    - Exampĺe Response
        {
            "board": <bidimensional array>,
            "numRows": 10,
            "numColums": 10,
            "state": "pristine"
        }

USAGE (CLIENT)
------

On the browser

    GET / 
        - Webview for creating a new board and playing (Run out of time for doung the clicking D:)

AUTOMATED TESTS
------
For triggering the automated tests : npm test (on project directory)

PROJECT STRUCTURE
------

The project has the following structure
    
├── controllers
|   └── game-controller.js
├── routes
|   └── game.js
├── views
|   └── game.html
├── public
|   └── gameClient.js
├── test
|   └── server.specs.js


For the API, the route consumer teh game controller that has the logical layer.

For the web client the views cpf and status consume the game for logical layer, it consumes the API throught AJAX calls.


DECISIONS MADE
------

On the interview i was asked for the testing tool i use, so i found interesting starting with the test, to do some TDD, it took me more time to get to the list of items because of that.

AS the list has a priority order i started with the API and them i went to the client, i was almost finishing but then i got stuck on the clicking of the fields, i was already over the 5 hours so i stopped.


DEPLOY
------

I used https://glitch.com to easily deploy the project, you can join it on

https://glitch.com/edit/#!/join/d4157191-04d8-48b8-b1ab-276fc2da3f42

to restart the server just click on the show(live button)