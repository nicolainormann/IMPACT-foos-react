import { ICallback } from "../../../global/callback";
import { IPlayer } from "../../../global/player";

//#region Match
export interface IMatch {
    teams: IMatchTeam[];
}

export interface IMatchState {
    availablePlayers: IPlayer[];
    match: IMatch;
    valid: {
        teams: boolean[];
        score: boolean;
    };
}
//#endregion

//#region MatchTeam
export interface IMatchTeamProps {
    players: IPlayer[];
    team: IMatchTeam;
    onTeamChange: ICallback<IMatchTeamChange>;
}

export interface IMatchTeam {
    team: number;
    players: IMatchPlayer[];
    score: number;
}

export interface IMatchTeamState {
    players: IMatchPlayer[];
    valid: boolean;
}

export interface IMatchTeamChange extends IMatchTeamState {
    team: number;
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
    valid: boolean;
}

export interface IMatchScoreProps {
    mode: MatchScoreMode;
    onScoreChange: ICallback<IMatchScoreState>;
}

export interface IMatchScore {
    team: number;
    score: number;
}
//#endregion

//#region MatchScoreInput
export interface IMatchScoreInputProps {
    mode: MatchScoreMode;
    teamScore: IMatchScore;
    onScoreChange: ICallback<IMatchScore>;
}
//#endregion