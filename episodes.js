/* ============================================================
   THE ENGINEERING COMMUTE — EDIT THIS FILE TO UPDATE THE SITE
   ============================================================

   1) LISTEN LINKS
      Paste your show links between the quotes.
      Any link left as "" is hidden automatically.

   2) EPISODES
      Each episode is one block { ... }.
      - status: "out" shows a Listen button, "soon" shows "Coming soon".
      - spotify / apple: that episode's own links. Each one that's filled
                in gets its own button. If both are "", a single Listen
                button goes to your show page instead.
      To add an episode, copy a block, paste it at the bottom, and edit it.
   ============================================================ */

const SHOW = {
  spotify: "https://podcasters.spotify.com/pod/show/wyatt-bodle4",
  apple:   "https://podcasts.apple.com/us/podcast/the-engineering-commute/id6822502137",
  rss:     "",   // e.g. "https://anchor.fm/s/XXXXXXXX/podcast/rss"
  email:   ""    // optional contact email, e.g. "hello@example.com"
};

const EPISODES = [
  {
    number: 1,
    title: "How Does a Microwave Heat Your Food?",
    minutes: 22,
    status: "out",
    spotify: "https://podcasters.spotify.com/pod/show/wyatt-bodle4/episodes/How-Does-a-Microwave-Heat-Your-Food-e3qfdg6",
    apple: "https://podcasts.apple.com/us/podcast/how-does-a-microwave-heat-your-food/id6822502137?i=1000796218757",
    description:
      "In 1945, an engineer reached into his pocket and found his chocolate bar had melted. That accident led to one of the most-used machines in your kitchen. Why the middle of your burrito stays frozen, why the plate spins, why popcorn pops, and why you should never put a fork inside."
  },
  {
    number: 2,
    title: "How Do Traffic Lights Know You're There?",
    minutes: 22,
    status: "out",
    spotify: "https://podcasters.spotify.com/pod/show/wyatt-bodle4/episodes/How-Do-Traffic-Lights-Know-Youre-There-e3qfflt",
    apple: "https://podcasts.apple.com/us/podcast/how-do-traffic-lights-know-youre-there/id6822502137?i=1000796224478",
    description:
      "The first traffic signal exploded a month after it went up. From that 1868 gas lamp to today: the hidden metal detector buried in the road, why some lights ignore you, how a \"green wave\" works, and whether the crosswalk button does anything at all."
  },
  {
    number: 3,
    title: "How Do Noise-Canceling Headphones Work?",
    minutes: 21,
    status: "soon",
    spotify: "",
    apple: "",
    description:
      "How can headphones make noise disappear by playing more noise? A balanced seesaw, an engineer annoyed on a loud 1978 flight, why voices still get through, and the car that might be canceling road noise around you right now."
  },
  {
    number: 4,
    title: "How Does GPS Know Where You Are?",
    minutes: 20,
    status: "soon",
    spotify: "",
    apple: "",
    description:
      "Satellites twelve thousand miles up are shouting the time, and your phone is counting like you count the seconds after lightning. It started with two scientists listening to Sputnik beep, and it only works because Einstein was right."
  },
  {
    number: 5,
    title: "How Does a Battery Store Energy?",
    minutes: 21,
    status: "soon",
    spotify: "",
    apple: "",
    description:
      "Twitching frog legs, a stack of metal and salty cardboard, and a Nobel Prize won at age 97. What's really happening inside your phone's battery, why it dies in the cold, and what's under the floor of an electric car."
  },
  {
    number: 6,
    title: "How Do Touchscreens Know Where Your Finger Is?",
    minutes: 20,
    status: "soon",
    spotify: "",
    apple: "",
    description:
      "Your phone is playing Battleship with your finger, hundreds of times a second. Why gloves don't work, why a sausage does, and why car makers are bringing back real buttons."
  }
];
