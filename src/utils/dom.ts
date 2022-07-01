function $(selector: string, scope = document) {
  return scope.querySelector<HTMLElement>(selector);
}

function createElement<K extends keyof HTMLElementTagNameMap>(tagName: K) {
  return document.createElement(tagName);
}

export { $, createElement };
