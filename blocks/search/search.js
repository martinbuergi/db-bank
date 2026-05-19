export default async function decorate(block) {
  // EDS best practice: preserve the original row/cell structure.
  // Only add classes — CSS handles the search input styling via ::before icon.
  // The placeholder text comes from the first cell content.
  const firstCell = block.querySelector(':scope > div > div');
  if (firstCell) {
    const placeholderText = firstCell.textContent.trim() || 'Suchbegriff eingeben';
    // Replace the cell content with a proper input, but keep the row/cell wrapper
    firstCell.textContent = '';
    const input = document.createElement('input');
    input.type = 'search';
    input.placeholder = placeholderText;
    input.setAttribute('aria-label', `${placeholderText}. Suchergebnisse erscheinen automatisch unterhalb des Suchfeldes.`);
    firstCell.append(input);
    firstCell.closest('div').classList.add('search-row');
    firstCell.classList.add('search-input-cell');
  }
}
