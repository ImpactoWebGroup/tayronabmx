import React, { useState } from 'react'
import crypto from 'crypto-browserify';



import './DonacionButton.css'

function DonacionButton(props) {
    function generarReferencia() {
        // Generar una secuencia aleatoria de 8 dígitos
        const numerosAleatorios = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');

        // Concatenar el prefijo "AD00" con la secuencia aleatoria
        const referencia = `AD00${numerosAleatorios}`;

        return referencia;
    }

    const [body, setBody] = useState({ referenceState: generarReferencia()})
    const mounts = props.mount*100
    function generateSignature() {
        const currency = "COP";
        const integritySecret = "test_integrity_kbMZBfSe12jWv4lHImbB2417m7ZqW73c";

        // Concatenar los valores necesarios
        const dataToHash = `${body.referenceState}${mounts}${currency}${integritySecret}`;

        // Calcular el hash SHA-256
        const signature = crypto.createHash('sha256').update(dataToHash).digest('hex');

        return signature;
    }
    const signature = generateSignature();


    return(
        <div className='DonacionButton'>
            <form className='donacion--form' action="https://checkout.wompi.co/p/" method="GET">
                {/* <!-- OBLIGATORIOS --> */}
                <input type="hidden" name="public-key" value="pub_prod_UrZGQGUMep5DDJ4F8oPniOpZ9M6OekZA" />
                <input type="hidden" name="currency" value="COP" />
                <input type="hidden" name="amount-in-cents" value={mounts} />
                <input type="hidden" name="reference" value={body.referenceState} />
                <input type="hidden" name="signature:integrity" value={signature}/>
                {/* <!-- OPCIONALES --> */}
                <input type="hidden" name="redirect-url" value="https://www.bmxsantamarta.com" />
                <input type="hidden" name="customer-data:email" value="lola@gmail.com" />
                <input type="hidden" name="customer-data:full-name" value="Lola Flores" />
                <input type="hidden" name="customer-data:phone-number" value="3991111111" />
                <input type="hidden" name="customer-data:legal-id" value="123456789" />
                <input type="hidden" name="customer-data:legal-id-type" value="CC" />
                <input type="hidden" name="shipping-address:address-line-1" value="Calle 123 # 4-5" />
                <input type="hidden" name="shipping-address:country" value="CO" />
                <input type="hidden" name="shipping-address:phone-number" value="3019444444" />
                <input type="hidden" name="shipping-address:city" value="Bogota" />
                <input type="hidden" name="shipping-address:region" value="Cundinamarca" />
                <button type="submit">{props.mountTitle}</button>
                <script type="text/javascript" src="https://checkout.wompi.co/widget.js"></script>
            </form>
        </div>
    )
}

export { DonacionButton }