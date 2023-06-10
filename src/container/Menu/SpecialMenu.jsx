import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images  } from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
        <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title="El Menù que Deleita Tù Paladar" />
            <h1 className="headtext__cormorant">Especiales Del Dìa</h1>
        </div>
    
            <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
            <p className="app__specialMenu-menu_heading">Vinos & Cervezas</p>
            <div className="app__specialMenu_menu_items">
                {data.wines.map((wine, index) => (
                /* 
                    1. Estamos usando una propiedad llamada clave para asignar un valor único a cada    componente MenuItem.
                    Esto se hace para que React pueda realizar un seguimiento de cada componente MenuItem en el DOM.
                    2. Estamos pasando los accesorios del componente CocktailList al componente MenuItem.
                    3. Estamos usando el método map() para iterar sobre la matriz de cócteles.
                    El método map() se usa para crear una nueva matriz a partir de una existente.
                    Toma un parámetro, que es una función de devolución de llamada.
                    La función de devolución de llamada toma dos argumentos, que son los siguientes:
                        a. El valor actual que se está procesando.
                        b. El índice del valor actual en la matriz.
                    4. La función de devolución de llamada devuelve una nueva matriz.
                    La nueva matriz contiene los componentes MenuItem. 
                    */
                <MenuItem 
                    key={wine.title + index} 
                    title={wine.title} 
                    price={wine.price} 
                    tags={wine.tags} 
                />
                ))}

            </div>
        </div>
    
            <div className="app__specialMenu-menu_img">
                <img src={images.menu} alt="menu__img" />
            </div>
    
            <div className="app__specialMenu-menu_cocktails  flex__center">
                <p className="app__specialMenu-menu_heading">Cocktails</p>
                <div className="app__specialMenu_menu_items">
                    {data.cocktails.map((cocktail, index) => (
                    
                    /* 
                    1. Estamos usando una propiedad llamada clave para asignar un valor único a cada    componente MenuItem.
                    Esto se hace para que React pueda realizar un seguimiento de cada componente MenuItem en el DOM.
                    2. Estamos pasando los accesorios del componente CocktailList al componente MenuItem.
                    3. Estamos usando el método map() para iterar sobre la matriz de cócteles.
                    El método map() se usa para crear una nueva matriz a partir de una existente.
                    Toma un parámetro, que es una función de devolución de llamada.
                    La función de devolución de llamada toma dos argumentos, que son los siguientes:
                        a. El valor actual que se está procesando.
                        b. El índice del valor actual en la matriz.
                    4. La función de devolución de llamada devuelve una nueva matriz.
                    La nueva matriz contiene los componentes MenuItem. 
                    */
                    <MenuItem 
                        key={cocktail.title + index} 
                        title={cocktail.title} 
                        price={cocktail.price} 
                        tags={cocktail.tags} 
                    />

                    ))}
                </div>
            </div>
        </div>
    
        <div style={{ marginTop: 15 }}>
            <button type="button" className="custom__button">Explorar Menù</button>
        </div>
        </div>
);

export default SpecialMenu;
