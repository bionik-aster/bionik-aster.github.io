const storyForm = document.getElementById('storyForm');
const storyList = document.getElementById('storyList');

// Airtable info
const API_KEY = "YOUR_API_KEY"; // replace with your key
const BASE_ID = "YOUR_BASE_ID"; // replace with your base ID
const TABLE_NAME = "Stories";
const AIRTABLE_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
};

// Load stories
async function loadStories() {
    const res = await fetch(`${AIRTABLE_URL}?sort[0][field]=Date&sort[0][direction]=desc`, {
        headers
    });
    const data = await res.json();
    renderStories(data.records.map(r => ({
        title: r.fields.Title,
        author: r.fields.Author,
        genre: r.fields.Genre,
        content: r.fields.Content,
        date: r.fields.Date
    })));
}

// Submit story
storyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const storyData = {
        fields: {
            Title: document.getElementById('title').value.trim(),
            Author: document.getElementById('author').value.trim(),
            Genre: document.getElementById('genre').value,
            Content: document.getElementById('content').value.trim()
        }
    };

    if (!storyData.fields.Title || !storyData.fields.Author || !storyData.fields.Genre || !storyData.fields.Content) return;

    // Optional: block romance
    if (storyData.fields.Genre.toLowerCase().includes('romance')) {
        alert("Sorry! This platform prioritizes non-romance stories.");
        return;
    }

    await fetch(AIRTABLE_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(storyData)
    });

    storyForm.reset();
    loadStories();
});

// Render stories (hide romance)
function renderStories(stories) {
    const filteredStories = stories.filter(story => !story.genre.toLowerCase().includes('romance'));

    if (!filteredStories.length) {
        storyList.innerHTML = '<p>No non-romance stories yet. Be the first to submit!</p>';
        return;
    }

    storyList.innerHTML = '';
    filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <h3>${story.title} <small>by ${story.author}</small></h3>
            <p><strong>Genre:</strong> ${story.genre}</p>
            <p>${story.content}</p>
            <small>${story.date ? new Date(story.date).toLocaleString() : ''}</small>
        `;
        storyList.appendChild(card);
    });
}

// Initial load
loadStories();

