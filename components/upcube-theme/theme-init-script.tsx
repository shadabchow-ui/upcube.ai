const script = `
(function() {
  var theme = localStorage.getItem('upcube-theme');
  var resolved;
  if (theme === 'light' || theme === 'dark') {
    resolved = theme;
  } else {
    resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
})();
`;

export function ThemeInitScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
