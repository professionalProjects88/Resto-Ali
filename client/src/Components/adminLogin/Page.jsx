import React from 'react'
import "./page.css"
const Page = () => {
  return (
    <div className='adminLoginContainer'>
    <form>
      <h1>Bienvenu Monsieu L'admine</h1>
      <label htmlFor="adrs">Nom :</label><br />
      <input type="text" id="nm" name="nm" required /><br /><br />
      <label htmlFor="mdp">Mot de pass :</label><br />
      <input type="password" id="psw" name="psw" required /><br />
      <span style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button style={{marginTop:20}}>Login</button>
      </span>
    </form>
    </div>
  )
}

export default Page
