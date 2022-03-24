import React, { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { GridItem } from './components/GridItem'
import { levels } from './helpers/imc'

export default function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () =>{
    if(heightField && weightField){

    }else{
      alert('Digite todos os campos.');
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input type="number" value={heightField > 0 ? heightField : ''} onChange={(e)=>{
           setHeightField(parseFloat(e.target.value))
          }} placeholder="Digite a sua altura. Ex: 1.5 (em metros)" />

          <input type="number" value={weightField > 0 ? weightField : ''} onChange={(e)=>{
           setWeightField(parseFloat(e.target.value))
          }} placeholder="Digite o seu peso. Ex: 75.3 (em kg)" />

          <button onClick={handleCalculateButton}>Calcular</button>


        </div>

        <div className={styles.rightSide}>

          <div className={styles.grid}>
          
            {levels.map((item,key)=>{
              return <GridItem item={item} key={key}/>
            })}
          </div>

        </div>

      </div>
    </div>
  )
}
