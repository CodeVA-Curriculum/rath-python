---
title: 4. Organize
description: Now that you know all about how to make interactive narratives, you might wonder how to make longer, more interesting stories. This module is all about how to organize your work with functions.
previous: module-3
layout: module
# TODO: record & link video
video: "https://www.youtube.com/embed/ZTnb83NxPi4"
activities:
    - 💡 Lorum ipsum sit dolor amet
    - 🫑 Mild, Medium or Spicy Mini-Project
---

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

This sort of "diagonal" code is okay for beginners, but unless we figure out a different way to organize the code that makes up the story, things will get too complicated and difficult to manage as we add to the story. Not to mention that nested `if` statements are a little confusing to read!

This module is about **functions**. We will use functions to solve the problem of nested `if` statements in our interactive narratives. By creating functions, we can organize our story into *scenes*, allowing us to freely add new parts to the story without having to create many nested `if` statements. This is the last coding concept you will need to learn in order to make interactive narratives with Python!

# Functions

## Using Functions for Scenes

## Organizing Functions into Files

# Functions Mini-Projects

<!-- TODO: Write prompt, create starter code -->
<Prompt title="Mild: Name" footerLink="#" spice="mild">
Lorum ipsum sit dolor amet
</Prompt>

<Prompt title="Medium: Name" footerLink="#" spice="medium">
Lorum ipsum sit dolor amet
</Prompt>

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

# Catalyzing Questions

* What other kinds of programs could you create using `input()`, `print()`, variables, and `if` statements?
* What are some barriers to understanding that you imagine students might encounter when they begin working with `if` statements?
* Did you have difficulty writing `if` statements at first? What are some common mistakes you would warn someone about if they were doing this for the first time?

----

# Next Up...

In the next module, you'll learn about designing interactive narratives, and will create one of your own. Click the button below to go to the next module!

<div class='container has-text-right'>
    <!-- <a href="{base}/modules/module-5" class='button is-primary'>Go to Module 4</a> -->
    <button class='button is-primary' disabled>Got to Module 5</button>
</div>

----