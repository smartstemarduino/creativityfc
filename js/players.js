/* ==========================================================
   CREATING FC: EDIT PLAYERS HERE
   Each player has a folder: assets/players/<slug>/
     profile.jpg      main photo
     action-1.jpg ... action-N.jpg   (N = "shots")
     highlights.mp4   highlight video (add when ready)
   Age is worked out automatically from "dob" (YYYY-MM-DD).
   ========================================================== */
const EMAIL="creatingtypes@gmail.com";

/* Add your six partner clubs here when ready, e.g. {name:"Club Name",country:"Portugal"}.
   While the list is empty, the site shows the four-step pathway instead. */
const CLUBS=[];

const PLAYERS=[
{slug:"orodje-obanor",name:"Orodje Obanor",dob:"2007-12-31",
 pos:"Attacking Midfielder &middot; Winger",h:"1.70 m",w:"68 kg",foot:"Left",
 status:"Creating FC",agent:"David Doo",
 bio:"Creative attacking midfielder and fast winger with two years of senior football in Nigeria. Strong in one-on-one situations with accurate crossing, he recorded 15 goals and 17 assists in a single season.",
 tags:["Dribbling","Crossing","Long-range shooting","Work rate &amp; pressing"],
 honours:["2024: Most Valuable Player, Kapital FC Championship, Abuja","2020: Winner &amp; Youngest Best Player, Abuja San Siro Cup","2018: Top Scorer, Red Tigers Cup, Warri","2017: Most Assists, Warri Unity Cup","2017: Winner &amp; MVP, Delta Cup (Under-13)"],
 clubs:["<b>Creating FC</b>, Abuja &middot; 2025 to present","<b>Kapital FC</b>, Abuja &middot; 2023 to 2025 &middot; 31 apps, 25 goals","<b>Water FC</b>, Abuja &middot; 2020 to 2022 &middot; 29 apps, 18 goals","<b>Dream Team FC (Academy)</b>, Warri &middot; 2015 to 2020 &middot; 60 apps, 82 goals"]},

{slug:"gideon-obetta",name:"Gideon Kosisochukwu Obetta",dob:"2005-06-10",
 pos:"Centre Forward &middot; Left Wing",h:"1.85 m",w:"65 kg",
 status:"Current club: Markemolins Sports Academy",
 bio:"High-intensity, physical centre forward known for explosive acceleration, runs in behind, aerial strength and aggressive pressing. Finishes with both feet and his head, holds the ball up and links play, with the mentality, fitness and discipline clubs look for.",
 tags:["Finishing (both feet &amp; header)","Pace in behind","Hold-up &amp; link-up play","Pressing","Mentality &amp; discipline"],
 honours:["2024: Top three best players, Botafogo GSM Russian scouting programme","2023/24: NLO 2 play-off winners with OPM FC, Calabar","2022/23: Rivers State Super League finalist, Port Harcourt City FC","2019/20: Rivers State FA Cup finalist, Port Harcourt City FC"],
 clubs:["<b>Markemolins Sports Academy</b> &middot; from August 2026","<b>Calgary FC</b> &middot; January to August 2026","<b>Torpedo Moscow</b> (U19 &amp; first team), Russia &middot; 2025 trial","<b>Botafogo de la Grande Sanaga Maritime Academy</b>, Douala, Cameroon &middot; 2024","<b>OPM FC</b> &middot; 2023","<b>Port Harcourt City FC</b> &middot; 2014 to 2023"],
 shots:4,
 videos:[{src:"training-1.mp4",poster:"training-1.jpg",label:"Training: goal &amp; celebration"},{src:"training-2.mp4",poster:"training-2.jpg",label:"Training: goal &amp; celebration"}]},

{slug:"oboro-oluwaseyi",name:"Oboro Oluwaseyi Ovie",dob:"2008-04-14",
 pos:"Outside Right / Left Winger &middot; Supporting Striker",h:"1.70 m",w:"75 kg",foot:"Left",
 status:"Based in Abuja",
 bio:"Self-disciplined and determined winger who works for the team and performs under pressure. Comfortable on either flank and as a supporting striker, with a strong desire to represent his club at national level.",
 tags:["Dribbling","First touch","Passing accuracy","Crossing","Set pieces","Shot power"],
 clubs:["<b>Calgary FC</b>, Abuja","<b>FC International</b>, Abuja","<b>OYC FC</b>, Delta State"],shots:7},

{slug:"ohiri-augustine",name:"Ohiri Augustine Chinasa",dob:"2008-01-08",
 pos:"Attacking / Defensive Midfielder",h:"1.70 m",w:"65 kg",
 status:"Current club: NewHope Naija FC (NLO)",
 bio:"Disciplined midfielder who contributes at both ends of the pitch. Strong in the tackle with excellent ball control, he reads the game well and links defence to attack with accurate passing.",
 tags:["Tackling &amp; ball winning","Ball control","Passing &amp; distribution","Aerial ability","Pace &amp; stamina","Leadership"],
 clubs:["<b>NewHope Naija FC (NLO)</b> &middot; 2026","<b>Solution FC (NLO)</b> &middot; 2025","<b>FC International</b> &middot; from 2021"],shots:2}

/* To add a player, copy a block above, give it a new slug and create assets/players/<slug>/ */
];
