import { ICallback } from "../global/callback";
import { IPlayer } from "../global/player";

//#region Match
export interface IMatchModel {
    teams: IMatchTeamModel[];
}

export interface IMatchStateModel {
    availablePlayers: IPlayer[];
    match: IMatchModel;
}
//#endregion

//#region MatchTeam
export interface IMatchTeamProps {
    players: IPlayer[];
    team: IMatchTeamModel;
    onTeamChange: ICallback<IMatchTeamModel>;
}

export interface IMatchTeamModel {
    team: number;
    players: IMatchPlayerModel[];
}

export interface IMatchTeamStateModel {
    players: IMatchPlayerModel[];
}
//#endregion

//#region MatchPlayer
export interface IMatchPlayerProps {
    players: IPlayer[];
    player: IMatchPlayerModel;
    onAddPlayer: ICallback<IMatchPlayerModel>;
}

export interface IMatchPlayerModel extends IPlayer {
    position: number;
}
//#endregion

//#region MatchScore
export interface IMatchScorePropsModel {
    mode: "tenPoint" | "sevenPoint" | "threeSet" | "fiveSet";
}
//#endregion