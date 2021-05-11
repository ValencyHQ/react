import React, { createContext, FC, ReactNode } from 'react'
import Valency from '@valencyhq/valency'

export const ValencyContext = createContext<Valency>(
      new Valency({ uid: '', project: '', library: '' })
)

export interface ValencyProviderProps {
      children: ReactNode
      valency: Valency
}

const ValencyProvider: FC<ValencyProviderProps> = ({
      children,
      valency,
}: ValencyProviderProps) => {
      return (
            <ValencyContext.Provider value={valency}>
                  {children}
            </ValencyContext.Provider>
      )
}

export default ValencyProvider
