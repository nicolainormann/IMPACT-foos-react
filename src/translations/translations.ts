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
        },
        logout: {
            title: "Logout"
        }
    };

    static header = {
        logoText: "foos"
    };

    static auth = {
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        createUser: "Create user",
        login: "Login"
    };

    static match = {
        team: {
            team: "Team {0}",
            score: "Score"
        },
        player: {
            position: ["Defense", "Offense"],
            selectPlaceholder: "Choose player"
        }
    };

    static replaceTokens(translation: string, ...tokens: any[]): string {
        for (let i = 0; i < tokens.length; i++) {
            translation = translation.replace(`{${i}}`, tokens[i]);
        }

        return translation;
    }
}