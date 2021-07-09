---
title: 2. Remember
description: This module introduces a third big idea in computing--storage. Use variables to store data that your program can use later.
previous: module-1
layout: module
video: "https://www.youtube.com/embed/7Sv-XAlBu90"
---

<script>
    import Callout from '$lib/components/Callout.svelte';
    import Quote from '$lib/components/Quote.svelte';
    import VideoModule from '$lib/components/VideoModule.svelte';
    import {faPepperHot} from '@fortawesome/free-solid-svg-icons';
</script>

# Backstory

When we create our interactive narratives, it will be very important for the computer to ask the reader to make choices. We already know how to prompt the user to type things into our programs using `input()`, but right now our programs don't actually keep track of that information to use later on. **Variables** allow us to store information we get from users so we can use it later on in our programs. Variables are what computers' *memories* are made of.

<Quote>
“A variable is a named unit of data that is assigned a value. If the value is modified, the name does not change.” 
</Quote>

You can think of a variable being a box, with a value stored inside it. On the front of the box is a label, which is the name of our variable. Every time we use the variable name, the computer goes to the ‘box’ with that name, and retrieves the value stored inside it.

[insert image of boxes]

For example, a computer might store a person's *age* in a variable called `age_of_person`. Whenever enough time goes by, the number stored in that variable should change as the person gets older; computers are pretty good at that kind of thing. Even though the *data* stored in the computer's memory changes, the *label* on the data (`age_of_person`) doesn't change. In this way, variables *represent* data, rather than *being* data.

## Types of Variables

Human memories are complicated, and may contain images, smells, sensations, emotions, or any other combination of internal or external stimulus. Computer memories aren't quite like that--they are made up of numbers, and are thusly much *simpler* (from an information density perspective) than human memories.

Computer variables come in different **types**, and each type stores different flavors of information. We will cover three data types in this course; here they are in order from *most* information-dense to *least*:

* **String:** A string is a collection of text characters. This could be a word, a sentence, or other information that is a collection of characters. *Examples: `“Hello,”` `‘Today is a lovely day!’` and `“1x33de9&”`*
* **Integer:** Integers are whole numbers, with no decimals or fractions. They include negative numbers, positive numbers, and zero. *Examples: `-12`, `0`, `32`, `9001`*
* **Boolean:** Boolean variables only have two possible values, either `True` or `False`. Booleans are useful for variables that can only have two possibilities, such as something that is only “on” or “off.” *Examples: `True`, `False`*

<Callout title="Try It Out!">
Imagine a computer program that collects and stores information about a person. What data types fit with the following kinds of information?

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

Try this code out in a [Repl.it]() project--You'll notice a couple of important things:

* The first line of the program doesn't really "do" anything to the console; it's invisible to the user because it is doing an *internal* operation that only the computer knows about
* The line where you `print()` the variable called `user_name` doesn't have any quotation marks; it's a reference to the variable name, not a string with the text "user_name" in it
* The variable called `user_name` doesn't have any spaces--we use underscores instead. Variable names cannot contain *any* whitespace

<VideoModule title="Variable Basics" video="https://www.youtube.com/embed/7Sv-XAlBu90">
</VideoModule>

<Callout title="Try It Out!">
Edit the above program in [Repl.it](), experimenting with the following things:

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

<VideoModule title="Capturing User Input" video="https://www.youtube.com/embed/7Sv-XAlBu90">
</VideoModule>

<Callout title="Try It Out!">
Copy the program below into a [Repl.it]() project:

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

<Prompt title="Mild: Mad Libs" footerLink="#" icon={faPepperHot}>
</Prompt>

# Catalyzing Questions

* What happens when you use the same variable to store different kinds of data?