var Metalsmith = require("metalsmith");
var layouts = require("metalsmith-layouts");
var markdown = require("metalsmith-markdown");
var permalinks = require("metalsmith-permalinks");
var concat = require("metalsmith-concat");
var uglify = require("metalsmith-uglify");
var htmlMinifier = require("metalsmith-html-minifier");
var cleanCSS = require("metalsmith-clean-css");
var inPlace = require("metalsmith-in-place");
var collections = require('metalsmith-collections');
var images = require('metalsmith-project-images');

Metalsmith(__dirname)
  .metadata({
    company: "King Kabob",
    title: "Kabob restaurant and a full service catering provider | King Kabob",
    description:
      "King Kabob is a fast-casual kabob restaurant and a full service catering provider in Fairfax, VA. ",
    keywords:
      "king kabob,fairfax restaurants,buffet,kabob,shish kabob,middle eastern,afghan,halal,food delivery,fairfax va,caters,karahi,kebab",
    url: "http://king-kabob.com/",
    phone: "+1 (703) 359-8231",
    eat24: "https://www.ezcater.com/catering/pvt/king-kabob-fairfax",
    year: "2019",
    location: {
      address: "10250 Main St.",
      city: "Fairfax",
      state: "VA",
      zip: "22030"
    }
  })
  .use(
    layouts({
      engine: "handlebars"
    })
  )
  .source("./src")
  .destination("./build")

  .use(collections({
    galleryImages: {
      pattern: ['images/menuItems/*.jpg']
    }
  }))
  .use(inPlace(true))
  .use(uglify())
  .use(htmlMinifier())
  .use(
    concat({
      files: "css/**/*.css",
      output: "css/global.css"
    })
  )
  .use(
    cleanCSS({
      files: "css/**/*.css",
      cleanCSS: {
        rebase: true
      }
    })
  )
  .clean(true)
  .use(markdown())
  .use(
    permalinks({
      relative: false
    })
  )
    .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
