const MODAL_OPEN_EVENT_NAME = 'modal/open';
const MODAL_CLOSE_EVENT_NAME = 'modal/close';

const ClassName = {
    Modal: 'modal',
    ModalVisible: 'modal_visible',
    ModalCloseButton: 'modal__close-button',
};

const handleCloseButtonClick = (evt) => {
    if (!evt.target.classList.contains(ClassName.ModalCloseButton)) {
        return;
    }

    const closeButton = evt.target;
    const modal = closeButton.parentElement;

    modal.classList.remove(ClassName.ModalVisible);

    document.dispatchEvent(new CustomEvent(MODAL_CLOSE_EVENT_NAME, {detail: {id: modal.id}}));
}

document.addEventListener('click', handleCloseButtonClick);

document.addEventListener(MODAL_OPEN_EVENT_NAME, (evt) => {
   const modal = window[evt.detail.id];

   modal.classList.add(ClassName.ModalVisible);
});

const getIsHashAboutModal = (hash) => {
    const id = hash.slice(1);

    if (!/-modal$/.test(hash)) {
        return false;
    }

    const element = window[id];

    if (element === undefined) {
        return false;
    }

    return element.classList.contains(ClassName.Modal);
}

const handleWindowHashChange = () => {
    if (getIsHashAboutModal(window.location.hash)) {
        document.dispatchEvent(new CustomEvent(MODAL_OPEN_EVENT_NAME, {detail: {id: window.location.hash.slice(1)}}));
    }
};

if (getIsHashAboutModal(window.location.hash)) {
    document.dispatchEvent(new CustomEvent(MODAL_OPEN_EVENT_NAME, {detail: {id: window.location.hash.slice(1)}}));
}

window.addEventListener('hashchange', handleWindowHashChange);