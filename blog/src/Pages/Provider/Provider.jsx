import Context from 'Pages/Context/Context';
import { useState } from 'react';

const Provider = ( {children} ) => {

    const [token, setToken] = useState(null);
    const [idUser, setIdUser] = useState(null);

    return (
        <>
        <Context.Provider value={ {token, setToken, idUser, setIdUser} }>

            {children}

        </Context.Provider>
        </>
    );
}

export default Provider;