class ItemMatcher {
  static parameters() {
    return [
      {
        matcher: "Sulfuras",
        expiredMultiplier: 1,
        expireQualityphase: 0,
        dayToDayQualityphase: [{ startDay: 50, endDay: 0, phase: 0 }],
      },
      {
        matcher: "Aged Brie",
        expiredMultiplier: 1,
        expireQualityphase: 2,
        dayToDayQualityphase: [{ startDay: 50, endDay: 0, phase: 1 }],
      },
      {
        matcher: "Backstage passes",
        expiredMultiplier: 0,
        expireQualityphase: 0,
        dayToDayQualityphase: [
          { startDay: 50, endDay: 11, phase: 1 },
          { startDay: 10, endDay: 6, phase: 2 },
          { startDay: 5, endDay: 0, phase: 3 },
        ],
      },
      {
        matcher: "Conjured",
        expiredMultiplier: 1,
        expireQualityphase: -4,
        dayToDayQualityphase: [{ startDay: 50, endDay: 0, phase: -2 }],
      },
      {
        matcher: "default",
        expiredMultiplier: 1,
        expireQualityphase: -2,
        dayToDayQualityphase: [{ startDay: 50, endDay: 0, phase: -1 }],
      },
    ];
  }
}
