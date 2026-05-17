import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";

export type Poster = {
  id: string;
  title: string;
  student: string;
  preview: string;
  image: string;
  topic: string;
  importance: string;
  conclusion: string;
  tag: string;
};

export const posters: Poster[] = [
  {
    id: "green-chemistry",
    title: "E-Waste Recycling for Sustainable Technology",
    student: "THARUN N E ---25BEI057",
    preview:
      "Exploring solvent-free reactions and atom-economy principles for a cleaner industrial future.",
    image: poster1,
    topic:
      "Mobile phones contain valuable materials such as lithium, copper, gold, silver, aluminum, and rare earth elements that can be recovered and reused through recycling processes. Recycling electronic components helps reduce electronic waste (e-waste) and minimizes the harmful environmental impact caused by improper disposal of devices.",
    importance:
      "The rapid growth of smartphone usage has increased global e-waste generation. Recycling mobile phone components conserves natural resources, reduces mining activities, saves energy, and prevents toxic substances from polluting soil and water. Advanced recycling technologies also support sustainable manufacturing and resource recovery.",
    conclusion:
      "Mobile phone recycling combines environmental science, technology, and sustainable engineering to create a cleaner and resource-efficient future. By recovering valuable materials from discarded devices, recycling helps reduce e-waste pollution and promotes a circular economy for modern electronics.",
    tag: "Turn E-Waste into Eco-Wealth.",
  },
  {
    id: "Biological Solutions for Plastic Degradation",
    title: "PET That Eats Plastic and Reduces Plastic Waste Generation",
    student: "THARUN N E ---25BEI057",
    preview:
      "Engineering nano-carriers that deliver therapeutics precisely where the body needs them most.",
    image: poster2,
    topic:
      "Scientists have discovered special enzymes and engineered microorganisms that can break down PET (Polyethylene Terephthalate) plastic by “eating” and decomposing it into reusable components. These biological systems offer an innovative and eco-friendly solution to reduce the growing problem of plastic waste accumulation in landfills and oceans.",
    importance:
      "Plastic pollution is one of the biggest environmental challenges in the world today. PET-eating enzymes and microbes can help recycle plastic more efficiently, reduce environmental damage, lower pollution levels, and support sustainable waste management practices. This technology also promotes a circular economy by converting plastic waste into reusable raw materials.",
    conclusion:
      "PET-eating technology combines biotechnology, environmental science, and sustainability to create a cleaner and greener future. As research advances, these plastic-degrading systems could become a revolutionary solution for reducing global plastic waste and protecting the environment for future generations.",
    tag: "PET",
  },
  {
    id: "Carbon Reduction",
    title: "Carbon Footprint Reduction Through Green Chemistry",
    student: "THARUN N E ---25BEI057",
    preview:
      "Protecting ozone and greenhouse gases with innovative chemical solutions.",
    image: poster3,
    topic:
      "Green chemistry focuses on designing environmentally friendly chemical processes that reduce pollution, waste generation, and greenhouse gas emissions in industries",
    importance:
      "Chemical industries contribute significantly to global carbon emissions. Green chemistry techniques help lower energy consumption, minimize hazardous waste, and support sustainable industrial development.",
    conclusion:
      "Green chemistry provides innovative pathways to reduce industrial carbon footprints while maintaining economic and scientific progress for a sustainable future.",
    tag: "infographic of carbon emission",
  },
  {
    id: "Biodegradable",
    title: "Biodegradable Polymers for Sustainable Living",
    student: "THARUN N E---25BEI057",
    preview:
      "Biodegradable polymers represent a major step toward sustainable living by replacing conventional plastics with environmentally safe alternatives, helping build a cleaner and greener future.",
    image: poster4,
    topic:
      "Biodegradable polymers are eco-friendly materials capable of decomposing naturally through microbial activity, reducing long-term environmental pollution.",
    importance:
      "Traditional plastics remain in the environment for centuries. Biodegradable polymers offer sustainable alternatives that reduce waste accumulation and ecological damage.",
    conclusion:
      "The development of biodegradable polymers represents a major advancement in green chemistry and sustainable material science.",
    tag: "Microbes degrading plastic",
  },
  {
    id: "Green Solvents",
    title: "GREEN SOLVENTS IN ORGANIC CHEMISTRY",
    student: "THARUN N E---25BEI057",
    preview:
      "Reducing toxicity by Green Solvents.",
    image: poster5,
    topic:
      "Green Solvents in Sustainable Organic Synthesis",
    importance:
      "Green solvents are environmentally safer alternatives used in organic reactions to reduce toxicity and hazardous waste generation.",
    conclusion:
      "Green solvent technology is transforming organic chemistry into a cleaner, safer, and more sustainable scientific discipline.",
    tag: "Green Solvents",
  },
  {
    id: "Biofuels",
    title: "CONVERTING FOOD WASTE INTO BIOFUELS",
    student: "Tharun N E---25BEI057",
    preview:
      "Green chemistry techniques enable the transformation of organic food waste into renewable biofuels such as ethanol and biodiesel.",
    image: poster6,
    topic:
      "Food Waste Conversion into Sustainable Biofuels",
    importance:
      "Food waste contributes to environmental pollution and methane emissions. Converting waste into biofuel reduces landfill impact while generating sustainable energy.",
    conclusion:
      "Biofuel production from food waste demonstrates how green chemistry can solve environmental problems while supporting renewable energy development.",
    tag: "food waste to biogas",
  },
];
