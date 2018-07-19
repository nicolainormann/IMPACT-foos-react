export type ICallback<T> = (T: T) => void;

export interface IPlayer {
    name: string;
    username: string;
}

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
    score: number;
    players: IMatchPlayerModel[];
}

export interface IMatchTeamStateModel {
    score: string;
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