# Precourse: Recursion

A **recursive function** is one that calls itself. In this assignment you will use recursion to solve three problems. Your learning in this section will be a lot more self-guided - read these resources, try to understand them, and reach out on our #slack-overflow channel or ask during the Precourse AMAs for additional help!

## Objectives

In this assignment you will use JavaScript and recursion to:

- 🖐 create possible hands for _Rock, Paper, Scissors_.
- 💻 traverse the DOM and get elements by their class name.
- 🧵 turn JavaScript values into `JSON` strings.

## Basic Requirements

- [ ] Fork  and clone this repository following the Code Chrysalis git flow instructions.

- [ ] Open the `testrunner.html` file in your browser. You will see a list of failing tests.

Write code in the `src/rockPaperScissors.js`files to make the tests pass.


* [ ] Read blog posts on recursion: 
  - [Visualizing Recursion](https://medium.com/@sidiousvic/visualizing-recursion-b8107bd56b01)
  - [Rock Paper Scissors Part 1](http://blog.fanofyan.com/recursion/)
  - [Rock Paper Scissors Part 2](http://blog.fanofyan.com/recursion-with-javascript-pt-2/)

* [ ] `rockPaperScissors`:  Write a function that generates every sequence of throws a single player could play over a three-round game of rock-paper-scissors. Your output should look something like:

  ```js
  [["rock", "rock", "rock"],
  ["rock", "rock", "paper"],
  ["rock", "rock", "scissors"],
  ["rock", "paper", "rock"],
  ...etc...
  ]
  ```

- [ ] After you finish it, change your function so that it return answers for any number of rounds. Example:
  ```js
  rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
  ```

Write code in the `src/getElementByClassName.js` file to make the tests pass.  

The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

```js
const className = 'example';
const elements = document.getElementsByClassName(className);
```

But we want you to write your own implementation!

* [ ] `getElementByClassName`: A practical instance of recursion. The **DOM** is a 🌳 tree structure and recursion is an efficient way to traverse it.

* [ ] See links provided in Resources for some help

Write code in the `src/stringifyJSON.js` file to make the tests pass. What does the output for stringifyJSON look like? 

- [ ] Play around with JSON.stringify to find out!

- [ ] `stringifyJSON`:  Write code to recreate the `JSON.stringify` method, which converts a JavaScript value to a **JSON** string. This is another very practical use of recursion.

- [ ] When you have completed all the tasks, follow the Code Chrysalis git flow instructions to create a `pull request`.

- [ ] Read our [Recursion](/tutorials/recursion.md) tutorial if you need more explanation!

## Resources

- Watch [Fun Fun Function's Recursion video](https://www.youtube.com/watch?v=k7-N8R0-KY4)
- Useful for `getElementsByClassName`
  - [JavaScript Info: DOM Nodes](https://javascript.info/dom-nodes)
  - [JavaScript Info: Walking the DOM](https://javascript.info/dom-navigation)
