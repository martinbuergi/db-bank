export default function decorate(block) {
  // EDS best practice: preserve original row/cell structure for DA instrumentation.
  // Only add classes — CSS handles the card layout.
  [...block.children].forEach((row) => {
    row.classList.add('cards-card');
    [...row.children].forEach((cell) => {
      if (cell.querySelector('picture')) {
        cell.classList.add('cards-card-image');
      } else {
        cell.classList.add('cards-card-body');
      }
    });
  });
}
