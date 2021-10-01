// var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  let gildedRose, gildedRoseWorkingOld, giltedRoseNewFeature;
  let quality = [16, 14, 12, 10, 6, 2, 0, 0];
  let item;

  gildedRose = new Shop(items);
  gildedRoseWorkingOld = new ShopWorkingOld(itemsWorkingOld);
  giltedRoseNewFeature = new Shop(itemsNewFeature);

  describe("new feature", () => {
    for (let day = 0; day < 8; day++) {
      itemsNewFeature.forEach((item, index) => {
        const expectedQuality = item.quality;
        it(`should fit quality day: ${day}, name: ${item.name}, quality: ${item.quality}`, () => {
          expect(expectedQuality).toEqual(quality[day]);
        });
      });
      giltedRoseNewFeature.updateQuality();
    }
  });

  for (let day = 0; day < 50; day++) {
    items.forEach((item, index) => {
      it(`should fit quality day: ${day}, name: ${item.name}`, function () {
        expect(item.quality).toEqual(itemsWorkingOld[index].quality);
      });
    });
    gildedRose.updateQuality();
    gildedRoseWorkingOld.updateQuality();
  }
});
