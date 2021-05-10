import { createContext } from 'react'
import Valency from '@valencyhq/valency'

const ValencyContext = createContext<Valency>(
      new Valency({ uid: '', project: '', library: '' })
)

export default ValencyContext
