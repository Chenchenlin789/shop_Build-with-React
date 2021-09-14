import Section from "./Section";

let items = [
  {
    imgUrl: "/img/01-Home.png",
    itemName: "Lautspeaker",
    itemPrice: 389,
  },
  {
    imgUrl: "/img/02-Lifestyle.png",
    itemName: "Backpack",
    itemPrice: 79,
  },
  {
    imgUrl: "/img/01-Books.png",
    itemName: "Book",
    itemPrice: 39,
  },
  {
    imgUrl: "/img/29-Lifestyle_b-o.png",
    itemName: "Headphone",
    itemPrice: 119,
  },
  {
    imgUrl: "/img/45-Home_hem.png",
    itemName: "Sofa",
    itemPrice: 1289,
  },
  {
    imgUrl: "/img/46-Home_bm.png",
    itemName: "Painting",
    itemPrice: 189,
  },
];

const ItemList = () => {
  return (
    <section>
      <div className="grid">
        <Section
          imgUrl={items[0].imgUrl}
          itemName={items[0].itemName}
          itemPrice={items[0].itemPrice}
        ></Section>
        <Section
          imgUrl={items[1].imgUrl}
          itemName={items[1].itemName}
          itemPrice={items[1].itemPrice}
        ></Section>
        <Section
          imgUrl={items[2].imgUrl}
          itemName={items[2].itemName}
          itemPrice={items[2].itemPrice}
        ></Section>
        <Section
          imgUrl={items[3].imgUrl}
          itemName={items[3].itemName}
          itemPrice={items[3].itemPrice}
        ></Section>
      </div>
      <div className="flex">
        <Section
          imgUrl={items[4].imgUrl}
          itemName={items[4].itemName}
          itemPrice={items[4].itemPrice}
        ></Section>
        <Section
          imgUrl={items[5].imgUrl}
          itemName={items[5].itemName}
          itemPrice={items[5].itemPrice}
        ></Section>
      </div>
    </section>
  );
};

export default ItemList;
