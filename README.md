# Project Overview

This is RSS feedreader web-based application project. It is created to practice in testing with [Jasmine](http://jasmine.github.io/). This is a part of [Google scholarship Front-End Nanodegree by Udacity](https://www.udacity.com/google-scholarships)


## Why this Project?

This is a project to use Jasmine to write a number of tests against a pre-existing application. It tests the underlying business logic of the application as well as the event handling and DOM manipulation.


## How to run?

### Online
* Open [link](https://evgeniit.github.io/frontend-nanodegree-feedreader/#) in your browser

### Locally
* Clone project
`git clone https://github.com/EvgeniiT/frontend-nanodegree-feedreader.git`
* Open `index.html` in browser.

## Tests list

* Tests to make sure that the allFeeds variable has been defined and that it is not empty.
* Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* Test that ensures the menu element is hidden by default.
* Test that ensures the menu changes visibility when the menu icon is clicked.
* Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## Dependencies

* [Roboto font](http://fonts.googleapis.com/css?family=Roboto:400,100,300,700)
* [Icomoon](https://icomoon.io/#home)
* [Jasmine 2.1.2](https://github.com/jasmine/jasmine/releases/tag/v2.1.2)
* [jQuery 2.1.1](https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js)
* [Handlebars 2.0.0](https://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js)
* [Google Api](https://google.com/jsapi)
