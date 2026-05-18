export default async function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cells = [...row.children];
    // Each row has: cell 0 = icon image, cell 1 = heading text
    // Structure is already correct for CSS layout
    cells[0].classList.add('features-icon');
    cells[1].classList.add('features-text');
  });
}
