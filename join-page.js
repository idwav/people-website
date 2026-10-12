document.documentElement.classList.add('join-home-motion');

const headingReveals = document.querySelectorAll(
  '.standHero h1, .joinPromise h2, .joinBenefits__head h2, .joinApply h2'
);
const imageReveals = document.querySelectorAll(
  '.standHero figure, .joinPromise figure, .joinBenefits__head figure'
);
const copyReveals = document.querySelectorAll(
  '.standHero__intro, .standHero__action, .joinPromise__lead, .joinPromise__side, .joinBenefits__head > p, .joinBenefit, .joinApply > div, .joinApply form'
);

headingReveals.forEach((item) => item.classList.add('homeRevealHeading'));
imageReveals.forEach((item) => item.classList.add('homeRevealImage'));
copyReveals.forEach((item) => item.classList.add('homeRevealCopy'));

const revealItems = [...headingReveals, ...imageReveals, ...copyReveals];
const sections = document.querySelectorAll('main > section');
const revealSelector = '.homeRevealHeading, .homeRevealImage, .homeRevealCopy';

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const items = entry.target.querySelectorAll(revealSelector);
    items.forEach((item) => item.classList.toggle('is-home-visible', entry.isIntersecting));
  });
}, { threshold: .16, rootMargin: '-4% 0px -8% 0px' });

sections.forEach((section) => sectionObserver.observe(section));
