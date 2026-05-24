export const TIMELINE = [
  {
    year: 1817,
    title: "Claysville Founded",
    body: "John Purviance lays out the town along the route of the National Road, named for U.S. statesman Henry Clay.",
    tag: "Founding",
  },
  {
    year: 1818,
    title: "National Road Reaches Town",
    body: "America's first federally funded highway brings stagecoaches, drovers, and Conestoga wagons through Main Street.",
    tag: "Infrastructure",
  },
  {
    year: 1840,
    title: "Heyday of the Pike",
    body: "Twenty-eight taverns and inns line the road between Washington and Wheeling. Claysville becomes a vital overnight stop.",
    tag: "Commerce",
  },
  {
    year: 1853,
    title: "The Railroad Bypass",
    body: "The B&O Railroad reroutes long-haul traffic. The Pike quiets — and the town turns inward, planting orchards and dairy.",
    tag: "Industry",
  },
  {
    year: 1885,
    title: "McGuffey School Founded",
    body: "Named for William Holmes McGuffey of the famed Readers, the district begins serving seven townships.",
    tag: "Education",
  },
  {
    year: 1925,
    title: "Route 40 Returns the Road",
    body: "The old Pike is paved and folded into U.S. Route 40 — and the motor-tourist era brings new life to roadside businesses.",
    tag: "Revival",
  },
  {
    year: 1972,
    title: "Bicentennial Pike Festival",
    body: "The Pike Festival is established to honor the National Road's heritage. It now draws tens of thousands each May.",
    tag: "Celebration",
  },
  {
    year: 2018,
    title: "Farmers Market Returns",
    body: "The 3rd-Saturday market revives, pairing local growers with artisans in a tradition that pre-dates the railroad.",
    tag: "Community",
  },
  {
    year: 2026,
    title: "Today",
    body: "A small town with deep roots — preserving Main Street, building parks, and welcoming the next traveler.",
    tag: "Now",
  },
];

export const EVENTS = [
  {
    id: "market-jun",
    name: "Farmers Market — June",
    date: "2026-06-20T09:00",
    loc: "Town Square",
    color: "mustard" as const,
    tag: "Market",
    short: "Third Saturday. Twenty-plus growers, makers, and food vendors.",
  },
  {
    id: "pike",
    name: "Claysville Pike Festival",
    date: "2026-05-23T10:00",
    loc: "Main Street",
    color: "brick" as const,
    tag: "Festival",
    short: "Three-day heritage celebration with parade, juried artisans, and stage music.",
  },
  {
    id: "market-jul",
    name: "Farmers Market — July",
    date: "2026-07-18T09:00",
    loc: "Town Square",
    color: "mustard" as const,
    tag: "Market",
    short: "Tomatoes, sweet corn, and a fiddle on the courthouse steps.",
  },
  {
    id: "hero-awards",
    name: "Community Hero Awards",
    date: "2026-08-14T18:30",
    loc: "American Legion",
    color: "navy" as const,
    tag: "Civic",
    short: "An evening honoring neighbors who quietly hold the place together.",
  },
  {
    id: "fair",
    name: "West Alexander Fair",
    date: "2026-09-01T08:00",
    loc: "Fairgrounds",
    color: "forest" as const,
    tag: "Fair",
    short: "Since 1899 — a true county fair with livestock, harness racing, and 4-H.",
  },
  {
    id: "market-sep",
    name: "Farmers Market — Sept.",
    date: "2026-09-19T09:00",
    loc: "Town Square",
    color: "mustard" as const,
    tag: "Market",
    short: "Apples, squash, and the first cider of the season.",
  },
];

export const BUSINESSES = [
  { name: "Cam's Corner", cat: "Dining", blurb: "Diner classics, the all-day kind. Pie made before dawn.", since: 1962, addr: "Main Street" },
  { name: "Pike & Plough", cat: "Dining", blurb: "Farm-to-table tasting menu in a restored 1840s tavern.", since: 2021, addr: "E. Main St" },
  { name: "National Road Coffee", cat: "Dining", blurb: "Single-origin roasts and a counter that knows your order.", since: 2019, addr: "Wheeling Pike" },
  { name: "Main Street Mercantile", cat: "Shopping", blurb: "Wax-canvas everything. Boots that need breaking in.", since: 2014, addr: "Main Street" },
  { name: "Claysville Press", cat: "Shopping", blurb: "Letterpress prints, paper goods, and the town's only typewriter.", since: 2018, addr: "Center Ave" },
  { name: "Foundry & Forge", cat: "Services", blurb: "Custom ironwork, blacksmithing classes Saturdays.", since: 2005, addr: "W. Main St" },
  { name: "Pike Veterinary", cat: "Services", blurb: "Small animal and large — they've seen worse than yours.", since: 1991, addr: "Route 40" },
  { name: "West End Books", cat: "Shopping", blurb: "Used hardbacks shelved by mood, not subject.", since: 2009, addr: "Main Street" },
  { name: "Hilltop Park", cat: "Outdoors", blurb: "Wide-open ridge views, two pavilions, a long-favorite ballfield.", since: 1948, addr: "Park Road" },
  { name: "National Pike Trail Head", cat: "Outdoors", blurb: "Twelve miles graded for walking, biking, and bird-watching.", since: 2011, addr: "Trail Rd" },
  { name: "First Presbyterian", cat: "Worship", blurb: "1834 sanctuary, doors open Sunday and Wednesday.", since: 1834, addr: "Church St" },
  { name: "St. James AME", cat: "Worship", blurb: "Music ministry, community kitchen, all welcome.", since: 1869, addr: "S. Wheeling" },
];

export const CATEGORIES = ["All", "Dining", "Shopping", "Services", "Outdoors", "Worship"] as const;

export const MUNICIPALITIES = [
  ["Claysville Borough", "724-663-4470"],
  ["Donegal Township", "724-484-4017"],
  ["Green Hills Borough", "724-222-4700"],
  ["Blaine Township", "724-948-2157"],
  ["East Finley Township", "724-663-4483"],
  ["South Franklin Twp.", "724-225-4828"],
  ["Morris Township", "724-222-0352"],
  ["Buffalo Township", "724-222-2711"],
  ["West Finley Township", "724-484-9200"],
] as const;

export const PIKE_SCHEDULE = [
  {
    day: "Saturday",
    date: "May 23",
    events: [
      { time: "9:00 AM", title: "Opening Parade", loc: "Main Street", tag: "Procession" },
      { time: "10:30 AM", title: "Artisan Market Opens", loc: "Town Square", tag: "Market" },
      { time: "12:00 PM", title: "Stagecoach Demonstrations", loc: "Pike Mile-Marker", tag: "History" },
      { time: "2:00 PM", title: "Old-Time Music Showcase", loc: "Bandshell", tag: "Music" },
      { time: "6:00 PM", title: "Pike-Style Pig Roast", loc: "Town Square", tag: "Feast" },
      { time: "9:00 PM", title: "Lantern Walk", loc: "National Pike", tag: "After-dark" },
    ],
  },
  {
    day: "Sunday",
    date: "May 24",
    events: [
      { time: "8:00 AM", title: "Pancake Breakfast", loc: "Fire Hall", tag: "Feast" },
      { time: "10:00 AM", title: "Heritage Walking Tour", loc: "Meet at Square", tag: "History" },
      { time: "1:00 PM", title: "Crafts Demonstrations", loc: "Main Street", tag: "Makers" },
      { time: "4:00 PM", title: "Children’s Hayride", loc: "Hilltop Park", tag: "Family" },
    ],
  },
  {
    day: "Monday",
    date: "May 25",
    events: [
      { time: "11:00 AM", title: "Memorial Day Service", loc: "Veterans Park", tag: "Civic" },
      { time: "1:00 PM", title: "Final Market Day", loc: "Town Square", tag: "Market" },
      { time: "5:00 PM", title: "Closing Bonfire & Fiddles", loc: "Hilltop Park", tag: "Music" },
    ],
  },
];

export const VENDORS = [
  { name: "Hilltop Acres", cat: "Produce", blurb: "Heirloom tomatoes, sweet corn, fall squash. Pesticide-free." },
  { name: "Burnt Barn Bakery", cat: "Bakers", blurb: "Sourdough country loaves, scones, and pies on Saturdays." },
  { name: "West Finley Farm", cat: "Dairy", blurb: "Grass-fed milk, cultured butter, three cheeses." },
  { name: "Donegal Honey", cat: "Pantry", blurb: "Wildflower, buckwheat, and a once-a-year basswood honey." },
  { name: "Pike Meats", cat: "Meat", blurb: "Heritage pork and pastured chicken from East Finley." },
  { name: "Foxglove Flowers", cat: "Flowers", blurb: "Hand-cut bouquets, dahlias from July through October." },
  { name: "Stone & Salt", cat: "Makers", blurb: "Hand-thrown stoneware mugs and serving boards." },
  { name: "Pioneer Soap Co.", cat: "Makers", blurb: "Tallow and goat-milk soaps. Twelve scents in season." },
];

export const VENDOR_CATEGORIES = ["All", "Produce", "Bakers", "Dairy", "Pantry", "Meat", "Flowers", "Makers"] as const;

export const MARKET_DATES = [
  { m: "JUN", d: "20", tag: "Opening day · strawberries" },
  { m: "JUL", d: "18", tag: "Sweet corn · first peaches" },
  { m: "AUG", d: "15", tag: "Tomatoes · live fiddle" },
  { m: "SEP", d: "19", tag: "Apples · cider press" },
  { m: "OCT", d: "17", tag: "Closing day · harvest" },
];

export function nextEvent(events: typeof EVENTS) {
  const now = Date.now();
  const future = events.filter((e) => new Date(e.date).getTime() >= now);
  return future.length ? future[0] : events[0];
}
