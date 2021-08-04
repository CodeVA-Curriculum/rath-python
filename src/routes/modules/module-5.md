---
title: 5. Create
description: Finally, you have enough Python background to create your interactive narratives! This module covers some basic ideas, patterns, and strategies for designing and creating interactive narratives, along with tips for scaffolding student engagement with interactive narratives.
previous: module-4
layout: module
# TODO: Replace video link
video: "https://www.youtube.com/embed/FaiOCrMcqLk"
# TODO: Figure out what to put for activities
activities:
    - 💡 Interactive Narrative Project
---

<script>
    import Callout from '$lib/components/Callout.svelte';
    import VideoModule from '$lib/components/VideoModule.svelte';
    import Prompt from '$lib/components/Prompt.svelte';
    import ReplitEmbed from '$lib/components/ReplitEmbed.svelte';
    import ReplitEmbedGenerator from '$lib/components/ReplitEmbedGenerator.svelte';
    import {base} from '$app/paths';
    import Steps from '$lib/components/Steps.svelte';
    import Markdown from '$lib/components/Steps.svelte';
    import CodeAndConsole from '$lib/components/CodeAndConsole.svelte';
    import flowchart from '$lib/assets/JackandBeanstalk.png';
</script>

# Time to Create!

We structured this module a little differently than the others. You've covered everything you need to build your own interactive narrative. With `print()`, `input()`, `if` statements, variables, and functions, you can create all manner of interactive stories with Python. 

This module starts you right off with instructions for designing, creating, and submitting your interactive narrative, the capstone project of this series of modules. After these instructions, we've included some tips, tricks, and advice for you to take advantage of as needed. There's a lot of extra material that you can take advantage of if you'd like, but there aren't any more practice activities to help reinforce your learning. This module is all about getting hands-on with Python and creating something of your own!

# Designing Interactive Narratives

Before you start coding, it's a good idea to come up with a design for your story. That way, you aren't trying to simultaneously practice your Python skills while also trying to come up with an engaging narrative. Follow the steps below to design your interactive narrative:

<Steps title="1. Decide on a Theme">
The first step will be to figure out what your story is about. Here are some ideas to help you narrow down your choices:

* Tell a story about a particular historical event, where the reader can explore the different perspectives of the people involved
* Tell a story from the perspective of an important historical figure who has to solve a problem, where the reader guides the figure's decision-making
* Do some research about a current event, and tell a story about a person embroiled in the event in a way that helps the reader understand the person's experience

</Steps>

<Steps title="2. Map Out Your Scenes">
The next step is to map out your scenes. Use a flowchart like the one pictured here, showing the different scenes that will comprise your story. Draw arrows between the scenes to show what scenes the reader might engage with given the decisions they make at different points in the story. You can use a number of tools to create your flowchart:

* Sticky notes on a piece of paper
* [Jamboard](https://jamboard.google.com/) in a web browser
* [Google Drawings](https://docs.google.com/drawings/create?usp=direct_url) in a web browser

<div slot="code">

<img alt="A flowchart representing the plot of Jack and the Beanstalk, with additional paths included speculating as to how the story might go if Jack had made different decisions" src={flowchart} style="margin-top: 3rem; max-width: 460px;">

</div>

</Steps>

<Steps title="3. Create Function Definitions">
Now that you have all of your scenes picked out, it's time to start coding! You can use the [starter code linked here]() if you want to start with a working example to modify, or you can make a [Repl.it]() project from scratch. Either way, start by creating empty function definitions for each scene in your story as shown here.

<a class='button is-dark is-fullwidth mt-3' href="TODO: make starter code">View Starter Code</a>

<div slot="code">

```python
def go_to_town():
    pass 
    # add pass to avoid 
    # empty function errors

def climb_beanstalk():
    pass

# etc...
```
</div>
</Steps>

<Steps title="4. Write Your First Scene">
Finally, start adding code to your first scene. Once you've added all the parts you need for the scene (see [module 4]({base}/modules/module-4) for an example), be sure to **call** the function associated with your first scene at the bottom of your code, *after* all the function definitions.

Each section of your `if` statement should include a **call** to another function, unless you want your story to end. I also recommend putting "restart" call to the original function in your `else` section, so if the reader accidentally makes a typographical error they get another chance to answer the question.

<div slot="code">

```python
def intro():
    print("Once upon a time...") # etc.
    print("Will you X or Y?")
    answer = input() # get choice
    if answer == "X":
        print("You chose X!")
        scene_x() # activate scene X
    elif answer == "Y":
        print("You chose Y!")
        scene_y() # activate scene Y
    else:
        print("That's not an option")
        intro() # restart intro

# all the other defs go here...

intro() # start the story
```
</div>
</Steps>

# Creating an Interactive Narrative

Now that you've created your story design and the start of your program, you can start coding the rest of the scenes! Each **scene** you developed in your design process will get its own **function**, and each **function** will contain the following:

* A `print()` statement containing some descriptive text to help the reader understand the events of the story
* A `print()` statement containing a series of choices for the reader to select from
* A **variable** that stores the reader's choice
* An `if` statement, where each section calls the **function** corresponding with the relevant scene.

Here's another example of a scene function:

```python
def intro():
    print("Once upon a time...") # etc.
    print("Will you X or Y?")
    answer = input() # get choice
    if answer == "X":
        print("You chose X!")
        scene_x() # connect to scene X
    elif answer == "Y":
        print("You chose Y!")
        scene_y() # connect to scene Y
    else:
        print("That's not an option")
        intro() # restart intro
```

By connecting scenes together, you'll be able to weave a story with many possible paths, and potentially many possible endings. Use a previous project of yours as a starting point, or use the starter code below to begin your project. In either case, **fork** the code to make a new version. The video below goes into detail reviewing how to get started:

<VideoModule title="Creating an Interactive Narrative" video="">
This video covers how to get started creating the interactive narrative you designed in the section above. Use the button below to open up the [starter code](TODO: add link), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="TODO: add link" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

<Prompt title="Interactive Narrative Project" footerLink="TODO: Create link">
Create an interactive narrative that tells a story. Here are some prompts to get you started, in case you're not sure what to write your story about:

* Tell a story about a particular historical event, where the reader can explore the different perspectives of the people involved
* Tell a story from the perspective of an important historical figure who has to solve a problem, where the reader guides the figure's decision-making
* Do some research about a current event, and tell a story about a person embroiled in the event in a way that helps the reader understand the person's experience

Follow the steps detailed above to get started. Here is a summary of the steps:

1. Create a flowchart of your story, showing each scene and using arrows to indicate which scenes will lead to one another
2. Create a Python program where each scene is represented by a function
3. Add code to your function definitions one at a time, testing as you go

When you've completed your code, submit it to us using the [form linked here](TODO: add form link). Then, please complete the [survey](https://docs.google.com/forms/d/e/1FAIpQLSeTbspGwm1jX7BfuzwLa9H-h28VRP2sylI8qOdDQfmxu7ivyQ/viewform) so we can learn about your experience with these modules.

<div class='columns'>
<div class='column'>
<a href="TODO: add form link" class='button is-primary is-fullwidth'>Submit Your Project Here</a>
</div>
<div class='column'>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeTbspGwm1jX7BfuzwLa9H-h28VRP2sylI8qOdDQfmxu7ivyQ/viewform" class='button is-warning is-fullwidth'>Take the Survey</a>
</div>
</div>
</Prompt>

# Sharing Interactive Narratives

If you'd like to share your interactive narrative with someone else, you have a few options. Here they are:

* Send the reader the Repl.it link to your project. Don't click "Share"; that's for collaborating with other coders. Instead, just copy the URL to the page containing your project and send it via text or email to whomever you'd like to read it.
* If you'd like to embed your project in another webpage, like a Canvas module or a blog post, you can **embed** Repl.it projects (there are several examples of this throughout the modules). Use the embed code generator below to create your embed code, and simply paste the code into the appropriate location for whatever platform you want to use to display your project. 

<ReplitEmbedGenerator />

----



# Supplemental Material

This module is all about putting your new Python skills to work. You've learned how to use `input()` and `print()`, how to make variables that store information, how to use `if` statements to make interactive programs, and how to use functions to organize the sections of your code toward creating an interactive narrative. You'll draw on all of these skills to build your own interactive narrative at the end of this module.

This module does not contain any new concepts that you'll need to draw on to complete your project; you have all the necessary tools already. Before we jump into creating your story, however, it's a good idea to go over some **axioms** for project-building that you may not already know about:

## 1. Always Start with Working Code

When you begin a project, it's a really good idea to **start with something that's already working**. It will be a little while before you can start a project from a blank file; you don't need to have memorized the syntax rules and the way to type everything to be successful. It's far more important that you practice reading working code and **finding the patterns that you can modify** in order to meet your design goals. The fluency required to start something from "scratch" will come later.

If you've completed some or all of the prompts and activities in previous modules, you have a *lot* of working code to start with! I recommend starting with one of the examples from [module 5]({base}/modules/module-5) and modifying that as a way of getting started, or use the starter code linked in the **Prompt** below as a starting point. Then, use the patterns in your starter code as a guide for creating your own new patterns as you extend the starter code and create your own new thing.

## 2. Add Code a Little at a Time

One of the pieces of intuition you will begin to develop is how often to test your code. Some beginner coders will try to write their entire program in one go, testing once at the very end. This strategy will often lead to frustration; it's easy to make simple mistakes, and these mistakes pile up a lot if you aren't testing your code frequently. The problem is compounded by the fact that many beginners aren't yet comfortable deciphering error messages, so they give up when they get a bunch of scary red errors.

Instead of writing everything in one go, follow the steps below when you write your code:

1. Write a line or two of code that you think will work without causing error messages
2. Think about what you imagine the code will do; create a hypothesis by predicting what sort of behavior your program will exhibit
3. Test your hypothesis by running the code and comparing the code's behavior to your expectations
4. Repeat until your code works as intended

The most difficult thing about the four steps above is knowing when to move from step 1 to step 2. For now, I suggest testing your code after adding any of the following patterns:

1. After adding a long `print()` statement
2. After adding an `if` statement
3. After finishing a "scene" function definition

If you start to wonder whether or not your code will work, that's the moment to test it out. If you can't come up with a hypothesis about how your code will behave before you test it, you have gone too far and you need to simplify the code (e.g., remove lines) until you can form a hypothesis to test against.

## 3. Be Resilient!

As you work with Python, you *will* see error messages, and there will be *many* moments where your code does not work as intended. This is *not* because you are a beginner; *everyone* experiences error messages when they code. Error messages are a normal part of the development process. Remember--errors are a result of miscommunication between you and Python. Most of the time, it's because you either 1) forgot the exact syntax required for a pattern, or 2) made a typographical error that escaped your notice.

Here are some common errors you will probably encounter, and how to address them:

<CodeAndConsole title="Forgetting 'If' Statement Colon">
One big problem people run into is forgetting to add the colon after the `if` statement condition:
<div slot="code">

```python
if answer == "hello"
    print("Hello as well!")



```
</div>
<div slot="console">

```
  File "main.py", line 1
    if answer == "Hello"
                       ^
SyntaxError: invalid syntax
```
</div>
</CodeAndConsole>

<CodeAndConsole title="Empty If Statement">
It's easy to forget that you can't have an empty `if` statement, and that you should always indent the line of code you intended to be inside the `if` statement:
<div slot="code">

```python
if answer == "hello":
print("Hello as well!")

print("The End!")

```
</div>
<div slot="console">

```
  File "main.py", line 2
    print("Hello as well!")
    ^
IndentationError: expected an indented block
```
</div>
</CodeAndConsole>

<CodeAndConsole title="Empty Function Definition">
It's easy to forget that you can't have an empty function definition, and that you should always indent the line of code you intended to be inside the function:
<div slot="code">

```python
def greeting():
print("Hello as well!")

greeting()

```
</div>
<div slot="console">

```
  File "main.py", line 2
    print("Hello as well!")
    ^
IndentationError: expected an indented block
```
</div>
</CodeAndConsole>

<CodeAndConsole title="Indentation Error">
Python is very, very picky about its indentation. You should *only* use indented lines as a part of function definitions or `if` statements.
<div slot="code">

```python
print("Hello!")
    print("Another line")
print("The End!")


```
</div>
<div slot="console">

```
  File "main.py", line 2
    print("Another line")
    ^
IndentationError: unexpected indent
```
</div>
</CodeAndConsole>

<CodeAndConsole title="Indentation Level">
When you indent with Python, you should be sure to use the `Tab` key to ensure that your indentations are the same "size" throughout your program. When your program includes "ragged" indentations, you are liable to see "unexpected indent" errors.
<div slot="code">

```python
print("Hello!")

if True:
    print("Welcome!")
  print("This is another line")
```
</div>
<div slot="console">

```
  File "main.py", line 5
    print("This is another line")
                                ^
IndentationError: unindent does not 
match any outer indentation level
```
</div>
</CodeAndConsole>

<CodeAndConsole title="Mismatched Quotation Marks">
The `"` quotation mark and the `'` quotation mark are functionally identical in Python, but when you use one of them to open a string, you must use the same one to close it.
<div slot="code">

```python
print("Hello!")
print("Another line')



```
</div>
<div slot="console">

```
  File "main.py", line 2
    print("Another line')
                        ^
SyntaxError: EOL while scanning string literal
```
</div>
</CodeAndConsole>

<!-- TODO: Record and add video -->
<VideoModule title="Axioms for Coding Projects" video="https://www.youtube.com/embed/FaiOCrMcqLk">
This video covers the above section of the module--axioms for coding projects. There are a lot of strategies that might be useful for beginners trying to make large projects for the first time, but these three ideas are the most important:

* Always start with working code
* Add code a little at a time
* Be resilient!

</VideoModule>

# Tips, Tricks, & Patterns

While you don't need any new concepts or patterns to create an interactive narrative, there are some ways to extend your skills and create even more interesting projects. The tutorials below are purely optional, but if you are feeling spicy feel free to click around and see if any of these advanced topics seem useful to you:

## Invisible Variables

Right now, you are probably only using variables to store user input before checking that input in an `if` statement. Variables have many other uses in addition to this one, however. Variables can store any kind of information, and unless you `print()` the value of that variable, the user cannot see its value. They may not even know the variable exists! Using "invisible" variables like these can be useful if you want to keep track of many decisions the reader makes, and choose to run scenes based on more complex information than just their choice. For example, you could keep track of "good" or "bad" decisions across the whole story, and then give the player a "good" or "bad" ending based on the total result of their choices.

<!-- TODO: Record video and add link -->
<VideoModule title="Invisible Variables" video="https://www.youtube.com/embed/FaiOCrMcqLk">
This video covers some alternative uses for variables in an interactive narrative, as well as how to use one persistent variable across multiple functions. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

## Organizing Scenes

If you are creating a particularly long story, you may find it overwhelming to scroll through your *very* long program as you add more scenes. While it is absolutely possible to keep your entire program in one file, it is probably a good idea to organize your scenes into different files once you reach a certain level of complexity. Organizing your functions into different files may help you reduce your cognitive load while adding to your project, and also helps you find old scenes that you'd like to edit more quickly.

<!-- TODO: Record video and add link -->
<VideoModule title="Organizing Scenes" video="https://www.youtube.com/embed/FaiOCrMcqLk">
This video tutorial covers how to organize functions into different files, as well as how to import these functions across files in your project. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

## Inventory

If you want to make a more "game"-like interactive narrative, you may find yourself wondering how to have the "player" carry items through the story. You can accomplish this sort of thing by using **invisible variables** as described in the video tutorial above, but if the player needs to store lots of items using simple variable might not cut it. Instead, you can use a special flavor of variable called a **list**. *A word to the wise--this is a pretty spicy concept (and it is totally, 100% optional).*

<!-- TODO: Record video & add link -->
<VideoModule title="Inventory" video="https://www.youtube.com/embed/FaiOCrMcqLk">
This video covers how to use a list to keep track of items collected by a player during the story. This is a pretty advanced concept for beginners. Use the button below to open up the [starter code](https://replit.com/@JonStapleton1/Blank-Python-Project), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="https://replit.com/@JonStapleton1/Blank-Python-Project" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

# Next Steps

That's the end! Thank you for engaging with these modules; we hope that you enjoyed learning about Python and creating your own interactive narratives. Before you go, please be sure to fill out the [form](https://docs.google.com/forms/d/e/1FAIpQLSeTbspGwm1jX7BfuzwLa9H-h28VRP2sylI8qOdDQfmxu7ivyQ/viewform) linked below; it asks some questions about your experience, and we really want to hear your feedback so we can improve this tool for others in the future.

<div class='card my-3'>
    <div class='card-content'>
        <h3 class='subtitle'>Fill Out Our Survey!</h3>
        <p class='block'>We would love for you to fill out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTbspGwm1jX7BfuzwLa9H-h28VRP2sylI8qOdDQfmxu7ivyQ/viewform">survey</a>. Hearing about your experiences will help us improve this tool and create better tools in the future to help people learn about computer science.</p>
    </div>
    <div class='card-footer'>
        <a class='card-footer-item' href="https://docs.google.com/forms/d/e/1FAIpQLSeTbspGwm1jX7BfuzwLa9H-h28VRP2sylI8qOdDQfmxu7ivyQ/viewform">Take the Survey</a>
    </div>
</div>

----

Now that you've learned some Python, you have a lot of possible "exit ramps" to explore. Python can be used to create all sorts of things! Check out the list below for some new kinds of projects and resources you might be interested in:

* Game Design with [Pygame-Zero](https://pygame-zero.readthedocs.io/en/stable/)
* Create database APIs with [Flask](https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask)
* Explore data sets with [Pandas](https://www.kaggle.com/learn/pandas)

If you want to stick with interactive narratives (with or without Python), check out the section below!

## Other Narrative Tools

If you liked the idea of interactive narratives, but are looking for different tools than the ones we covered in these modules, check out the resources and tools linked below:

* **[Twine]():** A visual coding language specifically designed for creating interactive narratives. It's a pretty robust tool; the "programming" is done via creating flowcharts (much like the ones we used to design our interactive narratives). It runs in a web browser, so anyone with an internet connection can get started right away. [Twine]() includes lots of tutorials on their site; I think it's a pretty accessible tool. [Twine]() also makes it easy to share and publish your story once you're done.
* **[Adventure Lib]():** If you liked Python but want to level-up your skills, [Adventure Lib]() is a Python **library** designed to help people create interactive narratives. A **library** is a set of functions and patterns for people to use; basically, [Adventure Lib]() gives you a powerful structure to create stories within. Unlike [Twine](), it isn't a full tool or website; you can make programs that use [Adventure Lib]() on Repl.it if you'd like (check out the [example]() linked here). They have a great [tutorial]() that goes over the basics; check it out if you're interested!

----