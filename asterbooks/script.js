const storyForm = document.getElementById('storyForm');
const storyList = document.getElementById('storyList');

// Load stored stories
let stories = JSON.parse(localStorage.getItem('stories')) || [];
renderStories();

storyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const genre = document.getElementById('genre').value;
    const content = document.getElementById('content').value.trim();

    if (!title || !author || !genre || !content) return;

    const story = { title, author, genre, content };
    stories.push(story);
    localStorage.setItem('stories', JSON.stringify(stories));
    
    storyForm.reset();
    renderStories();
});

function renderStories() {
    if (stories.length === 0) {
        storyList.innerHTML = '<p>No stories yet. Be the first to submit!</p>';
        return;
    }

    storyList.innerHTML = '';
    stories.forEach((story, index) => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <h3>${story.title} <small>by ${story.author}</small></h3>
            <p><strong>Genre:</strong> ${story.genre}</p>
            <p>${story.content}</p>
        `;
        storyList.appendChild(card);
    });
}
