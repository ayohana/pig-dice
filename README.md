# Pig Dice

#### JavaScript Constructor Exercise for Epicodus, 01.29.2020

#### By **Adela Darmansyah and Andriy Veremeyeyev**

## Description

This is a webpage where two users can play Pig Dice against each other.
Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins!

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses index.html | Homepage with user input form |
| **Program Gathers User Input** | Click "Roll" | `Console:` Random number from 1 - 6 |
| **Program Displays Output of Die Roll**| Click "Roll"  | Random number from 1 - 6 |
| **Program Applies Condition of Rolling Number 1**| "Roll" | "1" then clear total points |
| **Program Applies Condition of Other Numbers 2 - 6**| "Roll" | `Console:` random number inside player's scope |
| **Program Applies Condition of "Hold"** | "Hold" | Total output of the round adds to player's final points |
| **Program Creates a Second Player**| "Roll" or "Hold" | Depends on choice |
| **Program Applies Winning Condition**| Final Points reach 100 | Player Wins! |

## Setup/Installation Requirements

1. Clone this repository.
2. Open `index.html` in your preferred browser.

## Known Bugs

* No known bugs at this time.

## Technologies Used

* JavaScript
* jQuery
* HTML
* CSS

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **Adela Darmansyah and Andriy Veremeyeyev**