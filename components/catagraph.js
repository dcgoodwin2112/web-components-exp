class Catagraph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(
      this.getTemplate(
        this.getRandomCatPun(),
        this.getRandomCatEmoji()
      ).content.cloneNode(true)
    );
  }

  getTemplate(randomCatPun, randomCatEmoji) {
    const template = document.createElement("template");
    template.innerHTML = `
  <style>
    .cat-pun {
      font-weight: bold;
    }
  </style>
  <p>
    <slot>paragraph content</slot>
    <span class="cat-pun">${randomCatPun} ${randomCatEmoji}</span>
  </p>
`;
    return template;
  }

  getCatPuns() {
    return [
      "Stay PAWsitive!",
      "You’ve got to be kitten me.",
      "Happy Purr–thday!",
      "I’m just kitten around.",
      "I think we should get meow-rried someday.",
      "That’s just claw-ful.",
      "You’re a fur-midable opponent.",
      "I’m so fur-tunate.",
      "Let me tell you a tail.",
      "That’s a paw-sibility.",
      "My cat is my best fur-end.",
      "That’s hiss-terical.",
      "He’ll go down in hiss-tory.",
      "You’ve got to be kitten me.",
      "Paw-don me.",
      "You look fur-miliar.",
      "That’s paw-some.",
      "Don’t fur-get to buy more catnip.",
      "I’ll love my cat fur-ever.",
      "That was a cat–astrophe.",
      "My cat is radi-claw.",
      "Dogs are in-furior to cats.",
      "I’m feline sad.",
      "You’ve got purr-sonality.",
      "Look at that meowntain.",
      "Whisker me away.",
      "I’m a glamourpuss.",
      "You’re so purr-suasive.",
      "My favorite color is purr-ple.",
      "Don’t be a sourpuss.",
      "Like my paw-jamas?",
      "Better call in claw-enforcement.",
      "I’ll have a meow-tini.",
      "I’m feline good.",
      "I need to take a paws.",
      "How claw-some is that?",
      "Can I paw-lease have that?",
      "I’ve got cattitude.",
      "Take meowt for lunch.",
      "I love my cat the meowst.",
      "I've done that be-fur.",
      "My cat is super cathletic.",
      "Never, efur do that again.",
      "My cat is so purr-ty.",
      "My cat wants a Furr-ari.",
      "I've got my thinking cat on.",
      "Wait a meow-ment.",
    ];
  }

  getRandomCatPun() {
    const catPuns = this.getCatPuns();
    return catPuns[Math.floor(Math.random() * (catPuns.length - 1))];
  }

  getCatEmojis() {
    return [
      "&#128049", //🐱
      "&#128568", //😸
      "&#128569", //😹
      "&#128570", //😺
      "&#128571", //😻
      "&#128572", //😼
      "&#128573", //😽
      "&#128574", //😾
      "&#128575", //😿
      "&#128576", //🙀
    ];
  }
  
  getRandomCatEmoji() {
    const catEmojis = this.getCatEmojis();
    return catEmojis[Math.floor(Math.random() * (catEmojis.length - 1))];
  }
}

window.customElements.define("cat-a-graph", Catagraph);
