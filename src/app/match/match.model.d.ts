import { ICallback } from "../global/callback";
import { IPlayer } from "../global/player";

//#region Match
export interface IMatch {
    teams: IMatchTeam[];
}

export interface IMatchState {
    availablePlayers: IPlayer[];
    match: IMatch;
}
//#endregion

//#region MatchTeam
export interface IMatchTeamProps {
    players: IPlayer[];
    team: IMatchTeam;
    onTeamChange: ICallback<IMatchTeam>;
}

export interface IMatchTeam {
    team: number;
    players: IMatchPlayer[];
}

export interface IMatchTeamState {
    players: IMatchPlayer[];
}
//#endregion

//#region MatchPlayer
export interface IMatchPlayerProps {
    players: IPlayer[];
    player: IMatchPlayer;
    onAddPlayer: ICallback<IMatchPlayer>;
}

export interface IMatchPlayer extends IPlayer {
    position: number;
}
//#endregion

//#region MatchScore
type MatchScoreMode = "tenPoint" | "sevenPoint" | "threeSet" | "fiveSet";

export interface IMatchScoreState {
    teamScores: IMatchScore[];
}

export interface IMatchScoreProps {
    mode: MatchScoreMode;
}

export interface IMatchScore {
    team: number;
    score: number;
}
//#endregion

//#region MatchScoreInput
export interface IMatchScoreInputProps extends IMatchScoreProps {
    teamScore: IMatchScore;
}
//#endregion