import Valency from '@valencyhq/valency'
import createCtx from '../utils/useCtx'

export const [useValency, ValencyProvider] = createCtx<Valency>()
