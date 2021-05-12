import Valency, { ValencyConfig } from '@valencyhq/valency'
import createCtx from '../utils/useCtx'

export const [useValencyContext, ValencyProvider] = createCtx<Valency>()

export const useValency = () => {
      const valency = useValencyContext()

      return {
            get(
                  assetName: string,
                  config?: Partial<ValencyConfig> | undefined
            ) {
                  return valency.get(assetName, config)
            },
            getConfig(otherConfig?: Partial<ValencyConfig> | undefined) {
                  return valency.getConfig(otherConfig)
            },
            setConfig(otherConfig: Partial<ValencyConfig>) {
                  valency.setConfig(otherConfig)
            },
            asset: valency.asset,
      }
}
