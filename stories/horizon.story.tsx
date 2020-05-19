/**
 * @author WMXPY
 * @namespace Horizon
 * @description Horizon
 * @override Story
 */

import * as React from 'react';
import { Horizon } from "../src";

// tslint:disable-next-line: no-default-export
export default {
    title: 'Horizon',
};

export const Overflow = () => {

    return (<Horizon>
        <div style={{ display: 'flex', fontSize: '20px' }}>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
            <div style={{ padding: '15px' }}>Content</div>
        </div>
    </Horizon>);
};

export const Inline = () => {

    return (<div>
        <Horizon>
            <div style={{ display: 'flex', fontSize: '20px' }}>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
            </div>
        </Horizon>
        <Horizon>
            <div style={{ display: 'flex', fontSize: '20px' }}>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
                <div style={{ padding: '15px' }}>Content</div>
            </div>
        </Horizon>
    </div>);
};

export const Flex = () => {

    return (<Horizon flex style={{ fontSize: '20px' }}>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
    </Horizon>);
};

export const Scroll = () => {

    return (<Horizon scroll flex style={{ fontSize: '20px' }}>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
        <div style={{ padding: '15px' }}>Content</div>
    </Horizon>);
};
