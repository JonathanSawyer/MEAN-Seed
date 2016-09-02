# Sentiment Analysis

Very much under construction.

The tool will take comments about something and classify the overall sentiment towards it using the topic modeling algorithm Latent Dirichlet Allocation https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation.

##Prerequisites
1. You will need `Node.js`, `NPM` and `Bower` installed
2. `npm install -g grunt-cli`
3. `npm install -g nodemon`
4. `npm install -g karma-cli`

##Install Dependencies
From the root of the app run the following commands.

1. `npm install`
2. `bower install`

##Running Application
1. `node server.js`
2. navigate to `http://localhost:8080/`

##Plan
Plan on using https://www.npmjs.com/package/lda to classify sentiment on a set of comment for a product and determine whether its positive, neutral or negative.



