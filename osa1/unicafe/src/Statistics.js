import React from 'react';

export const Statistics = (props) => {

    const tilasto = props.tilasto
    const keskiarvo = (tilasto.hyvat * 1 + tilasto.huonot * -1) / tilasto.painallukset
    const positiiviset = tilasto.hyvat / tilasto.painallukset

    return (
        <div>
            <h1>statistiikka</h1>
            {tilasto.painallukset === 0 ? (
                <p>ei yhtään palautetta annettu</p>
            ) : (
                    <table>
                        <tbody>
                            <Statistic nimi='hyvä' arvo={tilasto.hyvat} />
                            <Statistic nimi='neutraali' arvo={tilasto.neutraalit} />
                            <Statistic nimi='huonot' arvo={tilasto.huonot} />
                            <Statistic nimi='keskiarvo' arvo={keskiarvo} />
                            <Statistic nimi='positiiviset' arvo={(positiiviset * 100) + ' %'} />
                        </tbody>
                    </table>
                )}

        </div>
    )
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.nimi}</td><td>{props.arvo}</td>
        </tr>
    )
}

