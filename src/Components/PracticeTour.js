const tourPoints = [{
    id: 0,
    title: "Empire State Building",
    coordinates: [-73.9857, 40.7484],
    description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building has a roof height of 1,250 feet (380 m) and stands a total of 1,454 feet tall, including its antenna."
  },
  {
    id: 1,
    title: "Chrysler Building",
    coodinates: [-73.9755, 40.7516],
    description: "The Chrysler Building is an Art Deco-style skyscraper located on the East Side of Midtown Manhattan in New York City, at the intersection of 42nd Street and Lexington Avenue in the Turtle Bay neighborhood of Manhattan."
  },
  {
    id: 2,
    title: "Madison Square Garden",
    coodinatates: [-73.9934, 40.7505],
    description: "Madison Square Garden, often called MSG or simply The Garden, is a multi-purpose indoor arena in the New York City borough of Manhattan."
  },
  {
    id: 3,
    title: "Bryant Park",
    coordinates: [-73.9832, 40.7536],
    description: "Bryant Park is a 9.603-acre privately managed public park located in the New York City borough of Manhattan. It is located between Fifth and Sixth Avenues and between 40th and 42nd Streets in Midtown Manhattan."
  },
  {
    id: 4,
    title: "Pennsylvania Station",
    coordinates: [-73.9935, 40.7506],
    description: "Pennsylvania Station, also known as New York Penn Station or Penn Station, is the main intercity railroad station in New York City."
  },
  {
    id: 5,
    title: "Grand Central Station",
    coordinates: [-73.9772, 40.7527],
    description: "Grand Central Terminal is a commuter and intercity railroad terminal at 42nd Street and Park Avenue in Midtown Manhattan in New York City, United States."
  },
  {
    id: 6,
    title: "Radio City Music Hall",
    coordinates: [-73.9800, 40.7600],
    description: "Radio City Music Hall is an entertainment venue located at 1260 Avenue of the Americas at Rockefeller Center in Midtown Manhattan, New York City. Nicknamed the Showplace of the Nation, it was for a time the leading tourist destination in the city."
  },
  {
    id: 7,
    title: "Rockefeller Center",
    coordinates: [-73.9787, 40.7587],
    description: "Rockefeller Center is a large complex consisting of 19 commercial buildings covering 22 acres between 48th and 51st Streets in New York City. Commissioned by the Rockefeller family, it is located in the center of Midtown Manhattan."
  },
  {
    id: 8,
    title: "Central Park",
    coordinates: [-73.9654, 40.7829],
    description: "Central Park is an urban park in Manhattan, New York City, U.S. state of New York. It comprises 843 acres between the Upper West Side and Upper East Side."
  },
  {
    id: 9,
    title: "Columbus Circle",
    coordinates: [-73.9758, 40.7675],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 10,
    title: "Times Square",
    coordinates: [-73.985131, 40.758895],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 11,
    title: "South Street Seaport",
    coordinates: [-74.002676, 40.705937],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 12,
    title: "Battery Park City",
    coordinates: [-74.015844, 40.711579],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 13,
    title: "9/11 Memorial",
    coordinates: [-74.012725, 40.711484],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 14,
    title: "Wall Street Bull",
    coordinates: [-74.013444, 40.705554],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 15,
    title: "City Hall",
    coordinates: [-74.005974, 40.712746],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 16,
    title: "Clinton Castle",
    coordinates: [-74.016802, 40.703440],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 18,
    title: "Canyon of Heroes",
    coordinates: [-74.010265, 40.709482],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 19,
    title: "Irish Hunger Memorial",
    coordinates: [-74.016368, 40.715066],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
  {
    id: 20,
    title: "Trinity Church",
    coordinates: [-101.876349, 33.530246],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum vel nisl a ultricies. Aliquam neque elit, lacinia et fermentum a, viverra id lacus. Donec finibus cursus lacus, nec pretium massa venenatis non."
  },
];

const tours = [{
  id: 0,
  location: "New York, NY",
  title: "Midtown New York City",
  description: "Visit popular points in Midtown New York City",
  tourPoints: [tourPoints[0], tourPoints[1], tourPoints[2], tourPoints[3], tourPoints[4], tourPoints[5], tourPoints[6], tourPoints[7], tourPoints[8], tourPoints[9], tourPoints[10]],
  price: 0
}, {
  id: 1,
  location: "New York, NY",
  title: "Financial District New York City",
  description: "Visit popular points in the Financial District",
  tourPoints: [tourPoints[11], tourPoints[12], tourPoints[13], tourPoints[14], tourPoints[15], tourPoints[16], tourPoints[17], tourPoints[18], tourPoints[19], tourPoints[20]],
  price: 0
}];

export {
  tours
};
export {
  tourPoints
};
