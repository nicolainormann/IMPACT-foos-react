export type ICallback<T> = (T: T) => void;

export interface IPlayer {
    name: string;
    username: string;
}

//#region AddMatch
export interface IAddMatchModel {
    teams: IAddMatchTeamModel[];
}

export interface IAddMatchStateModel {
    availablePlayers: IPlayer[];
    match: IAddMatchModel;
}
//#endregion

//#region AddMatchTeam
export interface IAddMatchTeamProps {
    players: IPlayer[];
    team: number;
    onTeamChange: ICallback<IAddMatchTeamModel>;
}

export interface IAddMatchTeamModel {
    team: number;
    score: number;
    players: IAddMatchPlayerModel[];
}

export interface IAddMatchTeamStateModel {
    score: string;
    players: IAddMatchPlayerModel[];
}
//#endregion

//#region AddMatchPlayer
export interface IAddMatchPlayerProps {
    players: IPlayer[];
    position: number;
    onAddPlayer: ICallback<IAddMatchPlayerModel>;
}

export interface IAddMatchPlayerModel {
    position: number;
    username: string;
}
//#endregion