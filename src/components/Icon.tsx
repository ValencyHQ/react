import React, { SVGAttributes, useEffect } from 'react'
import { ValencyConfig } from '@valencyhq/valency'
import { useValency } from '../providers/ValencyProvider'

export type IconProps = SVGAttributes<SVGElement> &
      Partial<ValencyConfig> & {
            name: string
            color?: string
      }

const Icon = (props: IconProps) => {
      const { get, getConfig } = useValency()
      const { name, color, uid, project, library } = props

      const config = getConfig({
            uid,
            project,
            library,
      })

      useEffect(() => {
            if (document.getElementById(`icons_${config.library}`)) return

            const iconUrl = get('__icons__.svg', config)

            const request = new XMLHttpRequest()
            request.open('GET', iconUrl, true)
            request.send()
            request.onload = () => {
                  const div = document.createElement('div')
                  div.classList.add('valency__sprite_icon')
                  div.innerHTML = request.responseText
                  document.body.insertBefore(div, document.body.childNodes[0])
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [config])

      return (
            <svg {...props} style={{ ...props.style, color }}>
                  <use xlinkHref={`#${config.library}_${name}`} />
            </svg>
      )
}

export default Icon
