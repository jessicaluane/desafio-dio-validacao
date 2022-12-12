export interface IButtonProps {
    title: string;
    type: string;
    disabled: boolean;
    children?: React.ReactNode | React.ReactNode[]
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}