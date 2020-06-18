

export const getState = ((getStore, getActions, setStore) => {
    return {
        store: {
            characters: [],
            planets: [],
            character: [],
            planet: []
        },
        actions: {
            getCharacters: async (url) => {
                const resp = await fetch(url);
                const dataCharacters = resp.json();
                setStore({
                    characters: dataCharacters
                })
            },
            getPlanets: async (url) => {
                const resp = fetch(url);
                const dataPlanets = await resp.json();
                setStore({
                    planets: dataPlanets
                })
            }

        }
    }
})