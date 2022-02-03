//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    return x.replace(/ /g, '')
}
noSpace("I ' m ");

function noSpace(x){
    return x.replace(/\s/g, '');
  }