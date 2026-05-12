const products = [
    // --- RUH SERIES ---
    {
        id: 1,
        name: "Ruh Chameli (Pure Jasmine Attar)",
        category: "Ruh Series",
        img: "ruh chameli.png",
        prices: { "3ml": 899, "6ml": 1699, "12ml": 3199 },
        desc: "Natural Jasmine Sambac distillation. 100% Pure & Alcohol-Free.",
        fullDesc: "Our Ruh Chameli is distilled from hand-picked Jasmine flowers at dawn to preserve their ethereal scent. Unlike synthetic perfumes, this pure oil offers a calming, creamy floral aroma that deeply relaxes the senses.",
        scentProfile: { top: "Fresh Jasmine", heart: "Creamy Floral", base: "Warm Green" }
    },
    {
        id: 2,
        name: "Ruh Gulab (Supreme Damask Rose)",
        category: "Ruh Series",
        img: "ruh gulab.png",
        prices: { "3ml": 3499, "6ml": 6499, "12ml": 11999 },
        desc: "The pinnacle of luxury. Distilled using the ancient 'Deg-Bhapka' method, it takes nearly 4 tons of hand-picked Damask Roses to produce just 1kg of this Ruh Gulab. A deep, honeyed, and spiritual rose essence that represents the true heritage of ItrAura.",
        fullDesc: "The pinnacle of luxury. Distilled using the ancient 'Deg-Bhapka' method, it takes thousands of roses to produce a single drop of this Ruh Gulab. It offers a rich, honeyed rose scent that represents the true heritage of Indian perfumery.",
        scentProfile: { top: "Damask Rose", heart: "Honeyed Petals", base: "Earthy Rose" }
    },
    {
        id: 3,
        name: "Ruh Juhi (Jasmine Molle Essence)",
        category: "Ruh Series",
        img: "ruh juhi.png",
        prices: { "3ml": 1299, "6ml": 2399, "12ml": 4499 },
        desc: "Soft, airy floral scent with fresh botanical notes.",
        fullDesc: "Ruh Juhi captures the delicate sweetness of the Indian Jasmine Molle. It is a light, airy, and sophisticated fragrance perfect for those who prefer subtle elegance. Zero alcohol, just pure botanical essence.",
        scentProfile: { top: "Juhi Blossoms", heart: "Soft Petals", base: "Fresh Air" }
    },
    {
        id: 4,
        name: "Ruh Khus (Wild Vetiver - Oil of Tranquility)",
        category: "Ruh Series",
        img: "ruh khus.png",
        prices: { "3ml": 199, "6ml": 379, "12ml": 699 },
        desc: "Earthy vetiver fragrance, natural cooling for summers.",
        fullDesc: "Known as the 'Oil of Tranquility', our Ruh Khus is extracted from wild Vetiver roots. It has a natural cooling property and a deep, woody, earthy aroma that provides a grounding experience.",
        scentProfile: { top: "Wild Grass", heart: "Moist Earth", base: "Deep Rooted Wood" }
    },
    {
        id: 5,
        name: "Ruh Motiya (Arabian Jasmine)",
        category: "Ruh Series",
        img: "ruh motiya.png",
        prices: { "3ml": 2299, "6ml": 4299, "12ml": 7999 },
        desc: "Traditional heady floral fragrance with deep sweetness.",
        fullDesc: "Motiya is known for its intense sweetness. Our Ruh Motiya is a concentrated botanical extract that captures the full-bodied aroma of blooming jasmine gardens in the peak of summer.",
        scentProfile: { top: "Intense Jasmine", heart: "Sweet Nectar", base: "Warm Natural Musk" }
    },
    {
        id: 6,
        name: "Ruh Kadamba (Rare Exotic Bloom)",
        category: "Ruh Series",
        img: "ruh kadamba.png",
        prices: { "3ml": 4499, "6ml": 8499, "12ml": 15999 },
        desc: "Rare artisanal floral distillation with unique sweetness.",
        fullDesc: "One of the rarest floral distillations. Kadamba is highly prized for its complex, sweet, and slightly woody aroma. A true collector's item for those who understand artisanal perfumery.",
        scentProfile: { top: "Kadamba Bloom", heart: "Exotic Sweetness", base: "Soft Wood" }
    },
    {
        id: 7,
        name: "Ruh Kewra (Pandanus Distillation)",
        category: "Ruh Series",
        img: "ruh kewra.png",
        prices: { "3ml": 3499, "6ml": 6499, "12ml": 11999 },
        desc: "Fresh green floral aroma with a unique aquatic touch.",
        fullDesc: "Distilled from the flowers of the Screw Pine, Ruh Kewra offers a refreshing, green, and slightly fruity aquatic scent. Uplifting and cooling properties.",
        scentProfile: { top: "Green Aquatic", heart: "Kewra Bloom", base: "Fresh Dew" }
    },
    {
        id: 8,
        name: "Ruh Rajnigandha (Tuberose Absolute)",
        category: "Ruh Series",
        img: "ruh rajnigandha.png",
        prices: { "3ml": 1299, "6ml": 2399, "12ml": 4499 },
        desc: "Elegant night-blooming tuberose floral fragrance.",
        fullDesc: "Tuberose (Rajnigandha) is the queen of the night. This pure oil captures its seductive, creamy, and hypnotic aroma. Pure floral sophistication.",
        scentProfile: { top: "Creamy Tuberose", heart: "Exotic Night Bloom", base: "Honeyed Musk" }
    },
    {
        id: 9,
        name: "Ruh Red Champaka (Spiritual Essence)",
        category: "Ruh Series",
        img: "ruh red champaka.png",
        prices: { "3ml": 1299, "6ml": 2399, "12ml": 4499 },
        desc: "Warm floral fragrance with bold, spiritual notes.",
        fullDesc: "Red Champaka is a rich, warm, and spicy floral distillation. Known for its spiritually uplifting properties, creating a majestic aura.",
        scentProfile: { top: "Spicy Floral", heart: "Warm Champaka", base: "Velvety Petals" }
    },
    {
        id: 10,
        name: "Pink Lotus (Sacred Meditation Oil)",
        category: "Ruh Series",
        img: "ruh pink lotus.png",
        prices: { "3ml": 1499, "6ml": 2799, "12ml": 5199 },
        desc: "Soft lotus fragrance, calm and peaceful for meditation.",
        fullDesc: "The sacred Pink Lotus oil is a symbol of purity. It offers a soft, watery floral aroma that provides a sense of deep inner peace.",
        scentProfile: { top: "Watery Lotus", heart: "Sacred Bloom", base: "Soft Moss" }
    },
    {
        id: 11,
        name: "Ruh Mogra (Jasmine Sambac)",
        category: "Ruh Series",
        img: "ruh mogra.png",
        prices: { "3ml": 999, "6ml": 1899, "12ml": 3499 },
        desc: "Fresh, energetic mogra scent with a traditional touch.",
        fullDesc: "A classic Indian favorite. Ruh Mogra captures the crisp, fresh scent of Jasmine Sambac. Uplifting and long-lasting on skin.",
        scentProfile: { top: "Fresh Mogra", heart: "Green Floral", base: "Clean Petals" }
    },
    {
        id: 12,
        name: "Ruh Red Gulab (Intense Rose)",
        category: "Ruh Series",
        img: "ruh red gulab.png",
        prices: { "3ml": 2199, "6ml": 4099, "12ml": 7699 },
        desc: "Strong and luxurious rose essence for bold wearers.",
        fullDesc: "A more intense version of the classic rose. Ruh Red Gulab is for those who love a bold and majestic rose fragrance statement.",
        scentProfile: { top: "Majestic Rose", heart: "Intense Petals", base: "Deep Velvet" }
    },

    // --- WATER SERIES ---
    {
        id: 13,
        name: "Pure Gulab Jal (Hasayan Rose Water)",
        category: "Water Series",
        img: "gulab jal.png",
        prices: { "250ml": 179 },
        desc: "Pure steam-distilled rose water for a refreshing feel.",
        fullDesc: "Direct byproduct of actual Ruh Gulab distillation. 100% pure toner containing the essential oils of thousands of roses.",
        scentProfile: { top: "Light Rose", heart: "Watery Floral", base: "Fresh Dew" }
    },
    {
        id: 14,
        name: "Gulab Jal Pasaya (Triple Distilled)",
        category: "Water Series",
        img: "gulab jal pasaya.png",
        prices: { "250ml": 349 },
        desc: "Premium concentrated rose water, soft and therapeutic.",
        fullDesc: "Triple-distilled Pasaya grade. Richer and more concentrated for maximum purity and intense floral fragrance.",
        scentProfile: { top: "Rich Rose", heart: "Concentrated Floral", base: "Sweet Water" }
    },

    // --- OILS & SPECIALS ---
    {
        id: 15,
        name: "Shamama-tul-Amber (Winter Blend)",
        category: "Oils",
        img: "shamama.png",
        prices: { "6ml": 249, "12ml": 449 },
        desc: "Warm spicy blend with traditional herbal richness.",
        fullDesc: "Aged blend of herbs, spices, and barks. Warm, balsamic aroma perfect for colder weather.",
        scentProfile: { top: "Saffron & Spices", heart: "Balsamic Herbs", base: "Woody Musk" }
    },
    {
        id: 16,
        name: "Pure Sandalwood Oil (Santalum Album)",
        category: "Oils",
        img: "sandalwood oil.png",
        prices: { "3ml": 399, "6ml": 749, "12ml": 1399 },
        desc: "100% Pure sandalwood oil with deep, creamy woody aroma.",
        fullDesc: "Genuine Santalum Album oil. Grounding, spiritual, and incredibly long-lasting luxury oil.",
        scentProfile: { top: "Creamy Wood", heart: "Soft Milk", base: "Eternal Sandalwood" }
    },
    {
        id: 17,
        name: "Mukhallat Guldastaan (Floral Bouquet)",
        category: "Special",
        img: "mukhallat guldastan.png",
        prices: { "6ml": 1299, "12ml": 2399 },
        desc: "Luxury mix of signature floral and woody notes.",
        fullDesc: "Masterfully crafted bouquet blending Rose, Jasmine, and warm woods for a regal fragrance experience.",
        scentProfile: { top: "Floral Mix", heart: "Sweet Spice", base: "Aromatic Woods" }
    },
    {
        id: 18,
        name: "Ruh Gulab Pasaya (Concentrated Rose)",
        category: "Extra",
        img: "ruh gulab pasaya.png",
        prices: { "3ml": 3499, "6ml": 6499, "12ml": 11999 },
        desc: "Highest concentration of rose attar, exceptionally rich.",
        fullDesc: "The ultimate pinnacle of rose luxury. Rare, small-batch distillation for the true connoisseur.",
        scentProfile: { top: "Supreme Rose", heart: "Dense Nectar", base: "Majestic Earth" }
    }
];
