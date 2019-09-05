/**
 * @author WMXPY
 * @namespace Style
 * @description Horizon
 */

import { JSSStyle, StyleManager } from "@sudoo/jss";

const horizonStyleBase: JSSStyle = {

    wrapper: {

        overflow: 'auto',
    },
    scroll: {

        overflowX: 'scroll',
    },
    flex: {

        display: 'flex',
    },
};

export const horizonStyle: StyleManager = StyleManager.create(horizonStyleBase, 'Horizon').setPrefix('BWNL-Horizon-');
