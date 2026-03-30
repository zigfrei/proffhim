import type {YMapLocationRequest} from '@yandex/ymaps3-types';
import {YMapDefaultSchemeLayerProps} from '@yandex/ymaps3-types';

export const LOCATION: YMapLocationRequest = {
  center: [23.709074, 53.488607], // starting position [lng, lat]
  zoom: 12 // starting zoom
};


export const MAP_CUSTOMIZATION: YMapDefaultSchemeLayerProps['customization'] = [
  // {
  //   tags: {all: ['water']},
  //   elements: 'geometry',
  //   stylers: [{opacity: 0}],
  // },
  // {
  //   tags: {any: ['poi', 'transit_location']},
  //   elements: 'label.text.fill',
  //   stylers: [{color: '#0000DD'}],
  // },
];