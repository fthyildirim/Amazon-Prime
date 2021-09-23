import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }
  posts = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a76b251ae95819f2716dfce7fc15168a9435f7af49d336f363eb54ffb7253bd2._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f77023c48f18900035527b706a3dcd3f9cad80f5c4dc9394073d1a1c4c17292f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f62f22f57b73606844459ad49f6e944fdce3c90efa060e3cac9ea38e729a8b07._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e547bc30ddd2c4c412f99b3a6cb4e44ab5c6fa24c8aac027e40ebee1828f704d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3abc2c315e4482ac4fc2e29127f0fcb7212136daa973ffb24feb6245d3dfbfc0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7bcee9d27f48aa65f0af3149009fb30fb8b28498da91f9b83de8ba3af0fe4d6d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/114442e97889d953345db6495dfffe3d8f314d0bbaf2ee040ebcdb86e6f8fa8f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7dcff6dbced2cc72579bce5721aabe9f98fef6488286bee8490c5bc763ba699e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e9ea704b7bf4aa40e95d133eb9db210cdbbf63a8e8b4b51478c486524a456c08._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d596f42ba3a4447be7834005d2a196cf95dda120458aa76f004f7a6f1482674f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postwo = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bfb0286406d5e0b4bf98b65ffa9339d6d5b65f6ce70313b8e0d9751b48f0c2aa._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SADAKATSIZ',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/UPIA_S1/*/*_*/COVER_ART/HazmatYellow._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7bcee9d27f48aa65f0af3149009fb30fb8b28498da91f9b83de8ba3af0fe4d6d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5f68eee5d3b44ec521f3b5da3b2860eab77ddad9005cc22fd728f56d4760a249._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3646315ca5295285a4cc332511b921c8e97951b02eab9ad221fbce156c8e1963._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e9ea704b7bf4aa40e95d133eb9db210cdbbf63a8e8b4b51478c486524a456c08._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2f675a85a28ad71cdfdf5e8667bf9794c28af8025215718c169be9e12479d00b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/374c3ec841e4b8c6b599d020b9685d26ee1bfd6c0d1aca5b5705426def3182b7._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d53d2a61d2851b3321f13dc5be76356e76c096d74bda4463cf6dc4895869af5d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/UPIA_S1/*/*_*/COVER_ART/HazmatYellow._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posthree = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8378f27b911226b4099d8d062da9c5c6f90528052beb4eead6a67e55452be17f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f90ce4c59fcc2d4b2c28e1087153fbd86c4e2a49e8b96408c398ee4c210b42da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/177dc768153ecf43826f6e137af3928a1dc279ebf3a337332a680b5714f0ead0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TSKR_S1/*/*_*/COVER_ART/FACES._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ae3a124a3ed50b0e8a4f32992ead14d2867bc37887b0f575171a89c96b942a51._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fe291bed633eb3d4d4575dd1cb6016d093a417c5b2a8e0ead64136834a2e17c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bf1417ad8a63fda2e912b7dc7a1f7dec604307eb65e075d7d7fbbe4cfb609921._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e26e991e09c8a4134aa2f583e87144c68d3bb031c0a69a9b8568fcbf8591147b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postfor = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/faaa4ffcece8be5f399aa5e060ec9a90a415752c3c1ea50f2499f2665895f597._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c446ce755c20fcbb302db832cf1c893a951278216ab0f64ceaae4a4747e39470._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cfe2efd2a1c612294f7040715a26ab5c1558d91f6e633c7b4ecf6b44ff71718d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/faaa4ffcece8be5f399aa5e060ec9a90a415752c3c1ea50f2499f2665895f597._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8942996a0ca1013f474e27a63e52c789005044250da97ad62363b469533ab1e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/424291e6fa91aebd49611c7cced53c0eb22614f8b62bf88099618506a91d27d9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b49c7edfa7ff4b281f775bc8605b9fa87d6b9ab4b4bed4c10ebc7376b0e89fde._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7dcff6dbced2cc72579bce5721aabe9f98fef6488286bee8490c5bc763ba699e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/ECCH_S1/*/*_*/COVER_ART/ALIVATE._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2b69847ba61920b5867b9a9691059fc89dc3c89a9dc62e3bd4384350acbdc9c3._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  postfive = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a76b251ae95819f2716dfce7fc15168a9435f7af49d336f363eb54ffb7253bd2._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f77023c48f18900035527b706a3dcd3f9cad80f5c4dc9394073d1a1c4c17292f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f62f22f57b73606844459ad49f6e944fdce3c90efa060e3cac9ea38e729a8b07._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e547bc30ddd2c4c412f99b3a6cb4e44ab5c6fa24c8aac027e40ebee1828f704d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3abc2c315e4482ac4fc2e29127f0fcb7212136daa973ffb24feb6245d3dfbfc0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7bcee9d27f48aa65f0af3149009fb30fb8b28498da91f9b83de8ba3af0fe4d6d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/114442e97889d953345db6495dfffe3d8f314d0bbaf2ee040ebcdb86e6f8fa8f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7dcff6dbced2cc72579bce5721aabe9f98fef6488286bee8490c5bc763ba699e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e9ea704b7bf4aa40e95d133eb9db210cdbbf63a8e8b4b51478c486524a456c08._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d596f42ba3a4447be7834005d2a196cf95dda120458aa76f004f7a6f1482674f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  postsix = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8378f27b911226b4099d8d062da9c5c6f90528052beb4eead6a67e55452be17f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f90ce4c59fcc2d4b2c28e1087153fbd86c4e2a49e8b96408c398ee4c210b42da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/177dc768153ecf43826f6e137af3928a1dc279ebf3a337332a680b5714f0ead0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TSKR_S1/*/*_*/COVER_ART/FACES._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ae3a124a3ed50b0e8a4f32992ead14d2867bc37887b0f575171a89c96b942a51._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fe291bed633eb3d4d4575dd1cb6016d093a417c5b2a8e0ead64136834a2e17c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bf1417ad8a63fda2e912b7dc7a1f7dec604307eb65e075d7d7fbbe4cfb609921._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e26e991e09c8a4134aa2f583e87144c68d3bb031c0a69a9b8568fcbf8591147b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postseven = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8378f27b911226b4099d8d062da9c5c6f90528052beb4eead6a67e55452be17f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f90ce4c59fcc2d4b2c28e1087153fbd86c4e2a49e8b96408c398ee4c210b42da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/177dc768153ecf43826f6e137af3928a1dc279ebf3a337332a680b5714f0ead0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TSKR_S1/*/*_*/COVER_ART/FACES._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ae3a124a3ed50b0e8a4f32992ead14d2867bc37887b0f575171a89c96b942a51._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fe291bed633eb3d4d4575dd1cb6016d093a417c5b2a8e0ead64136834a2e17c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bf1417ad8a63fda2e912b7dc7a1f7dec604307eb65e075d7d7fbbe4cfb609921._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e26e991e09c8a4134aa2f583e87144c68d3bb031c0a69a9b8568fcbf8591147b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posteight = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a76b251ae95819f2716dfce7fc15168a9435f7af49d336f363eb54ffb7253bd2._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f77023c48f18900035527b706a3dcd3f9cad80f5c4dc9394073d1a1c4c17292f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f62f22f57b73606844459ad49f6e944fdce3c90efa060e3cac9ea38e729a8b07._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e547bc30ddd2c4c412f99b3a6cb4e44ab5c6fa24c8aac027e40ebee1828f704d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/3abc2c315e4482ac4fc2e29127f0fcb7212136daa973ffb24feb6245d3dfbfc0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7bcee9d27f48aa65f0af3149009fb30fb8b28498da91f9b83de8ba3af0fe4d6d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/114442e97889d953345db6495dfffe3d8f314d0bbaf2ee040ebcdb86e6f8fa8f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7dcff6dbced2cc72579bce5721aabe9f98fef6488286bee8490c5bc763ba699e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e9ea704b7bf4aa40e95d133eb9db210cdbbf63a8e8b4b51478c486524a456c08._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d596f42ba3a4447be7834005d2a196cf95dda120458aa76f004f7a6f1482674f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  postnine = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8378f27b911226b4099d8d062da9c5c6f90528052beb4eead6a67e55452be17f._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f90ce4c59fcc2d4b2c28e1087153fbd86c4e2a49e8b96408c398ee4c210b42da._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/177dc768153ecf43826f6e137af3928a1dc279ebf3a337332a680b5714f0ead0._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6f539598be1355e7d55b5dc1fd5176484ffa573bb4c4928256af84e654a283f8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/TSKR_S1/*/*_*/COVER_ART/FACES._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ae3a124a3ed50b0e8a4f32992ead14d2867bc37887b0f575171a89c96b942a51._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fe291bed633eb3d4d4575dd1cb6016d093a417c5b2a8e0ead64136834a2e17c8._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/bf1417ad8a63fda2e912b7dc7a1f7dec604307eb65e075d7d7fbbe4cfb609921._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e26e991e09c8a4134aa2f583e87144c68d3bb031c0a69a9b8568fcbf8591147b._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];
  posten = [
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/faaa4ffcece8be5f399aa5e060ec9a90a415752c3c1ea50f2499f2665895f597._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'SİNDİRELLA',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c446ce755c20fcbb302db832cf1c893a951278216ab0f64ceaae4a4747e39470._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'RÖNTGENCİLER',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cfe2efd2a1c612294f7040715a26ab5c1558d91f6e633c7b4ecf6b44ff71718d._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yüksek Şatodaki Adam',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/faaa4ffcece8be5f399aa5e060ec9a90a415752c3c1ea50f2499f2665895f597._UR1920,1080_RI_SX356_FMwebp_.jpg',
      text: "Prime'a Dahil",
      textP: 'Yarının Savaşı',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/8942996a0ca1013f474e27a63e52c789005044250da97ad62363b469533ab1e1._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Solos',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/424291e6fa91aebd49611c7cced53c0eb22614f8b62bf88099618506a91d27d9._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b49c7edfa7ff4b281f775bc8605b9fa87d6b9ab4b4bed4c10ebc7376b0e89fde._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '7500',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7dcff6dbced2cc72579bce5721aabe9f98fef6488286bee8490c5bc763ba699e._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Koruyucu Şeytan',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/ECCH_S1/*/*_*/COVER_ART/ALIVATE._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: '1917',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
    {
      imageUrl: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2b69847ba61920b5867b9a9691059fc89dc3c89a9dc62e3bd4384350acbdc9c3._UR1920,1080_RI_SX356_FMwebp_.jpg',
      textP: 'Kimyasal Kalpler',
      placeholder:
        "Kay Cannon'dan (Pitch Perfect), klasik peri masalını cesur bir şekilde ele alan bir modern film müzikali Sindirella. Hırslı...",
      footer: '2sa 35dk 2021',
    },
  ];

  @Input()
  cards: any[] = [];
  @Input()
  title?: string;

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }
}
