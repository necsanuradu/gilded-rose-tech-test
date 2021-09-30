// const { Shop, Item } = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 3, 6),
];

const parameters = [
  {
    matcher: "Sulfuras",
    expiredMultiplier: 1,
    expireQualityPase: 0,
    dayToDayQualityPase: [{ startDay: 50, endDay: 0, pase: 0 }],
  },
  {
    matcher: "Aged Brie",
    expiredMultiplier: 1,
    expireQualityPase: 1,
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

// const days = Number(process.argv[2]) || 2;
const days = 2;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach((item) =>
    console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
  );
  gildedRose.updateQuality();
}
