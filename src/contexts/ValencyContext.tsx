import { createContext } from 'react'
import Valency from '@valencyhq/valency'

const ValencyContext = createContext<Valency | undefined>(undefined)

export default ValencyContext
