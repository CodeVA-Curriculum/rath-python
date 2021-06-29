<script>
    import Callout from "$lib/components/Callout.svelte";
</script>

# Module 1: Speaking, Listening, & Remembering

This module introduces three fundamental tenets of computing: input, output, and storage. Every computing device or piece of software that you use can do these three things, and so our interactive narratives will need to as well. In practice, we will use these three things to create software that can **speak**, **listen**, and **remember** past exchanges with the reader/user.

# Backstory

In this series of modules, you will learn how to create Python programs that tell stories. Your role in this project is to *write* the narrative; you will be the author. The computer's role is to *tell* the story. In order for this relationship to work, you will need to create a script for the computer to follow; in other words, you'll have to write some code that tells the computer how to tell the story. Interactive narratives are like any other kind of software in that they need to be able to:

1. Show users different parts of the story
2. Prompt the user to interact with the story
3. Store user inputs to use later on in the story if appropriate

In this module, we will learn how to create Python programs that generate **output**, ask users to produce data as **input** to the program, and that **store** user inputs (and other kinds of data) for use later on in the program.

## Coding as a System of Representation

Coding involves writing instructions for a computer to follow. Ultimately, these instructions need to take the form of digital information--ones and zeros, high and low voltages. What we call a coding "language" is really another system of representation--not ones and zeros (like what a computer would use), and not a language humans would use. Rather, coding languages are somewhere *in between* these two types of representation. They are an interface between people and machines.

## Python as a Technology

Like all coding languages, **Python** is designed to serve as a representational medium. The people who created Python built it with assumptions about what it would be used for and what sorts of things are important about reading and writing code. These assumptions are borne out through **syntax**, the rules for writing code. Similar to how a spoken language involves putting together words with different meanings to communicate complex ideas, coding in Python involves putting together **commands** and **patterns**, which a piece of software called a **compiler** will use to create instructions for the computer.

[insert graphic]

The computer will follow these instructions, producing complex behavior based on how the commands and patterns in the code interact with one another. As long as the code follows the correct synax conventions, the compiler will create corresponding instructions for the computer. If the compiler can't figure out how to interpret the code (probably because the code failed to follow syntax rules), the code will fail and produce an error message.

[insert image of syntax error]

You'll probably experience syntax errors a lot when you're learning how to code. These moments of misunderstanding between you and the compiler can be positive and productive as you learn to communicate with one another as long as you don't let it's terseness discourage you!

# Guided Inquiry

Throughout these modules, you'll read code segments demonstrating different Python commands and patterns. As you make your way through the module, we *highly* encourage you to try writing code using those commands and patterns. Talking about code can sometimes be pretty abstract; it will be helpful to pair this information with some experience. First, you need somewhere to write and compile your code!

Follow either set of instructions below to get set up with Python on your computer. You can either use **[Repl.it]()** (which runs in your web browser and requires a pretty good internet connection) or you can set up Python on your computer (which requires no internet, but does involve installing unfamiliar software and may take some time). Click on one of the links below to see instructions for how to get set up with either set of tools:

* How to Use Repl.it (Recommended)
* How to Install and Use Python

## Speak

As we discussed above, all software has some form of input and output. The first, and easiest, form of output to learn in Python is **printing** to something called the **console**. In [Repl.it](), any messages your code says to `print()` will show up in the box to the right of where you write your code. To print to the console, we must use an aptly-named Python function (or command) called `print()`. The syntax for `print()` is as follows:

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

<Callout title="Try It!">

Try copying the code above into your code editor. Run the code, and observe the **output**. Then, try experimenting with the code to address the prompts below:

* Can you change the code to create a syntax error on purpose? Try finding three things in the code that are *unsafe* to change
* Now try the opposite--what parts of the code are safe to change?
* Try adding another line of code to the program. Follow the same **pattern** that you've already included in your program; just add another line after an existing one

</Callout>

## Listen

Code is deterministic -- if the code is the same, the behavior is the same

Experimentation Strategies

## Remember

# Prompt

Lorum ipsum

# Catalyzing Questions

* Think of software that you use often. What sorts of inputs does it ask for from you, the user? What sorts of outputs does it produce? Does it store any information in the short or long term?