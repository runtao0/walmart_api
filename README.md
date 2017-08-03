# Runtao's Front-end Walmart Search API
This product fetches products from the Walmart Search API based on a search query and search parameters. It then adds the products to localStorage where it can persist, and allows the user to view and modify the products in a table.

## How to use locally
1. **Download the repo** (the green button on the right), download ZIP is the easiest option
2. **Unzip the zip file**
3. **Open the unzipped folder**
4. **Double click the index.html file** this should open up the html file and start the webpage. **this project is written for the latest verse of Chrome, please use Chrome**
5. Type in your query and add some products. Default number of products is 10.
6. You can search within local products by product name, visit the Walmart site for a specific product, change a product's brand name by clicking on it, or delete a product from the localStorage (red X marks the spot). You can also change the order of display from descending alphabetical to ascending and vice versa.


## How to set up
If you would like to mess around with the code, simply follow the same steps as above to download the repo. Then...
1. Open your command, and cd into the root directory
2. run "npm install" to install the dependencies
3. run "sass --watch stylesheets/sass:stylesheets/css" (if you do not have sass, instructions can be found [here](http://sass-lang.com/install)). This compiles the sass into a central css file.
4. In a new command line window (same directory), get the absolute path of the lib/ subfolder (this can be done by draggin the lib folder into the command line window)
5. Replace {output: {path: }} with the absolute path of lib/ in **webpack.config.js**
6. run "webpack --watch" in the root directory to compile the JavaScript files and update bundle.js. bundle.js is the Webpack output file, which is not usually added to a repo since it can grow very large. However, I added it here to expedite viewing


## Under the Hood
I used a React/Redux architecture, and jQuery ajax to handle async http requests. Redux middleware used are logger and thunk. The logger displays any changes to the Redux state, and thunk is used to handle async actions. The logger is usually silenced for production, but here is added for convenience to check updating Redux state. Other dependencies include webpack and babel to compile ES6 and generate a single output JavaScript file. I also used lodash/merge to deep copy objects. I did not use any react table libraries, because I wanted to write the table from scratch. There may be a "Warning: Connect(TableRow): 'key' is not a prop." warning in the inspect tool console since I am using an array of container components. The keys are propagated to the presenter components, and I do not call on the key attribute within the component.

## Future features
 1. **TypeCheck with Proptypes** - using proptypes helps to debug the React DOM tree and helps to pinpoint problems with passing down information.

 2. **Change perPage display** - currently, local products can only be viewed 10 at a time. However, I set it up so that the perPage view can easily be changed. The only thing needed is to create redux actions to change perPage view and then add a button that toggles between 10, 25, and view all (like on many list features on the internet)

 3. **View large image of product when hovering over thumbnail** - Walmart included links to various sizes of images for their products. Here I only used  I'd imagine that alot having a larger image

 4. **Bulk delete/delete all, and undo delete** - Since L2 is a data analytics company, I would imagine that the data scientists would need to load large amounts of products. It would make sense to be able to delete more than just one, or to undo the delete if they made a mistake.

 5. **Warn when maximum amount of products is reached** - Local storage has a finite capacity. While 10mb can is alot to store strings (all objects stored in localStorage are stored as strings), but if max memory is used, there should be a warning when it is near.

## Sources
The only thing I did not create are the image assets used for icons. I downloaded these assets from [Material Design Icons](https://materialdesignicons.com/).
