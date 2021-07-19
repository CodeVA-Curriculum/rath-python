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

# Backstory

How do programs make decisions? Your music streaming service knows that if you press the pause button, then the music should pause. Programming if statements such as these are a foundational part of building programs that respond to user input or changing information. The if statement checks if a certain condition is `True` or `False`. This way the program knows what to do next, if a certain condition is met. Today we will learn how to program if/else statements within Python, and how to develop the logic that guides them, opening up a world of programming possibilities!

# If Statements

Now that we’ve learned how to handle variables and input in Python, how do we get our code to make decisions? Decision-making is a core part of programs. We want our creations to be able to respond to different inputs, so that if you hit one button on your controller, your video game knows to make your character jump, and if you press another button your character will crouch. We’ve learned how these decisions are made on the hardware of computer chips, using logic gates and electrical signals to turn bits on and off. But how do we make decisions on the programming language level?

The most basic and essential decision making tool we use is called if/else statements. These statements say that if a condition is met, then certain code will be run. Else, if the condition is not met, a separate set of code will be run. The statement that follows the if is called a conditional statement. If the conditional statement is True, the code in the if block of code will be executed. Otherwise, the code in the else block of code will be executed. This may seem simple, but this is a major building block of coding decisions into our programs. Let’s consider pseudocode for an example. How could we tell a user if they are old enough to vote?

Ask the user “How old are you?” and store the response in variable age
If age is greater than or equal to 18
Print “You are old enough to vote.”

\* INPUT age
\* IF age > = 18
\*     PRINT “You are old enough to vote.”

The way this code is written, there is only an output when the person’s age is greater than or equal to 18. It is perfectly valid to write if statements this way, if there is only a reaction needed by the computer when the condition is true. But if we also wanted to let the user know they are not old enough to vote if they are under 18, we will want to add an else statement as well.

Ask the user “How old are you?” and store the response in variable age
If age is greater than or equal to 18
Print “You are old enough to vote.”
Else
Print “You are not yet old enough to vote.”

\* INPUT age
\* IF age > = 18
\*     PRINT “You are old enough to vote.”
\*ELSE
\*    PRINT “You are not yet old enough to vote.”

We could chart the results of this program using various input, much like when we developed truth tables. The key mechanism of these statements is that if the condition after if is True, then the code indented following the if is run. If the condition is False, then the code indented following the else is run. Complete the following table with the values expected for the given input.

# Interactive Stories

## Secret Variables, Hidden Consequences

