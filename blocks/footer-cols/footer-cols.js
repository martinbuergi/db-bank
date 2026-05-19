export default async function decorate(block) {
  // EDS best practice: only add classes, preserve row/cell structure.
  // DA needs the original div hierarchy intact for instrumentation.
  const rows = [...block.children];

  if (rows.length === 0) return;

  // Row 0: logo row
  rows[0].classList.add('footer-cols-logo');

  if (rows.length >= 4) {
    // Option A: Row 1-3 are individual contact columns
    rows.slice(1).forEach((row) => row.classList.add('footer-cols-contact'));
  } else if (rows.length >= 2) {
    // Option B: Row 1 has contact columns as cells (Kundenservice, Termin, Social)
    const contactRow = rows[1];
    contactRow.classList.add('footer-cols-contact-row');
    [...contactRow.children].forEach((cell) => cell.classList.add('footer-cols-contact'));
  }
}
