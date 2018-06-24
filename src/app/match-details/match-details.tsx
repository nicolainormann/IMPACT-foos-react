import { Component, h } from "preact";
import { MatchDetailsTeam } from "./match-details-team";
import { IMatchDetailsProps } from "./match-details.model";

export class MatchDetails extends Component<IMatchDetailsProps, any> {
    render() {
        const matchDetails = (
            <div class="match-details">
                {this.props.match.teams.map(team => <MatchDetailsTeam key={team.team} team={team} />)}
            </div>
        );

        return matchDetails;
    }
}