import { IAddMatchModel, IAddMatchPlayerModel, IAddMatchTeamModel } from "../add-match/add-match.model";

//#region AddMatch
export interface IMatchDetailsProps {
    match: IAddMatchModel;
}
//#endregion

//#region AddMatchTeam
export interface IMatchDetailsTeamProps {
    team: IAddMatchTeamModel;
}
//#endregion

//#region AddMatchPlayer
export interface IMatchDetailsPlayerProps {
    player: IAddMatchPlayerModel;
}
//#endregion