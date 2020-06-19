
export const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: null,
            planets: null,
            character: null,
            planet: null,
            favorite: [],
        },
        actions: {
            getCharacters: async (url) => {
                const resp = await fetch(url);
                const dataCharacters = await resp.json();
                setStore({
                    characters: dataCharacters
                })
            },
            getPlanets: async (url) => {
                const resp = await fetch(url);
                const dataPlanets = await resp.json();
                setStore({
                    planets: dataPlanets
                })
            },
            getCharacter: async (url) => {
                const resp = await fetch(url);
                const dataCharacter = await resp.json();
                setStore({ character: dataCharacter })
            },
            getPlanet: async (url) => {
                const resp = await fetch(url);
                const dataPlanet = await resp.json();
                setStore({ planet: dataPlanet })
            },
            addFavorite: (personaje) => {
                setStore({
                    favorite: getStore().favorite.concat(personaje)
                })
            },
            removeFavorite: (personaje) => {
                setStore({
                    favorite: getStore().favorite.filter(fav => fav !== personaje)
                })
            }




        }
    }
}