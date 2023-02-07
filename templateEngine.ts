export type Template =
  | {
      tag: string;
      cls: string | string[];
      attrs?: {
        ['data-id']?: string;
        width?: string;
        src?: string;
        value?: string;
      };
      content?: Template;
    }
  | string
  | boolean
  | number
  | Template[];

export function templateEngine(block: Template) {
  if (block === undefined || block === null || block === false) {
    return document.createTextNode('');
  }
  if (
    typeof block === 'string' ||
    typeof block === 'number' ||
    block === true
  ) {
    return document.createTextNode(String(block));
  }
  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();

    block.forEach((item) => {
      const el = templateEngine(item);

      fragment.appendChild(el);
    });

    return fragment;
  }

  const element = document.createElement(block.tag);

  if (block.cls) {
    if (typeof block.cls === 'string') {
      element.classList.add(block.cls);
    } else {
      element.classList.add(...block.cls);
    }
  }

  if (block.attrs) {
    const keys = Object.entries(block.attrs);

    keys.forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (block.content) {
    const content = templateEngine(block.content);

    element.appendChild(content);
  }

  return element;
}
