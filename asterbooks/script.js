const storyList = document.getElementById('storyList');
const STORIES_URL = "stories.json";

async function loadStories() {
    try {
        const res = await fetch(STORIES_URL);
        const stories = await res.json();


        const filteredStories = stories.filter(story => !story.genre.toLowerCase().includes('romance'));

        if (filteredStories.length === 0) {
            storyList.innerHTML = '<p>No stories yet. Be the first to submit!</p>';
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
    } catch (err) {
        storyList.innerHTML = '<p>Failed to load stories.</p>';
        console.error(err);
    }
}

// Initial load
loadStories();
