export default async function decorate(block) {
  const rows = [...block.children];
  // Row 0 = logo, Rows 1-3 = contact columns
  if (rows.length >= 4) {
    const colsGrid = document.createElement('div');
    colsGrid.className = 'cols-grid';
    rows.slice(1).forEach((row) => colsGrid.append(row));
    block.append(colsGrid);
  }
}
