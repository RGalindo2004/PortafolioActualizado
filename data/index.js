
import global from './global';

const getPageContext = ( page ) => {

    let pageVariables = {};
    switch ( page ) {
        case 'global.html':
            pageVariables = index;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;