class Shop {
  constructor(items = []) {
    this.items = this.fitInMinMax(items);
  }

  updateQuality() {
    this.items.forEach((item, index) => {
      this.reduceSellIn(index, item);
      this.calculateQuality(index, item);
    });
    return this.fitInMinMax(this.items);
  }

  reduceSellIn(index, item) {
    if (!item.name.match(new RegExp("^Sulfuras", "i"))) {
      this.items[index].sellIn = item.sellIn - 1;
    }
  }

  calculateQuality(index, item) {
    let p = this.getItemParameters(this.items[index]);
    if (item.sellIn >= 0)
      this.items[index].quality = item.quality + this.returnValidPase(p, item);
    else
      this.items[index].quality =
        item.quality * p.expiredMultiplier + p.expireQualityPase;
  }

  returnValidPase(p, item) {
    p = p.dayToDayQualityPase.filter((dayPase) => {
      return dayPase.startDay >= item.sellIn && dayPase.endDay <= item.sellIn
        ? true
        : false;
    });
    p.unshift({ pase: 1 });
    return p[p.length - 1].pase;
  }

  getItemParameters(item) {
    let itemParameters;
    for (let param of ItemMatcher.parameters()) {
      itemParameters = param;
      if (item.name.match(new RegExp("^" + param.matcher, "i"))) break;
    }
    return itemParameters;
  }

  fitInMinMax(items) {
    return items.map((item) => {
      if (!item.name.match(new RegExp("^Sulfuras", "i")))
        item.quality = Math.max(Math.min(Number(item.quality), 50), 0);
      return item;
    });
  }
}
