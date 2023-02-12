import { test, expect } from '@jest/globals';
import { compareCards } from '../cardsGameTeastFunc';
import { Template } from '../templateEngine';


test('должно вернуть массив с двумя элементами', () => {

  const array = [
    {
      tag: "div",
      cls: "card__item",
      content: [
          {
              tag: "img",
              cls: "card__item-front",
              attrs: {
                  "data-id": "6C",
                  width: "95",
                  src: "img/6C.svg",
              },
          },
          {
              tag: "img",
              cls: ["card__item-back", "card__item_hidden"],
              attrs: {
                  width: "95",
                  src: "img/shirt.svg",
                  value: "6C",
              },
          },
      ],
  },
  {
      tag: "div",
      cls: "card__item",
      content: [
          {
              tag: "img",
              cls: "card__item-front",
              attrs: {
                  "data-id": "6D",
                  width: "95",
                  src: "img/6D.svg",
              },
          },
          {
              tag: "img",
              cls: ["card__item-back", "card__item_hidden"],
              attrs: {
                  width: "95",
                  src: "img/shirt.svg",
                  value: "6D",
              },
          },
      ],
  }
  ]
  expect(compareCards(array)).toHaveLength(2);
});

test('массивы не должны быть равны', () => {

  const array = [
    {
      tag: "div",
      cls: "card__item",
      content: [
          {
              tag: "img",
              cls: "card__item-front",
              attrs: {
                  "data-id": "6C",
                  width: "95",
                  src: "img/6C.svg",
              },
          },
          {
              tag: "img",
              cls: ["card__item-back", "card__item_hidden"],
              attrs: {
                  width: "95",
                  src: "img/shirt.svg",
                  value: "6C",
              },
          },
      ],
  },
  {
      tag: "div",
      cls: "card__item",
      content: [
          {
              tag: "img",
              cls: "card__item-front",
              attrs: {
                  "data-id": "6D",
                  width: "95",
                  src: "img/6D.svg",
              },
          },
          {
              tag: "img",
              cls: ["card__item-back", "card__item_hidden"],
              attrs: {
                  width: "95",
                  src: "img/shirt.svg",
                  value: "6D",
              },
          },
      ],
  }
  ]

  let secArray: Template;

  secArray = [
    {
      tag: "div",
      cls: "card__item",
      content: [
          {
              tag: "img",
              cls: "card__item-front",
              attrs: {
                  "data-id": "6C",
                  width: "95",
                  src: "img/6C.svg",
              },
          },
          {
              tag: "img",
              cls: ["card__item-back", "card__item_hidden"],
              attrs: {
                  width: "95",
                  src: "img/shirt.svg",
                  value: "6C",
              },
          },
      ],
  }
]
  expect(compareCards(array)).not.toEqual(secArray);
});
