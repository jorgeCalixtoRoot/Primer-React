import  './Perfil.css'

const Perfil = () => {

    const nameUser: string = 'Jorge'
    const proffession: string = ' Desarrollador de Software'
    const completedModules:number = 3
    const isActive:boolean = true
  return (
    <div className='card-profile'>
      <h2 className="name">{nameUser}</h2>
      <p className="proffession">{proffession}</p>
      <p className='p'>Modulos restantes para graduarte {10 - completedModules}</p>
      {isActive? < span className='tag-state'>En linea</span> : null }
    </div>
  )
}

export default Perfil