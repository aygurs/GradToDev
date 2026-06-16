import { Topic } from '../types/index';

export const topics = [
  {
    "id": "html-semantics-good-practices",
    "title": "HTML Semantics & Good Practices",
    "description": "Learn semantic structure, forms, accessibility, metadata and HTML habits that make interfaces easier to use and maintain.",
    "flashcards": [
      {
        "id": "html-semantics-card-01",
        "front": "What does semantic HTML mean?",
        "back": "Semantic HTML means using elements based on their meaning, not just their appearance. This helps accessibility tools, search engines and other developers understand the page structure.",
        "example": "<button>Save</button>\n<!-- Better than <div onclick=\"save()\">Save</div> -->"
      },
      {
        "id": "html-semantics-card-02",
        "front": "Why use headings in order?",
        "back": "Headings create a document outline. Use one clear h1 for the page title, then h2, h3 and so on without skipping levels just for styling.",
        "example": "<h1>Dashboard</h1>\n<h2>Devices</h2>\n<h3>Offline devices</h3>"
      },
      {
        "id": "html-semantics-card-03",
        "front": "What is the purpose of <main>?",
        "back": "<main> wraps the main unique content of the page. It helps screen reader users jump past repeated navigation and headers.",
        "example": "<main>\n  <h1>Settings</h1>\n</main>"
      },
      {
        "id": "html-semantics-card-04",
        "front": "When should you use <nav>?",
        "back": "Use <nav> for a major block of navigation links, such as the site menu, sidebar navigation or pagination navigation.",
        "example": "<nav aria-label=\"Main navigation\">...</nav>"
      },
      {
        "id": "html-semantics-card-05",
        "front": "What is the purpose of <section>?",
        "back": "<section> groups related content that usually has its own heading. Do not use it just as a generic wrapper when a div would be clearer.",
        "example": "<section>\n  <h2>Billing details</h2>\n</section>"
      },
      {
        "id": "html-semantics-card-06",
        "front": "When should you use <article>?",
        "back": "Use <article> for self-contained content that could stand on its own, such as a blog post, card, review or news item.",
        "example": "<article>\n  <h2>Release notes</h2>\n</article>"
      },
      {
        "id": "html-semantics-card-07",
        "front": "What is the difference between <button> and <a>?",
        "back": "Use <button> for actions that happen on the current page. Use <a> for navigation to another page, route, file or location.",
        "example": "<button>Open modal</button>\n<a href=\"/docs\">Read docs</a>"
      },
      {
        "id": "html-semantics-card-08",
        "front": "Why should images have alt text?",
        "back": "alt text describes meaningful images for people using screen readers or when images fail to load. Decorative images should usually use empty alt text.",
        "example": "<img src=\"chart.png\" alt=\"Sales increased in Q4\" />"
      },
      {
        "id": "html-semantics-card-09",
        "front": "What does empty alt text mean?",
        "back": "alt=\"\" tells assistive tech to ignore a decorative image. This avoids noisy descriptions that do not help the user.",
        "example": "<img src=\"divider.svg\" alt=\"\" />"
      },
      {
        "id": "html-semantics-card-10",
        "front": "Why connect labels to form controls?",
        "back": "Labels make inputs easier to click and announce the input purpose to screen readers. Use htmlFor in React and id on the input.",
        "example": "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" />"
      },
      {
        "id": "html-semantics-card-11",
        "front": "What does required do?",
        "back": "required tells the browser a form field must be filled before submission. It gives built-in validation but you should still validate on the server.",
        "example": "<input name=\"email\" required />"
      },
      {
        "id": "html-semantics-card-12",
        "front": "Why use the correct input type?",
        "back": "Input types like email, number, date and password improve validation, mobile keyboards and accessibility.",
        "example": "<input type=\"email\" />\n<input type=\"password\" />"
      },
      {
        "id": "html-semantics-card-13",
        "front": "What is autocomplete used for?",
        "back": "autocomplete helps browsers fill known fields like name, email and address. It improves form speed and accessibility.",
        "example": "<input autocomplete=\"email\" />"
      },
      {
        "id": "html-semantics-card-14",
        "front": "What does aria-label do?",
        "back": "aria-label gives an accessible name to an element when visible text is missing or not enough. Use native labels and visible text first when possible.",
        "example": "<button aria-label=\"Close dialog\">×</button>"
      },
      {
        "id": "html-semantics-card-15",
        "front": "When should you avoid ARIA?",
        "back": "Avoid ARIA when native HTML already gives the correct meaning and behaviour. Native elements are usually more reliable than recreating controls with divs.",
        "example": "<button>Submit</button>\n<!-- Better than <div role=\"button\">Submit</div> -->"
      },
      {
        "id": "html-semantics-card-16",
        "front": "What is tabindex used for?",
        "back": "tabindex controls keyboard focus order. Use tabindex=\"0\" sparingly to make custom interactive elements focusable, and avoid positive tabindex values.",
        "example": "<div tabindex=\"0\">Focusable</div>"
      },
      {
        "id": "html-semantics-card-17",
        "front": "What is a landmark?",
        "back": "Landmarks are page regions like header, nav, main, aside and footer. They help assistive technology users understand and jump around the page.",
        "example": "<header>...</header>\n<main>...</main>\n<footer>...</footer>"
      },
      {
        "id": "html-semantics-card-18",
        "front": "What is a fieldset used for?",
        "back": "fieldset groups related form controls, and legend describes the group. It is especially useful for radio buttons and checkboxes.",
        "example": "<fieldset>\n  <legend>Choose a plan</legend>\n</fieldset>"
      },
      {
        "id": "html-semantics-card-19",
        "front": "Why use lists for list content?",
        "back": "ul, ol and li communicate that items belong to a list. This is better than many unrelated divs when the content is a list.",
        "example": "<ul>\n  <li>JavaScript</li>\n  <li>TypeScript</li>\n</ul>"
      },
      {
        "id": "html-semantics-card-20",
        "front": "When should you use a table?",
        "back": "Use a table for tabular data with rows and columns, not for page layout. Include headers so users understand what each cell means.",
        "example": "<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>"
      },
      {
        "id": "html-semantics-card-21",
        "front": "What is progressive enhancement?",
        "back": "Progressive enhancement means building a basic experience that works first, then adding richer JavaScript or styling on top where supported.",
        "example": "<form action=\"/search\" method=\"GET\">...</form>"
      },
      {
        "id": "html-semantics-card-22",
        "front": "Why include lang on the html element?",
        "back": "The lang attribute tells browsers and screen readers the language of the page, which improves pronunciation, translation and accessibility.",
        "example": "<html lang=\"en\">"
      },
      {
        "id": "html-semantics-card-23",
        "front": "What viewport meta tag is used for responsive pages?",
        "back": "The viewport meta tag tells mobile browsers how to scale the page. Without it, responsive CSS may not behave as expected on phones.",
        "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />"
      },
      {
        "id": "html-semantics-card-24",
        "front": "What is lazy loading for images?",
        "back": "loading=\"lazy\" lets the browser delay loading off-screen images until they are needed, which can improve initial page performance.",
        "example": "<img src=\"large-photo.jpg\" alt=\"Team photo\" loading=\"lazy\" />"
      },
      {
        "id": "html-semantics-card-25",
        "front": "Why specify width and height on images?",
        "back": "Image width and height let the browser reserve space before the image loads, reducing layout shift and improving perceived quality.",
        "example": "<img src=\"hero.jpg\" alt=\"Dashboard preview\" width=\"1200\" height=\"600\" />"
      },
      {
        "id": "html-semantics-card-26",
        "front": "What are data attributes?",
        "back": "data-* attributes store small custom values in HTML. They are useful for testing hooks or metadata, but avoid using them as a replacement for app state.",
        "example": "<button data-testid=\"save-button\">Save</button>"
      },
      {
        "id": "html-semantics-card-27",
        "front": "Why is valid nesting important?",
        "back": "Valid HTML nesting prevents browser correction from creating unexpected DOM structure. It also helps accessibility and makes debugging easier.",
        "example": "<button><span>Save</span></button>\n<!-- Avoid putting interactive controls inside buttons -->"
      },
      {
        "id": "html-semantics-card-28",
        "front": "What should go in the <head>?",
        "back": "The head contains metadata like title, meta tags, icons, styles and scripts. It is not for visible page content.",
        "example": "<head>\n  <title>GradToDev</title>\n</head>"
      },
      {
        "id": "html-semantics-card-29",
        "front": "Why use descriptive link text?",
        "back": "Link text should explain where the link goes. Avoid vague text like ‘click here’ because it is unhelpful when read out of context.",
        "example": "<a href=\"/settings\">Account settings</a>"
      },
      {
        "id": "html-semantics-card-30",
        "front": "What is a skip link?",
        "back": "A skip link lets keyboard users jump directly to the main content, avoiding repeated navigation on every page.",
        "example": "<a href=\"#main\" class=\"skip-link\">Skip to main content</a>"
      }
    ],
    "questions": [
      {
        "id": "html-semantics-q-01",
        "type": "multiple-choice",
        "prompt": "Which element is best for the main unique content of a page?",
        "options": [
          "<main>",
          "<span>",
          "<br>",
          "<style>"
        ],
        "correctAnswer": "<main>",
        "explanation": "<main> identifies the primary page content and helps assistive technology users skip repeated layout areas.\n\nExample:\n<main>\n  <h1>Settings</h1>\n</main>"
      },
      {
        "id": "html-semantics-q-02",
        "type": "true-false",
        "prompt": "True or false: A <button> should usually be used for actions, while an <a> should usually be used for navigation.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Buttons perform actions on the current page. Links navigate to another route, page, file or location.\n\nExample:\n<button>Open modal</button>\n<a href=\"/docs\">Read docs</a>"
      },
      {
        "id": "html-semantics-q-03",
        "type": "scenario",
        "prompt": "You need to create a clickable control that opens a modal. Which element is the best starting point?",
        "options": [
          "<button>",
          "<a href=\"#\">",
          "<div>",
          "<span>"
        ],
        "correctAnswer": "<button>",
        "explanation": "Opening a modal is an action, so a button gives the correct semantics and keyboard behaviour by default.\n\nExample:\n<button>Submit</button>\n<!-- Better than <div role=\"button\">Submit</div> -->"
      },
      {
        "id": "html-semantics-q-04",
        "type": "type-answer",
        "prompt": "Type the attribute used to provide alternative text for an image.",
        "correctAnswer": "alt",
        "acceptedAnswers": [
          "alt",
          "alt attribute"
        ],
        "explanation": "The alt attribute provides a text alternative for meaningful images.\n\nExample:\n<img src=\"chart.png\" alt=\"Sales increased in Q4\" />"
      },
      {
        "id": "html-semantics-q-05",
        "type": "multiple-choice",
        "prompt": "Which pattern is best for a decorative image?",
        "options": [
          "alt=\"\"",
          "No alt attribute at all",
          "alt=\"image\"",
          "role=\"button\""
        ],
        "correctAnswer": "alt=\"\"",
        "explanation": "Empty alt text tells assistive technologies to ignore decorative images.\n\nExample:\n<img src=\"divider.svg\" alt=\"\" />"
      },
      {
        "id": "html-semantics-q-06",
        "type": "true-false",
        "prompt": "True or false: Positive tabindex values are usually recommended for controlling focus order.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Positive tabindex values can create confusing focus order. Prefer natural DOM order and use tabindex=\"0\" sparingly.\n\nExample:\n<div tabindex=\"0\">Focusable</div>"
      },
      {
        "id": "html-semantics-q-07",
        "type": "scenario",
        "prompt": "You have a group of radio buttons for choosing a plan. Which elements help describe the group accessibly?",
        "options": [
          "fieldset and legend",
          "section and br",
          "div and span",
          "img and alt"
        ],
        "correctAnswer": "fieldset and legend",
        "explanation": "fieldset groups related form controls, and legend provides the group label.\n\nExample:\n<fieldset>\n  <legend>Choose a plan</legend>\n</fieldset>"
      },
      {
        "id": "html-semantics-q-08",
        "type": "type-answer",
        "prompt": "Type the React prop used instead of 'for' to connect a label to an input.",
        "correctAnswer": "htmlFor",
        "acceptedAnswers": [
          "htmlFor",
          "htmlfor"
        ],
        "explanation": "In React, label uses htmlFor because for is a reserved JavaScript word.\n\nExample:\n<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" />"
      },
      {
        "id": "html-semantics-q-09",
        "type": "multiple-choice",
        "prompt": "Which input type is best for an email field?",
        "options": [
          "email",
          "text",
          "button",
          "hidden"
        ],
        "correctAnswer": "email",
        "explanation": "type=\"email\" improves browser validation, mobile keyboard behaviour and semantics.\n\nExample:\n<input name=\"email\" required />"
      },
      {
        "id": "html-semantics-q-10",
        "type": "true-false",
        "prompt": "True or false: aria-label should replace visible labels on every form input.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Visible labels are usually better because they help everyone. ARIA is useful when a visible label is not available or not enough.\n\nExample:\n<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" />"
      },
      {
        "id": "html-semantics-q-11",
        "type": "scenario",
        "prompt": "A screen reader user needs to jump past repeated navigation. Which pattern helps?",
        "options": [
          "A skip link to main content",
          "More div wrappers",
          "A background image",
          "A hidden password input"
        ],
        "correctAnswer": "A skip link to main content",
        "explanation": "Skip links let keyboard and screen reader users jump directly to the main page content.\n\nExample:\n<a href=\"#main\" class=\"skip-link\">Skip to main content</a>\n<main id=\"main\">...</main>"
      },
      {
        "id": "html-semantics-q-12",
        "type": "type-answer",
        "prompt": "Type the attribute on <html> that declares the page language.",
        "correctAnswer": "lang",
        "acceptedAnswers": [
          "lang",
          "language attribute"
        ],
        "explanation": "The lang attribute helps screen readers pronounce content correctly and helps browsers understand the page language.\n\nExample:\n<html lang=\"en\">"
      },
      {
        "id": "html-semantics-q-13",
        "type": "multiple-choice",
        "prompt": "Which element should wrap a major navigation area?",
        "options": [
          "<nav>",
          "<b>",
          "<small>",
          "<canvas>"
        ],
        "correctAnswer": "<nav>",
        "explanation": "<nav> identifies a block of important navigation links.\n\nExample:\n<nav aria-label=\"Main navigation\">...</nav>"
      },
      {
        "id": "html-semantics-q-14",
        "type": "scenario",
        "prompt": "You are displaying pricing data in rows and columns. What HTML structure is most appropriate?",
        "options": [
          "table with header cells",
          "a list of random divs",
          "a canvas only",
          "a paragraph with spaces"
        ],
        "correctAnswer": "table with header cells",
        "explanation": "Tables are appropriate for tabular data because they communicate row/column relationships.\n\nExample:\n<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>"
      },
      {
        "id": "html-semantics-q-15",
        "type": "true-false",
        "prompt": "True or false: <section> should normally have a heading that explains the grouped content.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A section represents a meaningful region of content, and a heading usually makes that meaning clear."
      },
      {
        "id": "html-semantics-q-16",
        "type": "type-answer",
        "prompt": "Type the image attribute value that delays loading an off-screen image until needed: loading=\"____\".",
        "correctAnswer": "lazy",
        "acceptedAnswers": [
          "lazy"
        ],
        "explanation": "loading=\"lazy\" lets the browser defer off-screen image loading.\n\nExample:\n<img src=\"large-photo.jpg\" alt=\"Team photo\" loading=\"lazy\" />"
      },
      {
        "id": "html-semantics-q-17",
        "type": "multiple-choice",
        "prompt": "Which link text is most accessible?",
        "options": [
          "View account settings",
          "Click here",
          "More",
          "Read"
        ],
        "correctAnswer": "View account settings",
        "explanation": "Descriptive link text tells users where the link goes, even when read out of context.\n\nExample:\n<a href=\"/settings\">View account settings</a>\n<!-- Better than: <a href=\"/settings\">Click here</a> -->"
      },
      {
        "id": "html-semantics-q-18",
        "type": "scenario",
        "prompt": "You need a self-contained blog post preview that could stand alone. Which element is a good fit?",
        "options": [
          "<article>",
          "<br>",
          "<strong>",
          "<input>"
        ],
        "correctAnswer": "<article>",
        "explanation": "<article> is designed for self-contained content like posts, cards and reviews.\n\nExample:\n<article>\n  <h2>Release notes</h2>\n</article>"
      },
      {
        "id": "html-semantics-q-19",
        "type": "true-false",
        "prompt": "True or false: You should use headings for visual size only, even if it breaks the page outline.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Headings should describe structure. Use CSS to change visual size instead of choosing heading levels for appearance only.\n\nExample:\n<h1>Dashboard</h1>\n<h2>Devices</h2>\n<h3>Offline devices</h3>"
      },
      {
        "id": "html-semantics-q-20",
        "type": "type-answer",
        "prompt": "Type the HTML element used to define a page title in the browser tab.",
        "correctAnswer": "title",
        "acceptedAnswers": [
          "title",
          "<title>",
          "title element"
        ],
        "explanation": "The <title> element inside <head> sets the browser tab title and helps search/bookmark context.\n\nExample:\n<head>\n  <title>GradToDev</title>\n</head>"
      },
      {
        "id": "html-semantics-q-21",
        "type": "multiple-choice",
        "prompt": "Which meta tag is important for responsive layouts on mobile?",
        "options": [
          "viewport",
          "charset only",
          "robots only",
          "author only"
        ],
        "correctAnswer": "viewport",
        "explanation": "The viewport meta tag tells mobile browsers how to size and scale the page.\n\nExample:\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />"
      },
      {
        "id": "html-semantics-q-22",
        "type": "scenario",
        "prompt": "A custom icon-only close button has no visible text. What should you add?",
        "options": [
          "aria-label=\"Close dialog\"",
          "alt on the button",
          "href=\"close\"",
          "tabindex=\"99\""
        ],
        "correctAnswer": "aria-label=\"Close dialog\"",
        "explanation": "An icon-only button needs an accessible name, and aria-label is a common solution.\n\nExample:\n<button aria-label=\"Close dialog\">×</button>"
      },
      {
        "id": "html-semantics-q-23",
        "type": "true-false",
        "prompt": "True or false: Server-side validation is still needed even when HTML required attributes are used.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Client-side validation improves UX but can be bypassed. Server-side validation protects the system.\n\nExample:\n<input name=\"email\" required />"
      },
      {
        "id": "html-semantics-q-24",
        "type": "type-answer",
        "prompt": "Type the custom attribute prefix used for storing small metadata in HTML.",
        "correctAnswer": "data-",
        "acceptedAnswers": [
          "data-",
          "data attribute",
          "data attributes"
        ],
        "explanation": "Custom data attributes start with data-, such as data-testid or data-user-id.\n\nExample:\n<button data-testid=\"save-button\">Save</button>"
      },
      {
        "id": "html-semantics-q-25",
        "type": "multiple-choice",
        "prompt": "Which is the best reason to set image width and height attributes?",
        "options": [
          "To reduce layout shift while the image loads",
          "To make JavaScript faster",
          "To disable caching",
          "To make alt text unnecessary"
        ],
        "correctAnswer": "To reduce layout shift while the image loads",
        "explanation": "Width and height allow the browser to reserve space before the image loads.\n\nExample:\n<img src=\"hero.jpg\" alt=\"Dashboard preview\" width=\"1200\" height=\"600\" />"
      },
      {
        "id": "html-semantics-q-26",
        "type": "scenario",
        "prompt": "You are building a list of navigation links. What structure is usually appropriate?",
        "options": [
          "nav containing a ul of links",
          "many clickable spans",
          "a table for layout",
          "a canvas drawing"
        ],
        "correctAnswer": "nav containing a ul of links",
        "explanation": "A nav landmark plus list structure communicates navigation and item relationships clearly.\n\nExample:\n<nav aria-label=\"Main navigation\">\n  <ul>\n    <li><a href=\"/topics\">Topics</a></li>\n  </ul>\n</nav>"
      },
      {
        "id": "html-semantics-q-27",
        "type": "true-false",
        "prompt": "True or false: Native HTML controls often provide keyboard behaviour without extra JavaScript.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Native controls like button, input and select come with built-in keyboard and accessibility behaviour.\n\nExample:\n<button><span>Save</span></button>\n<!-- Avoid putting interactive controls inside buttons -->"
      },
      {
        "id": "html-semantics-q-28",
        "type": "type-answer",
        "prompt": "Type the element used to provide a caption/title for a fieldset group.",
        "correctAnswer": "legend",
        "acceptedAnswers": [
          "legend",
          "<legend>"
        ],
        "explanation": "legend names a fieldset group, which is especially useful for radio and checkbox groups.\n\nExample:\n<fieldset>\n  <legend>Choose a plan</legend>\n</fieldset>"
      },
      {
        "id": "html-semantics-q-29",
        "type": "multiple-choice",
        "prompt": "Which is usually the best first rule for ARIA?",
        "options": [
          "Use native HTML first where possible",
          "Use role=\"button\" everywhere",
          "Hide all text from screen readers",
          "Replace all labels with placeholders"
        ],
        "correctAnswer": "Use native HTML first where possible",
        "explanation": "Native HTML is usually more robust than recreating semantics and behaviour manually with ARIA.\n\nExample:\n<button>Submit</button>\n<!-- Better than: <div role=\"button\">Submit</div> -->"
      },
      {
        "id": "html-semantics-q-30",
        "type": "scenario",
        "prompt": "An input only has a placeholder saying 'Email'. What is the better accessibility improvement?",
        "options": [
          "Add a real visible label connected to the input",
          "Replace input with div",
          "Remove the placeholder and label",
          "Use an h1 inside the input"
        ],
        "correctAnswer": "Add a real visible label connected to the input",
        "explanation": "Placeholders disappear when typing and are not a replacement for labels.\n\nExample:\n<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" placeholder=\"you@example.com\" />"
      }
    ]
  },
  {
    "id": "css-layout-animations",
    "title": "CSS Layout, Styling & Animations",
    "description": "Practise CSS fundamentals, layout systems, responsive design, accessibility states, transitions, animations and maintainable styling.",
    "flashcards": [
      {
        "id": "css-fundamentals-card-01",
        "front": "What is the CSS cascade?",
        "back": "The cascade is how the browser decides which CSS rule wins when multiple rules target the same element. It considers importance, specificity, source order and origin.",
        "example": "button { color: blue; }\n.primary { color: green; }"
      },
      {
        "id": "css-fundamentals-card-02",
        "front": "What is specificity?",
        "back": "Specificity is the weight of a selector. IDs are stronger than classes, and classes are stronger than element selectors. High specificity can make styles harder to override.",
        "example": "#saveButton > .button > button"
      },
      {
        "id": "css-fundamentals-card-03",
        "front": "What does inheritance mean in CSS?",
        "back": "Some CSS properties, like color and font-family, are inherited by child elements. Others, like margin and border, are not inherited by default.",
        "example": "body { font-family: system-ui; color: #111; }"
      },
      {
        "id": "css-fundamentals-card-04",
        "front": "What is the box model?",
        "back": "The box model describes how content, padding, border and margin combine to create the space an element takes up.",
        "example": ".card { padding: 1rem; border: 1px solid #ddd; margin: 1rem; }"
      },
      {
        "id": "css-fundamentals-card-05",
        "front": "Why use box-sizing: border-box?",
        "back": "border-box makes width and height include content, padding and border. This makes layout sizing more predictable.",
        "example": "*, *::before, *::after { box-sizing: border-box; }"
      },
      {
        "id": "css-fundamentals-card-06",
        "front": "What is display: block?",
        "back": "Block elements start on a new line and take the full available width by default. Divs, sections and paragraphs are common block elements.",
        "example": ".panel { display: block; }"
      },
      {
        "id": "css-fundamentals-card-07",
        "front": "What is display: inline?",
        "back": "Inline elements flow with text and do not start on a new line. Width and height do not apply in the same way as block elements.",
        "example": "span { display: inline; }"
      },
      {
        "id": "css-fundamentals-card-08",
        "front": "What is display: flex?",
        "back": "Flexbox lays items out in one dimension, either a row or a column. It is great for alignment, spacing and component layouts.",
        "example": ".toolbar { display: flex; align-items: center; gap: 0.75rem; }"
      },
      {
        "id": "css-fundamentals-card-09",
        "front": "What does justify-content do in flexbox?",
        "back": "justify-content aligns items along the main axis. In a row, it controls horizontal distribution.",
        "example": ".row { display: flex; justify-content: space-between; }"
      },
      {
        "id": "css-fundamentals-card-10",
        "front": "What does align-items do in flexbox?",
        "back": "align-items aligns items along the cross axis. In a row, it commonly controls vertical alignment.",
        "example": ".row { display: flex; align-items: center; }"
      },
      {
        "id": "css-fundamentals-card-11",
        "front": "What is CSS Grid good for?",
        "back": "Grid is designed for two-dimensional layouts: rows and columns at the same time. It is good for page layouts and card grids.",
        "example": ".grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }"
      },
      {
        "id": "css-fundamentals-card-12",
        "front": "What does gap do?",
        "back": "gap creates space between flex or grid items without needing margins on individual children.",
        "example": ".cards { display: grid; gap: 1rem; }"
      },
      {
        "id": "css-fundamentals-card-13",
        "front": "What are CSS custom properties?",
        "back": "Custom properties, often called CSS variables, store reusable values. They are useful for themes, spacing scales and design tokens.",
        "example": ":root { --brand: #58cc02; }\nbutton { background: var(--brand); }"
      },
      {
        "id": "css-fundamentals-card-14",
        "front": "What is a pseudo-class?",
        "back": "A pseudo-class targets a state or condition, such as hover, focus, disabled or first-child.",
        "example": "button:hover { transform: translateY(-1px); }"
      },
      {
        "id": "css-fundamentals-card-15",
        "front": "What is a pseudo-element?",
        "back": "A pseudo-element styles a specific part of an element or creates generated content, such as ::before or ::after.",
        "example": ".badge::before { content: \"★\"; }"
      },
      {
        "id": "css-fundamentals-card-16",
        "front": "Why style :focus-visible?",
        "back": "focus-visible lets you show a clear outline for keyboard users without showing it for every mouse click. It improves accessibility.",
        "example": "button:focus-visible { outline: 3px solid #58cc02; }"
      },
      {
        "id": "css-fundamentals-card-17",
        "front": "What are media queries?",
        "back": "Media queries apply CSS only when conditions are true, such as viewport width or user preferences.",
        "example": "@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
      },
      {
        "id": "css-fundamentals-card-18",
        "front": "What is responsive design?",
        "back": "Responsive design makes layouts adapt to different screen sizes and input types. It usually combines flexible units, grids and media queries.",
        "example": "width: min(100%, 64rem);"
      },
      {
        "id": "css-fundamentals-card-19",
        "front": "What are relative units?",
        "back": "Relative units like rem, em, %, vw and vh scale based on context. They are often better for responsive and accessible design than fixed pixels everywhere.",
        "example": ".card { padding: 1rem; max-width: 60rem; }"
      },
      {
        "id": "css-fundamentals-card-20",
        "front": "What is position: relative?",
        "back": "position: relative keeps the element in normal layout but allows offsetting it and creates a positioning context for absolute children.",
        "example": ".card { position: relative; }"
      },
      {
        "id": "css-fundamentals-card-21",
        "front": "What is position: absolute?",
        "back": "position: absolute removes an element from normal document flow and positions it relative to the nearest positioned ancestor.",
        "example": ".badge { position: absolute; top: 1rem; right: 1rem; }"
      },
      {
        "id": "css-fundamentals-card-22",
        "front": "What is position: sticky?",
        "back": "position: sticky behaves like normal positioning until a scroll threshold is reached, then sticks within its parent container.",
        "example": ".tabs { position: sticky; top: 0; }"
      },
      {
        "id": "css-fundamentals-card-23",
        "front": "What is z-index?",
        "back": "z-index controls stacking order for positioned elements and items in stacking contexts. It only works as expected when stacking contexts are understood.",
        "example": ".modal { position: fixed; z-index: 1000; }"
      },
      {
        "id": "css-fundamentals-card-24",
        "front": "What is a transition?",
        "back": "A transition animates a property between old and new values when a state changes, such as hover or focus.",
        "example": "button { transition: transform 160ms ease; }\nbutton:hover { transform: translateY(-2px); }"
      },
      {
        "id": "css-fundamentals-card-25",
        "front": "What is a keyframe animation?",
        "back": "Keyframes define multiple stages of an animation. Use them for motion that runs automatically or has more than two states.",
        "example": "@keyframes pulse { from { opacity: .6; } to { opacity: 1; } }"
      },
      {
        "id": "css-fundamentals-card-26",
        "front": "Why respect prefers-reduced-motion?",
        "back": "Some users feel discomfort from motion. prefers-reduced-motion lets you reduce or remove animations for those users.",
        "example": "@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }"
      },
      {
        "id": "css-fundamentals-card-27",
        "front": "Which CSS properties are best for animation performance?",
        "back": "Transform and opacity are usually safer to animate because they often avoid expensive layout recalculation compared with width, height or top.",
        "example": ".toast { transform: translateY(0); opacity: 1; }"
      },
      {
        "id": "css-fundamentals-card-28",
        "front": "What is object-fit?",
        "back": "object-fit controls how replaced content like images and videos fit inside their box. cover crops, contain fits without cropping.",
        "example": "img { width: 100%; height: 12rem; object-fit: cover; }"
      },
      {
        "id": "css-fundamentals-card-29",
        "front": "What is overflow?",
        "back": "overflow controls what happens when content is too large for its box. Common values include hidden, auto and scroll.",
        "example": ".panel { overflow: auto; }"
      },
      {
        "id": "css-fundamentals-card-30",
        "front": "What is a BEM-style class name?",
        "back": "BEM is a naming convention that makes component styles explicit: block, element and modifier. It can help avoid unclear class names in larger projects.",
        "example": ".card {}\n.card__title {}\n.card--featured {}"
      },
      {
        "id": "css-fundamentals-card-31",
        "front": "Why avoid !important?",
        "back": "!important overrides normal cascade rules and can make styles hard to maintain. Use it rarely, usually only for utility overrides or unavoidable third-party conflicts.",
        "example": ".hidden { display: none !important; }"
      },
      {
        "id": "css-fundamentals-card-32",
        "front": "What is a design token?",
        "back": "A design token is a named value for design decisions like colour, spacing or font size. In CSS, tokens are often implemented as custom properties.",
        "example": "--space-4: 1rem;\n--color-primary: #58cc02;"
      }
    ],
    "questions": [
      {
        "id": "css-fundamentals-q-01",
        "type": "multiple-choice",
        "prompt": "What does the CSS cascade decide?",
        "options": [
          "Which style rule wins when multiple rules apply",
          "Which API route is called",
          "Which HTML file is loaded first",
          "Which database row is updated"
        ],
        "correctAnswer": "Which style rule wins when multiple rules apply",
        "explanation": "The cascade decides the winning declaration based on importance, specificity, source order and origin.\n\nExample:\nbutton { color: blue; }\n.primary { color: green; }"
      },
      {
        "id": "css-fundamentals-q-02",
        "type": "true-false",
        "prompt": "True or false: An ID selector usually has higher specificity than a class selector.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "ID selectors are more specific than class selectors, which can make them harder to override.\n\nExample:\n#saveButton > .button > button"
      },
      {
        "id": "css-fundamentals-q-03",
        "type": "scenario",
        "prompt": "Your component width becomes larger than expected after adding padding. Which CSS rule often makes sizing more predictable?",
        "options": [
          "box-sizing: border-box",
          "position: sticky",
          "text-transform: uppercase",
          "animation-delay: 2s"
        ],
        "correctAnswer": "box-sizing: border-box",
        "explanation": "border-box includes padding and border inside the declared width and height.\n\nExample:\n*, *::before, *::after { box-sizing: border-box; }"
      },
      {
        "id": "css-fundamentals-q-04",
        "type": "type-answer",
        "prompt": "Type the CSS layout mode commonly used for one-dimensional alignment in a row or column.",
        "correctAnswer": "flexbox",
        "acceptedAnswers": [
          "flexbox",
          "flex",
          "display flex",
          "display: flex"
        ],
        "explanation": "Flexbox is ideal for one-dimensional layouts and alignment.\n\nExample:\n.toolbar { display: flex; align-items: center; gap: 0.75rem; }"
      },
      {
        "id": "css-fundamentals-q-05",
        "type": "multiple-choice",
        "prompt": "Which layout system is best designed for rows and columns together?",
        "options": [
          "CSS Grid",
          "Inline layout",
          "Float-only layout",
          "Text decoration"
        ],
        "correctAnswer": "CSS Grid",
        "explanation": "Grid is a two-dimensional layout system for rows and columns.\n\nExample:\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }"
      },
      {
        "id": "css-fundamentals-q-06",
        "type": "true-false",
        "prompt": "True or false: gap can be used with flex and grid layouts.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "gap creates spacing between flex or grid items without individual child margins.\n\nExample:\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
      },
      {
        "id": "css-fundamentals-q-07",
        "type": "scenario",
        "prompt": "You need to reuse the same brand colour across many components and support theming later. What CSS feature is a good fit?",
        "options": [
          "CSS custom properties",
          "Inline hardcoded colours everywhere",
          "Random IDs",
          "HTML tables"
        ],
        "correctAnswer": "CSS custom properties",
        "explanation": "Custom properties store reusable values and are often used for themes and design tokens.\n\nExample:\n:root { --brand: #58cc02; }\nbutton { background: var(--brand); }"
      },
      {
        "id": "css-fundamentals-q-08",
        "type": "type-answer",
        "prompt": "Type the selector pseudo-class that targets keyboard focus in a user-friendly way: :____.",
        "correctAnswer": "focus-visible",
        "acceptedAnswers": [
          "focus-visible",
          ":focus-visible"
        ],
        "explanation": ":focus-visible is useful for showing clear focus styles mainly when users navigate with the keyboard.\n\nExample:\nbutton:focus-visible { outline: 3px solid #58cc02; }"
      },
      {
        "id": "css-fundamentals-q-09",
        "type": "multiple-choice",
        "prompt": "Which is an example of a pseudo-element?",
        "options": [
          "::before",
          ":hover",
          ".button",
          "#app"
        ],
        "correctAnswer": "::before",
        "explanation": "Pseudo-elements like ::before and ::after target generated or specific parts of an element.\n\nExample:\n.badge::before { content: \"★\"; }"
      },
      {
        "id": "css-fundamentals-q-10",
        "type": "true-false",
        "prompt": "True or false: Media queries can be used to change layout based on viewport width.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Media queries apply CSS only when conditions like max-width are met.\n\nExample:\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
      },
      {
        "id": "css-fundamentals-q-11",
        "type": "scenario",
        "prompt": "A page looks cramped on mobile. Which CSS technique is most directly relevant?",
        "options": [
          "Responsive design with media queries/flexible layout",
          "Adding more z-index values",
          "Using only fixed pixel widths",
          "Removing all semantic HTML"
        ],
        "correctAnswer": "Responsive design with media queries/flexible layout",
        "explanation": "Responsive design adapts layout to the available screen size.\n\nExample:\nwidth: min(100%, 64rem);"
      },
      {
        "id": "css-fundamentals-q-12",
        "type": "type-answer",
        "prompt": "Type the CSS property that controls what happens when content overflows its box.",
        "correctAnswer": "overflow",
        "acceptedAnswers": [
          "overflow"
        ],
        "explanation": "overflow controls clipping and scroll behaviour for content that exceeds the box.\n\nExample:\n.panel { overflow: auto; }"
      },
      {
        "id": "css-fundamentals-q-13",
        "type": "multiple-choice",
        "prompt": "Which position value keeps an element in normal flow but allows top/right/bottom/left offsets?",
        "options": [
          "relative",
          "absolute",
          "fixed",
          "static only"
        ],
        "correctAnswer": "relative",
        "explanation": "position: relative keeps the element in the document flow and can create a positioning context.\n\nExample:\n.card { position: relative; top: 0.25rem; }"
      },
      {
        "id": "css-fundamentals-q-14",
        "type": "scenario",
        "prompt": "You want a badge in the top-right corner of a card. The card should be the positioning context. What should the card usually have?",
        "options": [
          "position: relative",
          "display: none",
          "overflow: scroll only",
          "font-weight: bold"
        ],
        "correctAnswer": "position: relative",
        "explanation": "An absolutely positioned child positions itself relative to the nearest positioned ancestor.\n\nExample:\n.card { position: relative; }"
      },
      {
        "id": "css-fundamentals-q-15",
        "type": "true-false",
        "prompt": "True or false: z-index is always simple and ignores stacking contexts.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "z-index is affected by positioning and stacking contexts, which can make layering more complex."
      },
      {
        "id": "css-fundamentals-q-16",
        "type": "multiple-choice",
        "prompt": "Which property is usually better to animate for performance?",
        "options": [
          "transform",
          "width",
          "height",
          "top"
        ],
        "correctAnswer": "transform",
        "explanation": "transform and opacity are usually cheaper to animate than layout-affecting properties like width or top.\n\nExample:\n.toast { transform: translateY(0); opacity: 1; }"
      },
      {
        "id": "css-fundamentals-q-17",
        "type": "type-answer",
        "prompt": "Type the CSS at-rule used to define named animation steps.",
        "correctAnswer": "@keyframes",
        "acceptedAnswers": [
          "@keyframes",
          "keyframes"
        ],
        "explanation": "@keyframes defines the stages of a CSS animation. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\n@keyframes pulse {\n  from { opacity: .6; }\n  to { opacity: 1; }\n}\n.badge { animation: pulse 1s infinite alternate; }"
      },
      {
        "id": "css-fundamentals-q-18",
        "type": "scenario",
        "prompt": "A user has reduced motion enabled. Which media feature should your CSS respect?",
        "options": [
          "prefers-reduced-motion",
          "max-database-size",
          "hover-title",
          "aria-hidden"
        ],
        "correctAnswer": "prefers-reduced-motion",
        "explanation": "prefers-reduced-motion lets you reduce or remove animations for motion-sensitive users.\n\nExample:\n@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }"
      },
      {
        "id": "css-fundamentals-q-19",
        "type": "true-false",
        "prompt": "True or false: transition is useful for animating changes between states like hover and focus.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Transitions animate between previous and new property values when state changes.\n\nExample:\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
      },
      {
        "id": "css-fundamentals-q-20",
        "type": "multiple-choice",
        "prompt": "What does object-fit: cover usually do to an image?",
        "options": [
          "Fills the box while possibly cropping the image",
          "Stretches text vertically",
          "Makes the image load from an API",
          "Disables alt text"
        ],
        "correctAnswer": "Fills the box while possibly cropping the image",
        "explanation": "cover fills the box while preserving aspect ratio, which may crop the image.\n\nExample:\nimg { width: 100%; height: 12rem; object-fit: cover; }"
      },
      {
        "id": "css-fundamentals-q-21",
        "type": "type-answer",
        "prompt": "Type the CSS function used to read a custom property: ____(--brand-color).",
        "correctAnswer": "var",
        "acceptedAnswers": [
          "var",
          "var()"
        ],
        "explanation": "var() reads the value of a CSS custom property.\n\nExample:\n:root { --brand: #58cc02; }\nbutton { background: var(--brand); }"
      },
      {
        "id": "css-fundamentals-q-22",
        "type": "scenario",
        "prompt": "A teammate uses !important repeatedly to fix styles. What is the main risk?",
        "options": [
          "Future overrides become harder and the cascade becomes messy",
          "The HTML becomes semantic automatically",
          "The bundle always gets smaller",
          "Images lazy-load automatically"
        ],
        "correctAnswer": "Future overrides become harder and the cascade becomes messy",
        "explanation": "!important bypasses normal cascade expectations and can make CSS difficult to maintain.\n\nExample:\n.hidden { display: none !important; }"
      },
      {
        "id": "css-fundamentals-q-23",
        "type": "true-false",
        "prompt": "True or false: rem units are often useful for scalable spacing and typography.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "rem units scale relative to the root font size, which can support accessibility and consistency.\n\nExample:\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
      },
      {
        "id": "css-fundamentals-q-24",
        "type": "multiple-choice",
        "prompt": "Which naming pattern is closest to BEM?",
        "options": [
          "card__title and card--featured",
          "card title featured random",
          "#card #title #featured",
          "button > div > span"
        ],
        "correctAnswer": "card__title and card--featured",
        "explanation": "BEM uses block, element and modifier patterns, often like block__element and block--modifier.\n\nExample:\n.card {}\n.card__title {}\n.card--featured {}"
      },
      {
        "id": "css-fundamentals-q-25",
        "type": "scenario",
        "prompt": "You need a header that scrolls normally until it reaches the top, then stays visible. Which position value fits?",
        "options": [
          "sticky",
          "absolute",
          "static",
          "inherit only"
        ],
        "correctAnswer": "sticky",
        "explanation": "position: sticky sticks after a scroll threshold while still being constrained by its parent.\n\nExample:\n.tabs { position: sticky; top: 0; }"
      },
      {
        "id": "css-fundamentals-q-26",
        "type": "type-answer",
        "prompt": "Type the CSS property used to create space inside an element between content and border.",
        "correctAnswer": "padding",
        "acceptedAnswers": [
          "padding"
        ],
        "explanation": "Padding is inside the border; margin is outside the border.\n\nExample:\n.card { padding: 1rem; border: 1px solid #ddd; margin: 1rem; }"
      },
      {
        "id": "css-fundamentals-q-27",
        "type": "multiple-choice",
        "prompt": "Which property aligns flex items on the cross axis?",
        "options": [
          "align-items",
          "justify-content",
          "grid-template-columns",
          "z-index"
        ],
        "correctAnswer": "align-items",
        "explanation": "align-items controls cross-axis alignment in flexbox.\n\nExample:\n.row { display: flex; align-items: center; }"
      },
      {
        "id": "css-fundamentals-q-28",
        "type": "true-false",
        "prompt": "True or false: Source order can matter when selectors have equal specificity.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "When specificity and importance are equal, later rules usually win.\n\nExample:\n@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }"
      },
      {
        "id": "css-fundamentals-q-29",
        "type": "scenario",
        "prompt": "You need a simple hover animation for a button lift effect. Which CSS property is a good candidate?",
        "options": [
          "transform: translateY(-2px)",
          "width: 9000px",
          "display: table",
          "position: fixed on every button"
        ],
        "correctAnswer": "transform: translateY(-2px)",
        "explanation": "transform is usually performant and good for small motion effects.\n\nExample:\nbutton { transition: transform 160ms ease; }\nbutton:hover { transform: translateY(-2px); }"
      },
      {
        "id": "css-fundamentals-q-30",
        "type": "type-answer",
        "prompt": "Type the CSS property that controls the time curve of a transition, such as ease or linear.",
        "correctAnswer": "transition-timing-function",
        "acceptedAnswers": [
          "transition-timing-function",
          "timing-function",
          "transition timing function"
        ],
        "explanation": "transition-timing-function controls how the animation progresses over time. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\nbutton { transition: transform 160ms ease-in-out; }"
      },
      {
        "id": "css-fundamentals-q-31",
        "type": "multiple-choice",
        "prompt": "Which is a good use of a CSS design token?",
        "options": [
          "Naming a reusable spacing value like --space-4",
          "Storing a password in CSS",
          "Replacing all HTML headings",
          "Making API requests"
        ],
        "correctAnswer": "Naming a reusable spacing value like --space-4",
        "explanation": "Design tokens name reusable design decisions such as spacing, colours and typography.\n\nExample:\n:root { --space-4: 1rem; --color-primary: #58cc02; }\n.card { padding: var(--space-4); }"
      },
      {
        "id": "css-fundamentals-q-32",
        "type": "scenario",
        "prompt": "A card grid should automatically create columns that fit available space. Which pattern is useful?",
        "options": [
          "grid-template-columns: repeat(auto-fit, minmax(...))",
          "float every card left forever",
          "position absolute every card",
          "Use only br tags"
        ],
        "correctAnswer": "grid-template-columns: repeat(auto-fit, minmax(...))",
        "explanation": "auto-fit with minmax is a common responsive grid pattern.\n\nExample:\n.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n  gap: 1rem;\n}"
      }
    ]
  },
  {
    "id": "js-core-syntax",
    "title": "JavaScript Core Syntax",
    "description": "Build confidence with everyday JavaScript syntax, values, functions and control flow.",
    "flashcards": [
      {
        "id": "js-core-syntax-card-01",
        "front": "What does const mean?",
        "back": "const creates a block-scoped variable that cannot be reassigned after its first value is set. The value itself may still be mutable if it is an object or array.",
        "example": "const user = { name: \"Jay\" };\nuser.name = \"Jay123\"; // allowed\nuser = {}; // not allowed"
      },
      {
        "id": "js-core-syntax-card-02",
        "front": "When should you use let?",
        "back": "let creates a block-scoped variable that can be reassigned. Use it when the value genuinely changes, such as a counter or temporary result.",
        "example": "let count = 0;\ncount += 1;"
      },
      {
        "id": "js-core-syntax-card-03",
        "front": "Why avoid var in modern code?",
        "back": "var is function-scoped and can be hoisted in surprising ways. Modern code usually prefers const and let because block scope is easier to reason about.",
        "example": "if (true) { var x = 1; }\nconsole.log(x); // 1"
      },
      {
        "id": "js-core-syntax-card-04",
        "front": "What are primitive values?",
        "back": "Primitive values are simple immutable values like string, number, boolean, null, undefined, symbol and bigint. They are compared by value.",
        "example": "const name = \"GradToDev\";\nconst isReady = true;"
      },
      {
        "id": "js-core-syntax-card-05",
        "front": "What is an object?",
        "back": "An object stores related data as key-value pairs. Objects are compared by reference, so two identical-looking objects are not automatically equal.",
        "example": "const user = { id: 1, role: \"admin\" };"
      },
      {
        "id": "js-core-syntax-card-06",
        "front": "Why use === instead of ==?",
        "back": "=== checks equality without type coercion. It is usually safer because JavaScript will not silently convert values before comparing them.",
        "example": "0 === false // false\n0 == false // true"
      },
      {
        "id": "js-core-syntax-card-07",
        "front": "What are template literals?",
        "back": "Template literals use backticks and let you insert expressions into strings with ${}. They are easier to read than long string concatenation.",
        "example": "const msg = `Hello ${name}`;"
      },
      {
        "id": "js-core-syntax-card-08",
        "front": "What does an if statement do?",
        "back": "An if statement runs code only when a condition is truthy. It is the basic tool for branching logic.",
        "example": "if (user.isAdmin) {\n  showAdminPanel();\n}"
      },
      {
        "id": "js-core-syntax-card-09",
        "front": "What are truthy and falsy values?",
        "back": "Truthy values behave like true in conditions, while falsy values behave like false. Common falsy values include false, 0, empty string, null, undefined and NaN.",
        "example": "if (username) {\n  save(username);\n}"
      },
      {
        "id": "js-core-syntax-card-10",
        "front": "What does && do?",
        "back": "&& returns the first falsy value or the last value if all are truthy. It is commonly used for combining conditions.",
        "example": "if (isLoggedIn && hasPermission) {}"
      },
      {
        "id": "js-core-syntax-card-11",
        "front": "What does || do?",
        "back": "|| returns the first truthy value. It is often used for fallbacks, but it treats empty strings and 0 as missing too.",
        "example": "const label = customLabel || \"Default\";"
      },
      {
        "id": "js-core-syntax-card-12",
        "front": "What does ?? do?",
        "back": "?? returns the right-hand value only when the left-hand value is null or undefined. It is safer than || when 0 or empty string are valid values.",
        "example": "const pageSize = userPageSize ?? 20;"
      },
      {
        "id": "js-core-syntax-card-13",
        "front": "What does optional chaining do?",
        "back": "Optional chaining safely reads nested properties when something may be null or undefined. It prevents common cannot read property errors.",
        "example": "const city = user.address?.city;"
      },
      {
        "id": "js-core-syntax-card-14",
        "front": "What is a function?",
        "back": "A function is a reusable block of code that can accept inputs and return an output. Functions help keep code organised and testable.",
        "example": "function add(a, b) { return a + b; }"
      },
      {
        "id": "js-core-syntax-card-15",
        "front": "What is an arrow function?",
        "back": "An arrow function is a shorter function syntax. It is common in callbacks and does not create its own this binding.",
        "example": "const double = (n) => n * 2;"
      },
      {
        "id": "js-core-syntax-card-16",
        "front": "What does return do?",
        "back": "return sends a value back from a function and stops that function running. Without return, a function returns undefined by default.",
        "example": "function getName(user) {\n  return user.name;\n}"
      },
      {
        "id": "js-core-syntax-card-17",
        "front": "What are default parameters?",
        "back": "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out.",
        "example": "function greet(name = \"there\") { return `Hi ${name}`; }"
      },
      {
        "id": "js-core-syntax-card-18",
        "front": "What are rest parameters?",
        "back": "Rest parameters collect extra function arguments into an array. They are useful when a function accepts a flexible number of values.",
        "example": "function sum(...numbers) { return numbers.reduce((a,b)=>a+b,0); }"
      },
      {
        "id": "js-core-syntax-card-19",
        "front": "What does spread syntax do?",
        "back": "Spread syntax expands arrays or objects into another array, object or function call. It is often used to copy or combine values.",
        "example": "const copy = [...items];\nconst updated = { ...user, name: \"Jay\" };"
      },
      {
        "id": "js-core-syntax-card-20",
        "front": "When is switch useful?",
        "back": "A switch statement can make multiple exact-value branches clearer than a long chain of else-if statements.",
        "example": "switch (status) {\n  case \"loading\": return \"Loading\";\n}"
      },
      {
        "id": "js-core-syntax-card-21",
        "front": "What is a for loop?",
        "back": "A for loop repeats code while a condition is true. It is useful when you need index-based control.",
        "example": "for (let i = 0; i < items.length; i++) {}"
      },
      {
        "id": "js-core-syntax-card-22",
        "front": "What does for...of do?",
        "back": "for...of loops over the values in an iterable like an array or string. It is cleaner than index loops when you only need values.",
        "example": "for (const item of items) { console.log(item); }"
      },
      {
        "id": "js-core-syntax-card-23",
        "front": "What does try/catch do?",
        "back": "try/catch lets you handle errors without crashing the whole flow. Put risky code in try and handle failures in catch.",
        "example": "try { await save(); } catch (error) { showError(error); }"
      },
      {
        "id": "js-core-syntax-card-24",
        "front": "What are imports and exports?",
        "back": "Imports and exports let you split code into files. Export makes code available, and import brings it into another module.",
        "example": "export function format() {}\nimport { format } from \"./format\";"
      },
      {
        "id": "js-core-syntax-card-25",
        "front": "When should comments be used?",
        "back": "Comments should explain why something exists when the code alone is not enough. Avoid comments that only repeat what the code already says.",
        "example": "// Use server time because client clocks can be wrong."
      },
      {
        "id": "js-core-syntax-extra-card-closure",
        "front": "What is a closure?",
        "back": "A closure is when a function remembers variables from the scope where it was created, even after that outer function has finished running. Closures are common in callbacks, event handlers and factory functions.",
        "example": "function makeCounter(){ let count = 0; return () => ++count; }"
      },
      {
        "id": "js-core-syntax-extra-card-lexical-scope",
        "front": "What is lexical scope?",
        "back": "Lexical scope means JavaScript decides where variables are available based on where code is written, not where a function is called from.",
        "example": "const role = \"admin\";\nfunction canSeeRole(){ return role; }"
      },
      {
        "id": "js-core-syntax-extra-card-hoisting",
        "front": "What is hoisting?",
        "back": "Hoisting is JavaScript’s setup step where declarations are registered before code runs. var is hoisted with undefined, while let and const exist in a temporal dead zone until their declaration is reached.",
        "example": "console.log(x); // undefined\nvar x = 1;"
      },
      {
        "id": "js-core-syntax-extra-card-optional-chaining",
        "front": "What does optional chaining do?",
        "back": "Optional chaining safely reads nested properties. If the value before ?. is null or undefined, the expression returns undefined instead of throwing.",
        "example": "const city = user.profile?.address?.city;"
      },
      {
        "id": "js-core-syntax-extra-card-modules",
        "front": "Why use ES modules?",
        "back": "ES modules let files explicitly export and import code. This makes dependencies clearer and helps bundlers split and optimise applications.",
        "example": "export function formatName(name) {}\nimport { formatName } from \"./formatName\";"
      },
      {
        "id": "js-core-syntax-extra-card-try-catch",
        "front": "When do you use try/catch?",
        "back": "Use try/catch around code that may throw, especially async API calls, parsing JSON, or risky operations where you want to handle failure gracefully.",
        "example": "try {\n  const data = JSON.parse(raw);\n} catch (error) {\n  showError();\n}"
      },
      {
        "id": "js-core-syntax-extra-card-function-expression",
        "front": "Function declaration vs function expression?",
        "back": "A function declaration is hoisted and can be called before it appears. A function expression is stored in a variable and is only usable after that line runs.",
        "example": "sayHi();\nfunction sayHi() {}"
      },
      {
        "id": "js-core-syntax-extra-card-pure-function",
        "front": "What is a pure function?",
        "back": "A pure function returns the same output for the same input and does not change outside state. Pure functions are easier to test and reason about.",
        "example": "const addVat = price => price * 1.2;"
      }
    ],
    "questions": [
      {
        "id": "js-core-syntax-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes const?",
        "options": [
          "const creates a block-scoped variable that cannot be reassigned after its first value is set.",
          "An object stores related data as key-value pairs.",
          "Truthy values behave like true in conditions, while falsy values behave like false.",
          "Optional chaining safely reads nested properties when something may be null or undefined."
        ],
        "correctAnswer": "const creates a block-scoped variable that cannot be reassigned after its first value is set.",
        "explanation": "const creates a block-scoped variable that cannot be reassigned after its first value is set. The value itself may still be mutable if it is an object or array.\n\nExample:\nconst user = { name: \"Jay\" };\nuser.name = \"Jay123\"; // allowed\nuser = {}; // not allowed"
      },
      {
        "id": "js-core-syntax-q-02",
        "type": "true-false",
        "prompt": "True or false: let creates a block-scoped variable that can be reassigned.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "let creates a block-scoped variable that can be reassigned. Use it when the value genuinely changes, such as a counter or temporary result.\n\nExample:\nlet count = 0;\ncount += 1;"
      },
      {
        "id": "js-core-syntax-q-03",
        "type": "scenario",
        "prompt": "Scenario: A teammate declares a variable with function scope and it is being hoisted in a confusing way. Which keyword caused that behaviour?",
        "options": [
          "var",
          "spread syntax",
          "switch",
          "try/catch"
        ],
        "correctAnswer": "var",
        "explanation": "var is function-scoped and can be hoisted in surprising ways. Modern code usually prefers const and let because block scope is easier to reason about. Example: if (true) { var x = 1; }\nconsole.log(x); // 1\n\nExample:\nif (true) { var x = 1; }\nconsole.log(x); // 1"
      },
      {
        "id": "js-core-syntax-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Primitive values are simple immutable values like string, number, boolean, null, undefined, symbol and bigint.",
        "correctAnswer": "primitive",
        "acceptedAnswers": [
          "primitive",
          "primitive values",
          "primitive values"
        ],
        "explanation": "Primitive values are simple immutable values like string, number, boolean, null, undefined, symbol and bigint. They are compared by value.\n\nExample:\nconst name = \"GradToDev\";\nconst isReady = true;"
      },
      {
        "id": "js-core-syntax-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes objects?",
        "options": [
          "An object stores related data as key-value pairs.",
          "Comments should explain why something exists when the code alone is not enough.",
          "It returns the same output for the same input and avoids changing outside state.",
          "const creates a block-scoped variable that cannot be reassigned after its first value is set."
        ],
        "correctAnswer": "An object stores related data as key-value pairs.",
        "explanation": "An object stores related data as key-value pairs. Objects are compared by reference, so two identical-looking objects are not automatically equal.\n\nExample:\nconst user = { id: 1, role: \"admin\" };"
      },
      {
        "id": "js-core-syntax-q-06",
        "type": "true-false",
        "prompt": "True or false: === checks equality without type coercion.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "=== checks equality without type coercion. It is usually safer because JavaScript will not silently convert values before comparing them.\n\nExample:\n0 === false // false\n0 == false // true"
      },
      {
        "id": "js-core-syntax-q-07",
        "type": "scenario",
        "prompt": "Scenario: You need to build `Hello, Aydin!` using a variable inside a string without lots of `+` concatenation. What should you use?",
        "options": [
          "template literals",
          "arrow function",
          "return",
          "spread syntax"
        ],
        "correctAnswer": "template literals",
        "explanation": "Template literals use backticks and let you insert expressions into strings with ${}. They are easier to read than long string concatenation. Example: const msg = `Hello ${name}`;\n\nExample:\nconst msg = `Hello ${name}`;"
      },
      {
        "id": "js-core-syntax-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: An if statement runs code only when a condition is truthy.",
        "correctAnswer": "if",
        "acceptedAnswers": [
          "if",
          "if statements",
          "if statements"
        ],
        "explanation": "An if statement runs code only when a condition is truthy. It is the basic tool for branching logic.\n\nExample:\nif (user.isAdmin) {\n  showAdminPanel();\n}"
      },
      {
        "id": "js-core-syntax-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes truthy/falsy?",
        "options": [
          "Truthy values behave like true in conditions, while falsy values behave like false.",
          "An object stores related data as key-value pairs.",
          "Optional chaining safely reads nested properties when something may be null or undefined.",
          "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out."
        ],
        "correctAnswer": "Truthy values behave like true in conditions, while falsy values behave like false.",
        "explanation": "Truthy values behave like true in conditions, while falsy values behave like false. Common falsy values include false, 0, empty string, null, undefined and NaN.\n\nExample:\nif (username) {\n  save(username);\n}"
      },
      {
        "id": "js-core-syntax-q-10",
        "type": "true-false",
        "prompt": "True or false: && returns the first falsy value or the last value if all are truthy.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "&& returns the first falsy value or the last value if all are truthy. It is commonly used for combining conditions.\n\nExample:\nif (username) {\n  save(username);\n}"
      },
      {
        "id": "js-core-syntax-q-11",
        "type": "scenario",
        "prompt": "Scenario: You want to show a fallback username when `displayName` is empty, null, or undefined. Which operator is commonly used?",
        "options": [
          "||",
          "try/catch",
          "import",
          "closure"
        ],
        "correctAnswer": "||",
        "explanation": "|| returns the first truthy value. It is often used for fallbacks, but it treats empty strings and 0 as missing too. Example: const label = customLabel || \"Default\";\n\nExample:\nconst label = customLabel || \"Default\";"
      },
      {
        "id": "js-core-syntax-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: ?? returns the right-hand value only when the left-hand value is null or undefined.",
        "correctAnswer": "??",
        "acceptedAnswers": [
          "??",
          "??",
          "??"
        ],
        "explanation": "?? returns the right-hand value only when the left-hand value is null or undefined. It is safer than || when 0 or empty string are valid values.\n\nExample:\nconst pageSize = userPageSize ?? 20;"
      },
      {
        "id": "js-core-syntax-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes ?.?",
        "options": [
          "Optional chaining safely reads nested properties when something may be null or undefined.",
          "It returns the same output for the same input and avoids changing outside state.",
          "const creates a block-scoped variable that cannot be reassigned after its first value is set.",
          "An object stores related data as key-value pairs."
        ],
        "correctAnswer": "Optional chaining safely reads nested properties when something may be null or undefined.",
        "explanation": "Optional chaining safely reads nested properties when something may be null or undefined. It prevents common cannot read property errors.\n\nExample:\nconst city = user.address?.city;"
      },
      {
        "id": "js-core-syntax-q-14",
        "type": "true-false",
        "prompt": "True or false: A function is a reusable block of code that can accept inputs and return an output.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A function is a reusable block of code that can accept inputs and return an output. Functions help keep code organised and testable.\n\nExample:\nfunction add(a, b) { return a + b; }"
      },
      {
        "id": "js-core-syntax-q-15",
        "type": "scenario",
        "prompt": "Scenario: You need a short callback for `items.map(...)` and want lexical `this` behaviour. What should you use?",
        "options": [
          "arrow function",
          "primitive",
          "template literals",
          "if"
        ],
        "correctAnswer": "arrow function",
        "explanation": "An arrow function is a shorter function syntax. It is common in callbacks and does not create its own this binding. Example: const double = (n) => n * 2;\n\nExample:\nconst double = (n) => n * 2;"
      },
      {
        "id": "js-core-syntax-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: return sends a value back from a function and stops that function running.",
        "correctAnswer": "return",
        "acceptedAnswers": [
          "return",
          "return",
          "return"
        ],
        "explanation": "return sends a value back from a function and stops that function running. Without return, a function returns undefined by default.\n\nExample:\nfunction getName(user) {\n  return user.name;\n}"
      },
      {
        "id": "js-core-syntax-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes default parameters?",
        "options": [
          "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out.",
          "An object stores related data as key-value pairs.",
          "Truthy values behave like true in conditions, while falsy values behave like false.",
          "Optional chaining safely reads nested properties when something may be null or undefined."
        ],
        "correctAnswer": "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out.",
        "explanation": "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out.\n\nExample:\nfunction greet(name = \"there\") { return `Hi ${name}`; }"
      },
      {
        "id": "js-core-syntax-q-18",
        "type": "true-false",
        "prompt": "True or false: Rest parameters collect extra function arguments into an array.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Rest parameters collect extra function arguments into an array. They are useful when a function accepts a flexible number of values.\n\nExample:\nfunction sum(...numbers) { return numbers.reduce((a,b)=>a+b,0); }"
      },
      {
        "id": "js-core-syntax-q-19",
        "type": "scenario",
        "prompt": "Scenario: You want to copy an array and add one extra item without mutating the original array. What syntax helps with this?",
        "options": [
          "spread syntax",
          "arrow function",
          "return",
          "switch"
        ],
        "correctAnswer": "spread syntax",
        "explanation": "Spread syntax expands arrays or objects into another array, object or function call. It is often used to copy or combine values. Example: const copy = [...items];\nconst updated = { ...user, name: \"Jay\" };\n\nExample:\nconst copy = [...items];\nconst updated = { ...user, name: \"Jay\" };"
      },
      {
        "id": "js-core-syntax-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A switch statement can make multiple exact-value branches clearer than a long chain of else-if statements.",
        "correctAnswer": "switch",
        "acceptedAnswers": [
          "switch",
          "switch statement",
          "switch statement"
        ],
        "explanation": "A switch statement can make multiple exact-value branches clearer than a long chain of else-if statements.\n\nExample:\nswitch (status) {\n  case \"loading\": return \"Loading\";\n}"
      },
      {
        "id": "js-core-syntax-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes for loop?",
        "options": [
          "A for loop repeats code while a condition is true.",
          "Optional chaining safely reads nested properties when something may be null or undefined.",
          "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out.",
          "Comments should explain why something exists when the code alone is not enough."
        ],
        "correctAnswer": "A for loop repeats code while a condition is true.",
        "explanation": "A for loop repeats code while a condition is true. It is useful when you need index-based control.\n\nExample:\nfor (let i = 0; i < items.length; i++) {}"
      },
      {
        "id": "js-core-syntax-q-22",
        "type": "true-false",
        "prompt": "True or false: for.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "for...of loops over the values in an iterable like an array or string. It is cleaner than index loops when you only need values.\n\nExample:\nconst name = \"GradToDev\";\nconst isReady = true;"
      },
      {
        "id": "js-core-syntax-q-23",
        "type": "scenario",
        "prompt": "Scenario: Code might throw while parsing JSON, and you want to handle the failure gracefully. What should you use?",
        "options": [
          "try/catch",
          "import",
          "closure",
          "var"
        ],
        "correctAnswer": "try/catch",
        "explanation": "try/catch lets you handle errors without crashing the whole flow. Put risky code in try and handle failures in catch. Example: try { await save(); } catch (error) { showError(error); }\n\nExample:\ntry { await save(); } catch (error) { showError(error); }"
      },
      {
        "id": "js-core-syntax-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Imports and exports let you split code into files.",
        "correctAnswer": "import",
        "acceptedAnswers": [
          "import",
          "import/export",
          "import/export"
        ],
        "explanation": "Imports and exports let you split code into files. Export makes code available, and import brings it into another module.\n\nExample:\nexport function format() {}\nimport { format } from \"./format\";"
      },
      {
        "id": "js-core-syntax-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes comments?",
        "options": [
          "Comments should explain why something exists when the code alone is not enough.",
          "Optional chaining safely reads nested properties when something may be null or undefined.",
          "Default parameters give function arguments fallback values when the caller passes undefined or leaves the argument out.",
          "A for loop repeats code while a condition is true."
        ],
        "correctAnswer": "Comments should explain why something exists when the code alone is not enough.",
        "explanation": "Comments should explain why something exists when the code alone is not enough. Avoid comments that only repeat what the code already says.\n\nExample:\n// Use server time because client clocks can be wrong."
      },
      {
        "id": "js-core-syntax-extra-q-closure-scenario",
        "type": "scenario",
        "prompt": "You create a button handler inside a function and it still remembers the userId after the function finishes. What concept explains this?",
        "correctAnswer": "closure",
        "explanation": "A closure lets an inner function remember variables from the scope where it was created.\n\nExample:\nfunction makeCounter(){ let count = 0; return () => ++count; }",
        "options": [
          "closure",
          "hoisting",
          "CORS",
          "type coercion"
        ]
      },
      {
        "id": "js-core-syntax-extra-q-optional-typing",
        "type": "type-answer",
        "prompt": "Type the operator used for safe nested property access, as in user.profile?.name.",
        "correctAnswer": "?.",
        "explanation": "Optional chaining uses ?. to avoid throwing when an intermediate value is null or undefined.\n\nExample:\nconst city = user.profile?.address?.city;",
        "acceptedAnswers": [
          "?.",
          "optional chaining"
        ]
      },
      {
        "id": "js-core-syntax-extra-q-hoisting-true",
        "type": "true-false",
        "prompt": "True or false: let and const can be accessed safely before their declaration because they are hoisted like var.",
        "correctAnswer": "False",
        "explanation": "let and const are hoisted in the sense that JavaScript knows about them, but they are in the temporal dead zone until the declaration line runs.\n\nExample:\n0 === false // false\n0 == false // true",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "js-core-syntax-extra-q-pure-function-mcq",
        "type": "multiple-choice",
        "prompt": "Which option best describes a pure function?",
        "correctAnswer": "It returns the same output for the same input and avoids changing outside state.",
        "explanation": "Pure functions are predictable because they depend on inputs and do not mutate external state.\n\nExample:\nconst addVat = price => price * 1.2;",
        "options": [
          "It returns the same output for the same input and avoids changing outside state.",
          "It always calls an API.",
          "It directly updates the DOM.",
          "It must be declared with function, not an arrow function."
        ]
      },
      {
        "id": "js-core-syntax-extra-q-module-keyword",
        "type": "type-answer",
        "prompt": "Type the keyword used to bring a named export into another JavaScript file.",
        "correctAnswer": "import",
        "explanation": "ES modules use import to bring exported values into another file.\n\nExample:\nexport function formatName(name) {}\nimport { formatName } from \"./formatName\";",
        "acceptedAnswers": [
          "import"
        ]
      },
      {
        "id": "js-core-syntax-extra-q-try-catch-scenario",
        "type": "scenario",
        "prompt": "A JSON.parse call might fail because the server returned invalid JSON. What language feature should you use to handle that failure?",
        "correctAnswer": "try/catch",
        "explanation": "try/catch lets you catch thrown errors and show a useful fallback instead of crashing the app.\n\nExample:\ntry { await save(); } catch (error) { showError(error); }",
        "options": [
          "try/catch",
          "Array.map",
          "Object.freeze",
          "CSS media queries"
        ]
      }
    ]
  },
  {
    "id": "js-array-methods",
    "title": "JavaScript Array Methods",
    "description": "Practise the methods used constantly in frontend, API and data transformation code.",
    "flashcards": [
      {
        "id": "js-array-methods-card-01",
        "front": "What does map() do?",
        "back": "map() creates a new array by transforming every item in the original array. Use it when the output has the same number of items.",
        "example": "users.map(user => user.name)"
      },
      {
        "id": "js-array-methods-card-02",
        "front": "What does filter() do?",
        "back": "filter() creates a new array containing only items that pass a condition. Use it when you want a subset of the original array.",
        "example": "users.filter(user => user.active)"
      },
      {
        "id": "js-array-methods-card-03",
        "front": "What does find() do?",
        "back": "find() returns the first item that matches a condition, or undefined if nothing matches. Use it when you need one item.",
        "example": "users.find(user => user.id === selectedId)"
      },
      {
        "id": "js-array-methods-card-04",
        "front": "What does some() do?",
        "back": "some() returns true if at least one item passes a condition. Use it for yes/no checks.",
        "example": "users.some(user => user.role === \"admin\")"
      },
      {
        "id": "js-array-methods-card-05",
        "front": "What does every() do?",
        "back": "every() returns true only if all items pass a condition. It is useful for validation checks.",
        "example": "fields.every(field => field.value.trim() !== \"\")"
      },
      {
        "id": "js-array-methods-card-06",
        "front": "What does reduce() do?",
        "back": "reduce() combines an array into a single value such as a total, object, map or grouped structure. Use it when map or filter are not enough.",
        "example": "orders.reduce((total, order) => total + order.price, 0)"
      },
      {
        "id": "js-array-methods-card-07",
        "front": "What does forEach() do?",
        "back": "forEach() runs a function for each item but does not return a useful new array. Use it for side effects, not transformations.",
        "example": "items.forEach(item => console.log(item))"
      },
      {
        "id": "js-array-methods-card-08",
        "front": "What does includes() do?",
        "back": "includes() checks whether an array contains a specific value and returns true or false.",
        "example": "allowedRoles.includes(user.role)"
      },
      {
        "id": "js-array-methods-card-09",
        "front": "What does indexOf() do?",
        "back": "indexOf() returns the index of a value or -1 if the value is not found. includes() is clearer when you only need a boolean.",
        "example": "names.indexOf(\"Jay\")"
      },
      {
        "id": "js-array-methods-card-10",
        "front": "What does slice() do?",
        "back": "slice() returns a shallow copy of part of an array without mutating the original array.",
        "example": "items.slice(0, 10)"
      },
      {
        "id": "js-array-methods-card-11",
        "front": "What does splice() do?",
        "back": "splice() changes the original array by removing, replacing or inserting items. Be careful because it mutates.",
        "example": "items.splice(1, 2)"
      },
      {
        "id": "js-array-methods-card-12",
        "front": "What should you know about sort()?",
        "back": "sort() sorts an array in place and mutates it. For numbers, provide a compare function because default sorting treats values as strings.",
        "example": "numbers.sort((a, b) => a - b)"
      },
      {
        "id": "js-array-methods-card-13",
        "front": "What does toSorted() do?",
        "back": "toSorted() returns a sorted copy instead of mutating the original array. It is useful when you want immutable updates.",
        "example": "const sorted = users.toSorted((a, b) => a.name.localeCompare(b.name));"
      },
      {
        "id": "js-array-methods-card-14",
        "front": "What does flat() do?",
        "back": "flat() creates a new array with nested arrays flattened by a chosen depth.",
        "example": "[[1], [2, 3]].flat()"
      },
      {
        "id": "js-array-methods-card-15",
        "front": "What does flatMap() do?",
        "back": "flatMap() maps each item and then flattens the result by one level. It is useful when one input item may produce multiple outputs.",
        "example": "orders.flatMap(order => order.items)"
      },
      {
        "id": "js-array-methods-card-16",
        "front": "What does push() do?",
        "back": "push() adds items to the end of an array and mutates the original array.",
        "example": "items.push(newItem)"
      },
      {
        "id": "js-array-methods-card-17",
        "front": "What does pop() do?",
        "back": "pop() removes and returns the last item from an array. It mutates the original array.",
        "example": "const last = items.pop();"
      },
      {
        "id": "js-array-methods-card-18",
        "front": "What does shift() do?",
        "back": "shift() removes and returns the first item from an array. It mutates the array and can be costly on large arrays.",
        "example": "const first = queue.shift();"
      },
      {
        "id": "js-array-methods-card-19",
        "front": "What does unshift() do?",
        "back": "unshift() adds items to the start of an array and mutates it.",
        "example": "items.unshift(newFirstItem)"
      },
      {
        "id": "js-array-methods-card-20",
        "front": "What does concat() do?",
        "back": "concat() joins arrays or values into a new array without mutating the originals.",
        "example": "const all = oldItems.concat(newItems);"
      },
      {
        "id": "js-array-methods-card-21",
        "front": "What does join() do?",
        "back": "join() turns array items into a string separated by the text you provide.",
        "example": "tags.join(\", \")"
      },
      {
        "id": "js-array-methods-card-22",
        "front": "What does at() do?",
        "back": "at() reads an item by index and supports negative indexes for reading from the end.",
        "example": "items.at(-1)"
      },
      {
        "id": "js-array-methods-card-23",
        "front": "Why use Array.isArray()?",
        "back": "Array.isArray() safely checks whether a value is an array. typeof returns object for arrays, so it is not enough.",
        "example": "Array.isArray(value)"
      },
      {
        "id": "js-array-methods-card-24",
        "front": "How can Set help with arrays?",
        "back": "Set stores unique values. Converting an array to a Set and back is a common way to remove duplicate primitive values.",
        "example": "const unique = [...new Set(ids)];"
      },
      {
        "id": "js-array-methods-card-25",
        "front": "What is array method chaining?",
        "back": "Method chaining runs several array operations in sequence. Keep chains readable by splitting them across lines when they get long.",
        "example": "users.filter(u => u.active).map(u => u.email)"
      },
      {
        "id": "js-array-methods-extra-card-mutation-awareness",
        "front": "Why care about mutating array methods?",
        "back": "Some methods change the original array, while others return a new array. In UI code, non-mutating methods are usually safer because state changes stay predictable.",
        "example": "const sorted = [...items].sort(compareFn);"
      },
      {
        "id": "js-array-methods-extra-card-slice-vs-splice",
        "front": "What is slice vs splice?",
        "back": "slice returns a copy of part of an array and does not mutate. splice adds/removes items from the original array and mutates it.",
        "example": "items.slice(0, 3);\nitems.splice(1, 1);"
      },
      {
        "id": "js-array-methods-extra-card-flatmap",
        "front": "What does flatMap do?",
        "back": "flatMap maps each item and then flattens the result by one level. It is useful when one input item may become zero, one or many output items.",
        "example": "orders.flatMap(order => order.items);"
      },
      {
        "id": "js-array-methods-extra-card-findindex",
        "front": "When use findIndex?",
        "back": "findIndex returns the index of the first matching item. Use it when you need the position so you can update, remove or inspect that item.",
        "example": "const index = users.findIndex(u => u.id === id);"
      },
      {
        "id": "js-array-methods-extra-card-dedupe-set",
        "front": "How can Set help with arrays?",
        "back": "A Set stores unique values. Converting an array to a Set and back is a common way to remove duplicate primitive values.",
        "example": "const unique = [...new Set(tags)];"
      },
      {
        "id": "js-array-methods-extra-card-tosorted",
        "front": "What is toSorted?",
        "back": "toSorted returns a sorted copy of an array without mutating the original. It is safer than sort when you must preserve existing state.",
        "example": "const sorted = items.toSorted((a,b) => a.price - b.price);"
      },
      {
        "id": "js-array-methods-extra-card-reduce-warning",
        "front": "When should you avoid reduce?",
        "back": "reduce is powerful, but it can become hard to read. If map, filter, some, every or a simple loop is clearer, prefer the clearer option.",
        "example": "const total = prices.reduce((sum, p) => sum + p, 0);"
      },
      {
        "id": "js-array-methods-extra-card-at-method",
        "front": "What does .at() do?",
        "back": ".at() reads an item by index and supports negative indexes, which is useful for getting the last item without calculating length - 1.",
        "example": "const last = items.at(-1);"
      }
    ],
    "questions": [
      {
        "id": "js-array-methods-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes map()?",
        "options": [
          "map() creates a new array by transforming every item in the original array.",
          "pop() removes and returns the last item from an array.",
          "join() turns array items into a string separated by the text you provide.",
          "Method chaining runs several array operations in sequence."
        ],
        "correctAnswer": "map() creates a new array by transforming every item in the original array.",
        "explanation": "map() creates a new array by transforming every item in the original array. Use it when the output has the same number of items.\n\nExample:\nusers.map(user => user.name)"
      },
      {
        "id": "js-array-methods-q-02",
        "type": "true-false",
        "prompt": "True or false: filter() creates a new array containing only items that pass a condition.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "filter() creates a new array containing only items that pass a condition. Use it when you want a subset of the original array.\n\nExample:\nusers.filter(user => user.active)"
      },
      {
        "id": "js-array-methods-q-03",
        "type": "scenario",
        "prompt": "Scenario: From an array of users, you need the first user whose `id` matches `targetId`. Which array method fits best?",
        "options": [
          "find()",
          "includes",
          "splice()",
          "sort"
        ],
        "correctAnswer": "find()",
        "explanation": "find() returns the first item that matches a condition, or undefined if nothing matches. Use it when you need one item. Example: users.find(user => user.id === selectedId)\n\nExample:\nusers.find(user => user.id === selectedId)"
      },
      {
        "id": "js-array-methods-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: some() returns true if at least one item passes a condition.",
        "correctAnswer": "some",
        "acceptedAnswers": [
          "some",
          "some()",
          "some"
        ],
        "explanation": "some() returns true if at least one item passes a condition. Use it for yes/no checks.\n\nExample:\nusers.some(user => user.role === \"admin\")"
      },
      {
        "id": "js-array-methods-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes every()?",
        "options": [
          "every() returns true only if all items pass a condition.",
          "indexOf() returns the index of a value or -1 if the value is not found.",
          "toSorted() returns a sorted copy instead of mutating the original array.",
          "pop() removes and returns the last item from an array."
        ],
        "correctAnswer": "every() returns true only if all items pass a condition.",
        "explanation": "every() returns true only if all items pass a condition. It is useful for validation checks.\n\nExample:\nfields.every(field => field.value.trim() !== \"\")"
      },
      {
        "id": "js-array-methods-q-06",
        "type": "true-false",
        "prompt": "True or false: reduce() combines an array into a single value such as a total, object, map or grouped structure.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "reduce() combines an array into a single value such as a total, object, map or grouped structure. Use it when map or filter are not enough.\n\nExample:\norders.reduce((total, order) => total + order.price, 0)"
      },
      {
        "id": "js-array-methods-q-07",
        "type": "scenario",
        "prompt": "Scenario: You want to run a side effect for every item in an array, such as logging each value, without creating a new array. Which method fits best?",
        "options": [
          "forEach()",
          "find()",
          "some",
          "includes"
        ],
        "correctAnswer": "forEach()",
        "explanation": "forEach() runs a function for each item but does not return a useful new array. Use it for side effects, not transformations. Example: items.forEach(item => console.log(item))\n\nExample:\nitems.forEach(item => console.log(item))"
      },
      {
        "id": "js-array-methods-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: includes() checks whether an array contains a specific value and returns true or false.",
        "correctAnswer": "includes",
        "acceptedAnswers": [
          "includes",
          "includes()",
          "includes"
        ],
        "explanation": "includes() checks whether an array contains a specific value and returns true or false.\n\nExample:\nallowedRoles.includes(user.role)"
      },
      {
        "id": "js-array-methods-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes indexOf()?",
        "options": [
          "indexOf() returns the index of a value or -1 if the value is not found.",
          "toSorted() returns a sorted copy instead of mutating the original array.",
          "pop() removes and returns the last item from an array.",
          "join() turns array items into a string separated by the text you provide."
        ],
        "correctAnswer": "indexOf() returns the index of a value or -1 if the value is not found.",
        "explanation": "indexOf() returns the index of a value or -1 if the value is not found. includes() is clearer when you only need a boolean.\n\nExample:\nnames.indexOf(\"Jay\")"
      },
      {
        "id": "js-array-methods-q-10",
        "type": "true-false",
        "prompt": "True or false: slice() returns a shallow copy of part of an array without mutating the original array.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "slice() returns a shallow copy of part of an array without mutating the original array.\n\nExample:\nallowedRoles.includes(user.role)"
      },
      {
        "id": "js-array-methods-q-11",
        "type": "scenario",
        "prompt": "Scenario: You need to remove two items from the middle of an existing array and mutate that same array. Which method fits best?",
        "options": [
          "splice()",
          "splice",
          "flatMap",
          "at"
        ],
        "correctAnswer": "splice()",
        "explanation": "splice() changes the original array by removing, replacing or inserting items. Be careful because it mutates. Example: items.splice(1, 2)\n\nExample:\nitems.splice(1, 2)"
      },
      {
        "id": "js-array-methods-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: sort() sorts an array in place and mutates it.",
        "correctAnswer": "sort",
        "acceptedAnswers": [
          "sort",
          "sort()",
          "sort"
        ],
        "explanation": "sort() sorts an array in place and mutates it. For numbers, provide a compare function because default sorting treats values as strings.\n\nExample:\nnumbers.sort((a, b) => a - b)"
      },
      {
        "id": "js-array-methods-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes toSorted()?",
        "options": [
          "toSorted() returns a sorted copy instead of mutating the original array.",
          "When you need the position of the matching item in the array.",
          "map() creates a new array by transforming every item in the original array.",
          "every() returns true only if all items pass a condition."
        ],
        "correctAnswer": "toSorted() returns a sorted copy instead of mutating the original array.",
        "explanation": "toSorted() returns a sorted copy instead of mutating the original array. It is useful when you want immutable updates.\n\nExample:\nconst sorted = users.toSorted((a, b) => a.name.localeCompare(b.name));"
      },
      {
        "id": "js-array-methods-q-14",
        "type": "true-false",
        "prompt": "True or false: flat() creates a new array with nested arrays flattened by a chosen depth.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "flat() creates a new array with nested arrays flattened by a chosen depth.\n\nExample:\nallowedRoles.includes(user.role)"
      },
      {
        "id": "js-array-methods-q-15",
        "type": "scenario",
        "prompt": "Scenario: Each order contains multiple line items, and you want one flat array of all line items after mapping over the orders. Which method fits best?",
        "options": [
          "flatMap()",
          "splice()",
          "sort",
          "push"
        ],
        "correctAnswer": "flatMap()",
        "explanation": "flatMap() maps each item and then flattens the result by one level. It is useful when one input item may produce multiple outputs. Example: orders.flatMap(order => order.items)\n\nExample:\norders.flatMap(order => order.items)"
      },
      {
        "id": "js-array-methods-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: push() adds items to the end of an array and mutates the original array.",
        "correctAnswer": "push",
        "acceptedAnswers": [
          "push",
          "push()",
          "push"
        ],
        "explanation": "push() adds items to the end of an array and mutates the original array.\n\nExample:\nitems.push(newItem)"
      },
      {
        "id": "js-array-methods-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes pop()?",
        "options": [
          "pop() removes and returns the last item from an array.",
          "join() turns array items into a string separated by the text you provide.",
          "Method chaining runs several array operations in sequence.",
          "When you need the position of the matching item in the array."
        ],
        "correctAnswer": "pop() removes and returns the last item from an array.",
        "explanation": "pop() removes and returns the last item from an array. It mutates the original array.\n\nExample:\nconst last = items.pop();"
      },
      {
        "id": "js-array-methods-q-18",
        "type": "true-false",
        "prompt": "True or false: shift() removes and returns the first item from an array.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "shift() removes and returns the first item from an array. It mutates the array and can be costly on large arrays.\n\nExample:\nconst first = queue.shift();"
      },
      {
        "id": "js-array-methods-q-19",
        "type": "scenario",
        "prompt": "Scenario: You need to add a new notification to the beginning of an existing array. Which method fits best?",
        "options": [
          "unshift()",
          "splice()",
          "sort",
          "flatMap()"
        ],
        "correctAnswer": "unshift()",
        "explanation": "unshift() adds items to the start of an array and mutates it. Example: items.unshift(newFirstItem)\n\nExample:\nitems.unshift(newFirstItem)"
      },
      {
        "id": "js-array-methods-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: concat() joins arrays or values into a new array without mutating the originals.",
        "correctAnswer": "concat",
        "acceptedAnswers": [
          "concat",
          "concat()",
          "concat"
        ],
        "explanation": "concat() joins arrays or values into a new array without mutating the originals.\n\nExample:\nconst all = oldItems.concat(newItems);"
      },
      {
        "id": "js-array-methods-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes join()?",
        "options": [
          "join() turns array items into a string separated by the text you provide.",
          "Method chaining runs several array operations in sequence.",
          "When you need the position of the matching item in the array.",
          "map() creates a new array by transforming every item in the original array."
        ],
        "correctAnswer": "join() turns array items into a string separated by the text you provide.",
        "explanation": "join() turns array items into a string separated by the text you provide.\n\nExample:\ntags.join(\", \")"
      },
      {
        "id": "js-array-methods-q-22",
        "type": "true-false",
        "prompt": "True or false: at() reads an item by index and supports negative indexes for reading from the end.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "at() reads an item by index and supports negative indexes for reading from the end.\n\nExample:\nusers.some(user => user.role === \"admin\")"
      },
      {
        "id": "js-array-methods-q-23",
        "type": "scenario",
        "prompt": "Scenario: An API field could be a string or an array. You need to check whether it is actually an array before mapping over it. What should you use?",
        "options": [
          "Array.isArray()",
          "unshift()",
          "concat",
          "Set"
        ],
        "correctAnswer": "Array.isArray()",
        "explanation": "Array.isArray() safely checks whether a value is an array. typeof returns object for arrays, so it is not enough. Example: Array.isArray(value)\n\nExample:\nArray.isArray(value)"
      },
      {
        "id": "js-array-methods-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Set stores unique values.",
        "correctAnswer": "Set",
        "acceptedAnswers": [
          "Set",
          "Set",
          "Set"
        ],
        "explanation": "Set stores unique values. Converting an array to a Set and back is a common way to remove duplicate primitive values.\n\nExample:\nconst unique = [...new Set(ids)];"
      },
      {
        "id": "js-array-methods-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes method chaining?",
        "options": [
          "Method chaining runs several array operations in sequence.",
          "every() returns true only if all items pass a condition.",
          "indexOf() returns the index of a value or -1 if the value is not found.",
          "toSorted() returns a sorted copy instead of mutating the original array."
        ],
        "correctAnswer": "Method chaining runs several array operations in sequence.",
        "explanation": "Method chaining runs several array operations in sequence. Keep chains readable by splitting them across lines when they get long.\n\nExample:\nusers.filter(u => u.active).map(u => u.email)"
      },
      {
        "id": "js-array-methods-extra-q-slice-splice",
        "type": "multiple-choice",
        "prompt": "Which method mutates the original array?",
        "correctAnswer": "splice",
        "explanation": "splice changes the original array. slice returns a new copied section.\n\nExample:\nitems.slice(0, 3);\nitems.splice(1, 1);",
        "options": [
          "splice",
          "slice",
          "map",
          "filter"
        ]
      },
      {
        "id": "js-array-methods-extra-q-tosorted-tf",
        "type": "true-false",
        "prompt": "True or false: toSorted() sorts the array without mutating the original array.",
        "correctAnswer": "True",
        "explanation": "toSorted creates a sorted copy. sort mutates the original array.\n\nExample:\nallowedRoles.includes(user.role)",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "js-array-methods-extra-q-flatmap-scenario",
        "type": "scenario",
        "prompt": "You have an array of orders and each order has an items array. You want one flat list of all items. Which method is a good fit?",
        "correctAnswer": "flatMap",
        "explanation": "flatMap can return each order’s items and flatten the result into one array.\n\nExample:\norders.flatMap(order => order.items)",
        "options": [
          "flatMap",
          "every",
          "includes",
          "findIndex"
        ]
      },
      {
        "id": "js-array-methods-extra-q-last-item-type",
        "type": "type-answer",
        "prompt": "Type the method that can get the last array item using items.____(-1).",
        "correctAnswer": "at",
        "explanation": "The at method supports negative indexes like -1 for the last item.\n\nExample:\nconst last = items.at(-1);",
        "acceptedAnswers": [
          "at",
          ".at"
        ]
      },
      {
        "id": "js-array-methods-extra-q-dedupe-scenario",
        "type": "scenario",
        "prompt": "You need to remove duplicate primitive values from an array of strings. Which built-in object is commonly used?",
        "correctAnswer": "Set",
        "explanation": "Set only keeps unique values, so [...new Set(values)] is a common dedupe pattern.\n\nExample:\nconst unique = [...new Set(ids)];",
        "options": [
          "Set",
          "Map",
          "Promise",
          "WeakRef"
        ]
      },
      {
        "id": "js-array-methods-extra-q-findindex-purpose",
        "type": "multiple-choice",
        "prompt": "When is findIndex more useful than find?",
        "correctAnswer": "When you need the position of the matching item in the array.",
        "explanation": "find returns the item. findIndex returns its index.\n\nExample:\nconst index = users.findIndex(u => u.id === id);",
        "options": [
          "When you need the position of the matching item in the array.",
          "When you need a boolean result only.",
          "When you want to transform every item.",
          "When you want to join strings."
        ]
      }
    ]
  },
  {
    "id": "js-string-methods",
    "title": "JavaScript String Methods",
    "description": "Learn the string methods you need for validation, formatting, searching and parsing text.",
    "flashcards": [
      {
        "id": "js-string-methods-card-01",
        "front": "What does string length give you?",
        "back": "length gives the number of UTF-16 code units in a string. It is commonly used for simple validation but can be imperfect for emojis.",
        "example": "password.length >= 8"
      },
      {
        "id": "js-string-methods-card-02",
        "front": "What does trim() do?",
        "back": "trim() removes whitespace from the start and end of a string. It is useful before validation or comparison.",
        "example": "email.trim()"
      },
      {
        "id": "js-string-methods-card-03",
        "front": "Why use toLowerCase()?",
        "back": "toLowerCase() returns a lowercase copy of the string. Use it for case-insensitive comparisons.",
        "example": "role.toLowerCase() === \"admin\""
      },
      {
        "id": "js-string-methods-card-04",
        "front": "What does toUpperCase() do?",
        "back": "toUpperCase() returns an uppercase copy of the string. It is useful for normalising codes or labels.",
        "example": "countryCode.toUpperCase()"
      },
      {
        "id": "js-string-methods-card-05",
        "front": "What does string includes() do?",
        "back": "includes() checks whether a string contains another string and returns true or false.",
        "example": "message.includes(\"error\")"
      },
      {
        "id": "js-string-methods-card-06",
        "front": "What does startsWith() do?",
        "back": "startsWith() checks whether a string begins with a given prefix.",
        "example": "url.startsWith(\"https://\")"
      },
      {
        "id": "js-string-methods-card-07",
        "front": "What does endsWith() do?",
        "back": "endsWith() checks whether a string ends with a given suffix.",
        "example": "fileName.endsWith(\".ts\")"
      },
      {
        "id": "js-string-methods-card-08",
        "front": "What does string slice() do?",
        "back": "slice() returns part of a string without changing the original string.",
        "example": "id.slice(0, 8)"
      },
      {
        "id": "js-string-methods-card-09",
        "front": "What does substring() do?",
        "back": "substring() returns characters between two indexes but handles arguments differently from slice. In modern code, slice is often clearer.",
        "example": "name.substring(0, 3)"
      },
      {
        "id": "js-string-methods-card-10",
        "front": "What does split() do?",
        "back": "split() turns a string into an array by cutting it at a separator.",
        "example": "csvLine.split(\",\")"
      },
      {
        "id": "js-string-methods-card-11",
        "front": "What does replace() do?",
        "back": "replace() returns a new string with the first matching text or pattern replaced. Use a global regex for all matches.",
        "example": "text.replace(\" \", \"-\")"
      },
      {
        "id": "js-string-methods-card-12",
        "front": "What does replaceAll() do?",
        "back": "replaceAll() returns a new string with every matching substring replaced.",
        "example": "slug.replaceAll(\" \", \"-\")"
      },
      {
        "id": "js-string-methods-card-13",
        "front": "What does match() do?",
        "back": "match() searches a string using a regular expression and returns match information or null.",
        "example": "email.match(/@(.+)$/)"
      },
      {
        "id": "js-string-methods-card-14",
        "front": "What does RegExp.test() do?",
        "back": "RegExp.test() checks whether a string matches a pattern and returns true or false.",
        "example": "/^\\d+$/.test(value)"
      },
      {
        "id": "js-string-methods-card-15",
        "front": "What does padStart() do?",
        "back": "padStart() adds characters to the beginning of a string until it reaches a target length.",
        "example": "String(month).padStart(2, \"0\")"
      },
      {
        "id": "js-string-methods-card-16",
        "front": "What does padEnd() do?",
        "back": "padEnd() adds characters to the end of a string until it reaches a target length.",
        "example": "label.padEnd(10, \".\")"
      },
      {
        "id": "js-string-methods-card-17",
        "front": "What does charAt() do?",
        "back": "charAt() returns the character at a specific index. Bracket syntax is more common in modern code.",
        "example": "name.charAt(0)"
      },
      {
        "id": "js-string-methods-card-18",
        "front": "How do you read a character by index?",
        "back": "String indexing with brackets reads a character at a position. It returns undefined when the index is out of range.",
        "example": "name[0]"
      },
      {
        "id": "js-string-methods-card-19",
        "front": "What does localeCompare() do?",
        "back": "localeCompare() compares strings in a way that is useful for sorting text alphabetically.",
        "example": "names.sort((a,b) => a.localeCompare(b))"
      },
      {
        "id": "js-string-methods-card-20",
        "front": "What does String() do?",
        "back": "String() converts a value to a string. It is often clearer than relying on implicit conversion.",
        "example": "String(userId)"
      },
      {
        "id": "js-string-methods-card-21",
        "front": "How do you convert numeric strings?",
        "back": "Number() converts a string to a number when possible. Always consider invalid input because the result may be NaN.",
        "example": "const count = Number(inputValue);"
      },
      {
        "id": "js-string-methods-card-22",
        "front": "How can template literals help with multiline strings?",
        "back": "Template literals can span multiple lines, which is useful for readable longer strings or generated text.",
        "example": "const html = `<section>\n  <h1>${title}</h1>\n</section>`;"
      },
      {
        "id": "js-string-methods-card-23",
        "front": "What is escaping in strings?",
        "back": "Escaping lets you include special characters like quotes or new lines inside strings.",
        "example": "const quote = \"He said \\\"hello\\\"\";"
      },
      {
        "id": "js-string-methods-card-24",
        "front": "Are strings mutable?",
        "back": "Strings are immutable, so string methods return new strings instead of changing the original value.",
        "example": "const upper = name.toUpperCase();"
      },
      {
        "id": "js-string-methods-card-25",
        "front": "What does normalising a string mean?",
        "back": "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing.",
        "example": "const normalised = email.trim().toLowerCase();"
      },
      {
        "id": "js-string-methods-extra-card-regex-test",
        "front": "What is RegExp.test used for?",
        "back": "test checks whether a string matches a regular expression and returns true or false. It is useful for validation and simple pattern checks.",
        "example": "/^\\S+@\\S+\\.\\S+$/.test(email);"
      },
      {
        "id": "js-string-methods-extra-card-match",
        "front": "What does match do?",
        "back": "match searches a string using a regular expression and returns match details or null. It is useful when you need the matched text, not just true/false.",
        "example": "const result = text.match(/#[a-z]+/i);"
      },
      {
        "id": "js-string-methods-extra-card-replace-callback",
        "front": "Why use a callback with replace?",
        "back": "replace can take a function so you can calculate the replacement based on the matched text. This is useful for formatting and sanitising text.",
        "example": "name.replace(/\\b\\w/g, char => char.toUpperCase());"
      },
      {
        "id": "js-string-methods-extra-card-localecompare",
        "front": "What is localeCompare?",
        "back": "localeCompare compares strings in a locale-aware way. It is useful for sorting names or labels for users rather than relying on raw character codes.",
        "example": "names.sort((a,b) => a.localeCompare(b));"
      },
      {
        "id": "js-string-methods-extra-card-intl-format",
        "front": "What is Intl used for?",
        "back": "Intl provides built-in international formatting for dates, numbers, currency and plural rules. It is better than manually formatting user-facing values.",
        "example": "new Intl.NumberFormat(\"en-GB\", { style: \"currency\", currency: \"GBP\" }).format(12.5);"
      },
      {
        "id": "js-string-methods-extra-card-encode-uri",
        "front": "When use encodeURIComponent?",
        "back": "Use encodeURIComponent when putting user text into a query string so spaces, symbols and special characters are safely encoded.",
        "example": "`/search?q=${encodeURIComponent(query)}`"
      },
      {
        "id": "js-string-methods-extra-card-normalise-input",
        "front": "Why normalise user input?",
        "back": "Normalising input means trimming, lowercasing or standardising it before comparison. This avoids bugs where visually similar input fails to match.",
        "example": "const normalised = answer.trim().toLowerCase();"
      },
      {
        "id": "js-string-methods-extra-card-starts-ends",
        "front": "When use startsWith and endsWith?",
        "back": "startsWith and endsWith are readable ways to check prefixes and suffixes without manually slicing strings.",
        "example": "file.endsWith(\".ts\")"
      }
    ],
    "questions": [
      {
        "id": "js-string-methods-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes length?",
        "options": [
          "length gives the number of UTF-16 code units in a string.",
          "charAt() returns the character at a specific index.",
          "Number() converts a string to a number when possible.",
          "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing."
        ],
        "correctAnswer": "length gives the number of UTF-16 code units in a string.",
        "explanation": "length gives the number of UTF-16 code units in a string. It is commonly used for simple validation but can be imperfect for emojis.\n\nExample:\npassword.length >= 8"
      },
      {
        "id": "js-string-methods-q-02",
        "type": "true-false",
        "prompt": "True or false: trim() removes whitespace from the start and end of a string.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "trim() removes whitespace from the start and end of a string. It is useful before validation or comparison.\n\nExample:\n/^\\S+@\\S+\\.\\S+$/.test(email);"
      },
      {
        "id": "js-string-methods-q-03",
        "type": "scenario",
        "prompt": "Scenario: You want a case-insensitive comparison, so `Hello` and `hello` are treated the same. Which string method helps?",
        "options": [
          "toLowerCase()",
          "endsWith()",
          "slice",
          "replace()"
        ],
        "correctAnswer": "toLowerCase()",
        "explanation": "toLowerCase() returns a lowercase copy of the string. Use it for case-insensitive comparisons. Example: role.toLowerCase() === \"admin\"\n\nExample:\nrole.toLowerCase() === \"admin\""
      },
      {
        "id": "js-string-methods-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: toUpperCase() returns an uppercase copy of the string.",
        "correctAnswer": "toUpperCase",
        "acceptedAnswers": [
          "toUpperCase",
          "toUpperCase()",
          "toUpperCase"
        ],
        "explanation": "toUpperCase() returns an uppercase copy of the string. It is useful for normalising codes or labels.\n\nExample:\ncountryCode.toUpperCase()"
      },
      {
        "id": "js-string-methods-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes includes()?",
        "options": [
          "includes() checks whether a string contains another string and returns true or false.",
          "charAt() returns the character at a specific index.",
          "Number() converts a string to a number when possible.",
          "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing."
        ],
        "correctAnswer": "includes() checks whether a string contains another string and returns true or false.",
        "explanation": "includes() checks whether a string contains another string and returns true or false.\n\nExample:\nmessage.includes(\"error\")"
      },
      {
        "id": "js-string-methods-q-06",
        "type": "true-false",
        "prompt": "True or false: startsWith() checks whether a string begins with a given prefix.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "startsWith() checks whether a string begins with a given prefix.\n\nExample:\nmessage.includes(\"error\")"
      },
      {
        "id": "js-string-methods-q-07",
        "type": "scenario",
        "prompt": "Scenario: You need to check whether a filename finishes with `.png`. Which string method fits best?",
        "options": [
          "endsWith()",
          "toUpperCase",
          "slice",
          "replace()"
        ],
        "correctAnswer": "endsWith()",
        "explanation": "endsWith() checks whether a string ends with a given suffix. Example: fileName.endsWith(\".ts\")\n\nExample:\nfileName.endsWith(\".ts\")"
      },
      {
        "id": "js-string-methods-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: slice() returns part of a string without changing the original string.",
        "correctAnswer": "slice",
        "acceptedAnswers": [
          "slice",
          "slice()",
          "slice"
        ],
        "explanation": "slice() returns part of a string without changing the original string.\n\nExample:\nid.slice(0, 8)"
      },
      {
        "id": "js-string-methods-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes substring()?",
        "options": [
          "substring() returns characters between two indexes but handles arguments differently from slice.",
          "match() searches a string using a regular expression and returns match information or null.",
          "charAt() returns the character at a specific index.",
          "Number() converts a string to a number when possible."
        ],
        "correctAnswer": "substring() returns characters between two indexes but handles arguments differently from slice.",
        "explanation": "substring() returns characters between two indexes but handles arguments differently from slice. In modern code, slice is often clearer.\n\nExample:\nname.substring(0, 3)"
      },
      {
        "id": "js-string-methods-q-10",
        "type": "true-false",
        "prompt": "True or false: split() turns a string into an array by cutting it at a separator.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "split() turns a string into an array by cutting it at a separator.\n\nExample:\nmessage.includes(\"error\")"
      },
      {
        "id": "js-string-methods-q-11",
        "type": "scenario",
        "prompt": "Scenario: You need to change the first matching part of a string, such as replacing `cat` with `dog`. Which method fits best?",
        "options": [
          "replace()",
          "test",
          "localeCompare",
          "normalise the input"
        ],
        "correctAnswer": "replace()",
        "explanation": "replace() returns a new string with the first matching text or pattern replaced. Use a global regex for all matches. Example: text.replace(\" \", \"-\")\n\nExample:\ntext.replace(\" \", \"-\")"
      },
      {
        "id": "js-string-methods-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: replaceAll() returns a new string with every matching substring replaced.",
        "correctAnswer": "replaceAll",
        "acceptedAnswers": [
          "replaceAll",
          "replaceAll()",
          "replaceAll"
        ],
        "explanation": "replaceAll() returns a new string with every matching substring replaced.\n\nExample:\nslug.replaceAll(\" \", \"-\")"
      },
      {
        "id": "js-string-methods-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes match()?",
        "options": [
          "match() searches a string using a regular expression and returns match information or null.",
          "Number() converts a string to a number when possible.",
          "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing.",
          "To calculate each replacement based on the matched text."
        ],
        "correctAnswer": "match() searches a string using a regular expression and returns match information or null.",
        "explanation": "match() searches a string using a regular expression and returns match information or null.\n\nExample:\nemail.match(/@(.+)$/)"
      },
      {
        "id": "js-string-methods-q-14",
        "type": "true-false",
        "prompt": "True or false: RegExp.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "RegExp.test() checks whether a string matches a pattern and returns true or false.\n\nExample:\n/^\\d+$/.test(value)"
      },
      {
        "id": "js-string-methods-q-15",
        "type": "scenario",
        "prompt": "Scenario: You need to display order number `7` as `007`. Which string method fits best?",
        "options": [
          "padStart()",
          "toUpperCase",
          "endsWith()",
          "slice"
        ],
        "correctAnswer": "padStart()",
        "explanation": "padStart() adds characters to the beginning of a string until it reaches a target length. Example: String(month).padStart(2, \"0\")\n\nExample:\nString(month).padStart(2, \"0\")"
      },
      {
        "id": "js-string-methods-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: padEnd() adds characters to the end of a string until it reaches a target length.",
        "correctAnswer": "padEnd",
        "acceptedAnswers": [
          "padEnd",
          "padEnd()",
          "padEnd"
        ],
        "explanation": "padEnd() adds characters to the end of a string until it reaches a target length.\n\nExample:\nlabel.padEnd(10, \".\")"
      },
      {
        "id": "js-string-methods-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes charAt()?",
        "options": [
          "charAt() returns the character at a specific index.",
          "Number() converts a string to a number when possible.",
          "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing.",
          "To calculate each replacement based on the matched text."
        ],
        "correctAnswer": "charAt() returns the character at a specific index.",
        "explanation": "charAt() returns the character at a specific index. Bracket syntax is more common in modern code.\n\nExample:\nname.charAt(0)"
      },
      {
        "id": "js-string-methods-q-18",
        "type": "true-false",
        "prompt": "True or false: String indexing with brackets reads a character at a position.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "String indexing with brackets reads a character at a position. It returns undefined when the index is out of range.\n\nExample:\nname[0]"
      },
      {
        "id": "js-string-methods-q-19",
        "type": "scenario",
        "prompt": "Scenario: You need to sort names alphabetically in a way that respects language/locale rules. Which method fits best?",
        "options": [
          "localeCompare()",
          "padEnd",
          "String",
          "escaping characters"
        ],
        "correctAnswer": "localeCompare()",
        "explanation": "localeCompare() compares strings in a way that is useful for sorting text alphabetically. Example: names.sort((a,b) => a.localeCompare(b))\n\nExample:\nnames.sort((a,b) => a.localeCompare(b))"
      },
      {
        "id": "js-string-methods-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: String() converts a value to a string.",
        "correctAnswer": "String",
        "acceptedAnswers": [
          "String",
          "String()",
          "String"
        ],
        "explanation": "String() converts a value to a string. It is often clearer than relying on implicit conversion.\n\nExample:\nString(userId)"
      },
      {
        "id": "js-string-methods-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes Number()?",
        "options": [
          "Number() converts a string to a number when possible.",
          "To calculate each replacement based on the matched text.",
          "length gives the number of UTF-16 code units in a string.",
          "includes() checks whether a string contains another string and returns true or false."
        ],
        "correctAnswer": "Number() converts a string to a number when possible.",
        "explanation": "Number() converts a string to a number when possible. Always consider invalid input because the result may be NaN.\n\nExample:\nconst count = Number(inputValue);"
      },
      {
        "id": "js-string-methods-q-22",
        "type": "true-false",
        "prompt": "True or false: Template literals can span multiple lines, which is useful for readable longer strings or generated text.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Template literals can span multiple lines, which is useful for readable longer strings or generated text.\n\nExample:\nconst html = `<section>\n  <h1>${title}</h1>\n</section>`;"
      },
      {
        "id": "js-string-methods-q-23",
        "type": "scenario",
        "prompt": "Scenario: You need to include quotation marks inside a string without ending the string early. What technique is needed?",
        "options": [
          "escaping characters",
          "localeCompare()",
          "String",
          "immutable"
        ],
        "correctAnswer": "escaping characters",
        "explanation": "Escaping lets you include special characters like quotes or new lines inside strings. Example: const quote = \"He said \\\"hello\\\"\";\n\nExample:\nconst quote = \"He said \\\"hello\\\"\";"
      },
      {
        "id": "js-string-methods-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Strings are immutable, so string methods return new strings instead of changing the original value.",
        "correctAnswer": "immutable",
        "acceptedAnswers": [
          "immutable",
          "string immutability",
          "string immutability"
        ],
        "explanation": "Strings are immutable, so string methods return new strings instead of changing the original value.\n\nExample:\nconst upper = name.toUpperCase();"
      },
      {
        "id": "js-string-methods-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes normalising strings?",
        "options": [
          "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing.",
          "Number() converts a string to a number when possible.",
          "To calculate each replacement based on the matched text.",
          "length gives the number of UTF-16 code units in a string."
        ],
        "correctAnswer": "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing.",
        "explanation": "Normalising means converting text into a consistent format before comparing or storing it, such as trimming and lowercasing.\n\nExample:\nconst normalised = email.trim().toLowerCase();"
      },
      {
        "id": "js-string-methods-extra-q-encode-scenario",
        "type": "scenario",
        "prompt": "A search box lets users type spaces and symbols. What should you use before placing the query in a URL parameter?",
        "correctAnswer": "encodeURIComponent",
        "explanation": "encodeURIComponent safely escapes user text for a URL component.\n\nExample:\n`/search?q=${encodeURIComponent(query)}`",
        "options": [
          "encodeURIComponent",
          "JSON.parse",
          "Array.reduce",
          "Object.assign"
        ]
      },
      {
        "id": "js-string-methods-extra-q-regex-test-type",
        "type": "type-answer",
        "prompt": "Type the RegExp method that returns true or false when checking a string pattern.",
        "correctAnswer": "test",
        "explanation": "RegExp.test returns a boolean indicating whether the string matches the pattern.\n\nExample:\n/^\\d+$/.test(value)",
        "acceptedAnswers": [
          "test",
          ".test"
        ]
      },
      {
        "id": "js-string-methods-extra-q-localecompare-mcq",
        "type": "multiple-choice",
        "prompt": "Which method is best for locale-aware string sorting?",
        "correctAnswer": "localeCompare",
        "explanation": "localeCompare compares strings using locale-aware rules.\n\nExample:\nnames.sort((a,b) => a.localeCompare(b));",
        "options": [
          "localeCompare",
          "includes",
          "trim",
          "padStart"
        ]
      },
      {
        "id": "js-string-methods-extra-q-intl-tf",
        "type": "true-false",
        "prompt": "True or false: Intl can help format dates, numbers and currency for users.",
        "correctAnswer": "True",
        "explanation": "Intl provides built-in internationalisation formatting APIs.\n\nExample:\nmessage.includes(\"error\")",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "js-string-methods-extra-q-normalise-scenario",
        "type": "scenario",
        "prompt": "A typed-answer quiz marks “ Response.Ok ” wrong even though the idea is correct. What should the checker do before comparing?",
        "correctAnswer": "normalise the input",
        "explanation": "Trimming whitespace and lowercasing makes answer comparison more forgiving and practical.\n\nExample:\nconst normalised = answer.trim().toLowerCase();",
        "options": [
          "normalise the input",
          "delete the question",
          "sort the string alphabetically",
          "send the answer to CSS"
        ]
      },
      {
        "id": "js-string-methods-extra-q-replace-callback-purpose",
        "type": "multiple-choice",
        "prompt": "Why might you pass a function to replace()?",
        "correctAnswer": "To calculate each replacement based on the matched text.",
        "explanation": "A replace callback receives match information and returns the replacement string.\n\nExample:\nname.replace(/\\b\\w/g, char => char.toUpperCase());",
        "options": [
          "To calculate each replacement based on the matched text.",
          "To make replace run asynchronously.",
          "To convert a string to an array automatically.",
          "To mutate the original string."
        ]
      }
    ]
  },
  {
    "id": "objects-destructuring",
    "title": "Objects, Destructuring & Data Shaping",
    "description": "Learn how to read, copy, update and reshape objects safely.",
    "flashcards": [
      {
        "id": "objects-destructuring-card-01",
        "front": "What is dot property access?",
        "back": "Dot property access reads a known property name from an object. It is the cleanest option when the key is fixed.",
        "example": "user.name"
      },
      {
        "id": "objects-destructuring-card-02",
        "front": "When do you use bracket access?",
        "back": "Bracket access reads a property using a dynamic key stored in a variable or a key that is not a valid identifier.",
        "example": "user[fieldName]"
      },
      {
        "id": "objects-destructuring-card-03",
        "front": "What is object destructuring?",
        "back": "Object destructuring pulls properties out of an object into variables. It makes common data access shorter and clearer.",
        "example": "const { id, name } = user;"
      },
      {
        "id": "objects-destructuring-card-04",
        "front": "How do you rename during destructuring?",
        "back": "Renaming during destructuring lets you store a property in a variable with a different name.",
        "example": "const { id: userId } = user;"
      },
      {
        "id": "objects-destructuring-card-05",
        "front": "What are default values in destructuring?",
        "back": "Default values provide a fallback when the destructured property is undefined.",
        "example": "const { role = \"user\" } = account;"
      },
      {
        "id": "objects-destructuring-card-06",
        "front": "What is nested destructuring?",
        "back": "Nested destructuring pulls values out of objects inside objects. Use it carefully because too much nesting can hurt readability.",
        "example": "const { address: { city } } = user;"
      },
      {
        "id": "objects-destructuring-card-07",
        "front": "What does object spread do?",
        "back": "Object spread copies enumerable properties into a new object. It is commonly used for immutable updates.",
        "example": "const updated = { ...user, name: \"Jay\" };"
      },
      {
        "id": "objects-destructuring-card-08",
        "front": "What does object rest do?",
        "back": "Object rest collects remaining properties into a new object after destructuring selected ones.",
        "example": "const { password, ...safeUser } = user;"
      },
      {
        "id": "objects-destructuring-card-09",
        "front": "What does Object.keys() return?",
        "back": "Object.keys() returns an array of an object’s own enumerable property names.",
        "example": "Object.keys(errors)"
      },
      {
        "id": "objects-destructuring-card-10",
        "front": "What does Object.values() return?",
        "back": "Object.values() returns an array of an object’s own enumerable property values.",
        "example": "Object.values(scores)"
      },
      {
        "id": "objects-destructuring-card-11",
        "front": "What does Object.entries() return?",
        "back": "Object.entries() returns an array of key-value pairs, useful for looping over objects.",
        "example": "Object.entries(formData).map(([key, value]) => ...)"
      },
      {
        "id": "objects-destructuring-card-12",
        "front": "What does Object.fromEntries() do?",
        "back": "Object.fromEntries() builds an object from key-value pairs. It is often used after transforming entries.",
        "example": "Object.fromEntries(entries)"
      },
      {
        "id": "objects-destructuring-card-13",
        "front": "How do you safely read nested data?",
        "back": "Use optional chaining when a nested object may be missing. This prevents runtime errors from accessing properties of undefined.",
        "example": "user.profile?.avatarUrl"
      },
      {
        "id": "objects-destructuring-card-14",
        "front": "What are computed property names?",
        "back": "Computed property names let you use an expression as the object key when creating or updating an object.",
        "example": "const updated = { ...form, [fieldName]: value };"
      },
      {
        "id": "objects-destructuring-card-15",
        "front": "What is a shallow copy?",
        "back": "A shallow copy copies only the top level. Nested objects still share references with the original.",
        "example": "const copy = { ...user };"
      },
      {
        "id": "objects-destructuring-card-16",
        "front": "What is a deep copy?",
        "back": "A deep copy copies nested objects too. Use structuredClone for supported data when you need an actual deep copy.",
        "example": "const copy = structuredClone(settings);"
      },
      {
        "id": "objects-destructuring-card-17",
        "front": "What is mutation?",
        "back": "Mutation means changing an existing object or array directly. It can be okay sometimes, but immutable updates are safer in UI state.",
        "example": "user.name = \"New name\";"
      },
      {
        "id": "objects-destructuring-card-18",
        "front": "What is an immutable update?",
        "back": "An immutable update creates a new value instead of changing the old one. This helps React and similar tools detect changes.",
        "example": "setUser({ ...user, name: \"Jay\" });"
      },
      {
        "id": "objects-destructuring-card-19",
        "front": "What does data shape mean?",
        "back": "Data shape means the structure of an object or response, including property names, nesting and value types.",
        "example": "{ id: string, status: \"online\" }"
      },
      {
        "id": "objects-destructuring-card-20",
        "front": "What is normalised data?",
        "back": "Normalised data avoids duplicate nested copies by storing entities by id. It makes updates easier in complex state.",
        "example": "const usersById = { \"1\": { id: \"1\", name: \"A\" } };"
      },
      {
        "id": "objects-destructuring-card-21",
        "front": "What is a dictionary object?",
        "back": "A dictionary object uses keys to look up values, often by id or name. In TypeScript this is often typed with Record.",
        "example": "const usersById = { [user.id]: user };"
      },
      {
        "id": "objects-destructuring-card-22",
        "front": "How do you check if an object owns a property?",
        "back": "Object.hasOwn() checks whether a property exists directly on the object rather than its prototype.",
        "example": "Object.hasOwn(user, \"email\")"
      },
      {
        "id": "objects-destructuring-card-23",
        "front": "What does delete do?",
        "back": "delete removes a property from an object. For immutable code, prefer creating a new object without that property.",
        "example": "delete draft.tempValue;"
      },
      {
        "id": "objects-destructuring-card-24",
        "front": "How are objects compared?",
        "back": "Objects are compared by reference, not by identical contents. Two separate objects with the same properties are not equal with ===.",
        "example": "{} === {} // false"
      },
      {
        "id": "objects-destructuring-card-25",
        "front": "What is data mapping?",
        "back": "Data mapping converts one data shape into another, such as changing an API response into UI-friendly view models.",
        "example": "apiUsers.map(user => ({ label: user.name, value: user.id }))"
      },
      {
        "id": "objects-destructuring-extra-card-computed-keys",
        "front": "What are computed property names?",
        "back": "Computed property names let you use an expression as an object key. They are useful when the key is dynamic.",
        "example": "const key = \"status\";\nconst update = { [key]: \"online\" };"
      },
      {
        "id": "objects-destructuring-extra-card-property-exists",
        "front": "How do you safely check if an object owns a property?",
        "back": "Object.hasOwn is a clear way to check whether a property exists directly on an object, not through its prototype.",
        "example": "Object.hasOwn(user, \"id\")"
      },
      {
        "id": "objects-destructuring-extra-card-structuredclone",
        "front": "What is structuredClone?",
        "back": "structuredClone creates a deep clone of many built-in data types. It is safer than JSON cloning when data may contain Dates, Maps or undefined values.",
        "example": "const copy = structuredClone(settings);"
      },
      {
        "id": "objects-destructuring-extra-card-map-vs-object",
        "front": "When use Map instead of object?",
        "back": "Use Map when keys are not just strings/symbols, when insertion order matters clearly, or when you frequently add/remove entries.",
        "example": "const cache = new Map();\ncache.set(userId, user);"
      },
      {
        "id": "objects-destructuring-extra-card-object-freeze",
        "front": "What does Object.freeze do?",
        "back": "Object.freeze prevents adding, removing or changing top-level properties. It is shallow, so nested objects can still change unless they are also frozen.",
        "example": "Object.freeze(config);"
      },
      {
        "id": "objects-destructuring-extra-card-normalised-data",
        "front": "What does normalised data mean?",
        "back": "Normalised data avoids deeply repeated nested structures by storing entities by ID. It makes updates easier in large UI state or API responses.",
        "example": "const usersById = { \"u1\": { id: \"u1\", name: \"Sam\" } };"
      },
      {
        "id": "objects-destructuring-extra-card-rest-destructuring",
        "front": "What does rest destructuring do?",
        "back": "Rest destructuring collects the remaining properties into a new object. It is useful when separating known fields from everything else.",
        "example": "const { password, ...safeUser } = user;"
      },
      {
        "id": "objects-destructuring-extra-card-optional-defaults",
        "front": "How do defaults work in destructuring?",
        "back": "Defaults in destructuring apply only when the value is undefined. They do not replace null.",
        "example": "const { pageSize = 20 } = options;"
      }
    ],
    "questions": [
      {
        "id": "objects-destructuring-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes dot property access?",
        "options": [
          "Dot property access reads a known property name from an object.",
          "It makes updates and lookups easier without deeply walking nested arrays.",
          "Default values provide a fallback when the destructured property is undefined.",
          "Object.keys() returns an array of an object’s own enumerable property names."
        ],
        "correctAnswer": "Dot property access reads a known property name from an object.",
        "explanation": "Dot property access reads a known property name from an object. It is the cleanest option when the key is fixed.\n\nExample:\nuser.name"
      },
      {
        "id": "objects-destructuring-q-02",
        "type": "true-false",
        "prompt": "True or false: Bracket access reads a property using a dynamic key stored in a variable or a key that is not a valid identifier.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Bracket access reads a property using a dynamic key stored in a variable or a key that is not a valid identifier.\n\nExample:\nuser[fieldName]"
      },
      {
        "id": "objects-destructuring-q-03",
        "type": "scenario",
        "prompt": "Scenario: A function receives `{ id, name, role }` and you want to pull `name` and `role` into variables in one line. What should you use?",
        "options": [
          "object destructuring",
          "rest destructuring",
          "rename destructuring",
          "object spread"
        ],
        "correctAnswer": "object destructuring",
        "explanation": "Object destructuring pulls properties out of an object into variables. It makes common data access shorter and clearer. Example: const { id, name } = user;\n\nExample:\nconst { id, name } = user;"
      },
      {
        "id": "objects-destructuring-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Renaming during destructuring lets you store a property in a variable with a different name.",
        "correctAnswer": "rename destructuring",
        "acceptedAnswers": [
          "rename destructuring",
          "renaming destructured properties",
          "renaming destructured properties"
        ],
        "explanation": "Renaming during destructuring lets you store a property in a variable with a different name.\n\nExample:\nconst { id: userId } = user;"
      },
      {
        "id": "objects-destructuring-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes default destructuring values?",
        "options": [
          "Default values provide a fallback when the destructured property is undefined.",
          "Data mapping converts one data shape into another, such as changing an API response into UI-friendly view models.",
          "It makes updates and lookups easier without deeply walking nested arrays.",
          "Dot property access reads a known property name from an object."
        ],
        "correctAnswer": "Default values provide a fallback when the destructured property is undefined.",
        "explanation": "Default values provide a fallback when the destructured property is undefined.\n\nExample:\nconst { role = \"user\" } = account;"
      },
      {
        "id": "objects-destructuring-q-06",
        "type": "true-false",
        "prompt": "True or false: Nested destructuring pulls values out of objects inside objects.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Nested destructuring pulls values out of objects inside objects. Use it carefully because too much nesting can hurt readability.\n\nExample:\nconst { address: { city } } = user;"
      },
      {
        "id": "objects-destructuring-q-07",
        "type": "scenario",
        "prompt": "Scenario: You want to create an updated user object while keeping the original object unchanged. What syntax helps?",
        "options": [
          "object spread",
          "normalised data",
          "delete",
          "reference equality"
        ],
        "correctAnswer": "object spread",
        "explanation": "Object spread copies enumerable properties into a new object. It is commonly used for immutable updates. Example: const updated = { ...user, name: \"Jay\" };\n\nExample:\nconst updated = { ...user, name: \"Jay\" };"
      },
      {
        "id": "objects-destructuring-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Object rest collects remaining properties into a new object after destructuring selected ones.",
        "correctAnswer": "object rest",
        "acceptedAnswers": [
          "object rest",
          "object rest",
          "object rest"
        ],
        "explanation": "Object rest collects remaining properties into a new object after destructuring selected ones.\n\nExample:\nconst { password, ...safeUser } = user;"
      },
      {
        "id": "objects-destructuring-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes Object.keys()?",
        "options": [
          "Object.keys() returns an array of an object’s own enumerable property names.",
          "It makes updates and lookups easier without deeply walking nested arrays.",
          "Dot property access reads a known property name from an object.",
          "Default values provide a fallback when the destructured property is undefined."
        ],
        "correctAnswer": "Object.keys() returns an array of an object’s own enumerable property names.",
        "explanation": "Object.keys() returns an array of an object’s own enumerable property names.\n\nExample:\nObject.keys(errors)"
      },
      {
        "id": "objects-destructuring-q-10",
        "type": "true-false",
        "prompt": "True or false: Object.values() returns an array of an object’s own enumerable property values.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Object.values() returns an array of an object’s own enumerable property values.\n\nExample:\nObject.values(scores)"
      },
      {
        "id": "objects-destructuring-q-11",
        "type": "scenario",
        "prompt": "Scenario: You need to loop through both the keys and values of an object, such as `theme: dark`. What should you use?",
        "options": [
          "Object.entries()",
          "computed property name",
          "Map",
          "rest destructuring"
        ],
        "correctAnswer": "Object.entries()",
        "explanation": "Object.entries() returns an array of key-value pairs, useful for looping over objects. Example: Object.entries(formData).map(([key, value]) => ...)\n\nExample:\nObject.entries(formData).map(([key, value]) => ...)"
      },
      {
        "id": "objects-destructuring-q-12",
        "type": "type-answer",
        "prompt": "Type the method that builds an object from key-value pairs, often after transforming Object.entries().",
        "correctAnswer": "Object.fromEntries",
        "acceptedAnswers": [
          "Object.fromEntries",
          "Object.fromEntries()",
          "Object.fromEntries"
        ],
        "explanation": "Object.fromEntries() builds an object from key-value pairs. It is often used after transforming entries.\n\nExample:\nObject.fromEntries(entries)"
      },
      {
        "id": "objects-destructuring-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes safe nested access?",
        "options": [
          "Use optional chaining when a nested object may be missing.",
          "Dot property access reads a known property name from an object.",
          "Default values provide a fallback when the destructured property is undefined.",
          "Object.keys() returns an array of an object’s own enumerable property names."
        ],
        "correctAnswer": "Use optional chaining when a nested object may be missing.",
        "explanation": "Use optional chaining when a nested object may be missing. This prevents runtime errors from accessing properties of undefined.\n\nExample:\nuser.profile?.avatarUrl"
      },
      {
        "id": "objects-destructuring-q-14",
        "type": "true-false",
        "prompt": "True or false: Computed property names let you use an expression as the object key when creating or updating an object.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Computed property names let you use an expression as the object key when creating or updating an object.\n\nExample:\nconst updated = { ...form, [fieldName]: value };"
      },
      {
        "id": "objects-destructuring-q-15",
        "type": "scenario",
        "prompt": "Scenario: You copy an object with nested data, but the nested object is still shared between the original and the copy. What kind of copy is this?",
        "options": [
          "shallow copy",
          "normalised data",
          "delete",
          "reference equality"
        ],
        "correctAnswer": "shallow copy",
        "explanation": "A shallow copy copies only the top level. Nested objects still share references with the original. Example: const copy = { ...user };\n\nExample:\nconst copy = { ...user };"
      },
      {
        "id": "objects-destructuring-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A deep copy copies nested objects too.",
        "correctAnswer": "structuredClone",
        "acceptedAnswers": [
          "structuredClone",
          "deep copy",
          "deep copy"
        ],
        "explanation": "A deep copy copies nested objects too. Use structuredClone for supported data when you need an actual deep copy.\n\nExample:\nconst copy = structuredClone(settings);"
      },
      {
        "id": "objects-destructuring-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes mutation?",
        "options": [
          "Mutation means changing an existing object or array directly.",
          "It makes updates and lookups easier without deeply walking nested arrays.",
          "Dot property access reads a known property name from an object.",
          "Default values provide a fallback when the destructured property is undefined."
        ],
        "correctAnswer": "Mutation means changing an existing object or array directly.",
        "explanation": "Mutation means changing an existing object or array directly. It can be okay sometimes, but immutable updates are safer in UI state.\n\nExample:\nuser.name = \"New name\";"
      },
      {
        "id": "objects-destructuring-q-18",
        "type": "true-false",
        "prompt": "True or false: An immutable update creates a new value instead of changing the old one.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "An immutable update creates a new value instead of changing the old one. This helps React and similar tools detect changes.\n\nExample:\nsetUser({ ...user, name: \"Jay\" });"
      },
      {
        "id": "objects-destructuring-q-19",
        "type": "scenario",
        "prompt": "Scenario: Before building UI, you need to understand what fields an API object contains and how they are nested. What are you checking?",
        "options": [
          "data shape",
          "rest destructuring",
          "object destructuring",
          "rename destructuring"
        ],
        "correctAnswer": "data shape",
        "explanation": "Data shape means the structure of an object or response, including property names, nesting and value types. Example: { id: string, status: \"online\" }\n\nExample:\n{ id: string, status: \"online\" }"
      },
      {
        "id": "objects-destructuring-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Normalised data avoids duplicate nested copies by storing entities by id.",
        "correctAnswer": "normalised data",
        "acceptedAnswers": [
          "normalised data",
          "normalised data",
          "normalised data"
        ],
        "explanation": "Normalised data avoids duplicate nested copies by storing entities by id. It makes updates easier in complex state.\n\nExample:\nconst usersById = { \"1\": { id: \"1\", name: \"A\" } };"
      },
      {
        "id": "objects-destructuring-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes dictionary object?",
        "options": [
          "A dictionary object uses keys to look up values, often by id or name.",
          "Dot property access reads a known property name from an object.",
          "Default values provide a fallback when the destructured property is undefined.",
          "Object.keys() returns an array of an object’s own enumerable property names."
        ],
        "correctAnswer": "A dictionary object uses keys to look up values, often by id or name.",
        "explanation": "A dictionary object uses keys to look up values, often by id or name. In TypeScript this is often typed with Record.\n\nExample:\nconst usersById = { [user.id]: user };"
      },
      {
        "id": "objects-destructuring-q-22",
        "type": "true-false",
        "prompt": "True or false: Object.hasOwn() checks whether a property exists directly on the object rather than its prototype.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Object.hasOwn() checks whether a property exists directly on the object rather than its prototype.\n\nExample:\nObject.hasOwn(user, \"email\")"
      },
      {
        "id": "objects-destructuring-q-23",
        "type": "scenario",
        "prompt": "Scenario: You need to remove the `temporaryToken` property from an object. Which operator can do that?",
        "options": [
          "delete",
          "rest destructuring",
          "object destructuring",
          "rename destructuring"
        ],
        "correctAnswer": "delete",
        "explanation": "delete removes a property from an object. For immutable code, prefer creating a new object without that property. Example: delete draft.tempValue;\n\nExample:\ndelete draft.tempValue;"
      },
      {
        "id": "objects-destructuring-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Objects are compared by reference, not by identical contents.",
        "correctAnswer": "reference equality",
        "acceptedAnswers": [
          "reference equality",
          "object reference equality",
          "object reference equality"
        ],
        "explanation": "Objects are compared by reference, not by identical contents. Two separate objects with the same properties are not equal with ===.\n\nExample:\n{} === {} // false"
      },
      {
        "id": "objects-destructuring-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes mapping API data?",
        "options": [
          "Data mapping converts one data shape into another, such as changing an API response into UI-friendly view models.",
          "Default values provide a fallback when the destructured property is undefined.",
          "Object.keys() returns an array of an object’s own enumerable property names.",
          "Use optional chaining when a nested object may be missing."
        ],
        "correctAnswer": "Data mapping converts one data shape into another, such as changing an API response into UI-friendly view models.",
        "explanation": "Data mapping converts one data shape into another, such as changing an API response into UI-friendly view models.\n\nExample:\napiUsers.map(user => ({ label: user.name, value: user.id }))"
      },
      {
        "id": "objects-destructuring-extra-q-computed-type",
        "type": "type-answer",
        "prompt": "Type the syntax feature used here: const obj = { [key]: value };",
        "correctAnswer": "computed property name",
        "explanation": "Computed property names use square brackets to calculate an object key.\n\nExample:\nconst updated = { ...form, [fieldName]: value };",
        "acceptedAnswers": [
          "computed property name",
          "computed property names",
          "computed key",
          "computed keys"
        ]
      },
      {
        "id": "objects-destructuring-extra-q-map-scenario",
        "type": "scenario",
        "prompt": "You need a lookup where keys may be objects and entries are frequently added and removed. Which structure is often better than a plain object?",
        "correctAnswer": "Map",
        "explanation": "Map supports non-string keys and has useful methods like set, get, has and delete.\n\nExample:\nconst cache = new Map();\ncache.set(userId, user);",
        "options": [
          "Map",
          "Array.prototype.map",
          "JSON",
          "Promise"
        ]
      },
      {
        "id": "objects-destructuring-extra-q-structuredclone-tf",
        "type": "true-false",
        "prompt": "True or false: structuredClone can deep clone many values more safely than JSON.parse(JSON.stringify(value)).",
        "correctAnswer": "True",
        "explanation": "structuredClone handles more built-in types and avoids some JSON cloning pitfalls.\n\nExample:\nconst copy = structuredClone(settings);",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "objects-destructuring-extra-q-rest-safe-user",
        "type": "scenario",
        "prompt": "You want to remove password from a user object before sending it to the UI. Which pattern is a good fit?",
        "correctAnswer": "rest destructuring",
        "explanation": "const { password, ...safeUser } = user collects the remaining safe fields.\n\nExample:\nconst { password, ...safeUser } = user;",
        "options": [
          "rest destructuring",
          "Array.sort",
          "Promise.race",
          "CSS cascade"
        ]
      },
      {
        "id": "objects-destructuring-extra-q-hasown-mcq",
        "type": "multiple-choice",
        "prompt": "Which method checks whether an object directly owns a property?",
        "correctAnswer": "Object.hasOwn",
        "explanation": "Object.hasOwn(obj, key) checks direct ownership rather than inherited prototype properties.\n\nExample:\nObject.hasOwn(user, \"email\")",
        "options": [
          "Object.hasOwn",
          "Object.values",
          "Object.entries",
          "Object.assign"
        ]
      },
      {
        "id": "objects-destructuring-extra-q-normalised-data-purpose",
        "type": "multiple-choice",
        "prompt": "Why normalise complex entity data by ID?",
        "correctAnswer": "It makes updates and lookups easier without deeply walking nested arrays.",
        "explanation": "Normalised data stores entities once and references them by ID, which helps larger apps manage state.\n\nExample:\nconst usersById = { \"u1\": { id: \"u1\", name: \"Sam\" } };",
        "options": [
          "It makes updates and lookups easier without deeply walking nested arrays.",
          "It automatically encrypts user data.",
          "It makes all data immutable forever.",
          "It removes the need for API calls."
        ]
      }
    ]
  },
  {
    "id": "async-fetch",
    "title": "Async JavaScript & Fetch",
    "description": "Understand promises, async/await, fetch, loading states and common async mistakes.",
    "flashcards": [
      {
        "id": "async-fetch-card-01",
        "front": "What is a Promise?",
        "back": "A Promise represents a value that may be available now, later, or never because it failed. It is the core object behind async JavaScript.",
        "example": "const promise = fetch(\"/api/users\");"
      },
      {
        "id": "async-fetch-card-02",
        "front": "What does async do?",
        "back": "async makes a function return a Promise and allows await inside it. It is used to write asynchronous code that reads more like synchronous code.",
        "example": "async function loadUsers() { return await fetchUsers(); }"
      },
      {
        "id": "async-fetch-card-03",
        "front": "What does await do?",
        "back": "await pauses inside an async function until a Promise settles. It gives you the resolved value or throws if the Promise rejects.",
        "example": "const data = await response.json();"
      },
      {
        "id": "async-fetch-card-04",
        "front": "What does then() do?",
        "back": "then() runs a callback when a Promise resolves. async/await is often easier to read, but then() is still common.",
        "example": "fetch(url).then(response => response.json())"
      },
      {
        "id": "async-fetch-card-05",
        "front": "What does catch() do?",
        "back": "catch() handles a rejected Promise. With async/await, you often use try/catch instead.",
        "example": "fetch(url).catch(error => console.error(error))"
      },
      {
        "id": "async-fetch-card-06",
        "front": "What does finally() do?",
        "back": "finally() runs after a Promise settles whether it succeeded or failed. It is useful for cleanup like stopping a loading spinner.",
        "example": "try {} finally { setLoading(false); }"
      },
      {
        "id": "async-fetch-card-07",
        "front": "What does fetch() do?",
        "back": "fetch() sends an HTTP request and returns a Promise for a Response object. It does not automatically throw for HTTP error status codes.",
        "example": "const response = await fetch(\"/api/devices\");"
      },
      {
        "id": "async-fetch-card-08",
        "front": "What does response.json() do?",
        "back": "response.json() reads and parses the response body as JSON. It returns a Promise, so you usually await it.",
        "example": "const data = await response.json();"
      },
      {
        "id": "async-fetch-card-09",
        "front": "What does response.ok mean?",
        "back": "response.ok is true when the HTTP status is between 200 and 299. Check it before trusting the response body.",
        "example": "if (!response.ok) throw new Error(\"Request failed\");"
      },
      {
        "id": "async-fetch-card-10",
        "front": "What is a network error?",
        "back": "A network error means the request could not complete at the transport level, such as no internet or DNS failure. It is different from a 404 response.",
        "example": "try { await fetch(url); } catch (error) {}"
      },
      {
        "id": "async-fetch-card-11",
        "front": "What is an HTTP error?",
        "back": "An HTTP error is a response like 400 or 500. fetch still resolves the Promise, so you must check the status yourself.",
        "example": "if (response.status === 404) showNotFound();"
      },
      {
        "id": "async-fetch-card-12",
        "front": "What is loading state?",
        "back": "Loading state tracks whether async work is in progress so the UI can show feedback and avoid duplicate actions.",
        "example": "setLoading(true);\ntry { await save(); } finally { setLoading(false); }"
      },
      {
        "id": "async-fetch-card-13",
        "front": "What is an empty state?",
        "back": "An empty state is what the UI shows when a request succeeds but returns no useful items. It should guide the user on what to do next.",
        "example": "if (devices.length === 0) return <EmptyState />;"
      },
      {
        "id": "async-fetch-card-14",
        "front": "What is an error state?",
        "back": "An error state is the UI shown when something fails. Good error states explain the problem and give a recovery action.",
        "example": "setError(\"Could not load devices\");"
      },
      {
        "id": "async-fetch-card-15",
        "front": "What does Promise.all() do?",
        "back": "Promise.all() runs Promises in parallel and resolves when all succeed. It rejects if any one Promise rejects.",
        "example": "const [users, teams] = await Promise.all([getUsers(), getTeams()]);"
      },
      {
        "id": "async-fetch-card-16",
        "front": "What does Promise.allSettled() do?",
        "back": "Promise.allSettled() waits for all Promises and gives you each result, whether fulfilled or rejected.",
        "example": "const results = await Promise.allSettled(requests);"
      },
      {
        "id": "async-fetch-card-17",
        "front": "What is sequential awaiting?",
        "back": "Sequential awaiting runs async work one step at a time. Use it when each step depends on the previous one.",
        "example": "const user = await getUser();\nconst orders = await getOrders(user.id);"
      },
      {
        "id": "async-fetch-card-18",
        "front": "What are parallel requests?",
        "back": "Parallel requests start independent async work at the same time. They can make pages faster when calls do not depend on each other.",
        "example": "await Promise.all([loadA(), loadB()]);"
      },
      {
        "id": "async-fetch-card-19",
        "front": "What does AbortController do?",
        "back": "AbortController can cancel a fetch request. It is useful when a component unmounts or a newer request replaces an older one.",
        "example": "const controller = new AbortController();\nfetch(url, { signal: controller.signal });"
      },
      {
        "id": "async-fetch-card-20",
        "front": "What is a race condition?",
        "back": "A race condition happens when the final result depends on unpredictable timing. In UIs, an older request can overwrite a newer result.",
        "example": "Search request A returns after request B and overwrites B."
      },
      {
        "id": "async-fetch-card-21",
        "front": "What is debounce?",
        "back": "Debounce waits until input has stopped changing for a short time before running work. It is useful for search boxes.",
        "example": "debounce(search, 300)"
      },
      {
        "id": "async-fetch-card-22",
        "front": "What is throttle?",
        "back": "Throttle limits how often a function can run over time. It is useful for scroll or resize events.",
        "example": "throttle(handleScroll, 200)"
      },
      {
        "id": "async-fetch-card-23",
        "front": "How should async errors be handled?",
        "back": "Async errors should be caught and turned into useful UI or logs. Do not silently ignore them.",
        "example": "try { await save(); } catch (error) { setError(\"Save failed\"); }"
      },
      {
        "id": "async-fetch-card-24",
        "front": "What is the microtask queue?",
        "back": "Promise callbacks run in the microtask queue after the current synchronous code finishes. This explains some async ordering surprises.",
        "example": "Promise.resolve().then(() => console.log(\"promise\"));"
      },
      {
        "id": "async-fetch-card-25",
        "front": "What is top-level await?",
        "back": "Top-level await lets modules await Promises outside an async function in supported environments. Use it carefully because it can delay module loading.",
        "example": "const config = await loadConfig();"
      },
      {
        "id": "async-fetch-extra-card-microtasks",
        "front": "What is the microtask queue?",
        "back": "Promise callbacks and await continuations run as microtasks. They usually run after the current synchronous code finishes but before many timer callbacks.",
        "example": "Promise.resolve().then(() => console.log(\"microtask\"));"
      },
      {
        "id": "async-fetch-extra-card-abortcontroller",
        "front": "What is AbortController?",
        "back": "AbortController lets you cancel fetch requests. It is useful when a component unmounts or a newer request replaces an older one.",
        "example": "const controller = new AbortController();\nfetch(url, { signal: controller.signal });\ncontroller.abort();"
      },
      {
        "id": "async-fetch-extra-card-allsettled",
        "front": "When use Promise.allSettled?",
        "back": "Promise.allSettled waits for all promises to finish whether they succeeded or failed. It is useful when partial success is acceptable.",
        "example": "const results = await Promise.allSettled(requests);"
      },
      {
        "id": "async-fetch-extra-card-promise-any",
        "front": "What does Promise.any do?",
        "back": "Promise.any resolves with the first fulfilled promise and ignores earlier rejections. It rejects only if all promises reject.",
        "example": "const fastestSuccess = await Promise.any(mirrors);"
      },
      {
        "id": "async-fetch-extra-card-stale-response",
        "front": "What is a stale response problem?",
        "back": "A stale response happens when an older request finishes after a newer one and overwrites the newer data. Track request IDs or cancel old requests to avoid it.",
        "example": "if (requestId !== latestRequestId) return;"
      },
      {
        "id": "async-fetch-extra-card-retry-backoff",
        "front": "What is exponential backoff?",
        "back": "Exponential backoff retries failed requests with increasing delays. It helps avoid overwhelming a struggling server.",
        "example": "retry after 1s, then 2s, then 4s"
      },
      {
        "id": "async-fetch-extra-card-debounce",
        "front": "What is debouncing?",
        "back": "Debouncing waits until the user stops doing something for a short time before running code. It is useful for search inputs and resize handlers.",
        "example": "debounce(search, 300)"
      },
      {
        "id": "async-fetch-extra-card-finally",
        "front": "What is finally used for?",
        "back": "finally runs after a promise succeeds or fails. It is useful for cleanup such as turning off a loading state.",
        "example": "try { await save(); } finally { setLoading(false); }"
      }
    ],
    "questions": [
      {
        "id": "async-fetch-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes Promise?",
        "options": [
          "A Promise represents a value that may be available now, later, or never because it failed.",
          "Top-level await lets modules await Promises outside an async function in supported environments.",
          "An empty state is what the UI shows when a request succeeds but returns no useful items.",
          "Sequential awaiting runs async work one step at a time."
        ],
        "correctAnswer": "A Promise represents a value that may be available now, later, or never because it failed.",
        "explanation": "A Promise represents a value that may be available now, later, or never because it failed. It is the core object behind async JavaScript.\n\nExample:\nconst promise = fetch(\"/api/users\");"
      },
      {
        "id": "async-fetch-q-02",
        "type": "true-false",
        "prompt": "True or false: async makes a function return a Promise and allows await inside it.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "async makes a function return a Promise and allows await inside it. It is used to write asynchronous code that reads more like synchronous code.\n\nExample:\nasync function loadUsers() { return await fetchUsers(); }"
      },
      {
        "id": "async-fetch-q-03",
        "type": "scenario",
        "prompt": "Scenario: You need to pause inside an async function until a promise resolves before using its result. What keyword should you use?",
        "options": [
          "await",
          "finally",
          "exponential backoff",
          "stale response"
        ],
        "correctAnswer": "await",
        "explanation": "await pauses inside an async function until a Promise settles. It gives you the resolved value or throws if the Promise rejects. Example: const data = await response.json();\n\nExample:\nconst data = await response.json();"
      },
      {
        "id": "async-fetch-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: then() runs a callback when a Promise resolves.",
        "correctAnswer": "then",
        "acceptedAnswers": [
          "then",
          "then()",
          "then"
        ],
        "explanation": "then() runs a callback when a Promise resolves. async/await is often easier to read, but then() is still common.\n\nExample:\nfetch(url).then(response => response.json())"
      },
      {
        "id": "async-fetch-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes catch()?",
        "options": [
          "catch() handles a rejected Promise.",
          "An empty state is what the UI shows when a request succeeds but returns no useful items.",
          "Sequential awaiting runs async work one step at a time.",
          "Debounce waits until input has stopped changing for a short time before running work."
        ],
        "correctAnswer": "catch() handles a rejected Promise.",
        "explanation": "catch() handles a rejected Promise. With async/await, you often use try/catch instead.\n\nExample:\nfetch(url).catch(error => console.error(error))"
      },
      {
        "id": "async-fetch-q-06",
        "type": "true-false",
        "prompt": "True or false: finally() runs after a Promise settles whether it succeeded or failed.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "finally() runs after a Promise settles whether it succeeded or failed. It is useful for cleanup like stopping a loading spinner.\n\nExample:\ntry {} finally { setLoading(false); }"
      },
      {
        "id": "async-fetch-q-07",
        "type": "scenario",
        "prompt": "Scenario: Your frontend needs to request JSON data from `/api/users`. Which browser API is commonly used?",
        "options": [
          "fetch()",
          "stale response",
          "await",
          "then"
        ],
        "correctAnswer": "fetch()",
        "explanation": "fetch() sends an HTTP request and returns a Promise for a Response object. It does not automatically throw for HTTP error status codes. Example: const response = await fetch(\"/api/devices\");\n\nExample:\nconst response = await fetch(\"/api/devices\");"
      },
      {
        "id": "async-fetch-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: response.",
        "correctAnswer": "response.json",
        "acceptedAnswers": [
          "response.json",
          "response.json()",
          "response.json"
        ],
        "explanation": "response.json() reads and parses the response body as JSON. It returns a Promise, so you usually await it.\n\nExample:\nconst data = await response.json();"
      },
      {
        "id": "async-fetch-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes response.ok?",
        "options": [
          "response.",
          "Debounce waits until input has stopped changing for a short time before running work.",
          "Top-level await lets modules await Promises outside an async function in supported environments.",
          "A Promise represents a value that may be available now, later, or never because it failed."
        ],
        "correctAnswer": "response.",
        "explanation": "response.ok is true when the HTTP status is between 200 and 299. Check it before trusting the response body.\n\nExample:\nif (!response.ok) throw new Error(\"Request failed\");"
      },
      {
        "id": "async-fetch-q-10",
        "type": "true-false",
        "prompt": "True or false: A network error means the request could not complete at the transport level, such as no internet or DNS failure.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A network error means the request could not complete at the transport level, such as no internet or DNS failure. It is different from a 404 response.\n\nExample:\ntry { await fetch(url); } catch (error) {}"
      },
      {
        "id": "async-fetch-q-11",
        "type": "scenario",
        "prompt": "Scenario: A request returns status `500`, and the app should show a server-error message instead of treating it as success. What are you handling?",
        "options": [
          "HTTP error",
          "stale response",
          "await",
          "then"
        ],
        "correctAnswer": "HTTP error",
        "explanation": "An HTTP error is a response like 400 or 500. fetch still resolves the Promise, so you must check the status yourself. Example: if (response.status === 404) showNotFound();\n\nExample:\nif (response.status === 404) showNotFound();"
      },
      {
        "id": "async-fetch-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Loading state tracks whether async work is in progress so the UI can show feedback and avoid duplicate actions.",
        "correctAnswer": "loading",
        "acceptedAnswers": [
          "loading",
          "loading state",
          "loading state"
        ],
        "explanation": "Loading state tracks whether async work is in progress so the UI can show feedback and avoid duplicate actions.\n\nExample:\nsetLoading(true);\ntry { await save(); } finally { setLoading(false); }"
      },
      {
        "id": "async-fetch-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes empty state?",
        "options": [
          "An empty state is what the UI shows when a request succeeds but returns no useful items.",
          "Debounce waits until input has stopped changing for a short time before running work.",
          "Top-level await lets modules await Promises outside an async function in supported environments.",
          "A Promise represents a value that may be available now, later, or never because it failed."
        ],
        "correctAnswer": "An empty state is what the UI shows when a request succeeds but returns no useful items.",
        "explanation": "An empty state is what the UI shows when a request succeeds but returns no useful items. It should guide the user on what to do next.\n\nExample:\nif (devices.length === 0) return <EmptyState />;"
      },
      {
        "id": "async-fetch-q-14",
        "type": "true-false",
        "prompt": "True or false: An error state is the UI shown when something fails.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "An error state is the UI shown when something fails. Good error states explain the problem and give a recovery action.\n\nExample:\nsetError(\"Could not load devices\");"
      },
      {
        "id": "async-fetch-q-15",
        "type": "scenario",
        "prompt": "Scenario: You need to load users, posts, and comments at the same time, then continue when all three requests finish. What should you use?",
        "options": [
          "Promise.all()",
          "loading",
          "AbortController",
          "race condition"
        ],
        "correctAnswer": "Promise.all()",
        "explanation": "Promise.all() runs Promises in parallel and resolves when all succeed. It rejects if any one Promise rejects. Example: const [users, teams] = await Promise.all([getUsers(), getTeams()]);\n\nExample:\nconst [users, teams] = await Promise.all([getUsers(), getTeams()]);"
      },
      {
        "id": "async-fetch-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Promise.",
        "correctAnswer": "Promise.allSettled",
        "acceptedAnswers": [
          "Promise.allSettled",
          "Promise.allSettled()",
          "Promise.allSettled"
        ],
        "explanation": "Promise.allSettled() waits for all Promises and gives you each result, whether fulfilled or rejected.\n\nExample:\nconst results = await Promise.allSettled(requests);"
      },
      {
        "id": "async-fetch-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes sequential await?",
        "options": [
          "Sequential awaiting runs async work one step at a time.",
          "Debounce waits until input has stopped changing for a short time before running work.",
          "Top-level await lets modules await Promises outside an async function in supported environments.",
          "A Promise represents a value that may be available now, later, or never because it failed."
        ],
        "correctAnswer": "Sequential awaiting runs async work one step at a time.",
        "explanation": "Sequential awaiting runs async work one step at a time. Use it when each step depends on the previous one.\n\nExample:\nconst user = await getUser();\nconst orders = await getOrders(user.id);"
      },
      {
        "id": "async-fetch-q-18",
        "type": "true-false",
        "prompt": "True or false: Parallel requests start independent async work at the same time.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Parallel requests start independent async work at the same time. They can make pages faster when calls do not depend on each other.\n\nExample:\nawait Promise.all([loadA(), loadB()]);"
      },
      {
        "id": "async-fetch-q-19",
        "type": "scenario",
        "prompt": "Scenario: A user leaves a page while a request is still running, and you want to cancel that request. What should you use?",
        "options": [
          "AbortController",
          "HTTP error",
          "loading",
          "race condition"
        ],
        "correctAnswer": "AbortController",
        "explanation": "AbortController can cancel a fetch request. It is useful when a component unmounts or a newer request replaces an older one. Example: const controller = new AbortController();\nfetch(url, { signal: controller.signal });\n\nExample:\nconst controller = new AbortController();\nfetch(url, { signal: controller.signal });"
      },
      {
        "id": "async-fetch-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A race condition happens when the final result depends on unpredictable timing.",
        "correctAnswer": "race condition",
        "acceptedAnswers": [
          "race condition",
          "race condition",
          "race condition"
        ],
        "explanation": "A race condition happens when the final result depends on unpredictable timing. In UIs, an older request can overwrite a newer result.\n\nExample:\nSearch request A returns after request B and overwrites B."
      },
      {
        "id": "async-fetch-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes debounce?",
        "options": [
          "Debounce waits until input has stopped changing for a short time before running work.",
          "An empty state is what the UI shows when a request succeeds but returns no useful items.",
          "Sequential awaiting runs async work one step at a time.",
          "Top-level await lets modules await Promises outside an async function in supported environments."
        ],
        "correctAnswer": "Debounce waits until input has stopped changing for a short time before running work.",
        "explanation": "Debounce waits until input has stopped changing for a short time before running work. It is useful for search boxes.\n\nExample:\ndebounce(search, 300)"
      },
      {
        "id": "async-fetch-q-22",
        "type": "true-false",
        "prompt": "True or false: Throttle limits how often a function can run over time.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Throttle limits how often a function can run over time. It is useful for scroll or resize events.\n\nExample:\nthrottle(handleScroll, 200)"
      },
      {
        "id": "async-fetch-q-23",
        "type": "scenario",
        "prompt": "Scenario: An awaited request may fail, so you need a reliable way to catch and handle that failure. What concept is this?",
        "options": [
          "async error handling",
          "stale response",
          "await",
          "then"
        ],
        "correctAnswer": "async error handling",
        "explanation": "Async errors should be caught and turned into useful UI or logs. Do not silently ignore them. Example: try { await save(); } catch (error) { setError(\"Save failed\"); }\n\nExample:\ntry { await save(); } catch (error) { setError(\"Save failed\"); }"
      },
      {
        "id": "async-fetch-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Promise callbacks run in the microtask queue after the current synchronous code finishes.",
        "correctAnswer": "microtask",
        "acceptedAnswers": [
          "microtask",
          "microtask queue",
          "microtask queue"
        ],
        "explanation": "Promise callbacks run in the microtask queue after the current synchronous code finishes. This explains some async ordering surprises.\n\nExample:\nPromise.resolve().then(() => console.log(\"promise\"));"
      },
      {
        "id": "async-fetch-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes top-level await?",
        "options": [
          "Top-level await lets modules await Promises outside an async function in supported environments.",
          "An empty state is what the UI shows when a request succeeds but returns no useful items.",
          "Sequential awaiting runs async work one step at a time.",
          "Debounce waits until input has stopped changing for a short time before running work."
        ],
        "correctAnswer": "Top-level await lets modules await Promises outside an async function in supported environments.",
        "explanation": "Top-level await lets modules await Promises outside an async function in supported environments. Use it carefully because it can delay module loading.\n\nExample:\nconst config = await loadConfig();"
      },
      {
        "id": "async-fetch-extra-q-abort-scenario",
        "type": "scenario",
        "prompt": "A user types quickly in a search box and old fetches keep returning after newer ones. What API can help cancel old fetch requests?",
        "correctAnswer": "AbortController",
        "explanation": "AbortController can cancel fetch requests using a signal.\n\nExample:\nconst controller = new AbortController();\nfetch(url, { signal: controller.signal });",
        "options": [
          "AbortController",
          "Object.freeze",
          "Array.reduce",
          "Intl.NumberFormat"
        ]
      },
      {
        "id": "async-fetch-extra-q-allsettled-mcq",
        "type": "multiple-choice",
        "prompt": "Which Promise method is best when you want all results, including failures?",
        "correctAnswer": "Promise.allSettled",
        "explanation": "Promise.allSettled returns the status and value/reason for each promise.\n\nExample:\nconst results = await Promise.allSettled(requests);",
        "options": [
          "Promise.allSettled",
          "Promise.all",
          "Promise.race",
          "JSON.stringify"
        ]
      },
      {
        "id": "async-fetch-extra-q-finally-type",
        "type": "type-answer",
        "prompt": "Type the Promise method or try/catch block section that runs whether an operation succeeds or fails.",
        "correctAnswer": "finally",
        "explanation": "finally is used for cleanup after success or failure.\n\nExample:\ntry { await save(); } finally { setLoading(false); }",
        "acceptedAnswers": [
          "finally",
          ".finally"
        ]
      },
      {
        "id": "async-fetch-extra-q-microtask-tf",
        "type": "true-false",
        "prompt": "True or false: Promise .then callbacks run synchronously before the current function finishes.",
        "correctAnswer": "False",
        "explanation": "Promise callbacks are queued as microtasks and run after the current synchronous work completes.\n\nExample:\ntry {} finally { setLoading(false); }",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "async-fetch-extra-q-backoff-scenario",
        "type": "scenario",
        "prompt": "An API returns temporary 503 errors. What retry strategy helps avoid hammering the server?",
        "correctAnswer": "exponential backoff",
        "explanation": "Exponential backoff waits longer between retries, giving the server time to recover.\n\nExample:\nretry after 1s, then 2s, then 4s",
        "options": [
          "exponential backoff",
          "infinite immediate retries",
          "sorting the response",
          "removing all headers"
        ]
      },
      {
        "id": "async-fetch-extra-q-stale-response",
        "type": "scenario",
        "prompt": "An older request finishes last and overwrites newer search results. What is this issue commonly called?",
        "correctAnswer": "stale response",
        "explanation": "A stale response is outdated by the time it arrives and should not update the UI.\n\nExample:\nif (requestId !== latestRequestId) return;",
        "options": [
          "stale response",
          "type narrowing",
          "object destructuring",
          "semantic versioning"
        ]
      }
    ]
  },
  {
    "id": "api-http-basics",
    "title": "APIs & HTTP Basics",
    "description": "Learn how clients and servers communicate through HTTP requests and responses",
    "flashcards": [
      {
        "id": "api-http-basics-card-01",
        "front": "What should you know about GET?",
        "back": "GET requests read data without changing server state.",
        "example": "GET /api/devices"
      },
      {
        "id": "api-http-basics-card-02",
        "front": "What should you know about POST?",
        "back": "POST requests usually create a resource or submit data for processing.",
        "example": "POST /api/devices"
      },
      {
        "id": "api-http-basics-card-03",
        "front": "What should you know about PUT?",
        "back": "PUT usually replaces a whole resource with the supplied representation.",
        "example": "PUT /api/devices/123"
      },
      {
        "id": "api-http-basics-card-04",
        "front": "What should you know about PATCH?",
        "back": "PATCH updates part of an existing resource.",
        "example": "PATCH /api/devices/123"
      },
      {
        "id": "api-http-basics-card-05",
        "front": "What should you know about DELETE?",
        "back": "DELETE requests remove a resource when the caller is authorised.",
        "example": "DELETE /api/devices/123"
      },
      {
        "id": "api-http-basics-card-06",
        "front": "What should you know about URL?",
        "back": "A URL identifies where a resource can be found and may include path and query parts.",
        "example": "/api/devices?page=1"
      },
      {
        "id": "api-http-basics-card-07",
        "front": "What should you know about path parameter?",
        "back": "A path parameter is part of the route and usually identifies a specific resource.",
        "example": "/api/users/42"
      },
      {
        "id": "api-http-basics-card-08",
        "front": "What should you know about query parameter?",
        "back": "A query parameter modifies the request, often for filtering, sorting or pagination.",
        "example": "/api/users?role=admin"
      },
      {
        "id": "api-http-basics-card-09",
        "front": "What should you know about headers?",
        "back": "Headers carry metadata such as content type, auth tokens and caching instructions.",
        "example": "Content-Type: application/json"
      },
      {
        "id": "api-http-basics-card-10",
        "front": "What should you know about request body?",
        "back": "A request body contains data sent to the server, often JSON for POST, PUT or PATCH.",
        "example": "body: JSON.stringify(payload)"
      },
      {
        "id": "api-http-basics-card-11",
        "front": "What should you know about response body?",
        "back": "A response body contains data returned by the server, often JSON.",
        "example": "{ \"id\": \"123\", \"status\": \"online\" }"
      },
      {
        "id": "api-http-basics-card-12",
        "front": "What should you know about status code?",
        "back": "A status code tells the client the high-level result of the request.",
        "example": "200, 404, 500"
      },
      {
        "id": "api-http-basics-card-13",
        "front": "What should you know about 200 OK?",
        "back": "200 OK means the request succeeded and usually has a response body.",
        "example": "HTTP 200"
      },
      {
        "id": "api-http-basics-card-14",
        "front": "What should you know about 201 Created?",
        "back": "201 Created means a resource was successfully created.",
        "example": "POST returns 201"
      },
      {
        "id": "api-http-basics-card-15",
        "front": "What should you know about 204 No Content?",
        "back": "204 No Content means success with no response body to parse.",
        "example": "DELETE returns 204"
      },
      {
        "id": "api-http-basics-card-16",
        "front": "What should you know about 400 Bad Request?",
        "back": "400 Bad Request means the request is malformed or missing required data.",
        "example": "missing required field"
      },
      {
        "id": "api-http-basics-card-17",
        "front": "What should you know about 401 Unauthorized?",
        "back": "401 Unauthorized means authentication is missing or invalid.",
        "example": "expired token"
      },
      {
        "id": "api-http-basics-card-18",
        "front": "What should you know about 403 Forbidden?",
        "back": "403 Forbidden means the user is authenticated but not allowed to do that action.",
        "example": "no permission"
      },
      {
        "id": "api-http-basics-card-19",
        "front": "What should you know about 404 Not Found?",
        "back": "404 Not Found means the requested resource or route could not be found.",
        "example": "unknown id"
      },
      {
        "id": "api-http-basics-card-20",
        "front": "What should you know about 409 Conflict?",
        "back": "409 Conflict means the request conflicts with current server state.",
        "example": "duplicate email"
      },
      {
        "id": "api-http-basics-card-21",
        "front": "What should you know about 422 Validation Error?",
        "back": "422 Validation Error often means the request shape was valid but business validation failed.",
        "example": "invalid field value"
      },
      {
        "id": "api-http-basics-card-22",
        "front": "What should you know about 500 Internal Server Error?",
        "back": "500 Internal Server Error means the server failed unexpectedly.",
        "example": "uncaught exception"
      },
      {
        "id": "api-http-basics-card-23",
        "front": "What should you know about pagination?",
        "back": "Pagination breaks large result sets into pages or cursors.",
        "example": "?page=2&limit=20"
      },
      {
        "id": "api-http-basics-card-24",
        "front": "What should you know about filtering?",
        "back": "Filtering returns only resources that match criteria.",
        "example": "?status=online"
      },
      {
        "id": "api-http-basics-card-25",
        "front": "What should you know about sorting?",
        "back": "Sorting controls the order results are returned in.",
        "example": "?sort=createdAt_desc"
      },
      {
        "id": "api-http-basics-extra-card-idempotency",
        "front": "What does idempotent mean in HTTP?",
        "back": "An idempotent operation can be repeated without changing the final result beyond the first successful call. GET, PUT and DELETE are usually designed to be idempotent.",
        "example": "DELETE /devices/123 can be retried safely if deleting an already-deleted device still leaves it deleted."
      },
      {
        "id": "api-http-basics-extra-card-openapi",
        "front": "What is OpenAPI/Swagger?",
        "back": "OpenAPI is a standard way to describe REST APIs, including routes, parameters, request bodies and responses. Swagger tools can turn that contract into docs or generated clients.",
        "example": "GET /devices/{id} -> DeviceResponse"
      },
      {
        "id": "api-http-basics-extra-card-cursor-pagination",
        "front": "Cursor vs offset pagination?",
        "back": "Offset pagination uses page numbers or skip counts. Cursor pagination uses a marker from the previous result and is often better for large or changing datasets.",
        "example": "GET /logs?cursor=eyJpZCI6..."
      },
      {
        "id": "api-http-basics-extra-card-etag",
        "front": "What is an ETag?",
        "back": "An ETag is a version identifier for a resource. Clients can use it for caching or to avoid overwriting someone else’s update.",
        "example": "If-Match: \"abc123\""
      },
      {
        "id": "api-http-basics-extra-card-content-negotiation",
        "front": "What is content negotiation?",
        "back": "Content negotiation is when client and server agree on the representation using headers like Accept and Content-Type.",
        "example": "Accept: application/json"
      },
      {
        "id": "api-http-basics-extra-card-webhook",
        "front": "What is a webhook?",
        "back": "A webhook is an HTTP callback where one system sends another system an event when something happens. It avoids constant polling.",
        "example": "POST /webhooks/payment-succeeded"
      },
      {
        "id": "api-http-basics-extra-card-api-versioning",
        "front": "Why version APIs?",
        "back": "Versioning lets an API evolve without breaking existing clients immediately. Common approaches include URL versions, headers or carefully backwards-compatible changes.",
        "example": "/api/v1/devices"
      },
      {
        "id": "api-http-basics-extra-card-resource-naming",
        "front": "What makes a REST route readable?",
        "back": "Readable REST routes use nouns for resources and HTTP methods for actions. This keeps API intent consistent.",
        "example": "GET /devices/123 rather than GET /getDevice?id=123"
      }
    ],
    "questions": [
      {
        "id": "api-http-basics-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes GET?",
        "options": [
          "GET requests read data without changing server state.",
          "DELETE requests remove a resource when the caller is authorised.",
          "Headers carry metadata such as content type, auth tokens and caching instructions.",
          "200 OK means the request succeeded and usually has a response body."
        ],
        "correctAnswer": "GET requests read data without changing server state.",
        "explanation": "GET requests read data without changing server state.\n\nExample:\nGET /api/devices"
      },
      {
        "id": "api-http-basics-q-02",
        "type": "true-false",
        "prompt": "True or false: POST requests usually create a resource or submit data for processing.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "POST requests usually create a resource or submit data for processing.\n\nExample:\nPOST /api/devices"
      },
      {
        "id": "api-http-basics-q-03",
        "type": "scenario",
        "prompt": "Scenario: The client sends the full updated version of an existing profile to `/users/123`. Which HTTP method is commonly used?",
        "options": [
          "PUT",
          "cursor pagination",
          "ETag",
          "Content-Type"
        ],
        "correctAnswer": "PUT",
        "explanation": "PUT usually replaces a whole resource with the supplied representation. Example: PUT /api/devices/123\n\nExample:\nPUT /api/devices/123"
      },
      {
        "id": "api-http-basics-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: PATCH updates part of an existing resource.",
        "correctAnswer": "PATCH",
        "acceptedAnswers": [
          "PATCH",
          "PATCH",
          "PATCH"
        ],
        "explanation": "PATCH updates part of an existing resource.\n\nExample:\nPATCH /api/devices/123"
      },
      {
        "id": "api-http-basics-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes DELETE?",
        "options": [
          "DELETE requests remove a resource when the caller is authorised.",
          "Headers carry metadata such as content type, auth tokens and caching instructions.",
          "200 OK means the request succeeded and usually has a response body.",
          "401 Unauthorized means authentication is missing or invalid."
        ],
        "correctAnswer": "DELETE requests remove a resource when the caller is authorised.",
        "explanation": "DELETE requests remove a resource when the caller is authorised.\n\nExample:\nDELETE /api/devices/123"
      },
      {
        "id": "api-http-basics-q-06",
        "type": "true-false",
        "prompt": "True or false: A URL identifies where a resource can be found and may include path and query parts.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A URL identifies where a resource can be found and may include path and query parts.\n\nExample:\n/api/devices?page=1"
      },
      {
        "id": "api-http-basics-q-07",
        "type": "scenario",
        "prompt": "Scenario: In `/users/42`, the `42` identifies which user the request is about. What is that part called?",
        "options": [
          "path parameter",
          "OpenAPI",
          "cursor pagination",
          "ETag"
        ],
        "correctAnswer": "path parameter",
        "explanation": "A path parameter is part of the route and usually identifies a specific resource. Example: /api/users/42\n\nExample:\n/api/users/42"
      },
      {
        "id": "api-http-basics-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A query parameter modifies the request, often for filtering, sorting or pagination.",
        "correctAnswer": "query parameter",
        "acceptedAnswers": [
          "query parameter",
          "query parameter",
          "query parameter"
        ],
        "explanation": "A query parameter modifies the request, often for filtering, sorting or pagination.\n\nExample:\n/api/users?role=admin"
      },
      {
        "id": "api-http-basics-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes headers?",
        "options": [
          "Headers carry metadata such as content type, auth tokens and caching instructions.",
          "Sorting controls the order results are returned in.",
          "GET requests read data without changing server state.",
          "DELETE requests remove a resource when the caller is authorised."
        ],
        "correctAnswer": "Headers carry metadata such as content type, auth tokens and caching instructions.",
        "explanation": "Headers carry metadata such as content type, auth tokens and caching instructions.\n\nExample:\nContent-Type: application/json"
      },
      {
        "id": "api-http-basics-q-10",
        "type": "true-false",
        "prompt": "True or false: A request body contains data sent to the server, often JSON for POST, PUT or PATCH.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A request body contains data sent to the server, often JSON for POST, PUT or PATCH.\n\nExample:\nbody: JSON.stringify(payload)"
      },
      {
        "id": "api-http-basics-q-11",
        "type": "scenario",
        "prompt": "Scenario: An API sends back JSON like `{ \"id\": 42, \"name\": \"Aydin\" }`. What part of the response contains that data?",
        "options": [
          "response body",
          "filtering",
          "OpenAPI",
          "cursor pagination"
        ],
        "correctAnswer": "response body",
        "explanation": "A response body contains data returned by the server, often JSON. Example: { \"id\": \"123\", \"status\": \"online\" }\n\nExample:\n{ \"id\": \"123\", \"status\": \"online\" }"
      },
      {
        "id": "api-http-basics-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A status code tells the client the high-level result of the request.",
        "correctAnswer": "status code",
        "acceptedAnswers": [
          "status code",
          "status code",
          "status code"
        ],
        "explanation": "A status code tells the client the high-level result of the request.\n\nExample:\n200, 404, 500"
      },
      {
        "id": "api-http-basics-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes 200 OK?",
        "options": [
          "200 OK means the request succeeded and usually has a response body.",
          "422 Validation Error often means the request shape was valid but business validation failed.",
          "Sorting controls the order results are returned in.",
          "GET requests read data without changing server state."
        ],
        "correctAnswer": "200 OK means the request succeeded and usually has a response body.",
        "explanation": "200 OK means the request succeeded and usually has a response body.\n\nExample:\nHTTP 200"
      },
      {
        "id": "api-http-basics-q-14",
        "type": "true-false",
        "prompt": "True or false: 201 Created means a resource was successfully created.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "201 Created means a resource was successfully created.\n\nExample:\nPOST returns 201"
      },
      {
        "id": "api-http-basics-q-15",
        "type": "scenario",
        "prompt": "Scenario: A delete request succeeds, but the server has no JSON or text to send back. Which status code fits best?",
        "options": [
          "204 No Content",
          "PATCH",
          "path parameter",
          "query parameter"
        ],
        "correctAnswer": "204 No Content",
        "explanation": "204 No Content means success with no response body to parse. Example: DELETE returns 204\n\nExample:\nDELETE returns 204"
      },
      {
        "id": "api-http-basics-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: 400 Bad Request means the request is malformed or missing required data.",
        "correctAnswer": "400 Bad Request",
        "acceptedAnswers": [
          "400 Bad Request",
          "400 Bad Request",
          "400 Bad Request"
        ],
        "explanation": "400 Bad Request means the request is malformed or missing required data.\n\nExample:\nmissing required field"
      },
      {
        "id": "api-http-basics-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes 401 Unauthorized?",
        "options": [
          "401 Unauthorized means authentication is missing or invalid.",
          "Sorting controls the order results are returned in.",
          "GET requests read data without changing server state.",
          "DELETE requests remove a resource when the caller is authorised."
        ],
        "correctAnswer": "401 Unauthorized means authentication is missing or invalid.",
        "explanation": "401 Unauthorized means authentication is missing or invalid.\n\nExample:\nexpired token"
      },
      {
        "id": "api-http-basics-q-18",
        "type": "true-false",
        "prompt": "True or false: 403 Forbidden means the user is authenticated but not allowed to do that action.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "403 Forbidden means the user is authenticated but not allowed to do that action.\n\nExample:\nno permission"
      },
      {
        "id": "api-http-basics-q-19",
        "type": "scenario",
        "prompt": "Scenario: The client requests `/products/999`, but no product exists with that ID. Which status code fits best?",
        "options": [
          "404 Not Found",
          "PUT",
          "PATCH",
          "path parameter"
        ],
        "correctAnswer": "404 Not Found",
        "explanation": "404 Not Found means the requested resource or route could not be found. Example: unknown id\n\nExample:\nunknown id"
      },
      {
        "id": "api-http-basics-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: 409 Conflict means the request conflicts with current server state.",
        "correctAnswer": "409 Conflict",
        "acceptedAnswers": [
          "409 Conflict",
          "409 Conflict",
          "409 Conflict"
        ],
        "explanation": "409 Conflict means the request conflicts with current server state.\n\nExample:\nduplicate email"
      },
      {
        "id": "api-http-basics-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes 422 Validation Error?",
        "options": [
          "422 Validation Error often means the request shape was valid but business validation failed.",
          "Headers carry metadata such as content type, auth tokens and caching instructions.",
          "200 OK means the request succeeded and usually has a response body.",
          "401 Unauthorized means authentication is missing or invalid."
        ],
        "correctAnswer": "422 Validation Error often means the request shape was valid but business validation failed.",
        "explanation": "422 Validation Error often means the request shape was valid but business validation failed.\n\nExample:\ninvalid field value"
      },
      {
        "id": "api-http-basics-q-22",
        "type": "true-false",
        "prompt": "True or false: 500 Internal Server Error means the server failed unexpectedly.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "500 Internal Server Error means the server failed unexpectedly.\n\nExample:\nuncaught exception"
      },
      {
        "id": "api-http-basics-q-23",
        "type": "scenario",
        "prompt": "Scenario: An endpoint has 10,000 results, so it returns page 1, page 2, and so on instead of everything at once. What is this called?",
        "options": [
          "pagination",
          "PUT",
          "PATCH",
          "path parameter"
        ],
        "correctAnswer": "pagination",
        "explanation": "Pagination breaks large result sets into pages or cursors. Example: ?page=2&limit=20\n\nExample:\n?page=2&limit=20"
      },
      {
        "id": "api-http-basics-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Filtering returns only resources that match criteria.",
        "correctAnswer": "filtering",
        "acceptedAnswers": [
          "filtering",
          "filtering",
          "filtering"
        ],
        "explanation": "Filtering returns only resources that match criteria.\n\nExample:\n?status=online"
      },
      {
        "id": "api-http-basics-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes sorting?",
        "options": [
          "Sorting controls the order results are returned in.",
          "DELETE requests remove a resource when the caller is authorised.",
          "Headers carry metadata such as content type, auth tokens and caching instructions.",
          "200 OK means the request succeeded and usually has a response body."
        ],
        "correctAnswer": "Sorting controls the order results are returned in.",
        "explanation": "Sorting controls the order results are returned in.\n\nExample:\n?sort=createdAt_desc"
      },
      {
        "id": "api-http-basics-extra-q-idempotent-mcq",
        "type": "multiple-choice",
        "prompt": "Which HTTP method is usually designed to be idempotent?",
        "correctAnswer": "PUT",
        "explanation": "PUT usually replaces a resource, so repeating the same request should leave the resource in the same final state.\n\nExample:\nDELETE /devices/123 can be retried safely if deleting an already-deleted device still leaves it deleted.",
        "options": [
          "PUT",
          "POST",
          "CONNECT",
          "None of them ever are"
        ]
      },
      {
        "id": "api-http-basics-extra-q-openapi-type",
        "type": "type-answer",
        "prompt": "Type the common API specification standard also known through Swagger tooling.",
        "correctAnswer": "OpenAPI",
        "explanation": "OpenAPI describes API contracts and can power docs, validation and generated clients.\n\nExample:\nGET /devices/{id} -> DeviceResponse",
        "acceptedAnswers": [
          "openapi",
          "open api",
          "swagger"
        ]
      },
      {
        "id": "api-http-basics-extra-q-cursor-scenario",
        "type": "scenario",
        "prompt": "A large activity feed changes constantly while users page through it. Which pagination style is usually more reliable?",
        "correctAnswer": "cursor pagination",
        "explanation": "Cursor pagination avoids many duplicate/missing item problems that offset pagination can have on changing datasets.\n\nExample:\nGET /logs?cursor=eyJpZCI6...",
        "options": [
          "cursor pagination",
          "offset pagination always",
          "random pagination",
          "CSS pagination"
        ]
      },
      {
        "id": "api-http-basics-extra-q-webhook-tf",
        "type": "true-false",
        "prompt": "True or false: A webhook lets a system notify another system by sending an HTTP request when an event happens.",
        "correctAnswer": "True",
        "explanation": "Webhooks are event-driven callbacks sent over HTTP.\n\nExample:\nPOST /webhooks/payment-succeeded",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "api-http-basics-extra-q-etag-scenario",
        "type": "scenario",
        "prompt": "Two users edit the same resource. Which header concept can help prevent blindly overwriting a newer version?",
        "correctAnswer": "ETag",
        "explanation": "ETags with If-Match can ensure you update only the version you previously fetched.\n\nExample:\nIf-Match: \"abc123\"",
        "options": [
          "ETag",
          "Accept-Language",
          "Array.filter",
          "localStorage"
        ]
      },
      {
        "id": "api-http-basics-extra-q-content-type-accept",
        "type": "multiple-choice",
        "prompt": "Which header tells the server what format the client is sending in the request body?",
        "correctAnswer": "Content-Type",
        "explanation": "Content-Type describes the request body format, such as application/json.\n\nExample:\nAccept: application/json",
        "options": [
          "Content-Type",
          "Accept",
          "Authorization",
          "Cache-Control"
        ]
      }
    ]
  },
  {
    "id": "api-auth-errors",
    "title": "API Auth, Errors & Security Basics",
    "description": "Understand API keys, bearer tokens, validation errors, CORS and safer error handling",
    "flashcards": [
      {
        "id": "api-auth-errors-card-01",
        "front": "What should you know about API key?",
        "back": "An API key is a secret-like identifier used to authenticate or track API access.",
        "example": "x-api-key: abc"
      },
      {
        "id": "api-auth-errors-card-02",
        "front": "What should you know about Bearer token?",
        "back": "A bearer token is sent in the Authorization header and grants access to whoever holds it.",
        "example": "Authorization: Bearer token"
      },
      {
        "id": "api-auth-errors-card-03",
        "front": "What should you know about JWT?",
        "back": "A JWT is a signed token format that can carry claims such as user id and expiry.",
        "example": "eyJ..."
      },
      {
        "id": "api-auth-errors-card-04",
        "front": "What should you know about session cookie?",
        "back": "A session cookie stores a browser login identifier that the server can verify.",
        "example": "Set-Cookie: session=..."
      },
      {
        "id": "api-auth-errors-card-05",
        "front": "What should you know about OAuth?",
        "back": "OAuth lets a user grant an app limited access without sharing their password.",
        "example": "Sign in with Google"
      },
      {
        "id": "api-auth-errors-card-06",
        "front": "What should you know about refresh token?",
        "back": "A refresh token is used to get new access tokens when short-lived ones expire.",
        "example": "refreshToken"
      },
      {
        "id": "api-auth-errors-card-07",
        "front": "What should you know about Content-Type?",
        "back": "Content-Type tells the server or client what format the body uses.",
        "example": "application/json"
      },
      {
        "id": "api-auth-errors-card-08",
        "front": "What should you know about CORS?",
        "back": "CORS is a browser security mechanism controlling which origins can read API responses.",
        "example": "Access-Control-Allow-Origin"
      },
      {
        "id": "api-auth-errors-card-09",
        "front": "What should you know about CSRF?",
        "back": "CSRF is an attack where another site tries to submit actions using a user’s cookies.",
        "example": "anti-CSRF token"
      },
      {
        "id": "api-auth-errors-card-10",
        "front": "What should you know about XSS?",
        "back": "XSS is when attacker-controlled script runs in a user’s browser.",
        "example": "escape user content"
      },
      {
        "id": "api-auth-errors-card-11",
        "front": "What should you know about validation error?",
        "back": "A validation error tells the client submitted data failed required rules.",
        "example": "email is required"
      },
      {
        "id": "api-auth-errors-card-12",
        "front": "What should you know about rate limiting?",
        "back": "Rate limiting restricts how many requests a client can make in a time window.",
        "example": "429 Too Many Requests"
      },
      {
        "id": "api-auth-errors-card-13",
        "front": "What should you know about retry?",
        "back": "A retry repeats a failed request, usually only for safe or temporary failures.",
        "example": "retry after 503"
      },
      {
        "id": "api-auth-errors-card-14",
        "front": "What should you know about exponential backoff?",
        "back": "Exponential backoff waits longer between retries to avoid overwhelming a service.",
        "example": "1s, 2s, 4s"
      },
      {
        "id": "api-auth-errors-card-15",
        "front": "What should you know about idempotency?",
        "back": "An idempotent operation can be repeated safely with the same result.",
        "example": "PUT same payload twice"
      },
      {
        "id": "api-auth-errors-card-16",
        "front": "What should you know about idempotency key?",
        "back": "An idempotency key helps the server avoid creating duplicates when a request is retried.",
        "example": "Idempotency-Key"
      },
      {
        "id": "api-auth-errors-card-17",
        "front": "What should you know about sanitisation?",
        "back": "Sanitisation removes or neutralises unsafe input.",
        "example": "strip dangerous HTML"
      },
      {
        "id": "api-auth-errors-card-18",
        "front": "What should you know about least privilege?",
        "back": "Least privilege means only granting the minimum permissions required.",
        "example": "read-only token"
      },
      {
        "id": "api-auth-errors-card-19",
        "front": "What should you know about secret management?",
        "back": "Secrets should be stored outside frontend code and source control.",
        "example": ".env on server"
      },
      {
        "id": "api-auth-errors-card-20",
        "front": "What should you know about logging errors?",
        "back": "Error logs should include useful context without leaking secrets or personal data.",
        "example": "log request id not token"
      },
      {
        "id": "api-auth-errors-card-21",
        "front": "What should you know about user-facing errors?",
        "back": "User-facing errors should be clear, kind and actionable.",
        "example": "Try again in a moment"
      },
      {
        "id": "api-auth-errors-card-22",
        "front": "What should you know about server validation?",
        "back": "Server validation is required even if the frontend also validates.",
        "example": "never trust client input"
      },
      {
        "id": "api-auth-errors-card-23",
        "front": "What should you know about HTTPS?",
        "back": "HTTPS encrypts traffic between client and server.",
        "example": "https://api.example.com"
      },
      {
        "id": "api-auth-errors-card-24",
        "front": "What should you know about webhooks?",
        "back": "Webhooks let one system call another when an event happens.",
        "example": "payment.succeeded webhook"
      },
      {
        "id": "api-auth-errors-card-25",
        "front": "What should you know about request ids?",
        "back": "Request ids help trace one request across logs and services.",
        "example": "x-request-id"
      },
      {
        "id": "api-auth-errors-extra-card-xss",
        "front": "What is XSS?",
        "back": "Cross-site scripting is when attacker-controlled script runs in a user’s browser. Avoid unsafe HTML injection and sanitise untrusted content.",
        "example": "Do not render user input with dangerouslySetInnerHTML unless it is sanitised."
      },
      {
        "id": "api-auth-errors-extra-card-csrf",
        "front": "What is CSRF?",
        "back": "Cross-site request forgery tricks a logged-in browser into making an unwanted request. SameSite cookies, CSRF tokens and checking origins help reduce risk.",
        "example": "SameSite=Lax or Strict"
      },
      {
        "id": "api-auth-errors-extra-card-httponly-cookie",
        "front": "Why use HttpOnly cookies?",
        "back": "HttpOnly cookies cannot be read by JavaScript, which helps protect session tokens from XSS stealing them.",
        "example": "Set-Cookie: session=...; HttpOnly; Secure"
      },
      {
        "id": "api-auth-errors-extra-card-cors-preflight",
        "front": "What is a CORS preflight?",
        "back": "A preflight is an OPTIONS request the browser sends before certain cross-origin requests to check whether the server allows them.",
        "example": "OPTIONS /api/devices"
      },
      {
        "id": "api-auth-errors-extra-card-least-privilege",
        "front": "What is least privilege?",
        "back": "Least privilege means giving users, services and tokens only the permissions they need. This reduces damage if something is compromised.",
        "example": "A read-only token should not be able to delete devices."
      },
      {
        "id": "api-auth-errors-extra-card-input-validation",
        "front": "Why validate on the server too?",
        "back": "Frontend validation improves UX, but server validation protects the real system. Never trust client input just because the UI checked it.",
        "example": "Validate required fields, types, lengths and permissions on the API."
      },
      {
        "id": "api-auth-errors-extra-card-secrets",
        "front": "Where should secrets live?",
        "back": "Secrets should not be committed to Git or exposed in frontend code. Keep them in environment variables or a secret manager on the server side.",
        "example": "OPENAI_API_KEY belongs on the backend, not in browser JS."
      },
      {
        "id": "api-auth-errors-extra-card-problem-json",
        "front": "What is problem+json?",
        "back": "application/problem+json is a standard-ish format for returning structured API error details, making errors easier for clients to handle.",
        "example": "{ \"title\": \"Validation failed\", \"status\": 422 }"
      }
    ],
    "questions": [
      {
        "id": "api-auth-errors-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes API key?",
        "options": [
          "An API key is a secret-like identifier used to authenticate or track API access.",
          "Sanitisation removes or neutralises unsafe input.",
          "User-facing errors should be clear, kind and actionable.",
          "Request ids help trace one request across logs and services."
        ],
        "correctAnswer": "An API key is a secret-like identifier used to authenticate or track API access.",
        "explanation": "An API key is a secret-like identifier used to authenticate or track API access.\n\nExample:\nx-api-key: abc"
      },
      {
        "id": "api-auth-errors-q-02",
        "type": "true-false",
        "prompt": "True or false: A bearer token is sent in the Authorization header and grants access to whoever holds it.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A bearer token is sent in the Authorization header and grants access to whoever holds it.\n\nExample:\nAuthorization: Bearer token"
      },
      {
        "id": "api-auth-errors-q-03",
        "type": "scenario",
        "prompt": "Scenario: After login, the server gives the client a signed token that can be sent with later requests to prove identity. What is it?",
        "options": [
          "JWT",
          "session cookie",
          "Content-Type",
          "CORS"
        ],
        "correctAnswer": "JWT",
        "explanation": "A JWT is a signed token format that can carry claims such as user id and expiry. Example: eyJ...\n\nExample:\neyJ..."
      },
      {
        "id": "api-auth-errors-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A session cookie stores a browser login identifier that the server can verify.",
        "correctAnswer": "session cookie",
        "acceptedAnswers": [
          "session cookie",
          "session cookie",
          "session cookie"
        ],
        "explanation": "A session cookie stores a browser login identifier that the server can verify.\n\nExample:\nSet-Cookie: session=..."
      },
      {
        "id": "api-auth-errors-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes OAuth?",
        "options": [
          "OAuth lets a user grant an app limited access without sharing their password.",
          "User-facing errors should be clear, kind and actionable.",
          "Request ids help trace one request across logs and services.",
          "They cannot be read by JavaScript, reducing token theft from XSS."
        ],
        "correctAnswer": "OAuth lets a user grant an app limited access without sharing their password.",
        "explanation": "OAuth lets a user grant an app limited access without sharing their password.\n\nExample:\nSign in with Google"
      },
      {
        "id": "api-auth-errors-q-06",
        "type": "true-false",
        "prompt": "True or false: A refresh token is used to get new access tokens when short-lived ones expire.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A refresh token is used to get new access tokens when short-lived ones expire.\n\nExample:\nrefreshToken"
      },
      {
        "id": "api-auth-errors-q-07",
        "type": "scenario",
        "prompt": "Scenario: The server needs to know the request body is JSON rather than plain text or form data. Which header tells it this?",
        "options": [
          "Content-Type",
          "session cookie",
          "CORS",
          "validation error"
        ],
        "correctAnswer": "Content-Type",
        "explanation": "Content-Type tells the server or client what format the body uses. Example: application/json\n\nExample:\napplication/json"
      },
      {
        "id": "api-auth-errors-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: CORS is a browser security mechanism controlling which origins can read API responses.",
        "correctAnswer": "CORS",
        "acceptedAnswers": [
          "CORS",
          "CORS",
          "CORS"
        ],
        "explanation": "CORS is a browser security mechanism controlling which origins can read API responses.\n\nExample:\nAccess-Control-Allow-Origin"
      },
      {
        "id": "api-auth-errors-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes CSRF?",
        "options": [
          "CSRF is an attack where another site tries to submit actions using a user’s cookies.",
          "They cannot be read by JavaScript, reducing token theft from XSS.",
          "An API key is a secret-like identifier used to authenticate or track API access.",
          "OAuth lets a user grant an app limited access without sharing their password."
        ],
        "correctAnswer": "CSRF is an attack where another site tries to submit actions using a user’s cookies.",
        "explanation": "CSRF is an attack where another site tries to submit actions using a user’s cookies.\n\nExample:\nanti-CSRF token"
      },
      {
        "id": "api-auth-errors-q-10",
        "type": "true-false",
        "prompt": "True or false: XSS is when attacker-controlled script runs in a user’s browser.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "XSS is when attacker-controlled script runs in a user’s browser.\n\nExample:\nescape user content"
      },
      {
        "id": "api-auth-errors-q-11",
        "type": "scenario",
        "prompt": "Scenario: A signup form submits an invalid email and a password that is too short. What kind of error should the API return?",
        "options": [
          "validation error",
          "idempotency",
          "idempotency key",
          "secret management"
        ],
        "correctAnswer": "validation error",
        "explanation": "A validation error tells the client submitted data failed required rules. Example: email is required\n\nExample:\nemail is required"
      },
      {
        "id": "api-auth-errors-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Rate limiting restricts how many requests a client can make in a time window.",
        "correctAnswer": "rate limiting",
        "acceptedAnswers": [
          "rate limiting",
          "rate limiting",
          "rate limiting"
        ],
        "explanation": "Rate limiting restricts how many requests a client can make in a time window.\n\nExample:\n429 Too Many Requests"
      },
      {
        "id": "api-auth-errors-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes retry?",
        "options": [
          "A retry repeats a failed request, usually only for safe or temporary failures.",
          "Request ids help trace one request across logs and services.",
          "They cannot be read by JavaScript, reducing token theft from XSS.",
          "An API key is a secret-like identifier used to authenticate or track API access."
        ],
        "correctAnswer": "A retry repeats a failed request, usually only for safe or temporary failures.",
        "explanation": "A retry repeats a failed request, usually only for safe or temporary failures.\n\nExample:\nretry after 503"
      },
      {
        "id": "api-auth-errors-q-14",
        "type": "true-false",
        "prompt": "True or false: Exponential backoff waits longer between retries to avoid overwhelming a service.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Exponential backoff waits longer between retries to avoid overwhelming a service.\n\nExample:\n1s, 2s, 4s"
      },
      {
        "id": "api-auth-errors-q-15",
        "type": "scenario",
        "prompt": "Scenario: Retrying the same payment request should not accidentally charge the customer twice. What API design concept helps?",
        "options": [
          "idempotency",
          "JWT",
          "session cookie",
          "Content-Type"
        ],
        "correctAnswer": "idempotency",
        "explanation": "An idempotent operation can be repeated safely with the same result. Example: PUT same payload twice\n\nExample:\nPUT same payload twice"
      },
      {
        "id": "api-auth-errors-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: An idempotency key helps the server avoid creating duplicates when a request is retried.",
        "correctAnswer": "idempotency key",
        "acceptedAnswers": [
          "idempotency key",
          "idempotency key",
          "idempotency key"
        ],
        "explanation": "An idempotency key helps the server avoid creating duplicates when a request is retried.\n\nExample:\nIdempotency-Key"
      },
      {
        "id": "api-auth-errors-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes sanitisation?",
        "options": [
          "Sanitisation removes or neutralises unsafe input.",
          "An API key is a secret-like identifier used to authenticate or track API access.",
          "OAuth lets a user grant an app limited access without sharing their password.",
          "CSRF is an attack where another site tries to submit actions using a user’s cookies."
        ],
        "correctAnswer": "Sanitisation removes or neutralises unsafe input.",
        "explanation": "Sanitisation removes or neutralises unsafe input.\n\nExample:\nstrip dangerous HTML"
      },
      {
        "id": "api-auth-errors-q-18",
        "type": "true-false",
        "prompt": "True or false: Least privilege means only granting the minimum permissions required.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Least privilege means only granting the minimum permissions required.\n\nExample:\nread-only token"
      },
      {
        "id": "api-auth-errors-q-19",
        "type": "scenario",
        "prompt": "Scenario: API keys must not be committed to GitHub and should be stored securely in environment variables or a vault. What is this practice called?",
        "options": [
          "secret management",
          "validation error",
          "rate limiting",
          "idempotency"
        ],
        "correctAnswer": "secret management",
        "explanation": "Secrets should be stored outside frontend code and source control. Example: .env on server\n\nExample:\n.env on server"
      },
      {
        "id": "api-auth-errors-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Error logs should include useful context without leaking secrets or personal data.",
        "correctAnswer": "logging errors",
        "acceptedAnswers": [
          "logging errors",
          "logging errors",
          "logging errors"
        ],
        "explanation": "Error logs should include useful context without leaking secrets or personal data.\n\nExample:\nlog request id not token"
      },
      {
        "id": "api-auth-errors-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes user-facing errors?",
        "options": [
          "User-facing errors should be clear, kind and actionable.",
          "They cannot be read by JavaScript, reducing token theft from XSS.",
          "An API key is a secret-like identifier used to authenticate or track API access.",
          "OAuth lets a user grant an app limited access without sharing their password."
        ],
        "correctAnswer": "User-facing errors should be clear, kind and actionable.",
        "explanation": "User-facing errors should be clear, kind and actionable.\n\nExample:\nTry again in a moment"
      },
      {
        "id": "api-auth-errors-q-22",
        "type": "true-false",
        "prompt": "True or false: Server validation is required even if the frontend also validates.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Server validation is required even if the frontend also validates.\n\nExample:\nnever trust client input"
      },
      {
        "id": "api-auth-errors-q-23",
        "type": "scenario",
        "prompt": "Scenario: Login details are being sent over the network and must be encrypted in transit. What protocol should be used?",
        "options": [
          "HTTPS",
          "secret management",
          "logging errors",
          "webhooks"
        ],
        "correctAnswer": "HTTPS",
        "explanation": "HTTPS encrypts traffic between client and server. Example: https://api.example.com\n\nExample:\nhttps://api.example.com"
      },
      {
        "id": "api-auth-errors-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Webhooks let one system call another when an event happens.",
        "correctAnswer": "webhooks",
        "acceptedAnswers": [
          "webhooks",
          "webhooks",
          "webhooks"
        ],
        "explanation": "Webhooks let one system call another when an event happens.\n\nExample:\npayment.succeeded webhook"
      },
      {
        "id": "api-auth-errors-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes request ids?",
        "options": [
          "Request ids help trace one request across logs and services.",
          "A retry repeats a failed request, usually only for safe or temporary failures.",
          "Sanitisation removes or neutralises unsafe input.",
          "User-facing errors should be clear, kind and actionable."
        ],
        "correctAnswer": "Request ids help trace one request across logs and services.",
        "explanation": "Request ids help trace one request across logs and services.\n\nExample:\nx-request-id"
      },
      {
        "id": "api-auth-errors-extra-q-httponly-mcq",
        "type": "multiple-choice",
        "prompt": "Why are HttpOnly cookies useful for sessions?",
        "correctAnswer": "They cannot be read by JavaScript, reducing token theft from XSS.",
        "explanation": "HttpOnly prevents browser JavaScript from reading the cookie value.\n\nExample:\nSet-Cookie: session=...; HttpOnly; Secure",
        "options": [
          "They cannot be read by JavaScript, reducing token theft from XSS.",
          "They make requests faster.",
          "They disable all CORS rules.",
          "They convert cookies into JWTs."
        ]
      },
      {
        "id": "api-auth-errors-extra-q-csrf-type",
        "type": "type-answer",
        "prompt": "Type the attack where a logged-in browser is tricked into making an unwanted request.",
        "correctAnswer": "CSRF",
        "explanation": "CSRF stands for cross-site request forgery.\n\nExample:\nSameSite=Lax or Strict",
        "acceptedAnswers": [
          "csrf",
          "cross-site request forgery",
          "cross site request forgery"
        ]
      },
      {
        "id": "api-auth-errors-extra-q-frontend-validation-tf",
        "type": "true-false",
        "prompt": "True or false: If the frontend validates a form, the backend does not need to validate it again.",
        "correctAnswer": "False",
        "explanation": "Clients can be bypassed. Server-side validation is required to protect the system.\n\nExample:\nnever trust client input",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "api-auth-errors-extra-q-secret-scenario",
        "type": "scenario",
        "prompt": "A React app needs to call OpenAI. Where should the API key be kept?",
        "correctAnswer": "on a backend/server, not in browser code",
        "explanation": "Frontend code is visible to users, so secrets must be kept server-side.\n\nExample:\nOPENAI_API_KEY belongs on the backend, not in browser JS.",
        "options": [
          "on a backend/server, not in browser code",
          "inside a public GitHub repo",
          "in localStorage for every user",
          "in a CSS variable"
        ]
      },
      {
        "id": "api-auth-errors-extra-q-cors-preflight-mcq",
        "type": "multiple-choice",
        "prompt": "What HTTP method is commonly used for a CORS preflight request?",
        "correctAnswer": "OPTIONS",
        "explanation": "Browsers send OPTIONS requests to check allowed methods/headers for certain cross-origin requests.\n\nExample:\nOPTIONS /api/devices",
        "options": [
          "OPTIONS",
          "PATCH",
          "TRACE",
          "HEAD only"
        ]
      },
      {
        "id": "api-auth-errors-extra-q-least-privilege-scenario",
        "type": "scenario",
        "prompt": "A device-reading token only needs to submit telemetry. Which permission model is safest?",
        "correctAnswer": "least privilege",
        "explanation": "Least privilege gives the token only the minimum permissions needed, reducing damage if leaked.\n\nExample:\nA read-only token should not be able to delete devices.",
        "options": [
          "least privilege",
          "full admin access",
          "public write access",
          "no authentication ever"
        ]
      }
    ]
  },
  {
    "id": "ts-basics-narrowing",
    "title": "TypeScript Basics & Narrowing",
    "description": "Learn the type system features that make JavaScript safer in real codebases",
    "flashcards": [
      {
        "id": "ts-basics-narrowing-card-01",
        "front": "What should you know about type annotation?",
        "back": "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have.",
        "example": "const id: string = \"123\""
      },
      {
        "id": "ts-basics-narrowing-card-02",
        "front": "What should you know about type inference?",
        "back": "Type inference means TypeScript works out the type from the value or usage.",
        "example": "const count = 1"
      },
      {
        "id": "ts-basics-narrowing-card-03",
        "front": "What should you know about interface?",
        "back": "An interface describes the shape of an object and is often used for public object contracts.",
        "example": "interface User { id: string }"
      },
      {
        "id": "ts-basics-narrowing-card-04",
        "front": "What should you know about type alias?",
        "back": "A type alias names any type, including unions, primitives, objects and function types.",
        "example": "type ID = string | number"
      },
      {
        "id": "ts-basics-narrowing-card-05",
        "front": "What should you know about union type?",
        "back": "A union type allows a value to be one of several possible types.",
        "example": "string | null"
      },
      {
        "id": "ts-basics-narrowing-card-06",
        "front": "What should you know about literal type?",
        "back": "A literal type restricts a value to an exact string, number or boolean.",
        "example": "\"primary\" | \"secondary\""
      },
      {
        "id": "ts-basics-narrowing-card-07",
        "front": "What should you know about optional property?",
        "back": "An optional property may be missing or undefined.",
        "example": "name?: string"
      },
      {
        "id": "ts-basics-narrowing-card-08",
        "front": "What should you know about readonly?",
        "back": "readonly prevents reassignment of a property through that type.",
        "example": "readonly id: string"
      },
      {
        "id": "ts-basics-narrowing-card-09",
        "front": "What should you know about array type?",
        "back": "Array types describe lists of values with the same item type.",
        "example": "User[]"
      },
      {
        "id": "ts-basics-narrowing-card-10",
        "front": "What should you know about tuple?",
        "back": "A tuple describes an array with fixed positions and types.",
        "example": "[number, string]"
      },
      {
        "id": "ts-basics-narrowing-card-11",
        "front": "What should you know about function type?",
        "back": "A function type describes parameter and return types.",
        "example": "(id: string) => User"
      },
      {
        "id": "ts-basics-narrowing-card-12",
        "front": "What should you know about return type?",
        "back": "A return type documents and checks what a function gives back.",
        "example": "function getId(): string"
      },
      {
        "id": "ts-basics-narrowing-card-13",
        "front": "What should you know about void?",
        "back": "void means a function does not return a meaningful value.",
        "example": "function log(): void"
      },
      {
        "id": "ts-basics-narrowing-card-14",
        "front": "What should you know about unknown?",
        "back": "unknown is safer than any because you must narrow it before using it.",
        "example": "let value: unknown"
      },
      {
        "id": "ts-basics-narrowing-card-15",
        "front": "What should you know about any?",
        "back": "any disables type checking for that value and should be used rarely.",
        "example": "let value: any"
      },
      {
        "id": "ts-basics-narrowing-card-16",
        "front": "What should you know about type guard?",
        "back": "A type guard narrows a value inside a conditional.",
        "example": "typeof value === \"string\""
      },
      {
        "id": "ts-basics-narrowing-card-17",
        "front": "What should you know about typeof narrowing?",
        "back": "typeof narrowing checks primitive runtime types.",
        "example": "typeof input === \"number\""
      },
      {
        "id": "ts-basics-narrowing-card-18",
        "front": "What should you know about in narrowing?",
        "back": "The in operator can narrow object unions by checking for a property.",
        "example": "\"error\" in result"
      },
      {
        "id": "ts-basics-narrowing-card-19",
        "front": "What should you know about discriminated union?",
        "back": "A discriminated union uses a shared literal property to safely narrow variants.",
        "example": "{ kind: \"success\" } | { kind: \"error\" }"
      },
      {
        "id": "ts-basics-narrowing-card-20",
        "front": "What should you know about never?",
        "back": "never represents a value that should be impossible, useful for exhaustive checks.",
        "example": "const _exhaustive: never = value"
      },
      {
        "id": "ts-basics-narrowing-card-21",
        "front": "What should you know about null checking?",
        "back": "Strict null checking forces you to handle null and undefined before using values.",
        "example": "user?.name"
      },
      {
        "id": "ts-basics-narrowing-card-22",
        "front": "What should you know about non-null assertion?",
        "back": "The non-null assertion tells TypeScript a value is not null, but it can hide real bugs.",
        "example": "user!.name"
      },
      {
        "id": "ts-basics-narrowing-card-23",
        "front": "What should you know about as assertion?",
        "back": "A type assertion tells TypeScript to treat a value as another type. Use it carefully.",
        "example": "value as User"
      },
      {
        "id": "ts-basics-narrowing-card-24",
        "front": "What should you know about enum alternative?",
        "back": "String literal unions are often simpler and safer than enums in frontend code.",
        "example": "type Size = \"sm\" | \"md\""
      },
      {
        "id": "ts-basics-narrowing-card-25",
        "front": "What should you know about satisfies?",
        "back": "satisfies checks that a value matches a type while preserving precise inferred values.",
        "example": "const routes = {...} satisfies Record<string,string>"
      },
      {
        "id": "ts-basics-narrowing-extra-card-unknown-vs-any",
        "front": "unknown vs any?",
        "back": "unknown means “I do not know this type yet” and forces you to check before using it. any turns off type checking and should be avoided when possible.",
        "example": "function handle(value: unknown) {\n  if (typeof value === \"string\") value.toUpperCase();\n}"
      },
      {
        "id": "ts-basics-narrowing-extra-card-never",
        "front": "What is never?",
        "back": "never represents a value that should not exist, often used for unreachable code or exhaustive checks in discriminated unions.",
        "example": "const exhaustive: never = value;"
      },
      {
        "id": "ts-basics-narrowing-extra-card-satisfies",
        "front": "What does satisfies do?",
        "back": "satisfies checks that a value matches a type without widening the value as much as a direct annotation might. It is useful for config objects.",
        "example": "const routes = { home: \"/\" } satisfies Record<string, string>;"
      },
      {
        "id": "ts-basics-narrowing-extra-card-non-null",
        "front": "What is the non-null assertion?",
        "back": "The ! operator tells TypeScript a value is not null or undefined. Use it carefully because it removes a safety check without changing runtime behaviour.",
        "example": "document.getElementById(\"root\")!"
      },
      {
        "id": "ts-basics-narrowing-extra-card-discriminated-union",
        "front": "What is a discriminated union?",
        "back": "A discriminated union is a union where each shape has a shared literal field, like type or kind. It makes narrowing clean and safe.",
        "example": "type State = { status: \"loading\" } | { status: \"success\"; data: User[] };"
      },
      {
        "id": "ts-basics-narrowing-extra-card-assertion-function",
        "front": "What is an assertion function?",
        "back": "An assertion function tells TypeScript that a condition is true after the function returns. It is useful for reusable runtime checks.",
        "example": "function assertUser(value: unknown): asserts value is User { ... }"
      },
      {
        "id": "ts-basics-narrowing-extra-card-dom-events",
        "front": "How do you type DOM events?",
        "back": "DOM event types depend on the target and event kind. In React, event types are React.ChangeEvent or React.MouseEvent. In plain DOM, use Event and narrow the target.",
        "example": "function onInput(e: React.ChangeEvent<HTMLInputElement>) {}"
      },
      {
        "id": "ts-basics-narrowing-extra-card-literal-inference",
        "front": "What is literal inference?",
        "back": "Literal inference is when TypeScript keeps an exact value type like \"success\" instead of widening to string. as const helps preserve literal values.",
        "example": "const status = \"success\" as const;"
      }
    ],
    "questions": [
      {
        "id": "ts-basics-narrowing-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes type annotation?",
        "options": [
          "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have.",
          "void means a function does not return a meaningful value.",
          "typeof narrowing checks primitive runtime types.",
          "Strict null checking forces you to handle null and undefined before using values."
        ],
        "correctAnswer": "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have.",
        "explanation": "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have.\n\nExample:\nconst id: string = \"123\""
      },
      {
        "id": "ts-basics-narrowing-q-02",
        "type": "true-false",
        "prompt": "True or false: Type inference means TypeScript works out the type from the value or usage.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Type inference means TypeScript works out the type from the value or usage.\n\nExample:\nfunction assertUser(value: unknown): asserts value is User { ... }"
      },
      {
        "id": "ts-basics-narrowing-q-03",
        "type": "scenario",
        "prompt": "Scenario: Several functions receive a `User` object with `id`, `name`, and `email`, and you want to define that object shape clearly in TypeScript. What should you use?",
        "options": [
          "interface",
          "any",
          "type guard",
          "discriminated union"
        ],
        "correctAnswer": "interface",
        "explanation": "An interface describes the shape of an object and is often used for public object contracts. Example: interface User { id: string }\n\nExample:\ninterface User { id: string }"
      },
      {
        "id": "ts-basics-narrowing-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A type alias names any type, including unions, primitives, objects and function types.",
        "correctAnswer": "type alias",
        "acceptedAnswers": [
          "type alias",
          "type alias",
          "type alias"
        ],
        "explanation": "A type alias names any type, including unions, primitives, objects and function types.\n\nExample:\ntype ID = string | number"
      },
      {
        "id": "ts-basics-narrowing-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes union type?",
        "options": [
          "A union type allows a value to be one of several possible types.",
          "Array types describe lists of values with the same item type.",
          "void means a function does not return a meaningful value.",
          "typeof narrowing checks primitive runtime types."
        ],
        "correctAnswer": "A union type allows a value to be one of several possible types.",
        "explanation": "A union type allows a value to be one of several possible types.\n\nExample:\nstring | null"
      },
      {
        "id": "ts-basics-narrowing-q-06",
        "type": "true-false",
        "prompt": "True or false: A literal type restricts a value to an exact string, number or boolean.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A literal type restricts a value to an exact string, number or boolean.\n\nExample:\nfunction assertUser(value: unknown): asserts value is User { ... }"
      },
      {
        "id": "ts-basics-narrowing-q-07",
        "type": "scenario",
        "prompt": "Scenario: A `User` usually has an avatar URL, but some users do not. How should that property be typed?",
        "options": [
          "optional property",
          "function type",
          "return type",
          "any"
        ],
        "correctAnswer": "optional property",
        "explanation": "An optional property may be missing or undefined. Example: name?: string\n\nExample:\nname?: string"
      },
      {
        "id": "ts-basics-narrowing-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: readonly prevents reassignment of a property through that type.",
        "correctAnswer": "readonly",
        "acceptedAnswers": [
          "readonly",
          "readonly",
          "readonly"
        ],
        "explanation": "readonly prevents reassignment of a property through that type.\n\nExample:\nreadonly id: string"
      },
      {
        "id": "ts-basics-narrowing-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes array type?",
        "options": [
          "Array types describe lists of values with the same item type.",
          "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have.",
          "A union type allows a value to be one of several possible types.",
          "void means a function does not return a meaningful value."
        ],
        "correctAnswer": "Array types describe lists of values with the same item type.",
        "explanation": "Array types describe lists of values with the same item type.\n\nExample:\nUser[]"
      },
      {
        "id": "ts-basics-narrowing-q-10",
        "type": "true-false",
        "prompt": "True or false: A tuple describes an array with fixed positions and types.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A tuple describes an array with fixed positions and types.\n\nExample:\nfunction assertUser(value: unknown): asserts value is User { ... }"
      },
      {
        "id": "ts-basics-narrowing-q-11",
        "type": "scenario",
        "prompt": "Scenario: A component accepts an `onSave` callback, and you want TypeScript to check its parameters and return value. What should you define?",
        "options": [
          "function type",
          "type guard",
          "discriminated union",
          "never"
        ],
        "correctAnswer": "function type",
        "explanation": "A function type describes parameter and return types. Example: (id: string) => User\n\nExample:\n(id: string) => User"
      },
      {
        "id": "ts-basics-narrowing-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A return type documents and checks what a function gives back.",
        "correctAnswer": "return type",
        "acceptedAnswers": [
          "return type",
          "return type",
          "return type"
        ],
        "explanation": "A return type documents and checks what a function gives back.\n\nExample:\nfunction getId(): string"
      },
      {
        "id": "ts-basics-narrowing-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes void?",
        "options": [
          "void means a function does not return a meaningful value.",
          "A union type allows a value to be one of several possible types.",
          "Array types describe lists of values with the same item type.",
          "typeof narrowing checks primitive runtime types."
        ],
        "correctAnswer": "void means a function does not return a meaningful value.",
        "explanation": "void means a function does not return a meaningful value.\n\nExample:\nfunction log(): void"
      },
      {
        "id": "ts-basics-narrowing-q-14",
        "type": "true-false",
        "prompt": "True or false: unknown is safer than any because you must narrow it before using it.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "unknown is safer than any because you must narrow it before using it.\n\nExample:\nlet value: unknown"
      },
      {
        "id": "ts-basics-narrowing-q-15",
        "type": "scenario",
        "prompt": "Scenario: You are temporarily migrating old JavaScript code and need to bypass type checking for one value, although it is not ideal long term. What type does this?",
        "options": [
          "any",
          "function type",
          "return type",
          "type guard"
        ],
        "correctAnswer": "any",
        "explanation": "any disables type checking for that value and should be used rarely. Example: let value: any\n\nExample:\nlet value: any"
      },
      {
        "id": "ts-basics-narrowing-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A type guard narrows a value inside a conditional.",
        "correctAnswer": "type guard",
        "acceptedAnswers": [
          "type guard",
          "type guard",
          "type guard"
        ],
        "explanation": "A type guard narrows a value inside a conditional.\n\nExample:\ntypeof value === \"string\""
      },
      {
        "id": "ts-basics-narrowing-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes typeof narrowing?",
        "options": [
          "typeof narrowing checks primitive runtime types.",
          "unknown forces you to narrow or check the value before using it.",
          "It can hide a real null/undefined runtime bug.",
          "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have."
        ],
        "correctAnswer": "typeof narrowing checks primitive runtime types.",
        "explanation": "typeof narrowing checks primitive runtime types.\n\nExample:\ntypeof input === \"number\""
      },
      {
        "id": "ts-basics-narrowing-q-18",
        "type": "true-false",
        "prompt": "True or false: The in operator can narrow object unions by checking for a property.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The in operator can narrow object unions by checking for a property.\n\nExample:\nfunction assertUser(value: unknown): asserts value is User { ... }"
      },
      {
        "id": "ts-basics-narrowing-q-19",
        "type": "scenario",
        "prompt": "Scenario: A `Payment` can be `{ type: 'card', last4: string }` or `{ type: 'paypal', email: string }`, and you want TypeScript to narrow based on `type`. What should you use?",
        "options": [
          "discriminated union",
          "type guard",
          "never",
          "as assertion"
        ],
        "correctAnswer": "discriminated union",
        "explanation": "A discriminated union uses a shared literal property to safely narrow variants. Example: { kind: \"success\" } | { kind: \"error\" }\n\nExample:\n{ kind: \"success\" } | { kind: \"error\" }"
      },
      {
        "id": "ts-basics-narrowing-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: never represents a value that should be impossible, useful for exhaustive checks.",
        "correctAnswer": "never",
        "acceptedAnswers": [
          "never",
          "never",
          "never"
        ],
        "explanation": "never represents a value that should be impossible, useful for exhaustive checks.\n\nExample:\nconst _exhaustive: never = value"
      },
      {
        "id": "ts-basics-narrowing-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes null checking?",
        "options": [
          "Strict null checking forces you to handle null and undefined before using values.",
          "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have.",
          "A union type allows a value to be one of several possible types.",
          "Array types describe lists of values with the same item type."
        ],
        "correctAnswer": "Strict null checking forces you to handle null and undefined before using values.",
        "explanation": "Strict null checking forces you to handle null and undefined before using values.\n\nExample:\nuser?.name"
      },
      {
        "id": "ts-basics-narrowing-q-22",
        "type": "true-false",
        "prompt": "True or false: The non-null assertion tells TypeScript a value is not null, but it can hide real bugs.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The statement is true: non-null assertion is only a TypeScript hint. It can be useful when you know more than the compiler, but overusing it can hide real null bugs.\n\nExample:\nconst root = document.getElementById(\"root\");\nroot!.innerHTML = \"Loaded\"; // Use carefully: ! removes the TypeScript warning, not the runtime risk."
      },
      {
        "id": "ts-basics-narrowing-q-23",
        "type": "scenario",
        "prompt": "Scenario: You know a DOM element is an `HTMLInputElement`, but TypeScript only sees a general `Element`. What can you use to tell TypeScript the more specific type?",
        "options": [
          "as assertion",
          "enum alternative",
          "interface",
          "type alias"
        ],
        "correctAnswer": "as assertion",
        "explanation": "A type assertion tells TypeScript to treat a value as another type. Use it carefully. Example: value as User\n\nExample:\nvalue as User"
      },
      {
        "id": "ts-basics-narrowing-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: String literal unions are often simpler and safer than enums in frontend code.",
        "correctAnswer": "enum alternative",
        "acceptedAnswers": [
          "enum alternative",
          "enum alternative",
          "enum alternative"
        ],
        "explanation": "String literal unions are often simpler and safer than enums in frontend code.\n\nExample:\ntype Size = \"sm\" | \"md\""
      },
      {
        "id": "ts-basics-narrowing-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes satisfies?",
        "options": [
          "satisfies checks that a value matches a type while preserving precise inferred values.",
          "unknown forces you to narrow or check the value before using it.",
          "It can hide a real null/undefined runtime bug.",
          "A type annotation explicitly tells TypeScript what type a variable, parameter or return value should have."
        ],
        "correctAnswer": "satisfies checks that a value matches a type while preserving precise inferred values.",
        "explanation": "satisfies checks that a value matches a type while preserving precise inferred values.\n\nExample:\nconst routes = {...} satisfies Record<string,string>"
      },
      {
        "id": "ts-basics-narrowing-extra-q-unknown-any",
        "type": "multiple-choice",
        "prompt": "Why is unknown safer than any?",
        "correctAnswer": "unknown forces you to narrow or check the value before using it.",
        "explanation": "any disables type checking. unknown keeps safety until you prove the type.\n\nExample:\nfunction handle(value: unknown) {\n  if (typeof value === \"string\") value.toUpperCase();\n}",
        "options": [
          "unknown forces you to narrow or check the value before using it.",
          "unknown automatically converts values to strings.",
          "unknown only works with arrays.",
          "unknown is the same as never."
        ]
      },
      {
        "id": "ts-basics-narrowing-extra-q-never-type",
        "type": "type-answer",
        "prompt": "Type the TypeScript type often used for unreachable/exhaustive code paths.",
        "correctAnswer": "never",
        "explanation": "never represents values that should not occur.\n\nExample:\nconst exhaustive: never = value;",
        "acceptedAnswers": [
          "never"
        ]
      },
      {
        "id": "ts-basics-narrowing-extra-q-satisfies-tf",
        "type": "true-false",
        "prompt": "True or false: satisfies can check an object against a type while preserving useful literal information.",
        "correctAnswer": "True",
        "explanation": "satisfies verifies assignability without forcing the value to be typed exactly as the annotation.\n\nExample:\nfunction assertUser(value: unknown): asserts value is User { ... }",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "ts-basics-narrowing-extra-q-discriminant-scenario",
        "type": "scenario",
        "prompt": "A state object has status: \"loading\" | \"success\" | \"error\" and each status has different fields. What TS pattern is this?",
        "correctAnswer": "discriminated union",
        "explanation": "The status field discriminates which object shape is currently available.\n\nExample:\ntype State = { status: \"loading\" } | { status: \"success\"; data: User[] };",
        "options": [
          "discriminated union",
          "CSS cascade",
          "Promise settlement",
          "HTTP caching"
        ]
      },
      {
        "id": "ts-basics-narrowing-extra-q-nonnull-risk",
        "type": "multiple-choice",
        "prompt": "What is the main risk of the non-null assertion operator (!)?",
        "correctAnswer": "It can hide a real null/undefined runtime bug.",
        "explanation": "The non-null assertion operator (!) tells TypeScript to stop warning about null or undefined, but it does not check anything at runtime. If the value is actually null, the app can still crash.\n\nExample:\nconst root = document.getElementById(\"root\");\nroot!.innerHTML = \"Loaded\"; // Compiles, but crashes if root is actually null.",
        "options": [
          "It can hide a real null/undefined runtime bug.",
          "It makes a value read-only.",
          "It converts null to an empty string.",
          "It catches exceptions automatically."
        ]
      },
      {
        "id": "ts-basics-narrowing-extra-q-react-changeevent",
        "type": "type-answer",
        "prompt": "In React TypeScript, what generic event type is commonly used for an input onChange handler?",
        "correctAnswer": "React.ChangeEvent<HTMLInputElement>",
        "explanation": "React.ChangeEvent<HTMLInputElement> gives the event a typed input target.\n\nExample:\nfunction onInput(e: React.ChangeEvent<HTMLInputElement>) {}",
        "acceptedAnswers": [
          "React.ChangeEvent<HTMLInputElement>",
          "changeevent htmlinputelement",
          "react changeevent htmlinputelement"
        ]
      }
    ]
  },
  {
    "id": "ts-generics-utilities",
    "title": "TypeScript Generics & Utility Types",
    "description": "Practise reusable typed functions, constraints and common utility types",
    "flashcards": [
      {
        "id": "ts-generics-utilities-card-01",
        "front": "What should you know about generic type parameter?",
        "back": "A generic type parameter lets a function or type work with different types while preserving information.",
        "example": "function identity<T>(value: T): T"
      },
      {
        "id": "ts-generics-utilities-card-02",
        "front": "What should you know about generic array helper?",
        "back": "Generics help array helpers return the same item type they receive.",
        "example": "function first<T>(items: T[]): T | undefined"
      },
      {
        "id": "ts-generics-utilities-card-03",
        "front": "What should you know about extends constraint?",
        "back": "An extends constraint limits what types a generic can accept.",
        "example": "T extends { id: string }"
      },
      {
        "id": "ts-generics-utilities-card-04",
        "front": "What should you know about keyof?",
        "back": "keyof creates a union of the keys of an object type.",
        "example": "keyof User"
      },
      {
        "id": "ts-generics-utilities-card-05",
        "front": "What should you know about indexed access type?",
        "back": "Indexed access types read the type of a property from another type.",
        "example": "User[\"id\"]"
      },
      {
        "id": "ts-generics-utilities-card-06",
        "front": "What should you know about Record?",
        "back": "Record creates an object type with specific key and value types.",
        "example": "Record<string, User>"
      },
      {
        "id": "ts-generics-utilities-card-07",
        "front": "What should you know about Partial?",
        "back": "Partial makes every property in a type optional.",
        "example": "Partial<User>"
      },
      {
        "id": "ts-generics-utilities-card-08",
        "front": "What should you know about Required?",
        "back": "Required makes every property in a type required.",
        "example": "Required<User>"
      },
      {
        "id": "ts-generics-utilities-card-09",
        "front": "What should you know about Pick?",
        "back": "Pick creates a type with only selected properties.",
        "example": "Pick<User, \"id\" | \"name\">"
      },
      {
        "id": "ts-generics-utilities-card-10",
        "front": "What should you know about Omit?",
        "back": "Omit creates a type without selected properties.",
        "example": "Omit<User, \"password\">"
      },
      {
        "id": "ts-generics-utilities-card-11",
        "front": "What should you know about Readonly?",
        "back": "Readonly makes all properties readonly.",
        "example": "Readonly<User>"
      },
      {
        "id": "ts-generics-utilities-card-12",
        "front": "What should you know about ReturnType?",
        "back": "ReturnType extracts the return type of a function.",
        "example": "ReturnType<typeof getUser>"
      },
      {
        "id": "ts-generics-utilities-card-13",
        "front": "What should you know about Parameters?",
        "back": "Parameters extracts a function’s parameter tuple type.",
        "example": "Parameters<typeof search>"
      },
      {
        "id": "ts-generics-utilities-card-14",
        "front": "What should you know about Awaited?",
        "back": "Awaited unwraps the resolved type of a Promise.",
        "example": "Awaited<Promise<User>>"
      },
      {
        "id": "ts-generics-utilities-card-15",
        "front": "What should you know about NonNullable?",
        "back": "NonNullable removes null and undefined from a type.",
        "example": "NonNullable<string | null>"
      },
      {
        "id": "ts-generics-utilities-card-16",
        "front": "What should you know about Extract?",
        "back": "Extract keeps union members assignable to another type.",
        "example": "Extract<Event, ClickEvent>"
      },
      {
        "id": "ts-generics-utilities-card-17",
        "front": "What should you know about Exclude?",
        "back": "Exclude removes union members assignable to another type.",
        "example": "Exclude<Status, \"loading\">"
      },
      {
        "id": "ts-generics-utilities-card-18",
        "front": "What should you know about template literal types?",
        "back": "Template literal types build string types from other types.",
        "example": "`user:${string}`"
      },
      {
        "id": "ts-generics-utilities-card-19",
        "front": "What should you know about mapped types?",
        "back": "Mapped types create new object types by looping over keys.",
        "example": "{ [K in keyof User]: boolean }"
      },
      {
        "id": "ts-generics-utilities-card-20",
        "front": "What should you know about conditional types?",
        "back": "Conditional types choose one type or another based on a type relationship.",
        "example": "T extends string ? A : B"
      },
      {
        "id": "ts-generics-utilities-card-21",
        "front": "What should you know about generic default?",
        "back": "Generic defaults provide a fallback type argument.",
        "example": "type ApiResponse<T = unknown>"
      },
      {
        "id": "ts-generics-utilities-card-22",
        "front": "What should you know about generic component props?",
        "back": "Generic props let reusable components preserve the item type they render.",
        "example": "List<T>"
      },
      {
        "id": "ts-generics-utilities-card-23",
        "front": "What should you know about type-safe API response?",
        "back": "A generic API response type can describe success data while reusing the wrapper shape.",
        "example": "ApiResponse<Device[]>"
      },
      {
        "id": "ts-generics-utilities-card-24",
        "front": "What should you know about narrowing generic values?",
        "back": "Generic values may still need runtime checks before you use specific properties.",
        "example": "if (typeof value === \"string\")"
      },
      {
        "id": "ts-generics-utilities-card-25",
        "front": "What should you know about overloads?",
        "back": "Function overloads describe multiple call signatures for one implementation.",
        "example": "function get(id: string): User"
      },
      {
        "id": "ts-generics-utilities-extra-card-awaited",
        "front": "What does Awaited<T> do?",
        "back": "Awaited<T> gets the resolved value type of a Promise-like type. It is useful when working with async function return types.",
        "example": "type Data = Awaited<ReturnType<typeof fetchUser>>;"
      },
      {
        "id": "ts-generics-utilities-extra-card-returntype",
        "front": "What does ReturnType do?",
        "back": "ReturnType gets the return type of a function type. It helps avoid duplicating types that can be derived from functions.",
        "example": "type Result = ReturnType<typeof createUser>;"
      },
      {
        "id": "ts-generics-utilities-extra-card-parameters",
        "front": "What does Parameters do?",
        "back": "Parameters gets a tuple type of a function’s parameter types. It is useful when wrapping functions without rewriting their argument types.",
        "example": "type Args = Parameters<typeof saveUser>;"
      },
      {
        "id": "ts-generics-utilities-extra-card-keyof-typeof",
        "front": "What is keyof typeof?",
        "back": "keyof typeof gets the keys of a runtime object as a type. It is useful for config objects and maps.",
        "example": "const routes = { home: \"/\", settings: \"/settings\" } as const;\ntype RouteName = keyof typeof routes;"
      },
      {
        "id": "ts-generics-utilities-extra-card-conditional-distribution",
        "front": "What are distributive conditional types?",
        "back": "A conditional type applied to a union usually runs once per union member. This is powerful but can surprise you.",
        "example": "type ToArray<T> = T extends any ? T[] : never;"
      },
      {
        "id": "ts-generics-utilities-extra-card-template-literal-types",
        "front": "What are template literal types?",
        "back": "Template literal types build string types from other types. They are useful for event names, CSS tokens and route patterns.",
        "example": "type EventName = `${string}Changed`;"
      },
      {
        "id": "ts-generics-utilities-extra-card-mapped-modifiers",
        "front": "What are mapped type modifiers?",
        "back": "Mapped types can add or remove readonly and optional modifiers. This is how utilities like Partial and Required work.",
        "example": "type Mutable<T> = { -readonly [K in keyof T]: T[K] };"
      },
      {
        "id": "ts-generics-utilities-extra-card-generic-constraints",
        "front": "Why constrain a generic?",
        "back": "A constraint tells TypeScript what a generic type must have. This lets you safely access properties inside a generic function.",
        "example": "function getId<T extends { id: string }>(item: T) { return item.id; }"
      }
    ],
    "questions": [
      {
        "id": "ts-generics-utilities-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes generic type parameter?",
        "options": [
          "A generic type parameter lets a function or type work with different types while preserving information.",
          "Function overloads describe multiple call signatures for one implementation.",
          "A tuple type of the function parameter types.",
          "Indexed access types read the type of a property from another type."
        ],
        "correctAnswer": "A generic type parameter lets a function or type work with different types while preserving information.",
        "explanation": "A generic type parameter lets a function or type work with different types while preserving information.\n\nExample:\nfunction identity<T>(value: T): T"
      },
      {
        "id": "ts-generics-utilities-q-02",
        "type": "true-false",
        "prompt": "True or false: Generics help array helpers return the same item type they receive.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Generics help array helpers return the same item type they receive.\n\nExample:\nfunction first<T>(items: T[]): T | undefined"
      },
      {
        "id": "ts-generics-utilities-q-03",
        "type": "scenario",
        "prompt": "Scenario: A generic function should accept any object, but it must have an `id` property. What generic feature enforces that?",
        "options": [
          "extends constraint",
          "Required",
          "Readonly",
          "ReturnType"
        ],
        "correctAnswer": "extends constraint",
        "explanation": "An extends constraint limits what types a generic can accept. Example: T extends { id: string }\n\nExample:\nT extends { id: string }"
      },
      {
        "id": "ts-generics-utilities-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: keyof creates a union of the keys of an object type.",
        "correctAnswer": "keyof",
        "acceptedAnswers": [
          "keyof",
          "keyof",
          "keyof"
        ],
        "explanation": "keyof creates a union of the keys of an object type.\n\nExample:\nkeyof User"
      },
      {
        "id": "ts-generics-utilities-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes indexed access type?",
        "options": [
          "Indexed access types read the type of a property from another type.",
          "Function overloads describe multiple call signatures for one implementation.",
          "A tuple type of the function parameter types.",
          "A generic type parameter lets a function or type work with different types while preserving information."
        ],
        "correctAnswer": "Indexed access types read the type of a property from another type.",
        "explanation": "Indexed access types read the type of a property from another type.\n\nExample:\nUser[\"id\"]"
      },
      {
        "id": "ts-generics-utilities-q-06",
        "type": "true-false",
        "prompt": "True or false: Record creates an object type with specific key and value types.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Record creates an object type with specific key and value types.\n\nExample:\nRecord<string, User>"
      },
      {
        "id": "ts-generics-utilities-q-07",
        "type": "scenario",
        "prompt": "Scenario: An update form only sends the fields that changed, not the whole `User` object. Which utility type models this?",
        "options": [
          "Partial",
          "a generic constraint",
          "template literal types",
          "extends constraint"
        ],
        "correctAnswer": "Partial",
        "explanation": "Partial makes every property in a type optional. Example: Partial<User>\n\nExample:\nPartial<User>"
      },
      {
        "id": "ts-generics-utilities-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Required makes every property in a type required.",
        "correctAnswer": "Required",
        "acceptedAnswers": [
          "Required",
          "Required",
          "Required"
        ],
        "explanation": "Required makes every property in a type required.\n\nExample:\nRequired<User>"
      },
      {
        "id": "ts-generics-utilities-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes Pick?",
        "options": [
          "Pick creates a type with only selected properties.",
          "A generic type parameter lets a function or type work with different types while preserving information.",
          "Indexed access types read the type of a property from another type.",
          "Parameters extracts a function’s parameter tuple type."
        ],
        "correctAnswer": "Pick creates a type with only selected properties.",
        "explanation": "Pick creates a type with only selected properties.\n\nExample:\nPick<User, \"id\" | \"name\">"
      },
      {
        "id": "ts-generics-utilities-q-10",
        "type": "true-false",
        "prompt": "True or false: Omit creates a type without selected properties.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Omit creates a type without selected properties.\n\nExample:\nOmit<User, \"password\">"
      },
      {
        "id": "ts-generics-utilities-q-11",
        "type": "scenario",
        "prompt": "Scenario: You want TypeScript to stop code from accidentally changing a config object after creation. Which utility type helps?",
        "options": [
          "Readonly",
          "keyof typeof",
          "a generic constraint",
          "template literal types"
        ],
        "correctAnswer": "Readonly",
        "explanation": "Readonly makes all properties readonly. Example: Readonly<User>\n\nExample:\nReadonly<User>"
      },
      {
        "id": "ts-generics-utilities-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: ReturnType extracts the return type of a function.",
        "correctAnswer": "ReturnType",
        "acceptedAnswers": [
          "ReturnType",
          "ReturnType",
          "ReturnType"
        ],
        "explanation": "ReturnType extracts the return type of a function.\n\nExample:\nReturnType<typeof getUser>"
      },
      {
        "id": "ts-generics-utilities-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes Parameters?",
        "options": [
          "Parameters extracts a function’s parameter tuple type.",
          "Function overloads describe multiple call signatures for one implementation.",
          "A tuple type of the function parameter types.",
          "A generic type parameter lets a function or type work with different types while preserving information."
        ],
        "correctAnswer": "Parameters extracts a function’s parameter tuple type.",
        "explanation": "Parameters extracts a function’s parameter tuple type.\n\nExample:\nParameters<typeof search>"
      },
      {
        "id": "ts-generics-utilities-q-14",
        "type": "true-false",
        "prompt": "True or false: Awaited unwraps the resolved type of a Promise.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Awaited unwraps the resolved type of a Promise.\n\nExample:\nAwaited<Promise<User>>"
      },
      {
        "id": "ts-generics-utilities-q-15",
        "type": "scenario",
        "prompt": "Scenario: A type is `string | null | undefined`, but after validation you want just `string`. Which utility type removes null and undefined?",
        "options": [
          "NonNullable",
          "mapped types",
          "conditional types",
          "type-safe API response"
        ],
        "correctAnswer": "NonNullable",
        "explanation": "NonNullable removes null and undefined from a type. Example: NonNullable<string | null>\n\nExample:\nNonNullable<string | null>"
      },
      {
        "id": "ts-generics-utilities-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Extract keeps union members assignable to another type.",
        "correctAnswer": "Extract",
        "acceptedAnswers": [
          "Extract",
          "Extract",
          "Extract"
        ],
        "explanation": "Extract keeps union members assignable to another type.\n\nExample:\nExtract<Event, ClickEvent>"
      },
      {
        "id": "ts-generics-utilities-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes Exclude?",
        "options": [
          "Exclude removes union members assignable to another type.",
          "A generic type parameter lets a function or type work with different types while preserving information.",
          "Indexed access types read the type of a property from another type.",
          "Pick creates a type with only selected properties."
        ],
        "correctAnswer": "Exclude removes union members assignable to another type.",
        "explanation": "Exclude removes union members assignable to another type.\n\nExample:\nExclude<Status, \"loading\">"
      },
      {
        "id": "ts-generics-utilities-q-18",
        "type": "true-false",
        "prompt": "True or false: Template literal types build string types from other types.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Template literal types build string types from other types.\n\nExample:\n`user:${string}`"
      },
      {
        "id": "ts-generics-utilities-q-19",
        "type": "scenario",
        "prompt": "Scenario: You want to create a new type by transforming every property in an existing type. What TypeScript feature does this?",
        "options": [
          "mapped types",
          "ReturnType",
          "NonNullable",
          "Extract"
        ],
        "correctAnswer": "mapped types",
        "explanation": "Mapped types create new object types by looping over keys. Example: { [K in keyof User]: boolean }\n\nExample:\n{ [K in keyof User]: boolean }"
      },
      {
        "id": "ts-generics-utilities-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Conditional types choose one type or another based on a type relationship.",
        "correctAnswer": "conditional types",
        "acceptedAnswers": [
          "conditional types",
          "conditional types",
          "conditional types"
        ],
        "explanation": "Conditional types choose one type or another based on a type relationship.\n\nExample:\nT extends string ? A : B"
      },
      {
        "id": "ts-generics-utilities-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes generic default?",
        "options": [
          "Generic defaults provide a fallback type argument.",
          "Exclude removes union members assignable to another type.",
          "Function overloads describe multiple call signatures for one implementation.",
          "A tuple type of the function parameter types."
        ],
        "correctAnswer": "Generic defaults provide a fallback type argument.",
        "explanation": "Generic defaults provide a fallback type argument.\n\nExample:\ntype ApiResponse<T = unknown>"
      },
      {
        "id": "ts-generics-utilities-q-22",
        "type": "true-false",
        "prompt": "True or false: Generic props let reusable components preserve the item type they render.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Generic props let reusable components preserve the item type they render.\n\nExample:\nList<T>"
      },
      {
        "id": "ts-generics-utilities-q-23",
        "type": "scenario",
        "prompt": "Scenario: Your API response should be typed so the UI knows `data`, `error`, and loading states safely. What are you aiming for?",
        "options": [
          "type-safe API response",
          "Required",
          "Readonly",
          "ReturnType"
        ],
        "correctAnswer": "type-safe API response",
        "explanation": "A generic API response type can describe success data while reusing the wrapper shape. Example: ApiResponse<Device[]>\n\nExample:\nApiResponse<Device[]>"
      },
      {
        "id": "ts-generics-utilities-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Generic values may still need runtime checks before you use specific properties.",
        "correctAnswer": "narrowing generic values",
        "acceptedAnswers": [
          "narrowing generic values",
          "narrowing generic values",
          "narrowing generic values"
        ],
        "explanation": "Generic values may still need runtime checks before you use specific properties.\n\nExample:\nif (typeof value === \"string\")"
      },
      {
        "id": "ts-generics-utilities-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes overloads?",
        "options": [
          "Function overloads describe multiple call signatures for one implementation.",
          "Parameters extracts a function’s parameter tuple type.",
          "Exclude removes union members assignable to another type.",
          "Generic defaults provide a fallback type argument."
        ],
        "correctAnswer": "Function overloads describe multiple call signatures for one implementation.",
        "explanation": "Function overloads describe multiple call signatures for one implementation.\n\nExample:\nfunction get(id: string): User"
      },
      {
        "id": "ts-generics-utilities-extra-q-awaited-mcq",
        "type": "multiple-choice",
        "prompt": "Which utility type extracts the resolved value type from a Promise-like type?",
        "correctAnswer": "Awaited",
        "explanation": "Awaited<T> unwraps Promise-like types.\n\nExample:\ntype Data = Awaited<ReturnType<typeof fetchUser>>;",
        "options": [
          "Awaited",
          "Partial",
          "Pick",
          "Record"
        ]
      },
      {
        "id": "ts-generics-utilities-extra-q-keyof-typeof-type",
        "type": "type-answer",
        "prompt": "Type the pattern that gets keys from a runtime object as a union type, using two TypeScript operators.",
        "correctAnswer": "keyof typeof",
        "explanation": "keyof typeof objectName creates a union of that object’s keys.\n\nExample:\nconst routes = { home: \"/\", settings: \"/settings\" } as const;\ntype RouteName = keyof typeof routes;",
        "acceptedAnswers": [
          "keyof typeof",
          "keyof typeof object"
        ]
      },
      {
        "id": "ts-generics-utilities-extra-q-constraint-scenario",
        "type": "scenario",
        "prompt": "You write a generic function that must read item.id. What should you add to the generic type?",
        "correctAnswer": "a generic constraint",
        "explanation": "A constraint like T extends { id: string } tells TypeScript id is safe to access.\n\nExample:\nfunction getId<T extends { id: string }>(item: T) { return item.id; }",
        "options": [
          "a generic constraint",
          "a CSS class",
          "a POST request",
          "a Promise.all call"
        ]
      },
      {
        "id": "ts-generics-utilities-extra-q-returntype-tf",
        "type": "true-false",
        "prompt": "True or false: ReturnType<typeof fn> can help avoid manually duplicating a function’s return type.",
        "correctAnswer": "True",
        "explanation": "ReturnType derives the result type from an existing function.\n\nExample:\ntype Result = ReturnType<typeof createUser>;",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "ts-generics-utilities-extra-q-template-literal-mcq",
        "type": "multiple-choice",
        "prompt": "Which TypeScript feature can create types like `${string}Changed`?",
        "correctAnswer": "template literal types",
        "explanation": "Template literal types compose string literal types.\n\nExample:\ntype EventName = `${string}Changed`;",
        "options": [
          "template literal types",
          "enum reverse mapping",
          "Promise generics",
          "optional chaining"
        ]
      },
      {
        "id": "ts-generics-utilities-extra-q-parameters-purpose",
        "type": "multiple-choice",
        "prompt": "What does Parameters<typeof fn> return?",
        "correctAnswer": "A tuple type of the function parameter types.",
        "explanation": "Parameters extracts the argument types of a function.\n\nExample:\ntype Args = Parameters<typeof saveUser>;",
        "options": [
          "A tuple type of the function parameter types.",
          "The function return type.",
          "The keys of an object.",
          "The resolved value of a promise."
        ]
      }
    ]
  },
  {
    "id": "frontend-components-events",
    "title": "Frontend Components, DOM & Events",
    "description": "Learn UI state, props, events and accessibility ideas used in component work",
    "flashcards": [
      {
        "id": "frontend-components-events-card-01",
        "front": "What should you know about component?",
        "back": "A component is a reusable piece of UI with its own structure, inputs and behaviour.",
        "example": "<Button />"
      },
      {
        "id": "frontend-components-events-card-02",
        "front": "What should you know about props?",
        "back": "Props are inputs passed into a component by its parent.",
        "example": "<Button label=\"Save\" />"
      },
      {
        "id": "frontend-components-events-card-03",
        "front": "What should you know about state?",
        "back": "State is data a component owns that can change over time and affect rendering.",
        "example": "const [open, setOpen] = useState(false)"
      },
      {
        "id": "frontend-components-events-card-04",
        "front": "What should you know about derived state?",
        "back": "Derived state is calculated from existing data instead of stored separately.",
        "example": "const completed = tasks.filter(t=>t.done).length"
      },
      {
        "id": "frontend-components-events-card-05",
        "front": "What should you know about rendering?",
        "back": "Rendering means turning component state and props into UI.",
        "example": "return <h1>{title}</h1>"
      },
      {
        "id": "frontend-components-events-card-06",
        "front": "What should you know about conditional rendering?",
        "back": "Conditional rendering shows different UI depending on state or props.",
        "example": "isLoading ? <Spinner /> : <Content />"
      },
      {
        "id": "frontend-components-events-card-07",
        "front": "What should you know about list rendering?",
        "back": "List rendering turns arrays of data into repeated UI elements.",
        "example": "items.map(item => <Row key={item.id} />)"
      },
      {
        "id": "frontend-components-events-card-08",
        "front": "What should you know about key prop?",
        "back": "A key helps React track list items between renders. Use stable ids rather than array indexes when possible.",
        "example": "key={user.id}"
      },
      {
        "id": "frontend-components-events-card-09",
        "front": "What should you know about event handler?",
        "back": "An event handler is a function that runs when a user or browser event happens.",
        "example": "onClick={handleClick}"
      },
      {
        "id": "frontend-components-events-card-10",
        "front": "What should you know about event object?",
        "back": "The event object contains information about the event, such as target or input value.",
        "example": "event.target.value"
      },
      {
        "id": "frontend-components-events-card-11",
        "front": "What should you know about preventDefault?",
        "back": "preventDefault stops a browser’s default behaviour, such as form submission reloading the page.",
        "example": "event.preventDefault()"
      },
      {
        "id": "frontend-components-events-card-12",
        "front": "What should you know about controlled input?",
        "back": "A controlled input gets its value from state and updates state on change.",
        "example": "value={name} onChange={...}"
      },
      {
        "id": "frontend-components-events-card-13",
        "front": "What should you know about form validation?",
        "back": "Form validation checks user input before submitting or saving.",
        "example": "if (!email) setError(...)"
      },
      {
        "id": "frontend-components-events-card-14",
        "front": "What should you know about CustomEvent?",
        "back": "CustomEvent lets web components send named events with custom detail data.",
        "example": "new CustomEvent(\"change\", { detail })"
      },
      {
        "id": "frontend-components-events-card-15",
        "front": "What should you know about event bubbling?",
        "back": "Event bubbling means events move from the target element up through ancestors.",
        "example": "click on child bubbles to parent"
      },
      {
        "id": "frontend-components-events-card-16",
        "front": "What should you know about accessibility?",
        "back": "Accessibility means building UI that works for keyboard, screen reader and disabled users.",
        "example": "button not clickable div"
      },
      {
        "id": "frontend-components-events-card-17",
        "front": "What should you know about semantic HTML?",
        "back": "Semantic HTML uses elements according to meaning, which improves accessibility and maintainability.",
        "example": "<button>, <nav>, <main>"
      },
      {
        "id": "frontend-components-events-card-18",
        "front": "What should you know about aria-label?",
        "back": "aria-label gives an accessible name when visible text is not enough.",
        "example": "aria-label=\"Close dialog\""
      },
      {
        "id": "frontend-components-events-card-19",
        "front": "What should you know about focus state?",
        "back": "Focus state shows which interactive element currently has keyboard focus.",
        "example": "button:focus-visible"
      },
      {
        "id": "frontend-components-events-card-20",
        "front": "What should you know about loading UI?",
        "back": "Loading UI communicates that work is happening and prevents confusion.",
        "example": "disabled save button"
      },
      {
        "id": "frontend-components-events-card-21",
        "front": "What should you know about empty UI?",
        "back": "Empty UI explains that there is no data and often suggests the next action.",
        "example": "No devices yet"
      },
      {
        "id": "frontend-components-events-card-22",
        "front": "What should you know about error UI?",
        "back": "Error UI explains failure and offers recovery when possible.",
        "example": "Retry button"
      },
      {
        "id": "frontend-components-events-card-23",
        "front": "What should you know about component composition?",
        "back": "Composition builds complex UI by combining smaller components.",
        "example": "<Card><Button /></Card>"
      },
      {
        "id": "frontend-components-events-card-24",
        "front": "What should you know about prop drilling?",
        "back": "Prop drilling means passing props through layers just to reach a deep child.",
        "example": "App -> Layout -> Panel -> Button"
      },
      {
        "id": "frontend-components-events-card-25",
        "front": "What should you know about side effects?",
        "back": "Side effects are work outside rendering, like fetching data or updating document title.",
        "example": "useEffect(() => {}, [])"
      },
      {
        "id": "frontend-components-events-extra-card-controlled-input",
        "front": "What is a controlled input?",
        "back": "A controlled input gets its value from component state and updates that state on change. This makes the UI source of truth explicit.",
        "example": "<input value={name} onChange={e => setName(e.target.value)} />"
      },
      {
        "id": "frontend-components-events-extra-card-derived-state",
        "front": "What is derived state?",
        "back": "Derived state is calculated from existing props or state instead of being stored separately. Storing it unnecessarily can cause bugs when values get out of sync.",
        "example": "const completedCount = todos.filter(t => t.done).length;"
      },
      {
        "id": "frontend-components-events-extra-card-focus-management",
        "front": "Why is focus management important?",
        "back": "Focus management helps keyboard and assistive technology users understand where they are, especially after opening modals, changing routes or showing errors.",
        "example": "Move focus to a modal heading when the modal opens."
      },
      {
        "id": "frontend-components-events-extra-card-aria-live",
        "front": "What is aria-live?",
        "back": "aria-live tells screen readers that dynamic content has changed. It is useful for form errors, toast messages and quiz feedback.",
        "example": "<div aria-live=\"polite\">Saved successfully</div>"
      },
      {
        "id": "frontend-components-events-extra-card-event-delegation",
        "front": "What is event delegation?",
        "back": "Event delegation attaches one handler to a parent and uses event.target to handle child interactions. It can reduce many repeated listeners.",
        "example": "list.addEventListener(\"click\", event => { ... });"
      },
      {
        "id": "frontend-components-events-extra-card-state-machine",
        "front": "Why use state-machine thinking?",
        "back": "State-machine thinking lists allowed states and transitions. It avoids impossible UI combinations like loading and success at the same time.",
        "example": "idle -> loading -> success | error"
      },
      {
        "id": "frontend-components-events-extra-card-memoization",
        "front": "What is memoization in UI code?",
        "back": "Memoization caches expensive calculations or stable references. Use it when it solves a real performance or rerender problem, not automatically everywhere.",
        "example": "useMemo(() => expensiveFilter(items), [items])"
      },
      {
        "id": "frontend-components-events-extra-card-shadow-dom",
        "front": "What is the Shadow DOM?",
        "back": "The Shadow DOM lets web components encapsulate markup and styles so they do not easily clash with the rest of the page.",
        "example": "class MyCard extends HTMLElement { attachShadow({ mode: \"open\" }); }"
      }
    ],
    "questions": [
      {
        "id": "frontend-components-events-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes component?",
        "options": [
          "A component is a reusable piece of UI with its own structure, inputs and behaviour.",
          "An event handler is a function that runs when a user or browser event happens.",
          "Form validation checks user input before submitting or saving.",
          "Semantic HTML uses elements according to meaning, which improves accessibility and maintainability."
        ],
        "correctAnswer": "A component is a reusable piece of UI with its own structure, inputs and behaviour.",
        "explanation": "A component is a reusable piece of UI with its own structure, inputs and behaviour.\n\nExample:\n<Button />"
      },
      {
        "id": "frontend-components-events-q-02",
        "type": "true-false",
        "prompt": "True or false: Props are inputs passed into a component by its parent.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Props are inputs passed into a component by its parent.\n\nExample:\n<Button label=\"Save\" />"
      },
      {
        "id": "frontend-components-events-q-03",
        "type": "scenario",
        "prompt": "Scenario: A counter value changes after a button click and the UI needs to re-render with the new value. What should hold that changing value?",
        "options": [
          "state",
          "preventDefault",
          "controlled input",
          "event bubbling"
        ],
        "correctAnswer": "state",
        "explanation": "State is data a component owns that can change over time and affect rendering. Example: const [open, setOpen] = useState(false)\n\nExample:\nconst [open, setOpen] = useState(false)"
      },
      {
        "id": "frontend-components-events-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Derived state is calculated from existing data instead of stored separately.",
        "correctAnswer": "derived state",
        "acceptedAnswers": [
          "derived state",
          "derived state",
          "derived state"
        ],
        "explanation": "Derived state is calculated from existing data instead of stored separately.\n\nExample:\nconst completed = tasks.filter(t=>t.done).length"
      },
      {
        "id": "frontend-components-events-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes rendering?",
        "options": [
          "Rendering means turning component state and props into UI.",
          "It encapsulates component markup and styles.",
          "A component is a reusable piece of UI with its own structure, inputs and behaviour.",
          "An event handler is a function that runs when a user or browser event happens."
        ],
        "correctAnswer": "Rendering means turning component state and props into UI.",
        "explanation": "Rendering means turning component state and props into UI.\n\nExample:\nreturn <h1>{title}</h1>"
      },
      {
        "id": "frontend-components-events-q-06",
        "type": "true-false",
        "prompt": "True or false: Conditional rendering shows different UI depending on state or props.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Conditional rendering shows different UI depending on state or props.\n\nExample:\nisLoading ? <Spinner /> : <Content />"
      },
      {
        "id": "frontend-components-events-q-07",
        "type": "scenario",
        "prompt": "Scenario: You have an array of products and need to display one card for each product in the UI. What is this called?",
        "options": [
          "list rendering",
          "controlled input",
          "event bubbling",
          "accessibility"
        ],
        "correctAnswer": "list rendering",
        "explanation": "List rendering turns arrays of data into repeated UI elements. Example: items.map(item => <Row key={item.id} />)\n\nExample:\nitems.map(item => <Row key={item.id} />)"
      },
      {
        "id": "frontend-components-events-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A key helps React track list items between renders.",
        "correctAnswer": "key prop",
        "acceptedAnswers": [
          "key prop",
          "key prop",
          "key prop"
        ],
        "explanation": "A key helps React track list items between renders. Use stable ids rather than array indexes when possible.\n\nExample:\nkey={user.id}"
      },
      {
        "id": "frontend-components-events-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes event handler?",
        "options": [
          "An event handler is a function that runs when a user or browser event happens.",
          "Semantic HTML uses elements according to meaning, which improves accessibility and maintainability.",
          "Empty UI explains that there is no data and often suggests the next action.",
          "Side effects are work outside rendering, like fetching data or updating document title."
        ],
        "correctAnswer": "An event handler is a function that runs when a user or browser event happens.",
        "explanation": "An event handler is a function that runs when a user or browser event happens.\n\nExample:\nonClick={handleClick}"
      },
      {
        "id": "frontend-components-events-q-10",
        "type": "true-false",
        "prompt": "True or false: The event object contains information about the event, such as target or input value.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The event object contains information about the event, such as target or input value.\n\nExample:\nevent.target.value"
      },
      {
        "id": "frontend-components-events-q-11",
        "type": "scenario",
        "prompt": "Scenario: A form submit would reload the page, but you want JavaScript to handle the submit instead. What method should you call?",
        "options": [
          "preventDefault",
          "state machine",
          "state",
          "derived state"
        ],
        "correctAnswer": "preventDefault",
        "explanation": "preventDefault stops a browser’s default behaviour, such as form submission reloading the page. Example: event.preventDefault()\n\nExample:\nevent.preventDefault()"
      },
      {
        "id": "frontend-components-events-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A controlled input gets its value from state and updates state on change.",
        "correctAnswer": "controlled input",
        "acceptedAnswers": [
          "controlled input",
          "controlled input",
          "controlled input"
        ],
        "explanation": "A controlled input gets its value from state and updates state on change.\n\nExample:\nvalue={name} onChange={...}"
      },
      {
        "id": "frontend-components-events-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes form validation?",
        "options": [
          "Form validation checks user input before submitting or saving.",
          "A component is a reusable piece of UI with its own structure, inputs and behaviour.",
          "Rendering means turning component state and props into UI.",
          "An event handler is a function that runs when a user or browser event happens."
        ],
        "correctAnswer": "Form validation checks user input before submitting or saving.",
        "explanation": "Form validation checks user input before submitting or saving.\n\nExample:\nif (!email) setError(...)"
      },
      {
        "id": "frontend-components-events-q-14",
        "type": "true-false",
        "prompt": "True or false: CustomEvent lets web components send named events with custom detail data.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "CustomEvent lets web components send named events with custom detail data.\n\nExample:\nnew CustomEvent(\"change\", { detail })"
      },
      {
        "id": "frontend-components-events-q-15",
        "type": "scenario",
        "prompt": "Scenario: Clicking a button inside a card also triggers the card's click handler because the event travels upward. What is happening?",
        "options": [
          "event bubbling",
          "list rendering",
          "key prop",
          "preventDefault"
        ],
        "correctAnswer": "event bubbling",
        "explanation": "Event bubbling means events move from the target element up through ancestors. Example: click on child bubbles to parent\n\nExample:\nclick on child bubbles to parent"
      },
      {
        "id": "frontend-components-events-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Accessibility means building UI that works for keyboard, screen reader and disabled users.",
        "correctAnswer": "accessibility",
        "acceptedAnswers": [
          "accessibility",
          "accessibility",
          "accessibility"
        ],
        "explanation": "Accessibility means building UI that works for keyboard, screen reader and disabled users.\n\nExample:\nbutton not clickable div"
      },
      {
        "id": "frontend-components-events-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes semantic HTML?",
        "options": [
          "Semantic HTML uses elements according to meaning, which improves accessibility and maintainability.",
          "Its value comes from state and changes update that state.",
          "It encapsulates component markup and styles.",
          "A component is a reusable piece of UI with its own structure, inputs and behaviour."
        ],
        "correctAnswer": "Semantic HTML uses elements according to meaning, which improves accessibility and maintainability.",
        "explanation": "Semantic HTML uses elements according to meaning, which improves accessibility and maintainability.\n\nExample:\n<button>, <nav>, <main>"
      },
      {
        "id": "frontend-components-events-q-18",
        "type": "true-false",
        "prompt": "True or false: aria-label gives an accessible name when visible text is not enough.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "aria-label gives an accessible name when visible text is not enough.\n\nExample:\naria-label=\"Close dialog\""
      },
      {
        "id": "frontend-components-events-q-19",
        "type": "scenario",
        "prompt": "Scenario: A keyboard user tabs onto an input and it shows an outline to indicate it is active. What state is this?",
        "options": [
          "focus state",
          "list rendering",
          "key prop",
          "preventDefault"
        ],
        "correctAnswer": "focus state",
        "explanation": "Focus state shows which interactive element currently has keyboard focus. Example: button:focus-visible\n\nExample:\nbutton:focus-visible"
      },
      {
        "id": "frontend-components-events-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Loading UI communicates that work is happening and prevents confusion.",
        "correctAnswer": "loading UI",
        "acceptedAnswers": [
          "loading UI",
          "loading UI",
          "loading UI"
        ],
        "explanation": "Loading UI communicates that work is happening and prevents confusion.\n\nExample:\ndisabled save button"
      },
      {
        "id": "frontend-components-events-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes empty UI?",
        "options": [
          "Empty UI explains that there is no data and often suggests the next action.",
          "Side effects are work outside rendering, like fetching data or updating document title.",
          "Its value comes from state and changes update that state.",
          "It encapsulates component markup and styles."
        ],
        "correctAnswer": "Empty UI explains that there is no data and often suggests the next action.",
        "explanation": "Empty UI explains that there is no data and often suggests the next action.\n\nExample:\nNo devices yet"
      },
      {
        "id": "frontend-components-events-q-22",
        "type": "true-false",
        "prompt": "True or false: Error UI explains failure and offers recovery when possible.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Error UI explains failure and offers recovery when possible.\n\nExample:\nRetry button"
      },
      {
        "id": "frontend-components-events-q-23",
        "type": "scenario",
        "prompt": "Scenario: You build a page by combining smaller reusable pieces like `Header`, `Card`, and `Button`. What approach is this?",
        "options": [
          "component composition",
          "list rendering",
          "key prop",
          "preventDefault"
        ],
        "correctAnswer": "component composition",
        "explanation": "Composition builds complex UI by combining smaller components. Example: <Card><Button /></Card>\n\nExample:\n<Card><Button /></Card>"
      },
      {
        "id": "frontend-components-events-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Prop drilling means passing props through layers just to reach a deep child.",
        "correctAnswer": "prop drilling",
        "acceptedAnswers": [
          "prop drilling",
          "prop drilling",
          "prop drilling"
        ],
        "explanation": "Prop drilling means passing props through layers just to reach a deep child.\n\nExample:\nApp -> Layout -> Panel -> Button"
      },
      {
        "id": "frontend-components-events-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes side effects?",
        "options": [
          "Side effects are work outside rendering, like fetching data or updating document title.",
          "A component is a reusable piece of UI with its own structure, inputs and behaviour.",
          "Rendering means turning component state and props into UI.",
          "An event handler is a function that runs when a user or browser event happens."
        ],
        "correctAnswer": "Side effects are work outside rendering, like fetching data or updating document title.",
        "explanation": "Side effects are work outside rendering, like fetching data or updating document title.\n\nExample:\nuseEffect(() => {}, [])"
      },
      {
        "id": "frontend-components-events-extra-q-controlled-input-mcq",
        "type": "multiple-choice",
        "prompt": "What makes an input controlled?",
        "correctAnswer": "Its value comes from state and changes update that state.",
        "explanation": "Controlled inputs use state as the source of truth.\n\nExample:\n<input value={name} onChange={e => setName(e.target.value)} />",
        "options": [
          "Its value comes from state and changes update that state.",
          "It has no event handlers.",
          "It only works in HTML forms without JavaScript.",
          "It is controlled by CSS media queries."
        ]
      },
      {
        "id": "frontend-components-events-extra-q-aria-live-type",
        "type": "type-answer",
        "prompt": "Type the ARIA attribute used to announce dynamic updates to screen readers.",
        "correctAnswer": "aria-live",
        "explanation": "aria-live tells assistive tech about updated content.\n\nExample:\n<div aria-live=\"polite\">Saved successfully</div>",
        "acceptedAnswers": [
          "aria-live",
          "aria live"
        ]
      },
      {
        "id": "frontend-components-events-extra-q-derived-state-tf",
        "type": "true-false",
        "prompt": "True or false: You should always store filtered counts in state even when they can be calculated from existing state.",
        "correctAnswer": "False",
        "explanation": "Derived values should often be calculated from source state to avoid sync bugs.\n\nExample:\nconst [open, setOpen] = useState(false)",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "frontend-components-events-extra-q-delegation-scenario",
        "type": "scenario",
        "prompt": "A list has 500 clickable rows. Instead of attaching 500 listeners, what pattern can attach one listener to the parent?",
        "correctAnswer": "event delegation",
        "explanation": "Event delegation handles child events from a shared parent listener.\n\nExample:\nlist.addEventListener(\"click\", event => { ... });",
        "options": [
          "event delegation",
          "HTTP polling",
          "type assertion",
          "deep cloning"
        ]
      },
      {
        "id": "frontend-components-events-extra-q-state-machine-scenario",
        "type": "scenario",
        "prompt": "Your UI can accidentally show loading and success at the same time. What thinking model can prevent impossible state combinations?",
        "correctAnswer": "state machine",
        "explanation": "A state machine defines one current state and valid transitions between states.\n\nExample:\nidle -> loading -> success | error",
        "options": [
          "state machine",
          "array sorting",
          "CORS preflight",
          "semantic versioning"
        ]
      },
      {
        "id": "frontend-components-events-extra-q-shadow-dom-purpose",
        "type": "multiple-choice",
        "prompt": "What is a major benefit of the Shadow DOM?",
        "correctAnswer": "It encapsulates component markup and styles.",
        "explanation": "Shadow DOM helps web components avoid style and DOM clashes with the page.\n\nExample:\nclass MyCard extends HTMLElement { attachShadow({ mode: \"open\" }); }",
        "options": [
          "It encapsulates component markup and styles.",
          "It stores API tokens securely.",
          "It replaces HTTP requests.",
          "It automatically writes tests."
        ]
      }
    ]
  },
  {
    "id": "react-ui-patterns",
    "title": "React & UI Engineering Patterns",
    "description": "Practise the React and UI patterns junior developers use in real product code.",
    "flashcards": [
      {
        "id": "react-ui-patterns-extra-card-01-components",
        "front": "What is a React component?",
        "back": "A component is a reusable piece of UI described by a function. It receives inputs through props and returns what should be shown.",
        "example": "function Badge({ label }) { return <span>{label}</span>; }"
      },
      {
        "id": "react-ui-patterns-extra-card-02-props",
        "front": "What are props?",
        "back": "Props are read-only inputs passed from a parent component to a child component. They let components be reusable with different data.",
        "example": "<UserCard name=\"Jay\" />"
      },
      {
        "id": "react-ui-patterns-extra-card-03-state",
        "front": "What is state?",
        "back": "State is data a component owns that can change over time and cause the UI to rerender.",
        "example": "const [count, setCount] = useState(0);"
      },
      {
        "id": "react-ui-patterns-extra-card-04-effect",
        "front": "What is useEffect for?",
        "back": "useEffect runs side effects after rendering, such as subscribing to events, syncing document title or fetching data when inputs change.",
        "example": "useEffect(() => { document.title = title; }, [title]);"
      },
      {
        "id": "react-ui-patterns-extra-card-05-effect-cleanup",
        "front": "Why clean up effects?",
        "back": "Cleanup prevents leaks and duplicate subscriptions when a component unmounts or effect dependencies change.",
        "example": "return () => window.removeEventListener(\"resize\", onResize);"
      },
      {
        "id": "react-ui-patterns-extra-card-06-keys",
        "front": "Why do lists need keys?",
        "back": "Keys help React match list items between renders. Stable keys prevent wrong items being reused when lists reorder.",
        "example": "items.map(item => <Row key={item.id} item={item} />)"
      },
      {
        "id": "react-ui-patterns-extra-card-07-lifting-state",
        "front": "What is lifting state up?",
        "back": "Lifting state up means moving shared state to the nearest common parent so multiple children can use or update it.",
        "example": "Parent owns selectedId; list and details receive it."
      },
      {
        "id": "react-ui-patterns-extra-card-08-composition",
        "front": "What is composition?",
        "back": "Composition builds complex UI by combining small components instead of making one huge component.",
        "example": "<Card><Profile /></Card>"
      },
      {
        "id": "react-ui-patterns-extra-card-09-conditional-render",
        "front": "What is conditional rendering?",
        "back": "Conditional rendering shows different UI based on state, props or permissions.",
        "example": "{isLoading ? <Spinner /> : <Content />}"
      },
      {
        "id": "react-ui-patterns-extra-card-10-custom-hook",
        "front": "What is a custom hook?",
        "back": "A custom hook is a function starting with use that reuses stateful logic between components.",
        "example": "function useWindowSize() { ... }"
      },
      {
        "id": "react-ui-patterns-extra-card-11-context",
        "front": "When use Context?",
        "back": "Context passes values through a component tree without manually passing props at every level. Use it for shared values like theme or auth, not every local state value.",
        "example": "const ThemeContext = createContext(\"light\");"
      },
      {
        "id": "react-ui-patterns-extra-card-12-rerender",
        "front": "What causes a rerender?",
        "back": "A component rerenders when its state changes, its parent rerenders, or subscribed context changes.",
        "example": "setCount(count + 1)"
      },
      {
        "id": "react-ui-patterns-extra-card-13-derived-props",
        "front": "Avoid copying props to state?",
        "back": "Copying props into state often creates stale duplicates. Prefer deriving values during render unless the user is editing a local draft.",
        "example": "const fullName = `${first} ${last}`;"
      },
      {
        "id": "react-ui-patterns-extra-card-14-error-boundary",
        "front": "What is an error boundary?",
        "back": "An error boundary catches rendering errors in part of a React tree and shows fallback UI instead of crashing the whole app.",
        "example": "<ErrorBoundary fallback={<ErrorPage />}>"
      },
      {
        "id": "react-ui-patterns-extra-card-15-forms",
        "front": "Controlled vs uncontrolled forms?",
        "back": "Controlled forms store values in React state. Uncontrolled forms let the DOM keep the value and read it through refs when needed.",
        "example": "const value = inputRef.current?.value;"
      },
      {
        "id": "react-ui-patterns-extra-card-16-optimistic-ui",
        "front": "What is optimistic UI?",
        "back": "Optimistic UI updates immediately before the server confirms success. If the request fails, the UI must roll back or show an error.",
        "example": "Show new todo immediately, then remove it if save fails."
      },
      {
        "id": "react-ui-patterns-extra-card-17-suspense",
        "front": "What is Suspense conceptually?",
        "back": "Suspense lets parts of the UI show fallback content while waiting for async data or lazy-loaded code, depending on framework support.",
        "example": "<Suspense fallback={<Spinner />}>"
      },
      {
        "id": "react-ui-patterns-extra-card-18-lazy",
        "front": "Why lazy-load components?",
        "back": "Lazy loading splits code so users download heavy screens only when needed, improving initial load time.",
        "example": "const Settings = lazy(() => import(\"./Settings\"));"
      },
      {
        "id": "react-ui-patterns-extra-card-19-prop-drilling",
        "front": "What is prop drilling?",
        "back": "Prop drilling is passing props through many layers that do not use them, just to reach a deep child. Sometimes composition or context can help.",
        "example": "App -> Layout -> Panel -> Button"
      },
      {
        "id": "react-ui-patterns-extra-card-20-component-api",
        "front": "What makes a good component API?",
        "back": "A good component API has clear prop names, sensible defaults, predictable behaviour and avoids exposing unnecessary internal details.",
        "example": "<Button variant=\"primary\" size=\"sm\" disabled />"
      },
      {
        "id": "react-ui-patterns-extra-card-21-accessibility-props",
        "front": "Why pass accessible labels?",
        "back": "Icon-only buttons and custom controls need accessible names so screen reader users know what they do.",
        "example": "<button aria-label=\"Close dialog\">×</button>"
      },
      {
        "id": "react-ui-patterns-extra-card-22-rendering-cost",
        "front": "What is rendering cost?",
        "back": "Rendering cost is the time spent recalculating and updating UI. Large lists, expensive calculations and unnecessary rerenders can make apps feel slow.",
        "example": "Virtualise a list with thousands of rows."
      },
      {
        "id": "react-ui-patterns-extra-card-23-use-ref",
        "front": "What is useRef for?",
        "back": "useRef stores a mutable value that persists between renders without causing a rerender. It is commonly used for DOM nodes and timers.",
        "example": "const inputRef = useRef<HTMLInputElement>(null);"
      },
      {
        "id": "react-ui-patterns-extra-card-24-separation",
        "front": "Why separate container and presentational concerns?",
        "back": "Separating data/loading logic from display components can make UI easier to test and reuse. It is a pattern, not a strict rule.",
        "example": "UserPage fetches; UserCard displays."
      },
      {
        "id": "react-ui-patterns-extra-card-25-component-tests",
        "front": "What should component tests check?",
        "back": "Component tests should check user-visible behaviour: what appears, what can be clicked, and how the UI responds.",
        "example": "expect(screen.getByRole(\"button\", { name: /save/i })).toBeEnabled();"
      }
    ],
    "questions": [
      {
        "id": "react-ui-patterns-extra-q-01-props",
        "type": "multiple-choice",
        "prompt": "What are props in React?",
        "correctAnswer": "Read-only inputs passed from a parent to a child component.",
        "explanation": "Props configure components and should not be mutated by the child.\n\nExample:\n<UserCard name=\"Jay\" />",
        "options": [
          "Read-only inputs passed from a parent to a child component.",
          "A database table.",
          "A CSS-only animation.",
          "A browser storage API."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-02-state",
        "type": "type-answer",
        "prompt": "Type the React hook commonly used for local component state.",
        "correctAnswer": "useState",
        "explanation": "useState stores state and gives you a setter to update it. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\nconst [count, setCount] = useState(0);",
        "acceptedAnswers": [
          "useState",
          "usestate"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-03-keys",
        "type": "scenario",
        "prompt": "A list reorders and input values appear attached to the wrong rows. What is a likely issue?",
        "correctAnswer": "unstable keys",
        "explanation": "Using array indexes or unstable keys can cause React to reuse the wrong list items.\n\nExample:\nitems.map(item => <Row key={item.id} item={item} />)",
        "options": [
          "unstable keys",
          "too many CSS variables",
          "wrong HTTP status code",
          "missing JSON.stringify"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-04-effect-cleanup",
        "type": "true-false",
        "prompt": "True or false: Effects that subscribe to external events should usually clean up the subscription.",
        "correctAnswer": "True",
        "explanation": "Cleanup avoids duplicate listeners and memory leaks.\n\nExample:\nreturn () => window.removeEventListener(\"resize\", onResize);",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-05-custom-hook",
        "type": "multiple-choice",
        "prompt": "What is a custom hook mainly used for?",
        "correctAnswer": "Reusing stateful logic between components.",
        "explanation": "Custom hooks extract reusable hook-based logic into a function.\n\nExample:\nfunction useWindowSize() { ... }",
        "options": [
          "Reusing stateful logic between components.",
          "Styling only.",
          "Creating database indexes.",
          "Replacing TypeScript types."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-06-controlled",
        "type": "scenario",
        "prompt": "A form input value comes from React state and updates with onChange. What is this called?",
        "correctAnswer": "controlled input",
        "explanation": "A controlled input uses React state as the source of truth.\n\nExample:\nconst value = inputRef.current?.value;",
        "options": [
          "controlled input",
          "webhook",
          "source map",
          "circuit breaker"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-07-context",
        "type": "multiple-choice",
        "prompt": "When is Context a reasonable fit?",
        "correctAnswer": "Sharing values like theme/auth through many components.",
        "explanation": "Context avoids prop drilling for broadly shared values.\n\nExample:\nconst ThemeContext = createContext(\"light\");",
        "options": [
          "Sharing values like theme/auth through many components.",
          "Replacing every local useState.",
          "Making HTTP requests faster automatically.",
          "Sorting arrays by default."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-08-optimistic",
        "type": "scenario",
        "prompt": "The UI shows a new item immediately before the API confirms it saved. What pattern is this?",
        "correctAnswer": "optimistic UI",
        "explanation": "Optimistic UI improves perceived speed but needs rollback/error handling.\n\nExample:\nShow new todo immediately, then remove it if save fails.",
        "options": [
          "optimistic UI",
          "CSRF",
          "hoisting",
          "offset pagination"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-09-aria-label",
        "type": "type-answer",
        "prompt": "Type the attribute that gives an accessible name to an icon-only button.",
        "correctAnswer": "aria-label",
        "explanation": "aria-label provides a text label for assistive technologies. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\n<button aria-label=\"Close dialog\">×</button>",
        "acceptedAnswers": [
          "aria-label",
          "aria label"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-10-prop-drilling",
        "type": "multiple-choice",
        "prompt": "What is prop drilling?",
        "correctAnswer": "Passing props through layers that do not use them just to reach a deeper child.",
        "explanation": "Prop drilling can sometimes be reduced with composition or context.\n\nExample:\nApp -> Layout -> Panel -> Button",
        "options": [
          "Passing props through layers that do not use them just to reach a deeper child.",
          "Sending props to an API.",
          "Encrypting component props.",
          "Compiling JSX to CSS."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-11-ref",
        "type": "true-false",
        "prompt": "True or false: Updating a useRef value causes a component rerender.",
        "correctAnswer": "False",
        "explanation": "Refs persist between renders but changing ref.current does not trigger a rerender.\n\nExample:\nconst inputRef = useRef<HTMLInputElement>(null);",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-12-lazy",
        "type": "multiple-choice",
        "prompt": "Why lazy-load a large route component?",
        "correctAnswer": "To reduce initial JavaScript downloaded by the user.",
        "explanation": "Lazy loading supports code splitting and can improve initial load.\n\nExample:\nconst Settings = lazy(() => import(\"./Settings\"));",
        "options": [
          "To reduce initial JavaScript downloaded by the user.",
          "To make TypeScript optional.",
          "To disable the browser cache.",
          "To avoid all testing."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-13-error-boundary",
        "type": "type-answer",
        "prompt": "Type the React pattern/component used to catch rendering errors and show fallback UI.",
        "correctAnswer": "error boundary",
        "explanation": "Error boundaries catch render errors in a subtree.\n\nExample:\n<ErrorBoundary fallback={<ErrorPage />}>",
        "acceptedAnswers": [
          "error boundary",
          "error boundaries"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-14-derived",
        "type": "scenario",
        "prompt": "A component stores fullName in state even though it can be calculated from firstName and lastName. What issue might this cause?",
        "correctAnswer": "stale derived state",
        "explanation": "Duplicating derived values in state can get out of sync.\n\nExample:\nconst fullName = `${first} ${last}`;",
        "options": [
          "stale derived state",
          "CORS preflight",
          "HTTP caching",
          "locale sorting"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-15-component-api",
        "type": "multiple-choice",
        "prompt": "Which prop design is clearest for a reusable button?",
        "correctAnswer": "variant=\"primary\" and disabled as explicit props.",
        "explanation": "Clear, predictable props make component usage easier.\n\nExample:\n<Button variant=\"primary\" size=\"sm\" disabled />",
        "options": [
          "variant=\"primary\" and disabled as explicit props.",
          "A prop named x that accepts any value.",
          "Mutating props inside the button.",
          "Hardcoding every button as primary."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-16-tests",
        "type": "scenario",
        "prompt": "A component test clicks Save and checks that a success message appears. What kind of thing is it testing?",
        "correctAnswer": "user-visible behaviour",
        "explanation": "Good component tests focus on behaviour users can observe.\n\nExample:\nexpect(screen.getByRole(\"button\", { name: /save/i })).toBeEnabled();",
        "options": [
          "user-visible behaviour",
          "private implementation details only",
          "database schema migrations",
          "CDN cache headers"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-17-suspense",
        "type": "multiple-choice",
        "prompt": "What does Suspense show while waiting for supported async/lazy content?",
        "correctAnswer": "fallback UI",
        "explanation": "Suspense renders fallback UI while content is not ready.\n\nExample:\n<ErrorBoundary fallback={<ErrorPage />}>",
        "options": [
          "fallback UI",
          "a SQL query",
          "a Git tag",
          "a cookie"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-18-lift",
        "type": "type-answer",
        "prompt": "Type the phrase for moving shared state to the nearest common parent.",
        "correctAnswer": "lifting state up",
        "explanation": "Lifting state up lets multiple children share and update the same source of truth.\n\nExample:\nParent owns selectedId; list and details receive it.",
        "acceptedAnswers": [
          "lifting state up",
          "lift state up"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-19-composition",
        "type": "true-false",
        "prompt": "True or false: Composition means building larger UIs by combining smaller components.",
        "correctAnswer": "True",
        "explanation": "Composition keeps components focused and reusable.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-20-rerender",
        "type": "multiple-choice",
        "prompt": "Which change commonly causes a component to rerender?",
        "correctAnswer": "Its state is updated.",
        "explanation": "State updates cause React to rerender the component.\n\nExample:\nconst [count, setCount] = useState(0);",
        "options": [
          "Its state is updated.",
          "A CSS file exists.",
          "A comment is added to code.",
          "A server returns 204 somewhere else."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-21-effect-deps",
        "type": "scenario",
        "prompt": "An effect reads userId but userId is missing from the dependency array. What risk does this create?",
        "correctAnswer": "stale values",
        "explanation": "Missing dependencies can make effects use old values.\n\nExample:\nconst fullName = `${first} ${last}`;",
        "options": [
          "stale values",
          "automatic encryption",
          "array mutation",
          "semantic version bump"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-22-uncontrolled",
        "type": "multiple-choice",
        "prompt": "How does an uncontrolled input usually keep its current value?",
        "correctAnswer": "In the DOM, read through a ref when needed.",
        "explanation": "Uncontrolled inputs are managed by the DOM rather than React state.\n\nExample:\nconst value = inputRef.current?.value;",
        "options": [
          "In the DOM, read through a ref when needed.",
          "In a CDN.",
          "In TypeScript types at runtime.",
          "In a package-lock file."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-23-memo",
        "type": "true-false",
        "prompt": "True or false: Memoization should be used everywhere by default.",
        "correctAnswer": "False",
        "explanation": "Memoization has complexity and overhead. Use it for real rerender or expensive calculation problems.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-24-container",
        "type": "multiple-choice",
        "prompt": "Why separate data-fetching components from display components?",
        "correctAnswer": "It can make display components easier to reuse and test.",
        "explanation": "Separating concerns keeps UI components focused.\n\nExample:\nUserPage fetches; UserCard displays.",
        "options": [
          "It can make display components easier to reuse and test.",
          "It makes all API calls synchronous.",
          "It removes the need for props.",
          "It prevents every runtime error."
        ]
      },
      {
        "id": "react-ui-patterns-extra-q-25-large-list",
        "type": "scenario",
        "prompt": "A page renders 10,000 rows and scrolling is slow. What UI technique can help?",
        "correctAnswer": "virtualisation",
        "explanation": "Virtualisation renders only the visible rows plus a buffer. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\nVirtualise a list with thousands of rows.",
        "options": [
          "virtualisation",
          "JSON.parse",
          "cookie auth",
          "Object.hasOwn"
        ]
      }
    ]
  },
  {
    "id": "debugging-testing-quality",
    "title": "Debugging, Testing & Code Quality",
    "description": "Build practical habits for finding bugs, writing tests and keeping code readable",
    "flashcards": [
      {
        "id": "debugging-testing-quality-card-01",
        "front": "What should you know about console.log debugging?",
        "back": "console.log helps inspect values quickly, but should not replace proper debugging or tests.",
        "example": "console.log({ user })"
      },
      {
        "id": "debugging-testing-quality-card-02",
        "front": "What should you know about breakpoint?",
        "back": "A breakpoint pauses code so you can inspect variables and step through execution.",
        "example": "DevTools Sources breakpoint"
      },
      {
        "id": "debugging-testing-quality-card-03",
        "front": "What should you know about call stack?",
        "back": "The call stack shows the chain of function calls that led to the current point.",
        "example": "stack trace"
      },
      {
        "id": "debugging-testing-quality-card-04",
        "front": "What should you know about stack trace?",
        "back": "A stack trace shows where an error happened and which calls led there.",
        "example": "Error at saveUser"
      },
      {
        "id": "debugging-testing-quality-card-05",
        "front": "What should you know about Network tab?",
        "back": "The Network tab shows requests, responses, headers, payloads and timing.",
        "example": "DevTools Network"
      },
      {
        "id": "debugging-testing-quality-card-06",
        "front": "What should you know about reproduction steps?",
        "back": "Reproduction steps describe exactly how to trigger a bug.",
        "example": "1. Open page 2. Click Save"
      },
      {
        "id": "debugging-testing-quality-card-07",
        "front": "What should you know about minimal example?",
        "back": "A minimal example removes unrelated code so the cause is easier to find.",
        "example": "small failing snippet"
      },
      {
        "id": "debugging-testing-quality-card-08",
        "front": "What should you know about unit test?",
        "back": "A unit test checks a small function or component behaviour in isolation.",
        "example": "expect(sum(1,2)).toBe(3)"
      },
      {
        "id": "debugging-testing-quality-card-09",
        "front": "What should you know about integration test?",
        "back": "An integration test checks multiple pieces working together.",
        "example": "form submits to service"
      },
      {
        "id": "debugging-testing-quality-card-10",
        "front": "What should you know about end-to-end test?",
        "back": "An end-to-end test checks a realistic user flow through the app.",
        "example": "login and create item"
      },
      {
        "id": "debugging-testing-quality-card-11",
        "front": "What should you know about assertion?",
        "back": "An assertion states what should be true in a test.",
        "example": "expect(result).toEqual(...)"
      },
      {
        "id": "debugging-testing-quality-card-12",
        "front": "What should you know about mock?",
        "back": "A mock replaces a dependency so a test can control or observe it.",
        "example": "mock fetch"
      },
      {
        "id": "debugging-testing-quality-card-13",
        "front": "What should you know about stub?",
        "back": "A stub provides a simple fixed response for a dependency.",
        "example": "return fake user"
      },
      {
        "id": "debugging-testing-quality-card-14",
        "front": "What should you know about test data?",
        "back": "Test data should be clear and focused on the behaviour being tested.",
        "example": "const adminUser = ..."
      },
      {
        "id": "debugging-testing-quality-card-15",
        "front": "What should you know about edge case?",
        "back": "An edge case is an unusual but possible input or state.",
        "example": "empty array"
      },
      {
        "id": "debugging-testing-quality-card-16",
        "front": "What should you know about regression test?",
        "back": "A regression test prevents a fixed bug from coming back.",
        "example": "test for previous bug"
      },
      {
        "id": "debugging-testing-quality-card-17",
        "front": "What should you know about linting?",
        "back": "Linting catches style problems, likely bugs and inconsistent patterns automatically.",
        "example": "ESLint"
      },
      {
        "id": "debugging-testing-quality-card-18",
        "front": "What should you know about formatting?",
        "back": "Formatting tools make code style consistent without manual debate.",
        "example": "Prettier"
      },
      {
        "id": "debugging-testing-quality-card-19",
        "front": "What should you know about naming?",
        "back": "Good names explain purpose and reduce the need for comments.",
        "example": "isLoading not flag"
      },
      {
        "id": "debugging-testing-quality-card-20",
        "front": "What should you know about single responsibility?",
        "back": "Single responsibility means a function or component should have one clear reason to change.",
        "example": "parseDate separate from render"
      },
      {
        "id": "debugging-testing-quality-card-21",
        "front": "What should you know about pure function?",
        "back": "A pure function returns the same output for the same input and has no side effects.",
        "example": "add(a,b)"
      },
      {
        "id": "debugging-testing-quality-card-22",
        "front": "What should you know about side effect?",
        "back": "A side effect changes something outside the function, like network, storage or DOM.",
        "example": "localStorage.setItem"
      },
      {
        "id": "debugging-testing-quality-card-23",
        "front": "What should you know about refactoring?",
        "back": "Refactoring improves code structure without changing behaviour.",
        "example": "extract function"
      },
      {
        "id": "debugging-testing-quality-card-24",
        "front": "What should you know about technical debt?",
        "back": "Technical debt is a shortcut that may make future changes harder.",
        "example": "temporary hack"
      },
      {
        "id": "debugging-testing-quality-card-25",
        "front": "What should you know about code review?",
        "back": "Code review checks correctness, readability, maintainability and shared standards.",
        "example": "pull request review"
      },
      {
        "id": "debugging-testing-quality-extra-card-aaa",
        "front": "What is Arrange, Act, Assert?",
        "back": "Arrange, Act, Assert is a simple test structure: set up data, perform the behaviour, then check the result. It keeps tests readable.",
        "example": "Arrange user data -> Act by calling saveUser -> Assert save was called"
      },
      {
        "id": "debugging-testing-quality-extra-card-mock-network",
        "front": "Why mock network calls in tests?",
        "back": "Mocking network calls makes tests fast, deterministic and independent of real services. It also lets you test error states.",
        "example": "Mock GET /devices to return an empty array."
      },
      {
        "id": "debugging-testing-quality-extra-card-flaky-test",
        "front": "What is a flaky test?",
        "back": "A flaky test sometimes passes and sometimes fails without code changes. Common causes include timing, shared state and relying on external services.",
        "example": "A test that fails only on CI every few runs."
      },
      {
        "id": "debugging-testing-quality-extra-card-source-maps",
        "front": "What are source maps?",
        "back": "Source maps connect compiled/minified code back to original source files, making browser debugging and production error traces easier.",
        "example": "main.abcd.js -> src/App.tsx"
      },
      {
        "id": "debugging-testing-quality-extra-card-logging-levels",
        "front": "Why use logging levels?",
        "back": "Logging levels like debug, info, warn and error help teams filter noise and focus on the right detail for each environment.",
        "example": "logger.warn(\"Retrying request\")"
      },
      {
        "id": "debugging-testing-quality-extra-card-coverage-limits",
        "front": "What does test coverage not tell you?",
        "back": "Coverage tells you which lines ran, not whether the assertions are meaningful. High coverage can still miss important behaviours.",
        "example": "A test can call a function without checking the result."
      },
      {
        "id": "debugging-testing-quality-extra-card-test-pyramid",
        "front": "What is the test pyramid?",
        "back": "The test pyramid suggests having many fast unit tests, fewer integration tests and even fewer expensive end-to-end tests.",
        "example": "Unit > integration > E2E"
      },
      {
        "id": "debugging-testing-quality-extra-card-lint-format",
        "front": "What is the difference between linting and formatting?",
        "back": "Formatting controls code style like spacing. Linting catches likely bugs, unsafe patterns and consistency issues.",
        "example": "Prettier formats; ESLint catches no-unused-vars."
      }
    ],
    "questions": [
      {
        "id": "debugging-testing-quality-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes console.log debugging?",
        "options": [
          "console.",
          "The Network tab shows requests, responses, headers, payloads and timing.",
          "An integration test checks multiple pieces working together.",
          "A stub provides a simple fixed response for a dependency."
        ],
        "correctAnswer": "console.",
        "explanation": "console.log helps inspect values quickly, but should not replace proper debugging or tests.\n\nExample:\nconsole.log({ user })"
      },
      {
        "id": "debugging-testing-quality-q-02",
        "type": "true-false",
        "prompt": "True or false: A breakpoint pauses code so you can inspect variables and step through execution.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A breakpoint pauses code so you can inspect variables and step through execution.\n\nExample:\nDevTools Sources breakpoint"
      },
      {
        "id": "debugging-testing-quality-q-03",
        "type": "scenario",
        "prompt": "Scenario: An error trace shows the chain of function calls that led to the crash. What is that chain called?",
        "options": [
          "call stack",
          "refactoring",
          "technical debt",
          "Arrange, Act, Assert"
        ],
        "correctAnswer": "call stack",
        "explanation": "The call stack shows the chain of function calls that led to the current point. Example: stack trace\n\nExample:\nstack trace"
      },
      {
        "id": "debugging-testing-quality-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A stack trace shows where an error happened and which calls led there.",
        "correctAnswer": "stack trace",
        "acceptedAnswers": [
          "stack trace",
          "stack trace",
          "stack trace"
        ],
        "explanation": "A stack trace shows where an error happened and which calls led there.\n\nExample:\nError at saveUser"
      },
      {
        "id": "debugging-testing-quality-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes Network tab?",
        "options": [
          "The Network tab shows requests, responses, headers, payloads and timing.",
          "Code review checks correctness, readability, maintainability and shared standards.",
          "Mapping compiled code back to original source for debugging.",
          "An integration test checks multiple pieces working together."
        ],
        "correctAnswer": "The Network tab shows requests, responses, headers, payloads and timing.",
        "explanation": "The Network tab shows requests, responses, headers, payloads and timing.\n\nExample:\nDevTools Network"
      },
      {
        "id": "debugging-testing-quality-q-06",
        "type": "true-false",
        "prompt": "True or false: Reproduction steps describe exactly how to trigger a bug.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Reproduction steps describe exactly how to trigger a bug.\n\nExample:\nexpect(result).toEqual(...)"
      },
      {
        "id": "debugging-testing-quality-q-07",
        "type": "scenario",
        "prompt": "Scenario: A bug report includes only the smallest code needed to reproduce the problem, with unrelated code removed. What is this called?",
        "options": [
          "minimal example",
          "Arrange, Act, Assert",
          "flaky test",
          "a network mock"
        ],
        "correctAnswer": "minimal example",
        "explanation": "A minimal example removes unrelated code so the cause is easier to find. Example: small failing snippet\n\nExample:\nsmall failing snippet"
      },
      {
        "id": "debugging-testing-quality-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A unit test checks a small function or component behaviour in isolation.",
        "correctAnswer": "unit test",
        "acceptedAnswers": [
          "unit test",
          "unit test",
          "unit test"
        ],
        "explanation": "A unit test checks a small function or component behaviour in isolation.\n\nExample:\nexpect(sum(1,2)).toBe(3)"
      },
      {
        "id": "debugging-testing-quality-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes integration test?",
        "options": [
          "An integration test checks multiple pieces working together.",
          "Linting catches style problems, likely bugs and inconsistent patterns automatically.",
          "A pure function returns the same output for the same input and has no side effects.",
          "Code review checks correctness, readability, maintainability and shared standards."
        ],
        "correctAnswer": "An integration test checks multiple pieces working together.",
        "explanation": "An integration test checks multiple pieces working together.\n\nExample:\nform submits to service"
      },
      {
        "id": "debugging-testing-quality-q-10",
        "type": "true-false",
        "prompt": "True or false: An end-to-end test checks a realistic user flow through the app.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "An end-to-end test checks a realistic user flow through the app.\n\nExample:\nexpect(result).toEqual(...)"
      },
      {
        "id": "debugging-testing-quality-q-11",
        "type": "scenario",
        "prompt": "Scenario: A test checks that the actual result equals the expected result. What is that check called?",
        "options": [
          "assertion",
          "flaky test",
          "a network mock",
          "linter"
        ],
        "correctAnswer": "assertion",
        "explanation": "An assertion states what should be true in a test. Example: expect(result).toEqual(...)\n\nExample:\nexpect(result).toEqual(...)"
      },
      {
        "id": "debugging-testing-quality-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A mock replaces a dependency so a test can control or observe it.",
        "correctAnswer": "mock",
        "acceptedAnswers": [
          "mock",
          "mock",
          "mock"
        ],
        "explanation": "A mock replaces a dependency so a test can control or observe it.\n\nExample:\nmock fetch"
      },
      {
        "id": "debugging-testing-quality-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes stub?",
        "options": [
          "A stub provides a simple fixed response for a dependency.",
          "An integration test checks multiple pieces working together.",
          "Linting catches style problems, likely bugs and inconsistent patterns automatically.",
          "A pure function returns the same output for the same input and has no side effects."
        ],
        "correctAnswer": "A stub provides a simple fixed response for a dependency.",
        "explanation": "A stub provides a simple fixed response for a dependency.\n\nExample:\nreturn fake user"
      },
      {
        "id": "debugging-testing-quality-q-14",
        "type": "true-false",
        "prompt": "True or false: Test data should be clear and focused on the behaviour being tested.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Test data should be clear and focused on the behaviour being tested.\n\nExample:\nexpect(result).toEqual(...)"
      },
      {
        "id": "debugging-testing-quality-q-15",
        "type": "scenario",
        "prompt": "Scenario: Your code works for normal input, but you also test empty arrays, zero, and very long strings. What are these unusual cases called?",
        "options": [
          "edge case",
          "naming",
          "single responsibility",
          "refactoring"
        ],
        "correctAnswer": "edge case",
        "explanation": "An edge case is an unusual but possible input or state. Example: empty array\n\nExample:\nempty array"
      },
      {
        "id": "debugging-testing-quality-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A regression test prevents a fixed bug from coming back.",
        "correctAnswer": "regression test",
        "acceptedAnswers": [
          "regression test",
          "regression test",
          "regression test"
        ],
        "explanation": "A regression test prevents a fixed bug from coming back.\n\nExample:\ntest for previous bug"
      },
      {
        "id": "debugging-testing-quality-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes linting?",
        "options": [
          "Linting catches style problems, likely bugs and inconsistent patterns automatically.",
          "The Network tab shows requests, responses, headers, payloads and timing.",
          "An integration test checks multiple pieces working together.",
          "A stub provides a simple fixed response for a dependency."
        ],
        "correctAnswer": "Linting catches style problems, likely bugs and inconsistent patterns automatically.",
        "explanation": "Linting catches style problems, likely bugs and inconsistent patterns automatically.\n\nExample:\nESLint"
      },
      {
        "id": "debugging-testing-quality-q-18",
        "type": "true-false",
        "prompt": "True or false: Formatting tools make code style consistent without manual debate.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Formatting tools make code style consistent without manual debate.\n\nExample:\nexpect(result).toEqual(...)"
      },
      {
        "id": "debugging-testing-quality-q-19",
        "type": "scenario",
        "prompt": "Scenario: You rename `x` to `totalPrice` so the code explains its purpose more clearly. What quality issue are you improving?",
        "options": [
          "naming",
          "edge case",
          "regression test",
          "single responsibility"
        ],
        "correctAnswer": "naming",
        "explanation": "Good names explain purpose and reduce the need for comments. Example: isLoading not flag\n\nExample:\nisLoading not flag"
      },
      {
        "id": "debugging-testing-quality-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Single responsibility means a function or component should have one clear reason to change.",
        "correctAnswer": "single responsibility",
        "acceptedAnswers": [
          "single responsibility",
          "single responsibility",
          "single responsibility"
        ],
        "explanation": "Single responsibility means a function or component should have one clear reason to change.\n\nExample:\nparseDate separate from render"
      },
      {
        "id": "debugging-testing-quality-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes pure function?",
        "options": [
          "A pure function returns the same output for the same input and has no side effects.",
          "Mapping compiled code back to original source for debugging.",
          "The Network tab shows requests, responses, headers, payloads and timing.",
          "An integration test checks multiple pieces working together."
        ],
        "correctAnswer": "A pure function returns the same output for the same input and has no side effects.",
        "explanation": "A pure function returns the same output for the same input and has no side effects.\n\nExample:\nadd(a,b)"
      },
      {
        "id": "debugging-testing-quality-q-22",
        "type": "true-false",
        "prompt": "True or false: A side effect changes something outside the function, like network, storage or DOM.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A side effect changes something outside the function, like network, storage or DOM.\n\nExample:\nlocalStorage.setItem"
      },
      {
        "id": "debugging-testing-quality-q-23",
        "type": "scenario",
        "prompt": "Scenario: You improve the structure of code without changing what the user sees or how the feature behaves. What is this called?",
        "options": [
          "refactoring",
          "unit test",
          "assertion",
          "mock"
        ],
        "correctAnswer": "refactoring",
        "explanation": "Refactoring improves code structure without changing behaviour. Example: extract function\n\nExample:\nextract function"
      },
      {
        "id": "debugging-testing-quality-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Technical debt is a shortcut that may make future changes harder.",
        "correctAnswer": "technical debt",
        "acceptedAnswers": [
          "technical debt",
          "technical debt",
          "technical debt"
        ],
        "explanation": "Technical debt is a shortcut that may make future changes harder.\n\nExample:\ntemporary hack"
      },
      {
        "id": "debugging-testing-quality-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes code review?",
        "options": [
          "Code review checks correctness, readability, maintainability and shared standards.",
          "A stub provides a simple fixed response for a dependency.",
          "Linting catches style problems, likely bugs and inconsistent patterns automatically.",
          "A pure function returns the same output for the same input and has no side effects."
        ],
        "correctAnswer": "Code review checks correctness, readability, maintainability and shared standards.",
        "explanation": "Code review checks correctness, readability, maintainability and shared standards.\n\nExample:\npull request review"
      },
      {
        "id": "debugging-testing-quality-extra-q-aaa-mcq",
        "type": "multiple-choice",
        "prompt": "Which test structure means setup, perform behaviour, then check result?",
        "correctAnswer": "Arrange, Act, Assert",
        "explanation": "AAA makes tests easier to scan and maintain.\n\nExample:\nArrange user data -> Act by calling saveUser -> Assert save was called",
        "options": [
          "Arrange, Act, Assert",
          "Authorise, Authenticate, Audit",
          "Allocate, Await, Abort",
          "Array, API, Async"
        ]
      },
      {
        "id": "debugging-testing-quality-extra-q-flaky-type",
        "type": "type-answer",
        "prompt": "Type the term for a test that sometimes passes and sometimes fails without relevant code changes.",
        "correctAnswer": "flaky test",
        "explanation": "Flaky tests are unreliable and should be investigated because they reduce trust in the test suite.\n\nExample:\nA test that fails only on CI every few runs.",
        "acceptedAnswers": [
          "flaky test",
          "flaky"
        ]
      },
      {
        "id": "debugging-testing-quality-extra-q-coverage-tf",
        "type": "true-false",
        "prompt": "True or false: 100% line coverage guarantees the app is bug-free.",
        "correctAnswer": "False",
        "explanation": "Coverage only shows what ran. It does not prove the assertions were useful or all behaviours were tested.\n\nExample:\nA test can call a function without checking the result.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "debugging-testing-quality-extra-q-mock-network-scenario",
        "type": "scenario",
        "prompt": "You need to test how a component handles a 500 API response without calling the real server. What should you use?",
        "correctAnswer": "a network mock",
        "explanation": "Network mocking lets tests control API responses reliably.\n\nExample:\nMock GET /devices to return an empty array.",
        "options": [
          "a network mock",
          "a production database",
          "manual clicking only",
          "a CSS reset"
        ]
      },
      {
        "id": "debugging-testing-quality-extra-q-sourcemap-purpose",
        "type": "multiple-choice",
        "prompt": "What do source maps help with?",
        "correctAnswer": "Mapping compiled code back to original source for debugging.",
        "explanation": "Source maps connect bundled/minified output with original files.\n\nExample:\nmain.abcd.js -> src/App.tsx",
        "options": [
          "Mapping compiled code back to original source for debugging.",
          "Encrypting API responses.",
          "Removing the need for tests.",
          "Making all functions asynchronous."
        ]
      },
      {
        "id": "debugging-testing-quality-extra-q-lint-format-mcq",
        "type": "multiple-choice",
        "prompt": "Which tool category catches likely code issues such as unused variables or unsafe patterns?",
        "correctAnswer": "linter",
        "explanation": "Linters analyse code for possible bugs and consistency issues. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\nPrettier formats; ESLint catches no-unused-vars.",
        "options": [
          "linter",
          "formatter only",
          "image optimiser",
          "package registry"
        ]
      }
    ]
  },
  {
    "id": "node-tooling-runtime",
    "title": "Node.js, Tooling & Runtime Fundamentals",
    "description": "Learn the runtime and tooling knowledge that helps you work confidently in modern JS/TS projects.",
    "flashcards": [
      {
        "id": "node-tooling-runtime-extra-card-01-node-runtime",
        "front": "What is Node.js?",
        "back": "Node.js is a JavaScript runtime outside the browser. It is commonly used for servers, scripts, CLIs and build tooling.",
        "example": "node script.js"
      },
      {
        "id": "node-tooling-runtime-extra-card-02-npm",
        "front": "What is npm?",
        "back": "npm is the default package manager and registry ecosystem for Node projects. It installs dependencies and runs project scripts.",
        "example": "npm install\nnpm run dev"
      },
      {
        "id": "node-tooling-runtime-extra-card-03-package-json",
        "front": "What is package.json?",
        "back": "package.json describes a project, its scripts, dependencies, dev dependencies and metadata.",
        "example": "\"scripts\": { \"dev\": \"vite\" }"
      },
      {
        "id": "node-tooling-runtime-extra-card-04-lockfile",
        "front": "Why commit package-lock.json?",
        "back": "The lockfile records exact dependency versions so installs are more reproducible across machines and CI.",
        "example": "git add package-lock.json"
      },
      {
        "id": "node-tooling-runtime-extra-card-05-dependencies",
        "front": "dependencies vs devDependencies?",
        "back": "dependencies are needed by the app at runtime. devDependencies are needed for development, testing or building.",
        "example": "vite is often a devDependency."
      },
      {
        "id": "node-tooling-runtime-extra-card-06-esm-cjs",
        "front": "ESM vs CommonJS?",
        "back": "ESM uses import/export. CommonJS uses require/module.exports. Modern frontend and TS projects often prefer ESM.",
        "example": "import fs from \"node:fs\";"
      },
      {
        "id": "node-tooling-runtime-extra-card-07-env-vars",
        "front": "What are environment variables?",
        "back": "Environment variables configure apps outside code. They are used for URLs, feature flags and secrets on servers.",
        "example": "process.env.API_URL"
      },
      {
        "id": "node-tooling-runtime-extra-card-08-vite",
        "front": "What is Vite?",
        "back": "Vite is a modern dev server and build tool. It gives fast local development and production bundling.",
        "example": "npm create vite@latest"
      },
      {
        "id": "node-tooling-runtime-extra-card-09-bundler",
        "front": "What does a bundler do?",
        "back": "A bundler combines and transforms modules into assets browsers can load efficiently.",
        "example": "Vite/Rollup bundles TS, CSS and assets."
      },
      {
        "id": "node-tooling-runtime-extra-card-10-transpile",
        "front": "What is transpiling?",
        "back": "Transpiling converts code from one language level or syntax to another, such as TypeScript to JavaScript.",
        "example": "tsc or esbuild transforms .ts files."
      },
      {
        "id": "node-tooling-runtime-extra-card-11-lint",
        "front": "What is ESLint?",
        "back": "ESLint analyses JavaScript/TypeScript for possible bugs and style issues based on rules.",
        "example": "npm run lint"
      },
      {
        "id": "node-tooling-runtime-extra-card-12-prettier",
        "front": "What is Prettier?",
        "back": "Prettier formats code consistently so teams avoid arguing over spacing and layout.",
        "example": "npx prettier . --write"
      },
      {
        "id": "node-tooling-runtime-extra-card-13-tsconfig",
        "front": "What is tsconfig.json?",
        "back": "tsconfig.json controls TypeScript compiler options, included files and module settings.",
        "example": "\"strict\": true"
      },
      {
        "id": "node-tooling-runtime-extra-card-14-strict",
        "front": "Why enable TypeScript strict mode?",
        "back": "Strict mode catches more possible bugs by making TypeScript less permissive about nulls, any and unsafe assumptions.",
        "example": "\"strictNullChecks\": true"
      },
      {
        "id": "node-tooling-runtime-extra-card-15-path-alias",
        "front": "What are path aliases?",
        "back": "Path aliases let you import from readable project paths instead of long relative paths, when configured in TS and bundler.",
        "example": "import { Button } from \"@/components/Button\";"
      },
      {
        "id": "node-tooling-runtime-extra-card-16-scripts",
        "front": "Why use npm scripts?",
        "back": "npm scripts standardise project commands so everyone can run dev, build, test and lint the same way.",
        "example": "npm run build"
      },
      {
        "id": "node-tooling-runtime-extra-card-17-ci-node",
        "front": "Why pin Node versions?",
        "back": "Pinning Node versions avoids “works on my machine” issues caused by different runtime versions.",
        "example": ".nvmrc or engines in package.json"
      },
      {
        "id": "node-tooling-runtime-extra-card-18-optional-deps",
        "front": "What are optional dependencies?",
        "back": "Optional dependencies can be installed only on supported platforms. Sometimes deleting node_modules and reinstalling fixes platform-specific optional dependency issues.",
        "example": "Rollup native optional dependency issues."
      },
      {
        "id": "node-tooling-runtime-extra-card-19-monorepo",
        "front": "What is a monorepo?",
        "back": "A monorepo stores multiple packages or apps in one repository. It can simplify shared code but needs good tooling.",
        "example": "apps/web and packages/ui in one repo."
      },
      {
        "id": "node-tooling-runtime-extra-card-20-workspace",
        "front": "What are workspaces?",
        "back": "Workspaces let package managers manage multiple packages together, often in a monorepo.",
        "example": "npm workspaces, pnpm workspaces"
      },
      {
        "id": "node-tooling-runtime-extra-card-21-semantic-imports",
        "front": "Why keep imports organised?",
        "back": "Organised imports reduce noise in PRs and make file dependencies easier to scan.",
        "example": "external imports, then internal imports."
      },
      {
        "id": "node-tooling-runtime-extra-card-22-build-output",
        "front": "Why not commit dist and node_modules?",
        "back": "dist is generated output and node_modules is reinstallable. Committing them bloats repos and can cause machine-specific issues.",
        "example": ".gitignore should exclude node_modules and dist."
      },
      {
        "id": "node-tooling-runtime-extra-card-23-source-env",
        "front": "Vite env variable naming?",
        "back": "In Vite, frontend-exposed environment variables usually need the VITE_ prefix. Secrets still must not be exposed to the browser.",
        "example": "import.meta.env.VITE_API_URL"
      },
      {
        "id": "node-tooling-runtime-extra-card-24-npm-audit",
        "front": "What is npm audit?",
        "back": "npm audit reports known vulnerabilities in dependency versions. It is a signal to review updates, not always an automatic fix.",
        "example": "npm audit"
      },
      {
        "id": "node-tooling-runtime-extra-card-25-dev-prod",
        "front": "Development vs production builds?",
        "back": "Development builds prioritise speed and debugging. Production builds optimise size, performance and compatibility.",
        "example": "npm run dev vs npm run build"
      }
    ],
    "questions": [
      {
        "id": "node-tooling-runtime-extra-q-01-runtime",
        "type": "multiple-choice",
        "prompt": "What is Node.js?",
        "correctAnswer": "A JavaScript runtime outside the browser.",
        "explanation": "Node lets JavaScript run on servers, scripts and tools.\n\nExample:\nnode script.js",
        "options": [
          "A JavaScript runtime outside the browser.",
          "A CSS framework.",
          "A database only.",
          "A browser extension."
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-02-lock",
        "type": "true-false",
        "prompt": "True or false: package-lock.json helps make installs more reproducible.",
        "correctAnswer": "True",
        "explanation": "The lockfile records exact dependency versions.\n\nExample:\n\"strict\": true",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-03-devdep",
        "type": "multiple-choice",
        "prompt": "Where would a build tool like Vite usually belong?",
        "correctAnswer": "devDependencies",
        "explanation": "Build tools are usually needed for development/building rather than app runtime.\n\nExample:\nvite is often a devDependency.",
        "options": [
          "devDependencies",
          "dependencies always",
          "browser cookies",
          "public assets"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-04-tsconfig",
        "type": "type-answer",
        "prompt": "Type the config file that controls TypeScript compiler settings.",
        "correctAnswer": "tsconfig.json",
        "explanation": "tsconfig.json configures TypeScript compilation.\n\nExample:\n\"strict\": true",
        "acceptedAnswers": [
          "tsconfig.json",
          "tsconfig"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-05-strict",
        "type": "scenario",
        "prompt": "You want TypeScript to catch more null/undefined and unsafe typing issues. Which compiler setting group helps?",
        "correctAnswer": "strict mode",
        "explanation": "TypeScript strict mode enables stronger checks.\n\nExample:\n\"strictNullChecks\": true",
        "options": [
          "strict mode",
          "CORS mode",
          "dark mode",
          "offline mode"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-06-vite-env",
        "type": "multiple-choice",
        "prompt": "In Vite, which prefix is commonly required for env vars exposed to frontend code?",
        "correctAnswer": "VITE_",
        "explanation": "Vite exposes env variables prefixed with VITE_ to client code.\n\nExample:\nimport.meta.env.VITE_API_URL",
        "options": [
          "VITE_",
          "SECRET_",
          "NODE_PRIVATE_",
          "CSS_"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-07-secret",
        "type": "true-false",
        "prompt": "True or false: A VITE_ variable is safe for private API keys because users cannot see frontend code.",
        "correctAnswer": "False",
        "explanation": "Frontend-exposed variables are visible to users. Private secrets belong server-side.\n\nExample:\nimport.meta.env.VITE_API_URL",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-08-esm",
        "type": "type-answer",
        "prompt": "Type the modern JavaScript module keyword used to bring code in from another file.",
        "correctAnswer": "import",
        "explanation": "ES modules use import and export.\n\nExample:\nimport fs from \"node:fs\";",
        "acceptedAnswers": [
          "import"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-09-dist",
        "type": "scenario",
        "prompt": "A GitHub repo is huge because it includes node_modules and dist. What should usually happen?",
        "correctAnswer": "ignore generated dependencies and build output",
        "explanation": "node_modules and dist are normally excluded and recreated with npm install/build.\n\nExample:\n.gitignore should exclude node_modules and dist.",
        "options": [
          "ignore generated dependencies and build output",
          "commit even more generated files",
          "move secrets into dist",
          "delete package.json"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-10-eslint",
        "type": "multiple-choice",
        "prompt": "Which tool is mainly for catching JS/TS code issues based on rules?",
        "correctAnswer": "ESLint",
        "explanation": "ESLint analyses code for patterns and possible problems.\n\nExample:\nnpm run lint",
        "options": [
          "ESLint",
          "Prettier only",
          "npm registry",
          "CDN"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-11-prettier",
        "type": "multiple-choice",
        "prompt": "Which tool is mainly for consistent code formatting?",
        "correctAnswer": "Prettier",
        "explanation": "Prettier formats code layout consistently.\n\nExample:\nnpx prettier . --write",
        "options": [
          "Prettier",
          "TypeScript runtime",
          "Node server",
          "OpenAPI"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-12-npm-script",
        "type": "type-answer",
        "prompt": "What npm command usually runs a script named build?",
        "correctAnswer": "npm run build",
        "explanation": "npm run <script> executes scripts from package.json.\n\nExample:\nnpm run build",
        "acceptedAnswers": [
          "npm run build"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-13-optional",
        "type": "scenario",
        "prompt": "A dependency has a platform-specific optional package missing in node_modules. What often fixes this local issue?",
        "correctAnswer": "delete node_modules and reinstall",
        "explanation": "Reinstalling allows npm to fetch the correct optional dependencies for the platform.\n\nExample:\nRollup native optional dependency issues.",
        "options": [
          "delete node_modules and reinstall",
          "edit every source file",
          "commit node_modules",
          "disable TypeScript"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-14-monorepo",
        "type": "multiple-choice",
        "prompt": "What is a monorepo?",
        "correctAnswer": "A repository containing multiple apps/packages.",
        "explanation": "Monorepos keep related packages together with shared tooling.\n\nExample:\napps/web and packages/ui in one repo.",
        "options": [
          "A repository containing multiple apps/packages.",
          "A single CSS file.",
          "A runtime error.",
          "A browser cache rule."
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-15-workspace",
        "type": "true-false",
        "prompt": "True or false: Workspaces can help manage multiple packages in one repository.",
        "correctAnswer": "True",
        "explanation": "Workspaces are commonly used in monorepos.\n\nExample:\n\"strict\": true",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-16-build",
        "type": "multiple-choice",
        "prompt": "What is usually true of production builds?",
        "correctAnswer": "They optimise output for deployment.",
        "explanation": "Production builds often minify and optimise assets.\n\nExample:\nnpm run dev vs npm run build",
        "options": [
          "They optimise output for deployment.",
          "They are always slower for users.",
          "They include every test file in the browser.",
          "They remove all JavaScript."
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-17-audit",
        "type": "type-answer",
        "prompt": "Type the npm command that checks dependencies for known vulnerabilities.",
        "correctAnswer": "npm audit",
        "explanation": "npm audit reports known dependency vulnerabilities.\n\nExample:\nnpm audit",
        "acceptedAnswers": [
          "npm audit"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-18-alias",
        "type": "scenario",
        "prompt": "Imports like ../../../../components/Button are hard to maintain. What configuration can improve this?",
        "correctAnswer": "path aliases",
        "explanation": "Path aliases make imports shorter and clearer when configured properly.\n\nExample:\nimport { Button } from \"@/components/Button\";",
        "options": [
          "path aliases",
          "HTTP cookies",
          "array splice",
          "source maps only"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-19-bundler",
        "type": "multiple-choice",
        "prompt": "What does a bundler mainly do?",
        "correctAnswer": "Combines/transforms modules into deployable browser assets.",
        "explanation": "Bundlers process modules, TS, CSS and assets for the browser.\n\nExample:\nVite/Rollup bundles TS, CSS and assets.",
        "options": [
          "Combines/transforms modules into deployable browser assets.",
          "Stores user passwords.",
          "Writes API documentation only.",
          "Runs SQL migrations only."
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-20-transpile",
        "type": "type-answer",
        "prompt": "Type the term for converting TypeScript into JavaScript.",
        "correctAnswer": "transpiling",
        "explanation": "Transpiling converts source code from one syntax/language level to another.\n\nExample:\ntsc or esbuild transforms .ts files.",
        "acceptedAnswers": [
          "transpiling",
          "transpile",
          "compiling"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-21-node-version",
        "type": "scenario",
        "prompt": "The project works for one developer but fails for another using a different Node version. What project file can help pin the version?",
        "correctAnswer": ".nvmrc",
        "explanation": ".nvmrc documents the expected Node version for nvm users. In practice, this matters because it changes how you would write or review real application code.\n\nExample:\n.nvmrc or engines in package.json",
        "options": [
          ".nvmrc",
          "README screenshot",
          "favicon.ico",
          "CSS reset"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-22-package",
        "type": "multiple-choice",
        "prompt": "Which file lists npm scripts and dependencies?",
        "correctAnswer": "package.json",
        "explanation": "package.json is the main Node project manifest.\n\nExample:\n\"scripts\": { \"dev\": \"vite\" }",
        "options": [
          "package.json",
          "index.html only",
          "robots.txt",
          "tsconfig.node.json only"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-23-cjs",
        "type": "multiple-choice",
        "prompt": "Which syntax is CommonJS?",
        "correctAnswer": "require() and module.exports",
        "explanation": "CommonJS uses require and module.exports.\n\nExample:\nimport fs from \"node:fs\";",
        "options": [
          "require() and module.exports",
          "import and export only",
          "<script type=\"module\"> only",
          "fetch and await"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-24-runtime-secret",
        "type": "true-false",
        "prompt": "True or false: Environment variables are a common way to configure apps outside source code.",
        "correctAnswer": "True",
        "explanation": "Environment variables keep config separate from code.\n\nExample:\n\"strict\": true",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "node-tooling-runtime-extra-q-25-scripts-why",
        "type": "scenario",
        "prompt": "A team keeps forgetting the exact build command. What package.json feature should standardise it?",
        "correctAnswer": "npm scripts",
        "explanation": "Scripts give shared commands like npm run build/test/dev.\n\nExample:\nnpm run build",
        "options": [
          "npm scripts",
          "radio buttons",
          "ETags",
          "template literal types"
        ]
      }
    ]
  },
  {
    "id": "dsa-problem-solving",
    "title": "DSA & Problem Solving",
    "description": "Build the practical problem-solving basics that help in interviews and everyday code.",
    "flashcards": [
      {
        "id": "dsa-problem-solving-extra-card-01-big-o",
        "front": "What is Big O?",
        "back": "Big O describes how runtime or memory grows as input size grows. It helps compare approaches at scale.",
        "example": "O(n) grows linearly with input size."
      },
      {
        "id": "dsa-problem-solving-extra-card-02-array-lookup",
        "front": "Array lookup vs search?",
        "back": "Reading an array item by index is O(1). Searching for a value without an index is usually O(n).",
        "example": "items[0] vs items.find(...)"
      },
      {
        "id": "dsa-problem-solving-extra-card-03-hash-map",
        "front": "Why use a hash map/object for lookup?",
        "back": "A hash map gives fast key-based lookup on average, often O(1). In JS, Map or object can be used depending on the use case.",
        "example": "const byId = new Map(users.map(u => [u.id, u]));"
      },
      {
        "id": "dsa-problem-solving-extra-card-04-set-membership",
        "front": "Why use Set for membership checks?",
        "back": "Set.has is usually faster and clearer than repeatedly using array.includes for large membership checks.",
        "example": "const allowed = new Set([\"admin\", \"owner\"]);"
      },
      {
        "id": "dsa-problem-solving-extra-card-05-stack",
        "front": "What is a stack?",
        "back": "A stack is last-in, first-out. It is useful for undo, parsing, call stacks and depth-first traversal.",
        "example": "push/pop"
      },
      {
        "id": "dsa-problem-solving-extra-card-06-queue-ds",
        "front": "What is a queue?",
        "back": "A queue is first-in, first-out. It is useful for task scheduling, breadth-first search and buffering work.",
        "example": "enqueue/dequeue"
      },
      {
        "id": "dsa-problem-solving-extra-card-07-two-pointers",
        "front": "What is the two-pointer technique?",
        "back": "Two pointers walk through data from different positions to solve problems efficiently, often on sorted arrays or strings.",
        "example": "left = 0; right = arr.length - 1;"
      },
      {
        "id": "dsa-problem-solving-extra-card-08-sliding-window",
        "front": "What is sliding window?",
        "back": "Sliding window tracks a moving range of items to avoid recomputing work from scratch. It is common for substring and subarray problems.",
        "example": "Move start/end indexes while tracking counts."
      },
      {
        "id": "dsa-problem-solving-extra-card-09-binary-search",
        "front": "When can you use binary search?",
        "back": "Binary search works on sorted/searchable spaces where you can repeatedly discard half the possibilities.",
        "example": "Guess midpoint in a sorted array."
      },
      {
        "id": "dsa-problem-solving-extra-card-10-recursion",
        "front": "What is recursion?",
        "back": "Recursion is when a function calls itself with a smaller problem until it reaches a base case.",
        "example": "function factorial(n){ if(n<=1)return 1; return n*factorial(n-1); }"
      },
      {
        "id": "dsa-problem-solving-extra-card-11-base-case",
        "front": "Why does recursion need a base case?",
        "back": "A base case stops recursion. Without one, the function keeps calling itself until a stack overflow or runtime error.",
        "example": "if (node === null) return;"
      },
      {
        "id": "dsa-problem-solving-extra-card-12-bfs",
        "front": "What is BFS?",
        "back": "Breadth-first search explores neighbours level by level, often using a queue. It is useful for shortest path in unweighted graphs.",
        "example": "queue.push(start)"
      },
      {
        "id": "dsa-problem-solving-extra-card-13-dfs",
        "front": "What is DFS?",
        "back": "Depth-first search explores as far as possible down one path before backtracking. It can use recursion or a stack.",
        "example": "visit child nodes recursively"
      },
      {
        "id": "dsa-problem-solving-extra-card-14-sorting",
        "front": "Why understand sorting comparators?",
        "back": "Custom sorting needs a comparator that returns negative, zero or positive. Incorrect comparators cause unpredictable order.",
        "example": "arr.sort((a,b) => a.age - b.age)"
      },
      {
        "id": "dsa-problem-solving-extra-card-15-stable-sort",
        "front": "What is a stable sort?",
        "back": "A stable sort keeps the relative order of equal items. This matters when sorting by multiple fields.",
        "example": "Sort by name, then stable sort by department."
      },
      {
        "id": "dsa-problem-solving-extra-card-16-greedy",
        "front": "What is a greedy algorithm?",
        "back": "A greedy algorithm makes the best local choice at each step. It works only when local choices lead to a global optimum.",
        "example": "Choose earliest finishing meeting."
      },
      {
        "id": "dsa-problem-solving-extra-card-17-dp",
        "front": "What is dynamic programming?",
        "back": "Dynamic programming stores solutions to overlapping subproblems so they are not recomputed. It is useful for optimisation/counting problems.",
        "example": "memo[n] for Fibonacci"
      },
      {
        "id": "dsa-problem-solving-extra-card-18-memoization",
        "front": "What is memoization?",
        "back": "Memoization caches function results for inputs already seen, improving repeated recursive calculations.",
        "example": "const memo = new Map();"
      },
      {
        "id": "dsa-problem-solving-extra-card-19-edge-cases",
        "front": "What are edge cases?",
        "back": "Edge cases are unusual but valid inputs such as empty arrays, one item, null values, duplicates, huge inputs or negative numbers.",
        "example": "[] or [singleItem]"
      },
      {
        "id": "dsa-problem-solving-extra-card-20-invariants",
        "front": "What is an invariant?",
        "back": "An invariant is a condition that stays true during an algorithm. It helps reason about correctness.",
        "example": "Window count always equals end - start + 1."
      },
      {
        "id": "dsa-problem-solving-extra-card-21-tradeoffs",
        "front": "Why compare trade-offs?",
        "back": "Engineering often balances readability, runtime, memory, complexity and maintainability rather than chasing the theoretically fastest code.",
        "example": "Use a Map for speed but explain the memory cost."
      },
      {
        "id": "dsa-problem-solving-extra-card-22-parse-problem",
        "front": "How should you approach a problem?",
        "back": "Clarify inputs/outputs, discuss examples, identify constraints, choose an approach, implement, then test edge cases.",
        "example": "Ask: can input be empty?"
      },
      {
        "id": "dsa-problem-solving-extra-card-23-space-complexity",
        "front": "What is space complexity?",
        "back": "Space complexity describes extra memory used by an algorithm as input size grows.",
        "example": "A Set of all items is O(n) extra space."
      },
      {
        "id": "dsa-problem-solving-extra-card-24-immutability-dsa",
        "front": "Why can immutability affect algorithms?",
        "back": "Copying arrays/objects repeatedly can make code simpler but may add hidden O(n) work. Be aware in performance-sensitive paths.",
        "example": "[...arr, item] copies the array."
      },
      {
        "id": "dsa-problem-solving-extra-card-25-interview-communication",
        "front": "Why explain while coding?",
        "back": "Explaining your assumptions, trade-offs and tests shows engineering judgement, not just syntax knowledge.",
        "example": "“This is O(n) time and O(n) space because of the Set.”"
      }
    ],
    "questions": [
      {
        "id": "dsa-problem-solving-extra-q-01-big-o",
        "type": "multiple-choice",
        "prompt": "What does O(n) usually mean?",
        "correctAnswer": "Runtime or memory grows linearly with input size.",
        "explanation": "O(n) means work grows in proportion to n.\n\nExample:\nO(n) grows linearly with input size.",
        "options": [
          "Runtime or memory grows linearly with input size.",
          "The code always takes one second.",
          "The code uses no memory.",
          "The code only works in Node."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-02-set",
        "type": "scenario",
        "prompt": "You check if each of 10,000 roles is allowed. Which structure is better than repeatedly calling includes on a large array?",
        "correctAnswer": "Set",
        "explanation": "Set.has is usually clearer and faster for membership checks.\n\nExample:\nconst allowed = new Set([\"admin\", \"owner\"]);",
        "options": [
          "Set",
          "String.trim",
          "Promise.race",
          "CSS grid"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-03-stack",
        "type": "multiple-choice",
        "prompt": "Which data structure is last-in, first-out?",
        "correctAnswer": "stack",
        "explanation": "A stack removes the most recently added item first.\n\nExample:\npush/pop",
        "options": [
          "stack",
          "queue",
          "hash map",
          "set"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-04-queue",
        "type": "type-answer",
        "prompt": "Type the data structure that is first-in, first-out.",
        "correctAnswer": "queue",
        "explanation": "A queue processes the oldest added item first.\n\nExample:\nenqueue/dequeue",
        "acceptedAnswers": [
          "queue"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-05-binary",
        "type": "true-false",
        "prompt": "True or false: Binary search generally requires the data/search space to be sorted or ordered.",
        "correctAnswer": "True",
        "explanation": "Binary search relies on discarding half the search space using ordering.\n\nExample:\nWindow count always equals end - start + 1.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-06-base",
        "type": "type-answer",
        "prompt": "Type the recursion term for the condition that stops recursive calls.",
        "correctAnswer": "base case",
        "explanation": "A base case prevents infinite recursion.\n\nExample:\nfunction factorial(n){ if(n<=1)return 1; return n*factorial(n-1); }",
        "acceptedAnswers": [
          "base case",
          "base condition"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-07-bfs",
        "type": "multiple-choice",
        "prompt": "Which traversal usually uses a queue and explores level by level?",
        "correctAnswer": "BFS",
        "explanation": "Breadth-first search explores neighbours in layers.\n\nExample:\nqueue.push(start)",
        "options": [
          "BFS",
          "DFS only",
          "quicksort",
          "debounce"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-08-dfs",
        "type": "multiple-choice",
        "prompt": "Which traversal can naturally use recursion or a stack?",
        "correctAnswer": "DFS",
        "explanation": "Depth-first search goes deep before backtracking.\n\nExample:\nvisit child nodes recursively",
        "options": [
          "DFS",
          "BFS only",
          "cursor pagination",
          "CORS"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-09-sliding",
        "type": "scenario",
        "prompt": "You need the longest substring without repeating characters. Which technique is commonly useful?",
        "correctAnswer": "sliding window",
        "explanation": "Sliding window tracks a moving range and updates counts efficiently.\n\nExample:\nMove start/end indexes while tracking counts.",
        "options": [
          "sliding window",
          "semantic versioning",
          "HTTP webhook",
          "Object.freeze"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-10-two",
        "type": "scenario",
        "prompt": "A sorted array needs two numbers that sum to a target. Which technique is often efficient?",
        "correctAnswer": "two pointers",
        "explanation": "Two pointers can move inward based on whether the sum is too low or high.\n\nExample:\nleft = 0; right = arr.length - 1;",
        "options": [
          "two pointers",
          "random search",
          "Promise.allSettled",
          "DOM bubbling"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-11-memo",
        "type": "type-answer",
        "prompt": "Type the technique that caches results of expensive function calls by input.",
        "correctAnswer": "memoization",
        "explanation": "Memoization avoids recomputing the same subproblem.\n\nExample:\nconst memo = new Map();",
        "acceptedAnswers": [
          "memoization",
          "memoisation"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-12-edge",
        "type": "multiple-choice",
        "prompt": "Which is an example of an edge case?",
        "correctAnswer": "An empty input array.",
        "explanation": "Empty input is valid but often missed.\n\nExample:\n[] or [singleItem]",
        "options": [
          "An empty input array.",
          "A normal list of 10 items.",
          "A green button.",
          "A package script."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-13-sort",
        "type": "scenario",
        "prompt": "Sorting users by age in JS gives weird order because ages are treated like strings. What should you provide?",
        "correctAnswer": "comparator function",
        "explanation": "A comparator like (a,b)=>a.age-b.age sorts numerically.\n\nExample:\narr.sort((a,b) => a.age - b.age)",
        "options": [
          "comparator function",
          "Bearer token",
          "OpenAPI schema",
          "aria-label"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-14-space",
        "type": "multiple-choice",
        "prompt": "What does O(n) extra space mean?",
        "correctAnswer": "Extra memory grows linearly with input size.",
        "explanation": "O(n) space means memory grows with n.\n\nExample:\nA Set of all items is O(n) extra space.",
        "options": [
          "Extra memory grows linearly with input size.",
          "No memory is used.",
          "Only one variable exists.",
          "The API returns 500."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-15-greedy",
        "type": "true-false",
        "prompt": "True or false: A greedy algorithm is always correct for every optimisation problem.",
        "correctAnswer": "False",
        "explanation": "Greedy works only when local choices lead to a global optimum.\n\nExample:\nChoose earliest finishing meeting.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-16-dp",
        "type": "multiple-choice",
        "prompt": "Dynamic programming is especially useful when a problem has what?",
        "correctAnswer": "Overlapping subproblems.",
        "explanation": "DP stores repeated subproblem results.\n\nExample:\nmemo[n] for Fibonacci",
        "options": [
          "Overlapping subproblems.",
          "Only CSS styles.",
          "No inputs.",
          "One HTTP request."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-17-maplookup",
        "type": "scenario",
        "prompt": "You need to access users by id many times. What data shape helps?",
        "correctAnswer": "users by id map",
        "explanation": "Storing users by ID avoids repeated array scans.\n\nExample:\nconst byId = new Map(users.map(u => [u.id, u]));",
        "options": [
          "users by id map",
          "array of random duplicates",
          "one giant string",
          "a CSS class"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-18-invariant",
        "type": "type-answer",
        "prompt": "Type the term for a condition that remains true throughout an algorithm.",
        "correctAnswer": "invariant",
        "explanation": "Invariants help prove and reason about correctness.\n\nExample:\nWindow count always equals end - start + 1.",
        "acceptedAnswers": [
          "invariant"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-19-tradeoff",
        "type": "multiple-choice",
        "prompt": "Why might you choose a slightly slower but clearer algorithm for small data?",
        "correctAnswer": "Maintainability can matter more than tiny performance gains.",
        "explanation": "Good engineering balances speed, readability and context.\n\nExample:\nUse a Map for speed but explain the memory cost.",
        "options": [
          "Maintainability can matter more than tiny performance gains.",
          "Big O never matters.",
          "Readable code is always forbidden.",
          "It removes the need for tests."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-20-recursion-risk",
        "type": "multiple-choice",
        "prompt": "What can happen if recursion has no reachable base case?",
        "correctAnswer": "Stack overflow or infinite recursion.",
        "explanation": "Without a base case recursive calls do not stop.\n\nExample:\nif (node === null) return;",
        "options": [
          "Stack overflow or infinite recursion.",
          "Automatic API retry.",
          "TypeScript compilation to CSS.",
          "Perfect performance."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-21-parse",
        "type": "scenario",
        "prompt": "Before coding, you ask whether input can be empty and what output format is expected. What skill is this?",
        "correctAnswer": "clarifying requirements",
        "explanation": "Clarifying requirements prevents solving the wrong problem.\n\nExample:\nAsk: can input be empty?",
        "options": [
          "clarifying requirements",
          "CORS preflight",
          "string padding",
          "git tagging"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-22-hash",
        "type": "multiple-choice",
        "prompt": "What is a common average-case benefit of a hash map lookup?",
        "correctAnswer": "O(1) lookup by key.",
        "explanation": "Hash maps are used for fast key-based access on average.\n\nExample:\nconst byId = new Map(users.map(u => [u.id, u]));",
        "options": [
          "O(1) lookup by key.",
          "Always sorted output.",
          "Built-in UI rendering.",
          "Automatic encryption."
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-23-stable",
        "type": "true-false",
        "prompt": "True or false: A stable sort preserves the relative order of equal items.",
        "correctAnswer": "True",
        "explanation": "Stable sorting matters when chaining sorts or preserving previous ordering.\n\nExample:\nWindow count always equals end - start + 1.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-24-complexity",
        "type": "type-answer",
        "prompt": "Type the notation used to describe algorithm growth as input size increases.",
        "correctAnswer": "Big O",
        "explanation": "Big O describes growth rate of runtime or memory.\n\nExample:\nO(n) grows linearly with input size.",
        "acceptedAnswers": [
          "big o",
          "big-o",
          "o notation"
        ]
      },
      {
        "id": "dsa-problem-solving-extra-q-25-communication",
        "type": "scenario",
        "prompt": "In an interview, you mention time and space complexity after coding. What are you demonstrating?",
        "correctAnswer": "engineering reasoning",
        "explanation": "Explaining trade-offs and complexity shows how you think, not just that code runs.\n\nExample:\n“This is O(n) time and O(n) space because of the Set.”",
        "options": [
          "engineering reasoning",
          "CSS specificity",
          "cookie storage",
          "npm publishing"
        ]
      }
    ]
  },
  {
    "id": "system-design-web",
    "title": "Web System Design Basics",
    "description": "Learn the practical architecture ideas behind real web applications",
    "flashcards": [
      {
        "id": "system-design-web-card-01",
        "front": "What should you know about client-server?",
        "back": "Client-server architecture separates the user-facing client from server-side logic and data.",
        "example": "browser calls API"
      },
      {
        "id": "system-design-web-card-02",
        "front": "What should you know about frontend?",
        "back": "The frontend runs in the user’s browser or app and handles UI interactions.",
        "example": "React app"
      },
      {
        "id": "system-design-web-card-03",
        "front": "What should you know about backend?",
        "back": "The backend runs on servers and handles business logic, auth and data access.",
        "example": "Express API"
      },
      {
        "id": "system-design-web-card-04",
        "front": "What should you know about database?",
        "back": "A database stores persistent application data.",
        "example": "Postgres"
      },
      {
        "id": "system-design-web-card-05",
        "front": "What should you know about cache?",
        "back": "A cache stores frequently used data temporarily to reduce latency or load.",
        "example": "Redis cache"
      },
      {
        "id": "system-design-web-card-06",
        "front": "What should you know about CDN?",
        "back": "A CDN serves static assets from locations closer to users.",
        "example": "images from CDN"
      },
      {
        "id": "system-design-web-card-07",
        "front": "What should you know about load balancer?",
        "back": "A load balancer spreads traffic across multiple servers.",
        "example": "Nginx/ALB"
      },
      {
        "id": "system-design-web-card-08",
        "front": "What should you know about horizontal scaling?",
        "back": "Horizontal scaling adds more machines or instances to handle more traffic.",
        "example": "more API pods"
      },
      {
        "id": "system-design-web-card-09",
        "front": "What should you know about vertical scaling?",
        "back": "Vertical scaling gives one machine more CPU or memory.",
        "example": "larger server"
      },
      {
        "id": "system-design-web-card-10",
        "front": "What should you know about latency?",
        "back": "Latency is the time a request takes to get a response.",
        "example": "200ms response"
      },
      {
        "id": "system-design-web-card-11",
        "front": "What should you know about throughput?",
        "back": "Throughput is how much work a system handles over time.",
        "example": "requests per second"
      },
      {
        "id": "system-design-web-card-12",
        "front": "What should you know about availability?",
        "back": "Availability is how often a system is working when users need it.",
        "example": "99.9% uptime"
      },
      {
        "id": "system-design-web-card-13",
        "front": "What should you know about reliability?",
        "back": "Reliability is the ability to keep behaving correctly over time and failures.",
        "example": "retry safe jobs"
      },
      {
        "id": "system-design-web-card-14",
        "front": "What should you know about single point of failure?",
        "back": "A single point of failure can bring down the system if it breaks.",
        "example": "one database without backup"
      },
      {
        "id": "system-design-web-card-15",
        "front": "What should you know about stateless server?",
        "back": "A stateless server does not store user session data in memory between requests.",
        "example": "token-based auth"
      },
      {
        "id": "system-design-web-card-16",
        "front": "What should you know about stateful service?",
        "back": "A stateful service stores important state and needs careful persistence.",
        "example": "database"
      },
      {
        "id": "system-design-web-card-17",
        "front": "What should you know about queue?",
        "back": "A queue stores work to be processed asynchronously.",
        "example": "send email job"
      },
      {
        "id": "system-design-web-card-18",
        "front": "What should you know about message broker?",
        "back": "A message broker moves messages between producers and consumers.",
        "example": "RabbitMQ"
      },
      {
        "id": "system-design-web-card-19",
        "front": "What should you know about event-driven design?",
        "back": "Event-driven design reacts to events rather than direct request chains.",
        "example": "user.created event"
      },
      {
        "id": "system-design-web-card-20",
        "front": "What should you know about polling?",
        "back": "Polling repeatedly asks for updates at intervals.",
        "example": "GET status every 5s"
      },
      {
        "id": "system-design-web-card-21",
        "front": "What should you know about WebSocket?",
        "back": "WebSockets keep a two-way connection open for real-time updates.",
        "example": "live chat"
      },
      {
        "id": "system-design-web-card-22",
        "front": "What should you know about rate limit design?",
        "back": "Rate limits protect systems from abuse or accidental overload.",
        "example": "100 requests/min"
      },
      {
        "id": "system-design-web-card-23",
        "front": "What should you know about API gateway?",
        "back": "An API gateway routes, secures and manages API traffic.",
        "example": "gateway before services"
      },
      {
        "id": "system-design-web-card-24",
        "front": "What should you know about monitoring?",
        "back": "Monitoring tracks system health with metrics, logs and alerts.",
        "example": "error rate alert"
      },
      {
        "id": "system-design-web-card-25",
        "front": "What should you know about graceful degradation?",
        "back": "Graceful degradation means the app still offers reduced functionality when part of it fails.",
        "example": "show cached data"
      },
      {
        "id": "system-design-web-extra-card-sli-slo",
        "front": "What are SLIs and SLOs?",
        "back": "An SLI is a measured reliability indicator, like request success rate. An SLO is a target for that indicator, like 99.9% successful requests.",
        "example": "SLI: p95 latency. SLO: p95 latency under 300ms."
      },
      {
        "id": "system-design-web-extra-card-queue",
        "front": "Why use a queue?",
        "back": "A queue buffers work so a system can process tasks asynchronously. It helps smooth traffic spikes and decouple services.",
        "example": "API -> queue -> worker sends email"
      },
      {
        "id": "system-design-web-extra-card-eventual-consistency",
        "front": "What is eventual consistency?",
        "back": "Eventual consistency means different parts of a system may briefly disagree, but they should converge later. It is common in distributed systems.",
        "example": "A newly uploaded image may take seconds to appear in search."
      },
      {
        "id": "system-design-web-extra-card-circuit-breaker",
        "front": "What is a circuit breaker?",
        "back": "A circuit breaker stops calling a failing dependency for a while. This prevents repeated slow failures from taking down the caller too.",
        "example": "If payment API fails repeatedly, stop calls briefly and show fallback."
      },
      {
        "id": "system-design-web-extra-card-load-shedding",
        "front": "What is load shedding?",
        "back": "Load shedding intentionally rejects or drops lower-priority work when a system is overloaded so critical work can keep running.",
        "example": "Return 503 for expensive reports during an outage."
      },
      {
        "id": "system-design-web-extra-card-backup-restore",
        "front": "Why test backups?",
        "back": "A backup is only useful if it can be restored. Teams should test restore procedures before an emergency.",
        "example": "Run a staging restore from last night’s backup."
      },
      {
        "id": "system-design-web-extra-card-cdn",
        "front": "What does a CDN do?",
        "back": "A content delivery network caches static assets near users, reducing latency and load on the origin server.",
        "example": "Images, JS bundles and CSS can be served from a CDN."
      },
      {
        "id": "system-design-web-extra-card-rate-limiter",
        "front": "Where can rate limiting happen?",
        "back": "Rate limiting can happen at an API gateway, load balancer, service or application layer. It protects systems from abuse and accidental overload.",
        "example": "100 requests per minute per user"
      }
    ],
    "questions": [
      {
        "id": "system-design-web-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes client-server?",
        "options": [
          "Client-server architecture separates the user-facing client from server-side logic and data.",
          "To prove backups can actually be used during an incident.",
          "A cache stores frequently used data temporarily to reduce latency or load.",
          "Vertical scaling gives one machine more CPU or memory."
        ],
        "correctAnswer": "Client-server architecture separates the user-facing client from server-side logic and data.",
        "explanation": "Client-server architecture separates the user-facing client from server-side logic and data.\n\nExample:\nbrowser calls API"
      },
      {
        "id": "system-design-web-q-02",
        "type": "true-false",
        "prompt": "True or false: The frontend runs in the user’s browser or app and handles UI interactions.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The frontend runs in the user’s browser or app and handles UI interactions.\n\nExample:\nReact app"
      },
      {
        "id": "system-design-web-q-03",
        "type": "scenario",
        "prompt": "Scenario: The UI needs data saved in a database and business rules handled on a server. Which part of the app does that work?",
        "options": [
          "backend",
          "load balancer",
          "horizontal scaling",
          "throughput"
        ],
        "correctAnswer": "backend",
        "explanation": "The backend runs on servers and handles business logic, auth and data access. Example: Express API\n\nExample:\nExpress API"
      },
      {
        "id": "system-design-web-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A database stores persistent application data.",
        "correctAnswer": "database",
        "acceptedAnswers": [
          "database",
          "database",
          "database"
        ],
        "explanation": "A database stores persistent application data.\n\nExample:\nPostgres"
      },
      {
        "id": "system-design-web-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes cache?",
        "options": [
          "A cache stores frequently used data temporarily to reduce latency or load.",
          "Reliability is the ability to keep behaving correctly over time and failures.",
          "A queue stores work to be processed asynchronously.",
          "WebSockets keep a two-way connection open for real-time updates."
        ],
        "correctAnswer": "A cache stores frequently used data temporarily to reduce latency or load.",
        "explanation": "A cache stores frequently used data temporarily to reduce latency or load.\n\nExample:\nRedis cache"
      },
      {
        "id": "system-design-web-q-06",
        "type": "true-false",
        "prompt": "True or false: A CDN serves static assets from locations closer to users.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A CDN serves static assets from locations closer to users.\n\nExample:\nimages from CDN"
      },
      {
        "id": "system-design-web-q-07",
        "type": "scenario",
        "prompt": "Scenario: Traffic is split across several servers so one server does not receive every request. What component does this?",
        "options": [
          "load balancer",
          "SLO",
          "circuit breaker",
          "backend"
        ],
        "correctAnswer": "load balancer",
        "explanation": "A load balancer spreads traffic across multiple servers. Example: Nginx/ALB\n\nExample:\nNginx/ALB"
      },
      {
        "id": "system-design-web-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Horizontal scaling adds more machines or instances to handle more traffic.",
        "correctAnswer": "horizontal scaling",
        "acceptedAnswers": [
          "horizontal scaling",
          "horizontal scaling",
          "horizontal scaling"
        ],
        "explanation": "Horizontal scaling adds more machines or instances to handle more traffic.\n\nExample:\nmore API pods"
      },
      {
        "id": "system-design-web-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes vertical scaling?",
        "options": [
          "Vertical scaling gives one machine more CPU or memory.",
          "A cache stores frequently used data temporarily to reduce latency or load.",
          "Reliability is the ability to keep behaving correctly over time and failures.",
          "A queue stores work to be processed asynchronously."
        ],
        "correctAnswer": "Vertical scaling gives one machine more CPU or memory.",
        "explanation": "Vertical scaling gives one machine more CPU or memory.\n\nExample:\nlarger server"
      },
      {
        "id": "system-design-web-q-10",
        "type": "true-false",
        "prompt": "True or false: Latency is the time a request takes to get a response.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Latency is the time a request takes to get a response.\n\nExample:\n200ms response"
      },
      {
        "id": "system-design-web-q-11",
        "type": "scenario",
        "prompt": "Scenario: You measure how many requests a service can handle per second. What metric is this?",
        "options": [
          "throughput",
          "monitoring",
          "queue",
          "SLO"
        ],
        "correctAnswer": "throughput",
        "explanation": "Throughput is how much work a system handles over time. Example: requests per second\n\nExample:\nrequests per second"
      },
      {
        "id": "system-design-web-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Availability is how often a system is working when users need it.",
        "correctAnswer": "availability",
        "acceptedAnswers": [
          "availability",
          "availability",
          "availability"
        ],
        "explanation": "Availability is how often a system is working when users need it.\n\nExample:\n99.9% uptime"
      },
      {
        "id": "system-design-web-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes reliability?",
        "options": [
          "Reliability is the ability to keep behaving correctly over time and failures.",
          "Client-server architecture separates the user-facing client from server-side logic and data.",
          "A cache stores frequently used data temporarily to reduce latency or load.",
          "Vertical scaling gives one machine more CPU or memory."
        ],
        "correctAnswer": "Reliability is the ability to keep behaving correctly over time and failures.",
        "explanation": "Reliability is the ability to keep behaving correctly over time and failures.\n\nExample:\nretry safe jobs"
      },
      {
        "id": "system-design-web-q-14",
        "type": "true-false",
        "prompt": "True or false: A single point of failure can bring down the system if it breaks.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A single point of failure can bring down the system if it breaks.\n\nExample:\none database without backup"
      },
      {
        "id": "system-design-web-q-15",
        "type": "scenario",
        "prompt": "Scenario: Any server instance can handle the next request because session data is stored externally, not in memory on one machine. What kind of server is this?",
        "options": [
          "stateless server",
          "stateful service",
          "event-driven design",
          "polling"
        ],
        "correctAnswer": "stateless server",
        "explanation": "A stateless server does not store user session data in memory between requests. Example: token-based auth\n\nExample:\ntoken-based auth"
      },
      {
        "id": "system-design-web-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A stateful service stores important state and needs careful persistence.",
        "correctAnswer": "stateful service",
        "acceptedAnswers": [
          "stateful service",
          "stateful service",
          "stateful service"
        ],
        "explanation": "A stateful service stores important state and needs careful persistence.\n\nExample:\ndatabase"
      },
      {
        "id": "system-design-web-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes queue?",
        "options": [
          "A queue stores work to be processed asynchronously.",
          "Caching and serving content closer to users.",
          "To prove backups can actually be used during an incident.",
          "Client-server architecture separates the user-facing client from server-side logic and data."
        ],
        "correctAnswer": "A queue stores work to be processed asynchronously.",
        "explanation": "A queue stores work to be processed asynchronously.\n\nExample:\nsend email job"
      },
      {
        "id": "system-design-web-q-18",
        "type": "true-false",
        "prompt": "True or false: A message broker moves messages between producers and consumers.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A message broker moves messages between producers and consumers.\n\nExample:\nRabbitMQ"
      },
      {
        "id": "system-design-web-q-19",
        "type": "scenario",
        "prompt": "Scenario: When an order is placed, other parts of the system react to an `OrderCreated` message. What design style is this?",
        "options": [
          "event-driven design",
          "API gateway",
          "monitoring",
          "queue"
        ],
        "correctAnswer": "event-driven design",
        "explanation": "Event-driven design reacts to events rather than direct request chains. Example: user.created event\n\nExample:\nuser.created event"
      },
      {
        "id": "system-design-web-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Polling repeatedly asks for updates at intervals.",
        "correctAnswer": "polling",
        "acceptedAnswers": [
          "polling",
          "polling",
          "polling"
        ],
        "explanation": "Polling repeatedly asks for updates at intervals.\n\nExample:\nGET status every 5s"
      },
      {
        "id": "system-design-web-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes WebSocket?",
        "options": [
          "WebSockets keep a two-way connection open for real-time updates.",
          "A queue stores work to be processed asynchronously.",
          "Graceful degradation means the app still offers reduced functionality when part of it fails.",
          "Caching and serving content closer to users."
        ],
        "correctAnswer": "WebSockets keep a two-way connection open for real-time updates.",
        "explanation": "WebSockets keep a two-way connection open for real-time updates.\n\nExample:\nlive chat"
      },
      {
        "id": "system-design-web-q-22",
        "type": "true-false",
        "prompt": "True or false: Rate limits protect systems from abuse or accidental overload.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Rate limits protect systems from abuse or accidental overload.\n\nExample:\n100 requests/min"
      },
      {
        "id": "system-design-web-q-23",
        "type": "scenario",
        "prompt": "Scenario: Clients call one entry point, which routes requests to the correct internal service and can handle auth/rate limits. What is this component?",
        "options": [
          "API gateway",
          "load balancer",
          "horizontal scaling",
          "throughput"
        ],
        "correctAnswer": "API gateway",
        "explanation": "An API gateway routes, secures and manages API traffic. Example: gateway before services\n\nExample:\ngateway before services"
      },
      {
        "id": "system-design-web-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: Monitoring tracks system health with metrics, logs and alerts.",
        "correctAnswer": "monitoring",
        "acceptedAnswers": [
          "monitoring",
          "monitoring",
          "monitoring"
        ],
        "explanation": "Monitoring tracks system health with metrics, logs and alerts.\n\nExample:\nerror rate alert"
      },
      {
        "id": "system-design-web-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes graceful degradation?",
        "options": [
          "Graceful degradation means the app still offers reduced functionality when part of it fails.",
          "Client-server architecture separates the user-facing client from server-side logic and data.",
          "A cache stores frequently used data temporarily to reduce latency or load.",
          "Vertical scaling gives one machine more CPU or memory."
        ],
        "correctAnswer": "Graceful degradation means the app still offers reduced functionality when part of it fails.",
        "explanation": "Graceful degradation means the app still offers reduced functionality when part of it fails.\n\nExample:\nshow cached data"
      },
      {
        "id": "system-design-web-extra-q-queue-scenario",
        "type": "scenario",
        "prompt": "Users upload videos and processing takes minutes. What design component can decouple upload from processing?",
        "correctAnswer": "queue",
        "explanation": "A queue lets the API accept work quickly while workers process jobs asynchronously.\n\nExample:\nAPI -> queue -> worker sends email",
        "options": [
          "queue",
          "CSS grid",
          "local variable",
          "template literal"
        ]
      },
      {
        "id": "system-design-web-extra-q-slo-type",
        "type": "type-answer",
        "prompt": "Type the term for a reliability target such as “99.9% of requests succeed”.",
        "correctAnswer": "SLO",
        "explanation": "An SLO is a service level objective.\n\nExample:\nSLI: p95 latency. SLO: p95 latency under 300ms.",
        "acceptedAnswers": [
          "slo",
          "service level objective"
        ]
      },
      {
        "id": "system-design-web-extra-q-eventual-tf",
        "type": "true-false",
        "prompt": "True or false: eventual consistency means data may briefly differ between systems but should converge later.",
        "correctAnswer": "True",
        "explanation": "Eventual consistency accepts temporary differences in exchange for scalability or availability.\n\nExample:\nA newly uploaded image may take seconds to appear in search.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "system-design-web-extra-q-cdn-mcq",
        "type": "multiple-choice",
        "prompt": "What is a CDN mainly used for in web systems?",
        "correctAnswer": "Caching and serving content closer to users.",
        "explanation": "CDNs reduce latency and origin load by serving assets from edge locations.\n\nExample:\nImages, JS bundles and CSS can be served from a CDN.",
        "options": [
          "Caching and serving content closer to users.",
          "Compiling TypeScript only.",
          "Replacing all databases.",
          "Writing unit tests automatically."
        ]
      },
      {
        "id": "system-design-web-extra-q-circuit-breaker-scenario",
        "type": "scenario",
        "prompt": "A downstream API keeps timing out and is slowing your app. Which reliability pattern temporarily stops calling it?",
        "correctAnswer": "circuit breaker",
        "explanation": "A circuit breaker opens after repeated failures and gives the dependency time to recover.\n\nExample:\nIf payment API fails repeatedly, stop calls briefly and show fallback.",
        "options": [
          "circuit breaker",
          "cursor pagination",
          "destructuring",
          "semantic HTML"
        ]
      },
      {
        "id": "system-design-web-extra-q-backup-restore",
        "type": "multiple-choice",
        "prompt": "Why should teams test database restores?",
        "correctAnswer": "To prove backups can actually be used during an incident.",
        "explanation": "Backups are not enough unless restore steps are known and verified.\n\nExample:\nRun a staging restore from last night’s backup.",
        "options": [
          "To prove backups can actually be used during an incident.",
          "To make queries faster in the browser.",
          "To remove the need for authentication.",
          "To replace monitoring."
        ]
      }
    ]
  },
  {
    "id": "security-performance-reliability",
    "title": "Security, Performance & Reliability",
    "description": "Learn the production-minded habits that separate code that works locally from code that survives real users.",
    "flashcards": [
      {
        "id": "security-performance-reliability-extra-card-01-perf-budget",
        "front": "What is a performance budget?",
        "back": "A performance budget sets limits for metrics like JS size, load time or image weight so performance does not slowly degrade.",
        "example": "Keep initial JS under 200 KB gzip."
      },
      {
        "id": "security-performance-reliability-extra-card-02-web-vitals",
        "front": "What are Core Web Vitals?",
        "back": "Core Web Vitals are user experience metrics such as Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift.",
        "example": "LCP, INP, CLS"
      },
      {
        "id": "security-performance-reliability-extra-card-03-lazy-images",
        "front": "Why lazy-load images?",
        "back": "Lazy loading delays off-screen images until they are needed, improving initial load and saving bandwidth.",
        "example": "<img loading=\"lazy\" />"
      },
      {
        "id": "security-performance-reliability-extra-card-04-bundle-analysis",
        "front": "What is bundle analysis?",
        "back": "Bundle analysis shows what code contributes to bundle size so you can find large dependencies or duplicate modules.",
        "example": "npx vite-bundle-visualizer"
      },
      {
        "id": "security-performance-reliability-extra-card-05-caching",
        "front": "Why cache?",
        "back": "Caching stores reusable results closer to where they are needed, reducing latency and repeated work. It needs invalidation rules.",
        "example": "Cache product list for 60 seconds."
      },
      {
        "id": "security-performance-reliability-extra-card-06-invalidation",
        "front": "Why is cache invalidation hard?",
        "back": "Cached data can become stale. You need a plan for when to refresh, expire or invalidate it after updates.",
        "example": "Invalidate device cache after PATCH /devices/:id."
      },
      {
        "id": "security-performance-reliability-extra-card-07-observability",
        "front": "What is observability?",
        "back": "Observability means understanding system behaviour through logs, metrics and traces, especially during incidents.",
        "example": "Logs + metrics + traces"
      },
      {
        "id": "security-performance-reliability-extra-card-08-metrics",
        "front": "What are metrics?",
        "back": "Metrics are numeric measurements over time, such as error rate, latency and request count. They power alerts and dashboards.",
        "example": "p95 latency, 5xx rate"
      },
      {
        "id": "security-performance-reliability-extra-card-09-tracing",
        "front": "What is tracing?",
        "back": "Tracing follows a request through multiple services so you can see where time or errors occur.",
        "example": "frontend -> API -> database -> worker"
      },
      {
        "id": "security-performance-reliability-extra-card-10-alerting",
        "front": "What makes a good alert?",
        "back": "A good alert is actionable, tied to user impact and not too noisy. Alerts should help people respond, not spam them.",
        "example": "Alert on high checkout error rate, not every debug log."
      },
      {
        "id": "security-performance-reliability-extra-card-11-graceful-degradation",
        "front": "What is graceful degradation?",
        "back": "Graceful degradation means the app still provides core value when a non-critical feature fails.",
        "example": "If recommendations fail, still show the product page."
      },
      {
        "id": "security-performance-reliability-extra-card-12-fallbacks",
        "front": "Why design fallbacks?",
        "back": "Fallbacks give users a path forward during slow APIs, missing data or failed dependencies.",
        "example": "Show cached data with a “may be outdated” note."
      },
      {
        "id": "security-performance-reliability-extra-card-13-input-sanitise",
        "front": "What is sanitisation?",
        "back": "Sanitisation cleans or escapes input/output to reduce security risk, especially when rendering untrusted HTML.",
        "example": "Escape <script> before rendering."
      },
      {
        "id": "security-performance-reliability-extra-card-14-dependency-risk",
        "front": "Why care about dependency risk?",
        "back": "Dependencies can add vulnerabilities, size, maintenance risk and supply-chain risk. Choose packages deliberately.",
        "example": "Check package health before adding it."
      },
      {
        "id": "security-performance-reliability-extra-card-15-least-data",
        "front": "What is data minimisation?",
        "back": "Data minimisation means collecting and exposing only the data needed. It reduces privacy and security risk.",
        "example": "Do not send dateOfBirth if the UI only needs displayName."
      },
      {
        "id": "security-performance-reliability-extra-card-16-secure-defaults",
        "front": "What are secure defaults?",
        "back": "Secure defaults make the safe behaviour the automatic behaviour, so developers must opt into risk intentionally.",
        "example": "Private by default, public only when explicitly enabled."
      },
      {
        "id": "security-performance-reliability-extra-card-17-rate-limit-client",
        "front": "Why handle rate limits on the client?",
        "back": "When APIs return 429, clients should slow down, show feedback and avoid retry storms.",
        "example": "Respect Retry-After header."
      },
      {
        "id": "security-performance-reliability-extra-card-18-timeout",
        "front": "Why use timeouts?",
        "back": "Timeouts stop requests from waiting forever. They let the app recover or show a useful error when dependencies hang.",
        "example": "Abort fetch after 10 seconds."
      },
      {
        "id": "security-performance-reliability-extra-card-19-idempotent-retry",
        "front": "Why should retries be safe?",
        "back": "Retries can accidentally duplicate actions. Idempotency keys or idempotent methods help prevent duplicate payments or submissions.",
        "example": "Idempotency-Key: abc123"
      },
      {
        "id": "security-performance-reliability-extra-card-20-feature-flag-risk",
        "front": "How do feature flags improve reliability?",
        "back": "Feature flags allow gradual rollout and quick disable without redeploying, reducing release risk.",
        "example": "Turn off new checkout flow after errors spike."
      },
      {
        "id": "security-performance-reliability-extra-card-21-pii",
        "front": "What is PII?",
        "back": "Personally identifiable information is data that can identify a person. Handle it carefully and avoid logging it unnecessarily.",
        "example": "Email address, full name, NI number"
      },
      {
        "id": "security-performance-reliability-extra-card-22-secure-logging",
        "front": "What should you avoid logging?",
        "back": "Avoid logging secrets, tokens, passwords and unnecessary personal data. Logs are often widely accessible internally.",
        "example": "Never log Authorization headers."
      },
      {
        "id": "security-performance-reliability-extra-card-23-performance-profile",
        "front": "What is profiling?",
        "back": "Profiling measures where time is spent so you optimise real bottlenecks instead of guessing.",
        "example": "Chrome Performance tab flame chart"
      },
      {
        "id": "security-performance-reliability-extra-card-24-memory-leak",
        "front": "What is a frontend memory leak?",
        "back": "A memory leak happens when unused objects stay referenced, often through uncleared timers, listeners or subscriptions.",
        "example": "setInterval without clearInterval on unmount"
      },
      {
        "id": "security-performance-reliability-extra-card-25-incident-review",
        "front": "What is a blameless postmortem?",
        "back": "A blameless postmortem reviews what happened, impact, causes and actions after an incident without focusing on personal blame.",
        "example": "Timeline, root causes, follow-up actions"
      }
    ],
    "questions": [
      {
        "id": "security-performance-reliability-extra-q-01-budget",
        "type": "multiple-choice",
        "prompt": "What is a performance budget?",
        "correctAnswer": "A limit for metrics like bundle size or load time.",
        "explanation": "Performance budgets stop apps getting slower gradually.\n\nExample:\nKeep initial JS under 200 KB gzip.",
        "options": [
          "A limit for metrics like bundle size or load time.",
          "A team salary spreadsheet.",
          "A database backup only.",
          "A TypeScript utility type."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-02-vitals",
        "type": "type-answer",
        "prompt": "Type one Core Web Vital abbreviation related to layout movement.",
        "correctAnswer": "CLS",
        "explanation": "CLS stands for Cumulative Layout Shift.\n\nExample:\nLCP, INP, CLS",
        "acceptedAnswers": [
          "CLS",
          "cumulative layout shift"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-03-lazy",
        "type": "true-false",
        "prompt": "True or false: Lazy-loading off-screen images can improve initial page load.",
        "correctAnswer": "True",
        "explanation": "Off-screen images do not need to block initial loading.\n\nExample:\n<img loading=\"lazy\" />",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-04-cache",
        "type": "scenario",
        "prompt": "A product list is requested often and changes rarely. What technique can reduce repeated server work?",
        "correctAnswer": "caching",
        "explanation": "Caching reusable results can reduce latency and load.\n\nExample:\nCache product list for 60 seconds.",
        "options": [
          "caching",
          "infinite polling",
          "removing all headers",
          "array splice"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-05-invalidate",
        "type": "multiple-choice",
        "prompt": "What is a cache invalidation problem?",
        "correctAnswer": "Knowing when cached data should be refreshed or removed.",
        "explanation": "Cached data can become stale after changes.\n\nExample:\nInvalidate device cache after PATCH /devices/:id.",
        "options": [
          "Knowing when cached data should be refreshed or removed.",
          "Making CSS valid.",
          "Choosing a variable name.",
          "Creating a React ref."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-06-observability",
        "type": "multiple-choice",
        "prompt": "Which trio is commonly associated with observability?",
        "correctAnswer": "logs, metrics and traces",
        "explanation": "These signals help teams understand production behaviour.\n\nExample:\nLogs + metrics + traces",
        "options": [
          "logs, metrics and traces",
          "HTML, CSS and JPEG",
          "map, filter and reduce",
          "major, minor and patch"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-07-alert",
        "type": "scenario",
        "prompt": "An alert fires every minute for harmless debug events. What is wrong?",
        "correctAnswer": "it is noisy and not actionable",
        "explanation": "Good alerts should be meaningful and tied to user impact.\n\nExample:\nAlert on high checkout error rate, not every debug log.",
        "options": [
          "it is noisy and not actionable",
          "it uses too many array methods",
          "it is typed with unknown",
          "it has too much whitespace"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-08-timeout",
        "type": "type-answer",
        "prompt": "Type the reliability concept that stops an operation waiting forever.",
        "correctAnswer": "timeout",
        "explanation": "Timeouts let apps recover from hanging operations.\n\nExample:\nAbort fetch after 10 seconds.",
        "acceptedAnswers": [
          "timeout",
          "timeouts"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-09-retry",
        "type": "scenario",
        "prompt": "A payment request times out and the client retries, risking duplicate charges. What can make retrying safer?",
        "correctAnswer": "idempotency key",
        "explanation": "Idempotency keys let the server recognise duplicate retries of the same action.\n\nExample:\nIdempotency-Key: abc123",
        "options": [
          "idempotency key",
          "CSS reset",
          "Object.values",
          "screen reader label"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-10-pii",
        "type": "multiple-choice",
        "prompt": "Which is an example of PII?",
        "correctAnswer": "A user’s email address.",
        "explanation": "PII can identify a person and should be handled carefully.\n\nExample:\nEmail address, full name, NI number",
        "options": [
          "A user’s email address.",
          "A generic button colour.",
          "A public npm package name.",
          "A local variable called count."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-11-logging",
        "type": "true-false",
        "prompt": "True or false: It is safe to log Authorization headers in production because logs are private.",
        "correctAnswer": "False",
        "explanation": "Logs can be accessed by many systems/people and should not contain secrets.\n\nExample:\nNever log Authorization headers.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-12-profile",
        "type": "type-answer",
        "prompt": "Type the process of measuring where code spends time before optimising.",
        "correctAnswer": "profiling",
        "explanation": "Profiling helps identify real bottlenecks.\n\nExample:\nChrome Performance tab flame chart",
        "acceptedAnswers": [
          "profiling",
          "profile"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-13-memory",
        "type": "scenario",
        "prompt": "A component adds a window event listener every mount and never removes it. What issue can this cause?",
        "correctAnswer": "memory leak",
        "explanation": "Unremoved listeners can keep references alive and duplicate work.\n\nExample:\nsetInterval without clearInterval on unmount",
        "options": [
          "memory leak",
          "HTTP 201",
          "type literal",
          "git tag"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-14-feature",
        "type": "multiple-choice",
        "prompt": "How can a feature flag help during an incident?",
        "correctAnswer": "It can disable a risky feature quickly without a new deployment.",
        "explanation": "Feature flags reduce release and incident response risk.\n\nExample:\nTurn off new checkout flow after errors spike.",
        "options": [
          "It can disable a risky feature quickly without a new deployment.",
          "It encrypts every API call.",
          "It makes tests unnecessary.",
          "It changes all POSTs into GETs."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-15-data-min",
        "type": "multiple-choice",
        "prompt": "What does data minimisation mean?",
        "correctAnswer": "Collecting/exposing only the data needed.",
        "explanation": "Less data means less privacy and security risk.\n\nExample:\nDo not send dateOfBirth if the UI only needs displayName.",
        "options": [
          "Collecting/exposing only the data needed.",
          "Storing every possible field.",
          "Logging all user data for convenience.",
          "Making all strings lowercase."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-16-secure-default",
        "type": "true-false",
        "prompt": "True or false: Secure defaults mean the safest option should usually be the default behaviour.",
        "correctAnswer": "True",
        "explanation": "Secure defaults reduce accidental insecure usage.\n\nExample:\nPrivate by default, public only when explicitly enabled.",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-17-rate-limit",
        "type": "scenario",
        "prompt": "An API returns 429 with Retry-After. What should the client do?",
        "correctAnswer": "slow down and respect Retry-After",
        "explanation": "Respecting rate limits prevents retry storms and improves UX.\n\nExample:\nRespect Retry-After header.",
        "options": [
          "slow down and respect Retry-After",
          "retry in a tight loop",
          "delete the user token",
          "ignore the response body"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-18-graceful",
        "type": "multiple-choice",
        "prompt": "What is graceful degradation?",
        "correctAnswer": "Keeping core functionality working when a non-critical feature fails.",
        "explanation": "Graceful degradation prevents total failure when part of the system is down.\n\nExample:\nIf recommendations fail, still show the product page.",
        "options": [
          "Keeping core functionality working when a non-critical feature fails.",
          "Making every feature admin-only.",
          "Removing all loading states.",
          "Writing only unit tests."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-19-bundle",
        "type": "scenario",
        "prompt": "Your app ships a surprisingly huge JS file. What tool/process helps find the largest dependencies?",
        "correctAnswer": "bundle analysis",
        "explanation": "Bundle analysis visualises what contributes to bundle size.\n\nExample:\nnpx vite-bundle-visualizer",
        "options": [
          "bundle analysis",
          "CSRF token",
          "binary search",
          "ARIA live region"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-20-sanitise",
        "type": "type-answer",
        "prompt": "Type the security process of cleaning/escaping untrusted input before rendering it.",
        "correctAnswer": "sanitisation",
        "explanation": "Sanitisation helps prevent unsafe content from executing or rendering badly.\n\nExample:\nEscape <script> before rendering.",
        "acceptedAnswers": [
          "sanitisation",
          "sanitization",
          "sanitize",
          "sanitise"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-21-deps",
        "type": "multiple-choice",
        "prompt": "Why review dependencies before adding them?",
        "correctAnswer": "They can affect security, bundle size and maintenance risk.",
        "explanation": "Dependencies are useful but come with trade-offs.\n\nExample:\nCheck package health before adding it.",
        "options": [
          "They can affect security, bundle size and maintenance risk.",
          "They always make apps smaller.",
          "They remove the need for code review.",
          "They are invisible to users always."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-22-postmortem",
        "type": "multiple-choice",
        "prompt": "What is a blameless postmortem for?",
        "correctAnswer": "Learning from an incident and defining follow-up actions without personal blame.",
        "explanation": "Postmortems improve systems and response processes.\n\nExample:\nTimeline, root causes, follow-up actions",
        "options": [
          "Learning from an incident and defining follow-up actions without personal blame.",
          "Punishing the newest developer.",
          "Formatting code automatically.",
          "Creating CSS variables."
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-23-metrics",
        "type": "type-answer",
        "prompt": "Type the production signal category for numeric values like error rate and latency.",
        "correctAnswer": "metrics",
        "explanation": "Metrics are numeric time-series measurements.\n\nExample:\np95 latency, 5xx rate",
        "acceptedAnswers": [
          "metrics",
          "metric"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-24-tracing",
        "type": "scenario",
        "prompt": "A request travels through frontend, API, worker and database. You need to see where it slows down. What observability signal helps?",
        "correctAnswer": "tracing",
        "explanation": "Tracing follows a request across system boundaries.\n\nExample:\nfrontend -> API -> database -> worker",
        "options": [
          "tracing",
          "string padding",
          "component props",
          "semantic commits"
        ]
      },
      {
        "id": "security-performance-reliability-extra-q-25-fallback",
        "type": "true-false",
        "prompt": "True or false: Fallback UI can help users continue when optional data fails to load.",
        "correctAnswer": "True",
        "explanation": "Fallbacks can preserve core flows when non-critical dependencies fail.\n\nExample:\nIf recommendations fail, still show the product page.",
        "options": [
          "True",
          "False"
        ]
      }
    ]
  },
  {
    "id": "professional-dev-workflows",
    "title": "Professional Dev Workflow",
    "description": "Practise the tools and habits used on real engineering teams",
    "flashcards": [
      {
        "id": "professional-dev-workflows-card-01",
        "front": "What should you know about Git commit?",
        "back": "A Git commit saves a snapshot of changes with a message explaining why.",
        "example": "git commit -m"
      },
      {
        "id": "professional-dev-workflows-card-02",
        "front": "What should you know about branch?",
        "back": "A branch lets you work on changes without touching the main line directly.",
        "example": "feature/add-quiz"
      },
      {
        "id": "professional-dev-workflows-card-03",
        "front": "What should you know about merge?",
        "back": "A merge combines changes from one branch into another.",
        "example": "git merge main"
      },
      {
        "id": "professional-dev-workflows-card-04",
        "front": "What should you know about rebase?",
        "back": "A rebase replays commits on top of another branch to create a cleaner history.",
        "example": "git rebase main"
      },
      {
        "id": "professional-dev-workflows-card-05",
        "front": "What should you know about pull request?",
        "back": "A pull request proposes changes and invites review before merging.",
        "example": "open PR"
      },
      {
        "id": "professional-dev-workflows-card-06",
        "front": "What should you know about code review?",
        "back": "Code review improves quality through feedback before code reaches users.",
        "example": "request changes"
      },
      {
        "id": "professional-dev-workflows-card-07",
        "front": "What should you know about CI?",
        "back": "CI automatically checks code with tests, linting or builds on each change.",
        "example": "GitHub Actions"
      },
      {
        "id": "professional-dev-workflows-card-08",
        "front": "What should you know about CD?",
        "back": "CD automatically prepares or deploys code after checks pass.",
        "example": "deploy pipeline"
      },
      {
        "id": "professional-dev-workflows-card-09",
        "front": "What should you know about environment variable?",
        "back": "Environment variables configure apps without hardcoding secrets or environment-specific values.",
        "example": "VITE_API_URL"
      },
      {
        "id": "professional-dev-workflows-card-10",
        "front": "What should you know about feature flag?",
        "back": "A feature flag turns functionality on or off without redeploying code.",
        "example": "enableNewSearch"
      },
      {
        "id": "professional-dev-workflows-card-11",
        "front": "What should you know about semantic versioning?",
        "back": "Semantic versioning communicates breaking, feature and patch changes.",
        "example": "1.4.2"
      },
      {
        "id": "professional-dev-workflows-card-12",
        "front": "What should you know about changelog?",
        "back": "A changelog records meaningful changes between versions.",
        "example": "Added quiz results"
      },
      {
        "id": "professional-dev-workflows-card-13",
        "front": "What should you know about issue ticket?",
        "back": "An issue ticket describes work, context, acceptance criteria and discussion.",
        "example": "Jira ticket"
      },
      {
        "id": "professional-dev-workflows-card-14",
        "front": "What should you know about acceptance criteria?",
        "back": "Acceptance criteria define what must be true for work to be considered done.",
        "example": "Given/When/Then"
      },
      {
        "id": "professional-dev-workflows-card-15",
        "front": "What should you know about definition of done?",
        "back": "Definition of done is the team’s shared quality bar before work is complete.",
        "example": "tests pass, reviewed"
      },
      {
        "id": "professional-dev-workflows-card-16",
        "front": "What should you know about Agile sprint?",
        "back": "A sprint is a short planned period of work, often one or two weeks.",
        "example": "2-week sprint"
      },
      {
        "id": "professional-dev-workflows-card-17",
        "front": "What should you know about standup?",
        "back": "A standup is a short team sync on progress, blockers and plans.",
        "example": "daily standup"
      },
      {
        "id": "professional-dev-workflows-card-18",
        "front": "What should you know about retrospective?",
        "back": "A retrospective helps the team improve its process after a sprint.",
        "example": "what went well"
      },
      {
        "id": "professional-dev-workflows-card-19",
        "front": "What should you know about documentation?",
        "back": "Documentation explains how code, systems or decisions work for future readers.",
        "example": "README"
      },
      {
        "id": "professional-dev-workflows-card-20",
        "front": "What should you know about README?",
        "back": "A README explains what the project is and how to run or use it.",
        "example": "npm install"
      },
      {
        "id": "professional-dev-workflows-card-21",
        "front": "What should you know about ADR?",
        "back": "An ADR records an important architecture decision and why it was made.",
        "example": "ADR-001"
      },
      {
        "id": "professional-dev-workflows-card-22",
        "front": "What should you know about dependency update?",
        "back": "Dependency updates bring fixes and features but need testing for breaking changes.",
        "example": "npm update"
      },
      {
        "id": "professional-dev-workflows-card-23",
        "front": "What should you know about security audit?",
        "back": "A security audit checks dependencies or code for known vulnerabilities.",
        "example": "npm audit"
      },
      {
        "id": "professional-dev-workflows-card-24",
        "front": "What should you know about release branch?",
        "back": "A release branch stabilises code before shipping a version.",
        "example": "release/1.2"
      },
      {
        "id": "professional-dev-workflows-card-25",
        "front": "What should you know about rollback?",
        "back": "A rollback restores a previous working version if a release causes problems.",
        "example": "rollback deployment"
      },
      {
        "id": "professional-dev-workflows-extra-card-conventional-commits",
        "front": "What are Conventional Commits?",
        "back": "Conventional Commits use prefixes like feat:, fix: and chore: to make commit intent clear and support automated changelogs.",
        "example": "feat: add quiz results summary"
      },
      {
        "id": "professional-dev-workflows-extra-card-trunk-based",
        "front": "What is trunk-based development?",
        "back": "Trunk-based development means developers integrate small changes into the main branch frequently, often using feature flags for unfinished work.",
        "example": "Small PRs merged daily into main."
      },
      {
        "id": "professional-dev-workflows-extra-card-feature-flags",
        "front": "What are feature flags?",
        "back": "Feature flags let teams ship code with features turned on or off by configuration. They reduce release risk and support gradual rollout.",
        "example": "if (flags.newDashboard) showNewDashboard();"
      },
      {
        "id": "professional-dev-workflows-extra-card-semver",
        "front": "What is semantic versioning?",
        "back": "Semantic versioning uses major.minor.patch. Major means breaking change, minor means backwards-compatible feature, patch means backwards-compatible fix.",
        "example": "2.4.1"
      },
      {
        "id": "professional-dev-workflows-extra-card-adr",
        "front": "What is an ADR?",
        "back": "An Architecture Decision Record briefly documents an important technical decision, context, options and consequences. It helps future developers understand why choices were made.",
        "example": "ADR: Use Supabase for auth in MVP"
      },
      {
        "id": "professional-dev-workflows-extra-card-codeowners",
        "front": "What is CODEOWNERS?",
        "back": "CODEOWNERS maps files or folders to people/teams who should review changes. It helps route PR reviews to the right experts.",
        "example": "/src/design-system/ @team/design-system"
      },
      {
        "id": "professional-dev-workflows-extra-card-dependency-updates",
        "front": "Why update dependencies regularly?",
        "back": "Regular dependency updates reduce security risk, keep tooling supported and make upgrades smaller. Automated PRs can help but still need review.",
        "example": "Dependabot opens a Vite patch update PR."
      },
      {
        "id": "professional-dev-workflows-extra-card-rollback-plan",
        "front": "What is a rollback plan?",
        "back": "A rollback plan explains how to return to a safe previous version if a release causes problems. It is part of responsible deployment.",
        "example": "Revert deployment to version 1.8.3 if error rate rises."
      }
    ],
    "questions": [
      {
        "id": "professional-dev-workflows-q-01",
        "type": "multiple-choice",
        "prompt": "Which option best describes Git commit?",
        "options": [
          "A Git commit saves a snapshot of changes with a message explaining why.",
          "A pull request proposes changes and invites review before merging.",
          "Environment variables configure apps without hardcoding secrets or environment-specific values.",
          "An issue ticket describes work, context, acceptance criteria and discussion."
        ],
        "correctAnswer": "A Git commit saves a snapshot of changes with a message explaining why.",
        "explanation": "A Git commit saves a snapshot of changes with a message explaining why.\n\nExample:\ngit commit -m"
      },
      {
        "id": "professional-dev-workflows-q-02",
        "type": "true-false",
        "prompt": "True or false: A branch lets you work on changes without touching the main line directly.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A branch lets you work on changes without touching the main line directly.\n\nExample:\nGiven/When/Then"
      },
      {
        "id": "professional-dev-workflows-q-03",
        "type": "scenario",
        "prompt": "Scenario: A completed feature branch needs to be combined back into `main`. What Git action is this?",
        "options": [
          "merge",
          "CI",
          "CD",
          "semantic versioning"
        ],
        "correctAnswer": "merge",
        "explanation": "A merge combines changes from one branch into another. Example: git merge main\n\nExample:\ngit merge main"
      },
      {
        "id": "professional-dev-workflows-q-04",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A rebase replays commits on top of another branch to create a cleaner history.",
        "correctAnswer": "rebase",
        "acceptedAnswers": [
          "rebase",
          "rebase",
          "rebase"
        ],
        "explanation": "A rebase replays commits on top of another branch to create a cleaner history.\n\nExample:\ngit rebase main"
      },
      {
        "id": "professional-dev-workflows-q-05",
        "type": "multiple-choice",
        "prompt": "Which option best describes pull request?",
        "options": [
          "A pull request proposes changes and invites review before merging.",
          "A Git commit saves a snapshot of changes with a message explaining why.",
          "Environment variables configure apps without hardcoding secrets or environment-specific values.",
          "An issue ticket describes work, context, acceptance criteria and discussion."
        ],
        "correctAnswer": "A pull request proposes changes and invites review before merging.",
        "explanation": "A pull request proposes changes and invites review before merging.\n\nExample:\nopen PR"
      },
      {
        "id": "professional-dev-workflows-q-06",
        "type": "true-false",
        "prompt": "True or false: Code review improves quality through feedback before code reaches users.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Code review improves quality through feedback before code reaches users.\n\nExample:\nrequest changes"
      },
      {
        "id": "professional-dev-workflows-q-07",
        "type": "scenario",
        "prompt": "Scenario: Every push automatically runs tests and checks before the code is accepted. What practice is this?",
        "options": [
          "CI",
          "rollback plan",
          "merge",
          "rebase"
        ],
        "correctAnswer": "CI",
        "explanation": "CI automatically checks code with tests, linting or builds on each change. Example: GitHub Actions\n\nExample:\nGitHub Actions"
      },
      {
        "id": "professional-dev-workflows-q-08",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: CD automatically prepares or deploys code after checks pass.",
        "correctAnswer": "CD",
        "acceptedAnswers": [
          "CD",
          "CD",
          "CD"
        ],
        "explanation": "CD automatically prepares or deploys code after checks pass.\n\nExample:\ndeploy pipeline"
      },
      {
        "id": "professional-dev-workflows-q-09",
        "type": "multiple-choice",
        "prompt": "Which option best describes environment variable?",
        "options": [
          "Environment variables configure apps without hardcoding secrets or environment-specific values.",
          "A standup is a short team sync on progress, blockers and plans.",
          "An ADR records an important architecture decision and why it was made.",
          "A rollback restores a previous working version if a release causes problems."
        ],
        "correctAnswer": "Environment variables configure apps without hardcoding secrets or environment-specific values.",
        "explanation": "Environment variables configure apps without hardcoding secrets or environment-specific values.\n\nExample:\nVITE_API_URL"
      },
      {
        "id": "professional-dev-workflows-q-10",
        "type": "true-false",
        "prompt": "True or false: A feature flag turns functionality on or off without redeploying code.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A feature flag turns functionality on or off without redeploying code.\n\nExample:\nGiven/When/Then"
      },
      {
        "id": "professional-dev-workflows-q-11",
        "type": "scenario",
        "prompt": "Scenario: A library version changes from `1.4.2` to `2.0.0` to show a breaking change. What versioning system is this?",
        "options": [
          "semantic versioning",
          "major",
          "rollback plan",
          "merge"
        ],
        "correctAnswer": "semantic versioning",
        "explanation": "Semantic versioning communicates breaking, feature and patch changes. Example: 1.4.2\n\nExample:\n1.4.2"
      },
      {
        "id": "professional-dev-workflows-q-12",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A changelog records meaningful changes between versions.",
        "correctAnswer": "changelog",
        "acceptedAnswers": [
          "changelog",
          "changelog",
          "changelog"
        ],
        "explanation": "A changelog records meaningful changes between versions.\n\nExample:\nAdded quiz results"
      },
      {
        "id": "professional-dev-workflows-q-13",
        "type": "multiple-choice",
        "prompt": "Which option best describes issue ticket?",
        "options": [
          "An issue ticket describes work, context, acceptance criteria and discussion.",
          "A Git commit saves a snapshot of changes with a message explaining why.",
          "A pull request proposes changes and invites review before merging.",
          "Environment variables configure apps without hardcoding secrets or environment-specific values."
        ],
        "correctAnswer": "An issue ticket describes work, context, acceptance criteria and discussion.",
        "explanation": "An issue ticket describes work, context, acceptance criteria and discussion.\n\nExample:\nJira ticket"
      },
      {
        "id": "professional-dev-workflows-q-14",
        "type": "true-false",
        "prompt": "True or false: Acceptance criteria define what must be true for work to be considered done.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Acceptance criteria define what must be true for work to be considered done.\n\nExample:\nGiven/When/Then"
      },
      {
        "id": "professional-dev-workflows-q-15",
        "type": "scenario",
        "prompt": "Scenario: A team agrees that a ticket is only complete once code is reviewed, tested, documented, and deployed. What is this agreement called?",
        "options": [
          "definition of done",
          "rollback plan",
          "merge",
          "rebase"
        ],
        "correctAnswer": "definition of done",
        "explanation": "Definition of done is the team’s shared quality bar before work is complete. Example: tests pass, reviewed\n\nExample:\ntests pass, reviewed"
      },
      {
        "id": "professional-dev-workflows-q-16",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A sprint is a short planned period of work, often one or two weeks.",
        "correctAnswer": "Agile sprint",
        "acceptedAnswers": [
          "Agile sprint",
          "Agile sprint",
          "Agile sprint"
        ],
        "explanation": "A sprint is a short planned period of work, often one or two weeks.\n\nExample:\n2-week sprint"
      },
      {
        "id": "professional-dev-workflows-q-17",
        "type": "multiple-choice",
        "prompt": "Which option best describes standup?",
        "options": [
          "A standup is a short team sync on progress, blockers and plans.",
          "A Git commit saves a snapshot of changes with a message explaining why.",
          "A pull request proposes changes and invites review before merging.",
          "Environment variables configure apps without hardcoding secrets or environment-specific values."
        ],
        "correctAnswer": "A standup is a short team sync on progress, blockers and plans.",
        "explanation": "A standup is a short team sync on progress, blockers and plans.\n\nExample:\ndaily standup"
      },
      {
        "id": "professional-dev-workflows-q-18",
        "type": "true-false",
        "prompt": "True or false: A retrospective helps the team improve its process after a sprint.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A retrospective helps the team improve its process after a sprint.\n\nExample:\nGiven/When/Then"
      },
      {
        "id": "professional-dev-workflows-q-19",
        "type": "scenario",
        "prompt": "Scenario: A teammate needs instructions explaining how to run the project and use its API. What should be written?",
        "options": [
          "documentation",
          "CI",
          "CD",
          "semantic versioning"
        ],
        "correctAnswer": "documentation",
        "explanation": "Documentation explains how code, systems or decisions work for future readers. Example: README\n\nExample:\nREADME"
      },
      {
        "id": "professional-dev-workflows-q-20",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A README explains what the project is and how to run or use it.",
        "correctAnswer": "README",
        "acceptedAnswers": [
          "README",
          "README",
          "README"
        ],
        "explanation": "A README explains what the project is and how to run or use it.\n\nExample:\nnpm install"
      },
      {
        "id": "professional-dev-workflows-q-21",
        "type": "multiple-choice",
        "prompt": "Which option best describes ADR?",
        "options": [
          "An ADR records an important architecture decision and why it was made.",
          "A rollback restores a previous working version if a release causes problems.",
          "Automatically suggesting or requiring reviewers for certain files.",
          "A Git commit saves a snapshot of changes with a message explaining why."
        ],
        "correctAnswer": "An ADR records an important architecture decision and why it was made.",
        "explanation": "An ADR records an important architecture decision and why it was made.\n\nExample:\nADR-001"
      },
      {
        "id": "professional-dev-workflows-q-22",
        "type": "true-false",
        "prompt": "True or false: Dependency updates bring fixes and features but need testing for breaking changes.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Dependency updates bring fixes and features but need testing for breaking changes.\n\nExample:\nnpm update"
      },
      {
        "id": "professional-dev-workflows-q-23",
        "type": "scenario",
        "prompt": "Scenario: The team reviews dependencies, permissions, secrets, and common vulnerabilities before release. What activity is this?",
        "options": [
          "security audit",
          "Agile sprint",
          "documentation",
          "README"
        ],
        "correctAnswer": "security audit",
        "explanation": "A security audit checks dependencies or code for known vulnerabilities. Example: npm audit\n\nExample:\nnpm audit"
      },
      {
        "id": "professional-dev-workflows-q-24",
        "type": "type-answer",
        "prompt": "Type the key syntax, method, or concept name for this description: A release branch stabilises code before shipping a version.",
        "correctAnswer": "release branch",
        "acceptedAnswers": [
          "release branch",
          "release branch",
          "release branch"
        ],
        "explanation": "A release branch stabilises code before shipping a version.\n\nExample:\nrelease/1.2"
      },
      {
        "id": "professional-dev-workflows-q-25",
        "type": "multiple-choice",
        "prompt": "Which option best describes rollback?",
        "options": [
          "A rollback restores a previous working version if a release causes problems.",
          "An issue ticket describes work, context, acceptance criteria and discussion.",
          "A standup is a short team sync on progress, blockers and plans.",
          "An ADR records an important architecture decision and why it was made."
        ],
        "correctAnswer": "A rollback restores a previous working version if a release causes problems.",
        "explanation": "A rollback restores a previous working version if a release causes problems.\n\nExample:\nrollback deployment"
      },
      {
        "id": "professional-dev-workflows-extra-q-conventional-type",
        "type": "type-answer",
        "prompt": "Type the commit prefix commonly used for a bug fix in Conventional Commits.",
        "correctAnswer": "fix:",
        "explanation": "fix: marks a commit as a bug fix.\n\nExample:\nfeat: add quiz results summary",
        "acceptedAnswers": [
          "fix",
          "fix:"
        ]
      },
      {
        "id": "professional-dev-workflows-extra-q-feature-flag-scenario",
        "type": "scenario",
        "prompt": "You want to merge unfinished code safely and enable it later for 10% of users. What should you use?",
        "correctAnswer": "feature flag",
        "explanation": "Feature flags separate code deployment from feature release.\n\nExample:\nSmall PRs merged daily into main.",
        "options": [
          "feature flag",
          "git blame",
          "npm audit",
          "manual rebase only"
        ]
      },
      {
        "id": "professional-dev-workflows-extra-q-semver-mcq",
        "type": "multiple-choice",
        "prompt": "In semantic versioning, which number usually changes for a breaking change?",
        "correctAnswer": "major",
        "explanation": "Major version changes indicate breaking changes.\n\nExample:\n2.4.1",
        "options": [
          "major",
          "minor",
          "patch",
          "build metadata only"
        ]
      },
      {
        "id": "professional-dev-workflows-extra-q-adr-tf",
        "type": "true-false",
        "prompt": "True or false: An ADR records why an important technical decision was made.",
        "correctAnswer": "True",
        "explanation": "ADRs capture context, decision and consequences so future developers understand the reasoning.\n\nExample:\nGiven/When/Then",
        "options": [
          "True",
          "False"
        ]
      },
      {
        "id": "professional-dev-workflows-extra-q-codeowners-purpose",
        "type": "multiple-choice",
        "prompt": "What is CODEOWNERS used for?",
        "correctAnswer": "Automatically suggesting or requiring reviewers for certain files.",
        "explanation": "CODEOWNERS maps paths to people or teams responsible for reviewing changes.\n\nExample:\n/src/design-system/ @team/design-system",
        "options": [
          "Automatically suggesting or requiring reviewers for certain files.",
          "Compiling CSS.",
          "Encrypting secrets.",
          "Replacing package-lock.json."
        ]
      },
      {
        "id": "professional-dev-workflows-extra-q-rollback-scenario",
        "type": "scenario",
        "prompt": "A release causes a spike in errors. What prepared plan helps restore the previous working version quickly?",
        "correctAnswer": "rollback plan",
        "explanation": "A rollback plan reduces incident time by making recovery steps clear.\n\nExample:\nRevert deployment to version 1.8.3 if error rate rises.",
        "options": [
          "rollback plan",
          "fix:",
          "feature flag",
          "major"
        ]
      }
    ]
  }
] satisfies Topic[];
