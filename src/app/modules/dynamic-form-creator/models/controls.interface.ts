export interface Controls {
    id:string,
    label:string,
    value: string | number,
    type:string,
    validators:Validators | null
}

export interface Validators {
    required?:boolean,
    minLength?:number,
    maxLength?:number
}

export class TextBox implements Controls{
    id = '';
    label = 'text'
    value = ''
    type = 'TextBox'
    validators = null;
}

