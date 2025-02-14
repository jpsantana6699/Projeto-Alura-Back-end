import { ReactNode } from "react";
export interface AbModalProps {
    children: ReactNode;
    titulo: string;
    aberta: boolean;
    aoFechar: () => void;
}
export declare const AbModal: ({ children, aberta, aoFechar, titulo }: AbModalProps) => JSX.Element;
