const cities = [
	{
		"Place name": "Alachua",
		"County": "Alachua",
		"Population": "9949",
		"Area": "29.0 sq mi (75.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Alford",
		"County": "Jackson",
		"Population": "467",
		"Area": "1.3 sq mi (3.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Altamonte Springs",
		"County": "Seminole",
		"Population": "44241",
		"Area": "9.5 sq mi (24.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Altha",
		"County": "Calhoun",
		"Population": "504",
		"Area": "1.4 sq mi (3.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Anna Maria",
		"County": "Manatee",
		"Population": "1749",
		"Area": "1.0 sq mi (2.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Apalachicola",
		"County": "Franklin",
		"Population": "2344",
		"Area": "2.7 sq mi (6.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Apopka",
		"County": "Orange",
		"Population": "53489",
		"Area": "24.9 sq mi (64.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Arcadia",
		"County": "DeSoto",
		"Population": "8201",
		"Area": "4.0 sq mi (10.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Archer",
		"County": "Alachua",
		"Population": "1173",
		"Area": "2.4 sq mi (6.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Astatula",
		"County": "Lake",
		"Population": "2059",
		"Area": "2.2 sq mi (5.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Atlantic Beach",
		"County": "Duval",
		"Population": "13831",
		"Area": "13.0 sq mi (33.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Atlantis",
		"County": "Palm Beach",
		"Population": "2109",
		"Area": "1.4 sq mi (3.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Auburndale",
		"County": "Polk",
		"Population": "16291",
		"Area": "9.3 sq mi (24.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Aventura",
		"County": "Miami-Dade",
		"Population": "37988",
		"Area": "3.5 sq mi (9.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Avon Park",
		"County": "Highlands",
		"Population": "10695",
		"Area": "5.7 sq mi (14.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bal Harbour",
		"County": "Miami-Dade",
		"Population": "3039",
		"Area": "0.6 sq mi (1.6 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Baldwin",
		"County": "Duval",
		"Population": "1495",
		"Area": "2.1 sq mi (5.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Bartow",
		"County": "Polk",
		"Population": "19926",
		"Area": "52.3 sq mi (135.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bascom",
		"County": "Jackson",
		"Population": "116",
		"Area": "0.2 sq mi (0.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Bay Harbor Islands",
		"County": "Miami-Dade",
		"Population": "5964",
		"Area": "0.6 sq mi (1.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Bay Lake",
		"County": "Orange",
		"Population": "51",
		"Area": "21.1 sq mi (54.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bell",
		"County": "Gilchrist",
		"Population": "488",
		"Area": "1.6 sq mi (4.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Belle Glade",
		"County": "Palm Beach",
		"Population": "20058",
		"Area": "4.7 sq mi (12.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Belle Isle",
		"County": "Orange",
		"Population": "7166",
		"Area": "4.6 sq mi (12.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Belleair",
		"County": "Pinellas",
		"Population": "4217",
		"Area": "2.8 sq mi (7.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Belleair Beach",
		"County": "Pinellas",
		"Population": "1609",
		"Area": "1.8 sq mi (4.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Belleair Bluffs",
		"County": "Pinellas",
		"Population": "2199",
		"Area": "0.7 sq mi (1.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Belleair Shore",
		"County": "Pinellas",
		"Population": "114",
		"Area": "0.5 sq mi (1.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Belleview",
		"County": "Marion",
		"Population": "5022",
		"Area": "1.8 sq mi (4.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Beverly Beach",
		"County": "Flagler",
		"Population": "400",
		"Area": "0.4 sq mi (1.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Biscayne Park",
		"County": "Miami-Dade",
		"Population": "3159",
		"Area": "0.6 sq mi (1.7 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Blountstown",
		"County": "Calhoun",
		"Population": "2478",
		"Area": "3.2 sq mi (8.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Boca Raton",
		"County": "Palm Beach",
		"Population": "99244",
		"Area": "29.1 sq mi (75.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bonifay",
		"County": "Holmes",
		"Population": "2692",
		"Area": "3.6 sq mi (9.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bonita Springs",
		"County": "Lee",
		"Population": "57370",
		"Area": "41.0 sq mi (106.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bowling Green",
		"County": "Hardee",
		"Population": "2902",
		"Area": "1.4 sq mi (3.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Boynton Beach",
		"County": "Palm Beach",
		"Population": "78050",
		"Area": "16.3 sq mi (42.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bradenton",
		"County": "Manatee",
		"Population": "57644",
		"Area": "14.4 sq mi (37.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bradenton Beach",
		"County": "Manatee",
		"Population": "1278",
		"Area": "1.0 sq mi (2.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Branford",
		"County": "Suwannee",
		"Population": "730",
		"Area": "0.8 sq mi (2.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Briny Breezes",
		"County": "Palm Beach",
		"Population": "653",
		"Area": "0.1 sq mi (0.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Bristol",
		"County": "Liberty",
		"Population": "998",
		"Area": "1.6 sq mi (4.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bronson",
		"County": "Levy",
		"Population": "1133",
		"Area": "4.0 sq mi (10.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Brooker",
		"County": "Bradford",
		"Population": "334",
		"Area": "0.5 sq mi (1.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Brooksville",
		"County": "Hernando",
		"Population": "8298",
		"Area": "5.0 sq mi (12.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bunnell",
		"County": "Flagler",
		"Population": "2820",
		"Area": "4.7 sq mi (12.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Bushnell",
		"County": "Sumter",
		"Population": "3119",
		"Area": "2.4 sq mi (6.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Callahan",
		"County": "Nassau",
		"Population": "1353",
		"Area": "1.3 sq mi (3.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Callaway",
		"County": "Bay",
		"Population": "15216",
		"Area": "6.1 sq mi (15.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Campbellton",
		"County": "Jackson",
		"Population": "225",
		"Area": "0.9 sq mi (2.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Cape Canaveral",
		"County": "Brevard",
		"Population": "10449",
		"Area": "2.3 sq mi (6.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cape Coral",
		"County": "Lee",
		"Population": "189343",
		"Area": "119.5 sq mi (310.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Carrabelle",
		"County": "Franklin",
		"Population": "2515",
		"Area": "4.8 sq mi (12.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Caryville",
		"County": "Washington",
		"Population": "282",
		"Area": "3.1 sq mi (8.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Casselberry",
		"County": "Seminole",
		"Population": "28876",
		"Area": "7.1 sq mi (18.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cedar Key",
		"County": "Levy",
		"Population": "686",
		"Area": "2.0 sq mi (5.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Center Hill",
		"County": "Sumter",
		"Population": "1409",
		"Area": "1.8 sq mi (4.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Century",
		"County": "Escambia",
		"Population": "1817",
		"Area": "3.4 sq mi (8.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Chattahoochee",
		"County": "Gadsden",
		"Population": "3065",
		"Area": "5.7 sq mi (14.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Chiefland",
		"County": "Levy",
		"Population": "2169",
		"Area": "3.9 sq mi (10.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Chipley",
		"County": "Washington",
		"Population": "3570",
		"Area": "4.1 sq mi (10.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cinco Bayou",
		"County": "Okaloosa",
		"Population": "438",
		"Area": "0.2 sq mi (0.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Clearwater",
		"County": "Pinellas",
		"Population": "116478",
		"Area": "37.7 sq mi (97.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Clermont",
		"County": "Lake",
		"Population": "36693",
		"Area": "11.5 sq mi (29.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Clewiston",
		"County": "Hendry",
		"Population": "7985",
		"Area": "4.7 sq mi (12.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cloud Lake",
		"County": "Palm Beach",
		"Population": "146",
		"Area": "0.1 sq mi (0.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Cocoa",
		"County": "Brevard",
		"Population": "18619",
		"Area": "9.6 sq mi (24.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cocoa Beach",
		"County": "Brevard",
		"Population": "11737",
		"Area": "15.0 sq mi (39.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Coconut Creek",
		"County": "Broward",
		"Population": "61361",
		"Area": "11.8 sq mi (30.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Coleman",
		"County": "Sumter",
		"Population": "877",
		"Area": "1.5 sq mi (3.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cooper City",
		"County": "Broward",
		"Population": "35853",
		"Area": "6.7 sq mi (17.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Coral Gables",
		"County": "Miami-Dade",
		"Population": "50999",
		"Area": "37.2 sq mi (96.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Coral Springs",
		"County": "Broward",
		"Population": "133507",
		"Area": "23.9 sq mi (62.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cottondale",
		"County": "Jackson",
		"Population": "905",
		"Area": "1.7 sq mi (4.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Crescent City",
		"County": "Putnam",
		"Population": "1542",
		"Area": "2.1 sq mi (5.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Crestview",
		"County": "Okaloosa",
		"Population": "24664",
		"Area": "12.8 sq mi (33.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cross City",
		"County": "Dixie",
		"Population": "1712",
		"Area": "1.9 sq mi (4.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Crystal River",
		"County": "Citrus",
		"Population": "3162",
		"Area": "6.3 sq mi (16.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Cutler Bay",
		"County": "Miami-Dade",
		"Population": "44867",
		"Area": "4.9 sq mi (12.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Dade City",
		"County": "Pasco",
		"Population": "7232",
		"Area": "3.4 sq mi (8.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Dania Beach",
		"County": "Broward",
		"Population": "32271",
		"Area": "6.3 sq mi (16.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Davenport",
		"County": "Polk",
		"Population": "5378",
		"Area": "1.7 sq mi (4.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Davie",
		"County": "Broward",
		"Population": "106558",
		"Area": "34.2 sq mi (88.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Daytona Beach",
		"County": "Volusia",
		"Population": "68866",
		"Area": "64.9 sq mi (168.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Daytona Beach Shores",
		"County": "Volusia",
		"Population": "4541",
		"Area": "0.9 sq mi (2.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "DeBary",
		"County": "Volusia",
		"Population": "21118",
		"Area": "21.4 sq mi (55.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Deerfield Beach",
		"County": "Broward",
		"Population": "80863",
		"Area": "14.9 sq mi (38.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "DeFuniak Springs",
		"County": "Walton",
		"Population": "6719",
		"Area": "11.3 sq mi (29.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Deland",
		"County": "Volusia",
		"Population": "33532",
		"Area": "16.1 sq mi (41.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Delray Beach",
		"County": "Palm Beach",
		"Population": "69358",
		"Area": "15.9 sq mi (41.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Deltona",
		"County": "Volusia",
		"Population": "91951",
		"Area": "41.1 sq mi (106.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Destin",
		"County": "Okaloosa",
		"Population": "14077",
		"Area": "8.2 sq mi (21.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Doral",
		"County": "Miami-Dade",
		"Population": "61824",
		"Area": "13.6 sq mi (35.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Dundee",
		"County": "Polk",
		"Population": "4816",
		"Area": "4.3 sq mi (11.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Dunedin",
		"County": "Pinellas",
		"Population": "36580",
		"Area": "28.2 sq mi (73.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Dunnellon",
		"County": "Marion",
		"Population": "1819",
		"Area": "7.4 sq mi (19.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Eagle Lake",
		"County": "Polk",
		"Population": "2708",
		"Area": "1.4 sq mi (3.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Eatonville",
		"County": "Orange",
		"Population": "2301",
		"Area": "1.1 sq mi (2.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Ebro",
		"County": "Washington",
		"Population": "275",
		"Area": "3.1 sq mi (8.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Edgewater",
		"County": "Volusia",
		"Population": "22669",
		"Area": "10.4 sq mi (26.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Edgewood",
		"County": "Orange",
		"Population": "2977",
		"Area": "1.5 sq mi (3.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "El Portal",
		"County": "Miami-Dade",
		"Population": "2471",
		"Area": "0.4 sq mi (1.1 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Estero",
		"County": "Lee",
		"Population": "33474",
		"Area": "25.37 sq mi (65.72 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Esto",
		"County": "Holmes",
		"Population": "352",
		"Area": "2.4 sq mi (6.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Eustis",
		"County": "Lake",
		"Population": "21083",
		"Area": "9.7 sq mi (24.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Everglades City",
		"County": "Collier",
		"Population": "424",
		"Area": "1.2 sq mi (3.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fanning Springs",
		"County": "Gilchrist",
		"Population": "1015",
		"Area": "3.7 sq mi (9.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "",
		"County": "Levy",
		"Population": "",
		"Area": "",
		"Label": ""
	},
	{
		"Place name": "Fellsmere",
		"County": "Indian River",
		"Population": "5754",
		"Area": "5.4 sq mi (14.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fernandina Beach",
		"County": "Nassau",
		"Population": "12558",
		"Area": "10.7 sq mi (27.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Flagler Beach",
		"County": "Flagler",
		"Population": "5081",
		"Area": "4.1 sq mi (10.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Florida City",
		"County": "Miami-Dade",
		"Population": "12077",
		"Area": "3.2 sq mi (18.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fort Lauderdale",
		"County": "Broward",
		"Population": "182595",
		"Area": "36.0 sq mi (93.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fort Meade",
		"County": "Polk",
		"Population": "6203",
		"Area": "5.0 sq mi (13.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fort Myers",
		"County": "Lee",
		"Population": "82254",
		"Area": "40.4 sq mi (104.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fort Myers Beach",
		"County": "Lee",
		"Population": "7102",
		"Area": "6.2 sq mi (15.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Fort Pierce",
		"County": "St. Lucie",
		"Population": "46071",
		"Area": "20.7 sq mi (53.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fort Walton Beach",
		"County": "Okaloosa",
		"Population": "22284",
		"Area": "8.2 sq mi (21.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fort White",
		"County": "Columbia",
		"Population": "602",
		"Area": "2.3 sq mi (6.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Freeport",
		"County": "Walton",
		"Population": "2472",
		"Area": "10.8 sq mi (28.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Frostproof",
		"County": "Polk",
		"Population": "3273",
		"Area": "2.5 sq mi (6.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Fruitland Park",
		"County": "Lake",
		"Population": "10122",
		"Area": "3.7 sq mi (9.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Gainesville",
		"County": "Alachua",
		"Population": "133857",
		"Area": "49.1 sq mi (127.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Glen Ridge",
		"County": "Palm Beach",
		"Population": "243",
		"Area": "0.2 sq mi (0.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Glen St. Mary",
		"County": "Baker",
		"Population": "450",
		"Area": "0.4 sq mi (1.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Golden Beach",
		"County": "Miami-Dade",
		"Population": "959",
		"Area": "0.3 sq mi (1.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Golf",
		"County": "Palm Beach",
		"Population": "275",
		"Area": "0.8 sq mi (2.2 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Graceville",
		"County": "Jackson",
		"Population": "2200",
		"Area": "4.4 sq mi (11.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Grand Ridge",
		"County": "Jackson",
		"Population": "879",
		"Area": "2.3 sq mi (5.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Grant-Valkaria",
		"County": "Brevard",
		"Population": "4254",
		"Area": "1.0 sq mi (2.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Green Cove Springs",
		"County": "Clay",
		"Population": "8313",
		"Area": "9.4 sq mi (24.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Greenacres",
		"County": "Palm Beach",
		"Population": "41084",
		"Area": "4.7 sq mi (12.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Greensboro",
		"County": "Gadsden",
		"Population": "614",
		"Area": "1.0 sq mi (2.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Greenville",
		"County": "Madison",
		"Population": "820",
		"Area": "1.3 sq mi (3.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Greenwood",
		"County": "Jackson",
		"Population": "662",
		"Area": "4.8 sq mi (12.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Gretna",
		"County": "Gadsden",
		"Population": "1526",
		"Area": "1.9 sq mi (4.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Groveland",
		"County": "Lake",
		"Population": "14677",
		"Area": "3.0 sq mi (7.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Gulf Breeze",
		"County": "Santa Rosa",
		"Population": "6716",
		"Area": "23.5 sq mi (61.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Gulf Stream",
		"County": "Palm Beach",
		"Population": "880",
		"Area": "0.8 sq mi (2.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Gulfport",
		"County": "Pinellas",
		"Population": "12401",
		"Area": "3.8 sq mi (9.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Haines City",
		"County": "Polk",
		"Population": "25091",
		"Area": "8.9 sq mi (23.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Hallandale Beach",
		"County": "Broward",
		"Population": "39940",
		"Area": "4.6 sq mi (11.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Hampton",
		"County": "Bradford",
		"Population": "497",
		"Area": "1.0 sq mi (2.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Hastings",
		"County": "St. Johns",
		"Population": "648",
		"Area": "0.7 sq mi (1.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Havana",
		"County": "Gadsden",
		"Population": "1707",
		"Area": "1.9 sq mi (4.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Haverhill",
		"County": "Palm Beach",
		"Population": "2123",
		"Area": "0.6 sq mi (1.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Hawthorne",
		"County": "Alachua",
		"Population": "1527",
		"Area": "4.8 sq mi (12.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Hialeah",
		"County": "Miami-Dade",
		"Population": "238942",
		"Area": "19.7 sq mi (51.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Hialeah Gardens",
		"County": "Miami-Dade",
		"Population": "24043",
		"Area": "2.5 sq mi (6.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "High Springs",
		"County": "Alachua",
		"Population": "6137",
		"Area": "18.5 sq mi (47.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Highland Beach",
		"County": "Palm Beach",
		"Population": "3915",
		"Area": "1.1 sq mi (2.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Highland Park",
		"County": "Polk",
		"Population": "264",
		"Area": "0.7 sq mi (1.9 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Hillcrest Heights",
		"County": "Polk",
		"Population": "294",
		"Area": "0.2 sq mi (0.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Hilliard",
		"County": "Nassau",
		"Population": "3209",
		"Area": "5.5 sq mi (14.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Hillsboro Beach",
		"County": "Broward",
		"Population": "2020",
		"Area": "1.6 sq mi (4.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Holly Hill",
		"County": "Volusia",
		"Population": "12316",
		"Area": "4.5 sq mi (11.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Hollywood",
		"County": "Broward",
		"Population": "154823",
		"Area": "30.8 sq mi (79.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Holmes Beach",
		"County": "Manatee",
		"Population": "4295",
		"Area": "1.7 sq mi (4.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Homestead",
		"County": "Miami-Dade",
		"Population": "70477",
		"Area": "14.4 sq mi (37.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Horseshoe Beach",
		"County": "Dixie",
		"Population": "167",
		"Area": "0.2 sq mi (0.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Howey-in-the-Hills",
		"County": "Lake",
		"Population": "1175",
		"Area": "1.9 sq mi (4.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Hypoluxo",
		"County": "Palm Beach",
		"Population": "2783",
		"Area": "0.8 sq mi (2.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Indialantic",
		"County": "Brevard",
		"Population": "2913",
		"Area": "1.2 sq mi (3.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Indian Creek",
		"County": "Miami-Dade",
		"Population": "91",
		"Area": "0.4 sq mi (1.2 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Indian Harbour Beach",
		"County": "Brevard",
		"Population": "8565",
		"Area": "2.6 sq mi (6.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Indian River Shores",
		"County": "Indian River",
		"Population": "4252",
		"Area": "7.2 sq mi (18.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Indian Rocks Beach",
		"County": "Pinellas",
		"Population": "4286",
		"Area": "1.4 sq mi (3.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Indian Shores",
		"County": "Pinellas",
		"Population": "1476",
		"Area": "0.9 sq mi (2.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Inglis",
		"County": "Levy",
		"Population": "1323",
		"Area": "3.7 sq mi (9.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Interlachen",
		"County": "Putnam",
		"Population": "1461",
		"Area": "6.4 sq mi (16.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Inverness",
		"County": "Citrus",
		"Population": "7390",
		"Area": "8.1 sq mi (21.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Islamorada",
		"County": "Monroe",
		"Population": "6383",
		"Area": "7.3 sq mi (18.8 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Jacksonville",
		"County": "Duval",
		"Population": "903889",
		"Area": "883.6 sq mi (2",
		"Label": "292.2 km2)"
	},
	{
		"Place name": "Jacksonville Beach",
		"County": "Duval",
		"Population": "23669",
		"Area": "22.0 sq mi (56.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Jacob City",
		"County": "Jackson",
		"Population": "246",
		"Area": "3.2 sq mi (8.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Jasper",
		"County": "Hamilton",
		"Population": "4098",
		"Area": "2.0 sq mi (5.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Jay",
		"County": "Santa Rosa",
		"Population": "620",
		"Area": "1.6 sq mi (4.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Jennings",
		"County": "Hamilton",
		"Population": "863",
		"Area": "1.8 sq mi (4.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Juno Beach",
		"County": "Palm Beach",
		"Population": "3648",
		"Area": "1.9 sq mi (4.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Jupiter",
		"County": "Palm Beach",
		"Population": "65524",
		"Area": "21.1 sq mi (54.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Jupiter Inlet Colony",
		"County": "Palm Beach",
		"Population": "452",
		"Area": "0.2 sq mi (0.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Jupiter Island",
		"County": "Martin",
		"Population": "920",
		"Area": "3.6 sq mi (9.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Kenneth City",
		"County": "Pinellas",
		"Population": "5059",
		"Area": "0.7 sq mi (1.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Key Biscayne",
		"County": "Miami-Dade",
		"Population": "13149",
		"Area": "1.4 sq mi (3.6 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Key Colony Beach",
		"County": "Monroe",
		"Population": "814",
		"Area": "0.7 sq mi (1.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Key West",
		"County": "Monroe",
		"Population": "24565",
		"Area": "7.4 sq mi (19.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Keystone Heights",
		"County": "Bradford",
		"Population": "1518",
		"Area": "4.6 sq mi (12.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "",
		"County": "Clay",
		"Population": "",
		"Area": "",
		"Label": ""
	},
	{
		"Place name": "Kissimmee",
		"County": "Osceola",
		"Population": "73597",
		"Area": "17.3 sq mi (44.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "LaBelle",
		"County": "Hendry",
		"Population": "5226",
		"Area": "3.6 sq mi (9.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "LaCrosse",
		"County": "Alachua",
		"Population": "395",
		"Area": "1.3 sq mi (3.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lady Lake",
		"County": "Lake",
		"Population": "15622",
		"Area": "6.7 sq mi (17.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lake Alfred",
		"County": "Polk",
		"Population": "5977",
		"Area": "8.6 sq mi (22.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake Buena Vista",
		"County": "Orange",
		"Population": "27",
		"Area": "4.9 sq mi (12.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake Butler",
		"County": "Union",
		"Population": "1797",
		"Area": "1.8 sq mi (4.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake City",
		"County": "Columbia",
		"Population": "12116",
		"Area": "11.1 sq mi (28.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake Clarke Shores",
		"County": "Palm Beach",
		"Population": "3628",
		"Area": "1.1 sq mi (2.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lake Hamilton",
		"County": "Polk",
		"Population": "1442",
		"Area": "3.9 sq mi (10.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lake Helen",
		"County": "Volusia",
		"Population": "2814",
		"Area": "4.3 sq mi (11.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake Mary",
		"County": "Seminole",
		"Population": "17283",
		"Area": "9.7 sq mi (25.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake Park",
		"County": "Palm Beach",
		"Population": "8605",
		"Area": "2.3 sq mi (6.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lake Placid",
		"County": "Highlands",
		"Population": "2439",
		"Area": "2.8 sq mi (7.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lake Wales",
		"County": "Polk",
		"Population": "16577",
		"Area": "14.0 sq mi (36.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lake Worth Beach",
		"County": "Palm Beach",
		"Population": "38267",
		"Area": "6.5 sq mi (16.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lakeland",
		"County": "Polk",
		"Population": "110516",
		"Area": "74.4 sq mi (192.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lantana",
		"County": "Palm Beach",
		"Population": "11867",
		"Area": "2.9 sq mi (7.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Largo",
		"County": "Pinellas",
		"Population": "84996",
		"Area": "16.1 sq mi (41.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lauderdale Lakes",
		"County": "Broward",
		"Population": "36324",
		"Area": "3.6 sq mi (9.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lauderdale-by-the-Sea",
		"County": "Broward",
		"Population": "6680",
		"Area": "1.5 sq mi (3.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lauderhill",
		"County": "Broward",
		"Population": "72094",
		"Area": "7.3 sq mi (19.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Laurel Hill",
		"County": "Okaloosa",
		"Population": "609",
		"Area": "3.1 sq mi (8.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lawtey Nour Town",
		"County": "Bradford",
		"Population": "722",
		"Area": "1.4 sq mi (3.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Layton",
		"County": "Monroe",
		"Population": "189",
		"Area": "0.2 sq mi (0.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lazy Lake",
		"County": "Broward",
		"Population": "26",
		"Area": "0.1 sq mi (0.1 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Lee",
		"County": "Madison",
		"Population": "328",
		"Area": "1.2 sq mi (3.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Leesburg",
		"County": "Lake",
		"Population": "23163",
		"Area": "24.5 sq mi (63.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Lighthouse Point",
		"County": "Broward",
		"Population": "11283",
		"Area": "2.4 sq mi (6.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Live Oak",
		"County": "Suwannee",
		"Population": "6974",
		"Area": "11.4 sq mi (29.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Longboat Key",
		"County": "Manatee",
		"Population": "7323",
		"Area": "17.0 sq mi (44.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "",
		"County": "Sarasota",
		"Population": "",
		"Area": "",
		"Label": ""
	},
	{
		"Place name": "Longwood",
		"County": "Seminole",
		"Population": "15124",
		"Area": "5.6 sq mi (14.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Loxahatchee Groves",
		"County": "Palm Beach",
		"Population": "3564",
		"Area": "12.5 sq mi (32.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Lynn Haven",
		"County": "Bay",
		"Population": "21492",
		"Area": "9.6 sq mi (24.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Macclenny",
		"County": "Baker",
		"Population": "6705",
		"Area": "3.3 sq mi (8.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Madeira Beach",
		"County": "Pinellas",
		"Population": "4327",
		"Area": "3.2 sq mi (8.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Madison",
		"County": "Madison",
		"Population": "2797",
		"Area": "2.5 sq mi (6.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Maitland",
		"County": "Orange",
		"Population": "17947",
		"Area": "5.6 sq mi (14.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Malabar",
		"County": "Brevard",
		"Population": "3133",
		"Area": "13.2 sq mi (34.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Malone",
		"County": "Jackson",
		"Population": "2170",
		"Area": "3.1 sq mi (8.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Manalapan",
		"County": "Palm Beach",
		"Population": "466",
		"Area": "2.4 sq mi (6.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Mangonia Park",
		"County": "Palm Beach",
		"Population": "2017",
		"Area": "0.7 sq mi (1.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Marathon",
		"County": "Monroe",
		"Population": "8645",
		"Area": "9.6 sq mi (25.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Marco Island",
		"County": "Collier",
		"Population": "17930",
		"Area": "17.1 sq mi (44.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Margate",
		"County": "Broward",
		"Population": "58656",
		"Area": "9.0 sq mi (23.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Marianna",
		"County": "Jackson",
		"Population": "7091",
		"Area": "8.0 sq mi (20.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Marineland",
		"County": "Flagler",
		"Population": "11",
		"Area": "0.3 sq mi (0.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "",
		"County": "St. Johns",
		"Population": "",
		"Area": "",
		"Label": ""
	},
	{
		"Place name": "Mary Esther",
		"County": "Okaloosa",
		"Population": "4370",
		"Area": "1.5 sq mi (4.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Mascotte",
		"County": "Lake",
		"Population": "5873",
		"Area": "2.8 sq mi (7.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Mayo",
		"County": "Lafayette",
		"Population": "1286",
		"Area": "0.8 sq mi (2.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "McIntosh",
		"County": "Marion",
		"Population": "490",
		"Area": "0.7 sq mi (1.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Medley",
		"County": "Miami-Dade",
		"Population": "890",
		"Area": "4.3 sq mi (11.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Melbourne",
		"County": "Brevard",
		"Population": "82826",
		"Area": "35.5 sq mi (91.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Melbourne Beach",
		"County": "Brevard",
		"Population": "3288",
		"Area": "1.3 sq mi (3.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Melbourne Village",
		"County": "Brevard",
		"Population": "697",
		"Area": "0.6 sq mi (1.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Mexico Beach",
		"County": "Bay",
		"Population": "1223",
		"Area": "1.3 sq mi (3.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Miami",
		"County": "Miami-Dade",
		"Population": "470914",
		"Area": "55.3 sq mi (143.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Miami Beach",
		"County": "Miami-Dade",
		"Population": "91718",
		"Area": "18.7 sq mi (48.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Miami Gardens",
		"County": "Miami-Dade",
		"Population": "113069",
		"Area": "20.0 sq mi (51.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Miami Lakes",
		"County": "Miami-Dade",
		"Population": "31628",
		"Area": "6.4 sq mi (16.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Miami Shores",
		"County": "Miami-Dade",
		"Population": "10562",
		"Area": "3.7 sq mi (9.7 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Miami Springs",
		"County": "Miami-Dade",
		"Population": "14315",
		"Area": "3.0 sq mi (7.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Micanopy",
		"County": "Alachua",
		"Population": "641",
		"Area": "1.0 sq mi (2.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Midway",
		"County": "Gadsden",
		"Population": "3194",
		"Area": "3.8 sq mi (9.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Milton",
		"County": "Santa Rosa",
		"Population": "10269",
		"Area": "4.6 sq mi (11.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Minneola",
		"County": "Lake",
		"Population": "12124",
		"Area": "3.3 sq mi (8.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Miramar",
		"County": "Broward",
		"Population": "140823",
		"Area": "31.0 sq mi (80.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Monticello",
		"County": "Jefferson",
		"Population": "2425",
		"Area": "3.4 sq mi (8.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Montverde",
		"County": "Lake",
		"Population": "1675",
		"Area": "1.8 sq mi (4.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Moore Haven",
		"County": "Glades",
		"Population": "1807",
		"Area": "1.2 sq mi (3.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Mount Dora",
		"County": "Lake",
		"Population": "14216",
		"Area": "5.7 sq mi (14.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Mulberry",
		"County": "Polk",
		"Population": "4192",
		"Area": "3.2 sq mi (8.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Naples",
		"County": "Collier",
		"Population": "22039",
		"Area": "14.4 sq mi (37.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Neptune Beach",
		"County": "Duval",
		"Population": "7297",
		"Area": "6.8 sq mi (17.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "New Port Richey",
		"County": "Pasco",
		"Population": "16494",
		"Area": "4.6 sq mi (11.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "New Smyrna Beach",
		"County": "Volusia",
		"Population": "27229",
		"Area": "30.8 sq mi (79.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Newberry",
		"County": "Alachua",
		"Population": "6115",
		"Area": "46.0 sq mi (119.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Niceville",
		"County": "Okaloosa",
		"Population": "15579",
		"Area": "11.3 sq mi (29.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Noma",
		"County": "Holmes",
		"Population": "204",
		"Area": "1.1 sq mi (2.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "North Bay Village",
		"County": "Miami-Dade",
		"Population": "8273",
		"Area": "0.8 sq mi (2.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "North Lauderdale",
		"County": "Broward",
		"Population": "44391",
		"Area": "3.9 sq mi (10.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "North Miami",
		"County": "Miami-Dade",
		"Population": "62996",
		"Area": "10.0 sq mi (25.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "North Miami Beach",
		"County": "Miami-Dade",
		"Population": "45887",
		"Area": "5.0 sq mi (13.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "North Palm Beach",
		"County": "Palm Beach",
		"Population": "13129",
		"Area": "5.8 sq mi (15.0 km2)",
		"Label": "Village"
	},
	{
		"Place name": "North Port",
		"County": "Sarasota",
		"Population": "68628",
		"Area": "75.6 sq mi (195.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "North Redington Beach",
		"County": "Pinellas",
		"Population": "1477",
		"Area": "1.0 sq mi (2.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Oak Hill",
		"County": "Volusia",
		"Population": "2183",
		"Area": "11.3 sq mi (29.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Oakland",
		"County": "Orange",
		"Population": "3087",
		"Area": "1.6 sq mi (4.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Oakland Park",
		"County": "Broward",
		"Population": "45339",
		"Area": "6.9 sq mi (17.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Ocala",
		"County": "Marion",
		"Population": "60429",
		"Area": "38.6 sq mi (100.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Ocean Breeze",
		"County": "Martin",
		"Population": "388",
		"Area": "0.2 sq mi (0.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Ocean Ridge",
		"County": "Palm Beach",
		"Population": "1956",
		"Area": "2.0 sq mi (5.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Ocoee",
		"County": "Orange",
		"Population": "47720",
		"Area": "14.0 sq mi (36.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Okeechobee",
		"County": "Okeechobee",
		"Population": "5731",
		"Area": "4.2 sq mi (10.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Oldsmar",
		"County": "Pinellas",
		"Population": "14841",
		"Area": "9.7 sq mi (25.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Opa-locka",
		"County": "Miami-Dade",
		"Population": "16356",
		"Area": "4.5 sq mi (11.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Orange City",
		"County": "Volusia",
		"Population": "11804",
		"Area": "6.2 sq mi (15.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Orange Park",
		"County": "Clay",
		"Population": "8809",
		"Area": "5.6 sq mi (14.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Orchid",
		"County": "Indian River",
		"Population": "452",
		"Area": "1.8 sq mi (4.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Orlando",
		"County": "Orange",
		"Population": "285713",
		"Area": "100.6 sq mi (261.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Ormond Beach",
		"County": "Volusia",
		"Population": "43475",
		"Area": "29.0 sq mi (75.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Otter Creek",
		"County": "Levy",
		"Population": "133",
		"Area": "1.5 sq mi (3.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Oviedo",
		"County": "Seminole",
		"Population": "41557",
		"Area": "15.4 sq mi (40.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Pahokee",
		"County": "Palm Beach",
		"Population": "6270",
		"Area": "5.4 sq mi (14.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Palatka",
		"County": "Putnam",
		"Population": "10465",
		"Area": "7.5 sq mi (19.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Palm Bay",
		"County": "Brevard",
		"Population": "114194",
		"Area": "66.8 sq mi (172.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Palm Beach",
		"County": "Palm Beach",
		"Population": "8802",
		"Area": "10.4 sq mi (27.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Palm Beach Gardens",
		"County": "Palm Beach",
		"Population": "56284",
		"Area": "55.3 sq mi (143.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Palm Beach Shores",
		"County": "Palm Beach",
		"Population": "1264",
		"Area": "0.4 sq mi (1.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Palm Coast",
		"County": "Flagler",
		"Population": "87607",
		"Area": "51.7 sq mi (133.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Palm Shores",
		"County": "Brevard",
		"Population": "1160",
		"Area": "0.5 sq mi (1.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Palm Springs",
		"County": "Palm Beach",
		"Population": "25061",
		"Area": "1.7 sq mi (4.3 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Palmetto",
		"County": "Manatee",
		"Population": "13717",
		"Area": "4.4 sq mi (11.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Palmetto Bay",
		"County": "Miami-Dade",
		"Population": "24589",
		"Area": "8.8 sq mi (22.6 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Panama City",
		"County": "Bay",
		"Population": "36908",
		"Area": "26.7 sq mi (69.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Panama City Beach",
		"County": "Bay",
		"Population": "13065",
		"Area": "7.0 sq mi (18.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Parker",
		"County": "Bay",
		"Population": "4584",
		"Area": "2.4 sq mi (6.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Parkland",
		"County": "Broward",
		"Population": "33631",
		"Area": "10.8 sq mi (27.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Paxton",
		"County": "Walton",
		"Population": "822",
		"Area": "4.0 sq mi (10.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Pembroke Park",
		"County": "Broward",
		"Population": "6730",
		"Area": "1.8 sq mi (4.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Pembroke Pines",
		"County": "Broward",
		"Population": "172374",
		"Area": "34.4 sq mi (89.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Penney Farms",
		"County": "Clay",
		"Population": "824",
		"Area": "1.4 sq mi (3.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Pensacola",
		"County": "Escambia",
		"Population": "52713",
		"Area": "39.7 sq mi (102.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Perry",
		"County": "Taylor",
		"Population": "6928",
		"Area": "9.3 sq mi (24.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Pierson",
		"County": "Volusia",
		"Population": "1890",
		"Area": "8.7 sq mi (22.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Pinecrest",
		"County": "Miami-Dade",
		"Population": "19591",
		"Area": "7.6 sq mi (19.6 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Pinellas Park",
		"County": "Pinellas",
		"Population": "53098",
		"Area": "14.9 sq mi (38.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Plant City",
		"County": "Hillsborough",
		"Population": "39156",
		"Area": "22.7 sq mi (58.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Plantation",
		"County": "Broward",
		"Population": "94288",
		"Area": "21.9 sq mi (56.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Polk City",
		"County": "Polk",
		"Population": "2422",
		"Area": "0.8 sq mi (2.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Pomona Park",
		"County": "Putnam",
		"Population": "916",
		"Area": "3.3 sq mi (8.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Pompano Beach",
		"County": "Broward",
		"Population": "111954",
		"Area": "25.8 sq mi (66.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Ponce de Leon",
		"County": "Holmes",
		"Population": "564",
		"Area": "5.0 sq mi (12.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Ponce Inlet",
		"County": "Volusia",
		"Population": "3282",
		"Area": "14.6 sq mi (38.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Port Orange",
		"County": "Volusia",
		"Population": "64252",
		"Area": "26.7 sq mi (69.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Port Richey",
		"County": "Pasco",
		"Population": "2869",
		"Area": "2.7 sq mi (7.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Port St. Joe",
		"County": "Gulf",
		"Population": "3562",
		"Area": "3.3 sq mi (8.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Port St. Lucie",
		"County": "St. Lucie",
		"Population": "195248",
		"Area": "76.7 sq mi (198.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Punta Gorda",
		"County": "Charlotte",
		"Population": "20057",
		"Area": "18.5 sq mi (47.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Quincy",
		"County": "Gadsden",
		"Population": "7235",
		"Area": "7.6 sq mi (19.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Raiford",
		"County": "Union",
		"Population": "236",
		"Area": "0.5 sq mi (1.4 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Reddick",
		"County": "Marion",
		"Population": "541",
		"Area": "1.2 sq mi (3.2 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Redington Beach",
		"County": "Pinellas",
		"Population": "1481",
		"Area": "1.3 sq mi (3.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Redington Shores",
		"County": "Pinellas",
		"Population": "2309",
		"Area": "1.2 sq mi (3.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Riviera Beach",
		"County": "Palm Beach",
		"Population": "34834",
		"Area": "9.8 sq mi (25.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Rockledge",
		"County": "Brevard",
		"Population": "27715",
		"Area": "12.2 sq mi (31.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Royal Palm Beach",
		"County": "Palm Beach",
		"Population": "40018",
		"Area": "10.1 sq mi (26.1 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Safety Harbor",
		"County": "Pinellas",
		"Population": "18031",
		"Area": "5.0 sq mi (13.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "San Antonio",
		"County": "Pasco",
		"Population": "1448",
		"Area": "1.2 sq mi (3.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sanford",
		"County": "Seminole",
		"Population": "60035",
		"Area": "22.6 sq mi (58.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sanibel",
		"County": "Lee",
		"Population": "7402",
		"Area": "33.2 sq mi (85.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sarasota",
		"County": "Sarasota",
		"Population": "57738",
		"Area": "25.9 sq mi (67.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Satellite Beach",
		"County": "Brevard",
		"Population": "11088",
		"Area": "3.4 sq mi (8.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sea Ranch Lakes",
		"County": "Broward",
		"Population": "618",
		"Area": "0.2 sq mi (0.6 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Sebastian",
		"County": "Indian River",
		"Population": "25719",
		"Area": "13.5 sq mi (35.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sebring",
		"County": "Highlands",
		"Population": "10937",
		"Area": "11.0 sq mi (28.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Seminole",
		"County": "Pinellas",
		"Population": "18866",
		"Area": "2.7 sq mi (7.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sewall's Point",
		"County": "Martin",
		"Population": "2216",
		"Area": "4.1 sq mi (10.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Shalimar",
		"County": "Okaloosa",
		"Population": "824",
		"Area": "0.3 sq mi (0.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Sneads",
		"County": "Jackson",
		"Population": "1798",
		"Area": "4.6 sq mi (12.0 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Sopchoppy",
		"County": "Wakulla",
		"Population": "482",
		"Area": "1.5 sq mi (3.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "South Bay",
		"County": "Palm Beach",
		"Population": "5185",
		"Area": "3.7 sq mi (9.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "South Daytona",
		"County": "Volusia",
		"Population": "13054",
		"Area": "4.9 sq mi (12.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "South Miami",
		"County": "Miami-Dade",
		"Population": "12219",
		"Area": "2.3 sq mi (6.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "South Palm Beach",
		"County": "Palm Beach",
		"Population": "1471",
		"Area": "0.3 sq mi (0.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "South Pasadena",
		"County": "Pinellas",
		"Population": "5117",
		"Area": "1.2 sq mi (3.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Southwest Ranches",
		"County": "Broward",
		"Population": "7981",
		"Area": "13.0 sq mi (33.7 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Springfield",
		"County": "Bay",
		"Population": "9452",
		"Area": "4.2 sq mi (10.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "St. Augustine",
		"County": "St. Johns",
		"Population": "14576",
		"Area": "10.7 sq mi (27.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "St. Augustine Beach",
		"County": "St. Johns",
		"Population": "7026",
		"Area": "1.9 sq mi (5.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "St. Cloud",
		"County": "Osceola",
		"Population": "54115",
		"Area": "9.2 sq mi (23.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "St. Leo",
		"County": "Pasco",
		"Population": "1376",
		"Area": "1.9 sq mi (4.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "St. Lucie Village",
		"County": "St. Lucie",
		"Population": "642",
		"Area": "0.8 sq mi (2.1 km2)",
		"Label": "Town"
	},
	{
		"Place name": "St. Marks",
		"County": "Wakulla",
		"Population": "319",
		"Area": "1.9 sq mi (5.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "St. Pete Beach",
		"County": "Pinellas",
		"Population": "9649",
		"Area": "19.8 sq mi (51.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "St. Petersburg",
		"County": "Pinellas",
		"Population": "265098",
		"Area": "132.6 sq mi (344.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Starke",
		"County": "Bradford",
		"Population": "5411",
		"Area": "6.7 sq mi (17.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Stuart",
		"County": "Martin",
		"Population": "16293",
		"Area": "8.5 sq mi (22.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sunny Isles Beach",
		"County": "Miami-Dade",
		"Population": "22295",
		"Area": "1.4 sq mi (3.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Sunrise",
		"County": "Broward",
		"Population": "95458",
		"Area": "18.4 sq mi (47.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Surfside",
		"County": "Miami-Dade",
		"Population": "5802",
		"Area": "1.0 sq mi (2.5 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Sweetwater",
		"County": "Miami-Dade",
		"Population": "21543",
		"Area": "0.8 sq mi (2.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Tallahassee # ",
		"County": "Leon",
		"Population": "193551",
		"Area": "103.1 sq mi (267.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Tamarac",
		"County": "Broward",
		"Population": "66054",
		"Area": "11.9 sq mi (30.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Tampa",
		"County": "Hillsborough",
		"Population": "392890",
		"Area": "170.6 sq mi (441.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Tarpon Springs",
		"County": "Pinellas",
		"Population": "25571",
		"Area": "16.8 sq mi (43.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Tavares",
		"County": "Lake",
		"Population": "17472",
		"Area": "7.5 sq mi (19.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "Temple Terrace",
		"County": "Hillsborough",
		"Population": "26471",
		"Area": "7.0 sq mi (18.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Tequesta",
		"County": "Palm Beach",
		"Population": "6133",
		"Area": "2.2 sq mi (5.7 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Titusville",
		"County": "Brevard",
		"Population": "46497",
		"Area": "26.0 sq mi (67.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Treasure Island",
		"County": "Pinellas",
		"Population": "6947",
		"Area": "5.3 sq mi (13.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Trenton",
		"County": "Gilchrist",
		"Population": "2125",
		"Area": "2.6 sq mi (6.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Umatilla",
		"County": "Lake",
		"Population": "3805",
		"Area": "3.0 sq mi (7.9 km2)",
		"Label": "City"
	},
	{
		"Place name": "Valparaiso",
		"County": "Okaloosa",
		"Population": "5195",
		"Area": "12.7 sq mi (33.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Venice",
		"County": "Sarasota",
		"Population": "23376",
		"Area": "9.6 sq mi (25.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Vernon",
		"County": "Washington",
		"Population": "690",
		"Area": "4.7 sq mi (12.2 km2)",
		"Label": "City"
	},
	{
		"Place name": "Vero Beach",
		"County": "Indian River",
		"Population": "17236",
		"Area": "12.9 sq mi (33.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Virginia Gardens",
		"County": "Miami-Dade",
		"Population": "2451",
		"Area": "0.3 sq mi (0.8 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Waldo",
		"County": "Alachua",
		"Population": "1023",
		"Area": "1.7 sq mi (4.5 km2)",
		"Label": "City"
	},
	{
		"Place name": "Wauchula",
		"County": "Hardee",
		"Population": "4895",
		"Area": "2.6 sq mi (6.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Wausau",
		"County": "Washington",
		"Population": "387",
		"Area": "1.1 sq mi (2.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Webster",
		"County": "Sumter",
		"Population": "1114",
		"Area": "1.3 sq mi (3.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Weeki Wachee",
		"County": "Hernando",
		"Population": "13",
		"Area": "1.0 sq mi (2.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Welaka",
		"County": "Putnam",
		"Population": "712",
		"Area": "1.4 sq mi (3.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Wellington",
		"County": "Palm Beach",
		"Population": "65200",
		"Area": "45.0 sq mi (116.6 km2)",
		"Label": "Village"
	},
	{
		"Place name": "Westlake",
		"County": "Palm Beach County",
		"Population": "137",
		"Area": "",
		"Label": "City"
	},
	{
		"Place name": "West Melbourne",
		"County": "Brevard",
		"Population": "23372",
		"Area": "7.8 sq mi (20.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "West Miami",
		"County": "Miami-Dade",
		"Population": "8052",
		"Area": "0.7 sq mi (1.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "West Palm Beach",
		"County": "Palm Beach",
		"Population": "111398",
		"Area": "58.2 sq mi (150.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "West Park",
		"County": "Broward",
		"Population": "15113",
		"Area": "2.1 sq mi (5.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Weston",
		"County": "Broward",
		"Population": "71210",
		"Area": "26.3 sq mi (68.1 km2)",
		"Label": "City"
	},
	{
		"Place name": "Westville",
		"County": "Holmes",
		"Population": "280",
		"Area": "7.5 sq mi (19.3 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Wewahitchka",
		"County": "Gulf",
		"Population": "2095",
		"Area": "7.4 sq mi (19.3 km2)",
		"Label": "City"
	},
	{
		"Place name": "White Springs",
		"County": "Hamilton",
		"Population": "767",
		"Area": "1.8 sq mi (4.8 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Wildwood",
		"County": "Sumter",
		"Population": "7024",
		"Area": "5.2 sq mi (13.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Williston",
		"County": "Levy",
		"Population": "2718",
		"Area": "6.1 sq mi (15.7 km2)",
		"Label": "City"
	},
	{
		"Place name": "Wilton Manors",
		"County": "Broward",
		"Population": "12797",
		"Area": "1.9 sq mi (5.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Windermere",
		"County": "Orange",
		"Population": "3509",
		"Area": "1.1 sq mi (2.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Winter Garden",
		"County": "Orange",
		"Population": "45266",
		"Area": "17.0 sq mi (44.0 km2)",
		"Label": "City"
	},
	{
		"Place name": "Winter Haven",
		"County": "Polk",
		"Population": "43020",
		"Area": "25.4 sq mi (65.8 km2)",
		"Label": "City"
	},
	{
		"Place name": "Winter Park",
		"County": "Orange",
		"Population": "31059",
		"Area": "8.7 sq mi (22.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Winter Springs",
		"County": "Seminole",
		"Population": "37321",
		"Area": "14.4 sq mi (37.6 km2)",
		"Label": "City"
	},
	{
		"Place name": "Worthington Springs",
		"County": "Union",
		"Population": "380",
		"Area": "0.4 sq mi (0.9 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Yankeetown",
		"County": "Levy",
		"Population": "519",
		"Area": "20.3 sq mi (52.6 km2)",
		"Label": "Town"
	},
	{
		"Place name": "Zephyrhills",
		"County": "Pasco",
		"Population": "15563",
		"Area": "6.4 sq mi (16.4 km2)",
		"Label": "City"
	},
	{
		"Place name": "Zolfo Springs",
		"County": "Hardee",
		"Population": "1803",
		"Area": "1.5 sq mi (3.9 km2)",
		"Label": "Town"
	}
];