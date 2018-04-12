module.exports = {
  nextCharacterAfterMatch: (child_string, parent_string) => {
    let patt = new RegExp(child_string);
    var postion = parent_string.search(patt);
    return postion + child_string.length
  }
};
