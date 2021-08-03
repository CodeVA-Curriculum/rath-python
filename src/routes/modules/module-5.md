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
</script>

# Backstory

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

<!-- TODO: Add errors -->

<!-- TODO: Record and add video -->
<VideoModule title="Axioms for Coding Projects" video="https://www.youtube.com/embed/FaiOCrMcqLk">
This video covers the above section of the module--axioms for coding projects. There are a lot of strategies that might be useful for beginners trying to make large projects for the first time, but these three ideas are the most important:

* Always start with working code
* Add code a little at a time
* Be resilient!

</VideoModule>

# Designing Interactive Narratives

Before you start coding, it's a good idea to come up with a design for your story. That way, you aren't trying to simultaneously practice your Python skills while also trying to come up with an engaging narrative. Follow the steps below to design your interactive narrative:

<!-- TODO: add steps -->

# Creating an Interactive Narrative

Now that you've created your story design, you can start coding! Each **scene** you developed in your design process will get its own **function**, and each **function** will contain the following:

* A `print()` statement containing some descriptive text to help the reader understand the events of the story
* A `print()` statement containing a series of choices for the reader to select from
* A **variable** that stores the reader's choice
* An `if` statement, where each section calls the **function** corresponding with the relevant scene.

Here's an example of a scene function:

<!-- TODO: add example -->

By connecting scenes together, you'll be able to weave a story with many possible paths, and potentially many possible endings. Use a previous project of yours as a starting point, or use the starter code below to begin your project. In either case, **fork** the code to make a new version. The video below goes into detail reviewing how to get started:

<VideoModule title="Creating an Interactive Narrative" video="">
This video covers how to get started creating the interactive narrative you designed in the section above. Use the button below to open up the [starter code](TODO: add link), which you can use to code along with the video. Don't forget to *fork* the code before you try editing it yourself!

<a href="TODO: add link" class='button is-fullwidth my-5'>Starter Code</a>
</VideoModule>

When you've completed your code, submit it to us using the [form linked here](TODO: add form link).

<a href="TODO: add form link" class='button is-primary'>Submit Your Project Here</a>

# Sharing Interactive Narratives

If you'd like to share your interactive narrative with someone else, you have a few options. Here they are:

* Send the reader the Repl.it link to your project. Don't click "Share"; that's for collaborating with other coders. Instead, just copy the URL to the page containing your project and send it via text or email to whomever you'd like to read it.
* If you'd like to embed your project in another webpage, like a Canvas module or a blog post, you can **embed** Repl.it projects (there are several examples of this throughout the modules). Use the embed code generator below to create your embed code, and simply paste the code into the appropriate location for whatever platform you want to use to display your project. 

<ReplitEmbedGenerator />

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

That's the end! Thank you for engaging with these modules; we hope that you enjoyed learning about Python and creating your own interactive narratives. Before you go, please be sure to fill out the [form]() linked below; it asks some questions about your experience, and we really want to hear your feedback so we can improve this tool for others in the future.

<!-- TODO: Add box with form link -->

Now that you've learned some Python, you have a lot of possible "exit ramps" to explore. Python can be used to create all sorts of things! Check out the list below for some new kinds of projects and resources you might be interested in:

<!-- TODO: Create list -->
* Lorum ipsum

If you want to stick with interactive narratives (with or without Python), check out the section below!

## Other Narrative Tools

If you liked the idea of interactive narratives, but are looking for different tools than the ones we covered in these modules, check out the resources and tools linked below:

* **[Twine]():** A visual coding language specifically designed for creating interactive narratives. It's a pretty robust tool; the "programming" is done via creating flowcharts (much like the ones we used to design our interactive narratives). It runs in a web browser, so anyone with an internet connection can get started right away. [Twine]() includes lots of tutorials on their site; I think it's a pretty accessible tool. [Twine]() also makes it easy to share and publish your story once you're done.
* **[Adventure Lib]():** If you liked Python but want to level-up your skills, [Adventure Lib]() is a Python **library** designed to help people create interactive narratives. A **library** is a set of functions and patterns for people to use; basically, [Adventure Lib]() gives you a powerful structure to create stories within. Unlike [Twine](), it isn't a full tool or website; you can make programs that use [Adventure Lib]() on Repl.it if you'd like (check out the [example]() linked here). They have a great [tutorial]() that goes over the basics; check it out if you're interested!

----