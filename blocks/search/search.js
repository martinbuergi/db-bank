export default async function decorate(block) {
  const rows = [...block.children];
  const placeholderText = rows[0]?.querySelector('p')?.textContent?.trim() || 'Suchbegriff eingeben';

  block.textContent = '';

  const form = document.createElement('form');
  form.setAttribute('role', 'search');

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'search-input-wrapper';

  const icon = document.createElement('span');
  icon.className = 'search-icon';
  icon.setAttribute('aria-hidden', 'true');

  const input = document.createElement('input');
  input.type = 'search';
  input.placeholder = placeholderText;
  input.setAttribute('aria-label', `${placeholderText}. Suchergebnisse erscheinen automatisch unterhalb des Suchfeldes.`);

  inputWrapper.append(icon, input);
  form.append(inputWrapper);
  block.append(form);
}
