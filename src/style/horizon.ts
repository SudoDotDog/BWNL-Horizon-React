/**
 * @author WMXPY
 * @namespace Style
 * @description Horizon
 */

import { StyleManager, Styles } from "@sudoo/jss";

const horizonStyleBase: Styles = {

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
