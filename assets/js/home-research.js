/* Preserve the reference Petersen graph's longest-cycle interaction. */
document.querySelectorAll('[data-petersen-figure]').forEach(function (figure) {
  var button = figure.querySelector('.home-cycle-toggle');
  var label = figure.querySelector('[data-cycle-label]');
  var note = figure.querySelector('[data-cycle-note]');
  if (!button || !label || !note) return;

  button.hidden = false;
  button.addEventListener('click', function () {
    var active = button.getAttribute('aria-pressed') !== 'true';
    figure.classList.toggle('is-tracing', active);
    button.setAttribute('aria-pressed', String(active));
    label.textContent = active ? button.dataset.activeLabel : button.dataset.defaultLabel;
    note.textContent = active ? note.dataset.activeNote : note.dataset.defaultNote;
  });
});
