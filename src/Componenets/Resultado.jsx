// eslint-disable-next-line react/prop-types
const Resultado = ({ res }) => {
      return (
        <div>
          <label>Resultado</label>
          <input type="text" value={res} readOnly />
        </div>
      )
    }
    
    export default Resultado;