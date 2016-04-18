/*
 Book.ed: http://www-test.book.is.ed.ac.uk/labs/filter/?nearby=true&empty=true&latitude=55.9441844&longitude=-3.1900258999999997
 LabMonitor: http://labmonitor.ucs.ed.ac.uk/myed/index.cfm?fuseaction=xml

Book.ed                                     LabMonitor
==================================          =========================================
 id: "PLKH_PLAB",                           => rid
 name: "Holland House - MicroLab",          NEW => name + building_room_name
 free: 29,                                  UNCHANGED
 seats: 32,                                 UNCHANGED
 campus: "Accommodation Services",          => group
 ratio: 0.906,
 longitude: -3.169087,                      NEW
 latitude: 55.938027,                       NEW
 weekdayOpen: null,
 weekdayClosed: null,
 saturdayOpen: null,
 saturdayClosed: null,
 sundayOpen: null,
 sundayClosed: null
 */
exports.Labs =
    [
        {
            building_name: "Holland House",
            building_room_name: "MicroLab",
            latitude: 55.9379993,
            longitude: -3.1718578,
            free: "16",
            seats: "32",
            location: "Accommodation Services Holland House - MicroLab",
            rid: "PLKH_PLAB",
            group: "Accommodation Services"
        },
        {
            building_name: "Holland House",
            building_room_name: "Study Pods",
            latitude: 55.9379993,
            longitude: -3.1718578,
            free: "4",
            seats: "4",
            location: "Accommodation Services Holland House - Study Pods",
            rid: "PLKH_SPOD",
            group: "Accommodation Services"
        },
        {
            building_name: "Business School",
            building_room_name: "HUB RC",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "3",
            seats: "19",
            location: "Business School Business School - HUB RC",
            rid: "HUB_UEBS",
            group: "Business School"
        },
        {
            building_name: "Business School",
            building_room_name: "MBA Suite",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "13",
            seats: "13",
            location: "Business School Business School - MBA Suite",
            rid: "17BP_UEBS",
            group: "Business School"
        },
        {
            building_name: "Business School",
            building_room_name: "Synd Rooms",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "16",
            seats: "18",
            location: "Business School Business School - Synd Rooms",
            rid: "SYND_UEBS",
            group: "Business School"
        },
        {
            building_name: "Business School",
            building_room_name: "Teach Lab",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "39",
            seats: "41",
            location: "Business School Business School - Teach Lab",
            rid: "TLAB_UEBS",
            group: "Business School"
        },
        {
            building_name: "Business School",
            building_room_name: "Teach Lab 2",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "18",
            seats: "21",
            location: "Business School Business School - Teach Lab 2",
            rid: "TLAB2_UEBS",
            group: "Business School"
        },
        {
            building_name: "Business School",
            building_room_name: "UG Lab",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "18",
            seats: "19",
            location: "Business School Business School - UG Lab",
            rid: "UGLAB_UEBS",
            group: "Business School"
        },
        {
            building_name: "Alison House",
            building_room_name: "TBD",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "15",
            seats: "18",
            location: "Central Alison House",
            rid: "ALHS_PLAB",
            group: "Central"
        },
        {
            building_name: "Appleton Tower",
            building_room_name: "Level 1 (Mezzanine)",
            longitude: -3.1870651245117188,
            latitude: 55.9444416917442200,
            free: "6",
            seats: "16",
            location: "Central Appleton Tower Level 1 (Mezzanine)",
            rid: "ATL1_PLAB",
            group: "Central"
        },
        {
            building_name: "Appleton Tower",
            building_room_name: "Foyer (Central Cafe)",
            longitude: -3.1870651245117188,
            latitude: 55.9444416917442200,
            free: "11",
            seats: "30",
            location: "Central Cafe - Appleton Tower Foyer",
            rid: "ATL0_CAFE",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Cafe",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "13",
            seats: "28",
            location: "Central Cafe - Main Library",
            rid: "MLB0_CAFE",
            group: "Central"
        },
        {
            building_name: "Teviot House",
            building_room_name: "Cafe",
            longitude: -3.1889533996582030,
            latitude: 55.9449583858474800,
            free: "5",
            seats: "6",
            location: "Central Cafe - Teviot House",
            rid: "TEVH_CAFE",
            group: "Central"
        },
        {
            building_name: "Hugh Robson",
            building_room_name: "Basement A",
            longitude: -3.1899189949035645,
            latitude: 55.9442794724061900,
            free: "40",
            seats: "65",
            location: "Central Hugh Robson Bldg Basement A",
            rid: "HRBA_PLAB",
            group: "Central"
        },
        {
            building_name: "Hugh Robson",
            building_room_name: "Basement B",
            longitude: -3.1899189949035645,
            latitude: 55.9442794724061900,
            free: "76",
            seats: "139",
            location: "Central Hugh Robson Bldg Basement B",
            rid: "HRBB_PLAB",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Quick Use",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "2",
            seats: "30",
            location: "Central Main Library Ground",
            rid: "mlb0_plab",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Cafe",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "4",
            seats: "14",
            location: "Central Main Library Ground - Quick Use",
            rid: "MLB0_QUSE",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Level 1",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "5",
            seats: "84",
            location: "Central Main Library Level 1",
            rid: "MLB1_PLAB",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Level 2",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "13",
            seats: "156",
            location: "Central Main Library Level 2",
            rid: "MLB2_PLAB",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Level 3",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "34",
            seats: "82",
            location: "Central Main Library Level 3",
            rid: "MLB3_PLAB",
            group: "Central"
        },
        {
            building_name: "Main Library",
            building_room_name: "Level 4",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "57",
            seats: "152",
            location: "Central Main Library Level 4",
            rid: "MLB4_PLAB",
            group: "Central"
        },
        {
            building_name: "MVM",
            building_room_name: "EBVC Room F33 (VET3)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "6",
            seats: "7",
            location: "Easter Bush MVM - EBVC Room F33 (VET3)",
            rid: "VET3_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "EBVC Room G02 (VG02)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "35",
            seats: "36",
            location: "Easter Bush MVM - EBVC Room G02 (VG02)",
            rid: "VG02_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "EBVC Room G03 (VG03)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "10",
            seats: "10",
            location: "Easter Bush MVM - EBVC Room G03 (VG03)",
            rid: "VG03_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "EBVC Study Landscape (V129)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "23",
            seats: "24",
            location: "Easter Bush MVM - EBVC Study Landscape (V129)",
            rid: "V129_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "EBVC Teaching Lab 1 (VET1)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "27",
            seats: "27",
            location: "Easter Bush MVM - EBVC Teaching Lab 1 (VET1)",
            rid: "VET1_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "EBVC Teaching Lab 2 (VET2)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "38",
            seats: "38",
            location: "Easter Bush MVM - EBVC Teaching Lab 2 (VET2)",
            rid: "VET2_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "Vet RDVS",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "0",
            seats: "32",
            location: "Easter Bush MVM - Vet RDVS",
            rid: "RDSVS_VET",
            group: "Easter Bush"
        },
        {
            building_name: "MVM",
            building_room_name: "VET VETE (VETE)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "3",
            seats: "3",
            location: "Easter Bush MVM -VET VETE (VETE)",
            rid: "VETE_MVM",
            group: "Easter Bush"
        },
        {
            building_name: "Alison House",
            building_room_name: "TBD",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "15",
            seats: "18",
            location: "ECA Alison House Alison House",
            rid: "ALHS_PLAB",
            group: "ECA Alison House"
        },
        {
            building_name: "Alison House",
            building_room_name: "1.08",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "9",
            seats: "10",
            location: "ECA Alison House ECA - Alison House 1.08",
            rid: "ALS108_ECA",
            group: "ECA Alison House"
        },
        {
            building_name: "Alison House",
            building_room_name: "1.17",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "4",
            seats: "6",
            location: "ECA Alison House ECA - Alison House 1.17",
            rid: "ALS117_ECA",
            group: "ECA Alison House"
        },
        {
            building_name: "Alison House",
            building_room_name: "Atrium",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "22",
            seats: "24",
            location: "ECA Alison House ECA - Alison House Atrium",
            rid: "ALSATR_ECA",
            group: "ECA Alison House"
        },
        {
            building_name: "Alison House",
            building_room_name: "G04",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "6",
            seats: "6",
            location: "ECA Alison House ECA - Alison House G04",
            rid: "ALSG04_ECA",
            group: "ECA Alison House"
        },
        {
            building_name: "Alison House",
            building_room_name: "TBD",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "15",
            seats: "18",
            location: "ECA Central Alison House",
            rid: "ALHS_PLAB",
            group: "ECA Central"
        },
        {
            building_name: "Alison House",
            building_room_name: "Atrium",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "22",
            seats: "24",
            location: "ECA Central ECA - Alison House Atrium",
            rid: "ALSATR_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Evolution",
            building_room_name: "2.14",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "10",
            seats: "19",
            location: "ECA Central ECA - Evolution 2.14",
            rid: "EVO214_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "P7",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "14",
            seats: "16",
            location: "ECA Central ECA - Hunter Building P7",
            rid: "HBDP7_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q15",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "11",
            seats: "14",
            location: "ECA Central ECA - Hunter Building Q15",
            rid: "HBDQ15_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q18",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "17",
            seats: "19",
            location: "ECA Central ECA - Hunter Building Q18",
            rid: "HBDQ18_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q2",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "5",
            seats: "10",
            location: "ECA Central ECA - Hunter Building Q2",
            rid: "HBDQ2_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q3",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            seats: "21",
            location: "ECA Central ECA - Hunter Building Q3",
            rid: "HBDQ3_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q4",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            seats: "16",
            location: "ECA Central ECA - Hunter Building Q4",
            rid: "HBDQ4_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Minto House",
            building_room_name: "IT Studio",
            longitude: -3.1890824587026145,
            latitude: 55.9477839098566900,
            free: "7",
            seats: "45",
            location: "ECA Central ECA - Minto House IT Studio",
            rid: "MNT208_ECA",
            group: "ECA Central"
        },
        {
            building_name: "Evolution",
            building_room_name: "2.14",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "10",
            seats: "19",
            location: "ECA Evolution House ECA - Evolution 2.14",
            rid: "EVO214_ECA",
            group: "ECA Evolution House"
        },
        {
            building_name: "Evolution",
            building_room_name: "5.09",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "6",
            seats: "8",
            location: "ECA Evolution House ECA - Evolution 5.09",
            rid: "EVO509_ECA",
            group: "ECA Evolution House"
        },
        {
            building_name: "Evolution",
            building_room_name: "Graphics Design Lab",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "4",
            seats: "4",
            location: "ECA Evolution House ECA - Evolution Graphics Design Lab",
            rid: "EVOGPH_ECA",
            group: "ECA Evolution House"
        },
        {
            building_name: "Evolution",
            building_room_name: "Illustration Lab",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "2",
            seats: "5",
            location: "ECA Evolution House ECA - Evolution Illustration Lab",
            rid: "EVOILL_ECA",
            group: "ECA Evolution House"
        },
        {
            building_name: "Evolution",
            building_room_name: "Product Design Lab",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "2",
            seats: "4",
            location: "ECA Evolution House ECA - Evolution Product Design Lab",
            rid: "EVOPRD_ECA",
            group: "ECA Evolution House"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "P7",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "14",
            seats: "16",
            location: "ECA Hunter Building ECA - Hunter Building P7",
            rid: "HBDP7_ECA",
            group: "ECA Hunter Building"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q15",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "11",
            seats: "14",
            location: "ECA Hunter Building ECA - Hunter Building Q15",
            rid: "HBDQ15_ECA",
            group: "ECA Hunter Building"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q18",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "17",
            seats: "19",
            location: "ECA Hunter Building ECA - Hunter Building Q18",
            rid: "HBDQ18_ECA",
            group: "ECA Hunter Building"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q2",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "5",
            seats: "10",
            location: "ECA Hunter Building ECA - Hunter Building Q2",
            rid: "HBDQ2_ECA",
            group: "ECA Hunter Building"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q3",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            seats: "21",
            location: "ECA Hunter Building ECA - Hunter Building Q3",
            rid: "HBDQ3_ECA",
            group: "ECA Hunter Building"
        },
        {
            building_name: "Hunter Building",
            building_room_name: "Q4",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            seats: "16",
            location: "ECA Hunter Building ECA - Hunter Building Q4",
            rid: "HBDQ4_ECA",
            group: "ECA Hunter Building"
        },
        {
            building_name: "High School Yards",
            building_room_name: "Lab",
            longitude: -3.1840935499349143,
            latitude: 55.9486009337296800,
            free: "18",
            seats: "61",
            location: "Holyrood and High School Yards High School Yards Lab",
            rid: "HSY0_PLAB",
            group: "Holyrood and High School Yards"
        },
        {
            building_name: "Moray House",
            building_room_name: "Ground Floor",
            longitude: -3.1840935499349143,
            latitude: 55.9486009337296800,
            free: "19",
            seats: "32",
            location: "Holyrood and High School Yards Moray House Library Ground Floor",
            rid: "MHL0_PLAB",
            group: "Holyrood and High School Yards"
        },
        {
            building_name: "Moray House",
            building_room_name: "Library Level 1",
            longitude: -3.1840935499349143,
            latitude: 55.9486009337296800,
            free: "11",
            seats: "27",
            location: "Holyrood and High School Yards Moray House Library Level 1",
            rid: "MHL1_PLAB",
            group: "Holyrood and High School Yards"
        },
        {
            building_name: "JCMB",
            building_room_name: "Cafe",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "18",
            seats: "25",
            location: "KB Labs Cafe - JCMB",
            rid: "JCMB_CAFE",
            group: "KB Labs"
        },
        {
            building_name: "Murray Library Ground",
            building_room_name: "Cafe",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "6",
            seats: "8",
            location: "KB Labs Cafe - Murray Library Ground",
            rid: "KBL0_CAFE",
            group: "KB Labs"
        },
        {
            building_name: "JCMB",
            building_room_name: "L and T Cluster",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "20",
            seats: "42",
            location: "KB Labs JCMB L and T Cluster",
            rid: "JCMB_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "JCMB",
            building_room_name: "L and T Cluster",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "3",
            seats: "5",
            location: "KB Labs KB Centre Level 1",
            rid: "KBC1_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "KB Centre",
            building_room_name: "Level 2 - Side 20 Seat",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "11",
            seats: "20",
            location: "KB Labs KB Centre Level 2 - Side 20 Seat",
            rid: "KB2B_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "KB Centre",
            building_room_name: "Level 2 - Side 25 Seat",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "14",
            seats: "25",
            location: "KB Labs KB Centre Level 2 - Side 25 Seat",
            rid: "KB2C_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "KB Centre",
            building_room_name: "Level 3",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "65",
            seats: "98",
            location: "KB Labs KB Centre Level 3",
            rid: "KBC3_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "Mary Bruck",
            building_room_name: "Ground Floor",
            longitude: -3.1730116009930500,
            latitude: 55.9231925860886040,
            free: "0",
            seats: "12",
            location: "KB Labs Mary Bruck Ground Floor",
            rid: "BRK0_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "Mary Bruck",
            building_room_name: "Level 1",
            longitude: -3.1730116009930500,
            latitude: 55.9231925860886040,
            free: "26",
            seats: "60",
            location: "KB Labs Mary Bruck Level 1",
            rid: "BRK1_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "Murray Library",
            building_room_name: "Level 1",
            longitude: -3.1750380992889404,
            latitude: 55.9229507263602100,
            free: "4",
            seats: "13",
            location: "KB Labs Murray Library Level 1",
            rid: "KBL1_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "Murray Library",
            building_room_name: "Level 1 - Quick Use",
            longitude: -3.1750380992889404,
            latitude: 55.9229507263602100,
            free: "8",
            seats: "8",
            location: "KB Labs Murray Library Level 1 - Quick Use",
            rid: "KBL1_QUSE",
            group: "KB Labs"
        },
        {
            building_name: "Murray Library",
            building_room_name: "Level 2",
            longitude: -3.1750380992889404,
            latitude: 55.9229507263602100,
            free: "3",
            seats: "11",
            location: "KB Labs Murray Library Level 2",
            rid: "KBL2_PLAB",
            group: "KB Labs"
        },
        {
            building_name: "MVM",
            building_room_name: "CB Library (LFLL)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "37",
            seats: "47",
            location: "Little France MVM - CB Library (LFLL)",
            rid: "LFLL_MVM",
            group: "Little France"
        },
        {
            building_name: "MVM",
            building_room_name: "CB Microlab 1 (LFLN)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "18",
            seats: "18",
            location: "Little France MVM - CB Microlab 1 (LFLN)",
            rid: "LFLN_MVM",
            group: "Little France"
        },
        {
            building_name: "MVM",
            building_room_name: "CB Microlab 2 (LFLP)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "14",
            seats: "14",
            location: "Little France MVM - CB Microlab 2 (LFLP)",
            rid: "LFLP_MVM",
            group: "Little France"
        },
        {
            building_name: "MVM",
            building_room_name: "CB Microlab 4 (LFLM)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "3",
            seats: "4",
            location: "Little France MVM - CB Microlab 4 (LFLM)",
            rid: "LFLM_MVM",
            group: "Little France"
        },
        {
            building_name: "MVM",
            building_room_name: "WGH MEC Lab 1 (WGHA)",
            longitude: -3.2348728179931640,
            latitude: 55.9620294457321560,
            free: "17",
            seats: "24",
            location: "Western General MVM - WGH MEC Lab 1 (WGHA)",
            rid: "WGHA_MVM",
            group: "Western General"
        },
        {
            building_name: "MVM",
            building_room_name: "WGH MEC Lab 2 (WGHB)",
            longitude: -3.2348728179931640,
            latitude: 55.9620294457321560,
            free: "15",
            seats: "18",
            location: "Western General MVM - WGH MEC Lab 2 (WGHB)",
            rid: "WGHB_MVM",
            group: "Western General"
        },
        {
            building_name: "Western General",
            building_room_name: "Library",
            longitude: -3.2348728179931640,
            latitude: 55.9620294457321560,
            free: "8",
            seats: "8",
            location: "Western General Western General Library",
            rid: "WGHL_PLAB",
            group: "Western General"
        }        
    ];

