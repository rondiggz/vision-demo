export interface Mark {
  id: string;
  name: string;
  station: string;
  category: "maintenance" | "marketing";
  description: string;
  content: {
    photos: string[];
    videos: string[];
    documents: string[];
  };
  // Navigation fields
  position?: { x: number; y: number; z: number };
  rotation?: { x: number; y: number };
  normal?: { x: number; y: number; z: number };
  sweepId?: string;
  floorId?: string;
  deeplink?: string; // Full Matterport deeplink URL
}

export const MARKS: Mark[] = [
  // 🔧 MAINTENANCE (5)
  {
    id: "airprep",
    name: "G05 Air Prep Assembly",
    station: "Air Prep",
    category: "maintenance",
    description: `The air prep station is where the customer will connect their factory air supply into the G05. Mikron's safety controller is constantly monitoring the conditions of the G05 machine and will disable air flow if specific safety conditions are triggered. In some safety conditions, the G05 will automatically lower air pressure so that technical and operations staff can troubleshoot issues that may be harmful or difficult if held under full air pressure. Different safety conditions are used to define the color of air line to be used in various parts of the building process, allowing for a higher range of flexibility in the troubleshooting process.`,
    content: {
      photos: [
        "/media/airprep/image1.png",
        "/media/airprep/image2.png",
        "/media/airprep/image3.png",
      ],
      videos: [],
      documents: [],
    },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&cloudEdit=1&ss=27&sr=-.67,-.7",
  },

  {
    id: "conveyor",
    name: "Conveyor Maintenance",
    station: "Conveyor",
    category: "maintenance",
    description: "",
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&cloudEdit=1&ss=15&sr=-2.64,.13",
  },

  {
    id: "lockingpins",
    name: "Locking Pins",
    station: "Locking Pins",
    category: "maintenance",
    description: "",
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&cloudEdit=1&ss=23&sr=-1.33,1.11",
  },

  {
    id: "pallet",
    name: "Learn about Pallets",
    station: "Pallet",
    category: "maintenance",
    description: `Pallets are used in the Mikron assembly process as the base in which all customer devices are built upon. There are 4 standard sizes of pallets used for the assembly processes, depending on the size and complexity of customer components. In some instances, more than one part can be assembled on a single pallet, allowing a higher volume of product to be manufactured.

You might consider the Mikron pallet as the foundation of a house, where the Mikron assembly process then builds houses on top of that foundation, step-by-step.`,
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&cloudEdit=1&ss=7&sr=-.2,.6",
  },

  {
    id: "minicelloperator",
    name: "MiniCell Operator",
    station: "Minicell Operator",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&cloudEdit=1&ss=50&sr=-1.69,-1.22",
  },

  // 📘 MARKETING (21)
  {
    id: "hmi",
    name: "HMI",
    station: "HMI",
    category: "maintenance",
    description: "",
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=-1.65,0.18&ss=22",
  },

  {
    id: "minicelloverview",
    name: "MiniCell Overview",
    station: "Minicell Overview",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=0.45,-0.10&ss=5",
  },

  {
    id: "maiaoverview",
    name: "MAIA Overview",
    station: "MAIA Overview",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=-2.25,0.20&ss=28",
  },

  {
    id: "maiapallet",
    name: "MAIA Pallet",
    station: "MAIA Pallet",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "maiatooling",
    name: "MAIA Tooling",
    station: "MAIA Tooling",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "showcase",
    name: "Showcase",
    station: "Showcase",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  // 📘 STATIONS 1–16
  {
    id: "station1",
    name: "Station #1 Type: Inspection",
    station: "Station 1",
    category: "marketing",
    description: `Base Module Makeup: Stationary Module
Station Function: The upper section of station 1 contains a Cognex inspection camera. The camera may have inspection criteria that solves whether incoming pallets are empty, or have components already set into the pallet.

The front of the station is actually considered the "lower" part of the station (mainly because all wiring and pneumatics are connected below the machine). This "lower" part of station 1 has fiber optic sensors which are used in conjunction with the camera to detect incoming part presence.`,
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=1.85,0.12&ss=10",
  },

  {
    id: "station2",
    name: "Station #2 Type: Empty / Open",
    station: "Station 2",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station3",
    name: "Station #3 Type: Auto Injector",
    station: "Station 3",
    category: "marketing",
    description: `Base Module makeup: MV120 (Physical cam-driven vertical motion module 120mm wide)
Station Function: This station has a servo motor control combined with pneumatics to be used in part of the auto-injector assembly process.`,
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=0.75,0.08&ss=14",
  },

  {
    id: "station4",
    name: "Station #4 Type: Pick and Place",
    station: "Station 4",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)
Station Function: Grabs then inserts a part into the assembly.`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station5",
    name: "Station #5 Type: Inspection",
    station: "Station 5",
    category: "marketing",
    description: `Base Module makeup: Cognex camera vision inspection
Station Function: These front and rear mounted cameras will validate a specific part is installed and is fixed at the appropriate heights/depth.`,
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=-0.35,0.15&ss=16",
  },

  {
    id: "station6",
    name: "Station #6 Type: Empty / Open",
    station: "Station 6",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station7",
    name: "Station #7 Type: Pick and Place",
    station: "Station 7",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)
Station Function: Grab a part then place it.`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station8",
    name: "Station #8 Type: Pick and Place",
    station: "Station 8",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)
Station Function: (need to investigate this almost looks like 2 60mm pick and place units.)`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station9",
    name: "Station #9 Type: Pick and Place",
    station: "Station 9",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station10",
    name: "Station #10 Type: Inspection",
    station: "Station 10",
    category: "marketing",
    description: `Base Module makeup: MV60 (Cam driven vertical motion module - 60mm wide)
Station Function: Checks height of a part with an LVDT sensor.`,
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=-1.98,0.10&ss=20",
  },

  {
    id: "station11",
    name: "Station #11 Type: Pick and Place",
    station: "Station 11",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station12",
    name: "Station #12 Type: Pick and Place",
    station: "Station 12",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station13",
    name: "Station #13",
    station: "Station 13",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station14",
    name: "Station #14 Type: Empty",
    station: "Station 14",
    category: "marketing",
    description: "",
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station15",
    name: "Station #15 Type: Inspection",
    station: "Station 15",
    category: "marketing",
    description: `Base Module makeup: Stationary
Station Function: Final vision inspection of the build`,
    content: { photos: [], videos: [], documents: [] },
  },

  {
    id: "station16",
    name: "Station #16 Type: Pick and Place",
    station: "Station 16",
    category: "marketing",
    description: `Base Module makeup: PnP120 (Physical cam-driven pick-and-place motion module 120mm wide)
Station Function: Reject - any bad parts detected in the build process are dumped here.`,
    content: { photos: [], videos: [], documents: [] },
    deeplink: "https://my.matterport.com/show/?m=BGfbBBXhrZf&play=1&qs=1&hl=0&sr=2.85,-0.05&ss=6",
  },
];
