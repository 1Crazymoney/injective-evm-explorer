import * as React from "react";

export interface IToolbarLogoProps {

}

export class AppLogo extends React.Component<IToolbarLogoProps> {
    render() {
        return (
            <img src={require("assets/injective-small.svg")} width="24px" height="24px" />
        );
    }
}
