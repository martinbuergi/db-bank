export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First cell has icon, second cell has the link text
    // Make the entire tile clickable by wrapping in an anchor
    if (cells.length >= 2) {
      const linkEl = cells[1].querySelector('a');
      if (linkEl) {
        const href = linkEl.getAttribute('href');
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
          window.location.href = href;
        });
      }
    }
  });
}
