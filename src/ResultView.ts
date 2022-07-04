import { SELECTOR } from './constants';
import { RenderStepProps } from './RacingCarGame';
import { $, changeElementVisibility, createElement } from './utils/dom';

class ResultView {
  view: HTMLDivElement;

  constructor() {
    this.view = createElement('div', {
      id: SELECTOR.RACING_RESULT_CONTENT.slice(1),
    });
    ($(SELECTOR.ROOT) as HTMLDivElement).appendChild(this.view);

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

  renderStep({ car, options }: RenderStepProps) {
    this.view.insertAdjacentHTML(
      'beforeend',
      `<span>${car.getName()}: ${'-'.repeat(car.getPosition())}</span><br />`,
    );

    if (options?.last) this.view.insertAdjacentHTML('beforeend', `<br />`);
  }

  renderWinner(winners: string) {
    this.view.insertAdjacentHTML(
      'beforeend',
      `<span>최종 우승자: <strong id="racing-winners">${winners}</strong></span>`,
    );
  }
}

export default ResultView;
