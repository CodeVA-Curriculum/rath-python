---
title: 3. Choosing
description: This module is where the rubber meets the road, so to speak. In an interactive narrative, the user needs to make choices that impact the direction of the story. Our programs can't support that--until today.
previous: module-2
layout: module
video: "https://www.youtube.com/embed/viMY3jo36_o"
activities:
    - 💡 Lorum ipsum sit dolor amet
    - 🫑 Mild, Medium or Spicy Mini-Project
---


<script>
    import Callout from '$lib/components/Callout.svelte';
    import VideoModule from '$lib/components/VideoModule.svelte';
    import Prompt from '$lib/components/Prompt.svelte';
    import {faPepperHot} from '@fortawesome/free-solid-svg-icons';
</script>

# Backstory

How do programs make decisions? Your music streaming service knows that *if* you press the pause button, then the music should pause. Programming if statements such as these are a foundational part of building programs that respond to user input or changing information. The if statement checks if a certain condition is `True` or `False`. Then, based on the `True` or `False`-ness of that condition, it runs different sections of code. This way the program can choose what to do next, if a certain condition is met.

You might express this sort of "branching" narrative using a flowchart:

[embed flowchart]

Python has a different way of expressing branches and choices in the code; we can't write flowcharts in Python, but the idea is exactly the same. Check out the program embedded below:

[embed some code example that is a simple "if" statement]

Run it a couple of times, and try typing in different inputs each time. The program does *not* `print()` the same value every time; in fact, it seems like the program can choose what to `print()` based on what you type! Now check out this program:

[embed simple story]

This is the simplest version of a "choose-your-own-adventure" game that I can think of. There's a little bit of description, then the reader needs to type in a choice. The program prints out an ending to the story based on the choice the user made.

Pretty much every kind of software uses this exact same process. Have you ever accidentally entered the wrong password into your phone? The phone's software checks the **input** you provide via the keypad, and gives you a different response based on what you typed. This kind of interactivity is possible because of **conditional statements** (also called **if statements**). Every single programming language out there has a way for people to write these sorts of procedures, where the program chooses one of two (or more) responses based on what the user does. In this module, you'll learn how to do write **conditional statements** with Python.

# If Statements

The following Python program shows what an "if" statement looks like in action:

```python
print("The beginning...")

if True:
    print("Option 1")

print("The End!")
```

The first line is just a `print()` statement like we've been using for a while now; it's nothing special. The last line is the same--just a normal `print()` statement. The two lines in the *middle* are the important parts. First, you can see the `if True:` line; this is the beginning of our "if" statement pattern. The `if` line is paired with a `print()` statement indented below it; this is the second part of our pattern. **All "if" statements will follow this pattern**, or some variation of it.

The format of the "if" statement is really important! The colon at the end of the `if True:` line needs to be there, and the line *after* the "if" statement **must** be indented, otherwise the code will give you an error message when you try to run it. Lastly, you *must* capitalize the `True` or `False` value!

<Callout title="Simple 'If' Experiments">
Edit the code [linked here]() (don't forget to **fork** the code!), experimenting with the following things:

* Run the code. What **output** does the code create?
* Find the line that says `if True:` and change `True` to `False`. Run the code; what changes?
* Create a second "if" statement starting just before the line that says `print("The End!")`. Use the "if" statement already in the code as a model, paying special attention to the spacing and the details. Choose either `True` or `False` for your new "if" statement. Before you run the code, try to predict what output the code will create.

</Callout>

There are lots of variations on "if" statements to try out. The one you experimented with above is the simplest version. Here's how it works:

1. The program runs normally until the computer reads the line that starts with `if`
2. The program checks after the `if` to see if the value there is either `True` or `False`
3. If the value is `True`, the program executes the line indented under the `if` line
4. If the value is `False`, the program *skips* the line indented under the `if` line

There's a slightly more complicated version to try out, the "if-else" statement. In this version, the code doesn't decide whether or not to *skip* a line; it chooses between two options **based on the `True` or `False` value**.

```python
print("The beginning...")

if True:
    print("Option 1")
else:
    print("Option 2")

print("The End!")
```

<Callout title="Simple 'If-Else' Experiments">
Edit the code [linked here]() (don't forget to **fork** the code!), experimenting with the following things:

* Run the code. What **output** does the code create?
* Find the line that says `if True:` and change `True` to `False`. Run the code; what changes? (Read the output carefully!)
* Add another line of code under the line that says `print("Option 1")`, being sure that it is indented in the same way as the `"Option 1"` line. Run the code twice, once with `True` and once with `False`. What d
o you notice?

</Callout>

<!-- Video module -->

# Boolean Expressions

The `True` and `False` values are the most important parts of our "if" statements; the code **chooses** different code sequences based on it. These values are **Boolean** data, named after George Boole. You may remember **Boolean** as one of the data types from the "variables" module. "If" statements become very powerful when you start using them in conjunction with **Boolean expressions**; that's what this section is all about.

Consider the following Python program:

```python
print(5 > 2)
```

This program is written with a **Boolean expression**--`5 > 2`. Boolean expressions are sort of like mathematical expressions; the program will *simplify* the expression before printing it out. Boolean expressions are *unlike* mathematical expressions in that they don't simplify down to a number; instead, the simplify down to a value of either `True` or `False`. Which value will the program above create when it prints the Boolean expression?

<!-- Video module -->

<Callout title="Boolean Experiments">
Edit the code [linked here]() (don't forget to **fork** the code!), experimenting with the following things:

* Run the code. What **output** does the code create?
* Edit the code so it outputs the following:

```
True
False
True
False
```

</Callout>

# Interactive Stories

Let's finally bring everything together! Consider the following code pattern:

```python
print("You see a worn, wooden door in front of you. Do you OPEN it?")
answer = input()

if answer == "OPEN":
    print("You see a dark passageway before you...")
else:
    print("You stand alone in the darkness...")

print("The End!")
```

There's one big difference between this "if" statement and the ones you have seen thus far--instead of using `True` or `False`, it uses a **Boolean expression**. When the variable called `answer` has the same value as `"OPEN"`, the story continues. If not, the program prints `"You stand alone in the darkness..."`. Spooky!

This story is pretty short, though. Here's how we might continue it:

```python
print("You see a worn, wooden door in front of you. Do you OPEN it?")
answer = input()

if answer == "OPEN":
    print("You see a dark passageway before you...")
    print("It's too dark to see. Do you want to turn on a FLASHLIGHT, or WALK?")
    answer = input()

    if answer == "FLASHLIGHT":
        print("The hallway has a large hole in the floor! You carefully step around it.")
    elif answer == "WALK":
        print("You take careful steps forward, and suddenly you fall through the floor!")
    else:
        print("That's not an option.")
        print("You stand alone in the darkness...")
else:
    print("You stand alone in the darkness...")

print("The End!")
```

We call this pattern a *nested "if" statement*. You can add **as much code as you want** to the paths of an "if" statement. Be careful though! As your story gets longer, it gets more and more difficult to read and add to. The **cognitive load** that you as a programmer have to deal with gets larger and larger as you add layers to your "if" statements.

You also may have noticed a strange "if" statement pattern in that previous example:

```python
if answer == "FLASHLIGHT":
    print("The hallway has a large hole in the floor! You carefully step around it.")
elif answer == "WALK":
    print("You take careful steps forward, and suddenly you fall through the floor!")
else:
    print("That's not an option.")
    print("You stand alone in the darkness...")
```

This "if" statement pattern has *three* options instead of just two. The line that says `elif` stands for "else if", meaning that the code will check each Boolean expression in order. When the code finds a `True` expression, it runs the section of code indented beneath and skips the rest.

Your interactive narrative will *mostly* consistent of these "if" statement patterns, so it's a good idea to get familiar. Try out the experiment below to acquaint yourself!

<!-- Video module -->

<Callout title="Interactive Story Experiments">
Edit the code [linked here]() (don't forget to **fork** the code!), experimenting with the following things:

* Run the code. How many different endings does this story have?
* Try changing something about the story by editing the **strings** inside the `print()` statements and "if" statements such that the story is slightly different. For example, you could change the description that program `print()`s at the beginning, and then change one of the choices available to the user
* Add another ending to the story by creating another `elif` section before the `else` section. You can use this code as an example:

```python
[add example]
```

</Callout>

# "If" Statement Mini-Projects

<Prompt title="Mild: Goldilocks" footerLink="#" spice="mild">
The code example linked below tries to tell the story of *Goldilocks and the Three Bears*, but the options aren't working properly. Edit the `if` and `elif` statements so the code runs properly.

Click the button below to check out the [starter code]()! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<Prompt title="Medium: Secret Ending" footerLink="#" spice="medium">
The code example linked below only has one ending! The story is pretty good, but it's not really interactive. Replace `True` and `False` wherever you see it with Boolean expressions that include the `answer` variable, so the reader of the story can choose one of several endings.

Click the button below to check out the [starter code]()! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<Prompt title="Spicy: Act 2" footerLink="#" spice="spicy">
The code example linked below is interactive, but it's too short! Add one more choice to either section of the `if` statement, so the user has to make two choices no matter which option they choose at the beginning of the story (Hint: you'll need to create a *nested `if` statement*).

Click the button below to check out the [starter code]()! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<div class='card my-5'>
    <div class='card-content'>
        <h3>OpenClass AI Practice Questions</h3>
        <p>If you would like some further practice with these concepts, click the button below to access free-response questions designed to help you master using "if" statements with Python.</p>
    </div>
    <div class='card-footer'>
        <a href="#" class="card-footer-item">View Practice Questions</a>
    </div>
</div>

# Catalyzing Questions

* What other kinds of programs could you create using `input()`, `print()`, variables, and `if` statements?
* What are some barriers to understanding that you imagine students might encounter when they begin working with `if` statements?
* Did you have difficulty writing `if` statements at first? What are some common mistakes you would warn someone about if they were doing this for the first time?

----

# Next Up...

In the next module, you'll learn about how to organize your interactive stories into chapters or "scenes" using functions. Click the button below to go to the next module!

<div class='container has-text-right'>
    <!-- <a href="{base}/modules/module-3" class='button is-primary'>Go to Module 4</a> -->
    <button class='button is-primary' disabled>Got to Module 3</button>
</div>

----