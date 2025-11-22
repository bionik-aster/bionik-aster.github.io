// shit to use
const searchIn = document.getElementById("searchIn");
const resultsCon = document.getElementById("resultsCon");
searchIn.addEventListener('input', sdimbt);
let spkData = [];

function sdimbt() {
  const sanitizeSearch = searchIn.value.trim().toLowerCase();
  const removePunc = sanitizeSearch.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  const noSpaces = removePunc.split(' ');
  const finalWords = noSpaces.filter(word => word.length > 0);
  resultsCon.innerHTML = '';

  const foundWords = spkData.filter(entry => 
    finalWords.some(word => {
      // Check if search matches the main word
      if (entry.word.toLowerCase().includes(word)) return true;
      
      // Check if search matches any form in "forms"
      if (entry.forms && entry.forms.toLowerCase().includes(word)) return true;
      
      // Check if search matches any form in "inanforms"
      if (entry.inanforms && entry.inanforms.toLowerCase().includes(word)) return true;
      
      return false;
    })
  );

  // Sort alphabetically
  foundWords.sort((a, b) => a.word.localeCompare(b.word));

  if (foundWords.length > 0) {
    foundWords.forEach(wordData => {
      const wordDiv = document.createElement('div');
      wordDiv.className = `wordbox ${wordData.wordclass}`;
      wordDiv.innerHTML = `
        <h2>${wordData.word}</h2>
        <p class="wordclass">${wordData.wordclass}</p>
        <p><b>Alternate animate forms:</b> ${wordData.forms}</p>
        <p><b>Alternate inanimate forms:</b> ${wordData.inanforms}</p>
        <p><b>Definition:</b> ${wordData.def}</p>
        <p><b>Usage in a sentence:</b> ${wordData.example}</p>
        <p><b>Translation:</b> ${wordData.exampletrans}</p>
      `;
      resultsCon.appendChild(wordDiv);
    });
  } else {
    resultsCon.innerHTML = `
      <div class="wordbox">
        <h2>Wait a minute...</h2>
        <p>There's no such word!</p>
      </div>
    `;
  }
}
async function gamesGone() {
  try {
    const response = await fetch("defs.json");
    if (!response.ok) throw new Error("AError 001: Failed to load data");
    spkData = await response.json();
  } catch(e) {
    console.error("AError 001: Failed to load data:", e);
  }
}
gamesGone();
