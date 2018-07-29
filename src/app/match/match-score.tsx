import { Component, h } from "preact";
import { IMatchScorePropsModel } from "./match.model";

export class MatchScore extends Component<IMatchScorePropsModel, any> {
    state = {
        score: 0
    };

    createTenPoint() {
        const radioArray = [];

        for (let i = 0; i <= 10; i++) {
            const randomId = "radio-" + i.toString() + "-" + Math.floor(Math.random() * 1000);
            radioArray.push(
                <div className={"match-score__radio " + (this.state.score >= i ? "match-score__radio_active" : "")}>
                    <label class="match-score__radio-label" for={randomId}>{i}</label>
                    <input class="match-score__radio-input" name="score" type="radio" id={randomId} value={i} />
                </div>
            );
        }

        return radioArray;
    }

    onChange = (event: Event) => {
        this.setState({ score: (event.target as HTMLInputElement).value });
    }

    render() {
        const matchScore = (
            <form class="match-score" onChange={this.onChange}>
                {this.createTenPoint()}
            </form>
        );

        return matchScore;
    }
}