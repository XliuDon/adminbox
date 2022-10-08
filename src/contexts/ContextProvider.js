import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const themeMode = localStorage.getItem('themeMode');
    const colorMode = localStorage.getItem('colorMode');
    const sideBarBg = localStorage.getItem('sideBarBg')
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState(colorMode ? colorMode : '#03C9D7');
    const [currentMode, setCurrentMode] = useState(themeMode ? themeMode : 'light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentSideBarBg, setSurrentSideBarBg] = useState('white');
    
    const setSideBarBg=(bgType)=>{
        setSurrentSideBarBg(bgType);
        localStorage.setItem('sideBarBg', bgType);
    }

    const setMode =(mode)=>{
        setCurrentMode(mode);
        localStorage.setItem('themeMode', mode);
    }

    const setColor =(color)=>{
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    }

    const saveToken = useToken => {
        sessionStorage.setItem('token', useToken);
        setToken(useToken);
      };

    const getToken = ()=>{
        return sessionStorage.getItem("token");
    }
    const [token, setToken] = useState(getToken());
    
    const handleClick = (clicked) =>{
        switch(clicked){
            case 'notification':                
                  break;
            default:
                break;
        }
        setIsClicked({...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked, 
            setIsClicked,
            handleClick,
            screenSize, 
            setScreenSize,
            currentColor, 
            currentMode, 
            themeSettings, 
            setThemeSettings,
            setMode,
            setColor,
            sideBarBg,
            setSideBarBg,
            useToken: {setToken: saveToken, token}
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext);