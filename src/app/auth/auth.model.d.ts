import { ICallback } from "../../../global/callback";
import { IPlayer } from "../../../global/player";

export interface IAuthLoginState {
    email: string;
    password: string;
}

export interface IAuthState {
    create: boolean;
    form: IAuthLoginState;
}

export interface IAuthProps {
    onAuthChange: ICallback<IAuthLoginState>;
}

export interface IAuthCreateUserState extends IAuthLoginState {
    confirmPassword: string;
}

export interface IAuthProfileState {
    displayName: string;
    photoURL: string | null;
}

export interface IAuthProfileProps {
    onProfileUpdated?: ICallback<firebase.User | null>;
}

export interface IAuthProfileImageProps {
    photoURL: string | null;
}