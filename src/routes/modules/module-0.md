---
title: 0. Course Overview
description: These modules are designed to help you get familiar with Python while exploring *interactive narrative design*, where we put together stories that leave space for the reader to explore, make choices, and engage with the events of the story in a participatory way.
next: module-1
layout: module
---

<script>
    import VideoModule from '$lib/components/VideoModule.svelte';
    import Fa from 'svelte-fa'
    import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
    import {base} from '$app/paths';
</script>

<style>
    iframe {
        border-radius: 20px;
    }
</style>

# Welcome!

Each module in this course follows the same format:

* **Backstory:** Unpack the context around the module, set up catalyzing questions to guide the inquiry throughout the module, and establish goals and objects for your engagement with the module.
* **Guided Inquiry:** Step through a sequence of tutorials and hands-on activities designed to help you learn the basic ideas presented in the module
* **Prompt:** A tightly-bounded, focused activity designed to facilitate sustained engagement with the ideas presented in the module
* **Catalyzing Questions:** A series of questions intended to provoke reflection & to put the module's content in context

Each module is intended to support between 30 and 60 minutes of focused, sustained engagement. You may find it suits you to leave the module in the middle and return to your work; that's totally fine. Work at your own pace, and don't hesitate to reach out to your facilitators if you run into any problems.

Below, you'll find some contextualizing information about these modules and our rationale for highlighting the tools and techniques we did. Feel free to take a look, or continue to **Module 1** by clicking the button below:

<div class='container has-text-right my-5'>
    <a href="{base}/modules/module-1" ><button class='button is-primary'>Go to Module 1<Fa class='ml-3' icon={faChevronRight} /></button></a>
</div>

# What Is an Interactive Narrative?

An *interactive narrative* is a story that invites the reader to participate in its outcome. You may have read a "choose-your-own-adventure" book in the past, where at critical moments you, as the reader, chose to follow one path or another affected by the characters' choices.

<VideoModule title="Bury Me, My Love" video="https://www.youtube.com/embed/Xbm3B__eQoI">
    *Bury Me, My Love* is an interactive fiction where you participate in the refugee narrative of a couple fleeing the Syrian civil war. While the story itself is fictional, it is profoundly grounded in the lived histories of real people experiencing these events, as well as the political realities which shape those narratives.
    <div class='has-text-right'>
        <a href="https://burymemylove.arte.tv/"><button class='button is-light'>Learn More</button></a>
    </div>
</VideoModule>

Interactive narratives engage readers' agency, and explore how people's choices lead to different outcomes. Writing these kinds of stories has a long history, dating back to the beginning of the consumer computing age. Some of the earliest video games took the form of interactive narratives (specifically, interactive fiction). This genre has continued to be a source of inspiration to many different authors, and independent authors publish hundreds of new interactive narratives every year using tools like [Twine](https://twinery.org/). Other expressive forms, like visual novels and point-and-click adventures, trace their history back to interactive fiction.

<!-- <VideoModule title="Bandersnatch" video="https://www.youtube.com/embed/7wnRi3Sclm8">
    <p><i>Bandersnatch</i> (2018) was a popular episode of the Netflix show <i>Black Mirror</i>, in which the viewer is prompted to guide the main character through a series of decisions, eventually leading to one of many possible endings. While this example doesn't necessarily lend itself to the study of history or the human experience, it is a good example of a contemporary interactive narrative artifact.</p>
    <div class='has-text-right'>
        <a href="https://www.vulture.com/2018/12/black-mirror-bandersnatch-all-endings-explained.html"><button class='button is-light'>Spoilers</button></a>
    </div>
</VideoModule> -->

<!-- <VideoModule title="IF Tech Foundation" video="#">
    <p>The <i>Interactive Fiction Technology Foundation</i> is an organization devoted to collecting and archiving interactive narratives written by all sorts of people on many different topics. They run the <a href="https://www.ifarchive.org/">IF Archive</a>, and host a story writing competition called <a href="https://ifcomp.org/">IFComp</a> each year. If you're curious about what amateur interactive fiction looks like, their archive is definitely worth browsing.</p>
    <div class='has-text-right'>
        <a href="https://iftechfoundation.org/"><button class='button is-light'>Learn More  </button></a>
    </div>
</VideoModule> -->

# Why Coding, and Why Python?

While many people have created pre-digital interactive narratives, the art form is, at least right now, a primarily digital one. By creating interactive stories with code, authors can express nonlinear, branching narratives with many possible endings and many possible paths for the reader to experience.

We chose to adopt **Python** has the central tool for these modules for a couple of related reasons:

* **Transferability:** Python is a general-purpose coding language, meaning that the skills you learn while you create your interactive narratives transfer to other creative paradigms, like data analysis and language processing
* **Ubiquity:** Python has been around long enough that it has built up a large community of users, resources, and platforms. If you want to learn more about coding, you won't have any trouble finding more Python projects to work on
* **Flexibility:** There are dozens of tools out there for writing code using Python, from web-based editors to fully offline development environments. No matter who you are and what resources you have access to, there's a good chance you can write and test Python on your computer

Because this is an introductory course, our interactive narratives will have sort of a "retro" vibe; reader will interact with a program called a **console** (also known as a "terminal" or "command prompt") to read the story and make choices. You can play an interactive narrative made with Python below, if you'd like; just click the green **Play** button in the bottom right-hand corner of the black **console** area.

<iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@JonStapleton1/zork-py?embed=true&outputonly=1"></iframe>

# Let's Get Started!

In the following modules, we will guide you through learning to create interactive narratives with Python. The path is broken up into the following stages:

* Output, Input, & Variables
* Conditional Statements
* Functions
* Designing Interactive Narratives

Each stage contains some text and examples, as well as a project that you can complete to help hone your skills. The best way to learn how to code is to jump in! Remember that making mistakes is part of the learning process; approach these modules with a sense of experimentation and discovery, and you'll be very successful.

<div class='container has-text-right my-5'>
    <a href='{base}/modules/module-1' ><button class='button is-primary'>Go to Module 1<Fa class='ml-3' icon={faChevronRight} /></button></a>
</div>

----
