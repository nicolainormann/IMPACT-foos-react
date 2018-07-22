import { ICallback } from "../global/callback";

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