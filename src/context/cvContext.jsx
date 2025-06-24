import { createContext, useContext, useEffect, useState } from 'react';

const CvContext = createContext();

export const useCv = () => useContext(CvContext);

export const CvProvider = ({ children }) => {
    const [cv, setCv] = useState({});

    useEffect(() => {
        fetch('/cv.json')
            .then(res => res.json())
            .then(setCv)
            .catch(err => console.error('Error cargando CV:', err));
    }, []);

    return (
        <CvContext.Provider value={cv}>
            {children}
        </CvContext.Provider>
    );
};
