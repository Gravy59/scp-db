---
title: Typography Test
description: Just a bunch of absolute nonsense I've written to test the typography.
date: 2021-12-18T11:10:36+08:00
draft: false
language: en
---

What follows from here is just a bunch of absolute nonsense I've written to
test the typography. It includes every sensible typographic element I could
think of, like bold text, unordered lists, ordered lists, block quotes, and
even italics.

# H1

## H2

### H3

#### H4

##### H5

###### H6

Headings complete.

## Emphasis

**Bold text** _Italic text_ **_Bold Italic text_** ~~Strikethrough~~

## Blockquotes

> **Interviewer:** Dr. Raymond Hamm, Site-85
>
> **Interviewee:** SCP-049
>
> ---
>
> [BEGIN LOG]
>
> **SCP-049:** (_In French_) So then, how should we begin? An introduction?
>
> **Dr. Hamm:** Is that French?
>
> > Here is a nested blockquote
>
> [END LOG]

## Lists

### Ordered

It's important to cover all of these use cases for a few reasons:

1. We want everything to look good out of the box.
2. Really just the first reason, that's the whole point of the plugin.
3. Here's a third pretend reason though a list with three items looks more
   realistic than a list with two items.

### Unordered

Now I'm going to show you an example of an unordered list to make sure that
looks good, too:

- So here is the first item in this list.
- In this example we're keeping the items short.
- Later, we'll use longer, more complex list items.

### What about nested lists?

Nested lists basically always look bad which is why editors like Medium don't
even let you do it, but I guess since some of you goofballs are going to do it
we have to carry the burden of at least making it work.

1. **Nested lists are rarely a good idea.**
   - You might feel like you are being really "organized" or something but you
     are just creating a gross shape on the screen that is hard to read.
     - The **n e s t** is strong with this one
   - Nested navigation in UIs is a bad idea too, keep things as flat as
     possible.
   - Nesting tons of folders in your source code is also not helpful.
2. **Since we need to have more items, here's another one.**

   - I'm not sure if we'll bother styling more than two levels deep.
   - Two is already too much, three is guaranteed to be a bad idea.
   - If you nest four levels deep you belong in prison.
     - **n e s t**

3. **Two items isn't really a list, three is good though.**
   - Again please don't nest lists if you want people to actually read your
     content.
   - Nobody wants to look at this.
   - I'm upset that we even have to bother styling this.

The most annoying thing about lists in Markdown is that `<li>` elements aren't
given a child `<p>` tag unless there are multiple paragraphs in the list item.
That means I have to worry about styling that annoying situation too.

And that's the end of this section.

## Tables

| Here          | is            | a                      | table                  |
| ------------- | ------------- | ---------------------- | ---------------------- |
| You           | can           | show                   | data                   |
| **Bold Data** | _Italic Data_ | **_Bold Italic Data_** | ~~Strikethrough data~~ |
