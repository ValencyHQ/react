import { useContext } from 'react'
import ValencyContext from '../contexts/ValencyContext'

const useValency = () => {
      const valencyContext = useContext(ValencyContext)

      return valencyContext
            ? {
                    get: valencyContext.get,
                    getConfig: valencyContext.getConfig,
                    setConfig: valencyContext.setConfig,
                    asset: valencyContext.asset,
              }
            : {
                    get: () => undefined,
                    getConfig: () => undefined,
                    setConfig: () => undefined,
                    asset: undefined,
              }
}

export default useValency
