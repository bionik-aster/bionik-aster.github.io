// shit to use
const searchIn = document.getElementById("searchIn");
const resultsCon = document.getElementById("resultsCon");
searchIn.addEventListener('input', sdimbt);
let bbData = [];

function sdimbt() {
  const sanitizeSearch = searchIn.value.trim().toLowerCase();
  const removePunc = sanitizeSearch.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  const noSpaces = removePunc.split(' ');
  const finalWords = noSpaces.filter(word => word.length > 0);
  resultsCon.innerHTML = '';

  const foundWords = bbData.filter(entry => 
    finalWords.some(word => {
      // Check if search matches the main word
      if (entry.word.toLowerCase().includes(word)) return true;
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
        <div class="wordbox-content">
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
        <h2>Beep beep!</h2>
        <p>Nothing like this exists in the wordbank. Either you typed it wrong, it's not been added, or its a proper noun.</p>
      </div>
    `;
  }
}
async function gamesGone() {
  try {
    const response = await fetch("defs.json");
    if (!response.ok) throw new Error("AError 001: Failed to load data");
    bbData = await response.json();
  } catch(e) {
    console.error("AError 001: Failed to load data:", e);
  }
}
gamesGone();
