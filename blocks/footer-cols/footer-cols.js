export default async function decorate(block) {
  const rows = [...block.children];

  // Structure can be:
  // Option A: Row 0 = logo, Rows 1-3 = individual contact columns (4+ rows)
  // Option B: Row 0 = logo, Row 1 = one row with 3 cells (Kundenservice, Termin, Social)
  if (rows.length >= 4) {
    // Option A: multiple rows for contacts
    const colsGrid = document.createElement('div');
    colsGrid.className = 'cols-grid';
    rows.slice(1).forEach((row) => colsGrid.append(row));
    block.append(colsGrid);
  } else if (rows.length >= 2) {
    // Option B: contacts are cells within row 1
    const contactRow = rows[1];
    const cells = [...contactRow.children];
    const nonEmptyCells = cells.filter((c) => c.textContent.trim().length > 0);

    if (nonEmptyCells.length > 1) {
      const colsGrid = document.createElement('div');
      colsGrid.className = 'cols-grid';
      nonEmptyCells.forEach((cell) => {
        const col = document.createElement('div');
        col.append(...cell.childNodes);
        colsGrid.append(col);
      });
      block.removeChild(contactRow);
      block.append(colsGrid);
    }
  }
}
