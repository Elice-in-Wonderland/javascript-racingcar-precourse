function $(selector: string, scope = document) {
  return scope.querySelector<HTMLElement>(selector);
}

function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  attributes: Record<string, any> = {},
) {
  const ele = document.createElement(tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });

  return ele;
}

function changeElementVisibility(
  selector: HTMLElement | null,
  type: 'hidden' | 'visible',
) {
  if (!selector) return;
  // eslint-disable-next-line no-param-reassign
  selector.style.visibility = type;
}

export { $, createElement, changeElementVisibility };
