function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
}

          // Optional: Set default theme
window.onload = () => {
  document.body.classList.add('light-theme');
};
