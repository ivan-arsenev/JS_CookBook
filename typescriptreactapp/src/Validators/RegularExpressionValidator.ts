import { StringOrNull } from '../Types';
import { IValidator } from './IValidator';

export class RegularExpressionValidator implements IValidator<StringOrNull> {
    private regex: RegExp;
    constructor(expression: string) {
        this.regex = new RegExp(expression);
    }
    public IsValid(input: StringOrNull): boolean {
        if (!input) {
            return false;
        }
        return this.regex.test(input);
    }
}
