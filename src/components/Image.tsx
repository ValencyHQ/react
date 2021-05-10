import { ValencyConfig } from '@valencyhq/valency'
import React, { ImgHTMLAttributes } from 'react'
import useValency from '../hooks/useValency'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
      Partial<ValencyConfig> & {
            name: string
      }

const Image = (props: ImageProps) => {
      const { get } = useValency()
      const { name } = props

      return (
            <img
                  {...props}
                  src={get(name, {
                        uid: props.uid,
                        project: props.project,
                        library: props.library,
                  })}
            />
      )
}

export default Image
