// shit to use
const searchIn = document.getElementById("searchIn");
const resultsCon = document.getElementById("resultsCon");
searchIn.addEventListener('input', sdimbt);
let spkData = [];

// is ts a lowk goated system
async function fetchWithAErrors(url, options = {}) {
  const AERRORS = {
    400: [{ code: "A002", meaning: "Parsing Error" }, { code: "A004", meaning: "Protocol violation" }, { code: "A005(3)", meaning: "Service unsupported on browser" }],
    401: [{ code: "A006", meaning: "Credentials invalid" }],
    403: [{ code: "A007", meaning: "Credentials forbidden" }],
    404: [{ code: "A001", meaning: "Page not found" }, { code: "A001(1)", meaning: "Previous page not found/missing" }, { code: "A998", meaning: "Under Construction" }],
    426: [{ code: "A005(1)", meaning: "Service outdated" }],
    500: [{ code: "A003", meaning: "Server overload/Server error" }],
    501: [{ code: "A005(2)", meaning: "Service unimplemented on version" }],
    503: [{ code: "A005", meaning: "Service unavailable" }],
    504: [{ code: "A008", meaning: "Response duration timeout" }]
  };

  function now() {
    return new Date().toLocaleString();
  }

  function getAError(status, preferredCode = null) {
        const list = AERRORS[status];
        if (!list) return null;
        if (!preferredCode) return list[0];
        return list.find(e => e.code === preferredCode) || list[0];
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const aerror = getAError(response.status);
      if (aerror) {
        console.error(`${aerror.code} — ${aerror.meaning} @ ${now()} • HTTP ${response.status} ${response.url}`);
      } else {
        console.error(`HTTP ${response.status} — ${response.statusText} @ ${now()} • ${response.url}`);
      }
      throw new Error(`HTTP ${response.status} error`);
    }

    // Try parsing JSON
    try {
      const data = await response.json();
      return data;
    } catch (jsonErr) {
      console.error(`A002 — Parsing Error @ ${now()}`, jsonErr);
      throw jsonErr;
    }

  } catch (err) {
    // Network error / fetch failure
    if (err instanceof TypeError) {
      console.error(`A003 — Server overload / Network failure @ ${now()}`, err);
    }
    throw err; // rethrow for caller
  }
}

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
        <div class="wordbox-content">
          <h2>${wordData.word}</h2>
          <p class="wordclass">${wordData.wordclass}</p>
          <p><b>Alternate animate forms:</b> ${wordData.forms || "None"}</p>
          <p><b>Alternate inanimate forms:</b> ${wordData.inanforms || "None"}</p>
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
   spkData = await fetchWithAErrors("defs.json");
    console.log('Data has been loaded successfully.')
  } catch(e) {
    alert('There is an error occurring! Check console log if possible.');
  }
}
gamesGone();
