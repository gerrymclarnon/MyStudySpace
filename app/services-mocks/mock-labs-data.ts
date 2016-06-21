/*
 Book.ed: http://www-test.book.is.ed.ac.uk/labs/filter/?nearby=true&empty=true&latitude=55.9441844&longitude=-3.1900258999999997
 LabMonitor: http://labmonitor.ucs.ed.ac.uk/myed/index.cfm?fuseaction=xml

Book.ed                                     LabMonitor
==================================          =========================================
 id: "PLKH_PLAB",                           => rid
 name: "Holland House - MicroLab",          NEW => name + buildingRoomName
 free: 29,                                  UNCHANGED
 total: 32,                                 UNCHANGED
 campus: "Accommodation Services",          => campusName
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
import {Lab} from "../models/lab";
export var Labs:Lab[] =
    [
        {
            buildingName: "Holland House",
            buildingRoomName: "MicroLab",
            latitude: 55.9379993681228900,
            longitude: -3.171857799999998,
            free: "16",
            total: "32",
            campusName: "Accommodation Services"
        },
        {
            buildingName: "Holland House",
            buildingRoomName: "Study Pods",
            latitude: 55.9379993681228900,
            longitude: -3.171857799999998,
            free: "4",
            total: "4",
            campusName: "Accommodation Services"
        },
        {
            buildingName: "Business School",
            buildingRoomName: "HUB RC",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "3",
            total: "19",
            campusName: "Business School"
        },
        {
            buildingName: "Business School",
            buildingRoomName: "MBA Suite",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "13",
            total: "13",
            campusName: "Business School"
        },
        {
            buildingName: "Business School",
            buildingRoomName: "Synd Rooms",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "16",
            total: "18",
            campusName: "Business School"
        },
        {
            buildingName: "Business School",
            buildingRoomName: "Teach Lab",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "39",
            total: "41",
            campusName: "Business School"
        },
        {
            buildingName: "Business School",
            buildingRoomName: "Teach Lab 2",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "18",
            total: "21",
            campusName: "Business School"
        },
        {
            buildingName: "Business School",
            buildingRoomName: "UG Lab",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "18",
            total: "19",
            campusName: "Business School"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "TBD",
            latitude: 55.9431078681228900,
            longitude: -3.1873118877410890,
            free: "15",
            total: "18",
            campusName: "Central"
        },
        {
            buildingName: "Appleton Tower",
            buildingRoomName: "Level 1 (Mezzanine)",
            longitude: -3.1870651245117188,
            latitude: 55.9444416917442200,
            free: "6",
            total: "16",
            campusName: "Central"
        },
        {
            buildingName: "Appleton Tower",
            buildingRoomName: "Foyer (Central Cafe)",
            longitude: -3.1870651245117188,
            latitude: 55.9444416917442200,
            free: "11",
            total: "30",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Cafe",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "13",
            total: "28",
            campusName: "Central"
        },
        {
            buildingName: "Teviot House",
            buildingRoomName: "Cafe",
            longitude: -3.1889533996582030,
            latitude: 55.9449583858474800,
            free: "5",
            total: "6",
            campusName: "Central"
        },
        {
            buildingName: "Hugh Robson",
            buildingRoomName: "Basement A",
            longitude: -3.1899189949035645,
            latitude: 55.9442794724061900,
            free: "40",
            total: "65",
            campusName: "Central"
        },
        {
            buildingName: "Hugh Robson",
            buildingRoomName: "Basement B",
            longitude: -3.1899189949035645,
            latitude: 55.9442794724061900,
            free: "76",
            total: "139",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Quick Use",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "2",
            total: "30",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Cafe",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "4",
            total: "14",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Level 1",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "5",
            total: "84",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Level 2",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "13",
            total: "156",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Level 3",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "34",
            total: "82",
            campusName: "Central"
        },
        {
            buildingName: "Main Library",
            buildingRoomName: "Level 4",
            longitude: -3.1888461112976074,
            latitude: 55.9426872835810500,
            free: "57",
            total: "152",
            campusName: "Central"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "EBVC Room F33 (VET3)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "6",
            total: "7",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "EBVC Room G02 (VG02)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "35",
            total: "36",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "EBVC Room G03 (VG03)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "10",
            total: "10",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "EBVC Study Landscape (V129)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "23",
            total: "24",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "EBVC Teaching Lab 1 (VET1)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "27",
            total: "27",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "EBVC Teaching Lab 2 (VET2)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "38",
            total: "38",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "Vet RDVS",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "0",
            total: "32",
            campusName: "Easter Bush"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "VET VETE (VETE)",
            longitude: -3.2010340690612793,
            latitude: 55.8658360390777300,
            free: "3",
            total: "3",
            campusName: "Easter Bush"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "TBD",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "15",
            total: "18",
            campusName: "ECA Alison House"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "1.08",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "9",
            total: "10",
            campusName: "ECA Alison House"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "1.17",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "4",
            total: "6",
            campusName: "ECA Alison House"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "Atrium",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "22",
            total: "24",
            campusName: "ECA Alison House"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "G04",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "6",
            total: "6",
            campusName: "ECA Alison House"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "TBD",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "15",
            total: "18",
            campusName: "ECA Central"
        },
        {
            buildingName: "Alison House",
            buildingRoomName: "Atrium",
            longitude: -3.1863999366760254,
            latitude: 55.9461119105979900,
            free: "22",
            total: "24",
            campusName: "ECA Central"
        },
        {
            buildingName: "Evolution",
            buildingRoomName: "2.14",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "10",
            total: "19",
            campusName: "ECA Central"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "P7",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "14",
            total: "16",
            campusName: "ECA Central"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q15",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "11",
            total: "14",
            campusName: "ECA Central"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q18",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "17",
            total: "19",
            campusName: "ECA Central"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q2",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "5",
            total: "10",
            campusName: "ECA Central"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q3",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            total: "21",
            campusName: "ECA Central"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q4",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            total: "16",
            campusName: "ECA Central"
        },
        {
            buildingName: "Minto House",
            buildingRoomName: "IT Studio",
            longitude: -3.1890824587026145,
            latitude: 55.9477839098566900,
            free: "7",
            total: "45",
            campusName: "ECA Central"
        },
        {
            buildingName: "Evolution",
            buildingRoomName: "2.14",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "10",
            total: "19",
            campusName: "ECA Evolution House"
        },
        {
            buildingName: "Evolution",
            buildingRoomName: "5.09",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "6",
            total: "8",
            campusName: "ECA Evolution House"
        },
        {
            buildingName: "Evolution",
            buildingRoomName: "Graphics Design Lab",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "4",
            total: "4",
            campusName: "ECA Evolution House"
        },
        {
            buildingName: "Evolution",
            buildingRoomName: "Illustration Lab",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "2",
            total: "5",
            campusName: "ECA Evolution House"
        },
        {
            buildingName: "Evolution",
            buildingRoomName: "Product Design Lab",
            longitude: -3.2005995512008667,
            latitude: 55.9460736605762700,
            free: "2",
            total: "4",
            campusName: "ECA Evolution House"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "P7",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "14",
            total: "16",
            campusName: "ECA Hunter Building"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q15",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "11",
            total: "14",
            campusName: "ECA Hunter Building"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q18",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "17",
            total: "19",
            campusName: "ECA Hunter Building"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q2",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "5",
            total: "10",
            campusName: "ECA Hunter Building"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q3",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            total: "21",
            campusName: "ECA Hunter Building"
        },
        {
            buildingName: "Hunter Building",
            buildingRoomName: "Q4",
            longitude: -3.1980729103088380,
            latitude: 55.9451282124570850,
            free: "7",
            total: "16",
            campusName: "ECA Hunter Building"
        },
        {
            buildingName: "High School Yards",
            buildingRoomName: "Lab",
            longitude: -3.1840935499349143,
            latitude: 55.9486009337296800,
            free: "18",
            total: "61",
            campusName: "Holyrood and High School Yards"
        },
        {
            buildingName: "Moray House",
            buildingRoomName: "Ground Floor",
            longitude: -3.1840935499349143,
            latitude: 55.9486009337296800,
            free: "19",
            total: "32",
            campusName: "Holyrood and High School Yards"
        },
        {
            buildingName: "Moray House",
            buildingRoomName: "Library Level 1",
            longitude: -3.1840935499349143,
            latitude: 55.9486009337296800,
            free: "11",
            total: "27",
            campusName: "Holyrood and High School Yards"
        },
        {
            buildingName: "JCMB",
            buildingRoomName: "Cafe",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "18",
            total: "25",
            campusName: "KB Labs"
        },
        {
            buildingName: "Murray Library Ground",
            buildingRoomName: "Cafe",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "6",
            total: "8",
            campusName: "KB Labs"
        },
        {
            buildingName: "JCMB",
            buildingRoomName: "L and T Cluster",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "20",
            total: "42",
            campusName: "KB Labs"
        },
        {
            buildingName: "JCMB",
            buildingRoomName: "L and T Cluster",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "3",
            total: "5",
            campusName: "KB Labs"
        },
        {
            buildingName: "KB Centre",
            buildingRoomName: "Level 2 - Side 20 Seat",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "11",
            total: "20",
            campusName: "KB Labs"
        },
        {
            buildingName: "KB Centre",
            buildingRoomName: "Level 2 - Side 25 Seat",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "14",
            total: "25",
            campusName: "KB Labs"
        },
        {
            buildingName: "KB Centre",
            buildingRoomName: "Level 3",
            longitude: -3.1748771667480470,
            latitude: 55.9235759115671200,
            free: "65",
            total: "98",
            campusName: "KB Labs"
        },
        {
            buildingName: "Mary Bruck",
            buildingRoomName: "Ground Floor",
            longitude: -3.1730116009930500,
            latitude: 55.9231925860886040,
            free: "0",
            total: "12",
            campusName: "KB Labs"
        },
        {
            buildingName: "Mary Bruck",
            buildingRoomName: "Level 1",
            longitude: -3.1730116009930500,
            latitude: 55.9231925860886040,
            free: "26",
            total: "60",
            campusName: "KB Labs"
        },
        {
            buildingName: "Murray Library",
            buildingRoomName: "Level 1",
            longitude: -3.1750380992889404,
            latitude: 55.9229507263602100,
            free: "4",
            total: "13",
            campusName: "KB Labs"
        },
        {
            buildingName: "Murray Library",
            buildingRoomName: "Level 1 - Quick Use",
            longitude: -3.1750380992889404,
            latitude: 55.9229507263602100,
            free: "8",
            total: "8",
            campusName: "KB Labs"
        },
        {
            buildingName: "Murray Library",
            buildingRoomName: "Level 2",
            longitude: -3.1750380992889404,
            latitude: 55.9229507263602100,
            free: "3",
            total: "11",
            campusName: "KB Labs"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "CB Library (LFLL)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "37",
            total: "47",
            campusName: "Little France"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "CB Microlab 1 (LFLN)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "18",
            total: "18",
            campusName: "Little France"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "CB Microlab 2 (LFLP)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "14",
            total: "14",
            campusName: "Little France"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "CB Microlab 4 (LFLM)",
            longitude: -3.1368756294250490,
            latitude: 55.9220181396980500,
            free: "3",
            total: "4",
            campusName: "Little France"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "WGH MEC Lab 1 (WGHA)",
            longitude: -3.2348728179931640,
            latitude: 55.9620294457321560,
            free: "17",
            total: "24",
            campusName: "Western General"
        },
        {
            buildingName: "MVM",
            buildingRoomName: "WGH MEC Lab 2 (WGHB)",
            longitude: -3.2348728179931640,
            latitude: 55.9620294457321560,
            free: "15",
            total: "18",
            campusName: "Western General"
        },
        {
            buildingName: "Western General",
            buildingRoomName: "Library",
            longitude: -3.2348728179931640,
            latitude: 55.9620294457321560,
            free: "8",
            total: "8",
            campusName: "Western General"
        }
    ];

