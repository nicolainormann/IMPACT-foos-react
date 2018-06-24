import { Component, h } from "preact";
import { Translations } from "../../translations/translations";
import { IMatchDetailsPlayerProps } from "./match-details.model";

export class MatchDetailsPlayer extends Component<IMatchDetailsPlayerProps, any> {
    render() {
        const matchDetailsPlayer = (
            <div class="match-details-player">
                {Translations.matchDetails.player.player}

                <div class="match-details-player__frame">
                    {this.props.player.username}
                </div>
            </div>
        );

        return matchDetailsPlayer;
    }
}