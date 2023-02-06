
type BlockType = Array | string | boolean | { tag: string; cls: string; content: ({ tag: string; cls: string; attrs: { 'data-id': string; width: string; src: string; }; } | { tag: string; cls: string[]; attrs: { width: string; src: string; value: string; }; })[]; }[] | null | undefined


export function templateEngine(block: BlockType) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('');
    }
    if ((typeof block === 'string' || typeof block === 'number' || block === true) && (typeof block !== 'string') && (typeof block !== 'boolean')) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();
    

        block.forEach(element => {
            return fragment.appendChild(templateEngine(element));
        });

        return fragment;
    }

    const result = document.createElement(block.tag);

    if ((block.cls) && (typeof block !== 'string')) {
        const classes = [].concat(block.cls);
        classes.forEach(cls => {
            result.classList.add(cls);
        });
    }

    if ((block.attrs) && (block.attrs !== 'string | true') && (block.attrs !== 'string')) {
        const keys = Object.keys(block.attrs);

        keys.forEach(key => {
            result.setAttribute(key, block.attrs[key]);
        });
    }

    result.appendChild(templateEngine(block.content));

    return result;
}


