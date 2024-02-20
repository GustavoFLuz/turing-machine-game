import { ColorType } from '@/types/theme';
import { useTheme } from 'styled-components';

type Props = {
    size?: string;
    color?: ColorType;
}

export function Check({ size, color }: Props) {
    const theme = useTheme();
    return (
        <svg width={size?size:"1em"} height={size?size:"1em"} viewBox="0 0 24 24" fill="none" stroke={color?theme.colors[color]:theme.colors.green} xmlns="http://www.w3.org/2000/svg" >
            <path style={{translate:"1px 2px"}} strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M17 5L8 15l-5-4"></path>
        </svg>
    )
}