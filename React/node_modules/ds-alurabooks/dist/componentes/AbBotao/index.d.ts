/// <reference types="react" />
export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClick?: () => void;
}
export declare const AbBotao: ({ texto, onClick, tipo }: AbBotaoProps) => JSX.Element;
