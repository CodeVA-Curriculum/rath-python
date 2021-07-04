---
title: 1. Speaking & Listening
description: This module introduces two fundamental tenets of computing--input& output. Every computing device or piece of software that you use can do these two things, and so our interactive narratives will need to as well. In practice, we will use these input and output to create software that can speak with and listen to the reader/user.
previous: module-0
layout: module
---

<script>
    import Callout from "$lib/components/Callout.svelte";
    import CodeAndConsole from '$lib/components/CodeAndConsole.svelte';
    import Markdown from '$lib/components/Markdown.svelte';
    import VideoModule from '$lib/components/VideoModule.svelte';
    import {base} from '$app/paths';
</script>

<style>
    .err {
        color: whitesmoke;
    }
</style>

# Backstory

In this series of modules, you will learn how to create Python programs that tell stories. Your role in this project is to *write* the narrative; you will be the author. The computer's role is to *tell* the story. In order for this relationship to work, you will need to create a script for the computer to follow; in other words, you'll have to write some code that tells the computer how to tell the story. Interactive narratives are like any other kind of software in that they need to be able to:

1. Show users different parts of the story
2. Prompt the user to interact with the story

In this module, we will learn how to create Python programs that generate **output** and ask users to produce data as **input** to the program.

## Coding as a System of Representation

Coding involves writing instructions for a computer to follow. Ultimately, these instructions need to take the form of digital information--ones and zeros, high and low voltages. What we call a coding "language" is really another system of representation--not ones and zeros (like what a computer would use), and not a language humans would use. Rather, coding languages are somewhere *in between* these two types of representation. They are an interface between people and machines.

## Python as a Technology

Like all coding languages, **Python** is designed to serve as a representational medium. The people who created Python built it with assumptions about what it would be used for and what sorts of things are important about reading and writing code. These assumptions are borne out through **syntax**, the rules for writing code. Similar to how a spoken language involves putting together words with different meanings to communicate complex ideas, coding in Python involves putting together **commands** and **patterns**, which a piece of software called a **compiler** will use to create instructions for the computer.

The computer will follow these instructions, producing complex behavior based on how the commands and patterns in the code interact with one another. As long as the code follows the correct synax conventions, the compiler will create corresponding instructions for the computer. If the compiler can't figure out how to interpret the code (probably because the code failed to follow syntax rules), the code will fail and produce an error message.

<pre>
    <code class='err'>
          File "main.py", line 1
    print('it's not going to work')
              ^
SyntaxError: invalid syntax
</code>
</pre>

You'll probably experience syntax errors a lot when you're learning how to code. These moments of misunderstanding between you and the compiler can be positive and productive as you learn to communicate with one another, as long as you don't let it's terseness discourage you!

## Getting Started

Throughout these modules, you'll read code segments demonstrating different Python commands and patterns. We *highly* encourage you to try writing code using those commands and patterns. Talking about code can sometimes be pretty abstract; it will be helpful to pair this information with some experience. First, you need somewhere to write and compile your code!

If this is your first time working with Python (or any coding language at all), we recommend that you use [Repl.it](https://replit.com/) as your coding environment. [Repl.it](https://replit.com/) runs in your web browser, which means that you don't have to download or install any software to get started with it. Check out the video below for instructions on how to get started:

<VideoModule title="Getting Started with Repl.it" video="https://www.loom.com/embed/1aeb517545da492dab3f735fcac27980">
[Repl.it](https://replit.com/) is an online "integrated development environment", or "IDE". It is designed to help you get started with coding without having to install any new software or set anything up on your computer. [Repl.it](https://replit.com/) isn't as fast or full-featured as a "native" Python installation, but it's a lot easier to get started with (and it's more than powerful enough for our interactive narratives).

<a href="https://replit.com/" class='my-4 button is-fullwidth has-text-weight-normal'>Go to Replit.com</a>
</VideoModule>

# Speak

As we discussed above, all software has some form of input and output. The first, and easiest, form of output to learn in Python is **printing** to something called the **console**. In [Repl.it](https://replit.com/), any messages your code says to `print()` will show up in the box to the right of where you write your code. To print to the console, we must use an aptly-named Python function (or command) called `print()`. The syntax for `print()` is as follows:

```python
print("A message to show to the user")
```

You can add as many of these as you want to! Remember--these commands are the *script* your computer will follow when it tells its story. Whenever you want the computer to "speak" to the user, this is the command you will use. Your programs can get pretty verbose...

```python
print("Hello!")
print("This is a Python program")
print("All it does it output messages")
print("So it might as well output a lot of them.")
```

Your program can include as many of these commands as you want! There are a couple of details to take note of:

* `print("hello")` and `print('hello')` do the same thing; single and double quotes aren't different in Python. Just make sure you use the same kind of quotation mark on either side of your message!
* The name of the function you are using is `print()`, and the text inside the quotation marks is a **string**
* For now, you should only print **strings**; this means that you should always put matching quotation marks around the text you want the computer to `print()`

<VideoModule title="Print Video Tutorial" video="https://www.loom.com/embed/23030bd5c60f46e8b6ae77e80c96a603">
    This video covers the content in the above section in a tutorial format. Code along with the video to practice running, testing, and editing Python programs!

    The buttons below will take you to starter code (similar to what the video will start with) that you can edit as you practice. You should "fork" (i.e., copy) the code before working with it; watch the video for a demonstration.
    <a href="https://replit.com/@JonStapleton1/Print-Statements-Starter" class='button is-fullwidth'>Starter Code</a>
</VideoModule>

<Callout title="Try It!">
Try copying one of the code examples above into your code editor. Run the code, and observe the **output**. Then, try experimenting with the code to address the prompts below:

* Can you change the code to create a syntax error on purpose? Try finding three things in the code that are *unsafe* to change
* Now try the opposite--what parts of the code are safe to change?
* Try adding another line of code to the program. Follow the same **pattern** that you've already included in your program; just add another line after an existing one

</Callout>

# Listen

The programs you read about above don't do very much; they just show information to the user via the console. Outputting text is going to be a vital component of our interactive narratives, but we also need the computer to get *input* from the user. Right now our program only instructs the computer to speak; we need to instruct the computer to listen, as well.

The command that tells the computer to "listen" to the user is called `input()`. Try typing the code below into [Repl.it](), and then run the code.

```python
# editor
print("What is your name?")
input()
print("It's nice to meet you!")
```

You should end up with something that looks like this in your console:

```text
What is your name?
 
  
```

At first glance, it seems like your program is broken; why didn't it print the last message? The answer lies in the `input()` command. After you run your program, the computer follows the commands *in order*. When it gets to the `input()` command after printing the first message, it **waits for the user to type something in to the console**. Try it out for yourself; run your code, and then click over into the console area and try typing something on your keyboard. When you're done, press `Enter` to move on with the rest of the program!

When you write Python programs, you can use `print()` to "speak" to the person using your program, and you can use `input()` as a way of prompting them to interact with your program. With these two commands, you can start making "interactive" programs like the chatbot below:

```python
print("Hello! I'm your digital assistant")
print("What is your name?")
input() # wait for the user to respond, then...
print("Welcome! Please tell me your age, as well")
input()
print("It's so nice to meet you! How are you feeling today?")
input()
print("Thanks for chatting with me!")
print("See you tomorrow!")
# etc...
```

After the last line of your "script", the program will end and you'll have to press the "play" button again to interact with your Python program.

After adding `input()` to your programs, you can write programs that tell the computer to *interact* with the reader of your interactive narrative. Right now, these programs aren't very "smart"; the story doesn't change based on what the user says during those interactions. We will cover that stuff in the next two modules. For now, it's okay to just practice writing new code on your own, and to begin thinking about what sorts of choices users might make in a story that you write.

<VideoModule title="Input Video Tutorial" video="https://www.loom.com/embed/81d81c249c4a41d2a7cea6da359ecff6">
    This video covers the content in the above section in a tutorial format. Code along with the video to practice running, testing, and editing Python programs!

    The buttons below will take you to starter code (similar to what the video will start with) that you can edit as you practice. You should "fork" (i.e., copy) the code before working with it; watch the video for a demonstration.
    <a href="https://replit.com/@JonStapleton1/Input-Starter" class='button is-fullwidth'>Starter Code</a>
</VideoModule>

<Callout title="Try It!">
Try copying one of the code examples above into your code editor. Run the code, and observe the **output**. Then, try experimenting with the code to address the prompts below:

* Try *starting* your program with an `input()` command. What are some possible problems with this pattern? Are there situations where a coder would *want* to start their program with `input()`?
* Now try *ending* your program with an `input()` command. Is this a good or confusing design decision?

</Callout>

# Apply Your Skills

When coders only know how to use a couple of commands, their creative space is pretty small. Using only `print()` and `input()` commands is pretty limiting! Don't worry--we will add a lot more tools to your toolbox in the (very) near future. For now, check out the prompt below, which is designed to help you practice writing Python programs that include `print()` and `input()` commands:

<Callout title="Print & Input Mini-Project" footerLink="https://replit.com/@JonStapleton1/Print-and-Input-Project-Starter">
[StoryCorps](https://storycorps.org/) is an organization that works to collect stories from people around the world. Many of the stories collected by StoryCorps over the years are now archived in the Library of Congress, helping to preserve narratives about life in America told by people from many different walks of life. Part of StoryCorp's work involves helping people who may not have interview experience conduct interviews with friends and family. To help with this process, they have curated a list of [great questions](https://storycorps.org/participate/great-questions/).

Follow the instructions below to complete the hands-on component of this module:

1. Think of someone you could interview for StoryCorps. They could be a family member, a friends, a colleauge, or a student.
1. Go to https://storycorps.org/participate/great-questions/
2. Find a list of compelling questions that you would like to ask your hypothetical interview subject
4. Write an interactive Python program that asks the user the questions you've selected, and pauses to allow them to answer by typing into the console. You can use the [starter code](https://replit.com/@JonStapleton1/Print-and-Input-Project-Starter) as a starting point if you'd like

</Callout>

<div class='card my-5'>
    <div class='card-content'>
        <h3>OpenClass AI Practice Questions</h3>
        <p>If you would like some further practice with these concepts, click the button below to access free-response questions designed to help you master <code>print()</code> and <code>input()</code> functions in Python.</p>
    </div>
    <div class='card-footer'>
        <a href="https://codeva.openclass.ai/resource/assignment-60e215745b15f68db6620cb0?code=8cSRL_5lsFIdfA" class="card-footer-item">View Practice Questions</a>
    </div>
</div>

# Catalyzing Questions

1. Imagine that you were going to use your interview program to conduct a real StoryCorps interview. Is a program that *only* uses `print()` and `input()` appropriate for that task? Why or why not?
2. What additional pieces of functionality do you need to be able to code in order for you to create an **interactive narrative** like the one in [Module 0]({base}/modules/module-0)?
3. If you were to teach `print()` and `input()` to students, how would you introduce the topic?

----

# Next Up...

In the next module, you'll learn about how we can create Python programs that **remember** information they gather from users. click the button below to go to the next module!

<div class='container has-text-right'>
    <a href="{base}/modules/module-2" class='button is-primary' disabled>Go to Module 2</a>
</div>

----