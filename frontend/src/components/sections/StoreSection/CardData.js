const images = import.meta.glob(
    "/src/assets/Food/**/*.{jpg,jpeg,png,webp}",
    {
        eager: true,
        query: "?url",
        import: "default"
    }
);

const getFoodImage = (category, filename) => {
    const path = `/src/assets/Food/${category}/${filename}`;

    return images[path] ?? "";
};

export const cardData = [
    {
        id : "new-open",
        type : "newOpen",
        image : getFoodImage("Donburi", "Tendon_ebitenpura_1.jpg"),
        title : "card.items.I001.title",
        description: "card.items.I001.description"
    },
    {
        id : "promo-001",
        type : "promotion",
        image : getFoodImage("Sushi", "Sushi_roll_01.jpg"),
        title : "card.items.P001.title",
        description: "card.items.P001.description"
    },
    {
        id : "promo-002",
        type : "promotion",
        image : getFoodImage("Udon", "Udon_nabayaki.jpg"),
        title : "card.items.P002.title",
        description: "card.items.P002.description"
    },
    {
        id : "promo-003",
        type : "promotion",
        image : getFoodImage("Ramen", "Ramen_miso_01.jpg"),
        title : "card.items.P003.title",
        description: "card.items.P003.description"
    }
];