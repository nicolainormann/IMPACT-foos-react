export type ICallback<T> = (T: T) => void;

export interface IPlayer {
    name: string;
    username: string;
}

export interface IAddMatchTeamProps {
    players: IPlayer[];
    team: number;
    onTeamChange: ICallback<IAddMatchTeamModel>;
}

export interface IAddMatchTeamModel {
    team: number;
    score: number;
    players: {
        [key: number]: IAddMatchPlayerModel;
    };
}

export interface IAddMatchTeamStateModel {
    score: string;
    players: {
        [key: number]: IAddMatchPlayerModel;
    };
}

export interface IAddMatchPlayerProps {
    players: IPlayer[];
    position: number;
    onAddPlayer: ICallback<IAddMatchPlayerModel>;
}

export interface IAddMatchPlayerModel {
    position: number;
    username: string;
}