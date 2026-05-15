const d = window.siteData;

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function linkButton(item) {
  const a = document.createElement('a');
  a.href = item.href;
  a.target = item.href.startsWith('http') ? '_blank' : '_self';
  a.rel = item.href.startsWith('http') ? 'noopener noreferrer' : '';
  a.className = item.primary ? 'button' : 'button-secondary';
  a.textContent = item.label;
  return a;
}

document.getElementById('hero-name').textContent = d.hero.name;
document.getElementById('hero-role').textContent = d.hero.role;
document.getElementById('hero-summary').textContent = d.hero.summary;
if (d.hero.profileImage) {
  document.getElementById('hero-photo').src = d.hero.profileImage;
} else {
  document.querySelector('.hero-photo-wrap').style.display = 'none';
}

d.hero.actions.forEach(item => document.getElementById('hero-actions').appendChild(linkButton(item)));
d.hero.meta.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  document.getElementById('hero-meta').appendChild(li);
});

d.hero.stats.forEach(item => {
  const stat = el('div', 'stat');
  stat.appendChild(el('strong', '', item.value));
  stat.appendChild(el('span', '', item.label));
  document.getElementById('stats').appendChild(stat);
});

d.about.forEach(p => document.getElementById('about-content').appendChild(el('p', '', p)));
d.focusAreas.forEach(tag => document.getElementById('research-tags').appendChild(el('li', '', tag)));
d.profileLinks.forEach(item => {
  const a = document.createElement('a');
  a.href = item.href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = item.label;
  document.getElementById('profile-links').appendChild(a);
});

d.research.forEach(item => {
  const card = el('article', 'research-card');
  card.appendChild(el('h3', '', item.title));
  card.appendChild(el('p', '', item.text));
  document.getElementById('research-grid').appendChild(card);
});

d.timeline.forEach(item => {
  const wrap = el('article', 'timeline-item');
  wrap.appendChild(el('div', 'timeline-meta', `${item.period} · ${item.institution}`));
  wrap.appendChild(el('h3', '', item.title));
  wrap.appendChild(el('p', '', item.description));
  document.getElementById('timeline').appendChild(wrap);
});

d.publications.forEach(item => {
  const card = el('article', 'pub-card');
  card.appendChild(el('div', 'pub-type', item.type));
  card.appendChild(el('h3', '', item.title));
  card.appendChild(el('p', 'pub-authors', item.authors));
  card.appendChild(el('p', 'pub-meta', `${item.venue} · ${item.year}`));
  card.appendChild(el('p', 'pub-abstract', item.abstract));

  const links = el('div', 'pub-links');
  item.links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.label;
    links.appendChild(a);
  });
  card.appendChild(links);
  document.getElementById('publication-list').appendChild(card);
});

document.getElementById('contact-text').textContent = d.contact.text;
d.contact.actions.forEach(item => document.getElementById('contact-actions').appendChild(linkButton(item)));
document.getElementById('footer-text').textContent = d.footer;
