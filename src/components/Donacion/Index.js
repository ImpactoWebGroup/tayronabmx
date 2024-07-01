import React, { useState } from 'react';
import { DonacionButton } from '../DonacionButton/Index';
import './Donacion.css';

function Donacion() {
    const [body, setBody] = useState({ mountInitialState: '0' });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setBody({
        ...body,
        [name]: value,
        });
        console.log(body.mountInitialState)
    };

    return (
        <div className='donaciones'>
            <h2>Donaciones</h2>
            <section className='dona' id="donar">
                <div className="donacion">
                    <h2>¿Quieres Donar?</h2>
                    <div className="donacion--buttonsContainer">
                        <p>${body.mountInitialState} COP</p>
                    </div>
                    <div className="donacion--montoContainer">
                        <input
                            className="donacion--montoContainer__input"
                            type="number"
                            name="mountInitialState"
                            onChange={handleChange}
                            value={body.mountInitialState}
                            placeholder="Ingresar monto"
                            required
                        />
                        <DonacionButton
                            mountTitle="Donar"
                            mount={body.mountInitialState}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export { Donacion };