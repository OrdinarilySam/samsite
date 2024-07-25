# Samsite (WIP)
Hello, and welcome to the one and only Samsite. 


This here is my portfolio website for both my coding projects and photography. 
It's a [SvelteKit](https://kit.svelte.dev/) website made completely on my own to showcase some projects and photos.
I was trying to go for a skeuomorphic design, which ends up being an actual portfolio.


For it, I made a typing animation component in Svelte for the typing effect. 
I'm hoping to extend this typing animation component to have a more general use in the future,
but because of how Svelte handles classes, it may be trickier to do what I had in mind.
That was being able to add classes to the children for things like coloring, font weights, font sizes, and text styling.
I still hope to work on this, but because it's not a quick implementation,
I'm choosing to continue on to get the website built before I revisit this.


Currently I'm working on adding a toml to printable resume component.
This will allow you to make adjustments to the toml file to quickly rerender a resume.
The end goal for this component is to make it always scale to one page, and allow for dynamic sections and details,
which would allow this to be used by anyone in any field.


Both of these components were heavily inspired by [this website](https://yok.dev), but with my own twist.


I'm still unsure about how I want the projects page to look.


For the photos page, I am looking into using [three.js](https://threejs.org/) in combination with an [imgur album](https://imgur.com/)
to make some floating images that are held by strings and are affected by the gravity of the page.
Which in my mind means when you scroll down they become weightless and bounce.


