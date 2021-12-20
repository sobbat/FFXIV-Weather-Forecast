/**
 * @author Kiku
 * 
 * Labels for each language
 * 
 * Structure is as follows:
 * {
 *   LANGUAGE: {
 *     area: { AREA_ID: 'TRANSLATED_AREA_NAME' ... },
 *     weather: { WEATHER_ID: 'TRANSLATED_WEATHER_NAME' ... },
 *     web: { LABEL_ID: 'TRANSLATED_LABEL' }
 *   }
 * }
 */

const langMap = {
  en: {
    area: {
      limsaLominsa: 'Limsa Lominsa',
      middleLaNoscea: 'Middle La Noscea',
      lowerLaNoscea: 'Lower La Noscea',
      easternLaNoscea: 'Eastern La Noscea',
      westernLaNoscea: 'Western La Noscea',
      upperLaNoscea: 'Upper La Noscea',
      outerLaNoscea: 'Outer La Noscea',
      wolvesDenPier: 'Wolves\' Den Pier',
      mist: 'Mist',
      gridania: 'Gridania',
      centralShroud: 'Central Shroud',
      eastShroud: 'East Shroud',
      southShroud: 'South Shroud',
      northShroud: 'North Shroud',
      theLavenderBeds: 'The Lavender Beds',
      uldah: 'Ul\'dah',
      westernThanalan: 'Western Thanalan',
      centralThanalan: 'Central Thanalan',
      easternThanalan: 'Eastern Thanalan',
      southernThanalan: 'Southern Thanalan',
      northernThanalan: 'Northern Thanalan',
      theGoblet: 'The Goblet',
      morDhona: 'Mor Dhona',
      ishgard: 'Ishgard',
      coerthasCentralHighlands: 'Coerthas Central Highlands',
      coerthasWesternHighlands: 'Coerthas Western Highlands',
      theSeaOfclouds: 'The Sea of Clouds',
      azysLla: 'Azys Lla',
      theDravanianForelands: 'The Dravanian Forelands',
      theDravanianHinterlands: 'The Dravanian Hinterlands',
      theChurningMists: 'The Churning Mists',
      idyllshire: 'Idyllshire',
      rhalgrsReach: 'Rhalgr\'s Reach',
      theFringes: 'The Fringes',
      thePeaks: 'The Peaks',
      theLochs: 'The Lochs',
      kugane: 'Kugane',
      shirogane: 'Shirogane',
      theRubySea: 'The Ruby Sea',
      yanxia: 'Yanxia',
      theAzimSteppe: 'The Azim Steppe',
      eurekaAnemos: 'Eureka Anemos',
      eurekaPagos: 'Eureka Pagos',
      eurekaPyros: 'Eureka Pyros',
      eurekaHydatos: 'Eureka Hydatos',
      theCrystarium: 'The Crystarium',
      eulmore: 'Eulmore',
      lakeland: 'Lakeland',
      kholusia: 'Kholusia',
      amhAraeng: 'Amh Araeng',
      ilMheg: 'Il Mheg',
      theRaktikaGreatwood: 'The Rak\'tika Greatwood',
      theTempest: 'The Tempest',
      radzAtHan: 'Radz-at-Han',
      thavnair: 'Thavnair',
      garlemald: 'Garlemald',
      oldSharlayan: 'Old Sharlayan',
      labyrinthos: 'Labyrinthos',
      mareLamentorum: 'Mare Lamentorum',
      ultimaThule: 'Ultima Thule',
      elpis: 'Elpis'
    },
    weather: {
      clouds: 'Clouds',
      clearSkies: 'Clear Skies',
      fairSkies: 'Fair Skies',
      fog: 'Fog',
      rain: 'Rain',
      wind: 'Wind',
      showers: 'Showers',
      gales: 'Gales',
      thunder: 'Thunder',
      thunderstorms: 'Thunderstorms',
      dustStorms: 'Dust Storms',
      heatWaves: 'Heat Waves',
      gloom: 'Gloom',
      snow: 'Snow',
      blizzard: 'Blizzard',
      umbralWind: 'Umbral Wind',
      umbralStatic: 'Umbral Static',
      moonDust: 'Moon Dust',
      astromagneticStorm: 'Astromagnetic Storm'
    },
    web: {
      ffxivWeatherForecastLabel: 'FFXIV Weather Forecast',
      selectAnArea: 'Please select an area',
      anyWeather: 'Any',
      areaLabel: 'Area',
      targetWeatherLabel: 'Target Weather',
      precedingWeatherLabel: 'Preceding Weather',
      timeLabel: 'Eorzea Time',
      findWeather: 'Find Weather',
      addWeatherConditions: 'Add Weather Conditions',
      areaConditionsHeader: 'Area',
      targetWeatherConditionsHeader: 'Target Weather',
      previousWeatherConditionsHeader: 'Previous Weather',
      eorzeaTimeConditionsHeader: 'Eorzea Time',
      areaHeader: 'Area',
      previousWeatherHeader: 'Previous Weather',
      currentWeatherHeader: 'Current Weather',
      eorzeaTimeHeader: 'Eorzea Time',
      localTimeHeader: 'Local Time',
      advancedOptionsLabel: 'Advanced Options',
      maximumNumberLabel: 'Maximum Number',
      maximumCyclesLabel: 'Maximum Cycles',
      customStartDateLabel: 'Custom Start Date',
      noResultsFoundLabel: 'No results found.',
      noConditionsMessage: 'Please add a weather condition.'
    }
  },
  ja: {
    area: {
      limsaLominsa: 'リムサ・ロミンサ',
      middleLaNoscea: '中央ラノシア',
      lowerLaNoscea: '低地ラノシア',
      easternLaNoscea: '東ラノシア',
      westernLaNoscea: '西ラノシア',
      upperLaNoscea: '高地ラノシア',
      outerLaNoscea: '外地ラノシア',
      wolvesDenPier: 'ウルヴズジェイル',
      mist: 'ミスト・ヴィレッジ',
      gridania: 'グリダニア',
      centralShroud: '黒衣森：中央森林',
      eastShroud: '黒衣森：東部森林',
      southShroud: '黒衣森：南部森林',
      northShroud: '黒衣森：北部森林',
      theLavenderBeds: 'ラベンダーベッド',
      uldah: 'ウルダハ',
      westernThanalan: '西ザナラーン',
      centralThanalan: '中央ザナラーン',
      easternThanalan: '東ザナラーン',
      southernThanalan: '南ザナラーン',
      northernThanalan: '北ザナラーン',
      theGoblet: 'ゴブレットビュート',
      morDhona: 'モードゥナ',
      ishgard: 'イシュガルド',
      coerthasCentralHighlands: 'クルザス中央高地',
      coerthasWesternHighlands: 'クルザス西部高地',
      theSeaOfclouds: 'アバラシア雲海',
      azysLla: 'アジス・ラー',
      theDravanianForelands: '高地ドラヴァニア',
      theDravanianHinterlands: '低地ドラヴァニア',
      theChurningMists: 'ドラヴァニア雲海',
      idyllshire: 'イディルシャイア',
      rhalgrsReach: 'ラールガーズリーチ',
      theFringes: 'ギラバニア辺境地帯',
      thePeaks: 'ギラバニア山岳地帯',
      theLochs: 'ギラバニア湖畔地帯',
      kugane: 'クガネ',
      shirogane: 'シロガネ',
      theRubySea: '紅玉海',
      yanxia: 'ヤンサ',
      theAzimSteppe: 'アジムステップ',
      eurekaAnemos: 'エウレカ：アネモス',
      eurekaPagos: 'エウレカ：パゴス',
      eurekaPyros: 'エウレカ：ピューロス',
      eurekaHydatos: 'エウレカ：ヒュダトス',
      theCrystarium: 'クリスタリウム',
      eulmore: 'ユールモア',
      lakeland: 'レイクランド',
      kholusia: 'コルシア島',
      amhAraeng: 'アム・アレーン',
      ilMheg: 'イル・メグ',
      theRaktikaGreatwood: 'ラケティカ大森林',
      theTempest: 'テンペスト',
      radzAtHan: 'ラザハン',
      thavnair: 'サベネア島',
      garlemald: 'ガレマルド',
      oldSharlayan: 'オールド・シャーレアン',
      labyrinthos: 'ラヴィリンソス',
      mareLamentorum: '嘆きの海',
      ultimaThule: 'ウルティマ・トゥーレ',
      elpis: 'エルピス'
    },
    weather: {
      clouds: '曇り',
      clearSkies: '快晴',
      fairSkies: '晴れ',
      fog: '霧',
      rain: '雨',
      wind: '風',
      showers: '暴雨',
      gales: '暴風',
      thunder: '雷',
      thunderstorms: '雷雨',
      dustStorms: '砂塵',
      heatWaves: '灼熱波',
      gloom: '妖霧',
      snow: '雪',
      blizzard: '吹雪',
      umbralWind: '霊風',
      umbralStatic: '放電',
      moonDust: '月砂塵',
      astromagneticStorm: '磁気嵐'
    },
    web: {
      ffxivWeatherForecastLabel: 'FF14天気予報',
      selectAnArea: 'エリアを選択してください',
      anyWeather: '全て',
      areaLabel: 'エリア',
      targetWeatherLabel: '希望の天候',
      precedingWeatherLabel: '直前の天候',
      timeLabel: 'エオルゼア時間',
      findWeather: '天候を検索',
      addWeatherConditions: '天気都合を追加',
      areaConditionsHeader: 'エリア',
      targetWeatherConditionsHeader: '希望の天候',
      previousWeatherConditionsHeader: '直前の天候',
      eorzeaTimeConditionsHeader: 'エオルゼア時間',
      areaHeader: 'エリア',
      previousWeatherHeader: '直前の天候',
      currentWeatherHeader: '現在の天候',
      eorzeaTimeHeader: 'エオルゼア時間',
      localTimeHeader: 'ローカル時間',
      advancedOptionsLabel: '詳細オプション',
      maximumNumberLabel: '最大数',
      maximumCyclesLabel: '最大サイクル',
      customStartDateLabel: 'カスタム開始日',
      noResultsFoundLabel: '結果が見つかりませんでした。',
      noConditionsMessage: '天気都合を追加してください。'
    }
  }
};