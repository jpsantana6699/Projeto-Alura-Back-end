import React from "react";
import styled from "styled-components";

const LabelEstilizada = styled.label<{ darkmode: boolean }>`
    color: ${(props) => props.darkmode ? '#FFF' : '#002F52'};
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px
`

const InputEstilizado = styled.input<{ placeholderAlign: string, darkmode: boolean }>`
    font-size: 16px;
    line-height: 24px;
    padding: 8px 24px;
    border: 1px solid;
    border-radius: 45px;
    &:focus{
        outline: none;
    }
    width: 100%;
    box-sizing: border-box;
    background: ${(props) => props.darkmode ? 'transparent' : '#FFF'};
    border-color: ${(props) => props.darkmode ? '#FFF' : '#002F52'};
    text-align: ${(props) => props.placeholderAlign};
    ::placeholder,
    ::-webkit-input-placeholder  {
        color: ${(props) => props.darkmode ? '#FFF' : '#002F52'};
    }
`

export interface AbCampoTextoProps {
    label?: string;
    placeholder?: string;
    placeholderAlign?: 'left' | 'center' | 'right';
    value: string;
    type?: 'text' | 'email' | 'password' | 'date';
    onChange: (value: string) => void
    darkmode?: boolean
}

export const AbCampoTexto = ({ 
        label, 
        value, 
        onChange, 
        type = 'text', 
        placeholder = "", 
        placeholderAlign = 'left', 
        darkmode = false 
}: AbCampoTextoProps) => {
    return (
        <div>
            {label && <LabelEstilizada darkmode={darkmode}>
                {label}
            </LabelEstilizada>}
            <InputEstilizado
                placeholder={placeholder}
                placeholderAlign={placeholderAlign}
                darkmode={darkmode}
                type={type}
                value={value}
                onChange={event => onChange(event.target.value)}
            />
        </div>
    )
}
