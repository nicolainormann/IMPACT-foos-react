import { ICallback } from "../global/callback";
import { IPlayer } from "../global/player";

export interface IAuthModel {
    email: string;
    password: string;
}

export interface IAuthStateModel {
    create: boolean;
    form: IAuthModel;
}

export interface IAuthProps {
    onAuthChange: ICallback<IAuthModel>;
}

export interface IAuthCreateUserStateModel extends IAuthModel {
    confirmPassword: string;
}

export interface IAuthProfileStateModel {
    displayName: string;
    photoURL: string | null;
}

export interface IAuthProfilePropsModel {
    onProfileUpdated?: ICallback<firebase.User | null>;
}

export interface IAuthProfileImagePropsModel {
    photoURL: string | null;
}