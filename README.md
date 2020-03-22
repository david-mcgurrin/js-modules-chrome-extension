# JS Modules
Chrome extension that uses Parceljs to allow for ES6 modules in content scripts.

### Setup

Clone or download the repo and open it up.

Run `npm install` to get the dependencies.

Then run `npm run build` so that Parceljs generates the `dist` folder. This comprises the bundled files and is where all the JS points to.

From the Chrome extensions page click "Developer Mode" and then load the repo as an unpacked extension.

Once the extension is added run `npm run dev` to make changes. Parceljs has hot reloading so any changes made to the main code will be re-bundled on save. That is, you don't need to make changes to the contents of the `dist` folder.

Enjoy and have fun experimenting with ES6 modules!
  
  
  
*..more in depth Readme coming soon*
