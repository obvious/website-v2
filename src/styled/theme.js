/*
    https://github.com/system-ui/theme-specification
 */

import {between} from 'polished';

const theme = {
    navHeight: between('32px','64px'),
    captionWidth: between('110px', '220px' ),
    containerSizes: {
        default: '80vw',
        small: '90vw'
    },
    fontSizes: [
        between('32px','64px'), //h1
        between('24px','48px'), //h2
        between('20px','40px'), //h3
        between('18px','36px'), //body text 1
        between('16px','32px'), //body text 2
        between('11px','22px'), //body text 3
        between('9px','18px'), //caption text
        between('11px','16px'), // not proportional
        between('12px', '24px') //news card headline size
    ],
    lineHeights: [
        between('38px','76px'), //h1
        between('28.5px','57px'), //h2
        between('24px','48px'), //h3
        between('23.5px','47px'), //body text 1
        between('16px','32px'), //body text 2
        between('16px','32px'),  //body text 3
        between('13px','27px'), //caption text
        between('16px','24px'), //not proportional
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
    borderRadii: {
        small:  between('4px','8px'),
        smaller: between('2px','4px')
    },
    boxShadows: {
        specialCard: '0px 4px 16px rgba(0, 0, 0, 0.16)'
    },
    colors: {
        blue: '#0070E0',
        black: '#000',
        lightBlack: '#1F2629',
        lighterBlack: '#3E4B52',
        white: '#fff',
        orange: '#FFB399',
        gray: 'rgba(10, 73, 100, 0.1)',
        darkgray: '#5E6366'
    },
    backgrounds: {
        gray: 'rgba(10, 73, 100, 0.1)',
        orange: '#EF6031',
        white: '#fff',
    },
    breakpoints: {
        small: '40em',
        medium: '52em',
        large: '64em'
    }
};

export default theme;