Removes `React.PropTypes` and attempts to transform to [Flow](http://flow.org/).

Modified for compatability with Oscar style.

### Setup & Run
  * `npm install -g jscodeshift@0.3.30` (matches package.json in data/)
  * `git clone https://github.com/johnmanong/codemod-proptypes-to-flow`
  * `jscodeshift -t codemod-proptypes-to-flow/src/index.js --extensions js,jsx <path>`
