export default async function decorate(block) {
  const rows = [...block.children];

  // Row 1: image + text content
  if (rows[0]) {
    const cells = [...rows[0].children];

    // DA structure: 3 cells where cell[0] is empty, cell[1] is image, cell[2] is text
    // pk.html structure: 2 cells where cell[0] is image, cell[1] is text
    let imageCell;
    let textCell;

    if (cells.length >= 3) {
      // DA structure: [empty, image, text]
      imageCell = cells[1];
      textCell = cells[2];
      // Remove empty first cell
      if (cells[0].innerHTML.trim() === '') {
        cells[0].remove();
      }
    } else {
      // pk.html structure: [image, text]
      imageCell = cells[0];
      textCell = cells[1];
    }

    if (imageCell) {
      imageCell.classList.add('hero-image');
    }
    if (textCell) {
      textCell.classList.add('hero-content');
    }
  }

  // Row 2: teasers
  if (rows[1]) {
    rows[1].classList.add('hero-teasers');
    const teaserCells = [...rows[1].children];
    teaserCells.forEach((cell) => {
      cell.classList.add('hero-teaser');
    });
  }
}
