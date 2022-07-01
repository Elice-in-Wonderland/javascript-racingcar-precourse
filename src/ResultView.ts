import { SELECTOR } from './constants';
import { $, createElement } from './utils/dom';

class ResultView {
  view: HTMLDivElement;

  constructor() {
    this.view = createElement('div');
    $(SELECTOR.ROOT)?.appendChild(this.view);

    this.initialize();
  }

  initialize() {
    this.view.insertAdjacentHTML('afterbegin', '');
  }

  renderWinner(winners: string) {
    const tpl = createElement('h4');
    tpl.innerHTML = `최종 우승자: <span id="racing-winners">${winners}</span>`;
    this.view.appendChild(tpl);
  }
}

export default ResultView;
