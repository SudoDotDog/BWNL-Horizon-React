/**
 * @author WMXPY
 * @namespace Horizon
 * @description Horizon
 */

import * as React from "react";

export type HorizonProps = {

    readonly className?: string;
};

export class Horizon extends React.Component<HorizonProps> {

    private _div: HTMLDivElement | null = null;

    public constructor(props: HorizonProps) {

        super(props);

        this._handleNormalMode = this._handleNormalMode.bind(this);
    }

    public componentWillUnmount() {

        if (this._div) {
            this._div.removeEventListener('wheel', this._handleNormalMode);
        }
    }

    public render() {

        return (<div
            className={this.props.className}
            ref={(ref: HTMLDivElement) => {
                if (this._div) {
                    return;
                }
                if (ref) {
                    this._div = ref;
                    ref.addEventListener('wheel', this._handleNormalMode);
                }
            }}
        >
            {this.props.children}
        </div>);
    }

    private _handleNormalMode(e: WheelEvent) {

        if (!this._div) {
            return;
        }

        if (this._div.clientWidth === this._div.scrollWidth) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        this._div.scrollTo({
            left: this._div.scrollLeft + e.deltaY,
        });
    }

    private _handleAggressiveMode(e: WheelEvent) {

        if (!this._div) {
            return;
        }

        if (e.deltaY >= 0) {
            if (this._div.scrollLeft + this._div.clientWidth === this._div.scrollWidth) {
                return;
            }
        } else {
            if (this._div.scrollLeft === 0) {
                return;
            }
        }

        e.preventDefault();
        e.stopPropagation();

        this._div.scrollTo({
            left: this._div.scrollLeft + e.deltaY,
        });
    }
}
