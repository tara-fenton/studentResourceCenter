# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Slackbot Lab

### Objectives
- Install and configure all utilities needed to run a `Hubot`
- Write a script that allows `Hubot` to interact with users on Slack

### Agenda
- Introduction to `Hubot`
- Independent Practice with `Hubot`
- In Class Project Time

---
## Introduction

Your assigned bot and its Slack API token can be found in `slack-api-token-assignments.md`, located in this folder. **Sit next to the person(s) you're sharing a bot with because the bot will respond to all of your scripts.** You must submit independent projects.

For our Unit 1 project, we're going to build our own chat bot in Slack using `Hubot`. `Hubot` is a framework for creating chat bots, *i.e.* it can be used to create new bots for use in a variety of chat environments, including Slack. Using `Hubot`, you can create bots, also often confusingly called Hubots, which follow script(s) written in JavaScript to perform a variety of tasks, from configuring new servers to updating code on GitHub. In this project, we will use `Hubot` to interact with members of our class Slack.

### Terms

Let's define some terms we'll need to know for this lab.

**[Slack bot user](https://api.slack.com/bot-users):** You have probably seen automated "bots" on platforms like Twitter. Essentially, a bot is a script that is programmed to interact with users as if it's a person. In Slack, these are called "bot users," or "bots" for short. Slackbot is a bot user that is built into Slack, and you've probably heard from it when you joined. In this lab, we'll begin creating our own bots for use in the class Slack.

**[Hubot](https://hubot.github.com/):** `Hubot` is a framework built by GitHub to speed up the process of developing bot users on a variety of chat platforms, including Slack. It's built using `Node.js` and `CoffeeScript` (see below), and it includes built-in functionality for performing common bot tasks, *e.g.* replying to users. We'll be using `Hubot` to create our bot users.

**[CoffeeScript](http://coffeescript.org/):** `CoffeeScript` is a variant of JavaScript. Some people claim that `CoffeeScript` makes JavaScript more readable and faster to type. `CoffeeScript` has to go through an extra step to be translated into JavaScript so that it can be run in our browsers and `Node.js` since both environments only understand normal JavaScript.

`Hubot` scripts are often written using `CoffeeScript`; you don't need to know how to write `CoffeeScript` for this lab, but be aware that it will come up in `Hubot` examples and documentation. If you encounter a `CoffeeScript` file, *e.g.* the `example.coffee` file included with `Hubot`, and want to clarify what it's doing, **you can use the `CoffeeScript` converter on [CoffeeScript's website](http://coffeescript.org/) to translate it into JavaScript**.

**[Heroku](https://www.heroku.com/):** Heroku is a platform for hosting and running apps in the cloud. We refer to it to as a Platform-as-a-Service, or PaaS. We'll use Heroku to host the code for our bot, so the bot can be run independently of our machines. Otherwise, we would need to have our machines constantly connected to the internet and have `Hubot` running for our bot to function. Luckily for us, Heroku's free tier will suffice for this project. We'll be using `git` to push our app to Heroku.

**[Yeoman](https://yeoman.io):** Yeoman is a set of tools which provide scaffolding for getting web apps up and running quickly. We'll be using a Yeoman tool called `yo`, which takes care of things like dependencies, build tasks, and configurations, so we donâ€™t have to.

---
## Independent Practice with `Hubot`

### Installation and Configuration

In order to get our bots up and running, we need to perform a number of installations, so please follow these steps carefully.

---

First, you'll need to [sign up for a free Heroku account](http://heroku.com). Next, [download the Heroku toolbelt](https://toolbelt.heroku.com/). This set of tools allows us to talk to Heroku's servers using the command line.

In a terminal window, type the following commands in order:

**Create a directory for your bot outside of a `git` directory:**

```bash
mkdir myhubot
```

This directory will house files for this lab. It has to be outside of a ` git` directory, *e.g.* your local fork, because we'll need to deploy only this directory when using Heroku, and having nested `git` repositories is a pain. Since we're installing `Hubot`, you won't be submitting this entire folder for your project, but rather the single or multiple script files used for your bot's logic.

**Move into that new directory:**

```bash
cd myhubot
```

**Install Hubot and its dependencies***:

```bash
sudo npm install -g hubot coffee-script yo generator-hubot
```

Note that you will be prompted to type in the password for your laptop. Depending on how your laptop is configured, you may not need `sudo`, but you most likely will.

__*__ `CoffeeScript`, `yo`, and the `Hubot` generator

**Generate a Hubot bot using `yo`:**

```bash
yo hubot --adapter="slack"
```

**You will be prompted to answer a few questions regarding your bot:**

 * Owner: `type in your full name`
 * Bot Name: `whatever you like`
 * Description: `hit enter`

**Install hubot-slack dependency:**

```bash
sudo npm install hubot-slack --save
```

Note that you will be prompted to type in the password for your laptop. Depending on how your laptop is configured, you may not need `sudo`, but you most likely will.

The `--save` flag will save the dependency to your `package.json` file. It's used by `npm` to determine which modules you'll need.

---

### Testing Your Hubot Locally

We can run `Hubot` locally on our machines, and then deploy to `Heroku`, or some other service, later once we're done. We'll add the actual code we need for our `Hubot` in the next section.

Note that this should be in the same folder you were working in previously, *e.g.* `myhubot`.

```
HUBOT_SLACK_TOKEN=[your Slack API token] ./bin/hubot --adapter slack
HUBOT_SLACK_TOKEN=xoxb-433408327094-441520254341-qrQbDAWv8fjznOWmRa6VGgwR ./bin/hubot --adapter slack

HUBOT_SLACK_TOKEN=xoxb-450864093458-450260014129-W4puv7g5QRzD6qRK2Xxb8aXW
```

Hit `ctrl-c` to exit the process. **You'll need to restart the local bot whenever you make a change to a script that you want to test.**

---

### Interacting with Your Hubot

Now we have our very own bot that's willing and able to do our bidding! Letâ€™s take it for a test drive.

#### Scripts

To create instructions for your `Hubot`, you need to add a JavaScript file to the `scripts` folder. You can add multiple scripts files to that folder and every script will execute when `Hubot` is run. Note that your JavaScript files should have the `.js` extension.

Note that in every script, we need to `export` our functions as a `module`. We'll cover `modules` later on, but for now, you'll need this to wrap every single function in your `Hubot` scripts.

```js
module.exports = function(bot) {
    // use `bot` as the object to run `Hubot` methods on
    // note that we could have given the parameter any valid JavaScript variable
    // name, e.g. `robot`, rather than `bot`
};
```

For example, in a newly created `test.js` located in the `scripts` folder, we might have:

```js
module.exports = function(bot) {
    bot.hear(/test/, function(res) {
        return res.send("Robot is running!");
    });
};
```

Whenever your bot sees the text `"test"` or is direct messaged it, it will respond with `"Robot is running!"`. Read below for more of an explanation on `.hear()`. Note that you'll need to restart your local `Hubot` instance using the instructions under **Testing your bot locally** to test this script.

For multiple `Hubot` methods, nest them inside the outer function:
```js
module.exports = function(bot) {
    bot.hear(/test/, function(res) {
        return res.send("Robot is running!");
    });

    bot.hear(/hi/, function(res) {
        return res.send("Hello!");
    });
};
```

Let's look at a few commands that will help us build our `Hubot` scripts.

#### Listening
##### `.hear()`

The `.hear()` method listens for a specific phrase anywhere in the Slack room. You don't have to mention your bot in order to get a response. You can also direct message your bot for the response.

In the example below, when the bot hears `"Hello!"`, it will respond with `"Hi there!"`:

```js
bot.hear(/Hello!/, function(res) {
    // res is a parameter
    return res.send("Hi there!");
});
```

So the following interaction would happen in the Slack room or in a direct message with the bot __*__:
```
tim: Hello!
bot: Hi there!
```

__*__ Look at `slack-api-token-assignments.md` for the name of your bot in Slack. The name of your bot in Slack and the `parameter` we're using in `module.exports` are **not** related.

#### `.respond`

`.respond()` is similar to `.hear()`, except it will only be triggered when someone specifically mentions the bot using `@`, or sends a direct message.

```js
bot.respond(/What's your favorite food?/, function(res) {
    return res.send("I'm a robot--I don't eat food!");
});
```

__Note__ that the string must match exactly; depending on your operating system, the Slack app may convert the the single quote, `'`, into an apostrophe, `â€™`. If that happens, you can use the Slack website instead.

```
tim: @bot What's your favorite food?
bot: I'm a robot--I don't eat food!
john: What's your favorite food?
...
[no response because john didn't tag the bot in his message]
```

---

#### Responding to User Input

**`.send()` & `.reply()`**

The `send` method allows your bot to send a message to the channel, and the `reply` method allows it to respond directly to a user with an `@` reply. In order to understand the difference, weâ€™ll need to accept some user input. Let's take a look at the example below:

**User Input and Wildcard Selector**
 ```js
bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
    // the `i` at the end of the expression makes it case insensitive
    var name;
    name = msg.match[1];
    // note that `msg` is a parameter
    if (name === "Hubot") {
        return msg.send("You're not Hubot--I'm Hubot!");
    } else {
        return msg.reply("Nice to meet you, " + name + "!");
    }
});
```

Notice the difference between `.send()` and `.reply()`:
```
tim: @bot Hi Hubot! My name is Tim
bot: @tim Nice to meet you, Tim!  
tim: @bot Hi Hubot! My name is Hubot
bot: You're not Hubot--I'm Hubot!
```

Let's examine how the user input works. We're using `.respond()` to set the bot up to listen for its `@` handle. In this case, it's listening for the phrase `@bot Hi Hubot! My name is ___`. The `(.*)` syntax is a wildcard value that effectively represents the `___` in previous sentence.

When the bot is called with the phrase, `@bot Hi Hubot! My name is (.*)`, it stores the contents of `(.*)` in an `array` called `match`, which lives inside an `object` called `msg`. Note that `msg.match[1]` will grab the value corresponding to the second group `(.*)` in the expression.

The array uses a zero-based index; the first group, at index `0`, is the entire expression. In the example above, `msg.match[0]` will return the entire expression: `Hi Hubot! My name is Tim`.

If you use multiple `(.*)`s within one regular expression __*__ , you can assign each of the values to different variables, *e.g.*, `var foo = msg.match[1]`, `var bar = msg.match[2]`.

__*__ Regular expressions are explained in the next section.

Here's an example that uses two wildcards:

```js
bot.respond(/add (.*) and (.*)/i, function(msg) {
    var a;
    var b;
    a = Number(msg.match[1]);
    b = Number(msg.match[2]);
    c = a + b;

    return msg.reply(a + " plus " + b + " equals " + c);
});

```
```
tim: @bot add 3 and 4
bot: 3 plus 4 equals 7
```

Here's another example that uses a `switch` statement to handle different cases:
```js
bot.respond(/what is your favorite (.*)/, function(msg) {
    var fav;
    fav = msg.match[1];
    switch (fav) {
        case "food":
            return msg.reply("I'm a robot--I don't eat food!");
            // we don't need `break` because the `return` will cause us to exit out of this function
        case "band":
            return msg.reply("It's gotta be Daft Punk! Bots stick together.");
        case "programming language":
            return msg.reply("Javascript, of course! I'm programming myself to be sentient.");
        default:
            return msg.reply("I don't have a favorite " + fav + ". What's yours?");
    }
});
```

```
tim: @bot what is your favorite food?
bot: @tim I'm a robot--I don't eat food!
tim @bot what is your favorite color?
bot: @tim I don't have a favorite color. What's yours?
```

---

#### Regular Expressions
You might have noticed that we haven't used quotes around the phrases our bot is listening for. Instead, weâ€™re using `/`, *e.g.* `/What's your favorite food/`. Why do we need to do this?

Most programming languages allow for text search using regular expressions. Regular expressions, or RegEx, enable us to find very specific patterns of text within a document, or, in this case, a chat room.

For example, if we want to find the word `"what"` using a RegEx, we can use the following code: `\bwhat\b`. Here, `b` represents the boundaries of the word, *i.e.* its beginning and end, and the `what` represents the word we are searching for.

However, this is an advanced example. **For most of our bots, we can simply enclose phrases between `/` marks**.

To learn more about regular expressions, see these resources:
  - [RegexOne](http://regexone.com/) walks you through basic to advanced regular expression syntax
  - [regex101](https://regex101.com/#javascript) lets you test out your regular expression (without the need to constantly start and stop your bot)

---

#### Advanced Example

Here's an example of an advanced bot that uses regular expressions, and can respond to a number of different inputs:

```js
module.exports = function(bot) {
    bot.respond(/Is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();
        msg.reply(((today.getDay() === 0) || (today.getDay() === 6)) ? "YES" : "NO");
    });

    bot.hear(/I did it!/i, function(msg){
        msg.send("Congratulations! Good job!");
    });

    bot.respond(/Are you there?/i, function(msg){
        msg.reply('Yes, usually here, and listening.');
    });
}
```

This should give you a sense of what we can do with `Hubot`, and hopefully provide inspiration for your first project.


---

## In Class Project Time
You can find the prompt for the first project under `project-01/project-01.md` in the `projects` folder on GitHub.

---

## Deploying to Heroku (Optional)

In order to run `Hubot` continuously without actually having the program running continuously on our laptops, we need to deploy `Hubot`. Basically, we're copying our `Hubot` code from our local machines to a server (a computer), and running our code on that computer. In this case, `Heroku` will provide this other computer for us.

We need to set up `git` so we can push our bot to `Heroku`.

**Initialize your local repository:**

```bash
git init
```

Note that this should be in the same folder you were working in previously, *e.g.* `myhubot`.

**Add all of your new files:**

```bash
git add -A
```

**Commit your new files:**

```bash
git commit -m "Initial Commit"
```

**Create a new app on Heroku:**

```bash
heroku login
```

You will be prompted for your `Heroku` email and password.

Choose what you want to call your app on `Heroku`. I recommend `[firstname]hubotapp`, *e.g.* `saimonhubotapp`. **In any of these commands, you do not need the [ ], only what your replaced item is.**

```
heroku create [your app's name]
```

If `Heroku` says an app with that name already exists, use a different name.

**Connect your local repository to Heroku**

`Heroku` will have output the `remote` repository associated with your app, *e.g.* `https://git.heroku.com/saimonhubotapp.git`, into your terminal window.

Do a `git remote -v`, and if you don't see the repository listed, connect it manually using:

```bash
git remote add heroku [your app's remote repository]
```

**Add the configurations for Slack:**

`Heroku` will have output the `url` for your app, *e.g.* `https://saimonhubotapp.herokuapp.com`. You can find your Slack API token in `slack-api-token-assignments.md`, located in this folder. As with previous commands, do not include the `[` and `]` characters when using them.

```bash
heroku config:add HEROKU_URL=[your Heroku app url]
```

```bash
heroku config:add HUBOT_SLACK_TOKEN=[your Slack API token]
```

**Push your code up to Heroku:**

```bash
git push heroku master
```

Note that `Heroku` only cares about the code on our `master` branch.

**Turn on your Heroku app:**

```
heroku ps:scale web:1
```

In this case, our `Heroku` app is our bot.
