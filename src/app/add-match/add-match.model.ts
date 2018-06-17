export interface IPlayer {
    name: string;
    username: string;
}

export interface IAddMatchTeamProps {
    players: IPlayer[];
}

export interface IAddMatchPlayerProps {
    players: IPlayer[];
}