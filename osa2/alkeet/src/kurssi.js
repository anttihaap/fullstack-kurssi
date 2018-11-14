import React from 'react'

const Otsikko = ({ otsikko }) => {
  return <h1>{otsikko}</h1>
}

const Sisalto = ({ osat }) => {
  return (
    <div>
      {osat.map(osa => (
        <Osa key={osa.id} osa={osa} />
      ))}
    </div>
  )
}

const Osa = ({ osa }) => {
  return (
    <p>
      {osa.nimi} {osa.tehtavia}
    </p>
  )
}

const Yhteensa = ({ osat }) => {
  const sum = osat.reduce((acc, val) => acc + val.tehtavia, 0)
  return <p>yhteensä {sum} tehtävää</p>
}

const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko otsikko={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

export default Kurssi
