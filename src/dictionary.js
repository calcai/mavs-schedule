import * as NBAIcons from 'react-nba-logos';

export const getTeam = (team) => {
    const dictionary = {
        "ATL": "Atlanta Hawks",
        "BKN": "Brooklyn Nets",
        "BOS": "Boston Celtics",
        "CHA": "Charlotte Hornets",
        "CHI": "Chicago Bulls",
        "CLE": "Cleveland Cavaliers",
        "DAL": "Dallas Mavericks",
        "DEN": "Denver Nuggets",
        "DET": "Detroit Pistons",
        "GSW": "Golden State Warriors",
        "HOU": "Houston Rockets",
        "IND": "Indiana Pacers",
        "LAC": "Los Angeles Clippers",
        "LAL": "Los Angeles Lakers",
        "MEM": "Memphis Grizzlies",
        "MIA": "Miami Heat",
        "MIL": "Milwaukee Bucks",
        "MIN": "Minnesota Timberwolves",
        "NOP": "New Orleans Pelicans",
        "NYK": "New York Knicks",
        "OKC": "Oklahoma City Thunder",
        "ORL": "Orlando Magic",
        "PHI": "Philadelphia 76ers",
        "PHX": "Phoenix Suns",
        "POR": "Portland Trail Blazers",
        "SAC": "Sacramento Kings",
        "SAS": "San Antonio Spurs",
        "TOR": "Toronto Raptors",
        "UTA": "Utah Jazz",
        "WAS": "Washington Wizards",
    };

    return dictionary[team];
}

export const getLogo = (team) => {
    const dictionary = {
        "ATL": NBAIcons.ATL,
        "BKN": NBAIcons.BKN,
        "BOS": NBAIcons.BOS,
        "CHA": NBAIcons.CHA,
        "CHI": NBAIcons.BKN,
        "CLE": NBAIcons.CLE,
        "DAL": NBAIcons.DAL,
        "DEN": NBAIcons.DEN,
        "DET": NBAIcons.DET,
        "GSW": NBAIcons.GSW,
        "HOU": NBAIcons.HOU,
        "IND": NBAIcons.IND,
        "LAC": NBAIcons.LAC,
        "LAL": NBAIcons.LAL,
        "MEM": NBAIcons.MEM,
        "MIA": NBAIcons.MIA,
        "MIL": NBAIcons.MIL,
        "MIN": NBAIcons.MIN,
        "NOP": NBAIcons.NOP,
        "NYK": NBAIcons.NYK,
        "OKC": NBAIcons.OKC,
        "ORL": NBAIcons.ORL,
        "PHI": NBAIcons.PHI,
        "PHX": NBAIcons.PHX,
        "POR": NBAIcons.POR,
        "SAC": NBAIcons.SAC,
        "SAS": NBAIcons.SAS,
        "TOR": NBAIcons.TOR,
        "UTA": NBAIcons.UTA,
        "WAS": NBAIcons.WAS,
    };

    return dictionary[team];
};