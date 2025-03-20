import type {FC} from 'react';

export type IconProps = {
    name: string
}

export const Icon: FC<IconProps> = props => {
    const {name} = props
    return <span className="material-icons">{name}</span>
}