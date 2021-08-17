export default function Scroll() {}

const arow = document.querySelector('.btn');
const sections = document.querySelectorAll('[data-section]');
let i = 0;

const forSections = (section) => {
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const changeIcon = (src) => (arow.querySelector('img').src = src);

const slowDown = (e) => {
  e.preventDefault();
  const verify = i >= sections.length;
  const change = i === sections.length - 1;
  const srcUp = `img/arrow-up.svg`;
  const srcDown = `img/arrow-down.svg`;

  if (!verify) {
    const id = sections[i].getAttribute('id');
    arow.setAttribute('href', id);

    forSections(sections[i]);
    if (change) changeIcon(srcUp);
    else changeIcon(srcDown);

    i++;
  } else {
    i = 0;
  }
};

arow.addEventListener('click', slowDown);
