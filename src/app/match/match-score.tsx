import { Component, h } from "preact";
import { MatchScoreInput } from "./match-score-input";
import { IMatchScore, IMatchScoreProps, IMatchScoreState } from "./match.model";

export class MatchScore extends Component<IMatchScoreProps, IMatchScoreState> {
    state: IMatchScoreState = {
        teamScores: [
            { team: 0, score: 0 },
            { team: 1, score: 0 }
        ]
    };

    onChange = (event: Event) => {
        this.setState((current: IMatchScoreState) => {
            const value = JSON.parse((event.target as HTMLInputElement).value) as IMatchScore;
            const newState = current.teamScores;
            newState[value.team] = value;

            switch (this.props.mode) {
                case "tenPoint":
                    if (value.score < 10) {
                        newState[value.team ^ 1].score = 10;
                    }
                    break;
            }
            return { teamScores: newState };
        });
    }

    render() {
        const matchScore = (
            <form class="match-score" onChange={this.onChange}>
                {this.state.teamScores.map(teamScore => <MatchScoreInput key={teamScore.team} teamScore={teamScore} mode={this.props.mode} />)}
            </form>
        );

        return matchScore;
    }
}