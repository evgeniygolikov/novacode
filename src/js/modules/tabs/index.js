const Selector = {
  Tablist: '[role="tablist"]',
  Tab: '[role="tab"]',
  SelectedTab: '[aria-selected="true"]',
};

document.addEventListener('click', handleClick);

function handleClick({target}) {
  if (!isTab(target) || isTabSelected(target)) {
    return;
  }

  const tablist = findTablist(target);
  const selectedTab = findSelectedTab(tablist);

  deselectTab(selectedTab);
  selectTab(target);
}

function isTab(element) {
  return element.getAttribute('role') === 'tab';
}

function isTabSelected(tab) {
  return tab.getAttribute('aria-selected') === 'true';
}

function findTablist(tab) {
  return tab.closest(Selector.Tablist);
}

function findSelectedTab(tablist) {
  return tablist.querySelector(Selector.SelectedTab);
}

function selectTab(tab) {
  tab.removeAttribute('tabindex');
  tab.setAttribute('aria-selected', 'true');
  tab.classList.add('tabs__link--active');
  tab.focus();
  document
    .querySelector(`#${tab.getAttribute('aria-controls')}`)
    .removeAttribute('hidden');
}

function deselectTab(tab) {
  tab.setAttribute('tabindex', '-1');
  tab.setAttribute('aria-selected', 'false');
  tab.classList.remove('tabs__link--active');
  document
    .querySelector(`#${tab.getAttribute('aria-controls')}`)
    .setAttribute('hidden', 'true');
}
