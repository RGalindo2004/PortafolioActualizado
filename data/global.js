const global = (path) => {
    return {
        title: 'Portafolio de Ramiro Galindo',
        menuOptions: getMenuWithActivePath(path)
    };
}

const getMenuWithActivePath = (path) => {
    return [
        {
            label: 'Sobre Mí',
            url: '#sobremi',
            page: 'sobremi'
        },
        {
            label: 'Mis Proyectos',
            url: '#proyectos',
            page: 'proyectos'
        },
        {
            label: 'Contactame',
            url: '#contactame',
            page: 'contactame'
        }
    ].map(o => {
        return {
            ...o,
            active: path.includes(o.url)
        };
    });
}

export default global;