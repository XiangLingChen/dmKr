const ALL_PRODUCT_DATA = {
    beautyEffect : {
      id: 1,
      title: 'Beauty Effect',
      routeName: 'beautyEffect',
      items: [
        {
          id: 1,
          name: 'Beauty Effect Ampoule',
          imageUrl: 'https://imgur.com/5RIBTFf.jpg',
          price: 20
        },
        {
          id: 2,
          name: 'Beauty Effect Hyaluron Booster',
          imageUrl: 'https://imgur.com/umzIG1X.jpg',
          price: 16
        },
        {
          id: 3,
          name: 'Beauty Effect Day Cream',
          imageUrl: 'https://imgur.com/EotsUGC.jpg',
          price: 18
        },
        {
          id: 4,
          name: 'Beauty Effect Night Cream',
          imageUrl: 'https://imgur.com/0DnPZlt.jpg',
          price: 18
        }
      ]
    },
    aqua : {
      id: 2,
      title: 'Aqua',
      routeName: 'aqua',
      items: [
        {
          id: 5,
          name: 'Aqua Serum',
          imageUrl: 'https://imgur.com/NRsMCHg.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Aqua Eye Roll-On',
          imageUrl: 'https://imgur.com/ZAskFYQ.jpg',
          price: 15
        },
        {
          id: 7,
          name: 'Aqua Day Cream',
          imageUrl: 'https://imgur.com/Z4Lfb6R.jpg',
          price: 18
        }
      ]
    },
    q10 : {
      id: 3,
      title: 'Q10',
      routeName: 'q10',
      items: [
        {
          id: 8,
          name: 'Q10 Serum',
          imageUrl: 'https://imgur.com/3NFMq0m.jpg',
          price: 18
        },
        {
          id: 9,
          name: 'Q10 Eye Cream',
          imageUrl: 'https://imgur.com/IJ4FyCH.jpg',
          price: 16
        },
        {
          id: 10,
          name: 'Q10 Concentrate',
          imageUrl: 'https://imgur.com/LMbKvgt.jpg',
          price: 22
        },
        {
          id: 11,
          name: 'Q10 Day Cream',
          imageUrl: 'https://imgur.com/Dubsmwh.jpg',
          price: 20
        },
        {
          id: 12,
          name: 'Q10 Night Cream',
          imageUrl: 'https://imgur.com/h1OWW36.jpg',
          price: 20
        }
      ]
    },
    aloeVera : {
      id: 4,
      title: 'Aloe Vera',
      routeName: 'aloeVera',
      items: [
        {
          id: 13,
          name: 'Aloe Vera Toner',
          imageUrl: 'https://imgur.com/DonaNbx.jpg',
          price: 12
        },
        {
          id: 14,
          name: 'Aloe Vera Day Cream',
          imageUrl: 'https://imgur.com/ZoYXsvL.jpg',
          price: 16
        },
        {
          id: 15,
          name: 'Aloe Vera Night Cream',
          imageUrl: 'https://imgur.com/pxfkLql.jpg',
          price: 16
        },
        {
          id: 16,
          name: 'Aloe Vera Eye Cream',
          imageUrl: 'https://imgur.com/CzlHsSK.jpg',
          price: 14
        },
        {
          id: 17,
          name: 'Aloe Vera Peeling Cream',
          imageUrl: 'https://imgur.com/Rv2TIAV.jpg',
          price: 12
        }
      ]
    },
    almond : {
      id: 5,
      title: 'Almond',
      routeName: 'almond',
      items: [
        {
          id: 18,
          name: 'Almond Peeling Cream',
          imageUrl: 'https://imgur.com/QlRAEUQ.jpg',
          price: 10
        },
        {
          id: 19,
          name: 'Almond Cream',
          imageUrl: 'https://imgur.com/qlm761z.jpg',
          price: 15
        }
      ]
    },
    lipBalm : {
      id: 6,
      title: 'Lip Balm',
      routeName: 'lipBalm',
      items: [
        {
          id: 21,
          name: 'Balm for Sensitive Lip',
          imageUrl: 'https://imgur.com/EA0VORF.jpg',
          price: 8
        },
        {
          id: 22,
          name: 'Lip Balm Intensive Care',
          imageUrl: 'https://imgur.com/iI1AYLc.jpg',
          price: 8
        }
      ]
    },
    makeupRemover : {
      id: 7,
      title: 'Makeup Remover',
      routeName: 'makeupRemover',
      items: [
        {
          id: 23,
          name: 'Cleansing Water for Dry Skin',
          imageUrl: 'https://imgur.com/UX2oKVc.jpg',
          price: 8
        },
        {
          id: 24,
          name: 'Cleansing Water for Combination Skin',
          imageUrl: 'https://imgur.com/VQO6IVD.jpg',
          price: 8
        }
      ]
    },
    cleansing : {
      id: 8,
      title: 'Cleansing',
      routeName: 'cleansing',
      items: [
        {
          id: 25,
          name: 'Aloe Vera Wash Gel',
          imageUrl: 'https://imgur.com/AUnNv3x.jpg',
          price: 10
        },
        {
          id: 26,
          name: 'Aloe Vera Gentle Foam',
          imageUrl: 'https://imgur.com/yJkoEsD.jpg',
          price: 11
        }
      ]
    },
    bodyMilk : {
      id: 9,
      title: 'Body Milk',
      routeName: 'bodyMilk',
      items: [
        {
          id: 27,
          name: 'Body Lotion',
          imageUrl: 'https://imgur.com/ARXUIb2.jpg',
          price: 15
        },
        {
          id: 28,
          name: 'Body Milk',
          imageUrl: 'https://imgur.com/4BshLeH.jpg',
          price: 15
        }
      ]
    },
    bodyFit : {
      id: 10,
      title: 'Body Fit',
      routeName: 'bodyFit',
      items: [
        {
          id: 29,
          name: 'Body Fit Cream',
          imageUrl: 'https://imgur.com/Q7gKPHv.jpg',
          price: 12
        },
        {
          id: 30,
          name: 'Body Fit Serum',
          imageUrl: 'https://imgur.com/hJZnApU.jpg',
          price: 14
        },
        {
          id: 31,
          name: 'Body Fit Toner',
          imageUrl: 'https://imgur.com/GFvhjSR.jpg',
          price: 15
        }
      ]
    },
    shampoo : {
      id: 11,
      title: 'Shampoo',
      routeName: 'shampoo',
      items: [
        {
          id: 32,
          name: 'Shampoo Color Gloss',
          imageUrl: 'https://imgur.com/cZWYrgu.jpg',
          price: 20
        },
        {
          id: 33,
          name: 'Moisturizing Shampoo',
          imageUrl: 'https://imgur.com/5WkXS7O.jpg',
          price: 18
        },
        {
          id: 34,
          name: 'Shampoo Intensive Care',
          imageUrl: 'https://imgur.com/YUKTif5.jpg',
          price: 20
        }
      ]
    },
    conditioner : {
      id: 12,
      title: 'Conditioner',
      routeName: 'conditioner',
      items: [
        {
          id: 35,
          name: 'Conditioner Color Gloss',
          imageUrl: 'https://imgur.com/JrXHvKe.jpg',
          price: 20
        },
        {
          id: 36,
          name: 'Moisturizing Conditioner',
          imageUrl: 'https://imgur.com/DM02DHA.jpg',
          price: 18
        },
        {
          id: 37,
          name: 'Conditioner Intensive Care',
          imageUrl: 'https://imgur.com/HBNh11I.jpg',
          price: 20
        }
      ]
    }
};
  
  export default ALL_PRODUCT_DATA;
  