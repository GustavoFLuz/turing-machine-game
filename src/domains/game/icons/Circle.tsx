import { ColorType } from '@/types/theme';
import { useTheme } from 'styled-components';

type Props = {
    size?: string;
    color?: ColorType;
}

export function Circle({ size, color }: Props) {
    const theme = useTheme();
    return (
        <svg width={size?size:"1em"} height={size?size:"1em"} viewBox="0 0 24 24" fill={color?theme.colors[color]:theme.colors.purple} xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:"bottom"}}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"></path>
        </svg>
    )
}