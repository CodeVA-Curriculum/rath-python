---
title: 4. Organize
description: Now that you know all about how to make interactive narratives, you might wonder how to make longer, more interesting stories. This module is all about how to organize your work with functions.
previous: module-3
layout: module
# TODO: record & link video
video: "https://www.youtube.com/embed/ZTnb83NxPi4"
activities:
    - 💡 Basic Functions Experiments
    - 💡 Functions as Scenes Experiments
    - 🫑 Mild, Medium or Spicy Mini-Project
---

<script>
    import Callout from '$lib/components/Callout.svelte';
    import VideoModule from '$lib/components/VideoModule.svelte';
    import Prompt from '$lib/components/Prompt.svelte';
    import flowchart from '$lib/assets/Module3Flowchart.png';
    import ReplitEmbed from '$lib/components/ReplitEmbed.svelte';
    import {base} from '$app/paths';
    import Steps from '$lib/components/Steps.svelte';
    import Markdown from '$lib/components/Steps.svelte';
</script>

# Backstory

At this point, you know a lot about how to create interactive narratives. You may have even tried to create interactive stories using just `if` statements, variables, and `input()`, which is great! It's totally possible to create some amazing stories using just those simple tools. However, you might notice that things get pretty complicated pretty quickly. Consider the program below:

```python
print("You see a dusty hallway ahead. Will you EXPLORE, or LISTEN?")
answer = input()

if answer == "EXPLORE":
    print("You find a trap door hidden beneath an old, moldy carpet.")
elif answer == "LISTEN":
    print("You just hear the creaking of the old house")
else:
    print("That's not an option")
```

This is a pretty short story; it barely rises to the level of an interactive narrative at all! The problem is, if we try to add more to the story, the program gets pretty difficult to read and make changes to. For example, we might want to have the reader make another choice after they find the trap door. To accomplish this, you'd have to add another `if` statement to the `"EXPLORE"` path:

```python
# ...
if answer == "EXPLORE":
    print("You find a trap door hidden beneath an old, moldy carpet.")
    print("Will you OPEN the door, or KNOCK?")
    answer = input()

    if answer == "OPEN":
        print("You see a dark passageway below.")
    elif answer == "KNOCK":
        print("You hear someone approach the trapdoor...")
    else:
        print("That's not an option")
elif answer == "LISTEN":
    print("You just hear the creaking of the old house")
else:
    print("That's not an option")
```

By nesting the `if` statements, we can create longer "branches" in the story. The problem is, the more nested `if` statements we add, the more complicated the code becomes! We will eventually end up with a "diagonal" code pattern:

```python
if answer =="A":
    if answer == "B":
        if answer == "C":
            # etc...
```

This sort of "diagonal" code is okay for beginners, but unless we figure out a different way to organize the code that makes up the story things will get too complicated and difficult to manage as we add to the story. Not to mention that nested `if` statements are a little confusing to read!

This module is about **functions**. We will use functions to solve the problem of nested `if` statements in our interactive narratives. By creating functions, we can organize our story into *scenes*, allowing us to freely add new parts to the story without having to create many nested `if` statements. This is the last coding concept you will need to learn in order to make interactive narratives with Python!

# Function Basics

**Functions** are really important in programming; they are *power-words* that trigger a process. You've already been using some **functions** in your programs; `print()` is a function that triggers the process of showing text on the console, and `input()` is a function that triggers the process of pausing and waiting for the user to type something before continuing with the program.

You can use Python to **define** your own **functions** instead of just using the ones built into the language. You can use functions to organize your code into *processes* that you can trigger at different points in your program. There are just a couple of steps to do. Consider this program:

```python
print("I'm going to sing you a song!")

# song lyrics
print("This is the song that doesn't end...")
print("Yes it goes on and on my friend...")

print("Thanks for listening!")
```

To demonstrate how **functions** work, I'm going to *refactor* this code so the lines corresponding to the song lyrics are organized into a function. Here's how that works:

<Steps title="Step 1: Create Function Definition">
<span slot="text">
The first step is to create the **function definition** area at the top of the code. Here are the steps:

1. The function definition section starts with the keyword `def` (short for *define*)... 
2. ...followed by the name of the function I'm creating (this is totally up to the coder, I chose `song` because it matches the purpose of the function). 
3. After the name, I need to add a set of parentheses (this is a Python **syntax** rule, it's not optional) and a **colon** to end the line.

</span>
<span slot='code'>

```python
# new code! ------------
def song():
    # process code
    # goes here...

# old code ------------
print("I'm going to sing you a song!")

# song lyrics
print("This is the song that doesn't end...")
print("Yes it goes on and on my friend...")

print("Thanks for listening!")
```
</span>
</Steps>

<Steps title="Step 2: Write the Function Process">
<span slot="text">
Next, I need to define the *process* that will go with the `song()` function. Any code indented beneath the function **definition** line will get mapped to the `song()` keyword.

1. First, I'll add the two `print()` statements that comprise the song lyrics to the function definition. 
2. Then, I'll remove them from the "old" section of the program.

</span>
<span slot='code'>

```python
def song():
    # new code! ---------
    print("This is the song that doesn't end...")
    print("Yes it goes on and on my friend...")

# old code ------------
print("I'm going to sing you a song!")

# the song lyrics *were* here

print("Thanks for listening!")
```
</span>
</Steps>

<Steps title="Step 3: Activate the Function">
<span slot="text">
If you run code at this stage, you'll notice something interesting. The code indented below the function definition line *doesn't happen*. It's like our function definition code doesn't work anymore!

Never fear; this is by design. Now that I've *defined* the function, I need to *call* it in order to trigger its process.

1. First, I'll find the spot where I'd like to trigger the `song()` function (right after the `print("I'm going to sing...") statement)
2. To trigger (or **call**) the function, I need to type its name (in this case, `song()`)

</span>
<span slot='code'>

```python
def song():
    print("This is the song that doesn't end...")
    print("Yes it goes on and on my friend...")

print("I'm going to sing you a song!")

song() # new code! Activate the song() function

print("Thanks for listening!")
```
</span>
</Steps>

## Why Functions?

You might be asking yourself--"Why would I add functions to my code? It seems like a needlessly complicated addition". There are a lot of benefits to adding functions that might not be clear right away; the most obvious one is that we can *call* functions as many times as we need to *without* rewriting the function definition. So if I wanted to repeat the `song()` code, I could do it by simply calling the `song()` function a few more times:

```python
def song():
    print("This is the song that doesn't end...")
    print("Yes it goes on and on my friend...")

print("I'm going to sing you a song!")
song() # activate the song() code!
song() # activate it again!
song() # and again...
song() # and again...
print("Thanks for listening!")
```

<!-- TODO: Record video and link -->
<VideoModule title="Functions Basics" video="https://www.youtube.com/embed/ZTnb83NxPi4">
This video covers the basics of defining and using **functions** with Python. This technique is *really* important for creating interactive narratives. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

<Callout title="Basic Function Experiments">
Consider the output below:
<!-- TODO: -->
```
repeated output, like from a song
```

How might you use **functions** to write a program that generates the output above? Use the Repl.it linked [here]() as a starting point (don't forget to **fork** the code!), and follow the instructions below:
<!-- TODO: -->
1. 

</Callout>

# Using Functions for Scenes

<!-- TODO: Record and link video -->
<VideoModule title="Functions as Scenes Experiments" video="https://www.youtube.com/embed/ZTnb83NxPi4">
This video covers how to use **functions** to organize an interactive narrative around *scenes*. You'll use this pattern a lot when you create your own interactive narratives. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

<!-- TODO: -->
<Callout title="Functions as Scenes Experiments">
Lorum ipsum sit dolor amet
</Callout>

# Organizing Functions into Files (Optional)

# Functions Mini-Projects

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Mild: Name" footerLink="#" spice="mild">
Lorum ipsum sit dolor amet
</Prompt>

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Medium: Name" footerLink="#" spice="medium">
Lorum ipsum sit dolor amet
</Prompt>

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Spicy: Name" footerLink="#" spice="spicy">
Lorum ipsum sit dolor amet
</Prompt>

<div class='card my-5'>
    <div class='card-content'>
        <h3>OpenClass AI Practice Questions</h3>
        <p>If you would like some further practice with these concepts, click the button below to access free-response questions designed to help you master using "if" statements with Python.</p>
    </div>
    <div class='card-footer'>
    <!-- TODO: Create OpenClass AI review for module 4 -->
        <a href="#" class="card-footer-item">View Practice Questions</a>
    </div>
</div>

<!-- TODO: Write catalyzing questions -->
# Catalyzing Questions

* Lorum ipsum

----

# Next Up...

In the next module, you'll learn about designing interactive narratives, and will create one of your own. Click the button below to go to the next module!

<div class='container has-text-right'>
    <!-- <a href="{base}/modules/module-5" class='button is-primary'>Go to Module 4</a> -->
    <button class='button is-primary' disabled>Got to Module 5</button>
</div>

----