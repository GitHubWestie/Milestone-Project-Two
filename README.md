# Concentration Card Game

![mockup](/assets/images/mockup.png)

## Description

Concentration is a card based memory game. Cards are laid face down on a surface and two cards are flipped to be face up each turn. The object of the game is to reveal matching pairs of cards, until all cards have been turned over. The game can be played just for fun, as a memory exercise or competitively against the clock and with larger, more complex decks. It can also be played as a mulitplayer, round based game, although for the purposes of this project it is single player.

[The site is live and can be found here](https://githubwestie.github.io/Milestone-Project-Two/)

------------------------

### User Experience

As a first Time user I want:

* To be entertained

* To know how to play

* To challenge and improve my memory

As a returning user I want:

* To challenge and keep improving my memory

------------------------

### Structure

A single page layout containg title, how to play section and then the game area. 

#### Page Goals

* Encourage users to stay and play. 

* Be simple and intuitive to use.

* Help improve memory in a fun way

#### User Goals

* Play a game and be entertained. 

* Kill some time

* Train their brain

------------------------

### Skeleton

![wireframe](/assets/wireframes/wireframe.png)

------------------------

### Surface

#### Styling
As the game is an old classic card memory game being delivered in a modern way I decided to base the styling on an old computer game blended with more modern elements.

#### Title
![title](/assets/images/game-title.png)

For the title I used the Jersey 10 font from google fonts as it has that old 8bit video game look about it. The gradient was inspired by old video game menu systems.

#### How To Play 
![how-to-play](/assets/images/how-to-play.png)

This provides a brief explanation of the main objective of the game and how to achieve it. The background of this section was inspired by an old rpg menu system that used excessive amounts of gradient. 

#### Game -Area
![game-area](/assets/images/game-area.png)

The game area contains all of the interactive elements required to play the game. The card elements are generated using JavaScript rather than being written into the HTML which should make the game easily scalable in the future when implementing different difficulty levels.

#### Cards
![cards](/assets/images/cards.png)

The character cards are based on a concept art style that you could expect to see for a modern or retro video game. They are AI generated but based on some popular JRPG video game characters.

#### Modal
![modal](/assets/images/congrats-modal.png)

Upon successfully meeting the games requirements for completion a modal pops up with a congratulations message and a button to allow the user to easily play again. Clicking play again resets all game elements back to their default states and reshuffles the card deck so the experience is different every time.

------------------------

### Future Feature Implementations

* Score counter

* Time Limit

* Scaleable card reveal times based on difficulty

* Dynamic grid size dependant on difficulty

* Scaleable variety of images/symbols to match based on difficulty

* Deck randomiser so returning users see a variety of cards on consecutive visits

------------------------

### Deployment

The site is deployed via GitHub Pages. Steps to deploy are as follows:

1. Log in to GitHub and select `Milestone-Project-Two` from the repo list
2. Select `settings` from the top navigation bar
3. From the menu on the left select `Pages`
4. Under `Build and Deployment`, in the `Source` drop-down list, select `Deploy from branch`.
5. Still under `Build and Deployment`, in the `Branch` drop-down lists, select `Main` and `/(root)`
6. Click `Save`
7. The project will be built and a `url` and `button` will appear at the top of the page. Use one of these to navigate to the deployed project.

### **Run Locally**

#### Clone from URL
1. Log in to GitHub and select `Milestone-Project-Two` from the repo list
2. To the right side of the page fine the green `code` button and click to see the drop down menu.
3. Under the `Local` tab, select the `URL` under https or click the copy button to the right of the URL to copy.
4. Create a folder for the repo.
5. In your chosen IDE change the working directory to the directory chosen for the repo.
6. Open the git bash cli and type `git clone` followed by the copied URL
7. Wait for the repo to be cloned

------------------------

### Testing

#### UX - Scope Testing

| Expected | Actual Result |
|----------|---------------|
| **As a first time user I want:** |
| To be entertained | The game provides an entertaining experience with minmal learning curve so users can get into the game very quickly |
|To know how to play | For users that are not familiar with the game there is a how to play positioned directly above the game area. The game is easy to learn and the how to is always there for referring back to if needed | 
| To challenge and improve memory | The positioning of the cards is randomised on every play meaning users memory will always be challenged |
| To easily use the site | The site is simple to use with minimal fuss and simple design concepts such as a pointer over interactive elements that intuitively tell the user what is interactive. Consecutive plays are made easy by the modal that resets the game |
| **As a returning user I want** |
| To play quickly | The page design is minimalistic making it easy and fast to jump into a game |
| To continue to challenge memory | The positioning of the cards is randomised on every play meaning users memory will always be challenged |
| To pass some time | The game is easy to pick up and put down, making it a great time filler |

#### Manual Testing

The game was tested manually across several popular desktop browsers and mobile devices.

Browsers

* Chrome
* Edge
* Firefox

Mobile Devices

* iPad
* iPhone (various generations)
* Galaxy S10+

![test-sheet](/assets/images/game-test-sheet.png)

#### Automated Testing

[W3C Markup Validator](https://validator.w3.org/)

One error was found in the markup validator which had come across with copied code from google fonts. This was fixed by removing the trailing slash at the end of the tag.

![markup-error](/assets/images/w3cMarkupError.png)

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

No errors were found in the CSS file

![w3c-css](/assets/images/w3c-css.png)

[JShint](https://jshint.com/)

JShint found some missing semi-colons which were quickly rectified.

![jshint](/assets/images/jshint-results.png)

[Google Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk)

The page was run through Googe Lighthouse for desktop and mobile. Results from Lighthouse were inconsistent despite no changes being made between tests and any changes that were made to try and improve these inconsistencies made no difference. 

Desktop
![lighthouse desktop](/assets/images/lighthouse-desktop.png)


Mobile
![lighthouse mobile](/assets/images/lighthouse-mobile.png)

------------------------

### Credits

#### References

[Concentration wiki](https://en.wikipedia.org/wiki/Concentration_(card_game))

[MDN](https://developer.mozilla.org/en-US/) 

[W3Schools](https://www.w3schools.com/)

[CodeCademy](https://www.codecademy.com/) 


#### Images

Images generated using AI generators

[Copilot](https://www.microsoft.com/en-gb/microsoft-365/business/copilot-for-microsoft-365) in Windows

[Dreamup](https://www.deviantart.com/) from DeviantArt

Brain image supplied by [Vector Portal](https://vectorportal.com/vector/brain-vector-image/15991) and modified by me

#### Code

* Modal tutorial from [freeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/)

* Shuffle function based on the Fisher Yates method from [freeCodeCamp](https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/)

* Text gradient from Kevin Powell [YouTube](https://www.youtube.com/@KevinPowell/shorts)

### Acknowledgements

Big thanks again to my mentor Ronan for guidance and reassurance.