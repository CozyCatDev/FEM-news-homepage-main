# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I Learned
I used a minimal number of class names in contrast to the typical BEM convention. I understand that BEM can be used to avoid class name conflicts. This is because all elements can have equal specificity when giving them unique class names.

However, I just wanted to test out the workflow with using as few classes as possible. This makes more sense to me as it is only a simple project. As a result my HTML markup looks like this:

```html
<section class="main-content">
    <div class="img"></div>
    <h1>...</h1>
    <div class="desc">
        <p>...</p>
        <a class="button" href="#"><button>...</button></a>
    </div>
</section>
```
To select the elements I need, I just select the parent element itself which has a unique class name or use a descendant selector to select its contents:
```css
.main-content{
    ...
}
.main-content .img{
    ...
}
.main-content .button{
    ...
}
```
Doing it this way, I don't have to worry about specificity issues if I select the ".desc" or ".button" within other elements. I suppose one downside for this sort of solution is deeply nested or complex elements. For example, if I want to select a specific "p" element in ".main-content":
```css
.main-content .desc .sidebar p{
    ...
}
```
In this case, I believe BEM would be a better solution. However, in this simple challenge where elements are highly unique and selectable using the descendant selector, I think the method I used is perfect in this case. 

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
