export const navLinks = [
   {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home.svg",
   },

   {
      label: "Herstel Afbeelding",
      route: "/transformations/add/restore",
      icon: "/assets/icons/image.svg",
   },
   
   {
      label: "Generatief Vullen",
      route: "/transformations/add/fill",
      icon: "/assets/icons/stars.svg",
   },
   
   {
      label: "Object Verwijderen",
      route: "/transformations/add/remove",
      icon: "/assets/icons/scan.svg",
   },
   
   {
      label: "Object Opnieuw kleuren",
      route: "/transformations/add/recolor",
      icon: "/assets/icons/filter.svg",
   },

   {
      label: "Achtergrond Verwijderen",
      route: "/transformations/add/removeBackground",
      icon: "/assets/icons/camera.svg",
   },

   {
      label: "Profiel",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
   },

   {
      label: "Koop Credits",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
   },
];

export const plans = [
   {
      _id: 1,
      name: "Gratis",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 10,
      inclusions: [
         {
         label: "10 Gratis Credits",
         isIncluded: true,
         },
         {
         label: "Basistoegang tot Services",
         isIncluded: true,
         },
         {
         label: "Prioritaire Support",
         isIncluded: false,
         },
         {
         label: "Prioriteitsupdates",
         isIncluded: false,
         },
      ],
   },

   {
      _id: 2,
      name: "Pro Pakket",
      icon: "/assets/icons/free-plan.svg",
      price: 40,
      credits: 100,
      inclusions: [
         {
         label: "100 Credits",
         isIncluded: true,
         },
         {
         label: "Volledige toegang tot Services",
         isIncluded: true,
         },
         {
         label: "Prioritaire Klantenondersteuning",
         isIncluded: true,
         },
         {
         label: "Prioriteitsupdates",
         isIncluded: false,
         },
      ],
   },

   {
      _id: 3,
      name: "Premium Pakket",
      icon: "/assets/icons/free-plan.svg",
      price: 100,
      credits: 1500,
      inclusions: [
         {
         label: "1500 Credits",
         isIncluded: true,
         },
         {
         label: "Volledige toegang tot Services",
         isIncluded: true,
         },
         {
         label: "Prioritaire Klantenondersteuning",
         isIncluded: true,
         },
         {
         label: "Prioriteitsupdates",
         isIncluded: true,
         },
      ],
   },
];

export const transformationTypes = {
   restore: {
      type: "restore",
      title: "Afbeelding Herstellen",
      subTitle: "Verfijn afbeeldingen door ruis en onvolkomenheden te verwijderen",
      config: { restore: true },
      icon: "image.svg",
   },

   removeBackground: {
      type: "removeBackground",
      title: "Achtergrond Verwijderen",
      subTitle: "Verwijdert de achtergrond van de afbeelding met behulp van AI",
      config: { removeBackground: true },
      icon: "camera.svg",
   },
   
   fill: {
      type: "fill",
      title: "Generatief Vullen",
      subTitle: "Verbeter de afmeting van een afbeelding met AI-uitschilderen",
      config: { fillBackground: true },
      icon: "stars.svg",
   },
   
   remove: {
      type: "remove",
      title: "Object Verwijderen",
      subTitle: "Identificeer en verwijder objecten uit afbeeldingen",
      config: {
         remove: { prompt: "", removeShadow: true, multiple: true },
      },
      icon: "scan.svg",
   },
   
   recolor: {
      type: "recolor",
      title: "Object Opnieuw kleuren",
      subTitle: "Identificeer en kleur objecten uit de afbeelding opnieuw",
      config: {
         recolor: { prompt: "", to: "", multiple: true },
      },
      icon: "filter.svg",
   },
};


export const aspectRatioOptions = {
   "1:1": {
      aspectRatio: "1:1",
      label: "Square (1:1)",
      width: 1000,
      height: 1000,
   },
   
   "3:4": {
      aspectRatio: "3:4",
      label: "Standard Portrait (3:4)",
      width: 1000,
      height: 1334,
   },
   
   "9:16": {
      aspectRatio: "9:16",
      label: "Phone Portrait (9:16)",
      width: 1000,
      height: 1778,
   },
};

export const defaultValues = {
   title: "",
   aspectRatio: "",
   color: "",
   prompt: "",
   publicId: "",
};

export const creditFee = -1;
