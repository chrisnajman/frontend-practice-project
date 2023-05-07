---
permalink: /index.html
---

[Website (Git Pages)](https://chrisnajman.github.io/frontend-practice-project)

# Frontend Practice Project

## Description

This is a page built from the [Abstract Project][abstract] design at
[Frontend Practice][frontend].

Although I followed the design most of the way, I became more interested in:
- working out how to use SVG Sprites,
- breaking down Javascript into modules,
- coordinating CSS Media queries and Javascript to control the mobile menu,
than absolute fidelity to the design.

## HTML

- `template` used for individual 'cards'.
- `dialog` element used for 'Sign in' and 'Submit request' forms.

## CSS

- `flexbox` is used for the overall page layout and many of the page elements.
- `grid` is used only for the 'cards' section.
- Responsive.

## SVGs

- I used an SVG sprite to pull in most of the icons.
- The mobile navigation hamburger icon is written inline.

## Fonts

- The Google font, 'Roboto', is self-hosted (see my [self-hosting-fonts][fonts] page).

## Javascript

- ES6 modules
- ES6 (no transpilation to ES5)

## JSON

- To simulate a database I've pulled in the individual cards via `cards.json`.

## Accessibility
- `ARIA` and `role` attributes used as required.

## Sources
- [Frontend Practice Abstract Project][abstract]
- [Hamburger menu icon animation][codepen]
- [Accessibility for Hamburger Menu][accessibility]
- [SVG Editor][svgEditor]
- [Boxicons (free SVG icons)][boxicons]
- [How to create and use an SVG Sprite][sprite]
- [Font-size Clamp Generator for responsive typography][clamp]

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Firefox
    - Microsoft Edge

[abstract]: https://www.frontendpractice.com/projects/abstract
[codepen]: https://codepen.io/cossovich/pen/ExjpmRg
[accessibility]: https://medium.com/@linlinghao/accessibility-for-hamburger-menu-a37fa9617a89
[svgEditor]: https://svgeditoronline.com/editor/
[boxicons]: https://boxicons.com/
[sprite]: https://youtu.be/LgfLpEHqgGU
[clamp]: https://clamp.font-size.app/
[frontend]: https://www.frontendpractice.com/
[fonts]: https://github.com/chrisnajman/self-hosting-fonts
