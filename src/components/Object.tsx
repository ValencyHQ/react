import { ValencyConfig } from '@valencyhq/valency'
import React, { ImgHTMLAttributes } from 'react'
import useValency from '../hooks/useValency'

export type ObjectProps = ImgHTMLAttributes<HTMLObjectElement> &
      Partial<ValencyConfig> & {
            name: string
      }

const Object = (props: ObjectProps) => {
      const { get } = useValency()
      const { name } = props

      return (
            <object
                  {...props}
                  data={get(name, {
                        uid: props.uid,
                        project: props.project,
                        library: props.library,
                  })}
            />
      )
}

export default Object
