import React, { SVGAttributes } from 'react'
import { ValencyConfig } from '@valencyhq/valency'
import useValency from '../hooks/useValency'

export type IconProps = SVGAttributes<SVGElement> &
      Partial<ValencyConfig> & {
            name: string
            color?: string
      }

const Icon = (props: IconProps) => {
      const { get } = useValency()
      const { name, color } = props

      return (
            <svg {...props} style={{ ...props.style, color }}>
                  <use
                        xlinkHref={`${get('icons.svg', {
                              uid: props.uid,
                              project: props.project,
                              library: props.library,
                        })}#${name}`}
                  />
            </svg>
      )
}

export default Icon
