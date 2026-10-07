(() => {
  const closeButton = document.querySelector('.arm-page__back');
  const hero = document.querySelector('.arm-page__hero');
  if (!closeButton || !hero) return;

  let closing = false;

  const readOrigin = () => {
    const fallback = closeButton.getBoundingClientRect();
    let x = fallback.left + fallback.width / 2;
    let y = fallback.top + fallback.height / 2;

    try {
      const saved = JSON.parse(sessionStorage.getItem('people-arm-circle') || 'null');
      if (saved && Number.isFinite(saved.x) && Number.isFinite(saved.y)) {
        x = Math.max(0, Math.min(innerWidth, saved.x * innerWidth));
        y = Math.max(0, Math.min(innerHeight, saved.y * innerHeight));
      }
    } catch (_) {}

    return { x, y };
  };

  closeButton.addEventListener('click', event => {
    if (closing || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    closing = true;

    const destination = closeButton.href;
    const { x, y } = readOrigin();
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) * 1.08;

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      location.assign(destination);
      return;
    }

    /* The page itself becomes the colour surface. White underneath is revealed
       while the full composition contracts into the original opening circle. */
    scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.classList.add('arm-is-closing');
    hero.style.clipPath = `circle(${radius}px at ${x}px ${y}px)`;
    hero.style.pointerEvents = 'none';

    const content = document.querySelectorAll('.arm-page__copy, .arm-page__image, .arm-page__nav, .arm-page__foot');
    content.forEach(node => node.animate([
      { opacity: 1, transform: 'translate3d(0,0,0) scale(1)' },
      { opacity: .96, transform: `translate3d(${(x - innerWidth / 2) * .025}px, ${(y - innerHeight / 2) * .025}px,0) scale(.985)` }
    ], { duration: 860, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' }));

    const animation = hero.animate([
      { clipPath: `circle(${radius}px at ${x}px ${y}px)` },
      { clipPath: `circle(0px at ${x}px ${y}px)` }
    ], {
      duration: 980,
      easing: 'cubic-bezier(.76,0,.24,1)',
      fill: 'forwards'
    });

    animation.finished.then(() => location.assign(destination)).catch(() => location.assign(destination));
  });
})();
