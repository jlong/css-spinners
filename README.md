CSS Spinners
===========

Simple CSS loading indicators made with CSS and minimal HTML markup.

![screenshot](http://f.cl.ly/items/033Q0Q202X430L1S2Z0A/css-spinners.png)

All loading indicators are designed to be used with minimal markup:

```html
<div class="loading-indicator">
	Loading...
</div>
```

Simply replace "loading-indicator" with the class name of your choice.

Markup
------

To use a specific loading indicator link the appropriate file:

```html
<link rel="stylesheet" href="css/spinner/throbber.css">
```

Or, if you'd like to have access to the entire library of spinners you can link the root file:

```html
<link rel="stylesheet" href="css/spinners.css">
```

Then apply the appropriate [class name](#class-names) for the spinner of your choice to the markup:

```html
<div class="throbber-loader">
	Loading...
</div>
```

Class names
-----------

The full list of loading indicator class names are shown below. To see them in action, visit http://css-spinners.com/.

| Class                  | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| .spinner-loader        | Spinning circles.                                              |
| .throbber-loader       | Animated Facebook-like throbber.                               |
| .refreshing-loader     | Circular spinning arrow. Great for refreshing content.         |
| .heartbeat-loader      | Animated beating heart.                                        |
| .gauge-loader          | Animated speedometer-like gauge with rotating needle.          |
| .three-quarters-loader | Minimal three-quarters donut spinner.                          |
| .wobblebar-loader      | Animated wobbling progress bar.                                |
| .atebits-loader        | Staight out of Letterpress, an animated rotating Atebits logo. |
| .whirly-loader         | A comet-like rotating spinner.                                 |
| .flower-loader         | An animated spinning flower.                                   |
| .dots-loader           | Almost a rotating shell game. With dots!                       |
| .circles-loader        | Three rotating multi-colored circles.                          |
| .plus-loader           | Animated Google Plus-like loader.                              |
| .ball-loader           | A bouncing ball.                                               |
| .hexdots-loader        | Similar to the dots animation, but with six!                   |
| .inner-circles-loader  | A filling circle with other circles                            |
| .pong-loader           | Retro tennis-like game simulation from the 70s.                |
| .pulse-loader          | A pulsing circle. Shrinking and enlarging.										  |


Customize with Sass
-------------------

Many of the spinners in this collection can be customized by tweaking variables included in the Sass [source files](sass/spinner).


Install with Bower
------------------

You can install CSS Spinners with the following command, like any other [Bower](http://bower.io/) project:

    $ bower install css-spinners

CSS is available in the `css/` directory and Sass in the `sass/` directory.


Contributions
-------------

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.


License
-------

CSS Spinners is freely available under the MIT License. See [LICENSE](LICENSE) file for details.
