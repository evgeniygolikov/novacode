const ID = 'pricing-modal';


const TEMPLATE = (
    `<ul class="tabs" role="tablist" aria-label="Entertainment">
        <li class="tabs__item">
        <a class="tabs__link tabs__link--active" id="nils" href="#nils-tab" role="tab" aria-selected="true" aria-controls="nils-tab">
            Nils Frahm
        </a>
        </li>
        <li class="tabs__item">
        <a class="tabs__link" id="agnes" href="#agnes-tab" role="tab" aria-selected="false" aria-controls="agnes-tab" tabindex="-1">
            Agnes Obel
        </a>
        </li>
        <li class="tabs__item">
        <a class="tabs__link" id="junk" href="#junk-tab" role="tab" aria-selected="false" aria-controls="junk-tab" tabindex="-1">
            Junk
        </a>
        </li>
    </ul>

    <section id="nils-tab" role="tabpanel" aria-labelledby="nils" tabindex="0">
        <h2>Section about Nils</h2>
        <a href="#">Nils</a>
        <p>Nils Frahm is a German musician, composer and record producer based in Berlin. He is known for combining classical and electronic music and for an unconventional approach to the piano in which he mixes a grand piano, upright piano, Roland Juno-60, Rhodes piano, drum machine, and Moog Taurus.</p>
    </section>
    <section id="agnes-tab" role="tabpanel" aria-labelledby="agnes" tabindex="0" hidden>
        <h2>Section about Agnes</h2>
        <p>Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her first album, Philharmonics, was released by PIAS Recordings on 4 October 2010 in Europe. Philharmonics was certified gold in June 2011 by the Belgian Entertainment Association (BEA) for sales of 10,000 Copies.</p>
    </section>
    <section id="junk-tab" role="tabpanel" aria-labelledby="junk" tabindex="0" hidden>
        <h2>Section about Junk</h2>
        <p>Junk is just junk. Nothing more, nothing less. It is somewhat hard to write about junk, because nobody cares about it.</p>
    </section>`
);

const pricingModal = window[ID];
const content = pricingModal.querySelector('.modal__content');

document.addEventListener('modal/open', (evt) => {
    if (evt.detail.id === ID) {
        content.innerHTML = TEMPLATE;
    }
 });