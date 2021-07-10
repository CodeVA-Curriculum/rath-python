---
title: 2. Remember
description: This module introduces a third big idea in computing--storage. Use variables to store data that your program can use later.
previous: module-1
layout: module
video: "https://www.loom.com/embed/40b8754634bf4263a38b96da71c23392"
activities:
    - 💡 Variable Basics Experiments
    - 💡 Variables with Input Experiments
    - 🫑 Mild, Medium or Spicy Mini-Project
---

<script>
    import Callout from '$lib/components/Callout.svelte';
    import Quote from '$lib/components/Quote.svelte';
    import VideoModule from '$lib/components/VideoModule.svelte';
    import Prompt from '$lib/components/Prompt.svelte';
    import {faPepperHot} from '@fortawesome/free-solid-svg-icons';
    import boxesImg from '$lib/assets/boxes.jpg';
</script>

# Backstory

When we create our interactive narratives, it will be very important for the computer to ask the reader to make choices. We already know how to prompt the user to type things into our programs using `input()`, but right now our programs don't actually keep track of that information to use later on. **Variables** allow us to store information we get from users so we can use it later on in our programs. Variables are what computers' *memories* are made of.

<Quote>
“A variable is a named unit of data that is assigned a value. If the value is modified, the name does not change.” 
</Quote>

You can think of a variable being a box, with a value stored inside it. On the front of the box is a label, which is the name of our variable. Every time we use the variable name, the computer goes to the ‘box’ with that name, and retrieves the value stored inside it.

<div class='container has-text-centered m-5'>
    <img alt="Boxes with labels, like in a mailroom" src={boxesImg} style="border-radius: 10px; max-width: 400px;" />
</div>

For example, a computer might store a person's *age* in a variable called `age_of_person`. Whenever enough time goes by, the number stored in that variable should change as the person gets older; computers are pretty good at that kind of thing. Even though the *data* stored in the computer's memory changes, the *label* on the data (`age_of_person`) doesn't change. In this way, variables *represent* data, rather than *being* data.

## Types of Variables

Human memories are complicated, and may contain images, smells, sensations, emotions, or any other combination of internal or external stimulus. Computer memories aren't quite like that--they are made up of numbers, and are thusly much *simpler* (from an information density perspective) than human memories.

Computer variables come in different **types**, and each type stores different flavors of information. We will cover three data types in this course; here they are in order from *most* information-dense to *least*:

* **String:** A string is a collection of text characters. This could be a word, a sentence, or other information that is a collection of characters. *Examples: `“Hello,”` `‘Today is a lovely day!’` and `“1x33de9&”`*
* **Integer:** Integers are whole numbers, with no decimals or fractions. They include negative numbers, positive numbers, and zero. *Examples: `-12`, `0`, `32`, `9001`*
* **Boolean:** Boolean variables only have two possible values, either `True` or `False`. Booleans are useful for variables that can only have two possibilities, such as something that is only “on” or “off.” *Examples: `True`, `False`*

<Callout title="Try It Out!">
Imagine a computer program that collects and stores information about a person. For each item in the list, assign it one of the three data types described above--**string**, **integer** or **boolean**.

* Name
* Age
* Address
* Peanut Allergy

</Callout>

# Creating Memories

To create variables in Python, you need to complete two steps:

1. Come up with a name for the variable
2. Assign data to that variable

Let's start with **string** data; you used **strings** in the previous module when you started using the `print()` function. Here's an example of printing **string** data *without* using a variable:

```python
# No variable!
print("Hello, ")
print("Jon")
print("I am a computer.")
```

If you wanted to use a variable in a program like this, you would (1) create word to represent some string data, and (2) use it in place of a string somewhere in your program. For example, maybe we want to store the name of the user in a variable:

```python
user_name = "Jon" # Make a variable
print("Hello, ")
print(user_name) # Print the variable
print("I am a computer")
```

The first line, the one that says `user_name = "Jon"`, is an **assignment** expression. Basically, it tells the computer to interpret the word `user_name` as if it were the string `"Jon"` in every statement following the first line.

Try this code out in a [Repl.it](https://replit.com/~) project--You'll notice a couple of important things:

* The first line of the program doesn't really "do" anything to the console; it's invisible to the user because it is doing an *internal* operation that only the computer knows about
* The line where you `print()` the variable called `user_name` doesn't have any quotation marks; it's a reference to the variable name, not a string with the text "user_name" in it
* The variable called `user_name` doesn't have any spaces--we use underscores instead. Variable names cannot contain *any* whitespace

<VideoModule title="Variable Basics" video="https://www.loom.com/embed/988f01f9b3fc4378bbbfef143124fc56">
This video covers the basics of *variables*--what they are, and how to create them using Python. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

<Callout title="Variable Basics Experiments">
Edit the code [linked here](https://replit.com/@JonStapleton1/Variable-Basics-Experiments) (don't forget to **fork** the code!), experimenting with the following things:

* Find the line that says `print(user_name)`. Put `user_name` in quotation marks like you would with a normal `print()` statement. What changes?
* Find the line that says `user_name = "Jon"`. Change `"Jon"` to something else, and run the program. What changes?
* Create a second variable with a different name after the first line of code, but before the first `print()` command. Then, add another line of code to `print()` that variable to the console. You can use whatever "label" you want for the variable (just make sure you don't use a label that's already taken by something else, like `print`, `input`, or `user_name`)

</Callout>

# Remembering Conversations

Using variables to simply store strings to use later in the code isn't all that useful. Instead, we need to store the strings the user types into the program. Here's a code pattern you will see a *lot* as you work your way up to writing interactive narratives:

```python
response = input()
print("You said:")
print(response)
```

This pattern is a little opaque, so it bears some explanation. In the program above, the computer pauses and lets the user type something into the console. After the user presses "Enter", the code *stores their response* in the variable called `response` before moving on to the `print()` statements. When it gets to the last line, the one that says `print(response)`, the computer "opens up" the variable called `response` and uses the value stored within it.

If you'd like to put the variable value inside of a printed string rather than in it's own `print()` statement, you could re-write the example above like so:

```python
response = input()
print("You said: " + response)
```

Using the `+` symbol between two strings causes the program to "combine" the two separate strings (in this case, `"You said: "` and `response`) into one mega-string before printing it out.

<VideoModule title="Capturing User Input" video="https://www.loom.com/embed/a50f5e6f033d48c0823f19fc4171be77">
This video covers the basics of storing user input in variables using `input()`. This technique is *really* important for creating interactive narratives. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

<Callout title="Variables with Input Experiments">
Copy the program below into a [Repl.it](https://replit.com/~) project, or **fork** the one at [this link](https://replit.com/@JonStapleton1/Variables-and-Input-Experiments):

```python
print("Hello! What is your name?")
name = input()
print("Greetings, " + name + "!")
```

Each of the following changes to the code either causes an error, or causes a harmless change in the program. Try them out, and see which is which. If your change results in an error, change it back before moving on.

* Change `name` on line 2 to `user_name`
* Add this line to the end of the program: `print("How are you, " + name + "?")`
* Put "name" in quotation marks on line 3.

</Callout>

# Apply Your Skills

Choose one of the mini-projects below to help you practice your skills! The projects each have a different difficulty level; **Mild** projects are pretty short and simple, **Medium** projects require a little more creativity, and **Spicy** projects are designed to be a challenge!

<Prompt title="Mild: Echo" footerLink="https://replit.com/@JonStapleton1/Mild-Echo-Starter-Code" spice="mild">
Imagine shouting into a vast canyon, and hearing your voice bounce back to you over and over again, decreasing in volume until it disappears . . .

Make a program that simulates this poingant reminder of the ephemerality of our lives on this timeless earth. Basically, make a program that stores user input as a **string**, and then echoes back that same **string** several times before ending the program. You could even include a rich, vivid description of the "place" the user finds themselves which would create such an echo in a `print()` statement at the beginning of the program.

Click the button below to check out the [starter code](https://replit.com/@JonStapleton1/Mild-Echo-Starter-Code)! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<Prompt title="Medium: Mad Libs" footerLink="https://replit.com/@JonStapleton1/Medium-Mad-Lib-Starter-Code" spice="medium">
"Mad Libs" are word games that invite the player to provide words to complete a story, without knowing what the story is about or how the words will be used in context. For example, I might say:

```python
print("Type in a adjective (a complimentary one, please)")
```

Then, I would use whatever you said in a sentence:

```python
print("You are very " + user_input + "!")
```

Lots of times, these "Mad Libs" tell a story and include many different words provided by the user. The best ones try to "trick" the player into providing silly or nonsensical words.

For this project, you will create a "Mad Libs" game for the user to play. The program should ask the user for several different words, store those words in several different **variables**, and then use those variables in a `print()` statement such that the users' words are inserted into a story.

Click the button below to check out the [starter code](https://replit.com/@JonStapleton1/Medium-Mad-Lib-Starter-Code)! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<Prompt title="Spicy: Single-Function Calculator" footerLink="https://replit.com/@JonStapleton1/Spicy-Single-Function-Calculator-Starter-Code" spice="spicy">
In the module above, we only made variables that stored user input as **strings**. You can also create **integer** variables by using this code pattern:

```python
print("Type in a number")
num = int(input()) # store input as an integer
print(num + 1) # output the sum of the input and 5
```

For this project, you will create a single-function calculator. The program should take **two** integers from the user via `input()`, store the two numbers in two different **variables**, and then print out the result of the calculator's "single function". You can choose whichever operation you like--addition or subtraction are pretty easy, but you can go harder if you'd like (Pythagorean Theorem?).

Click the button below to check out the [starter code](https://replit.com/@JonStapleton1/Spicy-Single-Function-Calculator-Starter-Code)! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<div class='card my-5'>
    <div class='card-content'>
        <h3>OpenClass AI Practice Questions</h3>
        <p>If you would like some further practice with these concepts, click the button below to access free-response questions designed to help you master using variables with Python.</p>
    </div>
    <div class='card-footer'>
        <a href="https://codeva.openclass.ai/resource/assignment-60e9d1a3cae76b4882fa02d5?code=rJC5sjpOtNLoUg" class="card-footer-item">View Practice Questions</a>
    </div>
</div>

# Catalyzing Questions

* What happens when you re-use a variable name? Is that okay to do, or is that a mistake?
* What are some conceptual hurdles students might have trouble with when they start working with variables?
* Which is more difficult--learning the **syntax** for variables, or learning the *idea* or concept of what a variable does and/or represents?
* Can you think of ways to adapt one or more of the above prompts to a class that you teach?

----

# Next Up...

In the next module, you'll learn about how to create Python programs that make **choices** based on the value of information they gather from users and store in **variables**. Click the button below to go to the next module!

<div class='container has-text-right'>
    <!-- <a href="{base}/modules/module-2" class='button is-primary' disabled>Go to Module 2</a> -->
    <button class='button is-primary' disabled>Got to Module 3</button>
</div>

----