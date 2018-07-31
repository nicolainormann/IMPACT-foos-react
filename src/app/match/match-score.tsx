import { Component, h } from "preact";
import { MatchScoreInput } from "./match-score-input";
import { IMatchScore, IMatchScoreProps, IMatchScoreState } from "./match.model";

export class MatchScore extends Component<IMatchScoreProps, IMatchScoreState> {
    state: IMatchScoreState = {
        teamScores: [
            { team: 0, score: 0 },
            { team: 1, score: 0 }
        ],
        valid: false
    };

    onScoreChange = (value: IMatchScore) => {
        this.setState((current: IMatchScoreState) => {
            const newState = current;
            newState.teamScores[value.team] = value;

            switch (this.props.mode) {
                case "tenPoint":
                    if (value.score < 10) {
                        newState.teamScores[value.team ^ 1].score = 10;
                    }
                    newState.valid = value.score !== newState.teamScores[value.team ^ 1].score;
                    break;
            }

            return newState;
        }, () => this.props.onScoreChange(this.state));
    }

    render() {
        const matchScore = (
            <div class="match-score">
                {this.state.teamScores.map(teamScore => <MatchScoreInput key={teamScore.team} teamScore={teamScore} mode={this.props.mode} onScoreChange={this.onScoreChange} />)}
            </div>
        );

        return matchScore;
    }
}