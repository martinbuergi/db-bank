export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // First cell = image (background), Second cell = text content
    if (cells.length >= 2) {
      cells[0].classList.add('offers-image');
      cells[1].classList.add('offers-content');
    }
  });
}
