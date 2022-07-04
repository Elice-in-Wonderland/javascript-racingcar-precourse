type TargetType = Element | Document | null;

const domSelector = (selector: string): HTMLElement | null =>
  document.querySelector(selector);

const domCreator = (creator: string): HTMLElement =>
  document.createElement(creator);

function addEventListenerToTarget(
  eventTarget: TargetType,
  type: string,
  listener: (event: Event) => void,
) {
  if (eventTarget == null) return;

  eventTarget.addEventListener(type, listener);
}

export { domSelector, domCreator, addEventListenerToTarget };
