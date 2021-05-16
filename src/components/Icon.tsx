import React, { SVGAttributes, useEffect } from 'react'
import { ValencyConfig } from '@valencyhq/valency'
import { useValency } from '../providers/ValencyProvider'

export type IconProps = SVGAttributes<SVGElement> &
      Partial<ValencyConfig> & {
            name: string
            color?: string
      }

const Icon = (props: IconProps) => {
      const { getConfig, loadSprite } = useValency()
      const { name, color, uid, project, library } = props

      const config = getConfig({
            uid,
            project,
            library,
      })

      useEffect(() => {
            loadSprite(config)
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [config])

      return (
            <svg {...props} style={{ ...props.style, color }}>
                  <use xlinkHref={`#${config.library}_${name}`} />
            </svg>
      )
}

export default Icon
