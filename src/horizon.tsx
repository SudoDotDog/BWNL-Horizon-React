/**
 * @author WMXPY
 * @namespace Horizon
 * @description Horizon
 */

import { mergeClasses } from "@sudoo/jss";
import * as React from "react";
import { horizonStyle } from "./style/horizon";

export type HorizonProps = {

    readonly className?: string;
};

export class Horizon extends React.Component<HorizonProps> {

    private _div: HTMLDivElement | null = null;

    private readonly _horizonStyle = horizonStyle.use();

    public constructor(props: HorizonProps) {

        super(props);

        this._mountRef = this._mountRef.bind(this);
        this._handleNormalMode = this._handleNormalMode.bind(this);
        this._handleAggressiveMode = this._handleAggressiveMode.bind(this);
    }

    public componentWillUnmount() {

        if (this._div) {
            this._div.removeEventListener('wheel', this._handleNormalMode);
        }
    }

    public render() {

        return (<div
            className={mergeClasses(
                this._horizonStyle.wrapper,
                this.props.className,
            )}
            ref={this._mountRef}
        >
            {this.props.children}
        </div>);
    }

    private _mountRef(ref: HTMLDivElement) {

        if (this._div) {
            return;
        }
        if (ref) {
            this._div = ref;
            ref.addEventListener('wheel', this._handleNormalMode);
        }
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
