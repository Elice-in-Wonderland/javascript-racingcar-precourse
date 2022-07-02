import Car from './Car';
import { SELECTOR } from './constants';
import { $, changeElementVisibility, createElement } from './utils/dom';

class ResultView {
  view: HTMLDivElement;

  constructor() {
    this.view = createElement('div', {
      id: SELECTOR.RACING_RESULT_CONTENT.slice(1),
    });
    $(SELECTOR.ROOT)?.appendChild(this.view);

    this.initialize();
  }

  initialize() {
    changeElementVisibility($(SELECTOR.RACING_RESULT_HEADING), 'hidden');
    changeElementVisibility($(SELECTOR.RACING_RESULT_CONTENT), 'hidden');
    this.view.innerHTML = '';
  }

  visible() {
    changeElementVisibility($(SELECTOR.RACING_RESULT_HEADING), 'visible');
    changeElementVisibility($(SELECTOR.RACING_RESULT_CONTENT), 'visible');
  }

  renderStep(car: Car) {
    this.view.insertAdjacentHTML(
      'beforeend',
      `<span>${car.getName()}: ${'-'.repeat(car.getPosition())}</span><br />`,
    );
  }

  renderWinner(winners: string) {
    this.view.insertAdjacentHTML(
      'beforeend',
      `<h4>최종 우승자: <span id="racing-winners">${winners}</span></h4>`,
    );
  }
}

export default ResultView;
