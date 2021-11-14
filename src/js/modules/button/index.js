const Selector = {
  Root: '[type="button"]',
};

export const initializeButton = () => {
  document.querySelectorAll(Selector.Root).forEach(element => new Button(element));
};

class Button {
  constructor(rootElement) {
    this.root = rootElement;

    this.connect();
  }

  connect() {
    this.handleClick = this.handleClick.bind(this);

    this.root.addEventListener('click', this.handleClick);
  }

  disconnect() {
    this.root.removeEventListener('click', this.handleClick);
  }

  handleClick(event) {
    this.root.dispatchEvent(new CustomEvent('click'));
  }
}