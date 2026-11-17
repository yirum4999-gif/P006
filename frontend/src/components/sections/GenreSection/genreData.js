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

export const genreData = [
    {
        id: "sushi",
        src: getFoodImage("Sushi","Genre_icon_sushi.jpg"),
        title: "genre.items.sushi.title",
        description: "genre.items.sushi.description"
    },
    {
        id: "ramen",
        src: getFoodImage("Ramen","Genre_icon_ramen.jpg"),
        title: "genre.items.ramen.title",
        description: "genre.items.ramen.description"
    },
    {
        id: "udon",
        src: getFoodImage("Udon","Genre_icon_udon.jpg"),
        title: "genre.items.udon.title",
        description: "genre.items.udon.description"
    },
    {
        id: "donburi",
        src: getFoodImage("Donburi","Genre_icon_donburi.jpg"),
        title: "genre.items.donburi.title",
        description: "genre.items.donburi.description"
    },
    {
        id: "yakiniku",
        src: getFoodImage("Yakiniku","Genre_icon_yakiniku.jpg"),
        title: "genre.items.yakiniku.title",
        description: "genre.items.yakiniku.description"
    },
    {
        id: "tenpura",
        src: getFoodImage("Tenpura","Genre_icon_tenpura.jpg"),
        title: "genre.items.tenpura.title",
        description: "genre.items.tenpura.description"
    }
];