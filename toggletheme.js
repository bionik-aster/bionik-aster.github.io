// Apply saved theme on page load
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }

  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  };
})();
