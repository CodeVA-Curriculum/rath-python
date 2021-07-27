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
    import ReplitEmbed from '$lib/components/ReplitEmbed.svelte';
    import {base} from '$app/paths';
    import Steps from '$lib/components/Steps.svelte';
    import Markdown from '$lib/components/Steps.svelte';
    import flowchart from '$lib/assets/JackandBeanstalk.png';
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

<Steps title="1: Create Function Definition">
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

<Steps title="2: Write the Function Process">
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

<Steps title="3: Activate the Function">
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
The program [linked here]() contains some function definitions, but only one function call. The program is incomplete; call the appropriate functions in the correct order so the program outputs the lyrics to [song](). **Fork** the code [linked here]() to get started. Your program should produce the output below when you are finished:

```
Hey Jude
don't make it bad. Take a sad song, and make it better
Remember to let her into your heart, then you can start
to make it better
Na, na, na
na-na-na-na
na-na-na-na
Hey Jude
```
</Callout>

# Using Functions for Scenes

So how could functions help with organizing interactive narratives? There are a lot of possible ways to use functions (they're a pretty flexible programming tool), but one way is to create *scenes* within functions, and then to chain those scenes together to weave the interactive narrative. "Scenes" aren't Python concepts--they are a method of organization, a way of thinking about how to break down the problem of telling stories that have multiple paths toward multiple endings. A scene has:

* A description, where the reader learns about what is happening in that part of the story and what options they have for interacting with the narrative
* A choice, where the reader types in a command to interact with the story
* Two or more paths that lead to other scenes

You can think about an interactive narrative not as a book with different endings that you read front-to-back, but as a network of "scenes" connected together. For example, here's a network of scenes represented by a flowchart for the story of *Jack and the Beanstalk*:

<!-- TODO: add flowchart -->
<div class='container has-text-centered m-5'>
    <img alt="A flowchart representing the plot of Jack and the Beanstalk, with additional paths included speculating as to how the story might go if Jack had made different decisions" src={flowchart} style="max-width: 781px;">
</div>

To create this story using Python, you could make each "scene" its own function and connect them together through the reader's choices. Here's an example:

<Steps title="1: Create the First Scene">
<span slot="text">
First, you'll need to create a scene to start the story off. Check out the example.

Each "scene" function has a couple of different parts:

1. A function definition line, where we need to name the scene
2. A `print()` statement, where we describe what's going on in the scene
3. A `print()` statement that shows the reader what options they have for interacting with the story
4. An `if` statement, with a section for each path out of the scene

</span>
<span slot="code">

```python
def scene1():
    print("You find yourself in a dark, musty cave")
    print("Will you EXPLORE or DEPART?")
    # check which path the user chose
    answer = input() # get user input
    if answer == "EXPLORE":
        print("You become lost in the dark")
    elif answer == "DEPART":
        print("You step out into the light")
    else:
        print("That's not an option")
```
</span>
</Steps>

<Steps title="2: Create Destinations">
<span slot="text">
The scene in the function called `scene1()` has three possible paths for the user to take:

1. EXPLORE the cave
2. DEPART the cave
3. `"That's not an option"`, which will run if the reader types something other than `"EXPLORE"` or `"DEPART"`.

Each of these paths will lead to different scenes--"EXPLORE" leads to "Scene 2" according to our flowchart, while "DEPART" leads to "Scene 3". If the reader doesn't select one of these two options, we can just restart "Scene 1" to give them another chance to answer.

Next, create new functions for `scene2` and `scene3`.
</span>
<span slot="code">

```python
def scene1():
    print("You find yourself...")
    # collapsed to make room...

def scene2():
    print("Welcome to scene 2!")
    # no "if" statement yet...

def scene3():
    print("Welcome to scene 3!")
    # no "if" statement yet...
```
</span>
</Steps>

<Steps title="3: Create Connections">
<span slot="text">
Next, we will connect each path in the scene to another scene. Basically, we want to run the code for different scenes based on the choice the reader made in `scene1()`. 

In `scene1()`, we made three possible paths:

1. `"EXPLORE"`, which leads to `scene2()`
2. `"DEPART"` which leads to `scene3()`
3. `"That's not an option"`, which leads back to `scene1()`

To connect these paths to new scenes, call the function associated with the scene that should start given each input from the reader.
</span>
<span slot="code">

```python
def scene1():
    print("You find yourself in a dark, musty cave")
    print("Will you EXPLORE or DEPART?")
    # check which path the user chose
    answer = input() # get user input
    if answer == "EXPLORE":
        print("You become lost in the dark")
        scene2()
    elif answer == "DEPART":
        print("You step out into the light")
        scene3()
    else:
        print("That's not an option")
        scene1()
```
</span>
</Steps>

<Steps title="4: Activate the First Scene">
<span slot='text'>

Because `scene1()` leads to all the other scenes, we don't need to include any other function calls. The `scene1()` call after all the function definitions starts sort of a chain reaction, where the process inside each function definition contains the calls to all subsequent scenes in the story.

While it's not stricly necessary, it's a good idea to organize your code with the **functions** at the *top*, along with any variables you might need, with the "main" portion of your program containing the the function **calls** *below* them.

When you use a lot of functions like this, your "main program" might be pretty short (even one line, like in the example)! That's okay.
</span>
<span slot='code'>

```python
# functions, collapsed to make room
def scene1():
    print("You find yourself...")
    # etc.

def scene2():
    print("Welcome to scene 2!")
    # etc.

def scene3():
    print("Welcome to scene 3!")
    # etc.

# main program -------
scene1() # activate scene 1
```
</span>
</Steps>

To expand the story, all you have to do is add `if` statements to `scene2()` and `scene3()`, along with more scenes to connect to. I've expanded the story I started above into a more-or-less playable interactive narrative. Play with the [Repl.it](https://replit.com/~) embedded below to get a sense of what it's like to interact with a story organized into functions this way. Definitely check out the code as well to see how things are organized! If you're interested in extending this example, you can **fork** it from [this link](https://replit.com/@JonStapleton1/Interactive-Narrative-Example).

<ReplitEmbed url="https://replit.com/@JonStapleton1/Interactive-Narrative-Example" />

<!-- TODO: Record and link video -->
<VideoModule title="Functions as Scenes" video="https://www.youtube.com/embed/ZTnb83NxPi4">
This video covers how to use *functions* to organize an interactive narrative around *scenes*. You'll use this pattern a lot when you create your own interactive narratives. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

<!-- TODO: -->
<Callout title="Functions as Scenes Experiments">
Experiment with the story embedded above (you can also access it [here](https://replit.com/@JonStapleton1/Interactive-Narrative-Example)). This story only has one ending, but each scene has two options to choose from. 

After playing through the "story" once or twice, try creating a flowchart like the one of *Jack and the Beanstalk* referenced at the beginning of the module representing the events of the example story you just played through. You can make the flowchart however you wish, but here are some suggestions:

* Create the flowchart on a piece of paper. Draw four circles, and label them `scene1()`, `scene2()`, `scene3()`, and "End". Draw arrows between the different scenes to represent the different paths the reader might take through the story.
* Create the flowchart using [Google Drawings](https://docs.google.com/drawings/create?usp=direct_url). Click [this link](https://docs.google.com/drawings/create?usp=direct_url), and log into your Google account if prompted. Use the shapes tool to create four shapes. Use a text box to label them `scene1()`, `scene2()`, `scene3()`, and "End". Then, use the connector tool to draw arrows between the scenes to represent the different paths the reader might take through the story.

</Callout>

# Functions Mini-Projects

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Mild: Name" footerLink="#" spice="mild">
Open the [starter code]() at [this link](). The story written here has four scenes, but only uses three of them. Change the `scene1()`, `scene2()`, or `scene3()` functions so one of the first three scenes leads to the fourth scene. You can use the comments in the starter code as a guide.

Click the button below to check out the [starter code](TODO:)! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Medium: Name" footerLink="#" spice="medium">
Open the [starter code]() at [this link](). The story written here has four scenes, but one of them does not contain any code! Add a description and `if` statement to the "empty" scene such that it calls two of the other three functions associated with the other three scenes in the story (`scene1()`, `scene2()`, `scene3()`). Use the other function definitions in the starter code as a model.

Click the button below to check out the [starter code](TODO:)! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
</Prompt>

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Spicy: Name" footerLink="#" spice="spicy">
This story contains `if` statements that connect the scenes together, but the scenes don't have any descriptions! Replace the filler text in the `print()` statements with descriptions that tell a story. Make sure the descriptions make sense together! Edit the `if` statements as needed to connect your story in a way that weaves a narrative as necessary.

Click the button below to check out the [starter code](TODO:)! Remember to **fork** the code so you can edit it under your own [Repl.it](https://replit.com/~) account.
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

# Catalyzing Questions

* What are some ways to help students organize complicated interactive narratives into scenes (especially away from the computer)?
* Can you think of any limitations the scene-as-function pattern creates for people creating stories?
* How might you help students move away from linear Python programs toward programs decomposed into functions?
* Are there other ways to engage students in decomposition outside of creating interactive narratives?

----

# Next Up...

In the next module, you'll learn about designing interactive narratives, and will create one of your own. Click the button below to go to the next module!

<div class='container has-text-right'>
    <!-- <a href="{base}/modules/module-5" class='button is-primary'>Go to Module 4</a> -->
    <button class='button is-primary' disabled>Got to Module 5</button>
</div>

----