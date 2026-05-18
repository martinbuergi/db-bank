export default async function decorate(block) {
  const rows = [...block.children];

  // Row 1: image + text content
  if (rows[0]) {
    const cells = [...rows[0].children];
    // First cell is the background image, second is text overlay
    if (cells[0]) {
      cells[0].classList.add('hero-image');
    }
    if (cells[1]) {
      cells[1].classList.add('hero-content');
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
