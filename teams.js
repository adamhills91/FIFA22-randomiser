let teams = [
  {
    name: "FC Barcelona",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 5,
    image: "https://smimgs.com/images/logos/clubs/140.png",
  },
  {
    name: "Real Madrid",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 5,
    image: "https://smimgs.com/images/logos/clubs/163.png",
  },
  {
    name: "Juventus",
    country: "Italy",
    league: "Serie A TIM",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Juventus_FC_2017_logo.png",
  },
  {
    name: "PSG",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
  },
  {
    name: "Manchester City",
    country: "England",
    league: "Premier League",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
  },
  {
    name: "Liverpool",
    country: "England",
    league: "Premier League",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png",
  },
  {
    name: "FC Bayern",
    country: "Germany",
    league: "Bundesliga",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
  },
  {
    name: "Atlético Madrid",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png",
  },
  {
    name: "Spurs",
    country: "England",
    league: "Premier League",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/1200px-Tottenham_Hotspur.svg.png",
  },
  {
    name: "Napoli",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/1200px-SSC_Neapel.svg.png",
  },
  {
    name: "Dortmund",
    country: "Germany",
    league: "Bundesliga",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png",
  },
  {
    name: "Inter",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/FC_Internazionale_Milano_2014.svg/1200px-FC_Internazionale_Milano_2014.svg.png",
  },
  {
    name: "Manchester Utd",
    country: "England",
    league: "Premier League",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png",
  },
  {
    name: "Lazio",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/1200px-S.S._Lazio_badge.svg.png",
  },
  {
    name: "Valencia CF",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/1200px-Valenciacf.svg.png",
  },
  {
    name: "Chelsea",
    country: "England",
    league: "Premier League",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png",
  },
  {
    name: "Arsenal",
    country: "England",
    league: "Premier League",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png",
  },
  {
    name: "RB Leipzig",
    country: "Germany",
    league: "Bundesliga",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/1200px-RB_Leipzig_2014_logo.svg.png",
  },
  {
    name: "Real Betis",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Real_betis_logo.svg/1200px-Real_betis_logo.svg.png",
  },
  {
    name: "Leverkusen",
    country: "Germany",
    league: "Bundesliga",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png",
  },
  {
    name: "Sevilla FC",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/1200px-Sevilla_FC_logo.svg.png",
  },
  {
    name: "Ajax",
    country: "Netherlands",
    league: "Eredivisie",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Ajax_Amsterdam.svg/1200px-Ajax_Amsterdam.svg.png",
  },
  {
    name: "Milan",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png",
  },
  {
    name: "Roma",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png",
  },
  {
    name: "Atalanta",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/AtalantaBC.svg/1200px-AtalantaBC.svg.png",
  },
  {
    name: "Real Sociedad",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/1200px-Real_Sociedad_logo.svg.png",
  },
  {
    name: "Villareal CF",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Villarreal_CF_logo.svg/1200px-Villarreal_CF_logo.svg.png",
  },
  {
    name: "Everton",
    country: "England",
    league: "Premier League",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png",
  },
  {
    name: "Athletic Club",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/1200px-Club_Athletic_Bilbao_logo.svg.png",
  },
  {
    name: "Leicester City",
    country: "England",
    league: "Premier League",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/1200px-Leicester_City_crest.svg.png",
  },
  {
    name: "OL",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Olympique_Lyonnais.svg/1200px-Olympique_Lyonnais.svg.png",
  },
  {
    name: "SL Benfica",
    country: "Portugal",
    league: "Liga NOS",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png",
  },
  {
    name: "M'gladbach",
    country: "Germany",
    league: "Bundesliga",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/1200px-Borussia_M%C3%B6nchengladbach_logo.svg.png",
  },
  {
    name: "FC Porto",
    country: "Portugal",
    league: "Liga NOS",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png",
  },
  {
    name: "West Ham",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/1200px-West_Ham_United_FC_logo.svg.png",
  },
  {
    name: "OM",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg",
  },
  {
    name: "AS Monaco",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/AS_Monaco_FC.svg/1200px-AS_Monaco_FC.svg.png",
  },
  {
    name: "Getafe CF",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/1200px-Getafe_logo.svg.png",
  },
  {
    name: "Wolves",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Wolverhampton_Wanderers.svg/1200px-Wolverhampton_Wanderers.svg.png",
  },
  {
    name: "RC Celta",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/1200px-RC_Celta_de_Vigo_logo.svg.png",
  },
  {
    name: "Galatasaray",
    country: "Turkey",
    league: "Süper Lig",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Galatasaray_Star_Logo.svg/1200px-Galatasaray_Star_Logo.svg.png",
  },
  {
    name: "TSG HoffenHeim",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/1200px-Logo_TSG_Hoffenheim.svg.png",
  },
  {
    name: "Torino",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/1200px-Torino_FC_Logo.svg.png",
  },
  {
    name: "River Plate",
    country: "Argentina",
    league: "SAF",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Club_Atl%C3%A9tico_River_Plate_logo.svg/1200px-Club_Atl%C3%A9tico_River_Plate_logo.svg.png",
  },
  {
    name: "RCD Espanyol",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Rcd_espanyol_logo.svg/1200px-Rcd_espanyol_logo.svg.png",
  },
  {
    name: "SD Eibar",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SD_Eibar_logo_2016.svg/1200px-SD_Eibar_logo_2016.svg.png",
  },
  {
    name: "Frankfurt",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1200px-Eintracht_Frankfurt_Logo.svg.png",
  },
  {
    name: "Levante UD",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg/1200px-Levante_Uni%C3%B3n_Deportiva%2C_S.A.D._logo.svg.png",
  },
  {
    name: "VfL Wolfsburg",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Logo-VfL-Wolfsburg.svg/1200px-Logo-VfL-Wolfsburg.svg.png",
  },
  {
    name: "LOSC Lille",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Lille_OSC_2018_logo.svg/1200px-Lille_OSC_2018_logo.svg.png",
  },
  {
    name: "Watford",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Watford.svg/1200px-Watford.svg.png",
  },
  {
    name: "Schalke",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/1200px-FC_Schalke_04_Logo.svg.png",
  },
  {
    name: "Werder Bremen",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/1200px-SV-Werder-Bremen-Logo.svg.png",
  },
  {
    name: "Newcastle Utd",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/1200px-Newcastle_United_Logo.svg.png",
  },
  {
    name: "Crystal Palace",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Crystal_Palace_FC_logo.svg/1024px-Crystal_Palace_FC_logo.svg.png",
  },
  {
    name: "AFC Bournemouth",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/340px-AFC_Bournemouth_%282013%29.svg.png",
  },
  {
    name: "Racing Club",
    country: "Argentina",
    league: "SAF",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Escudo_de_Racing_Club_%282014%29.svg/1200px-Escudo_de_Racing_Club_%282014%29.svg.png",
  },
  {
    name: "Beşiktaş",
    country: "Turkey",
    league: "Süper Lig",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Besiktas_JK.svg/1024px-Besiktas_JK.svg.png",
  },
  {
    name: "Flamengo",
    country: "Brazil",
    league: "Liga do Brasil",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png",
  },
  {
    name: "Cagliari",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cagliari_Calcio_1920.svg/1200px-Cagliari_Calcio_1920.svg.png",
  },
  {
    name: "SC Braga",
    country: "Portugal",
    league: "Liga NOS",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/S.C._Braga_logo.svg/1200px-S.C._Braga_logo.svg.png",
  },
  {
    name: "Burnley",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Burnley_F.C._Logo.svg/1200px-Burnley_F.C._Logo.svg.png",
  },
  {
    name: "Hertha BSC",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://images-na.ssl-images-amazon.com/images/I/61w7-wO35HL._AC_SL1024_.jpg",
  },
  {
    name: "Aston Villa",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png",
  },
  {
    name: "Stade Rennais",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_FC.svg/1200px-Stade_Rennais_FC.svg.png",
  },
  {
    name: "Southampton",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/FC_Southampton.svg/1200px-FC_Southampton.svg.png",
  },
  {
    name: "R. Valladoid CF",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Valladolid_Logo.svg/1200px-Real_Valladolid_Logo.svg.png",
  },
  {
    name: "D. Alavés",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Deportivo_Alaves_logo.svg/1200px-Deportivo_Alaves_logo.svg.png",
  },
  {
    name: "Fiorentina",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/ACF_Fiorentina_2.svg/1200px-ACF_Fiorentina_2.svg.png",
  },
  {
    name: "Boca Juniors",
    country: "Argentina",
    league: "SAF",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/1200px-Boca_Juniors_logo18.svg.png",
  },
  {
    name: "Brighton",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png",
  },
  {
    name: "Sporting CP",
    country: "Portugal",
    league: "Liga NOS",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Sporting_Clube_de_Portugal_%28Logo%29.svg/1200px-Sporting_Clube_de_Portugal_%28Logo%29.svg.png",
  },
  {
    name: "Club Brugge",
    country: "Belgium",
    league: "Pro League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Club_Brugge_KV_logo.svg/1200px-Club_Brugge_KV_logo.svg.png",
  },
  {
    name: "Lokomotiv Moscow",
    country: "Russia",
    league: "Rest of World",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Lokomotiv_Moscow_logo.svg/1200px-FC_Lokomotiv_Moscow_logo.svg.png",
  },
  {
    name: "Palmeiras",
    country: "Brazil",
    league: "Liga do Brasil",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/1200px-Palmeiras_logo.svg.png",
  },
  {
    name: "Shakhtar Donetsk",
    country: "Ukraine",
    league: "Rest of World",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/FC_Shakhtar_Donetsk.svg/1200px-FC_Shakhtar_Donetsk.svg.png",
  },
  {
    name: "FC Augsburg",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/FC_Augsburg_logo.svg/1200px-FC_Augsburg_logo.svg.png",
  },
  {
    name: "Montpellier HSC",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Montpellier_HSC_logo.svg/1200px-Montpellier_HSC_logo.svg.png",
  },
  {
    name: "Olympiacos CFP",
    country: "Greece",
    league: "Rest of World",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Olympiacos_FC_logo.svg/1200px-Olympiacos_FC_logo.svg.png",
  },
  {
    name: "Tigres",
    country: "Mexico",
    league: "LIGA BBVA MX",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Tigres_UANL_logo_%28crest%29.svg/1200px-Tigres_UANL_logo_%28crest%29.svg.png",
  },
  {
    name: "Fenerbahçe",
    country: "Turkey",
    league: "Süper Lig",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Fenerbah%C3%A7e.svg/1200px-Fenerbah%C3%A7e.svg.png",
  },
  {
    name: "Granada CF",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://logos-download.com/wp-content/uploads/2016/05/Granada_CF_logo_logotipo.png",
  },
  {
    name: "Köln",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/FC_Cologne_logo.svg/1200px-FC_Cologne_logo.svg.png",
  },
  {
    name: "Başakşehir",
    country: "Turkey",
    league: "Süper Lig",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg/1200px-%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg.png",
  },
  {
    name: "PSV",
    country: "Netherlands",
    league: "Eredivisie",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/PSV_Eindhoven.svg/1200px-PSV_Eindhoven.svg.png",
  },
  {
    name: "Girondins de Bx",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/FC_Girondins_de_Bordeaux_logo.svg/1200px-FC_Girondins_de_Bordeaux_logo.svg.png",
  },
  {
    name: "CD Leganés",
    country: "Spain",
    league: "LaLiga Santander",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Club_Deportivo_Legan%C3%A9s_logo.svg/1200px-Club_Deportivo_Legan%C3%A9s_logo.svg.png",
  },
  {
    name: "São Paulo",
    country: "Brazil",
    league: "Liga do Brasil",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/1200px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png",
  },
  {
    name: "Udinese",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Udinese_Calcio_logo.svg/1200px-Udinese_Calcio_logo.svg.png",
  },
  {
    name: "Genoa",
    country: "Italy",
    league: "Serie A TIM",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Genoa_C.F.C._logo.svg/1200px-Genoa_C.F.C._logo.svg.png",
  },
  {
    name: "1. FSV Mainz 05",
    country: "Germany",
    league: "Bundesliga",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Logo_Mainz_05.svg/1200px-Logo_Mainz_05.svg.png",
  },
  {
    name: "OGC Nice",
    country: "France",
    league: "Ligue 1 Conforama",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/OGC_Nice_logo.svg/1200px-OGC_Nice_logo.svg.png",
  },
  {
    name: "Sheffield Utd",
    country: "England",
    league: "Premier League",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/1200px-Sheffield_United_FC_logo.svg.png",
  },
  {
    name: "Grêmio",
    country: "Brazil",
    league: "Liga do Brasil",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Gremio.svg/1200px-Gremio.svg.png",
  },
  {
    name: "Germany",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://seeklogo.com/images/G/german-football-association-logo-8D52D1B56C-seeklogo.com.png",
  },
  {
    name: "France",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/French_Football_Federation_logo.svg/1200px-French_Football_Federation_logo.svg.png",
  },
  {
    name: "Spain",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Spain_national_football_team_crest.svg/1200px-Spain_national_football_team_crest.svg.png",
  },
  {
    name: "Belgium",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://i.pinimg.com/originals/0e/be/aa/0ebeaa8d993467862e6f9819fc73432a.jpg",
  },
  {
    name: "Portugal",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Portuguese_Football_Federation.svg/1200px-Portuguese_Football_Federation.svg.png",
  },
  {
    name: "Italy",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/FIGC_Logo_2017.svg/280px-FIGC_Logo_2017.svg.png",
  },
  {
    name: "Netherlands",
    country: "International",
    league: "Men's National",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Netherlands_national_football_team_logo.svg/360px-Netherlands_national_football_team_logo.svg.png",
  },
  {
    name: "England",
    country: "International",
    league: "Men's National",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/England_national_football_team_crest.svg/1200px-England_national_football_team_crest.svg.png",
  },
  {
    name: "Argentina",
    country: "International",
    league: "Men's National",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg/1200px-Asociaci%C3%B3n_del_F%C3%BAtbol_Argentino_%28crest%29.svg.png",
  },
  {
    name: "Brazil",
    country: "International",
    league: "Men's National",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Brazilian_Football_Confederation_logo.svg/1200px-Brazilian_Football_Confederation_logo.svg.png",
  },
  {
    name: "Uruguay",
    country: "International",
    league: "Men's National",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Uruguay_national_football_team_seal.svg/1200px-Uruguay_national_football_team_seal.svg.png",
  },
  {
    name: "Austria",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Coat_of_arms_of_Austria.svg/1200px-Coat_of_arms_of_Austria.svg.png",
  },
  {
    name: "Colombia",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Federacion_Colombiana_de_Futbol_logo.svg/1200px-Federacion_Colombiana_de_Futbol_logo.svg.png",
  },
  {
    name: "Denmark",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Dansk_Boldspil-Union_logo.svg/1200px-Dansk_Boldspil-Union_logo.svg.png",
  },
  {
    name: "Switzerland",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/2000px-Flag_of_Switzerland.svg.png",
  },
  {
    name: "Poland",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Herb_Polski.svg/1200px-Herb_Polski.svg.png",
  },
  {
    name: "Russia",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Coat_of_Arms_of_the_Russian_Federation_2.svg/1280px-Coat_of_Arms_of_the_Russian_Federation_2.svg.png",
  },
  {
    name: "Turkey",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Turkish_Football_Federation_crest.svg/1200px-Turkish_Football_Federation_crest.svg.png",
  },
  {
    name: "Chile",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Logo_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png/1200px-Logo_Federaci%C3%B3n_de_F%C3%BAtbol_de_Chile.png",
  },
  {
    name: "Norway",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Norway_national_football_team_logo.svg/1200px-Norway_national_football_team_logo.svg.png",
  },
  {
    name: "Mexico",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Mexico_national_football_team_badge.svg/1200px-Mexico_national_football_team_badge.svg.png",
  },
  {
    name: "Sweden",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Sweden_national_football_team_badge.svg/1200px-Sweden_national_football_team_badge.svg.png",
  },
  {
    name: "Czech Republic",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Czech_Republic_national_football_team_logo.svg/1200px-Czech_Republic_national_football_team_logo.svg.png",
  },
  {
    name: "Scotland",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Scotland_national_football_team_logo_2014.svg/1200px-Scotland_national_football_team_logo_2014.svg.png",
  },
  {
    name: "Côte d'Ivoire",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/3/38/FIF_C%C3%B4te_d%27Ivoire_logo.png",
  },
  {
    name: "Cameroon",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/e/e8/Cameroon_2010crest.png",
  },
  {
    name: "Ireland",
    country: "International",
    league: "Men's National",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fe/Ireland_Football_Team_Badge.png",
  },
];