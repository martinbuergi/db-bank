export default async function decorate(block) {
  // EDS best practice: only add classes, no inline styles.
  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (cells[0]) cells[0].classList.add('product-tiles-icon');
    if (cells[1]) cells[1].classList.add('product-tiles-label');

    // Make tile clickable via class + CSS cursor, not inline style
    const linkEl = cells[1]?.querySelector('a');
    if (linkEl) {
      row.classList.add('product-tiles-linked');
      row.addEventListener('click', () => {
        window.location.href = linkEl.getAttribute('href');
      });
    }
  });
}
