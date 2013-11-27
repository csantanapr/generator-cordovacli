# generator-cordovacli [![Build Status](https://secure.travis-ci.org/csantanapr/generator-cordovacli.png?branch=master)](https://travis-ci.org/csantanapr/generator-cordovacli)

A generator for Apache Cordova CLI 3.x


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

If npm is down, you are npm help @ [scalenpm.org](https://scalenpm.org)

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-cordovacli from npm, run:

```
$ npm install -g generator-cordovacli
```

If npm is down, you are npm help @ [scalenpm.org](https://scalenpm.org)

Finally, initiate the generator:

```
$ yo cordovacli
```

### Then what?
Run  `grunt --help` to see available tasks

Here are a few options:
```
$ grunt build
$ grunt server (build, emulate, watch)
$ grunt emulate
$ grunt demo
```

Platforms Supported:
Android (Linux, OSX, Windows)
iOS (OSX)
BlackBerry 10 (OSX, Windows)
Windows Phone 8 (Windows)
Windows 8 (Windows)

Plugins Supported:
Apache Cordova Core Plugins
Additional plugins can be added by editing the grunt-cordovacli task in the Grunfile.js


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[Apache-2.0](./LICENSE-Apache-2.0)
