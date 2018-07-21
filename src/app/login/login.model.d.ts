import { ICallback } from "../global/callback";

export interface ILoginModel {
    email: string;
    password: string;
}

export interface ILoginStateModel {
    create: boolean;
    form: ILoginModel;
}

export interface ILoginProps {
    onLoginChange: ICallback<ILoginModel>;
}

export interface ILoginCreateUserStateModel extends ILoginModel {
    confirmPassword: string;
}