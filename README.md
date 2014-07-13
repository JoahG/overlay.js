# overlay.js

zero-config overlay/modal server based on jQuery.

---

to initialize overlay.js, simply include the overlay.js css and js files (and jQuery, since it's a dependency):

```html
    <head>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="path/to/overlay.js"></script>

        <link rel="stylesheet" href="path/to/overlay.css">
    </head>
```

then add the HTML to the top of your `<body>`:

```html
    <div class="overlay">
      <div class="modal">
        <h1>Hello World</h1>
        <p>This is a modal.</p>
      </div>
    </div>
```

and call the `.overlay()` jQuery method on your overlay (in this case `.overlay`):

```javascript
    $(document).ready(function() {
      $('.overlay').overlay();
    });
```

that's it! you now have a fully functional overlay/modal combination!

to add a trigger to show your overlay, simply add a `data-overlay-trigger` attribute to an anchor (`<a>`) in your page:

```html
    <a href="#!" data-overlay-trigger>I'm a trigger</a>
```

##Author

overlay.js is written and maintained by [Joah Gerstenberg](http://www.joahg.com), copyright 2014.