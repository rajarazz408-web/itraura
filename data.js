const products = [
    // --- RUH SERIES (3ml base) ---
    {
        id: 1,
        name: "Ruh Chameli",
        category: "Ruh Series",
        img: "ruh chameli.png",
        prices: { "3ml": 899, "6ml": 1699, "12ml": 3199 },
        desc: "Natural jasmine fragrance with calming notes.",
        fullDesc: "Our Ruh Chameli is distilled from hand-picked Jasmine flowers at dawn to preserve their ethereal scent. Unlike synthetic perfumes, this pure oil offers a calming, creamy floral aroma that deeply relaxes the senses. 100% botanical and alcohol-free.",
        scentProfile: { top: "Fresh Jasmine", heart: "Creamy Floral", base: "Warm Green" }
    },
    {
        id: 2,
        name: "Ruh Gulab",
        category: "Ruh Series",
        img: "ruh gulab.png",
        prices: { "3ml": 3499, "6ml": 6499, "12ml": 11999 },
        desc: "Royal rose fragrance with long-lasting aroma.",
        fullDesc: "The pinnacle of luxury. Distilled using the ancient 'Deg-Bhapka' method, it takes thousands of roses to produce a single drop of this Ruh Gulab. It offers a rich, deep, honeyed rose scent that represents the true heritage of Indian perfumery.",
        scentProfile: { top: "Damask Rose", heart: "Honeyed Petals", base: "Earthy Rose" }
    },
    {
        id: 3,
        name: "Ruh Juhi",
        category: "Ruh Series",
        img: "ruh juhi.png",
        prices: { "3ml": 1299, "6ml": 2399, "12ml": 4499 },
        desc: "Soft floral scent with fresh notes.",
        fullDesc: "Ruh Juhi captures the delicate sweetness of the Indian Jasmine Molle. It is a light, airy, and sophisticated fragrance perfect for those who prefer subtle elegance. Zero alcohol, just pure botanical essence.",
        scentProfile: { top: "Juhi Blossoms", heart: "Soft Petals", base: "Fresh Air" }
    },
    {
        id: 4,
        name: "Ruh Khus",
        category: "Ruh Series",
        img: "ruh khus.png",
        prices: { "3ml": 199, "6ml": 379, "12ml": 699 },
        desc: "Earthy vetiver fragrance, perfect for summers.",
        fullDesc: "Known as the 'Oil of Tranquility', our Ruh Khus is extracted from wild Vetiver roots. It has a natural cooling property and a deep, woody, earthy aroma that provides a grounding experience. A must-have for the summer months.",
        scentProfile: { top: "Wild Grass", heart: "Moist Earth", base: "Deep Rooted Wood" }
    },
    {
        id: 5,
        name: "Ruh Motiya",
        category: "Ruh Series",
        img: "ruh motiya.png",
        prices: { "3ml": 2299, "6ml": 4299, "12ml": 7999 },
        desc: "Traditional floral fragrance with deep sweetness.",
        fullDesc: "Motiya (Arabian Jasmine) is known for its intense and heady sweetness. Our Ruh Motiya is a concentrated botanical extract that captures the full-bodied aroma of blooming jasmine gardens in the peak of summer.",
        scentProfile: { top: "Intense Jasmine", heart: "Sweet Nectar", base: "Warm Musk (Natural)" }
    },
    {
        id: 6,
        name: "Ruh Kadamba",
        category: "Ruh Series",
        img: "ruh kadamba.png",
        prices: { "3ml": 4499, "6ml": 8499, "12ml": 15999 },
        desc: "Rare floral scent with unique sweetness.",
        fullDesc: "One of the rarest floral distillations. Kadamba is highly prized for its complex, sweet, and slightly woody aroma. A true collector's item for those who understand the heritage of artisanal perfumery.",
        scentProfile: { top: "Kadamba Bloom", heart: "Exotic Sweetness", base: "Soft Wood" }
    },
    {
        id: 7,
        name: "Ruh Kewra",
        category: "Ruh Series",
        img: "ruh kewra.png",
        prices: { "3ml": 3499, "6ml": 6499, "12ml": 11999 },
        desc: "Fresh green floral aroma with aquatic touch.",
        fullDesc: "Distilled from the flowers of the Screw Pine, Ruh Kewra offers a refreshing, green, and slightly fruity aquatic scent. It is widely used in luxury blends for its unique cooling and uplifting properties.",
        scentProfile: { top: "Green Aquatic", heart: "Kewra Bloom", base: "Fresh Dew" }
    },
    {
        id: 8,
        name: "Ruh Rajnigandha",
        category: "Ruh Series",
        img: "ruh rajnigandha.png",
        prices: { "3ml": 1299, "6ml": 2399, "12ml": 4499 },
        desc: "Elegant night-blooming floral fragrance.",
        fullDesc: "Tuberose (Rajnigandha) is the queen of the night. This pure oil captures its seductive, creamy, and hypnotic aroma. It is a bold, long-lasting fragrance that represents pure floral sophistication.",
        scentProfile: { top: "Creamy Tuberose", heart: "Exotic Night Bloom", base: "Honeyed Musk" }
    },
    {
        id: 9,
        name: "Ruh Red Champaka",
        category: "Ruh Series",
        img: "ruh red champaka.png",
        prices: { "3ml": 1299, "6ml": 2399, "12ml": 4499 },
        desc: "Warm floral fragrance with bold notes.",
        fullDesc: "Red Champaka is a rich, warm, and spicy floral distillation. Known for its spiritually uplifting properties, this pure botanical oil creates a majestic aura around the wearer.",
        scentProfile: { top: "Spicy Floral", heart: "Warm Champaka", base: "Velvety Petals" }
    },
    {
        id: 10,
        name: "Pink Lotus",
        category: "Ruh Series",
        img: "ruh pink lotus.png",
        prices: { "3ml": 1499, "6ml": 2799, "12ml": 5199 },
        desc: "Soft lotus fragrance, calm and peaceful.",
        fullDesc: "The sacred Pink Lotus oil is a symbol of purity and serenity. It offers a soft, watery, and slightly sweet floral aroma that helps in meditation and provides a sense of deep inner peace.",
        scentProfile: { top: "Watery Lotus", heart: "Sacred Bloom", base: "Soft Moss" }
    },
    {
        id: 11,
        name: "Ruh Mogra",
        category: "Ruh Series",
        img: "ruh mogra.png",
        prices: { "3ml": 999, "6ml": 1899, "12ml": 3499 },
        desc: "Fresh mogra scent with traditional touch.",
        fullDesc: "A classic Indian favorite. Ruh Mogra captures the crisp, fresh, and unmistakable scent of Jasmine Sambac. It is an uplifting and energetic fragrance that lasts beautifully on the skin.",
        scentProfile: { top: "Fresh Mogra", heart: "Green Floral", base: "Clean Petals" }
    },
    {
        id: 12,
        name: "Ruh Red Gulab",
        category: "Ruh Series",
        img: "ruh red gulab.png",
        prices: { "3ml": 2199, "6ml": 4099, "12ml": 7699 },
        desc: "Strong and luxurious rose essence.",
        fullDesc: "A more intense version of the classic rose. Ruh Red Gulab is for those who love a bold, powerful, and majestic rose fragrance that makes a statement. 100% steam distilled purity.",
        scentProfile: { top: "Majestic Rose", heart: "Intense Petals", base: "Deep Velvet" }
    },
    // --- WATER SERIES (250ml) ---
    {
        id: 13,
        name: "Gulab Jal",
        category: "Water Series",
        img: "gulab jal.png",
        prices: { "250ml": 179 },
        desc: "Pure rose water for refreshing feel.",
        fullDesc: "Unlike commercial rose waters, our Gulab Jal is a byproduct of the actual Ruh Gulab distillation. It contains the essential oils of thousands of roses, making it the purest toner for your skin.",
        scentProfile: { top: "Light Rose", heart: "Watery Floral", base: "Fresh Dew" }
    },
    {
        id: 14,
        name: "Gulab Jal Pasaya",
        category: "Water Series",
        img: "gulab jal pasaya.png",
        prices: { "250ml": 349 },
        desc: "Premium distilled rose water, soft and pure.",
        fullDesc: "The premium 'Pasaya' grade rose water is richer and more concentrated. It is triple-distilled to ensure maximum purity and a fragrance that is noticeably more intense and therapeutic.",
        scentProfile: { top: "Rich Rose", heart: "Concentrated Floral", base: "Sweet Water" }
    },
    // --- OILS & SPECIALS ---
    {
        id: 15,
        name: "Shamama",
        category: "Oils",
        img: "shamama.png",
        prices: { "6ml": 249, "12ml": 449 },
        desc: "Warm spicy blend with traditional richness.",
        fullDesc: "Shamama is a secret blend of herbs, spices, and barks. It is aged for months to create a warm, balsamic, and spicy aroma that is traditionally worn in colder weather for its heating properties.",
        scentProfile: { top: "Saffron & Spices", heart: "Balsamic Herbs", base: "Woody Musk" }
    },
    {
        id: 16,
        name: "Sandalwood Oil",
        category: "Oils",
        img: "sandalwood oil.png",
        prices: { "3ml": 399, "6ml": 749, "12ml": 1399 },
        desc: "Pure sandalwood oil with deep woody aroma.",
        fullDesc: "Genuine Santalum Album oil. Our Sandalwood is creamy, woody, and incredibly long-lasting. It is one of the most sacred oils in India, known for its grounding and spiritual benefits.",
        scentProfile: { top: "Creamy Wood", heart: "Soft Milk", base: "Eternal Sandalwood" }
    },
    {
        id: 17,
        name: "Mukhallat Guldastaan",
        category: "Special",
        img: "mukhallat guldastan.png",
        prices: { "6ml": 1299, "12ml": 2399 },
        desc: "Luxury mix of floral and woody notes.",
        fullDesc: "A masterfully crafted 'bouquet' of scents. Mukhallat Guldastaan blends the best of roses, jasmines, and warm woods to create a fragrance that is complex, regal, and uniquely yours.",
        scentProfile: { top: "Floral Mix", heart: "Sweet Spice", base: "Aromatic Woods" }
    },
    {
        id: 18,
        name: "Ruh Gulab Pasaya",
        category: "Extra",
        img: "ruh gulab pasaya.png",
        prices: { "3ml": 3499, "6ml": 6499, "12ml": 11999 },
        desc: "Highly concentrated rose attar, rich and rare.",
        fullDesc: "The 'Pasaya' grade represents the most concentrated form of Ruh Gulab distillation. It is exceptionally rare and bottled only in small batches for those who seek the ultimate pinnacle of rose luxury.",
        scentProfile: { top: "Supreme Rose", heart: "Dense Nectar", base: "Majestic Earth" }
    }
];
