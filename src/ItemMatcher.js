class ItemMatcher {
  static parameters() {
    return [
      {
        matcher: "Sulfuras",
        expiredMultiplier: 1,
        expireQualityPase: 0,
        dayToDayQualityPase: [{ startDay: 50, endDay: 0, pase: 0 }],
      },
      {
        matcher: "Aged Brie",
        expiredMultiplier: 1,
        expireQualityPase: 2,
        dayToDayQualityPase: [{ startDay: 50, endDay: 0, pase: 1 }],
      },
      {
        matcher: "Backstage passes",
        expiredMultiplier: 0,
        expireQualityPase: 0,
        dayToDayQualityPase: [
          { startDay: 50, endDay: 11, pase: 1 },
          { startDay: 10, endDay: 6, pase: 2 },
          { startDay: 5, endDay: 0, pase: 3 },
        ],
      },
      {
        matcher: "Conjured",
        expiredMultiplier: 1,
        expireQualityPase: -4,
        dayToDayQualityPase: [{ startDay: 50, endDay: 0, pase: -2 }],
      },
      {
        matcher: "default",
        expiredMultiplier: 1,
        expireQualityPase: -2,
        dayToDayQualityPase: [{ startDay: 50, endDay: 0, pase: -1 }],
      },
    ];
  }
}
