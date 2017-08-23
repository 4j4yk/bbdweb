Bridging Big Data
=================

This repository is dedicated for building a front end for NBI/NDOR MongoDb database using mongoose. We are using nodejs/express.js framework to build this web application.

The setup is enhanced to use docker to provide portability and easy installation. After installation there will be app build along with mongodb image, so we don't require separate mongodb installation on local machine. However, you need to seed some data to use with app until I figure out a way to load some default data.



Features
--------

TBA.
    
Contributing
-------------

Anyone associated with the project can contribute to this, and I welcome and appreciate your help!

- For bugs/feature requests, please submit them to the [Issues][issues] queue. 
- For Code contribution, use [develop branch][develop]. This is often many commits ahead of the master branch, so please do all development from *develop*, and submit pull requests there.

Compatibility
-------------

This app has been tested with the following browsers and assistive technologies.

-   Safari and Chrome on Mac OS X


Note that mobile browsers have limitations (e.g., volume control and auto-start are not supported) 

Dependencies
------------

This app has a few dependencies which are listed in package.json 

Setup 
-----
Download and install `docker`. 

Clone this repository and follow `docker` commands to build application package and start it.

```bash
git clone https://github.com/akhampariya/bbdweb.git
cd bbdweb
docker build -t bbdweb/bridging-big-data:1.0 .
docker-compose up
```
Browse to http://localhost

Note: You need to provide mongodb path in environment variable MONGODB_URI under `docker-compose.yml`.

Change log 
---------------

* Easy installation with Docker ([#3][i3])

[i3]: https://github.com/akhampariya/bbdweb/issues/3

Acknowledgments 
---------------
TBA
