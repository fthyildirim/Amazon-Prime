import { Component, OnInit } from '@angular/core';
import { Card } from '../posts/card.blueprint';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  cards = [
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_rango_magellan/322c351c-fb7e-4cdd-958e-6821e58c62c8._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Cinderella_Shoemice/33d106be-3669-45be-9c54-32a212f3bc02._UR3000,600_SX1500_FMwebp_.jpeg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_KungFuPanda_Final/e524ad65-e5d5-47f7-b9c4-74afc386a5e6._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_DespicableMe2/4a33b257-7983-4459-9edc-1146d6bdd9a6._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_AlvinandChipmunksChipwrecked/d3f47395-b2da-403c-a5f2-58b624ff1551._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/FRITES_Hero_Dora/a6cabfbf-d5cd-415a-8ad5-8ad5b85baf6e._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_frites_drseussthelorax/feee2173-8dbc-44b3-a5da-5f0eff79edc1._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_justaddmagic/78ec0774-6d9a-43cf-99b9-0bf708f40a29._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/FRITES_Hero_Peppa/eedcaee0-0ec1-4257-8ea9-f43edf918eb1._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_StinkyDirtyS2C/6e30e597-3d87-403d-8078-06dcfa7f84ee._UR3000,600_SX1500_FMwebp_.jpg'},
    {imageUrl:'https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_wishenpoof_S1_updatedbranding_v2/813d461f-4ef4-4247-8214-6d8bf103a633._UR3000,600_SX1500_FMwebp_.jpg'},

  ];


}
