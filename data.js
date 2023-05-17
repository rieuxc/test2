var APP_DATA = {
  "scenes": [
    {
      "id": "0-vue-droite",
      "name": "vue droite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "yaw": 1.2970173131772373,
        "pitch": 0.19450406213682925,
        "fov": 1.3199838779965631
      },
      "linkHotspots": [
        {
          "yaw": 1.2970173131772373,
          "pitch": 0.19450406213682925,
          "rotation": 3.141592653589793,
          "target": "3-arrive"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vue-gauche",
      "name": "vue gauche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "yaw": 1.5896622173874508,
        "pitch": 0.05476327963076599,
        "fov": 1.3199838779965631
      },
      "linkHotspots": [
        {
          "yaw": 1.62581113449823,
          "pitch": 0.13012477777963838,
          "rotation": 3.141592653589793,
          "target": "3-arrive"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entree",
      "name": "entree",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "yaw": 1.6611013367949017,
        "pitch": 0.11941420794795476,
        "fov": 1.3199838779965631
      },
      "linkHotspots": [
        {
          "yaw": 1.7641788018543778,
          "pitch": 0.1081405429756721,
          "rotation": 1.5707963267948966,
          "target": "0-vue-droite"
        },
        {
          "yaw": 1.3812777299608143,
          "pitch": 0.094301136567708,
          "rotation": 4.71238898038469,
          "target": "1-vue-gauche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-arrive",
      "name": "arrivée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1448,
      "initialViewParameters": {
        "yaw": 1.1946265394300024,
        "pitch": 0,
        "fov": 1.3199838779965631
      },
      "linkHotspots": [
        {
          "yaw": 1.4814371102779607,
          "pitch": 0.049417371211758265,
          "rotation": 0,
          "target": "2-entree"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6706990597605618,
          "pitch": 0.394308611292324,
          "title": "<div>arrivee</div>",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "test_3_exterieur",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
