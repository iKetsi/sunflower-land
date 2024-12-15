import { InventoryItemName } from "../types/game";
import { SEASONS } from "../types/seasons";
import { BumpkinItem } from "./bumpkin";

type Releases = {
  tradeAt: Date;
  withdrawAt: Date;
};

// Items that are open for trade & withdraw
const CAN_WITHDRAW_AND_TRADE: Releases = {
  tradeAt: new Date("2023-01-01"),
  withdrawAt: new Date("2023-01-01"),
};

export const BUMPKIN_RELEASES: Partial<Record<BumpkinItem, Releases>> = {
  "Painter's Cap": CAN_WITHDRAW_AND_TRADE,
  "Festival of Colors Background": CAN_WITHDRAW_AND_TRADE,
  "Chef Apron": CAN_WITHDRAW_AND_TRADE,
  "Warrior Shirt": CAN_WITHDRAW_AND_TRADE,
  "Warrior Pants": CAN_WITHDRAW_AND_TRADE,
  "Black Farmer Boots": CAN_WITHDRAW_AND_TRADE,
  "Farmer Pitchfork": CAN_WITHDRAW_AND_TRADE,
  "Farmer Hat": CAN_WITHDRAW_AND_TRADE,
  "Chef Hat": CAN_WITHDRAW_AND_TRADE,
  "Warrior Helmet": CAN_WITHDRAW_AND_TRADE,
  "Ugly Christmas Sweater": CAN_WITHDRAW_AND_TRADE,
  "Elf Hat": CAN_WITHDRAW_AND_TRADE,
  "Elf Potion": CAN_WITHDRAW_AND_TRADE,
  "Elf Suit": CAN_WITHDRAW_AND_TRADE,
  "Santa Beard": CAN_WITHDRAW_AND_TRADE,
  "Santa Suit": CAN_WITHDRAW_AND_TRADE,

  "Beehive Staff": CAN_WITHDRAW_AND_TRADE,
  "Bee Smoker": CAN_WITHDRAW_AND_TRADE,
  "Bee Wings": CAN_WITHDRAW_AND_TRADE,
  "Beekeeper Suit": CAN_WITHDRAW_AND_TRADE,
  "Crimstone Boots": CAN_WITHDRAW_AND_TRADE,
  "Crimstone Pants": CAN_WITHDRAW_AND_TRADE,
  "Gardening Overalls": CAN_WITHDRAW_AND_TRADE,
  "Crimstone Hammer": CAN_WITHDRAW_AND_TRADE,
  "Full Bloom Shirt": CAN_WITHDRAW_AND_TRADE,
  "Blue Blossom Shirt": CAN_WITHDRAW_AND_TRADE,
  "Explorer Shirt": CAN_WITHDRAW_AND_TRADE,
  "Explorer Shorts": CAN_WITHDRAW_AND_TRADE,
  "Explorer Hat": CAN_WITHDRAW_AND_TRADE,
  "Rock Hammer": CAN_WITHDRAW_AND_TRADE,
  "Amber Amulet": CAN_WITHDRAW_AND_TRADE,
  "Desert Background": CAN_WITHDRAW_AND_TRADE,
  "Desert Camel Background": CAN_WITHDRAW_AND_TRADE,
  "Water Gourd": CAN_WITHDRAW_AND_TRADE,
  "Ankh Shirt": CAN_WITHDRAW_AND_TRADE,
  "Adventurer's Suit": CAN_WITHDRAW_AND_TRADE,
  "Adventurer's Torch": CAN_WITHDRAW_AND_TRADE,
  "Pumpkin Head": CAN_WITHDRAW_AND_TRADE,
  "Sunflower Shield": CAN_WITHDRAW_AND_TRADE,
  "Farm Background": CAN_WITHDRAW_AND_TRADE,
  "Fancy Top": CAN_WITHDRAW_AND_TRADE,
  "Brown Boots": CAN_WITHDRAW_AND_TRADE,
  "Brown Suspenders": CAN_WITHDRAW_AND_TRADE,
  "Fancy Pants": CAN_WITHDRAW_AND_TRADE,
  "Maiden Skirt": CAN_WITHDRAW_AND_TRADE,
  "Maiden Top": CAN_WITHDRAW_AND_TRADE,
  "Peasant Skirt": CAN_WITHDRAW_AND_TRADE,
  "SFL T-Shirt": CAN_WITHDRAW_AND_TRADE,
  "Yellow Boots": CAN_WITHDRAW_AND_TRADE,
  "Parlour Hair": CAN_WITHDRAW_AND_TRADE,
  Axe: CAN_WITHDRAW_AND_TRADE,
  Sword: CAN_WITHDRAW_AND_TRADE,
  "Blue Suspenders": CAN_WITHDRAW_AND_TRADE,
  "Forest Background": CAN_WITHDRAW_AND_TRADE,
  "Seashore Background": CAN_WITHDRAW_AND_TRADE,
  Blondie: CAN_WITHDRAW_AND_TRADE,
  "Brown Long Hair": CAN_WITHDRAW_AND_TRADE,
  "Sun Spots": CAN_WITHDRAW_AND_TRADE,
  "White Long Hair": CAN_WITHDRAW_AND_TRADE,
  "Cemetery Background": CAN_WITHDRAW_AND_TRADE,
  "Teal Mohawk": CAN_WITHDRAW_AND_TRADE,
  "Space Background": CAN_WITHDRAW_AND_TRADE,
  "Jail Background": CAN_WITHDRAW_AND_TRADE,
  "Golden Spatula": CAN_WITHDRAW_AND_TRADE,
  "Artist Scarf": CAN_WITHDRAW_AND_TRADE,
  "Bumpkin Art Competition Merch": CAN_WITHDRAW_AND_TRADE,
  "Project Dignity Hoodie": CAN_WITHDRAW_AND_TRADE,
  "Developer Hoodie": CAN_WITHDRAW_AND_TRADE,
  "Blacksmith Hair": CAN_WITHDRAW_AND_TRADE,
  Hammer: CAN_WITHDRAW_AND_TRADE,
  "Bumpkin Boots": CAN_WITHDRAW_AND_TRADE,
  "Fire Shirt": CAN_WITHDRAW_AND_TRADE,
  "Red Long Hair": CAN_WITHDRAW_AND_TRADE,
  "Snowman Onesie": CAN_WITHDRAW_AND_TRADE,
  "Reindeer Suit": CAN_WITHDRAW_AND_TRADE,
  "Shark Onesie": CAN_WITHDRAW_AND_TRADE,
  "Christmas Background": CAN_WITHDRAW_AND_TRADE,
  "Fire Hair": CAN_WITHDRAW_AND_TRADE,
  "Luscious Hair": CAN_WITHDRAW_AND_TRADE,
  "Ancient War Hammer": CAN_WITHDRAW_AND_TRADE,
  "Ancient Goblin Sword": CAN_WITHDRAW_AND_TRADE,
  "Mountain View Background": CAN_WITHDRAW_AND_TRADE,
  "Skull Hat": CAN_WITHDRAW_AND_TRADE,
  "Reindeer Antlers": CAN_WITHDRAW_AND_TRADE,
  "Santa Hat": CAN_WITHDRAW_AND_TRADE,
  "Pineapple Shirt": CAN_WITHDRAW_AND_TRADE,
  "China Town Background": CAN_WITHDRAW_AND_TRADE,
  "Lion Dance Mask": CAN_WITHDRAW_AND_TRADE,
  "Pirate General Coat": CAN_WITHDRAW_AND_TRADE,
  "Pirate Pants": CAN_WITHDRAW_AND_TRADE,
  "Pirate Leather Polo": CAN_WITHDRAW_AND_TRADE,
  "Crab Claw": CAN_WITHDRAW_AND_TRADE,
  "Pirate Scimitar": CAN_WITHDRAW_AND_TRADE,
  "Cupid Hair": CAN_WITHDRAW_AND_TRADE,
  "Cupid Dress": CAN_WITHDRAW_AND_TRADE,
  "Cupid Sandals": CAN_WITHDRAW_AND_TRADE,
  "Love Quiver": CAN_WITHDRAW_AND_TRADE,
  "SFL Office Background": CAN_WITHDRAW_AND_TRADE,
  "Bumpkin Puppet": CAN_WITHDRAW_AND_TRADE,
  "Goblin Puppet": CAN_WITHDRAW_AND_TRADE,
  "Hawaiian Shirt": CAN_WITHDRAW_AND_TRADE,
  "Bear Onesie": CAN_WITHDRAW_AND_TRADE,
  "Frog Onesie": CAN_WITHDRAW_AND_TRADE,
  "Tiger Onesie": CAN_WITHDRAW_AND_TRADE,
  "Beach Sarong": CAN_WITHDRAW_AND_TRADE,
  "Sleeping Otter": CAN_WITHDRAW_AND_TRADE,
  "Tropical Sarong": CAN_WITHDRAW_AND_TRADE,
  "Sequence Hat": CAN_WITHDRAW_AND_TRADE,
  "Sequence Shirt": CAN_WITHDRAW_AND_TRADE,
  "St Patricks Hat": CAN_WITHDRAW_AND_TRADE,
  "Bunny Onesie": CAN_WITHDRAW_AND_TRADE,
  "Polkastarter Shirt": CAN_WITHDRAW_AND_TRADE,
  "Club Polo": CAN_WITHDRAW_AND_TRADE,
  "Dawn Breaker Background": CAN_WITHDRAW_AND_TRADE,
  "Dawn Lamp": CAN_WITHDRAW_AND_TRADE,
  "Fox Hat": CAN_WITHDRAW_AND_TRADE,
  "Grave Diggers Shovel": CAN_WITHDRAW_AND_TRADE,
  "Infected Potion": CAN_WITHDRAW_AND_TRADE,
  "Mushroom Hat": CAN_WITHDRAW_AND_TRADE,
  "Mushroom Shield": CAN_WITHDRAW_AND_TRADE,
  "Mushroom Shoes": CAN_WITHDRAW_AND_TRADE,
  "Mushroom Sweater": CAN_WITHDRAW_AND_TRADE,
  "Squid Hat": CAN_WITHDRAW_AND_TRADE,
  "Summer Top": CAN_WITHDRAW_AND_TRADE,
  "Sunburst Potion": CAN_WITHDRAW_AND_TRADE,
  "White Turtle Neck": CAN_WITHDRAW_AND_TRADE,
  "Harry's Hat": CAN_WITHDRAW_AND_TRADE,
  "Straw Hat": CAN_WITHDRAW_AND_TRADE,
  "Witching Wardrobe": CAN_WITHDRAW_AND_TRADE,
  "Witch's Broom": CAN_WITHDRAW_AND_TRADE,
  "Infernal Bumpkin Potion": CAN_WITHDRAW_AND_TRADE,
  "Infernal Goblin Potion": CAN_WITHDRAW_AND_TRADE,
  "Imp Costume": CAN_WITHDRAW_AND_TRADE,
  "Ox Costume": CAN_WITHDRAW_AND_TRADE,
  "Infernal Horns": CAN_WITHDRAW_AND_TRADE,
  "Crumple Crown": CAN_WITHDRAW_AND_TRADE,
  "Crow Wings": CAN_WITHDRAW_AND_TRADE,
  "Pale Potion": CAN_WITHDRAW_AND_TRADE,
  "Skull Shirt": CAN_WITHDRAW_AND_TRADE,
  "Parsnip Horns": CAN_WITHDRAW_AND_TRADE,
  "Whale Hat": CAN_WITHDRAW_AND_TRADE,
  "Pumpkin Shirt": CAN_WITHDRAW_AND_TRADE,
  Kama: CAN_WITHDRAW_AND_TRADE,
  "Unicorn Horn": CAN_WITHDRAW_AND_TRADE,
  "Feather Hat": CAN_WITHDRAW_AND_TRADE,
  "Valoria Wreath": CAN_WITHDRAW_AND_TRADE,
  "Earn Alliance Sombrero": CAN_WITHDRAW_AND_TRADE,
  "Fresh Catch Vest": CAN_WITHDRAW_AND_TRADE,
  "Fish Pro Vest": CAN_WITHDRAW_AND_TRADE,
  "Reel Fishing Vest": CAN_WITHDRAW_AND_TRADE,
  "Clown Shirt": CAN_WITHDRAW_AND_TRADE,
  "Abyssal Angler Hat": CAN_WITHDRAW_AND_TRADE,
  "Crab Trap": CAN_WITHDRAW_AND_TRADE,
  "Seaside Tank Top": CAN_WITHDRAW_AND_TRADE,
  "Fishing Pants": CAN_WITHDRAW_AND_TRADE,
  "Fishing Spear": CAN_WITHDRAW_AND_TRADE,
  "Flip Flops": CAN_WITHDRAW_AND_TRADE,
  Wellies: CAN_WITHDRAW_AND_TRADE,
  "Saw Fish": CAN_WITHDRAW_AND_TRADE,
  "Skinning Knife": CAN_WITHDRAW_AND_TRADE,
  "Tackle Box": CAN_WITHDRAW_AND_TRADE,
  "Infernal Rod": CAN_WITHDRAW_AND_TRADE,
  "Koi Fish Hat": CAN_WITHDRAW_AND_TRADE,
  "Normal Fish Hat": CAN_WITHDRAW_AND_TRADE,
  "Stockeye Salmon Onesie": CAN_WITHDRAW_AND_TRADE,
  "Tiki Armor": CAN_WITHDRAW_AND_TRADE,
  "Tiki Mask": CAN_WITHDRAW_AND_TRADE,
  "Tiki Pants": CAN_WITHDRAW_AND_TRADE,
  "Butterfly Wings": CAN_WITHDRAW_AND_TRADE,
  "New Years Tiara": CAN_WITHDRAW_AND_TRADE,
  "Daisy Tee": CAN_WITHDRAW_AND_TRADE,
  "Propeller Hat": CAN_WITHDRAW_AND_TRADE,
  "Blue Monarch Dress": CAN_WITHDRAW_AND_TRADE,
  "Orange Monarch Dress": CAN_WITHDRAW_AND_TRADE,
  "Blue Monarch Shirt": CAN_WITHDRAW_AND_TRADE,
  "Orange Monarch Shirt": CAN_WITHDRAW_AND_TRADE,
  "Queen Bee Crown": CAN_WITHDRAW_AND_TRADE,
  "Lucky Red Hat": CAN_WITHDRAW_AND_TRADE,
  "Lucky Red Suit": CAN_WITHDRAW_AND_TRADE,
  "Chicken Hat": CAN_WITHDRAW_AND_TRADE,
  "Love's Topper": CAN_WITHDRAW_AND_TRADE,
  "Valentine's Field Background": CAN_WITHDRAW_AND_TRADE,
  "Striped Red Shirt": CAN_WITHDRAW_AND_TRADE,
  "Striped Yellow Shirt": CAN_WITHDRAW_AND_TRADE,
  "Paw Shield": CAN_WITHDRAW_AND_TRADE,
  Pan: CAN_WITHDRAW_AND_TRADE,
  "Royal Robe": CAN_WITHDRAW_AND_TRADE,
  Crown: CAN_WITHDRAW_AND_TRADE,
  "Soybean Onesie": CAN_WITHDRAW_AND_TRADE,
  "Pharaoh Headdress": CAN_WITHDRAW_AND_TRADE,
  "Scarab Wings": CAN_WITHDRAW_AND_TRADE,
  "Fossil Head": CAN_WITHDRAW_AND_TRADE,
  "Sunflower Amulet": CAN_WITHDRAW_AND_TRADE,
  "Beetroot Amulet": CAN_WITHDRAW_AND_TRADE,
  Parsnip: CAN_WITHDRAW_AND_TRADE,
  "Angel Wings": CAN_WITHDRAW_AND_TRADE,
  "Luna's Hat": CAN_WITHDRAW_AND_TRADE,
  Cattlegrim: CAN_WITHDRAW_AND_TRADE,
  "Ancient Rod": CAN_WITHDRAW_AND_TRADE,
  "Banana Onesie": CAN_WITHDRAW_AND_TRADE,
  "Beekeeper Hat": CAN_WITHDRAW_AND_TRADE,
  "Crimstone Amulet": CAN_WITHDRAW_AND_TRADE,
  "Hornet Mask": CAN_WITHDRAW_AND_TRADE,
  "Non La Hat": CAN_WITHDRAW_AND_TRADE,
  "Olive Shield": CAN_WITHDRAW_AND_TRADE,
  "Olive Royalty Shirt": CAN_WITHDRAW_AND_TRADE,
  "Oil Overalls": CAN_WITHDRAW_AND_TRADE,
  "Ancient Shovel": CAN_WITHDRAW_AND_TRADE,
  "Lemon Shield": CAN_WITHDRAW_AND_TRADE,
  "Green Amulet": CAN_WITHDRAW_AND_TRADE,
  "Devil Wings": CAN_WITHDRAW_AND_TRADE,
  "Eggplant Onesie": CAN_WITHDRAW_AND_TRADE,
  "Infernal Pitchfork": CAN_WITHDRAW_AND_TRADE,
  "Corn Onesie": CAN_WITHDRAW_AND_TRADE,
  "Banana Amulet": CAN_WITHDRAW_AND_TRADE,
  "Bee Suit": CAN_WITHDRAW_AND_TRADE,
  "Crimstone Armor": CAN_WITHDRAW_AND_TRADE,
  "Honeycomb Shield": CAN_WITHDRAW_AND_TRADE,
  "Flower Crown": CAN_WITHDRAW_AND_TRADE,
  "Oil Can": CAN_WITHDRAW_AND_TRADE,
  "Tofu Mask": CAN_WITHDRAW_AND_TRADE,
  "Camel Onesie": CAN_WITHDRAW_AND_TRADE,
  "Dev Wrench": CAN_WITHDRAW_AND_TRADE,
  "Infernal Drill": CAN_WITHDRAW_AND_TRADE,
  "Grape Pants": CAN_WITHDRAW_AND_TRADE,
  "Carrot Amulet": CAN_WITHDRAW_AND_TRADE,

  // Bull Run Season Items
  "Cowboy Hat": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Cowboy Shirt": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Cowboy Trouser": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Shepherd Staff": {
    tradeAt: new Date("2024-12-13"),
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Cowbell Necklace": {
    tradeAt: new Date("2024-12-13"),
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Infernal Bullwhip": {
    tradeAt: new Date("2024-12-13"),
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Chicken Suit": {
    tradeAt: new Date("2024-12-13"),
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Black Sheep Onesie": {
    tradeAt: new Date("2024-12-13"),
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Merino Jumper": {
    tradeAt: new Date("2024-12-13"),
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Cowboy Boots": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "White Sheep Onesie": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Cowgirl Skirt": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Dream Scarf": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },
  "Milk Apron": {
    tradeAt: SEASONS["Bull Run"].endDate,
    withdrawAt: SEASONS["Bull Run"].endDate,
  },

  "Gingerbread Onesie": {
    tradeAt: new Date("2025-01-01"),
    withdrawAt: new Date("2025-01-01"),
  },
  "Candy Cane": {
    tradeAt: new Date("2025-01-01"),
    withdrawAt: new Date("2025-01-01"),
  },
};

export const INVENTORY_RELEASES: Partial<Record<InventoryItemName, Releases>> =
  {
    // Resources
    Beetroot: CAN_WITHDRAW_AND_TRADE,
    Cabbage: CAN_WITHDRAW_AND_TRADE,
    Carrot: CAN_WITHDRAW_AND_TRADE,
    Cauliflower: CAN_WITHDRAW_AND_TRADE,
    Kale: CAN_WITHDRAW_AND_TRADE,
    Potato: CAN_WITHDRAW_AND_TRADE,
    Pumpkin: CAN_WITHDRAW_AND_TRADE,
    Sunflower: CAN_WITHDRAW_AND_TRADE,
    Parsnip: CAN_WITHDRAW_AND_TRADE,
    Eggplant: CAN_WITHDRAW_AND_TRADE,
    Corn: CAN_WITHDRAW_AND_TRADE,
    Radish: CAN_WITHDRAW_AND_TRADE,
    Wheat: CAN_WITHDRAW_AND_TRADE,
    Soybean: CAN_WITHDRAW_AND_TRADE,
    Apple: CAN_WITHDRAW_AND_TRADE,
    Blueberry: CAN_WITHDRAW_AND_TRADE,
    Orange: CAN_WITHDRAW_AND_TRADE,
    Banana: CAN_WITHDRAW_AND_TRADE,
    Egg: CAN_WITHDRAW_AND_TRADE,
    Wood: CAN_WITHDRAW_AND_TRADE,
    Stone: CAN_WITHDRAW_AND_TRADE,
    Iron: CAN_WITHDRAW_AND_TRADE,
    Gold: CAN_WITHDRAW_AND_TRADE,

    // Collectibles
    Observatory: CAN_WITHDRAW_AND_TRADE,
    "Stellar Sunflower": CAN_WITHDRAW_AND_TRADE,
    "Potent Potato": CAN_WITHDRAW_AND_TRADE,
    "Radical Radish": CAN_WITHDRAW_AND_TRADE,
    "Ayam Cemani": CAN_WITHDRAW_AND_TRADE,
    "Fat Chicken": CAN_WITHDRAW_AND_TRADE,
    "Rich Chicken": CAN_WITHDRAW_AND_TRADE,
    "Speed Chicken": CAN_WITHDRAW_AND_TRADE,
    "El Pollo Veloz": CAN_WITHDRAW_AND_TRADE,
    "Banana Chicken": CAN_WITHDRAW_AND_TRADE,
    "Crim Peckster": CAN_WITHDRAW_AND_TRADE,
    "Knight Chicken": CAN_WITHDRAW_AND_TRADE,
    "Pharaoh Chicken": CAN_WITHDRAW_AND_TRADE,
    "Undead Rooster": CAN_WITHDRAW_AND_TRADE,
    "War Skull": CAN_WITHDRAW_AND_TRADE,
    "War Tombstone": CAN_WITHDRAW_AND_TRADE,
    "Grain Grinder": CAN_WITHDRAW_AND_TRADE,
    Kernaldo: CAN_WITHDRAW_AND_TRADE,
    Poppy: CAN_WITHDRAW_AND_TRADE,
    Nana: CAN_WITHDRAW_AND_TRADE,
    "Soil Krabby": CAN_WITHDRAW_AND_TRADE,
    "Skill Shrimpy": CAN_WITHDRAW_AND_TRADE,
    "Sunlit Citadel": CAN_WITHDRAW_AND_TRADE,
    "Baobab Tree": CAN_WITHDRAW_AND_TRADE,
    Camel: CAN_WITHDRAW_AND_TRADE,
    "Australian Flag": CAN_WITHDRAW_AND_TRADE,
    "Belgian Flag": CAN_WITHDRAW_AND_TRADE,
    "Brazilian Flag": CAN_WITHDRAW_AND_TRADE,
    "Chinese Flag": CAN_WITHDRAW_AND_TRADE,
    "Finnish Flag": CAN_WITHDRAW_AND_TRADE,
    "French Flag": CAN_WITHDRAW_AND_TRADE,
    "German Flag": CAN_WITHDRAW_AND_TRADE,
    "Indonesian Flag": CAN_WITHDRAW_AND_TRADE,
    "Indian Flag": CAN_WITHDRAW_AND_TRADE,
    "Iranian Flag": CAN_WITHDRAW_AND_TRADE,
    "Italian Flag": CAN_WITHDRAW_AND_TRADE,
    "Japanese Flag": CAN_WITHDRAW_AND_TRADE,
    "Moroccan Flag": CAN_WITHDRAW_AND_TRADE,
    "Dutch Flag": CAN_WITHDRAW_AND_TRADE,
    "Philippine Flag": CAN_WITHDRAW_AND_TRADE,
    "Polish Flag": CAN_WITHDRAW_AND_TRADE,
    "Portuguese Flag": CAN_WITHDRAW_AND_TRADE,
    "Russian Flag": CAN_WITHDRAW_AND_TRADE,
    "Saudi Arabian Flag": CAN_WITHDRAW_AND_TRADE,
    "South Korean Flag": CAN_WITHDRAW_AND_TRADE,
    "Spanish Flag": CAN_WITHDRAW_AND_TRADE,
    "Sunflower Flag": CAN_WITHDRAW_AND_TRADE,
    "Thai Flag": CAN_WITHDRAW_AND_TRADE,
    "Turkish Flag": CAN_WITHDRAW_AND_TRADE,
    "Ukrainian Flag": CAN_WITHDRAW_AND_TRADE,
    "American Flag": CAN_WITHDRAW_AND_TRADE,
    "Vietnamese Flag": CAN_WITHDRAW_AND_TRADE,
    "Canadian Flag": CAN_WITHDRAW_AND_TRADE,
    "Singaporean Flag": CAN_WITHDRAW_AND_TRADE,
    "British Flag": CAN_WITHDRAW_AND_TRADE,
    "Sierra Leone Flag": CAN_WITHDRAW_AND_TRADE,
    "Romanian Flag": CAN_WITHDRAW_AND_TRADE,
    "Rainbow Flag": CAN_WITHDRAW_AND_TRADE,
    "Goblin Flag": CAN_WITHDRAW_AND_TRADE,
    "Pirate Flag": CAN_WITHDRAW_AND_TRADE,
    "Algerian Flag": CAN_WITHDRAW_AND_TRADE,
    "Mexican Flag": CAN_WITHDRAW_AND_TRADE,
    "Dominican Republic Flag": CAN_WITHDRAW_AND_TRADE,
    "Argentinian Flag": CAN_WITHDRAW_AND_TRADE,
    "Lithuanian Flag": CAN_WITHDRAW_AND_TRADE,
    "Malaysian Flag": CAN_WITHDRAW_AND_TRADE,
    "Colombian Flag": CAN_WITHDRAW_AND_TRADE,
    "Mushroom House": CAN_WITHDRAW_AND_TRADE,
    Obie: CAN_WITHDRAW_AND_TRADE,
    "Purple Trail": CAN_WITHDRAW_AND_TRADE,
    Maximus: CAN_WITHDRAW_AND_TRADE,
    "Peeled Potato": CAN_WITHDRAW_AND_TRADE,
    "Christmas Snow Globe": CAN_WITHDRAW_AND_TRADE,
    "Beta Bear": CAN_WITHDRAW_AND_TRADE,
    "Cyborg Bear": CAN_WITHDRAW_AND_TRADE,
    "Wood Nymph Wendy": CAN_WITHDRAW_AND_TRADE,
    "Squirrel Monkey": CAN_WITHDRAW_AND_TRADE,
    "Black Bearry": CAN_WITHDRAW_AND_TRADE,
    "Lady Bug": CAN_WITHDRAW_AND_TRADE,
    "Cabbage Boy": CAN_WITHDRAW_AND_TRADE,
    "Cabbage Girl": CAN_WITHDRAW_AND_TRADE,
    "Maneki Neko": CAN_WITHDRAW_AND_TRADE,
    "Heart Balloons": CAN_WITHDRAW_AND_TRADE,
    Flamingo: CAN_WITHDRAW_AND_TRADE,
    "Blossom Tree": CAN_WITHDRAW_AND_TRADE,
    "Palm Tree": CAN_WITHDRAW_AND_TRADE,
    "Beach Ball": CAN_WITHDRAW_AND_TRADE,
    "Collectible Bear": CAN_WITHDRAW_AND_TRADE,
    "Pablo The Bunny": CAN_WITHDRAW_AND_TRADE,
    "Easter Bush": CAN_WITHDRAW_AND_TRADE,
    "Giant Carrot": CAN_WITHDRAW_AND_TRADE,
    Hoot: CAN_WITHDRAW_AND_TRADE,
    "Sir Goldensnout": CAN_WITHDRAW_AND_TRADE,
    "Freya Fox": CAN_WITHDRAW_AND_TRADE,
    "Queen Cornelia": CAN_WITHDRAW_AND_TRADE,
    "White Crow": CAN_WITHDRAW_AND_TRADE,
    Walrus: CAN_WITHDRAW_AND_TRADE,
    Alba: CAN_WITHDRAW_AND_TRADE,
    "Knowledge Crab": CAN_WITHDRAW_AND_TRADE,
    Anchor: CAN_WITHDRAW_AND_TRADE,
    "Rubber Ducky": CAN_WITHDRAW_AND_TRADE,
    "Kraken Head": CAN_WITHDRAW_AND_TRADE,
    "Blossom Royale": CAN_WITHDRAW_AND_TRADE,
    "Humming Bird": CAN_WITHDRAW_AND_TRADE,
    "Hungry Caterpillar": CAN_WITHDRAW_AND_TRADE,
    "Queen Bee": CAN_WITHDRAW_AND_TRADE,
    "Turbo Sprout": CAN_WITHDRAW_AND_TRADE,
    Soybliss: CAN_WITHDRAW_AND_TRADE,
    "Grape Granny": CAN_WITHDRAW_AND_TRADE,
    "Royal Throne": CAN_WITHDRAW_AND_TRADE,
    "Lily Egg": CAN_WITHDRAW_AND_TRADE,
    Goblet: CAN_WITHDRAW_AND_TRADE,
    "Chicken Coop": CAN_WITHDRAW_AND_TRADE,
    "Easter Bunny": CAN_WITHDRAW_AND_TRADE,
    "Farm Cat": CAN_WITHDRAW_AND_TRADE,
    "Farm Dog": CAN_WITHDRAW_AND_TRADE,
    "Gold Egg": CAN_WITHDRAW_AND_TRADE,
    Rooster: CAN_WITHDRAW_AND_TRADE,
    "Tiki Totem": CAN_WITHDRAW_AND_TRADE,

    // Blacksmith Items
    "Sunflower Statue": CAN_WITHDRAW_AND_TRADE,
    "Potato Statue": CAN_WITHDRAW_AND_TRADE,
    "Christmas Tree": CAN_WITHDRAW_AND_TRADE,
    Gnome: CAN_WITHDRAW_AND_TRADE,
    "Sunflower Tombstone": CAN_WITHDRAW_AND_TRADE,
    "Sunflower Rock": CAN_WITHDRAW_AND_TRADE,
    "Goblin Crown": CAN_WITHDRAW_AND_TRADE,
    Fountain: CAN_WITHDRAW_AND_TRADE,
    "Woody the Beaver": CAN_WITHDRAW_AND_TRADE,
    "Apprentice Beaver": CAN_WITHDRAW_AND_TRADE,
    "Foreman Beaver": CAN_WITHDRAW_AND_TRADE,
    "Nyon Statue": CAN_WITHDRAW_AND_TRADE,
    "Homeless Tent": CAN_WITHDRAW_AND_TRADE,
    "Farmer Bath": CAN_WITHDRAW_AND_TRADE,
    "Mysterious Head": CAN_WITHDRAW_AND_TRADE,
    "Rock Golem": CAN_WITHDRAW_AND_TRADE,
    "Tunnel Mole": CAN_WITHDRAW_AND_TRADE,
    "Rocky the Mole": CAN_WITHDRAW_AND_TRADE,
    Nugget: CAN_WITHDRAW_AND_TRADE,
    "Christmas Bear": CAN_WITHDRAW_AND_TRADE,
    "Golden Bonsai": CAN_WITHDRAW_AND_TRADE,
    "Victoria Sisters": CAN_WITHDRAW_AND_TRADE,
    "Wicker Man": CAN_WITHDRAW_AND_TRADE,
    "Carrot Sword": CAN_WITHDRAW_AND_TRADE,
    "Golden Cauliflower": CAN_WITHDRAW_AND_TRADE,
    "Mysterious Parsnip": CAN_WITHDRAW_AND_TRADE,
    Nancy: CAN_WITHDRAW_AND_TRADE,
    Scarecrow: CAN_WITHDRAW_AND_TRADE,
    Kuebiko: CAN_WITHDRAW_AND_TRADE,
    "Lunar Calendar": CAN_WITHDRAW_AND_TRADE,
    "Genie Lamp": CAN_WITHDRAW_AND_TRADE,
    Foliant: CAN_WITHDRAW_AND_TRADE,
    "Iron Idol": CAN_WITHDRAW_AND_TRADE,
    "Heart of Davy Jones": CAN_WITHDRAW_AND_TRADE,
    Karkinos: CAN_WITHDRAW_AND_TRADE,
    "Emerald Turtle": CAN_WITHDRAW_AND_TRADE,
    "Tin Turtle": CAN_WITHDRAW_AND_TRADE,
    "Golden Bear Head": CAN_WITHDRAW_AND_TRADE,
    "Parasaur Skull": CAN_WITHDRAW_AND_TRADE,
    "T-Rex Skull": CAN_WITHDRAW_AND_TRADE,
    "Sunflower Coin": CAN_WITHDRAW_AND_TRADE,
    "Pirate Bear": CAN_WITHDRAW_AND_TRADE,
    "Whale Bear": CAN_WITHDRAW_AND_TRADE,
    "Dinosaur Bone": CAN_WITHDRAW_AND_TRADE,
    "Lifeguard Bear": CAN_WITHDRAW_AND_TRADE,
    "Snorkel Bear": CAN_WITHDRAW_AND_TRADE,
    "Turtle Bear": CAN_WITHDRAW_AND_TRADE,
    "Chef Bear": CAN_WITHDRAW_AND_TRADE,
    "Construction Bear": CAN_WITHDRAW_AND_TRADE,
    "Angel Bear": CAN_WITHDRAW_AND_TRADE,
    "Badass Bear": CAN_WITHDRAW_AND_TRADE,
    "Bear Trap": CAN_WITHDRAW_AND_TRADE,
    "Brilliant Bear": CAN_WITHDRAW_AND_TRADE,
    "Classy Bear": CAN_WITHDRAW_AND_TRADE,
    "Farmer Bear": CAN_WITHDRAW_AND_TRADE,
    "Sunflower Bear": CAN_WITHDRAW_AND_TRADE,
    "Rich Bear": CAN_WITHDRAW_AND_TRADE,
    "Rainbow Artist Bear": CAN_WITHDRAW_AND_TRADE,
    "Devil Bear": CAN_WITHDRAW_AND_TRADE,
    "Jelly Lamp": CAN_WITHDRAW_AND_TRADE,
    "Paint Can": CAN_WITHDRAW_AND_TRADE,
    "Devotion Flag": CAN_WITHDRAW_AND_TRADE,
    "Benevolence Flag": CAN_WITHDRAW_AND_TRADE,
    "Generosity Flag": CAN_WITHDRAW_AND_TRADE,
    "Splendor Flag": CAN_WITHDRAW_AND_TRADE,
    "Hungry Hare": CAN_WITHDRAW_AND_TRADE,
    "Community Egg": CAN_WITHDRAW_AND_TRADE,
    "Baby Panda": CAN_WITHDRAW_AND_TRADE,
    Baozi: CAN_WITHDRAW_AND_TRADE,
    "Valentine Bear": CAN_WITHDRAW_AND_TRADE,
    "Easter Bear": CAN_WITHDRAW_AND_TRADE,
    "Genie Bear": CAN_WITHDRAW_AND_TRADE,
    "Eggplant Bear": CAN_WITHDRAW_AND_TRADE,
    "Dawn Flower": CAN_WITHDRAW_AND_TRADE,
    "Sapo Docuras": CAN_WITHDRAW_AND_TRADE,
    "Sapo Travessuras": CAN_WITHDRAW_AND_TRADE,
    "Bumpkin Nutcracker": CAN_WITHDRAW_AND_TRADE,
    "Grinx's Hammer": CAN_WITHDRAW_AND_TRADE,
    "White Festive Fox": CAN_WITHDRAW_AND_TRADE,
    "Earn Alliance Banner": CAN_WITHDRAW_AND_TRADE,
    "Gaucho Rug": CAN_WITHDRAW_AND_TRADE,
    "Halloween Scarecrow": CAN_WITHDRAW_AND_TRADE,
    "Vampire Bear": CAN_WITHDRAW_AND_TRADE,
    "Luminous Lantern": CAN_WITHDRAW_AND_TRADE,
    "Radiance Lantern": CAN_WITHDRAW_AND_TRADE,
    "Aurora Lantern": CAN_WITHDRAW_AND_TRADE,
    "Ocean Lantern": CAN_WITHDRAW_AND_TRADE,
    "Solar Lantern": CAN_WITHDRAW_AND_TRADE,
    "Betty Lantern": CAN_WITHDRAW_AND_TRADE,
    "Bumpkin Lantern": CAN_WITHDRAW_AND_TRADE,
    "Goblin Lantern": CAN_WITHDRAW_AND_TRADE,
    "Lemon Shark": CAN_WITHDRAW_AND_TRADE,
    "Crimson Carp": CAN_WITHDRAW_AND_TRADE,
    "Battle Fish": CAN_WITHDRAW_AND_TRADE,
    "Pharaoh Gnome": CAN_WITHDRAW_AND_TRADE,
    "Lemon Tea Bath": CAN_WITHDRAW_AND_TRADE,
    "Tomato Clown": CAN_WITHDRAW_AND_TRADE,
    Pyramid: CAN_WITHDRAW_AND_TRADE,
    Oasis: CAN_WITHDRAW_AND_TRADE,
    "Rice Panda": CAN_WITHDRAW_AND_TRADE,
    "Silver Squire": CAN_WITHDRAW_AND_TRADE,
    Cluckapult: CAN_WITHDRAW_AND_TRADE,
    "Bullseye Board": CAN_WITHDRAW_AND_TRADE,
    "Hapy Jar": CAN_WITHDRAW_AND_TRADE,
    "Duamutef Jar": CAN_WITHDRAW_AND_TRADE,
    "Qebehsenuef Jar": CAN_WITHDRAW_AND_TRADE,
    "Imsety Jar": CAN_WITHDRAW_AND_TRADE,
    Cannonball: CAN_WITHDRAW_AND_TRADE,
    Sarcophagus: CAN_WITHDRAW_AND_TRADE,
    "Clay Tablet": CAN_WITHDRAW_AND_TRADE,
    "Snake in Jar": CAN_WITHDRAW_AND_TRADE,
    "Reveling Lemon": CAN_WITHDRAW_AND_TRADE,
    "Anubis Jackal": CAN_WITHDRAW_AND_TRADE,
    Sundial: CAN_WITHDRAW_AND_TRADE,
    "Sand Golem": CAN_WITHDRAW_AND_TRADE,
    "Cactus King": CAN_WITHDRAW_AND_TRADE,
    "Lemon Frog": CAN_WITHDRAW_AND_TRADE,
    "Scarab Beetle": CAN_WITHDRAW_AND_TRADE,
    "Tomato Bombard": CAN_WITHDRAW_AND_TRADE,
    "Desert Rose": CAN_WITHDRAW_AND_TRADE,
    "King of Bears": CAN_WITHDRAW_AND_TRADE,
    Miffy: CAN_WITHDRAW_AND_TRADE,
    Mog: CAN_WITHDRAW_AND_TRADE,
    Marty: CAN_WITHDRAW_AND_TRADE,
    Morty: CAN_WITHDRAW_AND_TRADE,
    "Battlecry Drum": CAN_WITHDRAW_AND_TRADE,
    "Chess Rug": CAN_WITHDRAW_AND_TRADE,
    "Golden Gallant": CAN_WITHDRAW_AND_TRADE,
    "Golden Garrison": CAN_WITHDRAW_AND_TRADE,
    "Golden Guardian": CAN_WITHDRAW_AND_TRADE,
    "Novice Knight": CAN_WITHDRAW_AND_TRADE,
    "Regular Pawn": CAN_WITHDRAW_AND_TRADE,
    "Rookie Rook": CAN_WITHDRAW_AND_TRADE,
    "Silver Sentinel": CAN_WITHDRAW_AND_TRADE,
    "Silver Stallion": CAN_WITHDRAW_AND_TRADE,
    "Trainee Target": CAN_WITHDRAW_AND_TRADE,
    "Twister Rug": CAN_WITHDRAW_AND_TRADE,
    Clementine: CAN_WITHDRAW_AND_TRADE,
    Cobalt: CAN_WITHDRAW_AND_TRADE,
    "Dawn Umbrella Seat": CAN_WITHDRAW_AND_TRADE,
    "Eggplant Grill": CAN_WITHDRAW_AND_TRADE,
    "Giant Dawn Mushroom": CAN_WITHDRAW_AND_TRADE,
    "Shroom Glow": CAN_WITHDRAW_AND_TRADE,
    Candles: CAN_WITHDRAW_AND_TRADE,
    "Haunted Stump": CAN_WITHDRAW_AND_TRADE,
    "Spooky Tree": CAN_WITHDRAW_AND_TRADE,
    Observer: CAN_WITHDRAW_AND_TRADE,
    "Crow Rock": CAN_WITHDRAW_AND_TRADE,
    "Mini Corn Maze": CAN_WITHDRAW_AND_TRADE,
    "Beach Umbrella": CAN_WITHDRAW_AND_TRADE,
    "Hideaway Herman": CAN_WITHDRAW_AND_TRADE,
    "Lifeguard Ring": CAN_WITHDRAW_AND_TRADE,
    "Shifty Sheldon": CAN_WITHDRAW_AND_TRADE,
    "Tiki Torch": CAN_WITHDRAW_AND_TRADE,
    Surfboard: CAN_WITHDRAW_AND_TRADE,
    "Paper Reed": CAN_WITHDRAW_AND_TRADE,
    Rainbow: CAN_WITHDRAW_AND_TRADE,
    Capybara: CAN_WITHDRAW_AND_TRADE,
    "Enchanted Rose": CAN_WITHDRAW_AND_TRADE,
    "Flower Fox": CAN_WITHDRAW_AND_TRADE,
    "Sunrise Bloom Rug": CAN_WITHDRAW_AND_TRADE,
    "Flower Rug": CAN_WITHDRAW_AND_TRADE,
    "Green Field Rug": CAN_WITHDRAW_AND_TRADE,
    "Flower Cart": CAN_WITHDRAW_AND_TRADE,
    "Tea Rug": CAN_WITHDRAW_AND_TRADE,
    "Fancy Rug": CAN_WITHDRAW_AND_TRADE,
    Clock: CAN_WITHDRAW_AND_TRADE,
    Vinny: CAN_WITHDRAW_AND_TRADE,

    // Upcoming launches
    "Moo-ver": {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    "Swiss Whiskers": {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    Cluckulator: {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    UFO: {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    "Black Sheep": {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    "Longhorn Cowfish": {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    "Alien Chicken": {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    Mootant: {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    "Toxic Tuft": {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },

    Chicory: {
      tradeAt: new Date("2024-12-13"),
      withdrawAt: SEASONS["Bull Run"].endDate,
    },
    "Christmas Stocking": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Golden Christmas Stocking": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Cozy Fireplace": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Christmas Rug": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Christmas Candle": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Santa Penguin": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Penguin Pool": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    Snowman: {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
    "Festive Toy Train": {
      tradeAt: new Date("2024-12-28"),
      withdrawAt: new Date("2025-11-01"),
    },
  };
