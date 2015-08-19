# overlay.js

zero-config overlay/modal server.

---

#Configuration

To initialize overlay.js, simply include the overlay.js css and js files. If you prefer a jQuery plugin, include jQuery as well. Otherwise, Overlay.js will expose a global object.

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

---

#Usage

##Initialize

###Vanilla javascript

```javascript
    function ready(fn) {
        if (document.readyState != 'loading')
            fn();
        else
            document.addEventListener('DOMContentLoaded', fn);    
    }
    
    ready(function(){
        window.Overlay.init();
    });
```

##jQuery

Call the `.overlay()` jQuery method on your overlay (in this case `.overlay`):

```javascript
    $(document).ready(function() {
      $('.overlay').overlay();
    });
```

##Add a trigger

To add a trigger to show your overlay, simply add a `data-overlay-trigger` attribute to an anchor (`<a>`) in your page:

```html
    <a href="#!" data-overlay-trigger>I'm a trigger</a>
```

##Add a close button

To add a close button, simply add a `data-overlay-close`.

```html
    <a href="#!" data-overlay-close>Close the overlay</a>
```

##Named Modals

If you need multiple overlays on a page, give each one a unique id, then pass that id to the trigger and close.

```html
    <a href="#!" data-overlay-trigger="custom-modal">Open my custom modal!</a>
    
    <div class="overlay">
      <div class="modal">
        <h1>Hello World</h1>
        <p>This is a modal.</p>
        <a href="#!" data-overlay-close="custom-modal">I'm done reading this overlay, close it!</a>
      </div>
    </div>
```

---

That's it! you now have a fully functional overlay/modal combination!

##Author

overlay.js is written and maintained by [Joah Gerstenberg](http://www.joahg.com), copyright 2014.