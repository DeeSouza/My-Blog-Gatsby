const getThemeColor = () => {
    const theme = typeof window !== 'undefined' && window.__theme;

    if(theme === 'light') return "#FFFFFF";
    
    return "#16202c";
}

export default getThemeColor;