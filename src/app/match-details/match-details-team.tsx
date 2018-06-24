import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { MatchDetailsPlayer } from "./match-details-player";
import { IMatchDetailsTeamProps } from "./match-details.model";

export class MatchDetailsTeam extends Component<IMatchDetailsTeamProps, any> {
    render() {
        const matchDetailsTeam = (
            <div class="match-details-team">
                <div class="match-details-team__team">
                    {Translations.replaceTokens(Translations.matchDetails.team.team, this.props.team.team + 1)}
                </div>

                {this.props.team.players.map(player => <MatchDetailsPlayer key={player.position} player={player} />)}

                <div class="match-details-team__score">
                    {Translations.replaceTokens(Translations.matchDetails.team.score, this.props.team.score)}
                </div>
            </div>
        );

        return matchDetailsTeam;
    }
}