import { useContext } from 'react'
import { ValencyContext } from '../contexts/ValencyContext'

const useValency = () => {
      const valencyContext = useContext(ValencyContext)

      return {
            get: valencyContext.get,
            getConfig: valencyContext.getConfig,
            setConfig: valencyContext.setConfig,
            asset: valencyContext.asset,
      }
}

export default useValency
