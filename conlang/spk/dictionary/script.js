// shit to use
const searchIn = document.getElementById("searchIn");
const searchBut = document.getElementById("searchBut");
const resultsCon = document.getElementById("resultsCon");
searchBut.addEventListener('click', sdimbt);
let spkData = [];

function sdimbt() {
  const sanitizeSearch = searchIn.value.trim().toLowerCase();
  const removePunc = sanitizeSearch.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  const noSpaces = removePunc.split(' ');
  const finalWords = noSpaces.filter(word => word.length > 0);
  resultsCon.innerHTML = ''; // clear the shit
  const foundWords = spkData.filter(entry => finalWords.some(word => entry.word.toLowerCase().includes(word)));

  if (foundWords.length > 0) {
    foundWords.forEach(wordData => {
      const wordDiv = document.createElement('div');
      wordDiv.innerHTML = `
          <div class="wordbox">
            <h2>${wordData.word}</h2>
            <p class="wordclass">${wordData.wordclass}</p>
            <p><b>Definition:</b> ${wordData.def}</p>
            <p><b>Usage in a sentence:</b> ${wordData.example}</p>
            <p><b>Translation:</b> ${wordData.exampletrans}</p>
          </div>
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
    console.error('AError 001: Failed to load data', e);
  }
}
gamesGone();
