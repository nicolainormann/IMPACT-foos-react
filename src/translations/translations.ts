export class Translations {
    static global = {
        name: "IMPACT Foos",
    };

    static routes = {
        addMatch: {
            title: "Add match",
            url: "/"
        },
        standing: {
            title: "Standing",
            url: "/standing"
        }
    };

    static header = {
        logoText: "foos"
    };

    static addMatch = {
        player: {
            selectPlaceholder: "Choose player"
        }
    };

    static matchDetails = {
        team: {
            team: "Team {0}",
            score: "Score {0}"
        },
        player: {
            player: "Player"
        }
    };

    static replaceTokens(translation: string, ...tokens: any[]): string {
        for (let i = 0; i < tokens.length; i++) {
            translation = translation.replace(`{${i}}`, tokens[i]);
        }

        return translation;
    }
}