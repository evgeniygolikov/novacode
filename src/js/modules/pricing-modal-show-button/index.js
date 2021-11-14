window['pricing-modal-show-button'].addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('modal/open', {detail: {id: 'pricing-modal'}})); 
 });