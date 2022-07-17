const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#fafafa';
const SILVER = '#bdc3c7';
const NERO = '#4a4a4a';
const ROYAL_BLUE = '#246EE9';
const SEA_BLUE = '#006994';
const DARK_ONYX = '#080D0E'
const BRIGHT_BLUE = '#0096FF'
const BEST_BLUE = '#2d65a4'
const BLUE_SECONDARY = '#A5DEF2'
const ORANGE = '#F7A400'
const ORANGE_JUICE = '#fd7702'
const ORANGE_DARK = '#ff5003'
const PUMPKIN = '#F37413'
const DISABLED = '#d3d3d3'
const LIGHT_ORANGE = '#ffd8a7'

const common = {
    SUCCESS: EMERALD,
    ERROR: ALIZARIN,
    TRANS_WHITE: '#FFFFFF50',
    TRANS_BLACK: 'rgba(0,0,0,0.45)'
};

const light = {
    ...common,
    BACKGROUND: '#fff',
    TEXT: DARK_ONYX,
    TEXT_SECONDARY: ASBESTOS,
    PRIMARY: BEST_BLUE,
    SECONDARY: BLUE_SECONDARY,
    TEXT_BUTTON: CLOUDS,
    DISABLED: DISABLED,
};

const dark = {
    ...common,
    BACKGROUND: '#171F24',
    TEXT: CLOUDS,
    TEXT_SECONDARY: SILVER,
    PRIMARY: PUMPKIN,
    SECONDARY: LIGHT_ORANGE,
    TEXT_BUTTON: DARK_ONYX,
    DISABLED: DISABLED,
};

export const colors = { light, dark };