function freddy(sentence) {
  const regex = new RegExp("^a+$", "i");
  regex.test(sentence);
  if (regex.test(sentence) === true) {
    return "";
  }
  let tab = sentence.toLowerCase().split("a");
  if (tab[0] !== "") {
    const tabMaj = tab.map(
      (elt, index) => (index % 2 !== 0 ? elt.toUpperCase() : elt)
    );
    console.log(tabMaj);
    const firstWord = tabMaj[0].replace(
      tabMaj[0][0],
      tabMaj[0][0].toUpperCase()
    );

    tabMaj.shift();
    tab = [firstWord, ...tabMaj];
  }
  return tab.join("");
}

/*
"aaaaaaaAAAAA" -> ""
"A main" -> " */
let test = "A main";
console.log(freddy(test));
