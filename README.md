URL: https://pages.git.generalassemb.ly/ct-redd/js-tamagotchi/

Here is my first attempt at a Tamagotchi-like game simulation. I used setInterval() and created an increment function to increase the different metrics of the pet's status throughout gameplay. I used addEventlisteners on buttons so that the user can alleviate the pet's issues.

User Stories:
1. When I load the page, I get to name my virtual pet
2. On the main screen I can see my virtual pet and its metrics, like how hungry or sleepy it is.
3. When one of the metrics gets high, I'm able to reduce the number. If its hunger is high, I can feed it; if its sleepiness is high, I can tell it to take a nap; and when it's boredom is high, I can play with it.
4. If I neglect my pet too much, there are consequences.

In my code, I had it such that when the metrics reach '10', the game is over, but in the gameplay, the numbers would only reach to 8 before ending the game, so I coded it to end at '12'.


![GA logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# Tamagotchi

### Overview

Let's start out with something fun—**a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges**.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Technical Requirements

Your app must:
<!-- * **HAVE ITS OWN REPO, under your github account. NOT A FORK.** -->
* **Git 20+ commits** Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed.
<!-- * **Include Wireframes and User Stories in the README**  -->
<!-- * **Wireframe:** - Basically draw out what your game will look like. You can use paper or any wireframe tool you find online. -->
* **User Stories** - Wording should center around how a user interacts with your game, for example:
    1.  The user click starts and the level starts
    2.  When the user hits the ```f key``` a fire ball is catuplulated at a target. 
* **Render a game in the browser**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **JavaScript** for **DOM manipulation** (no Canvas)
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A working MVP (minium viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP.
* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.
* **A ``README.md`` file** with an explanation of what the project is, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable).  In this project, also include your wireframes in the readme. 
* A 10 minute presentation to your classmates and instructor, illustrating:
    * App functionality
    * Triumphs
    * Challenges
    * Words of Wisdom
    * Code snippets

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things  Javascript)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_
* **[Example Readme Files](https://github.com/SEIR-7-06/example-readmes)** _(a great reference for planning materials)_

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, element inspector, alert statements, etc) to debug and solve problems
* During the day, work through problems in class & **ask questions when you need to!** We're here to help prevent you from burning through your time with wild goose chases.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version. There should be _at least_ a couple dozen commits. 
* **Consult documentation resources** (MDN, etc.) at home to better understand what you’ll be getting into.
* **Plan to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Specifications
  
* Create a repo for your tamagotchi pet
* Create a Class (JS Class, look at your notes if your forget) for your tamagotchi
* Instantiate your Tamagotchi
* Display a character of your choice on the screen to represent your pet
* Display the following metrics for your pet: 
 * Hunger (1-10 scale)
 * Sleepiness (1-10 scale)
 * Boredom (1-10 scale)
 * Age
* Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
* Add the ability to name your pet.
* Style the page.
* Increase your pet's age every x minutes
* Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
* You pet should die if Hunger, Boredom, or Sleepiness hits 10.

### Extras
* Animate your pet across the screen while it's alive. Check out using [jQuery](https://jquery.com/) to animate your pet with jQuery's [animate method](https://api.jquery.com/animate/).
* Morph your pet at certain ages.
* Have your tamagotchi give birth to baby tamagotchi...
* ...with special powers (extend the class)!
* Add an `excercise()` method to your tamagotchi, that affects certain properties
* Add anything you can think of... use your imagination!

