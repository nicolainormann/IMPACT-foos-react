import { Component, h } from "preact";
import { IMatchScoreInputProps } from "./match.model";

export class MatchScoreInput extends Component<IMatchScoreInputProps, any> {
    createTenPoint() {
        const radioArray = [];

        for (let i = 0; i <= 10; i++) {
            const randomId = "radio-" + i.toString() + "-" + Math.floor(Math.random() * 1000);
            radioArray.push(
                <div class={"match-score-input__radio " + (this.props.teamScore.score >= i && "match-score-input__radio_active")}>
                    <label class="match-score-input__radio-label" for={randomId}>{i}</label>
                    <input class="match-score-input__radio-input" name="score" type="radio" id={randomId} value={JSON.stringify({ team: this.props.teamScore.team, score: i })} />
                </div>
            );
        }

        return radioArray;
    }

    render() {
        const matchScoreInput = (
            <div class="match-score-input">
                {this.props.mode === "tenPoint" && this.createTenPoint()}
            </div>
        );

        return matchScoreInput;
    }
}