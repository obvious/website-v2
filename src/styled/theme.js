/*
    https://github.com/system-ui/theme-specification
 */

import {between} from 'polished';

const theme = {
    navHeight: between('32px','64px'),
    containerSizes: {
        default: '70vw',
        mobile: '90vw'
    },
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [
        between('32px','64px'),
        between('24px','48px'),
        between('20px','40px'),
        between('18px','36px'),
        between('16px','32px'),
        between('11px','22px'),
    ],
    lineHeights: [
        between('38px','76px'),
        between('28.5px','57px'),
        between('24px','48px'),
        between('23.5px','47px'),
        between('16px','32px'),
        between('16px','32px'),
    ],
    spacings: [
        between('100px','200px'),
        between('60px','120px'),
        between('40px','80px'),
        between('20px','40px'),
        between('12px','24px'),
    ],
    paddings: [
        between('12px','24px'),
        between('10px','20px'),
        between('8px','16px'),
        between('6px','12px'),
        between('4px','8px'),
        between('2px','4px'),
    ],
    colors: {
        blue: '#0070E0',
        black: '#000',
        lighterBlack: '#3E4B52',
        white: '#fff',
        orange: '#FFB399'
    },
    backgrounds: {
        gray: 'rgba(10, 73, 100, 0.1)'
    },
    breakpoints: {
        small: '40em',
        medium: '52em',
        large: '64em'
    }
};

export default theme;