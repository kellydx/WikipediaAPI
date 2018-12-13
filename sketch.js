let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

let userInput;
function setup() {
  // put setup code here
  userInput = select('#userInput');
  userInput.changed(goWiki);
  goWiki();
}

function goWiki() {
  let term = userInput.value();
  let url = searchUrl + term;
  console.log(url);
}